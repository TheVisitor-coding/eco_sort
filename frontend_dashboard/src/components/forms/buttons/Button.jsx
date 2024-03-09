function Button ({ text, icon, row, typo, fontSize }) {
  return (
    <>
      <button className={`flex ${row ? 'flex-row-reverse' : 'flex-row'} items-center gap-4`}>
        <span className='px-[14px] py-2 rounded-full bg-gradient-to-br from-green-primary to-yellow'>
          <img className='size-5' src={icon} alt='logout_icon' />
        </span>
        <p className={` ${fontSize} text-end font-${typo}`}>{text}</p>
      </button>
    </>
  )
}

export default Button
