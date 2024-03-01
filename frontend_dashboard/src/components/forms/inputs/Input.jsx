import React from 'react'

const Input = ({ icon, name, value, onChange, placeholder, type = 'text' }) => {
  return (
    <div className='m-2'>
      <label className='flex flex-row gap-2 border border-black rounded-[30px] p-2 mt-4'>
        <div>
          <img
            src={icon}
            alt='register-icon'
            className='m-2'
          />
        </div>
        <input name={name} value={value} onChange={onChange} placeholder={placeholder} type={type} />
      </label>
    </div>
  )
}

export default Input
