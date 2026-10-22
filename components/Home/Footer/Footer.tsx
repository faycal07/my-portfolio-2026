import { footerSocialLinks } from '@/data'
import { FaceSlightlySmiling, Heart } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return <footer className='border-t bg-stone-300 dark:bg-cyan-950 border-slate-200 dark:border-slate-600
  py-12 rounded-t-4xl -mt-4 '>
    <div className='w-[80%] mx-auto'>
      <div className='flex flex-col md:flex-row items-center justify-between gap-6 '>
        <a href="#home" className='text-2xl font-bold text-cyan-900 dark:text-teal-300 '>
          {"<FM Port/>"}
        </a>

  <p className='text-md text-muted-foreground flex items-center gap-1'>
          Made with{''} <FaceSlightlySmiling className='w-6 h-6 text-fuchsia-700'/> by Mebarki Fayçal
        </p>

        <div className='flex items-center gap-4'>

          {footerSocialLinks.map((link)=>{
            return <a href={link.href} key={link.label} target='_blank' rel='noopener noreferrer' className='w-10
            h-10 rounded-2xl bg-amber-50 dark:bg-cyan-950 shadow-md flex items-center justify-center 
            text-muted-foreground hover:text-emerald-900 transition-colors'>

              <link.icon className='h-7 w-7'/>

            </a>
          })}

        </div>
      
      </div>
      <div className='mt-8 pt-8 border-t border-gray-400 dark:border-gray-300 text-center'>
        <p className='text-sm text-muted-foreground'> &copy; {new Date().getFullYear()} All rights reserved</p>
      </div>
    </div>

  </footer>
}

export default Footer
