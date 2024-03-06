import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
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
  )
}

export default Navbar