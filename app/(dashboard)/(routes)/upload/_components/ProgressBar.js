import React from 'react'

function ProgressBar({progress}) {
  return (
    <div className='bg-gray-400 w-[50%] h-3 mt-3
    rounded-full'>
        <div className=' bg-orange-500 h-3
        rounded-full text-[10px] text-center text-white'
        style={{width:`${progress}%`}}>
             {`${Number(progress).toFixed(0)}%`}
        </div>
       
    </div>
  )
}

export default ProgressBar