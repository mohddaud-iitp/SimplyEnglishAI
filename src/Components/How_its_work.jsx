import React from 'react'
import { ask1, review1, signup1, prompt1, learn1,watchvideo, HowitWorks } from '../assests'

const How_its_work = () => {
  return (
    <div className='sm:px-24 md:px-32 lg:px-40 px-16 py-8'>
      <h1 className='text-[40px] font-medium underline underline-offset-20 decoration-underlineRed pb-2'>How it Works</h1> 
      <div className='flex sm:flex-row flex-col py-8 justify-between'>
        <div className='flex flex-col '> 
           <div className='flex flex-row justify-start items-center py-2'>
             <img src = {signup1} />
             <div className='pl-4' > Sign Up</div> 
           </div>  
           <div className='flex flex-row justify-start items-center py-2'>
             <img src = {learn1} />
             <div className='pl-4'> Choose what you would like to learn</div>     
           </div>  
           <div className='flex flex-row justify-start items-center py-2'>
             <img src = {prompt1} />
             <div className='pl-4' > Leverage the guided prompts</div> 
           </div>
           <div className='flex flex-row justify-start items-center py-2'>
             <img src = {ask1} />
             <div className='pl-4'> Type your own prompts to ask anything</div> 
           </div>
           <div className='flex flex-row justify-start items-center py-2'>
             <img src = {review1} />
             <div className='pl-4' > Review chat history</div> 
           </div > 
           <div className='flex flex-row justify-end ml-10 pt-6'> 
           <img src={watchvideo}  className= 'sm:w-[75%] w-[50%] h-[70px]'/>
           </div>
           
        
        </div>   
        <img src = {HowitWorks} className='rounded-[5%] sm:h-[70%] h-[140%] sm:w-[45%]  w-[150%] sm:pr-10 sm:px-0 px-12'/>
      </div>  
    </div>    
  )
} 

export default How_its_work