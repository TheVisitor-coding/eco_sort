import React, { useState } from 'react'
const SwitchButton = () => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }
  return (
    <>
      <label className='flex cursor-pointer select-none items-center '>
        <div className='relative'>
          <input
            type='checkbox'
            checked={isChecked}
            onChange={handleCheckboxChange}
            className='sr-only'
          />
          <div
            className={`box block h-6 w-10 rounded-full ${
            isChecked ? 'green-gradient' : 'bg-[#ebe8e5]'
          }`}
          />
          <div
            className={`absolute left-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-white transition ${
            isChecked ? 'translate-x-full bg-grey-primary' : 'green-gradient'
          }`}
          />
        </div>
      </label>
    </>
  )
}

export default SwitchButton
