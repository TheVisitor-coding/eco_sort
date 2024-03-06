import React from 'react'
import perso1 from '../../../public/icons/perso1.svg'
import vector2 from '../../../public/icons/Vector2.svg'
import Button from '../../components/forms/buttons/Button'
import iconLogin from '../../../public/icons/icon_login.svg'
import LoginCard from '../../components/forms/LoginCard'
const LoginPage = () => {
  return (
    <div className='md:px-[200px] bg-[#F8F7F7]'>

      <img src={vector2} alt='vector' className='absolute top-0 right-0' />
      <div className=' px-[180px] relative flex flex-row justify-center mr-5'>
        <div className='w-full h-screen relative flex flex-col items-start justify-center  gap-6 '>
          <div className=' flex flex-col justify-center items-center text-center gap-2 w-[432px] '>
            <h1 className='font-arial-rounded text-4xl'>Bienvenue !</h1>
            <p className='font-gothic'>Saisissez votre adresse électronique et votre mot<br />de passe pour vous connecter</p>
          </div>
          <LoginCard />
          <div className='flex justify-end w-[432px]'>
            <Button text='Se connecter' icon={iconLogin} row typo='arial-rounded' />
          </div>
        </div>
        <img src={perso1} alt='perso1' className='relative px-[280px] h-[500px] top-56 left-16' />
      </div>

    </div>

  )
}

export default LoginPage
