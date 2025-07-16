"use client"
import React, { useState } from 'react'
import UploadForm from './_components/UploadForm'
import Header from './../../../_components/Header'
import  {app}  from './../../../firebaseConfig'
import { getStorage,ref,uploadBytesResumable,getDownloadURL } from "firebase/storage";
import { useUser } from '@clerk/nextjs'
import { generateRandomString } from './../../../_utils/GenerateRandomString';
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { useRouter } from 'next/navigation'
import Toast from './../../../_components/Toast';






const Upload = () => {

  const storage=getStorage(app)
  const [progress,setProgress]=useState();
  const db = getFirestore(app);
  const {user}=useUser();
  const router=useRouter();
  const [toast,setToast]=useState();
  const [fileDocId,setFileDocId]=useState();
  const uploadFile=(file)=>{
    const metadata = {
      contentType: file.type
    }
    const storageRef = ref(storage, 'file-upload/'+file?.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);
    uploadTask.on('state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');   
        setProgress(progress)
        progress==100&&getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          saveInfo(file,downloadURL);
          console.log(saveInfo)
          
        });
      }, )
  }
  const saveInfo=async(file,fileUrl)=>{
    const docId=generateRandomString().toString();
    setFileDocId(docId)
    await setDoc(doc(db, "uploadedFile", docId), {
      fileName:file?.name,
      fileSize:file?.size,
      fileType:file?.type,
      fileUrl:fileUrl,
      userEmail:user?.primaryEmailAddress?.emailAddress,
      userName:user?.fullName,
      password:'',
      id:docId,
      shortUrl:('https://file-sharing-application-nine.vercel.app/f/'+docId)
    })
    setToast({
      status:'Success!',
      msg:'File Uploaded...!'
  })
    router.push('/file-preview/'+docId)
  }
 
  return (
    <div className="min-h-screen bg-gray-50">
      <Header/>
      <div className="pt-20 pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className='text-2xl md:text-3xl font-bold text-gray-800'>
            Start <span className='text-blue-600'>Uploading</span> File and{' '}
            <span className='text-blue-600'>Share</span> it
          </h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Quickly upload your files and share them with anyone, anywhere.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <UploadForm 
            progress={progress} 
            uploadBtnClick={(file) => uploadFile(file)} 
          />
        </div>
        
        {toast?.status && (
          <Toast 
            toast={toast}
            closeToast={() => setToast(null)}
          />
        )}
      </div>
    </div>
  )
}

export default Upload