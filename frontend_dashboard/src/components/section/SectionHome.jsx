import ClassementSection from './tableau_bord/classement/ClassementSection'
import ListEmployeSection from './tableau_bord/list_employe/ListEmployeSection'
import StatisticsSection from './tableau_bord/statistics/StatisticsSection'

function SectionHome () {
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

export default SectionHome
