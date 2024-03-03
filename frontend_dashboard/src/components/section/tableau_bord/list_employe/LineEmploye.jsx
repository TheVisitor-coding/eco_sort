function LineEmploye ({ src, name }) {
  return (
    <>
      <div className='flex flex-row justify-between w-full items-center pb-4 border-b-[1px]'>
        <div className='flex flex-row gap-5 items-center'>
          <img src={src} alt='avatar' />
          <p className='font-gothic text-sm'>{name}</p>
        </div>
        <div className='flex flex-row gap-4'>
          <button className='px-4 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-green-primary to-yellow'>
            <img className='size-4' src='./icons/icon_delete.png' alt='icon_delete' />
          </button>
          <button className='px-4 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-green-primary to-yellow'>
            <img className='size-4' src='./icons/icon_modify.png' alt='icon_modify' />
          </button>
        </div>
      </div>
    </>
  )
}

export default LineEmploye
