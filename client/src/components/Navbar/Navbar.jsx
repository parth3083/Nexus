import React from 'react'
import { Link } from 'react-router-dom'
import '../Navbar/navbar.scss'
function Navbar() {
  return (
      <div className='main'>
              <nav className='w-full h-[10vh] flex items-center justify-between px-[4vw] py-[2vw] fixed top-0 z-20 text-white '>
    <Link to='/home'>
    <div id="nav-left" className=' w-fit  h-[3.25vw] overflow-hidden'>
        <h1>Nexus</h1>
        <h1>Nexus</h1>
    </div></Link>
    <div id="nav-right" className='w-fit  h-[2vw] overflow-hidden'>
        <h3>info@nexus.com</h3>
        <h3>info@nexus.com</h3>
    </div>
</nav>
    </div>
  )
}

export default Navbar