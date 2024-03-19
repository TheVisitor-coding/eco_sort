import Sidebar from '../components/sidebar/Sidebar'
import SectionLeaderboard from '../components/section/SectionLeaderboard'

function Leaderboard () {
  return (
    <>
      <main className='mt-6 flex flex-row items-start'>
        <Sidebar />
        <SectionLeaderboard />
      </main>

    </>
  )
}

export default Leaderboard
