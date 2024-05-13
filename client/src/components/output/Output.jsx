import MainNavbar from '../Main Navbar/MainNavbar'
import React, { useEffect, useState } from "react";
import axios from "axios";

function Output() {
  const [images, setdata] = useState([]);
  useEffect(() => {
    const fetchImages = async () => {
    await  axios
      .get("http://localhost:3001/sorted-images")
      .then((res) => {
        console.log(res.data)
        setdata(res.data)
      })
      .catch((err) => console.log(err));
    }
    const intervalId = setInterval(fetchImages, 5000); // Polling every 5 seconds
    fetchImages(); // Initial fetch
    return () => clearInterval(intervalId);
  }, []);
  return (
      <div className='main w-screen h-[100vh] bg-[#2A2828] overflow-x-hidden text-white'>
      <MainNavbar />
      <h1 className=' font-loaderend1 mt-5 text-5xl text-center'>Output Images</h1>
      <div className=' w-full overflow-y-auto px-[4vw] min-h-[80vh] mt-5 flex gap-[5vw] flex-wrap'>
        {images ? images.map((singleData,index) => {
          const image_1=singleData.Sorted_image_string;
        return  <div key={index} className="card w-[40vw] md:w-[18vw]  h-[45vw] md:h-[22vw] flex flex-col items-center gap-3">
          <div className=' overflow-hidden w-full h-[80%] rounded-2xl'>
            <img src={image_1} className='w-full h-full object-contain' alt="" />
          </div>
          <h1 className='text-white font-loaderend1 text-2xl'>Image { index+1}</h1>
        </div>
        }) : <h1 className=' font-loaderend1 mt-5 text-5xl text-center'>Images are loading </h1>}
        
      </div>
    </div>
  )
}

export default Output