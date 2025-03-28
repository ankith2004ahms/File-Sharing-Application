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

function Hero() {
  const [text] = useTypewriter({
    words: ["XferLink:"],
    loop: true,
  });

  return (
    <section className="flex flex-col items-center justify-center px-6 py-16 lg:py-24">
      {/* Heading */}
      <h1 className="text-center text-3xl font-extrabold text-gray-800 sm:text-5xl">
        Welcome To{" "}
        <span className="underline text-gray-600 cursor-pointer hover:text-5xl">{text}</span>
        <Cursor />
      </h1>

      {/* Content Wrapper */}
      <div className="mx-auto max-w-screen-xl px-6 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-700 sm:text-4xl">
          <span className="text-primary">Upload, Save</span> and easily{" "}
          <span className="text-primary">Share</span> your files in one place
        </h2>

        <p className="mt-4 text-gray-600 sm:text-lg max-w-2xl mx-auto">
          {Constant.desc}
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            className="w-full sm:w-auto rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-black shadow-md transition duration-300 hover:bg-white hover:text-primary hover:shadow-lg focus:ring focus:ring-primary"
            href="/upload"
          >
            Get Started
          </a>

          <a
            className="w-full sm:w-auto rounded-lg border border-primary px-8 py-3 text-sm font-semibold text-primary shadow-md transition duration-300 hover:bg-primary hover:text-primary hover:shadow-lg focus:ring focus:ring-primary"
            href="/working"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
