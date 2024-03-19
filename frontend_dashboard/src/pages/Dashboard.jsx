import SectionHome from '../components/section/SectionHome'
import Sidebar from '../components/sidebar/Sidebar'

function Dashboard () {
  return (
    <>
      <main className='mt-6 flex flex-row items-start'>
        <Sidebar />
        <SectionHome />
      </main>

    </>
  )
}

export default Dashboard
