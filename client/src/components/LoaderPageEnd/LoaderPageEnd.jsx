import React from 'react'
import { Power2, gsap } from "gsap";
import { useGSAP } from "@gsap/react"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link} from 'react-router-dom'
gsap.registerPlugin(useGSAP,ScrollTrigger);
const LoaderPageEnd = () => {
    useGSAP(() => {
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".page2",
                start: "50% 50%",
                end: "100% 50%",
                scrub: 1,
                pin: true,
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
            <div className='page2 w-full h-[100vh]   overflow-hidden relative'>
                <div className='one absolute bg-black w-full h-full text-white flex flex-col items-center justify-center gap-[5vw]'>
                    <h1 className='text-8xl font-loaderend1'>Tame the Image Chaos</h1>
                    <Link to='/home'>
                        <button className='px-5 py-3 bg-purple-700 font-loaderbutton rounded-md text-5xl outline-none' >Get Started</button>
                    </Link>
                </div>
                 <div className='two absolute bg-white w-full h-full top-[50%] flex flex-col overflow-hidden items-center justify-start'>
                    <h1 className='text-[12vw] font-semibold -mt-[10.5%] select-none'>Nexus</h1>
                </div>
                <div className='three absolute bg-white w-full h-full bottom-[50%] flex flex-col items-center overflow-hidden justify-end'>
                    <h1 className='text-[12vw] font-semibold -mb-[7.75%] select-none'>Nexus</h1>
                </div> 
            </div>
        </>
    )
}

export default LoaderPageEnd