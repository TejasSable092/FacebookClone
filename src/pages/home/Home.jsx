import React from 'react'
import Topbar from '../../Components/Topbar/Topbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'
import Rightbar from '../../Components/rightbar/Rightbar'
import './home.css'

const Home = () => {
  return (
    <div>
      <Topbar/>
       <div className='homeContainer'>
        <Sidebar/>
        <Feed/>
        <Rightbar/>
        
       </div>
    </div>
  )
}

export default Home
