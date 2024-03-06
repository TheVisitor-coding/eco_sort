import React, { useState } from 'react'
import Input from './inputs/Input'
import email from './../../../public/icons/email.svg'
import password from './../../../public/icons/password.svg'
import SwitchButton from './buttons/SwitchButton'

const LoginCard = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''

  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className='w-[432px] h-auto bg-white flex flex-col gap-10 border border-white rounded-[22px] p-10 pb-12  '>
      <div className='flex flex-col items-center '>
        <Input icon={email} name='email' value={formData.email} onChange={handleChange} placeholder='Email' type='email' />
        <Input icon={password} name='password' value={formData.password} onChange={handleChange} placeholder='Mot de passe' type='password' />
      </div>
      <div className='flex flex-row gap-2 '>
        <SwitchButton />
        <p className='font-gothic'>Se souvenir de moi</p>
      </div>
    </div>
  )
}

export default LoginCard
