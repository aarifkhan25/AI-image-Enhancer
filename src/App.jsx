import React from 'react'
import Home from './Components/Home'
function App() {
  return (
    <div className='flex flex-col items-center justify-center  min-h-screen  bg-gray-100 py-8 px-4 '>
    <div className='text-center mb-6'>
      <h1 className='text-3xl font-bold text-gray-800 font-sans'>Ai Image Enhancer</h1>
      <p className=' text-gray-500 font-semibold'>Upload Your Image and let AI enhance to in seconds!</p>
    </div>
     <Home/> 
    <div className='text-sm text-gray-500 mt-6 font-mono'>
Create by aarif69khan@gmail.com
    </div>
    </div>
  )
}

export default App
