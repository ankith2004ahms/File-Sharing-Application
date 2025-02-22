import Header from '../../../_components/Header'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const about = () => {
  return (
    <div>
    <Header/>
    <div className='mt-8 mb-10'>
    <h1 className='text-3xl text-center mt-5 font-extrabold text-slate-700 '>📌 About Us</h1>
    <div className='mt-5 ml-32'>
    <h3 className='font-bold text-2xl mt-10'>
    Empowering Seamless & Secure File Sharing 🚀:
    </h3>
    <p className='font-medium'>
    Welcome to <Link href={'/'}><span className='underline font-bold hover:font-extrabold'><span className='text-slate-500'>Xfer</span>Link:</span></Link> , your ultimate solution for fast, secure, and hassle-free file sharing! Whether you need to share <br/> documents, images, or any other files, we make it simple, efficient, and secure for everyone.
    </p>
    <h3 className='font-bold text-2xl mt-10'>
    🌟 Our Mission:
    </h3>
    <p className='font-medium '>
    At <Link href={'/'}><span className='underline font-bold hover:font-extrabold'><span className='text-slate-500'>Xfer</span>Link:</span></Link>, our mission is to bridge the gap between speed, security, and simplicity in file sharing. We aim to provide:<br/>
✔ Effortless Uploading & Sharing 📂<br/>
✔ Seamless User Experience 🔗<br/>
✔ Robust Security Features 🔐<br/>
✔ Instant Accessibility Anytime, Anywhere 🌍<br/>
    </p>
    <h3 className='font-bold text-2xl mt-10'>
    🚀 Why Choose Us?:
    </h3>
    <p className='font-medium'>
    🔹 Lightning-Fast Uploads & Downloads ⚡<br/>
🔹 One-Click File Sharing with Short URLs 🔗<br/>
🔹 Password Protection for Extra Security 🔐<br/>
🔹 No Technical Skills Required – Super Easy to Use! 🤩<br/>
🔹 Email Sharing Made Simple 📧<br/>
    </p>
    <h3 className='font-bold text-2xl mt-10'>
    🔒 Security You Can Trust:
    </h3>
    <p className='font-medium'>
    Your privacy & security are our top priorities. With end-to-end encryption and password protection, we ensure that your <br/>files remain safe & accessible only to authorized users.
   </p>
<h3 className='font-bold text-2xl mt-10'>
🌍 Join Thousands of Happy Users!:    </h3>
    <p className='font-medium'>
    Whether you're a professional, freelancer, student, or business owner, <Link href={'/'}><span className='underline font-bold hover:font-extrabold'><span className='text-slate-500'>Xfer</span>Link:</span></Link> is here to make your file-sharing <br/> experience faster, safer, and smarter.

🚀 Try it today and experience the future of file sharing!</p>
    </div>
       {/* <UserButton/> */}
       </div>
    </div>
  )
}

export default about