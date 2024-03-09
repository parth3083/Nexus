import React from 'react'
import image1 from '/src/images/an-5.jpg'
import { Power2, gsap } from "gsap";
import { useGSAP } from "@gsap/react"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP,ScrollTrigger);
function FunctionalityNexus() {
    useGSAP(() => {
        gsap.to(".one-left-1-2 span h3", {
            y: "0%",
            duration: 1.5,
            ease: Power2.easeInOut,
            scrollTrigger: {
                trigger: ".one-left-1-2",
                start: "top 35%",
                end: "top 30%",
                pin:true
            }
        })
    },[])
  return (
    <div className='one w-full h-[100vh] flex items-center justify-between pt-5 px-[3.75vw] bg-[#2A2828]'>
                <div className='one-left-1-2 w-[55%] h-full flex flex-col items-start justify-start'>
                    <h1 className='text-[15vw] -mt-[3.5vw] font-mast font-bold '>UTILITY</h1>
                    <span className='w-fit -mt-[2vw] mb-[0.5vw] overflow-hidden  inline-block '><h3 className=' font-loaderend1 text-[1.33vw] translate-y-[100%] '>The image sorting functionality is powered by a Python library for face recognition. </h3></span>
                    <span className='w-fit mb-[0.5vw] overflow-hidden  inline-block '><h3 className=' font-loaderend1 text-[1.34vw] translate-y-[100%] '>This library employs machine learning algorithms to detect and recognize faces</h3></span>
                    <span className='w-fit mb-[0.5vw] overflow-hidden  inline-block '><h3 className=' font-loaderend1 text-[1.31vw] translate-y-[100%] '>within images. CMake, a build system generator, and dlib, a C++ toolkit for machine </h3></span>
                    <span className='w-fit mb-[0.5vw] overflow-hidden  inline-block '><h3 className=' font-loaderend1 text-[1.35vw] translate-y-[100%] '>earning, provide the foundation for running the face recognition algorithms </h3></span>
                    <span className='w-fit mb-[0.5vw] overflow-hidden  inline-block '><h3 className=' font-loaderend1 text-[1.3vw] translate-y-[100%] '>efficiently.</h3></span>
                </div>
                <div className='one-right-1 w-[43%] h-full  p-10'>
                    <div className='img-cont w-full rounded-lg overflow-hidden h-full '>
                        <img src={ image1} className='w-full h-full object-cover ' alt="" />
                    </div>
                </div>
            </div>
  )
}

export default FunctionalityNexus