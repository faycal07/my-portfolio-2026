import SectionHeading from '@/components/Helper/SectionHeading'
import { experiences } from '@/data'
import { spawn } from 'child_process'
import { Briefcase, GraduationCap } from 'lucide-react'
import React from 'react'

const Experience = () => {
  return (
    <section id='experience' className='py-16 bg-linear-to-b from-gray-200 via-cyan-800 to-gray-200 dark:bg-linear-to-b dark:from-gray-800 dark:via-cyan-800 dark:to-gray-800'>
      <SectionHeading title_1='Experience &' title_2='Education' description='My Journey Through Tech, Work & Education' />
      <div className='relative px-6 max-w-4xl mx-auto'>
        {/* timeline line */}
        <div className='absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-violet-500 via-lime-300 to-violet-500
        md:-translate-x-px'></div>
        {experiences.map((item, index) => {
          return <div data-aos="zoom-in-right" 
     data-aos-easing="ease-in-out" data-aos-anchor-placement="top-center" key={index} className={`relative flex flex-col md:flex-row gap-8 mb-12 
                ${index % 2 === 0 ? "md:flex-row-reverse " : ""}`}>
            {/* timeline node */}
            <div className='absolute left-4 md:left-1/2 w-9 h-9 -translate-x-1/2 rounded-full 
                  bg-amber-50 border-2 border-emerald-600 flex items-center justify-center z-10'>
              {item.type === "work" ? (
                <Briefcase className='w-6 h-6  text-emerald-300' />
              ) : (<GraduationCap className='w-6 h-6 text-emerald-300' />)}
            </div>
            {/* content */}
            <div className='ml-16 md:ml-0 md:w-[calc(50%-2rem)]'>
              <div className='bg-emerald-100 dark:bg-emerald-950 shadow-md rounded-2xl p-6 
                    hover:scale-105 transition-all duration-500 '>
                <div className='flex items-center gap-2 text-sm text-cyan-700 mb-2'>
                  <span className='px-3 py-1 rounded-4xl bg-blue-600/10 font-medium'>
                    {item.period}</span>
                </div>
                <h3 className='text-xl font-semibold mb-1'>{item.title}</h3>
                <p className='text-muted-foreground text-sm mb-3'>{item.company}</p>
                <p className='text-muted-foreground text-sm mb-4'>{item.description}</p>
                <div className='flex flex-wrap gap-2'>

                  {item.technologies.map((tech)=> {
                    return <span key={tech} className='text-xs px-2 py-1 rounded-lg
                    bg-lime-700 text-white'>
                      {tech}
                    </span>
                  })}

                </div>
              </div>
            </div>
            <div className='hidden md:block md:w-[calc(50%-2rem)]'></div>
          </div>
        })}
      </div>


    </section>
  )
}

export default Experience
