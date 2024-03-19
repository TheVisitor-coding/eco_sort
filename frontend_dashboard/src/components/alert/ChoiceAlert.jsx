function ChoiceAlert ({ onClickTop, onClickBottom, title, description }) {
  return (
    <>
      <div className='fixed flex items-center justify-center z-50 inset-0 bg-black bg-opacity-20 w-full h-full'>
        <div className='flex flex-col justify-center items-center gap-3 bg-white shadow-md rounded-section w-fit px-6 h-56 text-center'>
          <h4 className=' text-2xl font-arial-rounded'>{title}</h4>
          <p className='text-sm w-7/12 font-gothic'>{description}</p>
          <button onClick={onClickTop} className='px-6 py-1 rounded-full bg-gradient-to-r from-yellow to-green-primary text-white font-arial-rounded'>Oui</button>
          <button onClick={onClickBottom} className='font-arial-rounded text-dark'>Non</button>
        </div>
      </div>
    </>
  )
}

export default ChoiceAlert
