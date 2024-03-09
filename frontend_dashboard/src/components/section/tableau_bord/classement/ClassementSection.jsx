import LineClassement from './LineClassement'
import LinkButton from '../../../forms/buttons/LinkButton'

function ClassementSection () {
  return (
    <>
      <div className='bg-white flex flex-col gap-6 shadow-md h-full w-1/3 px-8 pt-8 pb-6 rounded-section'>
        {/* Head Section */}
        <div className='flex flex-row flex-wrap w-full justify-between'>
          <h2 className='text-h2 font-arial-rounded'>Classement</h2>
          <LinkButton text='Voir Tout' href='/dashboard/leaderboard' />
        </div>

        {/* Liste Classement */}
        <div className='flex flex-col gap-5'>
          <LineClassement />
          <LineClassement />
          <LineClassement />
          <LineClassement />
          <LineClassement />
          <LineClassement />
        </div>
      </div>
    </>
  )
}

export default ClassementSection
