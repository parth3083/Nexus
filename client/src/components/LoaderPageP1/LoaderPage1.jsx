import React, { useEffect } from 'react'
import image1 from '/src/images/Image1.png'
import image2 from '/src/images/image-2.jpg'
import image3 from '/src/images/image-6.jpg'
import image4 from '/src/images/image-7.jpg'
import image11 from '/src/images/image-5.jpg'
import image5 from '/src/images/image-12.jpg'
import image7 from '/src/images/image-10.jpg'
import image10 from '/src/images/image-11.jpg'
import image12 from '/src/images/image-13.jpg'
import image8 from '/src/images/image-8.jpg'
import image9 from '/src/images/mage-9.jpg'
import image6 from '/src/images/image - 4.jpg'
import Lenis from '@studio-freight/lenis'
import { Power2, gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(useGSAP,ScrollTrigger);
const LoaderPage1 = () => {
  const lenis = new Lenis()

lenis.on('scroll', (e) => {
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
  };
  useGSAP(() => {
    var tl = gsap.timeline({
      scrollTrigger: {
          trigger: ".page1",
          start: "50% 50%",
          end: "200% 30%",
          scrub: true,
          pin: true,
      }
  })
  tl.to('.rotate-div', {
      rotate: -15,
    scale: 0.8,
  },'a')
  tl.to('#r1', {
      marginTop:"-30%",
  
  },'a')
  tl.to('#r2', {
      marginTop:"-39%",
  
  },'a')
  tl.to('#r3', {
      marginTop:"-46%",
  
  },'a')
  tl.to('#r4', {
      marginTop:"-53%",
  
  },'a')
  tl.to('#r5', {
      marginTop:"-52%",
  }, 'a')
  tl.to('.overlay', {
    backgroundColor: "#0000007b",
    ease: Power2,

},'a')
tl.to('.overlay h1', {
    opacity: 1,
    delay:0.3
}, 'a') 
tl.to('.s', {
  width: "100%",
},'a')    
},[])
  

requestAnimationFrame(raf)
  return (
  

    <div className='bg-black '>
      <div className='page1'>
    <div className='container-div w-[100%] h-[100vh] flex items-start'>
      <div className='rotate-div -ml-[20vw] relative flex items-center justify-center gap-6 w-[180vw] h-[200vh] bg-black scale-100'>
        
        <div id='r1' className='row-div'>
            <div className='img-div' >
              <img src={image1} alt="" className=' w-full h-full object-cover' /> 
          </div>
          <div className='img-div'>
            <img src={image2} className=' w-full h-full object-cover' alt="" />
          </div>
          <div className='img-div'>
            <img src={image3} className=' w-full h-full object-cover' alt="" />
          </div>
          <div className='img-div'>
            <img src={image4} className=' w-full h-full object-cover' alt="" />
          </div>
      </div>
      <div id='r2' className='row-div'>
            <div className='img-div'>
              <img src={ image5} className=' w-full h-full object-cover' alt="" />
      </div>
          <div className='img-div'>
              <img src={ image6} className=' w-full h-full object-cover' alt="" />
          </div>
          <div className='img-div'>
              <img src={ image7} className=' w-full h-full object-cover' alt="" />
          </div>
          <div className='img-div'>
              <img src={ image8} className=' w-full h-full object-cover' alt="" />
          </div>
      </div>
      <div id='r3' className='row-div'>
            <div className='img-div'>
              <img src={image9} className=' w-full h-full object-cover' alt="" />
      </div>
            <div className='img-div'>
              <img src={ image10} className=' w-full h-full object-cover'  alt="" />
          </div>
            <div className='img-div'>
              <img src={ image11} className=' w-full h-full object-cover' alt="" />
          </div>
            <div className='img-div'>
              <img src={ image3} className=' w-full h-full object-cover' alt="" />
          </div>
      </div>
      <div id='r4' className='row-div'>
            <div className='img-div'>
              <img src={image12} className=' w-full h-full object-cover' alt="" />
      </div>
            <div className='img-div'>
            <img src={image9} className=' w-full h-full object-cover' alt="" />
          </div>
            <div className='img-div'>
              <img src={image2} className=' w-full h-full object-cover'  alt="" />
          </div>
            <div className='img-div'>
              <img src={image10 } className=' w-full h-full object-cover' alt="" />
          </div>
      </div>
      <div id='r5' className='row-div'>
            <div className='img-div'>
            <img src={image9} className=' w-full h-full object-cover' alt="" />
      </div>
            <div className='img-div'>
            <img src={image5} className=' w-full h-full object-cover' alt="" />
          </div>
            <div className='img-div'>
            <img src={ image1} className=' w-full h-full object-cover'  alt="" />
          </div>
            <div className='img-div'>
            <img src={ image12} className=' w-full h-full object-cover'  alt="" />
          </div>
      </div>





        </div>
          <div className='overlay absolute top-0 w-full h-[100vh] text-9xl flex items-center justify-center bg-transparent text-white font-semibold'>
            <h1 className=' opacity-0'>Nexus</h1>
            <div className='scroll absolute bottom-[8%] flex flex-col items-center justify-center gap-[0.45rem]'>
              <h3 className='text-[1vw]'>Sroll Down</h3>
              <div className='sd w-[5vw] h-[2px] bg-[#454545] rounded-md'>
                <div className='s w-0  h-[2px] bg-white rounded-md'></div>
              </div>
            </div>
        </div>
    </div>
  </div> 

 </div>

  )
}

export default LoaderPage1