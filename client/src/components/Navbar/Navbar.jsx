import React from 'react'
import { Link } from 'react-router-dom'
import '../Navbar/navbar.scss'
function Navbar() {
  return (
      <div className='main'>
              <nav className='w-full md:h-[10vh] bg h-[11vh] flex items-center justify-between px-[4vw] py-[2vw] fixed top-0 z-20 text-white mix-blend-difference '>
    <Link to='/home'>
    <div id="nav-left" className=' w-fit  h-[10vw]  md:h-[3.25vw] overflow-hidden'>
        <h1 className='md:text-[2.5vw] text-[8vw]'>Nexus</h1>
        <h1 className='md:text-[2.5vw] text-[8vw]'>Nexus</h1>
    </div></Link>
    <div id="nav-right" className='w-fit  md:h-[2vw]  h-[7vw] overflow-hidden'>
        <h3 className='text-[4vw] md:text-[1.5vw] '>info@nexus.com</h3>
        <h3 className='text-[4vw] md:text-[1.5vw] ' >info@nexus.com</h3>
    </div>
</nav>
    </div>
  )
}

export default Navbar