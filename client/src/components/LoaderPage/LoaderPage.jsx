import React from 'react'
import './Loader.scss'
import LoaderPage1 from '../LoaderPageP1/LoaderPage1'
import Navbar from '../Navbar/Navbar'
import LoaderPageMiddle from '../LoaderPageMiddle/LoaderPageMiddle'
import Lenis from '@studio-freight/lenis'
import LoaderPageEnd from '../LoaderPageEnd/LoaderPageEnd'
const LoaderPage = () => {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
      console.log(e)
    })
    
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
    return (
        <div className='main overflow-hidden bg-black'>
              <Navbar />
            <LoaderPage1 /> 
            <LoaderPageMiddle/> 
        <LoaderPageEnd/>
        </div>
    )
}
export default LoaderPage