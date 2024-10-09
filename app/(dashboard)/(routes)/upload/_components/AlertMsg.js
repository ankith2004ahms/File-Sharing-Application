
import { AlertCircle } from 'lucide-react'
import React from 'react'

function AlertMsg({msg}) {
  return (
    <div className=' p-4 bg-red-500
    text-white w-[30%] rounded-md flex gap-5 justify-center items-center'>
    <AlertCircle/>
        {msg}
    </div>
  )
}

export default AlertMsg