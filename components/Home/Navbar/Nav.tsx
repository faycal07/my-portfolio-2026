"use client"

import Logo from '@/components/Helper/Logo'
import ThemeToggler from '@/components/Helper/ThemeToggler'
import { Navlinks } from '@/Constant/Constant'
import { Download, MenuIcon } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'


type NavProps ={
  openNav: () => void ;
}


const Nav = ({openNav}:NavProps) => {
        
     const [navBg,setNavBg]=useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    }
    window.addEventListener("scroll",handler)
     return () => window.removeEventListener("scroll",handler)
  },[]);   
  

  return (
    <div className={`transition-all ${navBg
  ? "bg-linear-to-b from-amber-100 to-white dark:from-slate-600 dark:to-stone-950 shadow-md"
  : ""
} duration-300 h-[12vh] z-100 fixed w-full`}>
      <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>

        {/* {logo} */}
        <Logo />

        {/* {Navlinks} */}
        <div className='hidden lg:flex items-center space-x-10'>
          {Navlinks.map((link, index) => {
            return (<Link key={index} href={link.href} className='dark:text-teal-300 text-cyan-900 hover:text-amber-500  dark:hover:text-amber-100 font-semibold transition-all duration-300'>
              <p>{link.name}</p>
            </Link>
            );
          })}
        </div>

        {/* {Buttons} */}
        <div className='flex items-center space-x-4'>



          <a href="/Faycal-Mebarki-CV-EN.pdf" download="Faycal-Mebarki-CV-EN.pdf" className='box-border relative z-20 inline-flex items-center justify-center w-auto px-4 sm:px-6 py-2 overflow-hidden font-bold text-teal-200 dark:text-cyan-950 transition-all duration-300 bg-cyan-950 dark:bg-teal-600 rounded-lg cursor-pointer group ring-offset-2 ring-1 ring-emerald-200 ring-offset-emerald-100 hover:ring-offset-emerald-600 ease focus:outline-none'>
            <span className='relative z-20 flex items-center space-x-2 text-base'>
              <Download className='w-4 h-4' />
              <span>Download CV</span>
            </span>
          </a>
          {/* theme toggler */}
          <ThemeToggler/>
          {/* burger menu */}
          <MenuIcon onClick={openNav} className='w-8 h-8 cursor-pointer text-cyan-950 dark:text-teal-200 lg:hidden'/>
          

        </div>
      </div>

    </div>
  )
}

export default Nav
