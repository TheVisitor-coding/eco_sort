import perso1 from '../../public/icons/perso1.svg'
import vector1 from '../../public/icons/Vectorerror1.svg'
import vector2 from '../../public/icons/Vectorerror2.svg'
import ErrorCard from '../components/ErrorCard'
const ErrorPage = () => {
  return (
    <div className='md:px-[200px] bg-[#F8F7F7]'>
      <img src={vector1} alt='vector' className='absolute top-0 left-0' />
      <div className=' px-[180px] relative flex flex-row justify-center mr-5'>
        <div className='w-full h-screen relative flex flex-col items-start justify-center  gap-6 '>
          <ErrorCard code='404' message='L’url que vous avez saisie n’est pas connue auprès de nos données' />
        </div>
        <img src={perso1} alt='perso1' className='relative px-[280px] h-[500px] top-56 left-16' />
      </div>
      <img src={vector2} alt='vector' className='absolute  right-0 bottom-0' />
    </div>

  )
}

export default ErrorPage
