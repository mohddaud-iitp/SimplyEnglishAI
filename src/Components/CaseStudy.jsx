import React, {Component} from 'react'
import Slider from 'react-slick'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { communication, craft,speak,powerful } from '../assests';

const CaseStudy = () => {  

  
    
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1 ,
        autoplay: true,
        autoplayspeed: 2000, 
        cssEase: 'linear',
        
      };   
  
  return (
    <div className='px-40 pt-20  flex flex-col' >
         <h1 className='text-[40px] font-medium underline underline-offset-20 decoration-underlineRed pb-2'>Case Study </h1>
         <div className='slider-container'>
         <Slider {...settings} className='flex flex-row py-20 text-[21px] font-medium '> 
         <div className='px-2'> 
            <img src = {craft} className='h-[460px] w-[370px]' />  
            <h1 className=' p-8'>Craft A+ Essays: Elevate your grades with Simply English's writing expertise.</h1>
         </div> 
         <div className='px-2'> 
            <img src = {communication} className='h-[460px] w-[370px]'/>
            <h1 className='p-8'>From Lines of Code to Lines of Communication: Simply English Unleashes Your Potentia</h1>
         </div>
         <div className='px-2' > 
            <img src = {speak} className='h-[460px] w-[370px]'/> 
            <h1 className='p-8'>Speak with Heart: Simply English—Moms, speaking the language of their children with ease</h1>
         </div> 
         <div className='px-2'> 
            <img src = {powerful} className='h-[460px] w-[370px]'/>
            <h1 className='p-8'>Powerful Vision, Persuasive Words: Simply English for Business Leaders.</h1>
         </div>
          
         </Slider>      
         </div> 
    </div>  
  )
}

export default CaseStudy     
