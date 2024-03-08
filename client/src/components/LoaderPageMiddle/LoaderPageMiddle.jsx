import React from 'react'
import { Power2, gsap } from "gsap";
import { useGSAP } from "@gsap/react"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP,ScrollTrigger);
const LoaderPageMiddle = () => {
    useGSAP(() => {
      var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".page2",
            start: "50% 50%",
            end: "80% 50%",
            scrub: 1,
            pin: true,
        }
      });
      tl.to('.t1-h', {
        width: "100%",
        duration:1
    })
      tl.from('.t1-h-p', {
        width: "0%",
        duration: 10,
        
      });
  },[])
    return (
        <>
        <div className='page2 w-full h-[100vh] overflow-hidden flex items-center justify-start bg-purple-200'>
          
          <div className='t1 ml-[2vw] absolute'>
            <h1 className='md:text-[8vw] text-[10vw] opacity-20'>See, sort, store:</h1>
          </div>
          <div className='t1-h ml-[2vw] absolute overflow-hidden w-0'>
            <h1 className=' md:text-[8vw] text-[10vw] whitespace-nowrap text-purple-800 opacity-100'>See, sort, store:</h1>
          </div>
          <div className='t1-p md:ml-[30vw] ml-[10vw] md:mt-[18vw] mt-[35vw] absolute'>
            <h1 className='md:text-[5.5vw] text-[7vw] opacity-20'>Photos to organized library</h1>
          </div>
          <div className='t1-h-p md:ml-[30vw] ml-[10vw] md:mt-[18vw] mt-[35vw] absolute overflow-hidden w-[90%]'>
            <h1 className=' md:text-[5.5vw] text-[7vw]  whitespace-nowrap text-purple-800 opacity-100'>Photos to organized library</h1>
          </div>



        </div>
        </>
    )
}
export default LoaderPageMiddle