"use client"
import React, { useState } from 'react'
import AlertMsg from './AlertMsg';
import FilePreview from './FilePreview';
import ProgressBar from './ProgressBar';

const UploadForm = ({uploadBtnClick,progress}) => {
    const [file, setFile] = useState();
    const [errorMsg, setErrorMsg] = useState();


    const onFileSelect = (file) => {
        console.log(file)
        if (file && file.size > 2000000) {
            console.log("Size is Greate than 2 MB");
            setErrorMsg('Maximum File Upload Size is 2MB')
            return;
        }
        setErrorMsg(null)
        setFile(file)
    }
  return (
    <>
    <div className='m-5 mt-10 items-center flex justify-center'>
        
<div className="flex items-center justify-center w-[50%]">
  <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-white border-dashed rounded-lg cursor-pointer bg-gray-50  dark:bg-gray-700 hover:bg-gray-100 dark:border-white dark:hover:border-white dark:hover:bg-gray-600">
    <div className="flex flex-col items-center justify-center pt-5 pb-6">
      <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
      </svg>
      <p className="mb-2 text-md text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
      <p className="text-sm  text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX Size : 2MB)</p>
    </div>
    <input id="dropzone-file"
                        type="file" className="hidden"
                        onChange={(event) => { onFileSelect(event.target.files[0])}} />
  </label>
</div>



    </div>
    {file? <FilePreview file={file} removeFile={()=>setFile(null)}/>:null}

    
                   {progress>0? <div className='flex justify-center mt-3'> <ProgressBar progress={progress}/></div>:<div className='justify-center flex items-center'>
    <button disabled={!file} className='p-2 mt-4 bg-white text-black
    w-[30%] rounded-full shadow-md hover:shadow-lg disabled:hover:shadow disabled:text-slate-500 disabled:bg-gray-100'
    onClick={()=>uploadBtnClick(file)}
    >
                    Upload</button>
                    </div>}
                   
    {errorMsg?<AlertMsg msg={errorMsg}/>:null}
                    </>
  )
}

export default UploadForm