import React, { useState } from 'react'
import Input from './inputs/Input'
import email from './../../../public/icons/email.svg'
import password from './../../../public/icons/password.svg'
import SwitchButton from './buttons/SwitchButton'
import Button from './buttons/Button'
import iconLogin from '../../../public/icons/icon_login.svg'
import { useNavigate } from 'react-router'
import Login from '../../hooks/UseLogin'
import { toast } from 'react-toastify'

const LoginCard = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: 'arbielbaidi6@gmail.com',
    password: 'arbi2002'

  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const result = await Login(formData)
    if (result.success) {
      navigate('/dashboard')
    } else {
      toast.error(result.message) // Afficher l'erreur à l'utilisateur
    }
  }
  return (
    <div className='w-[500px] h-auto bg-white flex flex-col gap-10 border border-white rounded-[22px] p-10 pb-12  '>
      <div className='flex flex-col items-center '>
        <Input icon={email} name='email' value={formData.email} onChange={handleChange} placeholder='Email' type='email' />
        <Input icon={password} name='password' value={formData.password} onChange={handleChange} placeholder='Mot de passe' type='password' />
      </div>
      <div className='flex flex-row gap-2 '>
        <SwitchButton />
        <p className='font-gothic'>Se souvenir de moi</p>
      </div>
      <div className='flex justify-end w-[432px]'>
        <Button onClick={handleSubmit} text='Se connecter' icon={iconLogin} row typo='arial-rounded' fontSize='text-[22px]' />
      </div>
    </div>
  )
}

export default LoginCard
