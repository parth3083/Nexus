import React from 'react'
import './Loader.scss'
import { Link } from 'react-router-dom'
import LoaderPage1 from '../LoaderPageP1/LoaderPage1'
const LoaderPage = () => {
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
            <LoaderPage1/>
        </div>
    )
}
export default LoaderPage