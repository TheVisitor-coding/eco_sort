import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import ParamsCard from '../components/section/tableau_bord/params/ParamsCard'

function ParamsPage () {
  return (
    <div className='flex flex-row '>
      <Sidebar />
      <ParamsCard />
    </div>
  )
}

export default ParamsPage
