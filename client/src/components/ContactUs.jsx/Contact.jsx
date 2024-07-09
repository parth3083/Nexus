import React from "react";
import MainNavbar from "../Main Navbar/MainNavbar";
import LeftPart from "./LeftPart";
import RightPart from "./RightPart";

function Contact() {
  return (
    <div className="main w-screen h-[100vh] bg-[#2A2828] overflow-hidden text-white">
      <MainNavbar />
      <div className="w-full h-[90%] mt-[1vw] md:flex-row flex flex-col  items-center justify-between   py-[4vw] px-[4vw]">
        {/* <div className='w-full h-full bg-green-400'></div> */}
        <LeftPart />
        <RightPart />
      </div>
    </div>
  );
}

export default Contact;
