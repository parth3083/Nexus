import React from 'react'
import './Loader.scss'
import LoaderPage1 from '../LoaderPageP1/LoaderPage1'
import Navbar from '../Navbar/Navbar'
const LoaderPage = () => {
    return (
        <div className='main'>
            <Navbar />
            <LoaderPage1/>
        </div>
    )
}
export default LoaderPage