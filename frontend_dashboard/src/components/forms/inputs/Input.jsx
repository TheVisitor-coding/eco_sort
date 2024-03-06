import React from 'react'

const Input = ({ icon, name, value, onChange, placeholder, type = 'text' }) => {
  return (

    <label className='w-[350px] h-[50px] flex flex-row  bg-[#FCFCFC] gap-2 border border-white shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] rounded-[30px] p-2 mt-4'>
      <div>
        <img
          src={icon}
          alt='register-icon'
          className=' ml-4 mt-2 mr-3 w-[20px]'
        />
      </div>
      <input name={name} onChange={onChange} placeholder={placeholder} type={type} className='outline-none placeholder:italic' />
    </label>

  )
}

export default Input
