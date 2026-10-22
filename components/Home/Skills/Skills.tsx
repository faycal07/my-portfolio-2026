import SectionHeading from '@/components/Helper/SectionHeading'
import { skillCategories } from '@/data'
import React from 'react'
import SkillCard from './SkillCard'

const Skills = () => {
    return (
        <section id='skills' className='py-16 bg-linear-to-b from-gray-200 via-cyan-800 to-gray-200 dark:bg-linear-to-b dark:from-gray-800 dark:to-cyan-800'>
            <SectionHeading title_1='Technical' title_2='Skills' description="The latest technologies I've been working with or learning" />
       <div className='space-y-12 w-[90%] mx-auto'>
        {skillCategories.map((category) =>{
            return <div key={category.title}>
                <h3 className='text-2xl font-semibold mb-6 flex items-center gap-3'>
                    <span className='w-3 h-3 rounded-4xl bg-green-300'></span>
                    {category.title}
                    </h3>
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 items-stretch'>
                        {category.skills.map((skill,index)=>{
                            return <div data-aos="zoom-in-right" data-aos-delay={index*250}
     data-aos-easing="ease-in-out" data-aos-anchor-placement="top-center" key={index}>
                                <SkillCard name={skill.name} icon={skill.icon} />
                            </div>
                        })}
                    </div>
                
            </div>
        })}
       </div>
        </section>
    )
}

export default Skills
