import React from 'react'
import './Loader.scss'
import LoaderPage1 from '../LoaderPageP1/LoaderPage1'
import Navbar from '../Navbar/Navbar'
import Lenis from '@studio-freight/lenis'
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
        <div className='main'>
            <Navbar />
            <LoaderPage1 />
        </div>
    )
}
export default LoaderPage