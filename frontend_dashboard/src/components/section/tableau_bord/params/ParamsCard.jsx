import React from 'react'
import vector from './../../../../../public/icons/Vector 6.svg'
import Button from '../../../forms/buttons/Button'
import IconModify from '../../../../../public/icons/icon_modify.png'
import chevron from '../../../../../public/icons/chevron-right.svg'

const ParamsCard = () => {
  return (
    <div className=' flex flex-row  justify-between bg-white rounded-section shadow-md w-full  h-[20rem] m-5 pt-12 gap-8 p-8'>
      <div className='flex flex-row items-end justify-center w-1/3 '>
        <h1 className='font-gothic pb-4 text-xl'>Nom de l’entreprise</h1>

      </div>
      <img src={vector} alt='vector6' className='' />
      <div className=' w-2/4 '>
        <div className='flex flex-col gap-5 items-start'>
          <Button text='Information générales' row icon={IconModify} typo='arial-rounded' />
          <p className='font-gothic'>Code postal : XXXXX  </p>
          <p className='font-gothic'>ID de la poubelle : XXXXX  </p>
          <p className='font-gothic'>Email de l’admin : abcde@email.fr  </p>
          <p className='font-gothic'>Mot de passe de l’admin : *********  </p>
        </div>
      </div>

      <img src={vector} alt='vector6' className='' />

      <div className='flex flex-col  gap-5 w-2/4 '>
        <div className='flex flex-col items-start gap-5'>
          <Button text='Abonnements' row icon={IconModify} typo='arial-rounded' />
          <p className='font-gothic'>Date d’abonnement : jj/mm/aaaa</p>
          <p className='font-gothic'>Coordonnées bancaire : XXXX XXXX XXXX XXXX</p>
          <p className='font-gothic'>Prochain prélèvement le : jj/mm/aaaa</p>
        </div>
        <button className='flex flex-row justify-end font-gothic-bold gap-2 font-lg'>Demander une résialiation <img src={chevron} alt='rightIcon' className='mt-1' /></button>
      </div>
    </div>
  )
}

export default ParamsCard
