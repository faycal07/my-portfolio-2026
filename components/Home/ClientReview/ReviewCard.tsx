import { QuoteIcon } from 'lucide-react';
import Image from 'next/image';
import React, { use } from 'react'
import { FaStar } from 'react-icons/fa6';


type Props = {
  user: {
    id:number;
    name: string;
    profession: string;
    userImage: string;
    review: string;
  }
}

const ReviewCard = ({user}:Props) => {
  return (
    <div className='bg-amber-50 shadow-md dark:bg-slate-900 rounded-2xl m-3 p-6 relative'>
<QuoteIcon className='w-8 h-8 absolute top-4 right-4 text-fuchsia-600 dark:text-lime-400 opacity-20'/>  
<div className='mt-6 flex items-center'>
  <FaStar className='w-3 h-3 text-red-900 dark:text-pink-600'/>
  <FaStar className='w-3 h-3 text-red-900 dark:text-pink-600'/>
  <FaStar className='w-3 h-3 text-red-900 dark:text-pink-600'/>
  <FaStar className='w-3 h-3 text-red-900 dark:text-pink-600'/>
  <FaStar className='w-3 h-3 text-red-900 dark:text-pink-600'/>
  </div>    
  <p className='mt-6 text-base text-stone-800 dark:text-stone-500'>
    {user.review}
  </p>
  <div className='w-full h-[1.2px] bg-slate-900 dark:bg-slate-300 opacity-15 mt-6 mb-6'></div>
  <div className='flex items-center space-x-4 '>
  <Image src={user.userImage} alt="image" width={50} height={50} className='rounded-4xl'/>
  <div> 
    <h1 className='font-bold text-gray-800 dark:text-gray-200'>
      {user.name}
    </h1>
    <p className='text-sm text-gray-500 dark:text-gray-400'>
      {user.profession}
      </p>
  </div>
  </div>
    </div>
  )
}

export default ReviewCard
