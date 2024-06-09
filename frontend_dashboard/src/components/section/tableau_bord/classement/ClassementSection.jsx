import LineClassement from './LineClassement'
import LinkButton from '../../../forms/buttons/LinkButton'

function ClassementSection () {
  return (
    <>
      <div className='bg-white flex flex-col gap-6 shadow-md h-full w-1/3 px-8 pt-8 pb-6 rounded-section'>
        {/* Head Section */}
        <div className='flex flex-row flex-wrap w-full justify-between'>
          <h2 className='text-h2 font-arial-rounded'>Classement</h2>
          <LinkButton text='Voir Tout' href='/leaderboard' />
        </div>

        {/* Liste Classement */}
        <div className='flex flex-col gap-5'>
          <LineClassement rating={1} name='Jennifer BONDIL' score='8500' />
          <LineClassement rating={2} name='Marjorie DAVID' score='7050' />
          <LineClassement rating={3} name='Anaïs AKA' score='6800' />
          <LineClassement rating={4} name='Mohamed Larbi EL BAIDI' score='6550' />
          <LineClassement rating={5} name='Mattéo ROSSI' score='6500' />
          <LineClassement rating={6} name='Ilona BOURSERIE' score='6000' />
        </div>
      </div>
    </>
  )
}

export default ClassementSection
