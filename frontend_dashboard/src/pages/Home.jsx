import ClassementSection from '../components/section/tableau_bord/classement/ClassementSection'
import ListEmployeSection from '../components/section/tableau_bord/list_employe/ListEmployeSection'
import StatisticsSection from '../components/section/tableau_bord/statistics/StatisticsSection'

function Home () {
  return (
    <>
      <div className='h-screen flex flex-col w-full mr-4 gap-3'>
        <div className='flex flex-row gap-6'>
          <StatisticsSection />
          <ClassementSection />
        </div>
        <ListEmployeSection />
      </div>
    </>
  )
}

export default Home
