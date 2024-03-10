import ListLeaderboard from './leaderboard/ListLeaderboard'

function SectionLeaderboard () {
  return (
    <>
      <div className='h-[69.5rem] flex flex-col w-full mr-4 gap-8'>
        <h1 className=' text-4xl font-arial-rounded font-bold pt-8 px-4'>Classement</h1>
        <ListLeaderboard />
      </div>
    </>
  )
}

export default SectionLeaderboard
