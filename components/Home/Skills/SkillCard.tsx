import { LucideIcon } from 'lucide-react';
import React from 'react'

type Props = {
name: string;
icon: LucideIcon;
}


const SkillCard = ({icon:Icon,name}:Props) => {
  return (
    <div className='group relative h-full w-42 bg-mauve-300 dark:bg-mauve-900 shadow-md rounded-xl p-4 flex
    flex-col items-center gap-3 cursor-pointer hover:scale-105 transition-all duration-500'>
        <div className='w-12 h-12 rounded-lg bg-linear-to-br from-cyan-400 to-blue-900 
        flex items-center justify-center group-hover:from-cyan-700 group-hover:to-blue-950 transition-all duration-500'>
<Icon className='w-6 h-6 text-gray-50'/>
        </div>
        <span className='text-sm font-medium text-foreground'>{name}</span>
      
    </div>
  )
}

export default SkillCard
