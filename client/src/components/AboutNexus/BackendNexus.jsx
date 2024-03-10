import React from 'react'
import image1 from '/src/images/an-3.jpg'
import { Power2, gsap } from "gsap";
import { useGSAP } from "@gsap/react"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP,ScrollTrigger);
function BackendNexus() {
    useGSAP(() => {
        gsap.to(".one-left-1 span h3", {
            y: "0%",
            duration: 1.5,
            ease: Power2.easeInOut,
            scrollTrigger: {
                trigger: ".one-left-1",
                start: "top 35%",
                end: "top 30%",
                pin:true
            }
        })
    },[])
  return (
    <div className='one w-full h-[100vh] flex  md:flex-row flex-col items-center justify-between py-5 px-[3.75vw] bg-[#2A2828]'>
                <div className='one-left-1 w-full md:w-[55%] h-full flex flex-col md:items-start items-center justify-start md:justify-start'>
                    <h1 className='md:text-[15vw] text-[35vw] -mt-[3.5vw] font-mast font-bold tracking-tight'>BACKEND</h1>
                    <span className='w-fit -mt-[10vw] md:-mt-[2vw] mb-[0.5vw] overflow-hidden  inline-block '><h3 className=' font-loaderend1 text-[2.45vw] md:text-[1.37vw] translate-y-[100%]'>For the backend, NEXUS leverages Node.js, a JavaScript runtime environment that </h3></span>
                    <span className='w-fit mb-[0.5vw] overflow-hidden  inline-block '><h3 className=' font-loaderend1 text-[2.6vw] md:text-[1.34vw] translate-y-[100%]'>empowers JavaScript to run outside of web browsers. This enables server-side </h3></span>
                    <span className='w-fit mb-[0.5vw] overflow-hidden  inline-block '><h3 className=' font-loaderend1 text-[2.45vw] md:text-[1.31vw] translate-y-[100%]'>scripting and communication with the database. Express.js, a web framework built</h3></span>
                    <span className='w-fit mb-[0.5vw] overflow-hidden  inline-block '><h3 className=' font-loaderend1 text-[2.48vw] md:text-[1.322vw] translate-y-[100%]'>on top of Node.js, streamlines backend development by providing a robust set of </h3></span>
                    <span className='w-fit mb-[0.5vw] overflow-hidden  inline-block '><h3 className=' font-loaderend1 text-[2.5vw]  md:text-[1.3vw] translate-y-[100%]'>features for handling web requests and responses.</h3></span>
                </div>
                <div className='one-right-1 w-full md:w-[43%] h-full  p-10'>
                    <div className='img-cont w-full rounded-lg overflow-hidden md:h-[80%] h-full '>
                        <img src={ image1} className='w-full h-full object-contain rounded-lg' alt="" />
                    </div>
                </div>
            </div>
  )
}

export default BackendNexus