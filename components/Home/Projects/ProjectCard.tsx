

import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

import Image from 'next/image';
import React from 'react'
import { FaGithub } from 'react-icons/fa6';


type Props ={
    title:string;
    description:string;
    image:string;
    techStack:string[];
    demoUrl?:string;
    githubUrl?:string;
}


const ProjectCard = ({description,image,techStack,demoUrl,githubUrl,title}:Props) => {
  return (
    <div className='group relative h-full flex flex-col bg-amber-100 dark:bg-slate-900 shadow-md rounded-2xl overflow-hidden  '>
        {/* image container */}
      <div className='relative h-48 overflow-hidden shrink-0'>
        <Image src={image} alt={title} width={400} height={400} className='w-full h-full object-cover'/>

      </div>
      {/* main content */}
      <div className='p-6 flex flex-col flex-1 '>
        <h3 className='text-xl text-stone-950 dark:text-stone-50 font-semibold mb-2 group-hover:text-cyan-500
        transition-colors'>{title}</h3>
        <p className='text-muted-foreground text-sm mb-4 line-clamp-2'>
            {description}
        </p>
        {/* tech stacks */}
        <div className='flex flex-wrap gap-2 mb-6 '>
            {techStack.map((tech)=>{
              return <span key={tech} className='text-xs px-3 py-1 rounded-full bg-blue-950 text-amber-50 font-medium'>
                {tech}
              </span>
            })}
        </div>
        {/* buttons */}
        <div className='flex gap-3 mt-auto'>
          {
            demoUrl && (
              <Button asChild size={"sm"} className='flex-1'>
                <a href={demoUrl} target='_blank' rel="noopener noreferrer">
                 <ExternalLink className='w-4 h-4 mr-2'/>
                 Live Demo
                </a>
              </Button>
            )
          }
          {
            githubUrl && (
              <Button asChild variant={'outline'} size={"sm"} className='flex-1'>
                <a href={githubUrl} target='_blank' rel="noopener noreferrer">
                 <FaGithub className='w-4 h-4 mr-2'/>
                 Github
                </a>
              </Button>
            )
          }
        </div>
      </div>



    </div>
  )
}

export default ProjectCard
