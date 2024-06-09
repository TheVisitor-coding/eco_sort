import bcrypt from 'bcryptjs'
import baseUrl from '../api/BaseURL'
import { toast } from 'react-toastify'

async function Register (formData) {
  // Vérification que les mots de passe correspondent
  if (formData.password !== formData.confirmPassword) {
    return { success: false, message: 'Les mots de passe ne correspondent pas.' }
  }

  try {
    // Rechercher l'entreprise par sortId
    const companiesResponse = await baseUrl.get(`/company?code=${formData.sortId}`)
    const company = companiesResponse.data[0]

    if (!company) {
      return { success: false, message: 'Aucune entreprise correspondante trouvée ou le nom ne correspond pas.' }
    }

    if (company.name.toLowerCase() !== formData.companyName.toLowerCase()) {
      return { success: false, message: "Le nom de l'entreprise ne correspond pas." }
    }

    // Vérifier si l'email existe déjà
    const userResponse = await baseUrl.get(`/account?email=${formData.email}`)
    if (userResponse.data.length > 0) {
      return { success: false, message: 'Email déjà utilisé.' }
    }

    // Crypter le mot de passe
    const encryptedPassword = await bcrypt.hash(formData.password, 10)

    // Créer un compte administrateur
    const adminData = {
      company_id: company.id,
      email: formData.email,
      password: encryptedPassword,
      role: 'admin',
      is_active: 1
    }
    const adminResponse = await baseUrl.post('/user', adminData)
    if (!adminResponse.data) {
      return { success: false, message: 'Échec de l’enregistrement de l’administrateur.' }
    }

    // Créer un compte dans la table account
    const accountData = {
      user_id: adminResponse.data.id, // Supposant que la réponse contient l'id de l'utilisateur créé
      email: formData.email,
      passwod: encryptedPassword // Notez que 'passwod' semble être une faute de frappe, cela devrait être 'password'
    }
    const accountResponse = await baseUrl.post('/account', accountData)
    if (!accountResponse.data) {
      return { success: false, message: 'Échec de l’enregistrement du compte utilisateur.' }
    }

    toast.success('Admin enregistré avec succès!')
    return { success: true, message: 'Admin et  enregistré avec succès!', data: adminResponse.data }
  } catch (error) {
    return { success: false, message: 'Failed to register', error }
  }
}
export default Register
