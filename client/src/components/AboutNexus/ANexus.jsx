import React from "react";
import { Power2, gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image1 from "/src/images/an-1.jpg";
import { Tilt } from "@jdion/tilt-react";
gsap.registerPlugin(useGSAP, ScrollTrigger);
function ANexus() {
  useGSAP(() => {
    gsap.to(".one-left span h3", {
      y: "0%",
      duration: 1.5,
      ease: Power2.easeInOut,
    });
  }, []);
  return (
    <div className="one w-full h-[100vh] md:flex flex flex-col md:flex-row items-center justify-between py-5 px-[3.75vw] bg-[#2A2828]">
      <div className="one-left w-full md:w-[55%] h-full flex flex-col items-start justify-start">
        <h1 className="md:text-[15vw] text-[40vw] md:-mt-[3.5vw] -mt-[12.5vw] font-mast text-center font-bold">
          NEXUS
        </h1>
        <span className="w-fit md:-mt-[2vw] -mt-[6vw] mb-[0.5vw] overflow-hidden  inline-block ">
          <h3 className=" font-loaderend1 text-[2.52vw] md:text-[1.39vw] translate-y-[100%]">
            NEXUS is an image sorting application designed to streamline your
            organization
          </h3>
        </span>
        <span className="w-fit mb-[0.5vw] overflow-hidden  inline-block ">
          <h3 className=" font-loaderend1 text-[2.4vw] md:text-[1.34vw] translate-y-[100%]">
            process. Ever struggle to find the perfect image amongst a large
            collection? NEXUS
          </h3>
        </span>
        <span className="w-fit mb-[0.5vw] overflow-hidden  inline-block ">
          <h3 className=" font-loaderend1 text-[2.35vw] md:text-[1.31vw] translate-y-[100%]">
            tackles this problem by allowing you to upload a target image and a
            set of reference
          </h3>
        </span>
        <span className="w-fit mb-[0.5vw] overflow-hidden  inline-block ">
          <h3 className=" font-loaderend1 text-[2.35vw] md:text-[1.322vw] translate-y-[100%]">
            images. NEXUS then intelligently sorts the reference images based on
            their similarity
          </h3>
        </span>
        <span className="w-fit mb-[0.5vw] overflow-hidden  inline-block ">
          <h3 className=" font-loaderend1 text-[2.52vw] md:text-[1.3vw] translate-y-[100%]">
            to your target, making it a breeze to locate visually similar images
            within your
          </h3>
        </span>
        <span className="w-fit mb-[0.5vw] overflow-hidden  inline-block ">
          <h3 className=" font-loaderend1 text-[2.52vw] md:text-[1.3vw] translate-y-[100%]">
            collection.
          </h3>
        </span>
      </div>
      <div className="one-right md:w-[43%] w-full -mt-[2vw] md:mt[0] h-full  p-10">
        <Tilt className="img-cont w-full rounded-lg overflow-hidden h-full ">
          <img src={image1} className="w-full h-full object-cover" alt="" />
        </Tilt>
      </div>
    </div>
  );
}

export default ANexus;
