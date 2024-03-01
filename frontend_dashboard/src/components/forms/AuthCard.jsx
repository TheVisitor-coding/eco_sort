import React from 'react'
import Input from './inputs/Input'
import person from './../../../public/icons/person.svg'

const AuthCard = () => {
  return (
    <div className=' w-[432] h-[449]  bg-white border border-white rounded-[22px] p-5'>

      <Input icon={person} name='' value='' placeholder="Nom de l'entreprise" />
      <Input name='' value='' placeholder='Email' type='email' />
      <Input name='' value='' placeholder='ID poubelle' />
      <Input name='' value='' placeholder='Mot de passe' type='password' />
      <Input name='' value='' placeholder='Confirmer mot de passe' type='password' />

    </div>
  )
}

export default AuthCard
