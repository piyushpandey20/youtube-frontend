import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex pt-[92px]'>
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default Body
