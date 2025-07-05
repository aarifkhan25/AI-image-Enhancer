import {useState} from 'react'
import ImagePreview  from './ImagePreview';
import ImageUpload from './ImageUpload';
import { enhancedImageApi } from '../assets/Utills/EnhanceImageApi';
function Home() {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);


  const handleImageHandle=async(file)=>{
  
setUploadImage( URL.createObjectURL(file))
setLoading(true);
try {
  const enhancedURL= await enhancedImageApi(file);
  setEnhancedImage(enhancedURL);
  setLoading(false)
  
} catch (error) {
  alert("Error enhancing image, please try again later.");
  console.error("Error uploading image:", error);
}

  }
  return (
    <>
     
      <ImageUpload handleImageHandle={handleImageHandle}/>

      <ImagePreview loading={loading} uploadImage={uploadImage} enhancedImage={enhancedImage?.image}/>
    </>
  )
}

export default Home
