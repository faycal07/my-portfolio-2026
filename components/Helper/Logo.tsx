import { Rotate3d } from 'lucide-react'
import React from 'react'

const Logo = () => {
  return (
    <a href="/" className='flex items-center space-x-2'>
        <div className='bg-cyan-900 dark:bg-teal-300 w-10 h-10 rounded-md flex items-center justify-center flex-col'>
          <Rotate3d className='text-white w-6 h-6' />  
        </div>
        <h1 className='sm:text-xl hidden sm:block md:text-2xl text-cyan-900 dark:text-teal-300 font-bold'>
            {"FM Port"}
        </h1>
      
    </a>
  )
}

export default Logo
