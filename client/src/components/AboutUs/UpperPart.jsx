import React from 'react'
import { Power2, gsap } from "gsap";
import { useGSAP } from "@gsap/react"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image1 from "/src/images/p.png"
gsap.registerPlugin(useGSAP, ScrollTrigger);

function UpperPart() {
    useGSAP(() => {
        gsap.to(".upper span h3", {
            y: "0%",
            duration: 1.5,
            ease: Power2.easeInOut,
        })
        gsap.to(".vis", {
            opacity: 1,
            delay:1.5,
            ease: Power2.easeInOut,
        })
    }, [])
  return (
      <div className='w-[91.6%]  ml-[4vw]  h-[80vh]  mt-[2vw] flex items-center justify-between '>
          <div className='vis hidden md:block opacity-0 md:w-[22%] h-full '>
              <div className='w-full h-[70%]  mt-[4.5vw] flex flex-col items-center justify-start '>
                  <div className='w-[17vw] h-[17vw] bg-white overflow-visible rounded-full mt-[2vw] flex items-center justify-center'>
                      <div className='w-[12vw] h-[12vw]  rounded-full relative'>
                          <img src={image1} className='-mt-[3vw] scale-150   '  alt="" />
                      </div>
                  </div>
                  <h1 className=' font-loaderend1 text-[2vw]'>Parth Rajput</h1>
              </div>
          </div>
          <div className='upper  w-[100%] md:w-[50%] h-full  flex  flex-col items-center md:justify-start'>
              <h1 className=' font-mast text-[33vw] md:text-[13vw] -mt-[4vw] tracking-tighter'>ABOUT US</h1>
              <span className=' select-none  overflow-hidden  -mt-[4vw] mb-[0.5vw] w-fit'><h3 className=' text-[3.6vw] md:text-[1.8vw] translate-y-[100%]  font-loaderend1'>Nexus is the brainchild of <span className=' text-orange-600 parth font-mast tracking-wider font-bold'>Parth Rajput</span> and <span className=' text-orange-600 parth font-mast tracking-wider font-bold'>NAND PATEL</span>. Our </h3></span>
              <span className=' select-none  overflow-hidden  mb-[0.5vw] w-fit'><h3 className='text-[3.6vw] md:text-[1.8vw]  translate-y-[100%] font-loaderend1'>collaborative effort brought this project to life. We have</h3></span>
              <span className=' select-none  overflow-hidden  mb-[0.5vw] w-fit'><h3 className='text-[3.67vw] md:text-[1.84vw] translate-y-[100%] font-loaderend1'>embarked on this journey by identifying the need  for a</h3></span>
              <span className=' select-none  overflow-hidden  -ml-[6.5vw] md:-ml-[3.5vw] mb-[0.5vw] w-fit'><h3 className='text-[3.62vw] md:text-[1.84vw] translate-y-[100%] font-loaderend1'>user-friendly tool to manage and organize images.</h3></span>
              <span className=' select-none  overflow-hidden  mb-[0.5vw] w-fit'><h3 className='text-[3.7vw] md:text-[1.89vw] translate-y-[100%] font-loaderend1'>Through the development process, we combined our </h3></span>
              <span className=' select-none  overflow-hidden  mb-[0.5vw] w-fit'><h3 className='text-[3.62vw] md:text-[1.85vw] translate-y-[100%] font-loaderend1'>strengths and expertise to translate this concept into a</h3></span>
              <span className=' select-none  overflow-hidden -ml-[52vw] md:-ml-[27vw] mb-[0.5vw] w-fit'><h3 className='text-[3.62vw] md:text-[1.85vw] translate-y-[100%] font-loaderend1'>functional application.</h3></span>
          </div>
          <div className='vis hidden md:block opacity-0 md:w-[22%] h-full '>
          <div className='w-full h-[70%]  mt-[4.5vw] flex flex-col items-center justify-start '>
                  <div className='w-[17vw] h-[17vw] bg-white overflow-visible rounded-full mt-[2vw] flex items-center justify-center'>
                      <div className='w-[12vw] h-[12vw]  rounded-full relative'>
                          <img src={image1} className='-mt-[3vw] scale-150   '  alt="" />
                      </div>
                  </div>
                  <h1 className=' font-loaderend1 text-[2vw]'>Nand Patel</h1>
              </div>
          </div>
    </div>
  )
}


export default UpperPart