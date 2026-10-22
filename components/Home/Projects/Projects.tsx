import SectionHeading from '@/components/Helper/SectionHeading'
import { projects } from '@/data'
import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <section id='projects' className='py-16 bg-linear-to-t from-gray-200 via-cyan-800 to-gray-200 dark:bg-linear-to-b dark:from-cyan-800 dark:to-gray-800'>
      <SectionHeading title_1='Project' title_2='Showcase' description="A selection of projects I've worked on and learned from"/>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-[85%] mx-auto'>
        {projects.map((project,index)=> {
            
            return <div data-aos="zoom-in-right" data-aos-delay={index*250}
     data-aos-easing="ease-in-out" data-aos-anchor-placement="top-center" key={index} >

                <ProjectCard {...project}/>
            </div>

        })}
      </div>
    </section>
  )
}

export default Projects
