import React, { useState } from 'react'
import Input from './inputs/Input'
import person from './../../../public/icons/person.svg'
import email from './../../../public/icons/email.svg'
import sort from './../../../public/icons/sort.svg'
import password from './../../../public/icons/password.svg'
import Button from './buttons/Button'
import iconLogin from '../../../public/icons/icon_login.svg'
import Register from '../../hooks/UseRegister'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'

const RegisterCard = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    companyName: 'EcoSave',
    email: 'arbielbaidi6@gmail.com',
    password: 'arbi2002',
    confirmPassword: 'arbi2002',
    sortId: 'ECOSAVE123456789'
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const result = await Register(formData)
    if (result.success) {
      navigate('/dashboard')
    } else {
      toast.error('Échec de l’enregistrement : ' + result.message) // Afficher l'erreur à l'utilisateur
    }
  }

  return (
    <>
      <div className=' w-[432px] h-auto flex flex-col items-center bg-white border border-white rounded-[22px] p-10 pb-12'>
        <Input icon={person} name='companyName' value={formData.companyName} onChange={handleChange} placeholder="Nom de l'entreprise" />
        <Input icon={email} name='email' value={formData.email} onChange={handleChange} placeholder='Email' type='email' />
        <Input icon={sort} name='sortId' value={formData.sortId} onChange={handleChange} placeholder='ID poubelle' />
        <Input icon={password} name='password' value={formData.password} onChange={handleChange} placeholder='Mot de passe' type='password' />
        <Input icon={password} name='confirmPassword' value={formData.confirmPassword} onChange={handleChange} placeholder='Confirmer mot de passe' type='password' />
      </div>
      <div className='flex justify-end w-[432px]'>
        <Button onClick={handleSubmit} text='Se connecter' icon={iconLogin} row typo='arial-rounded' fontSize='text-[22px]' />
      </div>
    </>
  )
}

export default RegisterCard
