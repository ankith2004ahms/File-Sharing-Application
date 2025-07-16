// "use client"
// import React from 'react'
// import Constant from '../_utils/Constant'
// import { useTypewriter,Cursor } from 'react-simple-typewriter';

// function Hero() {
//   const [text] = useTypewriter({
//     words:["XferLink:"],
//     loop:true
//   });
//   return (
//     <section className="">
//       <h1 className='text-center mt-6 text-3xl font-extrabold text-slate-800 sm:text-5xl'>Welcome To <span className='underline text-slate-600'>
//         {text}
//           </span></h1>
//   <div
//     className="mx-auto max-w-screen-xl px-4 py-20 
//     lg:flex "
//   >
    
//     <div className="mx-auto max-w-xl text-center">
      
//       <h1 className="text-xl font-extrabold text-slate-700 sm:text-5xl">
//         <span className='text-primary'>Upload, Save </span> 
//         and easily <span className='text-primary'>Share</span> your files in one place
//       </h1>

//       <p className="mt-4 sm:text-xl/relaxed text-slate-600">
//        {Constant.desc}
//       </p>

//       <div className="mt-8 flex flex-wrap justify-center gap-4">
//         <a
//           className="block w-full rounded
//            bg-primary px-12 py-3 text-sm 
//            font-medium text-black shadow-md
//             hover:shadow-lg focus:outline-none focus:ring active:bg-white sm:w-auto"
//           href="/upload"
//         >
//           Get Started
//         </a>

//         <a
//           className="block w-full rounded px-12 py-3 
//           text-sm font-medium text-primary shadow-md
//            hover:shadow-lg focus:outline-none focus:ring active:bg-white sm:w-auto"
//           href="/working"
//         >
//           Learn More
//         </a>
//       </div>
//     </div>
//   </div>
// </section>
//   )
// }

// export default Hero






"use client";
import React from "react";
import Constant from "../_utils/Constant";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FiUpload, FiShare2, FiLock, FiClock } from "react-icons/fi";
import Link from "next/link";

function Hero() {
  const [text] = useTypewriter({
    words: ["XferLink"],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
  });

  const features = [
    {
      icon: <FiUpload className="w-6 h-6 text-blue-500" />,
      title: "Easy Upload",
      description: "Drag & drop your files or click to browse. It's that simple!"
    },
    {
      icon: <FiShare2 className="w-6 h-6 text-blue-500" />,
      title: "Share Instantly",
      description: "Generate secure links to share with anyone, anywhere"
    },
    {
      icon: <FiLock className="w-6 h-6 text-blue-500" />,
      title: "Secure Transfers",
      description: "End-to-end encryption keeps your files safe and private"
    },
    {
      icon: <FiClock className="w-6 h-6 text-blue-500" />,
      title: "Available 24/7",
      description: "Access and share your files anytime, from any device"
    }
  ];

  return (
    <div className="relative overflow-hidden pt-28 md:pt-32 pb-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white z-0"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Share Files with</span>
            <span className="block bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              {text}
              <Cursor cursorColor="#3B82F6" />
            </span>
          </h1>
          
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            {Constant.desc}
          </p>
          
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/upload"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
            >
              Get Started for Free
            </Link>
            <Link
              href="/working"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold sm:text-3xl">Ready to simplify your file sharing?</h2>
          <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
            Join thousands of users who trust XferLink for their file sharing needs. No credit card required.
          </p>
          <div className="mt-8">
            <Link
              href="/upload"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-200"
            >
              Start Sharing Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
