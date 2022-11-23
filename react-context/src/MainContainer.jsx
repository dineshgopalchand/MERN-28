import React from 'react'
import MainContent from './MainContent'
import Sidebar from './Sidebar'

const MainContainer = () => {
  return (
    <div className='bordered'>MainContainer
        <Sidebar/>
        <MainContent/>
    </div>
  )
}

export default MainContainer