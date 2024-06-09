import bcrypt from 'bcryptjs'
import baseUrl from '../api/BaseURL'

async function Login (formData) {
  try {
    // Rechercher l'utilisateur par email
    const userResponse = await baseUrl.get(`/account?email=${formData.email}`)
    const user = userResponse.data[0]
    console.log(user)
    console.log(user.password)
    if (!user) {
      return { success: false, message: 'Email non trouvé.' }
    }

    // Vérifier si le mot de passe correspond
    const passwordIsValid = await bcrypt.compare(formData.password, user.passwod)
    if (!passwordIsValid) {
      return { success: false, message: 'Mot de passe incorrect.' }
    }

    // Si l'email et le mot de passe sont corrects
    return { success: true, message: 'Connexion réussie!', user }
  } catch (error) {
    return { success: false, message: 'Échec de la connexion', error }
  }
}

export default Login
