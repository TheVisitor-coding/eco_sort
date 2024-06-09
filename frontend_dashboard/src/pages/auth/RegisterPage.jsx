import perso1 from '../../../public/icons/perso_terre_1.svg'
import vector from '../../../public/icons/Vector.svg'
import { Link } from 'react-router-dom'
import RegisterCard from '../../components/forms/RegisterCard'

const RegisterPage = () => {
  return (
    <div className='md:px-[200px] bg-[#F8F7F7]'>
      <img src={vector} alt='vector' className='absolute top-0 right-0' />
      <div className='px-[160px] flex flex-row justify-center mr-5'>
        <div className='w-full h-screen relative flex flex-col items-start justify-center  gap-6 '>
          <div className=' flex flex-col justify-center items-center text-center gap-2 w-[432px] '>
            <h1 className='font-arial-rounded text-4xl'>Bienvenue !</h1>
            <p className='font-gothic'>Configurer votre première connexion via ce<br /> formulaire ci-dessous</p>
          </div>
          <RegisterCard />

          <div className='flex justify-center w-[432px]'>
            <p className='font-gothic text-[14px]'>Vous avez déjà un compte ? <Link to='/login' className='font-gothic-bold'>Connectez-vous</Link></p>
          </div>
        </div>
        <img src={perso1} alt='perso-terre1' className='relative px-[280px] h-[550px] top-56 left-16' />
      </div>

    </div>

  )
}

export default RegisterPage
