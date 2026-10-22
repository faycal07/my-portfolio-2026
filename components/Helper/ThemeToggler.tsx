'use client'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

function ThemeToggler() {

const [mounted, setMounted]= useState(false)
const {theme, setTheme, systemTheme} = useTheme()

useEffect(()=>{
    const mountCheck = () => {setMounted(true)
    }
    mountCheck()
},[]);

if (!mounted) return null

const currentTheme = theme === 'system' ? systemTheme : theme

  return <button className='p-2 transition w-10 h-10 cursor-pointer bg-gray-100 dark:bg-gray-800 rounded-full flex flex-col items-center justify-center'
    onClick={()=> setTheme(currentTheme === 'dark' ? 'light' : 'dark')}>
       {currentTheme === 'dark' ? (
        <Sun className='text-white w-7 h-7 cursor-pointer' />
       ) : (
        <Moon className='text-black w-7 h-7 cursor-pointer' />
       )}
        </button>
}

export default ThemeToggler
