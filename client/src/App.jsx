import React from 'react'
import LoaderPage from './components/LoaderPage/LoaderPage'
import Home from './components/Home/Home'
import {Routes,Route} from 'react-router-dom'
import AboutNexus from './components/AboutNexus/AboutNexus'
import Contact from './components/ContactUs.jsx/Contact'

function App() {
  return (
    <div >
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/" element={<LoaderPage />} />
        <Route path="/aboutnexus" element={<AboutNexus />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </div>
  )
}

export default App