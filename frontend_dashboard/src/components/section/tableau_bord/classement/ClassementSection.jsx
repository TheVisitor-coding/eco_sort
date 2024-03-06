import LinkButton from '../../../input/LinkButton'
import LineClassement from './LineClassement'

function ClassementSection () {
  return (
    <>
      <div className='bg-white flex flex-col gap-6 shadow-md h-fit w-1/3 px-8 pt-8 pb-6 rounded-section'>
        {/* Head Section */}
        <div className='flex flex-row w-full justify-between'>
          <h2 className='text-h2 font-arial-rounded'>Classement</h2>
          <LinkButton text='Voir Tout' />
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
