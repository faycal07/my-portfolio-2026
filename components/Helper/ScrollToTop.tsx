'use client'

import { ArrowUp} from 'lucide-react'
import React, { useEffect, useState } from 'react'

const ScrollToTop = () => {

const [isVisible,setIsVisible]= useState(false)

useEffect(()=>{
    const toggleVisibility = ( ) =>{
        if(window.scrollY > 300 ) setIsVisible(true)
            else setIsVisible(false)
    }
    window.addEventListener("scroll",toggleVisibility);
    return () => window.removeEventListener("scroll",toggleVisibility)
},[])

const scrollToTop = ()=> {
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
}

  return (
    <div className='fixed bottom-4 animate-bounce right-3'>
      {
        isVisible && (
            <button className='bg-pink-400 cursor-pointer text-white rounded-4xl w-12 h-12 
            flex items-center justify-center focus:outline-none' onClick={scrollToTop}>
                <ArrowUp/>
            </button>
        )
      }
    </div>
  )
}

export default ScrollToTop
