function LinkButton ({ text, href }) {
  return (
    <>
      <a href={href} className='flex flex-row gap-3 items-center cursor-pointer transition-all hover:-translate-y-1'>
        <p className='font-gothic-bold text-sm'>{text}</p>
        <img src='/chevron-right.svg' alt='chevron-right' />
      </a>
    </>
  )
}

export default LinkButton
