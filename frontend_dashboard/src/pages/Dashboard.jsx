import Statistics from '../components/section/tableau_bord/statistics/Statistics'
import Sidebar from '../components/sidebar/Sidebar'

function Dashboard () {
  return (
    <>
      <main className='mt-6 flex flex-row items-start'>
        <Sidebar />
        <div className='h-screen w-full'>
          <Statistics />
        </div>
      </main>
    </>
  )
}

export default Dashboard
