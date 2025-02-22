import Header from '../../../_components/Header'
import { UserButton } from '@clerk/nextjs'
import React from 'react'

const working = () => {
  return (
    <div>
    <Header/>
    <div className='mt-8 mb-10'>
    <h1 className='text-3xl text-center mt-5 font-extrabold text-slate-700'>🚀 How Does it work?</h1>
    <div className='mt-5 ml-32'>
    <h3 className='font-bold text-2xl mt-10'>
    1️⃣ Get Started:
    </h3>
    <p className='font-medium'>
    🔹 Click on the "Get Started" button on the homepage to begin your seamless file-sharing journey.
    </p>
    <h3 className='font-bold text-2xl mt-10'>
    2️⃣ Upload Your File 📂:
    </h3>
    <p className='font-medium '>
    🔹 On the upload page, either:<br/>
    📌 Drag & Drop your file or<br/>
    📌 Click on the upload area to select a file.<br/>
🔹 Hit the "Upload" button & watch the progress bar ⏳ in action.<br/>
🔹 Once uploaded, ✅ a toast message confirms: "Successfully Uploaded!"<br/>
    </p>
    <h3 className='font-bold text-2xl mt-10'>
    3️⃣ File Information & Sharing 🔗:
    </h3>
    <p className='font-medium'>
    🔹 After upload, you are redirected to the File Info Page 📜, where you can:<br/>
    📁 View File Details: File Name, Size, Type.<br/>
    🔗 Copy the Short URL (Click the 📋 icon to copy instantly).<br/>
    ✅ A toast message confirms: "URL Copied Successfully!"<br/>
    </p>
    <h3 className='font-bold text-2xl mt-10'>
    4️⃣ Add Password Protection 🔐 (Optional):
    </h3>
    <p className='font-medium'>
    🔹 Enable password security by checking "Enable Password".<br/>
🔹 Enter a secure password & click Save.<br/>
🔹 You’ll see a toast notification: "Password Set Successfully!"<br/>

📌 At the Receiver's End:<br/>
    🔸 The file is accessible only if the recipient enters the correct password.<br/>    </p>
<h3 className='font-bold text-2xl mt-10'>
5️⃣ Send File via Email 📧 (Optional):    </h3>
    <p className='font-medium'>
    🔹 Enter the receiver’s email in the "Send Email" field.<br/>
🔹 Click "Send Email", and a toast notification appears: "Sending Email..."<br/>
🔹 The email draft opens on your local mail app, pre-filled with:<br/>
    📌 File Name<br/>
    📌 File Type<br/>
    📌 Short URL<br/>
    📌 Description<br/>
🔹 Simply hit Send to share the file instantly!    <br/></p>
    </div>
       {/* <UserButton/> */}
       </div>
    </div>
  )
}

export default working