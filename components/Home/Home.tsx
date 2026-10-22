'use client'

import AOS from 'aos';
import 'aos/dist/aos.css';

import React, { useEffect } from 'react'
import ThemeToggler from '../Helper/ThemeToggler'
import Hero from './Hero/Hero'
import About_Me from './About_Me/About_Me'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import Experience from './Experience/Experience'
import ClientReview from './ClientReview/ClientReview'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import { Asul } from 'next/font/google';

const Home = () => {

useEffect(()=>{
const initAOS = async()=>{
  await import('aos')
  AOS.init({
    duration:1000,
    easing:'ease-in',
    once:true,
    anchorPlacement:"top-bottom",
  })
}
initAOS()


},[])

  return (
    <div className='overflow-hidden'>
   <Hero/>
   <About_Me/>
   <Skills/>
   <Projects/>
   <Experience/>
   <ClientReview/>
   <Contact/>
  
   
    </div>
  )
}

export default Home
