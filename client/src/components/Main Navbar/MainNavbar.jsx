import React from 'react'
import { Link} from 'react-router-dom'
const MainNavbar = () => {
    return (
        <nav className=' md:max-w-screen-xl max-w-screen-xs py-0 px-5 mx-auto font border-b-[2px] bg-[#2A2828] border-zinc-700 flex items-center justify-between'>
            <div className='n-left'>
                <Link to="/home">  <h1 className=' text-white font-mainNavbar md:text-[2.5vw] text-[6vw] font-extrabold'>Nexus</h1>
                </Link>
            </div>
            <div className='n-right flex items-center justify-between gap-5 md:gap-10'>
                <Link to='/aboutnexus'>
                <h3 className=' text-zinc-400 font-loaderend1 cursor-pointer  hover:shadow-slate-50 hover:text-glow bg-transparent text-[2.5vw] md:text-[1vw] font-medium hover:text-white duration-300' >About Nexus</h3>
                </Link>
                <Link to='/about'>
                <h3 className=' text-zinc-400 cursor-pointer  hover:shadow-slate-50 hover:text-glow bg-transparent text-[2.5vw] md:text-[1vw] font-loaderend1 hover:text-white duration-300' >About Us</h3>
                </Link>
                <Link to='/contact'>
                <h3 className=' text-zinc-400 cursor-pointer  hover:shadow-slate-50 hover:text-glow bg-transparent text-[2.5vw] md:text-[1vw] font-loaderend1 hover:text-white duration-300' >Contact Us</h3>
                </Link>
            </div>
        </nav>
    )


}

export default MainNavbar