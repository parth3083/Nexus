import React from 'react'
import { Power3, gsap } from "gsap";
import { useGSAP } from "@gsap/react"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link} from 'react-router-dom'
gsap.registerPlugin(useGSAP,ScrollTrigger);
const LoaderPageEnd = () => {
    useGSAP(() => {
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".page3",
                start: "50% 50%",
                end: "100% 50%",
                scrub: 1,
                pin: true,
                ease: Power3,
                duration:5
            }
        });
        tl.to('.two', {
            y: "200%"
        },"a")
        tl.to('.two h1', {
            y:"-100%"
        },"a")
        tl.to('.three', {
            y: "-200%"
        }, "a")
        tl.to('.three h1', {
            y:"100%"
        }, "a")
        tl.from(".one button", {
            y:"450%"
        })
    },[])
    return (
        <>
            <div className='page3 w-full h-[100vh]   overflow-hidden relative'>
                <div className='one absolute bg-purple-300 w-full h-full text-white flex flex-col items-center justify-center gap-[10vw]'>
                    <h1 className='md:text-8xl text-7xl font-loaderend1 text-purple-950'>Tame the Image Chaos</h1>
                    <Link to='/home'>
                        <button className='px-5 py-3 bg-purple-700 font-loaderbutton rounded-md text-5xl outline-none' >Get Started</button>
                    </Link>
                </div>
                 <div className='two absolute bg-white w-full h-full top-[50%] flex flex-col overflow-hidden items-center justify-start'>
                    <h1 className='md:text-[12vw] text-[28vw] font-semibold md:-mt-[10.5%] -mt-[23.5%] text-purple-900 select-none'>Nexus</h1>
                </div>
                <div className='three absolute bg-white w-full h-full bottom-[50%] flex flex-col items-center overflow-hidden justify-end'>
                    <h1 className='md:text-[12vw] text-[28vw] font-semibold md:-mb-[7.75%] -mb-[20%] text-purple-900 select-none'>Nexus</h1>
                </div> 
            </div>
        </>
    )
}

export default LoaderPageEnd