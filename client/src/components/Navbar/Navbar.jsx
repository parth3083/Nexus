import React from 'react'
import { Link } from 'react-router-dom'
import '../Navbar/navbar.scss'
function Navbar() {
  return (
      <div className='main'>
              <nav>
    <Link to='/home'>
    <div id="nav-left">
        <h1>Nexus</h1>
        <h1>Nexus</h1>
    </div></Link>
    <div id="nav-right">
        <h3>info@nexus.com</h3>
        <h3>info@nexus.com</h3>
    </div>
</nav>
    </div>
  )
}

export default Navbar