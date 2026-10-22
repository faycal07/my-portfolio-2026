import { Navlinks } from '@/Constant/Constant'
import { X } from 'lucide-react'
import Link from 'next/link'

import React from 'react'

type NavProps = {
  showNav:boolean;
  closeNav: () => void;
}

const MobileNav = ({closeNav,showNav}:NavProps) => {

const sidebarOpenClose = showNav ? "translate-x-0":"translate-x-[-100%]";


  return (
    <div>
      {/* overlay */}
      <div className={`fixed ${sidebarOpenClose} inset-0 transform transition-all duration-500 z-1002 bg-slate-900 opacity-70 w-full h-screen`}>

      </div>

      {/* navlinks */}
      <div className={`text-white ${sidebarOpenClose} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm-w[60%] bg-teal-700 space-y-6 z-1050`}>
        {Navlinks.map((link,index) => {
          return <Link key={index} href={link.href}>
            <p className='text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]'>{link.name}</p>
          </Link>
        })}
          {/* close icon */}
          <X onClick={closeNav} className='absolute top-5 right-5 sm:w-8 h-6 w-6'/>
      </div>
    
      
    </div>
  )
}

export default MobileNav
