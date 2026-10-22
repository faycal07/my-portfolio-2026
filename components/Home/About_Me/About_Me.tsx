import SectionHeading from '@/components/Helper/SectionHeading'
import { highlights, stats } from '@/data'
import Image from 'next/image'
import React from 'react'

const About_Me = () => {
  return (
    <section id='about-me' className='py-16 bg-gray-200 dark:bg-gray-800'>
      {/* section heading */}
      <SectionHeading 
      title_1="About" 
      title_2="Me" 
      description="Beyond the Code: A Little About Who I Am"
      />
      <div className='grid w-[90%] mx-auto lg:grid-cols-2 gap-12 items-center'>
        {/* image */}
        <div data-aos="fade-right" data-aos-delay="50"
     data-aos-easing="ease-in-out" data-aos-anchor-placement="top-center"  className='relative'>
          <div className='aspect-auto rounded-3xl overflow-hidden p-2'>
            <Image src={"/images/photo.jpg"} alt='profile' width={700} height={700}
            className='w-full h-full object-center rounded-3xl'/>

          </div>

        </div>
        {/* content */}
        <div data-aos="fade-left" data-aos-delay="200"
     data-aos-easing="ease-in-out" data-aos-anchor-placement="top-center" className='space-y-6'>
          <h3 className='text-2xl font-semibold'>
            An Enthusiastic developer for learning and creating
            </h3>
            
            
  <p className='text-muted-foreground leading-relaxed'>
  I&apos;m a Software Engineer with a strong interest in web development and modern technologies. I enjoy building practical, efficient, and user-focused solutions while continuously improving my skills.
</p>

<p className='text-muted-foreground leading-relaxed'>
  I mainly work with JavaScript, Next.js, WordPress CMS, and Tailwind CSS, and I&apos;m currently learning FastAPI to strengthen my backend development skills. I&apos;m curious, organized, and always motivated to keep learning and take on new challenges.
</p>
{/* highlights */}
<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4'>
  {highlights.map((item)=>{
    return (
    <div data-aos="zoom-in"
       key={item.text} className='flex items-center gap-3 text-sm'>
      <div className='w-8 h-8 shrink-0 rounded-lg bg-slate-300 flex items-center justify-center'>
        <item.icon className='sm:w-4 sm:h-4 text-indigo-950 '/>
        </div>
        <span className='text-muted-foreground'>{item.text}</span>
      </div>
    
    );
  })}
</div>
        </div>
      </div>
      {/* stats */}

<div className='mt-16 w-[90%] mx-auto '>
  <div className='grid grid-cols-2 lg:grid-cols-4 gap-6'>
    {stats.map((stat)=> {
      return <div 
      data-aos="zoom-in" data-aos-delay="150"
     data-aos-anchor-placement="top-center"
      key={stat.label}
      className='bg-cyan-950 dark:bg-slate-500 shadow rounded-2xl p-6 text-center'>
        <div className='text-3xl md:text-4xl font-bold text-emerald-200 mb-2 '>
          {stat.value}
        </div>
        <div className='text-sm text-muted-foreground '> {stat.label}</div>
      </div>
    })}
  </div>
</div>

    </section>
  )
}

export default About_Me
