import Sidebar from '../components/sidebar/Sidebar'
import Home from './Home'

function Dashboard () {
  return (
    <>
      <main className='mt-6 flex flex-row items-start'>
        <Sidebar />
        <Home />
      </main>

    </>
  )
}

export default Dashboard
