"use client"
import React, { useEffect,useState } from 'react'
import Header from '../../../../_components/Header'
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";
import  {app}  from './../../../../firebaseConfig'
import FileInfo from './_components/FileInfo';
import FileShareForm from './_components/FileShareForm';
import { ArrowLeftSquare } from 'lucide-react';
import Link from 'next/link';
import Toast from './../../../../_components/Toast';



const FilePreview = ({params}) => {
  const db = getFirestore(app);
  const [file,setFile]=useState();
  const [toast,setToast]=useState();

    useEffect(()=>{
        console.log(params?.fileId)
        params?.fileId&&getFileInfo()
    },[])

    const getFileInfo=async()=>{
      const docRef = doc(db,'uploadedFile',params?.fileId)
      const docSnap=await getDoc(docRef)
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setFile(docSnap.data());
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    }
    const onPasswordSave=async(password)=>{
      const docRef=doc(db,"uploadedFile",params?.fileId);
      await updateDoc(docRef,{
          password:password
      })
      setToast({
        status:'Success!',
        msg:'Password saved Successfully...!'
    })

  }
  return (
    <div className="min-h-screen bg-gray-50">
      <Header/>
      <div className="pt-20 pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Link href='/upload' className='flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-6 transition-colors'>
              <ArrowLeftSquare className="w-5 h-5"/>
          <span>Back to Upload</span>
        </Link>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">File Preview & Share</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* File Preview Section */}
              <div className="border-r border-gray-100 pr-6">
                <h2 className="text-lg font-semibold text-gray-700 mb-4">File Details</h2>
                <FileInfo file={file}/>
              </div>
              
              {/* File Share Section */}
              <div className="lg:pl-6">
                <h2 className="text-lg font-semibold text-gray-700 mb-4">Sharing Options</h2>
                <FileShareForm 
                  file={file} 
                  onPasswordSave={(e) => onPasswordSave(e)}
                />
              </div>
            </div>
          </div>
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

export default FilePreview