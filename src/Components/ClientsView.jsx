import React from 'react'
import Slider from 'react-slick'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { test1,test2,test3,test4,test5,test6 } from '../assests';

const ClientsView = () => { 
    
    const settings = {
        dots: true, 
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1 ,
        autoplay: true,
        autoplayspeed: 2000, 
        cssEase: 'linear',
        responsive: [
            {
              breakpoint: 1100,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: false,
                dots:true
              }
            },
            {
               breakpoint: 700,
               settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1,
                 infinite: false,
                 dots: true
               }
             },
         ]
      }; 
      

  return (
    <div className='md:px-20 lg:px-40 pl-20 pr-8 pt-20  flex flex-col pb-32' >
         <h1 className='text-[40px] font-medium underline underline-offset-20 decoration-underlineRed pb-2'>What our clients say </h1>
         <div >
         <Slider {...settings} className='flex flex-row  ' > 
            <div className='flex flex-col  h-[500px] w-[340px] mt-12 py-6  relative px-8'> 
            <div className=' relative z-[5] flex flex-row justify-center '> 
                <img src = {test2}  className=' h-[90px] w-[90px] border-r-[50%] rounded-full  ' />     
                </div>  
                <div className='flex flex-col items-center py-6 bg-views px-4 absolute z-[0] mt-[-48px]  '>  
                    <h1 className='mb-[0.5rem] mt-[1.5rem] py-2 text-[1.5rem] font-medium'>Arjun from Bangalore</h1>
                    <p className='text-viewFont text-[16px] leading-8 tracking-[1px] text-center'>"SimplyEnglish played a key role in my professional growth. The refined
                                        communication skills and insightful Guided
                                        Learning Prompts helped me secure a promotion. Grateful for the app's impact on
                                        my career!"</p>        
                </div> 
            </div>   
  
             <div className='flex flex-col  h-[500px] w-[340px] mt-12 py-6 items-center relative px-8'>   
            <div className='h-[150] w-[150] relative z-[5] flex flex-row justify-center '> 
                <img src = {test1}  className=' h-[90px] w-[90px] border-r-[50%] rounded-full  ' /> 
                </div> 
                <div className='flex flex-col items-center py-6 bg-views px-4 absolute z-[0] mt-[-48px] '>  
                    <h1 className='mb-[0.5rem] mt-[1.5rem] py-2 text-[1.5rem] font-medium'>Priya from Mumbai</h1>
                    <p className='text-viewFont text-[16px] leading-8 tracking-[1px] text-center'>"Navigating Chat History on SimplyEnglish kept my learning organized and proved
                                    crucial for my important presentation
                                    preparation. Thanks to the app, I delivered with confidence and received positive
                                    feedback."</p>      
                </div> 
            </div>    

             <div className='flex flex-col  h-[500px] w-[340px] mt-12 py-6 items-center relative px-8'> 
            <div className='h-[150] w-[150] relative z-[5] flex flex-row justify-center '> 
                <img src = {test4}  className=' h-[90px] w-[90px] border-r-[50%] rounded-full  ' /> 
                </div> 
                <div className='flex flex-col items-center py-6 bg-views px-4 absolute z-[0] mt-[-48px] '>  
                    <h1 className='mb-[0.5rem] mt-[1.5rem] py-2 text-[1.5rem] font-medium'>Raj from Delhi</h1>
                    <p className='text-viewFont text-[16px] leading-8 tracking-[1px] text-center'>"SimplyEnglish's interactive learning was a game-changer for my business dealings.
                                    Personalized lessons and instant
                                    feedback through Voice-Enabled Learning significantly contributed to cracking a
                                    major business deal."</p>      
                </div> 
            </div>  
 
                         <div className='flex flex-col  h-[500px] w-[340px] mt-12 py-6 items-center relative px-8'> 
            <div className='h-[150] w-[150] relative z-[5] flex flex-row justify-center '> 
                <img src = {test3}  className=' h-[90px] w-[90px] border-r-[50%] rounded-full  ' /> 
                </div> 
                <div className='flex flex-col items-center py-6 bg-views px-4 absolute z-[0] mt-[-48px]'>  
                    <h1 className='mb-[0.5rem] mt-[1.5rem] py-2 text-[1.5rem] font-medium'> Aisha from Hyderabad</h1>
                    <p className='text-viewFont text-[16px] leading-8 tracking-[1px] text-center'>"Ask Anything is my favorite feature on SimplyEnglish. It clarified my doubts during
                                    exam preparation, and the
                                    confidence gained through the app's unique features helped me clear my exam with
                                    flying colors."</p>      
                </div> 
            </div>   

            <div className='flex flex-col  h-[500px] w-[340px] mt-12 py-6 items-center relative px-8'> 
            <div className='h-[150] w-[150] relative z-[5]  flex flex-row justify-center'> 
                <img src = {test5}  className=' h-[90px] w-[90px] border-r-[50%] rounded-full  ' /> 
                </div> 
                <div className='flex flex-col items-center py-6 bg-views px-4 absolute z-[0] mt-[-48px]'>  
                    <h1 className='mb-[0.5rem] mt-[1.5rem] py-2 text-[1.5rem] font-medium'>Vikram from Chennai</h1>
                    <p className='text-viewFont text-[16px] leading-8 tracking-[1px] text-center'>"As a content creator, SimplyEnglish was my go-to app for writing interactive
                                    website content. The fine-tuned language
                                    skills, courtesy of the app's features, made my content more engaging and
                                    impactful."</p>      
                </div> 
            </div> 

            <div className='flex flex-col  h-[500px] w-[340px] mt-12 py-6 items-center relative px-8'> 
            <div className='h-[150] w-[150] relative z-[5] flex flex-row justify-center  '> 
                <img src = {test6}  className=' h-[90px] w-[90px] border-r-[50%] rounded-full  ' /> 
                </div> 
                <div className='flex flex-col items-center py-6 bg-views px-4 absolute z-[0] mt-[-48px] '>  
                    <h1 className='mb-[0.5rem] mt-[1.5rem] py-2 text-[1.5rem] font-medium'>Neha from Kolkata</h1>
                    <p className='text-viewFont text-[16px] leading-8 tracking-[1px] text-center'>"SimplyEnglish significantly impacted my exam preparation. The seamless
                                    Voice-Enabled Learning made practicing skills
                                    easy, and thanks to the app, I cleared my exam with confidence. Highly recommended!"</p>      
                </div>   
            </div>     
                                     
</Slider>    
           
      
            
        
          
         </div> 
    </div>  
  )
}

export default ClientsView 