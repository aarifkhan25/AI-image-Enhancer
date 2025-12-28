import React from 'react'

function ImageUpload({handleImageHandle}) {

  const showImageHandler = (e)=>{
    const file=e.target.files[0];
   handleImageHandle(file)
  }
  return (
    <div className='bg-white shadow-lg rounded-2xl  p-4 w-full max-w-xl'>
     
      <label htmlFor="fileInput" className='block w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-2 text-gray-700 text-center hover:border-blue-500 transition-all'>
      <input type="file" name="" id="fileInput" className='hidden' onChange={showImageHandler} />
      <span className='  font-bold text-gray-600'>Click and drag to upload your image</span></label>
    </div>
  )
}

export default ImageUpload;
