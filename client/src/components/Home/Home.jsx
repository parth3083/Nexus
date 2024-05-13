import React, { useState } from "react";
import MainNavbar from "../Main Navbar/MainNavbar";
import axios from "axios"; // Import Axios
import {Link} from 'react-router-dom'

const Home = () => {
  const handleFileInputClick = (inputId) => {
    document.getElementById(inputId).click();
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
};
  const [singleFile, setSingleFile] = useState(null);
  const [multipleFiles, setMultipleFiles] = useState([]);
  const [name, setName] = useState('');

  const handleSingleUpload = (event) => {
    setSingleFile(event.target.files[0]);
  };

  const handleMultipleUpload = (event) => {
    setMultipleFiles(Array.from(event.target.files)); // Convert to array
  };

  const handleSubmit = async () => {
    const singleFormData = new FormData();
    singleFormData.append("singleFile", singleFile);
    singleFormData.append("name", name);

    const multipleFormData = new FormData();
    multipleFiles.forEach((file) =>
      multipleFormData.append("multipleFiles", file)
    );
    multipleFormData.append("name", name);

    try {
      // Send separate requests for single and multiple uploads
      await axios.post("http://localhost:3001/upload/single", singleFormData);
      await axios.post(
        "http://localhost:3001/upload/multiple",
        multipleFormData
      );
      alert("Files uploaded successfully!");
    } catch (error) {
      console.error(error);
      alert("Error uploading files!");
    }
  };

  return (
    <>
      <div className="bg-[#2A2828] w-screen h-[100vh] overflow-auto font-loaderend1">
        <MainNavbar />
        <div className="text font-loaderend1 w-full mt-3 md:mt-2">
          <h3 className="md:text-[2vw] text-[4vw] text-white text-center">
            Caught in the pixel storm? Fear not, we'll be your{" "}
            <span className="text-orange-500">Digital Umbrella</span>!
          </h3>
        </div>

        <div className="input_data w-full mt-6 md:mt-5">
          <div className="md:px-[30vw] px-[20vw]">
            <input onChange={handleNameChange} type="text" className='w-full h-[6vw] md:h-[2.75vw] mb-2 md:mb-4 pl-4 outline-none border-white border-2 bg-transparent md:rounded-lg rounded-md text-white' placeholder='Enter your name' required />
                            {/* <input type="email" className='w-full h-[6vw] md:h-[2.75vw] pl-4 outline-none border-white border-2 bg-transparent rounded-lg text-white' placeholder='Enter your email' required />  */}
          </div>
        </div>

        <div className="images_upload w-full mt-9 h-[50vh] px-[3.5vw]">
          <div className="image_container w-full h-full  flex items-center justify-between">
            <div className="left_container w-[48%] p-[1vw] h-full ">
              <div
                className="left_upload border-2 border-white border-dashed cursor-pointer flex items-center justify-center w-full h-full "
                onClick={() => handleFileInputClick("fileInputA")}
              >
                <input
                  type="file"
                  id="fileInputA"
                  onChange={handleMultipleUpload}
                  multiple
                  hidden
                />
                <h2 className="text-[2.75vw] md:text-[2vw] text-white opacity-40 select-none">
                  Upload the bunch of images
                </h2>
              </div>
            </div>
            <div className="right_container w-[48%] p-[1vw] h-full ">
              <div
                className="right_upload border-2 border-white border-dashed cursor-pointer flex items-center justify-center w-full h-full "
                onClick={() => handleFileInputClick("fileInputB")}
              >
                <input
                  type="file"
                  id="fileInputB"
                  onChange={handleSingleUpload}
                  hidden
                />
                <h2 className="text-[2.85vw] md:text-[2vw] text-white opacity-40 select-none">
                  Upload your image
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="get_sorted w-full items-center flex justify-center mt-3">
          <button
            type="submit"
            className="bg-purple-500 px-3 py-1 rounded-lg font-loaderbutton text-white text-[5vw] md:text-[2vw]"
            onClick={handleSubmit}
          >
            <Link to='/output'>
            Get Sorted
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
