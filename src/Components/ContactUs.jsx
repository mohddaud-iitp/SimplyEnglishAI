import React from 'react'
import { contactus, gogleplay,qr } from '../assests'

const ContactUs = () => {
  return (
    <div className='flex sm:flex-row flex-col sm:px-16px md:px-28 lg:px-40 px-20 pt-24 pb-24 justify-between '> 
       <img src={contactus} />
       <div className=' flex flex-col sm:12 md:mr-24 lg:mr-36'> 
       <h1 className='text-[32px] font-medium underline underline-offset-20 decoration-underlineRed pb-2'>Keep In Touch</h1> 
       <h4 className='pt-4 text-[18px] font-extrabold'>Email Address</h4>
       <p className='font-medium text-[18px] underline'> info@simplyenglish.ai</p>
       <h4 className='pt-4 text-[18px] font-extrabold'>Phone Numer</h4>
       <p className='font-medium text-[18px]'> India : 9599060043</p> 
       <div className='pt-6 flex flex-row items-center'>
        <a href = "#"> <img className='w-[250px] h-[70px] rounded-md' src = {gogleplay} /></a> 
        <img  className= "px-6 w-[150px] h-[100px] "src ={qr}/>
       </div>
       </div>
    </div>
  )
}

export default ContactUs