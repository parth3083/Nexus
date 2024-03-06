import React from 'react'
import image1 from '/src/images/Image1.png'
const LoaderPage1 = () => {
  return (
  

 <div className='page1 w-full h-[100vh] '>
    <div className='container-div w-[100%] h-[100vh] flex items-start justify-center'>
      <div className='rotate-div relative flex items-center justify-center gap-6 w-[180vw] h-[200vh] bg-black scale-100'>
        
        <div id='r1' className='row-div'>
            <div className='img-div' >
              <img src={image1} alt="" className=' w-full h-full object-contain' /> 
          </div>
          <div className='img-div'>
            <img src="" alt="" />
          </div>
          <div className='img-div'>
            <img src="" alt="" />
          </div>
          <div className='img-div'>
            <img src="" alt="" />
          </div>
      </div>
      <div id='r2' className='row-div'>
      <div className='img-div'></div>
          <div className='img-div'></div>
          <div className='img-div'></div>
          <div className='img-div'></div>
      </div>
      <div id='r3' className='row-div'>
      <div className='img-div'></div>
          <div className='img-div'></div>
          <div className='img-div'></div>
          <div className='img-div'></div>
      </div>
      <div id='r4' className='row-div'>
      <div className='img-div'></div>
          <div className='img-div'></div>
          <div className='img-div'></div>
          <div className='img-div'></div>
      </div>
      <div id='r5' className='row-div'>
      <div className='img-div'></div>
          <div className='img-div'></div>
          <div className='img-div'></div>
          <div className='img-div'></div>
      </div>





      </div>
    </div>
  </div> 


  )
}

export default LoaderPage1