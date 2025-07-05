import React from 'react';
import axios from 'axios';
const API_key='wxy0g48j7ytth7iif';
const BASE_URL='https://techhk.aoscdn.com/'
export const enhancedImageApi = async (file) => {
  try {
    //code to upload image 
// '/api/tasks/visual/scale/' Post request

const taskId= await uploadImage(file);
console.log("Task ID:", taskId);


    //fetch enhanced image
// '/api/tasks/visual/scale/{task_id}' Get request

const enhancedImageData= await PollFOrEnhanceImage(taskId);
    console.log("Enhanced Image Data:", enhancedImageData);

    return enhancedImageData;

  } catch (error) {
    console.error("Error in enhancedImageApi:", error);
  }

}

const uploadImage=async(file)=>{
//code to upload image 
// '/api/tasks/visual/scale/' Post request
  const formData = new FormData();
  formData.append('image_file', file);
const {data}=await axios.post(`${BASE_URL}api/tasks/visual/scale/`, formData,{
  headers:{
    'Content-Type': 'multipart/form-data',
    'X-API-Key': API_key
  }
} );
  if(!data?.data?.task_id){
    throw  new Error('Failed to upload image')
  }
  return data?.data?.task_id
}
const  fetchEnhancedImage=async(taskId)=>{
//fetch enhanced image
// '/api/tasks/visual/scale/{task_id}' Get request
const {data}=await axios.get(`${BASE_URL}api/tasks/visual/scale/${taskId}`,{
  headers:{
   
    'X-API-Key': API_key
  }
} );
console.log('enhanceData',data?.data);
 if(!data?.data){
    throw  new Error('Failed to upload image')
  }
  return data?.data

}

const PollFOrEnhanceImage=async(taskId,retries=0)=>{
  const result=await fetchEnhancedImage(taskId)
  if(result.state===4){
    console.log('Processing');
    if(retries >=20){
      throw new Error('Max retries reached.Please try again later')
    }

    // wait for 2 seconds

    await new Promise((resolve)=>setTimeout(resolve,2000));
    return PollFOrEnhanceImage(taskId,retries+1)
  }
  console.log('Enhance image URL',result)
return result
}

// task_id: "a9d794ef-6aca-4eb5-b95b-3f8c42fd943c"