import React from "react";
import image1 from "/src/images/an-4.jpg";
import { Power2, gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Tilt } from "@jdion/tilt-react";
gsap.registerPlugin(useGSAP, ScrollTrigger);
function DbNexus() {
  useGSAP(() => {
    gsap.to(".nright-1 span h3", {
      y: "0%",
      duration: 1.5,
      ease: Power2.easeInOut,
      scrollTrigger: {
        trigger: ".nright-1",
        start: "top 30%",
        end: "top 25%",
        pin: true,
      },
    });
  }, []);
  return (
    <div className="one w-full h-[100vh] md:flex-row flex-col-reverse flex items-center justify-between py-5 px-[3.75vw]">
      <div className="nleft w-full md:w-[43%] h-full p-10 ">
        <Tilt className="img-cont w-full rounded-lg overflow-hidden h-full ">
          <img
            src={image1}
            className="w-full h-full object-cover object-right"
            alt=""
          />
        </Tilt>
      </div>
      <div className="nright-1 w-full md:w-[55%] h-full pt-5  flex flex-col md:items-end items-center justify-start md:justify-start">
        <h1 className="md:text-[13vw] text-[33vw] -mt-[20vw] md:-mt-[3.5vw] font-mast font-bold tracking-tight">
          DATABASE
        </h1>
        <span className="w-fit -mt-[0vw] md:mt-[2vw] mb-[0.5vw] overflow-hidden  inline-block ">
          <h3 className=" font-loaderend1 text-[2.41vw] md:text-[1.34vw] translate-y-[100%]">
            To manage the image data, NEXUS utilizes MongoDB, a NoSQL database
            known for
          </h3>
        </span>
        <span className="w-fit   mb-[0.5vw] overflow-hidden  inline-block ">
          <h3 className=" font-loaderend1 text-[2.41vw] md:text-[1.32vw] translate-y-[100%]">
            its flexibility and scalability. This is particularly advantageous
            for storing and sorting
          </h3>
        </span>
        <span className="w-fit   mb-[0.5vw] overflow-hidden  inline-block ">
          <h3 className=" font-loaderend1 text-[2.38vw] md:text-[1.32vw] translate-y-[100%]">
            large amounts of image data. Multer, a Node.js middleware,
            simplifies the process of{" "}
          </h3>
        </span>
        <span className="w-fit   mb-[0.5vw] overflow-hidden  inline-block ">
          <h3 className=" font-loaderend1 text-[2.45vw] md:text-[1.32vw] translate-y-[100%]">
            handling user-uploaded image files.
          </h3>
        </span>
      </div>
    </div>
  );
}

export default DbNexus;
