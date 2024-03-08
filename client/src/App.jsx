import React from 'react'
import LoaderPage from './components/LoaderPage/LoaderPage'
import Home from './components/Home/Home'
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div >
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/" element={<LoaderPage/>} />
      </Routes>
    </div>
  )
}

export default App