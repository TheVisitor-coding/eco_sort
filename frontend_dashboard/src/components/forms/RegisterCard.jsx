import React, { useState } from 'react'
import Input from './inputs/Input'
import person from './../../../public/icons/person.svg'
import email from './../../../public/icons/email.svg'
import sort from './../../../public/icons/sort.svg'
import password from './../../../public/icons/password.svg'

const RegisterCard = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    sortId: '',
    password: ''

  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  return (
    <div className=' w-[432px] h-auto flex flex-col items-center bg-white border border-white rounded-[22px] p-10 pb-12'>
      <Input icon={person} name='companyName' value={formData.companyName} onChange={handleChange} placeholder="Nom de l'entreprise" />
      <Input icon={email} name='email' value={formData.email} onChange={handleChange} placeholder='Email' type='email' />
      <Input icon={sort} name='sortId' value={formData.sortId} onChange={handleChange} placeholder='ID poubelle' />
      <Input icon={password} name='password' value={formData.password} onChange={handleChange} placeholder='Mot de passe' type='password' />
      <Input icon={password} name='password' value={formData.password} onChange={handleChange} placeholder='Confirmer mot de passe' type='password' />
    </div>
  )
}

export default RegisterCard
