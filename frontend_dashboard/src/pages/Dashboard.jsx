import ClassementSection from '../components/section/tableau_bord/classement/ClassementSection'
import StatisticsSection from '../components/section/tableau_bord/statistics/StatisticsSection'
import Sidebar from '../components/sidebar/Sidebar'

function Dashboard () {
  return (
    <>
      <main className='mt-6 flex flex-row items-start'>
        <Sidebar />
        <div className='h-screen w-full'>
          <div className='flex flex-row gap-6'>
            <StatisticsSection />
            <ClassementSection />
          </div>
        </div>
      </main>
    </>
  )
}

export default Dashboard
