"use client"
import { Copy, CopyIcon } from 'lucide-react'
import React, {  useContext, useState } from 'react'
import GlobalApi from './../../../../../_utils/GlobalApi'
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import Toast from './../../../../../_components/Toast';

function FileShareForm({ file,onPasswordSave }) {
    const [isPasswordEnable,setIsEnablePassword]=useState(false);
    const [password,setPassword]=useState('');
    const [email,setEmail]=useState('');
    const [toast,setToast]=useState();
    const {user}=useUser();
   
      
        // setToast({
        //     status:'Info',
        //     msg:'Sending Email...!'
        // })
        // const data={
        //     emailToSend:email,
        //     userName:user?.fullName,
        //     fileName:file.fileName,
        //     fileSize:file.fileSize,
        //     fileType:file.fileType,
        //     shortUrl:file?.shortUrl
        // }

        // async function handleSubmit(e) {
        //     e.preventDefault();
        //     const response = await fetch("https://api.web3forms.com/submit", {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //             Accept: "application/json",
        //         },
        //         body: JSON.stringify({
        //             access_key: "YOUR_ACCESS_KEY_HERE",
        //             name: e.target.name.value,
        //             email: e.target.email.value,
        //             message: e.target.message.value,
        //         }),
        //     });
        //     const result = await response.json();
        //     if (result.success) {
        //         console.log(result);
        //     }
        // }
        const messg = ()=>{
            setToast({
                    status:'Notice',
                    msg:'Sending Email...!'
                })
        }
        
    
    const data={
        emailToSend:email,
        userName:user?.fullName,
        fileName:file?.fileName,
        fileSize:file?.fileSize,
        fileType:file?.fileType,
        shortUrl:file?.shortUrl
    }
    const onCopyClick=()=>{
        navigator.clipboard.writeText(file.shortUrl);
        setToast({
            status:'Copied',
            msg:'Url Copied!'
        })

    }
    return file && (
        <div className='flex flex-col border shadow-md gap-2'>
            <div>
            <label className='text-[14px] text-gray-500'>Short Url</label>
            <div className='flex gap-5 p-2 border rounded-md justify-between'>
                <input type="text" value={file.shortUrl} disabled
                    className='disabled:text-gray-500 bg-transparent
                    outline-none w-full' />
                <Copy className='text-gray-400 hover:text-gray-600 
                cursor-pointer' onClick={()=>onCopyClick()} />
            </div>
          
            </div>
            <div className='gap-3 flex mt-5'>
                <input type='checkbox'
                defaultChecked={file.password!=''}
                onChange={(e)=>setIsEnablePassword(e.target.checked)}/>
                <label>Enable Password?</label>
            </div>
            
            {isPasswordEnable?  
            <div className='flex gap-3 items-center'>
            <div className='border rounded-md w-full p-2'>
                 <input type="password" 
                 placeholder='password'
                 defaultValue={file.password}
                 className='disabled:text-gray-500 bg-white 
                 outline-none' onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button className='p-2 shadow-md text-black
                rounded-md disabled:bg-gray-300 hover:shadow-lg' 
                disabled={password?.length<3}
                onClick={()=>onPasswordSave(password)}
                >Save</button>
            </div>:null}

            <div className='border rounded-md p-3 mt-5'>
                    <label className='text-[14px] text-gray-500'>Send File to Email</label>
                    <div className='border rounded-md p-2'>
                    <input type="email" 
                    placeholder='example@gmail.com'
                    className=' bg-transparent
                    outline-none w-full' 
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>
                <Link 
  href={`mailto:${data.emailToSend}?subject=${data.userName} shared a file with you &body=
  Hi,%0D%0A%0D%0A

  Here are the details of your file submission:%0D%0A%0D%0A

  -----------------------------%0D%0A%0D%0A
  File Name : ${data.fileName}%0D%0A%0D%0A
  -----------------------------%0D%0A%0D%0A
  File Size : ${data.fileSize}%0D%0A%0D%0A

  -----------------------------%0D%0A%0D%0A
  File Type : ${data.fileType}%0D%0A%0D%0A
  -----------------------------%0D%0A%0D%0A
  File URL : ${data.shortUrl}%0D%0A%0D%0A

  -----------------------------%0D%0A%0D%0A
  Client Name : ${data.userName}%0D%0A%0D%0A
  -----------------------------%0D%0A%0D%0A

  Thank you !`}>
                <button  className='p-2 disabled:bg-gray-300
                 shadow-md text-black  hover:shadow-lg
                w-full mt-2 rounded-md disabled:text-gray-100'
                disabled={email?.length<3}
               onClick={()=>messg()}
                >Send Email</button></Link>
            </div>

           {toast?.status? <Toast 
           toast={toast}
           closeToast={()=>setToast(null)}
            />:null}
        </div>
    )
}

export default FileShareForm