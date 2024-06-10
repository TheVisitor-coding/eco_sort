import React from 'react'
import vector from './../../../../../public/icons/Vector 6.svg'
import Button from '../../../forms/buttons/Button'
import IconModify from '../../../../../public/icons/icon_modify.png'
import chevron from '../../../../../public/icons/chevron-right.svg'
import logo from '../../../../../public/icons/mdshoollogo.png'

const ParamsCard = () => {
  return (
    <div className=' flex flex-row  justify-between bg-white rounded-section shadow-md w-full  h-[20rem] m-5 pt-12 gap-8 p-8'>
      <div className='flex flex-col items-center justify-center w-1/3 '>
        <img src={logo} alt='mdslogo' className='size-48 d-flex items-center' />
        <h1 className='font-gothic pb-4 text-xl'>MyDigitalSchool</h1>

      </div>
      <img src={vector} alt='vector6' className='' />
      <div className=' w-2/4 '>
        <div className='flex flex-col gap-5 items-start'>
          <Button text='Information générales' row icon={IconModify} typo='arial-rounded' />
          <p className='font-gothic'>Code postal : 44800  </p>
          <p className='font-gothic'>ID de la poubelle : 30000  </p>
          <p className='font-gothic'>Email de l’admin : matteo.rossi@my-digital-school.org  </p>
          <p className='font-gothic'>Mot de passe de l’admin : *********  </p>
        </div>
      </div>

      <img src={vector} alt='vector6' className='' />

      <div className='flex flex-col  gap-5 w-2/4 '>
        <div className='flex flex-col items-start gap-5'>
          <Button text='Abonnements' row icon={IconModify} typo='arial-rounded' />
          <p className='font-gothic'>Date d’abonnement : 05/12/2023</p>
          <p className='font-gothic'>Coordonnées bancaire : FR14 2004 1010 0505 0001 3M02 606</p>
          <p className='font-gothic'>Prochain prélèvement le : 05/07/2024</p>
        </div>
        <button className='flex flex-row justify-end font-gothic-bold gap-2 font-lg'>Demander une résialiation <img src={chevron} alt='rightIcon' className='mt-1' /></button>
      </div>
    </div>
  )
}

export default ParamsCard
