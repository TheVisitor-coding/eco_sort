function Logout () {
  return (
    <>
      <button className='flex flex-row items-center gap-2'>
        <span className='px-[14px] py-2 rounded-full bg-gradient-to-br from-green-primary to-yellow'>
          <img className='size-5' src='./icons/icon_logout.svg' alt='logout_icon' />
        </span>
        <p className='text-sm text-gothic'>Déconnexion</p>
      </button>
    </>
  )
}

export default Logout
