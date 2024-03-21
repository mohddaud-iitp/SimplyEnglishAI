import React from 'react'

import { Carousel } from 'flowbite-react'; 
import { Guideprompts, voice,voiceenabled,chathistory,askanything, circle } from '../assests';



const Slideshow = () => {
  return (
    <div className='py-12 flex flex-col ss:px-12 sm:px-20 md:px-28 lg:px-40 px-8 '>
         <h1 className='text-[40px] font-medium underline underline-offset-20 decoration-underlineRed '>App Features</h1> 
         <div className=" md:h-96 h-[550px] my-6">  
      <Carousel >   
      
      <div className='flex md:flex-row  flex-col pl-20 pr-6 justify-center relative'> 
      <img src= {Guideprompts} alt="..."  className='h-[200%] w-[325px] md:pb-0 pb-8 pl-8 relative z-[5] '/>
      <div className='flex flex-col justify-center md:44 lg:pl-56 z-[5] relative'>  
           <h1 className='text-[2rem] pb-2 text-feature font-medium'> Guided Learning Prompts </h1> 
           <p className='text-[16px] font-normal '> Let our Guided Learning Prompts be your personalized language coach. Tailored
           to your proficiency, these prompts not only refine your English skills but also provide structured lessons, 
           making learning on SimplyEnglish a breeze.</p>    
      </div> 
      <div className='z-[0] absolute flex flex-row pl-[800px] ' >     
        <img src = {circle} className='h-[300px] w-[350px] '/> 
      </div>

      </div>  

      <div className='flex md:flex-row flex-col  pl-20 pr-6 justify-center relative'> 
      <img src= {voice} alt="..."  className='h-[200%] w-[325px] md:pb-0 pb-8 pl-8 relative z-[5] '/>
      <div className='flex flex-col justify-center md:44 lg:pl-52 z-[5] relative'>  
           <h1 className='text-[2rem] pb-2 text-feature font-medium'> Voice Recognition </h1> 
           <p className='text-[16px] font-normal '> Speak your questions into our SimplyEnglish app and receive instant answers!
                                            Our Voice Recognition feature not only
                                            enhances your spoken English but also allows you to effortlessly inquire
                                            about anything, eliminating the need for
                                            typing.</p> 
      </div> 
      <div className='z-[0] absolute flex flex-row pl-[800px]' >
        <img src = {circle} className='h-[300px] w-[300px]'/> 
      </div>

      </div> 

      <div className='flex md:flex-row flex-col pl-20 pr-6 justify-center relative'> 
      <img src= {voiceenabled} alt="..."  className='h-[200%] w-[325px] md:pb-0 pb-8 pl-8 relative z-[5] '/>
      <div className='flex flex-col justify-center md:44 lg:pl-52 z-[5] relative'>  
           <h1 className='text-[2rem] pb-2 text-feature font-medium'> Voice-Enabled Learning </h1> 
           <p className='text-[16px] font-normal '>Immerse yourself in interactive learning with Voice-Enabled Learning on
                                            SimplyEnglish. Speak, listen, and practice pronunciation effortlessly,
                                            taking your language skills to new heights with just your voice.  </p> 
      </div> 
      <div className='z-[0] absolute flex flex-row pl-[800px]' >
        <img src = {circle} className='h-[300px] w-[325px] '/> 
      </div>

      </div> 

      <div className='flex md:flex-row flex-col pl-20 pr-6 justify-center relative'> 
      <img src= {chathistory} alt="..."  className='h-[200%] w-[325px] md:pb-0 pb-8 pl-8 relative z-[5] '/>
      <div className='flex flex-col justify-center md:44 lg:pl-52 z-[5] relative'>  
           <h1 className='text-[2rem] pb-2 text-feature font-medium'> Chat History </h1> 
           <p className='text-[16px] font-normal '>No need to worry about forgetting lessons—SimplyEnglish's Chat History
                                            feature keeps track of your progress. Revisit and review your personalized
                                            chat log to stay organized and motivated throughout your English learning
                                            journey. </p> 
      </div> 
      <div className='z-[0] absolute flex flex-row pl-[800px]' >
        <img src = {circle} className='h-[300px] w-[300px] '/> 
      </div>

      </div> 

      <div className='flex md:flex-row flex-col pl-20 pr-6 justify-center relative'> 
      <img src= {askanything} alt="..."  className='h-[200%] w-[325px] md:pb-0 pb-8 pl-8 relative z-[5] '/>
      <div className='flex flex-col justify-center md:44 lg:pl-52 z-[5] relative'>  
           <h1 className='text-[2rem] pb-2 text-feature font-medium'> Ask Anything  </h1> 
           <p className='text-[16px] font-normal '>With our "Ask Anything" feature, speaking is all you need to do. Simply use
                                            your voice to inquire about language nuances, exam strategies, or any
                                            English-related queries, and receive instant and accurate responses on
                                            SimplyEnglish.  </p> 
      </div> 
      <div className='z-[0] absolute flex flex-row pl-[800px]' >
        <img src = {circle} className='h-[300px] w-[300px]'/> 
      </div>

      </div> 


        
       
      </Carousel>
    </div>

    </div>
  )
}

export default Slideshow