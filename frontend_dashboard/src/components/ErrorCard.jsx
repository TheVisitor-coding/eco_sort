import React from 'react'
import Button from './forms/buttons/Button'
import iconLogin from '../../public/icons/icon_login.svg'

const ErrorCard = ({ code, message }) => {
  return (
    <div className='w-[432px] h-auto bg-white flex flex-col gap-10 border border-white rounded-[22px] p-10 pb-12  '>
      <div className='flex flex-col items-center gap-2'>
        <h1 className='text-4xl font-arial-rounded'>{code}</h1>
        <p className='text-center'>{message}</p>
      </div>
      <div className='flex flex-row gap-2 '>
        <Button text='Retourner au portail de connexion' icon={iconLogin} row typo='arial-rounded' />

      </div>
    </div>
  )
}

export default ErrorCard
