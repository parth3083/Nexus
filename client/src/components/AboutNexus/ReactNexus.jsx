import React from 'react'
import image1 from '/src/images/an-6.png'
import { Power2, gsap } from "gsap";
import { useGSAP } from "@gsap/react"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);
import Tilt from 'react-parallax-tilt';
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
                pin: true
            }
        })
    }, []);
    return (
        <div className='one w-full h-[100vh] md:flex-row  flex flex-col-reverse items-center justify-between py-5 px-[3.75vw]'>
            <div className="nleft w-full mt-[5vw] md:mt[0] md:w-[43%] h-full p-10 ">
                <Tilt
                    className='img-cont parth w-full transform-style: preserve-3d rounded-lg flex items-center justify-center overflow-hidden h-full ' style={{ backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPmT92WBe7mxKq43iph_0otk1Q-8F_S36JwcPoc33AWg&s)" }}>
                    
                          <img src={image1} className='pr' style={{ position: 'relative' }}  alt="" />  
                    </Tilt>
            </div>
            <div className="nright  w-full md:w-[55%] h-full pt-5 items-center justify-start flex flex-col md:items-end md:justify-start">
                <h1 className='md:text-[13vw]  text-[32vw] md:-mt-[3.5vw] font-mast font-bold tracking-tight'>FRONTEND</h1>
                <span className='w-fit -mt-[8vw] mb-[0.5vw] md:mt-[2vw] md:mb-[0.5vw] overflow-hidden  inline-block '><h3 className=' font-loaderend1 text-[2.43vw] md:text-[1.35vw] translate-y-[100%]'>Nexus is a web application built to simplify image sorting. Using React.js for its user</h3></span>
                <span className='w-fit   mb-[0.5vw] overflow-hidden  inline-block '><h3 className=' font-loaderend1 text-[2.37vw] md:text-[1.32vw] translate-y-[100%]'>interface, Nexus provides a smooth and intuitive experience for both uploading your</h3></span>
                <span className='w-fit   mb-[0.5vw] overflow-hidden  inline-block '><h3 className=' font-loaderend1 text-[2.41vw] md:text-[1.32vw] translate-y-[100%]'>target image and the reference images it should be sorted against. React.js ensures</h3></span>
                <span className='w-fit   mb-[0.5vw] overflow-hidden  inline-block '><h3 className=' font-loaderend1 text-[2.55vw] md:text-[1.32vw] translate-y-[100%]'>a responsive and dynamic interface, making Nexus user-friendly and efficient.</h3></span>
            </div>
        </div>
    )
}

export default ReactNexus