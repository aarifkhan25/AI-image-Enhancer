

import Loading from './Loading';
import { useState } from 'react';
function ImagePreview({uploadImage, enhancedImage, loading}) {


     console.log(uploadImage)
  return (
    <><div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-2xl'>
            {/* original Image */}
            <div className='bg-white shadow-lg rounded-xl overflow-hidden'>
                 <h2 className=' font-semibold text-center bg-gray-800 text-white py-2'> Original Image </h2>
                 {uploadImage ? <img src={uploadImage} alt="" className='w-full h-full object-cover' /> :
                      <div className='flex items-center justify-center h-60 bg-gray-200 '>No image selected</div>}
            </div>
            {/* enhanced Image */}
            <div className='bg-white shadow-lg rounded-xl overflow-hidden'>
                 <h2 className=' font-semibold text-center bg-blue-700 text-white py-2'> Enhanced Image </h2>
                 {enhancedImage && !loading && (<img src={enhancedImage} alt="" className='w-full h-full object-cover' />)}
                 {loading ? <Loading /> : <div className='flex items-center justify-center h-60 bg-gray-200 '>No Enhanced image </div>}
            </div>

       </div>
       {/* download enhanced Image */}
     {enhancedImage && !loading &&  ( <div className='bg-blue-700 shadow-lg flex items-center justify-center rounded-2xl   h-15 p-2 mt-5'>

                 <a href={enhancedImage}  download={''} className='block  cursor-pointer border-2 border-dashed border-white rounded-lg p-1 text-gray-700 text-center hover:border-black transition-all'>
                      
                      <span className='  font-bold text-sm text-black hover:text-white'>Download Enhanced Image</span></a>
            </div>)}</>
  )
}

export default ImagePreview
