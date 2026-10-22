import SectionHeading from '@/components/Helper/SectionHeading'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { contactInfo, socialLinks } from '@/data'
import { Send, Target } from 'lucide-react'
import { it } from 'node:test'
import React from 'react'

const Contact = () => {
  return (
    <section id='reach-out' className='py-16 bg-linear-to-b from-gray-200 via-cyan-100 to-gray-200 dark:bg-linear-to-b dark:from-gray-800 dark:via-cyan-800 dark:to-gray-800'>
<SectionHeading
  title_1="Reach"
  title_2="Out"
  description="Have a project in mind, an opportunity to discuss, or simply a question? Feel free to reach out. I'm always happy to connect, exchange ideas, and explore how we can work together."
/>
<div className='w-[90%] mx-auto'>
    <div className='grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
        {/* contact info */}
        <div data-aos="zoom-in-right" data-aos-delay={250}
     data-aos-easing="ease-in-out" data-aos-anchor-placement="top-center"> 
            <div className='space-y-8'>
                <div>
                    <h3 className='text-2xl font-semibold mb-4'> Let&apos;s talk</h3>
                    <p className='text-muted-foreground'>
                        I&apos;am always open to discussing new projects, creative ideas, or opportunities to participate in your vision.
                    </p>
                </div>
                <div className='space-y-4'> 
                    {contactInfo.map((item)=> {
                        return <a href={item.href} key={item.label} target="_blank" className='flex 
                        items-center gap-4 p-4 bg-amber-50 dark:bg-slate-900 shadow-md rounded-2xl hover:scale-105 transition-all 
                        duration-300 group'>
                            <div className='w-12 h-12 rounded-3xl bg-cyan-800/10 dark:bg-cyan-600/20 flex items-center
                            justify-center group-hover:bg-cyan-800/20 dark:group-hover:bg-cyan-800/60 transition-colors '>
                                <item.icon className='w-5 h-5 text-cyan-600 dark:text-amber-100'/>
                            </div>
                            <div>
                                <p className='text-sm text-muted-foreground'> {item.label}</p>
                                <p className='font-medium'> {item.value}</p>
                            </div>
                        </a>
                    })}
                
                </div>
                {/* social icons */}
                <div>
                    <h4 className='text-lg font-medium mb-4'> My Social Media</h4>
                    <div className='flex gap-3'>
                        {socialLinks.map((link)=>{

                            return <a href={link.href} key={link.label} target="_blank" className='w-12
                            h-12 rounded-2xl bg-amber-50 dark:bg-slate-900 flex 
                            items-center justify-center text-muted-foreground hover:text-cyan-600 transition-colors'>
                                <link.icon className='w-5 h-5'/>
                            </a>

                        })}
                    </div>
                </div>
            </div>
        </div>
        {/* contact form */}
        <div data-aos="zoom-in-left" data-aos-delay={250}
     data-aos-easing="ease-in-out" data-aos-anchor-placement="top-center">
            <form className='bg-amber-50 dark:bg-slate-900 rounded-3xl p-8 space-y-6'>
                <div className='grid sm:grid-cols-2 gap-4 '>
                    <div className='space-y-2'>
                        <label htmlFor="name" className='text-sm font-medium ml-2'>Full Name</label>
                        <Input id='name' name='name' placeholder='Write your full name here.' required className='bg-stone-100 my-1'/>
                    </div>
                     <div className='space-y-2'>
                        <label htmlFor="email" className='text-sm font-medium ml-1'>Email</label>
                        <Input id='email' name='email' placeholder='fullname@example.com' required className='bg-stone-100 my-1'/>
                    </div>


                </div>
                <div className='space-y-2'>
                    <label htmlFor="subject" className='text-sm font-medium ml-2'>
                        Subject
                    </label>
                    <Input id='subject' name='subject' placeholder='Ex: Project Inquiry' required 
                    className='bg-stone-100 my-1'/>
                </div>
                <div className='space-y-2'>
                    <label htmlFor="message" className='text-sm font-medium ml-2'>
                        Your Message
                    </label>
                    <Textarea id='message' name='message' placeholder='Tell about your ideas....' 
                    required rows={8} className='bg-stone-100 h-40 my-1'/>
                </div>
                <Button type='submit' size={"lg"} className='w-full cursor-pointer'>
                    <Send className='w-4 h-4 mr-2 my-1'/>
                    Send Message
                </Button>
            </form>
        </div>
         
           
                   
        
    </div>
    
    </div>      
    </section>
  )
}

export default Contact
