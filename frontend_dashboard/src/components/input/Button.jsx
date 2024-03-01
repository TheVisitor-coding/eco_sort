import { useState } from 'react'

function Button ({ children, onClick, src, alt }) {
  const [isFocused, setIsFocused] = useState(false)
  return (
    <>
      <button
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className='flex flex-row items-center pl-6 gap-2 w-10/12 py-5 rounded-3xl hover:bg-primary focus:bg-primary'
        onClick={onClick}
      >
        <img className='size-5' src={`${isFocused ? `${src}_focus.svg` : `${src}_unfocus.svg`}`} alt={alt} />
        <p className='text-sm text-gothic'>{children}</p>
      </button>
    </>
  )
}

export default Button
