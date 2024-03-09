import React from 'react'
import image1 from '/src/images/an-2.png'
import { Power2, gsap } from "gsap";
import { useGSAP } from "@gsap/react"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP,ScrollTrigger);
const ReactNexus = () => {
    useGSAP(() => {
        gsap.to(".nright span h3", {
            y: "0%",
            duration: 1.5,
            ease: Power2.easeInOut,
            scrollTrigger: {
                trigger: ".nright",
                start: "top 30%",
                end: "top 25%",
                pin:true
            }
        })
    },[])
    return (
        <div className='one w-full h-[100vh] flex items-center justify-between py-5 px-[3.75vw]'>
            <div className="nleft w-[43%] h-full p-10 ">
            <div className='img-cont w-full rounded-lg overflow-hidden h-full '>
                        <img src={image1} className='w-full h-full object-cover object-right' alt="" />
                    </div>
            </div>
            <div className="nright w-[55%] h-full pt-5  flex flex-col items-end justify-start">
                <h1 className='text-[13vw] -mt-[3.5vw] font-mast font-bold tracking-tight'>FRONTEND</h1>
                <span className='w-fit  mt-[2vw] mb-[0.5vw] overflow-hidden  inline-block '><h3 className=' font-loaderend1 text-[1.35vw] translate-y-[100%]'>Nexus is a web application built to simplify image sorting. Using React.js for its user</h3></span>
                <span className='w-fit   mb-[0.5vw] overflow-hidden  inline-block '><h3 className=' font-loaderend1 text-[1.32vw] translate-y-[100%]'>interface, Nexus provides a smooth and intuitive experience for both uploading your</h3></span>
                <span className='w-fit   mb-[0.5vw] overflow-hidden  inline-block '><h3 className=' font-loaderend1 text-[1.32vw] translate-y-[100%]'>target image and the reference images it should be sorted against. React.js ensures</h3></span>
                <span className='w-fit   mb-[0.5vw] overflow-hidden  inline-block '><h3 className=' font-loaderend1 text-[1.32vw] translate-y-[100%]'>a responsive and dynamic interface, making Nexus user-friendly and efficient.</h3></span>
            </div>
        </div>
    )
}

export default ReactNexus