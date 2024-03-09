function NavButton ({ children, onClick, src, alt, sectionTab }) {
  const isFocused = window.location.pathname === sectionTab

  return (
    <>
      <button
        className={`flex flex-row items-center pl-6 gap-6 w-10/12 py-5 rounded-3xl ${isFocused ? 'bg-primary' : ''} hover:bg-primary`}
        onClick={onClick}
      >
        <img className='size-5' src={`${isFocused ? `${src}_focus.svg` : `${src}_unfocus.svg`}`} alt={alt} />
        <p className='text-sm text-gothic'>{children}</p>
      </button>
    </>
  )
}

export default NavButton
