'use client'


import { Button } from '@/components/ui/button'
import { Download, FolderOpen } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  const [swapped, setSwapped] = useState(false)

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined

    // First collision: halfway through the first movement
    const firstCollision = setTimeout(() => {
      setSwapped(prev => !prev)

      // Every next collision happens 6 seconds later
      interval = setInterval(() => {
        setSwapped(prev => !prev)
      }, 6000)
    }, 3000)

    return () => {
      clearTimeout(firstCollision)
      if (interval) clearInterval(interval)
    }
  }, [])

  return (
    <section id='home' className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[radial-gradient(circle,#a8ffdf_0%,#21596E_100%)] dark:bg-[radial-gradient(circle,rgba(26,75,107,1)_0%,rgba(5,110,87,1)_100%)]">

      {/* =========================================================
          BACKGROUND DECORATION
          These blurred circles create a soft glow effect
      ========================================================== */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-emerald-300/10 blur-3xl" />

      {/* =========================================================
          LEFT 3D CHARACTER
          hidden lg:flex: Hide character on small screens.
          left-0: Put character on far left.
          perspective: Gives the element real 3D depth.
      ========================================================== */}
      <div className="hidden lg:flex absolute left-0 xl:left-8 bottom-8 z-10 w-62.5 xl:w-[320px] items-end justify-center perspective-[1000px]">
        <div data-aos="fade-right" className="relative transition-transform duration-500 transform-[rotateY(12deg)_rotateX(2deg)] hover:transform-[rotateY(5deg)_rotateX(0deg)_translateY(-8px)]">

          {/* Left character image */}
          <img
            src="/images/dev-male.png"
            alt="3D developer on the left"
            className="relative z-10 w-full h-auto object-contain drop-shadow-[0_30px_25px_rgba(0,0,0,0.35)]"
          />

          {/* Shadow under the character */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-2 w-40 h-6 rounded-full bg-black/30 blur-xl -z-10" />
        </div>
      </div>

      {/* LEFT ANIMATED CARD */}
      <div className="hidden lg:block absolute left-[18%] top-[35%] z-30 animate-pass-left-right">
        <div className="px-5 py-3 rounded-xl bg-slate-950/80 backdrop-blur-xl border border-cyan-300/20 font-mono text-sm shadow-[0_15px_35px_rgba(0,0,0,0.35)]">
          {!swapped ? (
            <>
              <span className="text-pink-400">&lt;</span>
              <span className="text-cyan-300">Code</span>
              <span className="text-pink-400">{' / >'}</span>
            </>
          ) : (
            <>
              <span className="text-yellow-300">{'{'}</span>
              <span className="text-cyan-300">{' Next '}</span>
              <span className="text-yellow-300">{'}'}</span>
            </>
          )}
        </div>
      </div>

      {/* =========================================================
          CENTER HERO CONTENT
          z-20: Keeps your content above side decorations.
          max-w-2xl: Prevents the content from becoming too wide.
      ========================================================== */}
      <div className="relative z-20 w-full max-w-2xl px-6 text-center">

        {/* =====================================================
            AVAILABILITY BADGE
        ====================================================== */}
        <div data-aos="fade-up" className="sm:mb-6">
          <span className="group inline-flex items-center gap-3 px-5 py-2.5 mb-8 rounded-full border border-white/40 dark:border-white/10 bg-white/60 dark:bg-white/10 backdrop-blur-xl text-sm font-medium text-slate-700 dark:text-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.15),inset_0_1px_1px_rgba(255,255,255,0.8)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.15)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:bg-white/70 dark:hover:bg-white/15">

            {/* Animated green availability dot */}
            <span className="relative flex h-3 w-3">
              {/* Ping animation */}
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />

              {/* Main green dot */}
              <span className="relative inline-flex h-3 w-3 rounded-full bg-linear-to-br from-emerald-300 to-emerald-600 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
            </span>

            <span>Available for opportunities</span>
          </span>
        </div>

        {/* =====================================================
            MAIN TITLE
        ====================================================== */}
        <h1 data-aos="fade-up" data-aos-delay="500" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Hello, I&apos;m{' '}
          <span className="text-pink-700 dark:text-indigo-400 font-serif italic">
            Fayçal Mebarki
          </span>
        </h1>

        {/* =====================================================
            TYPEWRITER TEXT
        ====================================================== */}
        <div data-aos="fade-up" data-aos-delay="1000" className="text-xl sm:text-2xl md:text-3xl text-slate-700 dark:text-amber-100 font-semibold mb-4 sm:mb-8 min-h-12">
          <TypeAnimation
            sequence={[
              'Full Stack Developer', 2000,
              'Problem Solver', 2000,
              'Enthusiastic Learner', 2000,
              'WordPress & SEO Developer', 2000,
            ]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
            className="font-mono"
          />
        </div>
        {/* description */}
        <p data-aos="fade-up" data-aos-delay="1500" className='text-lg text-muted-foreground dark:text-slate-200 max-w-2xl mx-auto mb-10'>
          Quick learner, highly resilient, 
          passionate worker, and strong team player.
        </p>
        {/* buttons */}
        <div data-aos="fade-up" data-aos-delay="2000" className='flex flex-col sm:flex-row gap-4 justify-center'>
        <Button size={"lg"} asChild  className="w-fit mx-auto sm:mx-0 ">
          <a href="#_"> 
            <FolderOpen className='w-5 h-5 mr-2'/>
            View Projects

          </a>

        </Button>

         <Button size={"lg"} asChild  className="w-fit mx-auto sm:mx-0 ">
          <a href="#_"> 
            <Download className='w-5 h-5 mr-2'/>
            Download CV

          </a>

        </Button>

        </div>
      </div>

      {/* RIGHT ANIMATED CARD */}
      <div className="hidden lg:block absolute right-[18%] top-[45%] z-30 animate-pass-right-left">
        <div className="px-5 py-3 rounded-xl bg-slate-950/80 backdrop-blur-xl border border-violet-300/20 font-mono text-sm shadow-[0_15px_35px_rgba(0,0,0,0.35)]">
          {!swapped ? (
            <>
              <span className="text-yellow-300">{'{'}</span>
              <span className="text-cyan-300">{' Next '}</span>
              <span className="text-yellow-300">{'}'}</span>
            </>
          ) : (
            <>
              <span className="text-pink-400">&lt;</span>
              <span className="text-cyan-300">Code</span>
              <span className="text-pink-400">{' / >'}</span>
            </>
          )}
        </div>
      </div>

      {/* =========================================================
          RIGHT 3D CHARACTER
      ========================================================== */}
      <div className="hidden lg:flex absolute right-0 xl:right-8 bottom-8 z-10 w-62.5 xl:w-[320px] items-end justify-center perspective-[1000px]">
        <div data-aos="fade-left" className="relative transition-transform duration-500 transform-[rotateY(-20deg)_rotateX(2deg)] hover:transform-[rotateY(-5deg)_rotateX(0deg)_translateY(-8px)]">

          {/* Right character image */}
          <img
            src="/images/dev-male2.png"
            alt="3D developer on the right"
            className="relative z-10 w-full h-auto object-contain drop-shadow-[0_30px_25px_rgba(0,0,0,0.35)]"
          />

          {/* Floor shadow */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-2 w-40 h-6 rounded-full bg-black/30 blur-xl -z-10" />
       
      
        </div>
      
      </div>

    </section>
  )
}

export default Hero


