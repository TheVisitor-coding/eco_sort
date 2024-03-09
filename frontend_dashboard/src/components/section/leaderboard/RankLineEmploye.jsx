function RankLineEmploye ({ rank, name, points, profil }) {
  return (
    <>
      <div className='w-full h-fit flex flex-row items-center justify-between py-5 px-8 bg-white rounded-section shadow-sm'>
        <div className='flex flex-row gap-4 w-fit items-center'>
          <span className='px-3 py-1 rounded-full bg-gradient-to-br from-green-primary to-yellow'>
            <p className='text-white text-xl font-arial-rounded'>{rank}</p>
          </span>
          <img src={profil} alt='perso1' className=' size-9 object-cover' />
          <p className='ml-5 font-arial-rounded text-lg'>{name}</p>
        </div>
        <p className=' text-sm pr-6'>{points || 0} points</p>
      </div>
    </>
  )
}

export default RankLineEmploye
