import React from "react";

function LeftPart() {
  return (
    <div className="md:w-[50%] w-full  md:h-full h-[50%] flex flex-col items-center justify-start">
      <h2 className=" font-loaderend1 text-[5vw] md:text-[2vw] opacity-70">
        Looks like you need some help
      </h2>
      <h1 className=" font-loaderbutton text-[13vw] md:text-[6vw] -mt-[1vw]">
        Contact Us
      </h1>
      <div className=" hidden  w-full px-[11vw] contact md:flex flex-col items-start justify-center">
        <div className=" mb-[2vw]">
          <h2 className=" font-loaderend1 text-[1.4vw] opacity-70">Mail</h2>
          <h4 className=" font-loaderend1 text-[1vw] opacity-70">
            infonexus3078@gmail.com
          </h4>
        </div>
        <div className=" mb-[2vw]">
          <h2 className=" font-loaderend1 text-[1.4vw] opacity-70">Address</h2>
          <h4 className=" font-loaderend1 text-[1vw] opacity-70">
            221B Baker Street, Vadodara
          </h4>
        </div>
        <div className="">
          <h2 className=" font-loaderend1 text-[1.4vw] opacity-70">Phone</h2>
          <h4 className=" font-loaderend1 text-[1vw] opacity-70">
            123 4567 8901
          </h4>
        </div>
      </div>
    </div>
  );
}

export default LeftPart;
