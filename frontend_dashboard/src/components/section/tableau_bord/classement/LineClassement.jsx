function LineClassement () {
  return (
    <>
      <div className='bg-primary gap-3 flex flex-row items-center w-full rounded-2xl p-3'>
        <span className='px-5 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-green-primary to-yellow'>
          <p className='text-white text-sm font-arial-rounded'>1</p>
        </span>
        <div className='*:text-[12px]'>
          <p className='font-arial-rounded'>Nom Employé</p>
          <p className='font-gothic'>Nbr de points</p>
        </div>
      </div>
    </>
  )
}

export default LineClassement
