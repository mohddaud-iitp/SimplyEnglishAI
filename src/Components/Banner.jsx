import React from 'react'
import {banner, banner1,qr,googleplay, instagram, facebook, twitter} from '../assests'


const About = () => {
  return ( 
    <div className=' flex flex-row justify-between mt-28'>
        <div className=' flex flex-col'>
           <div className='flex flex-row '>
            <img src ={banner1} className=' h-[60%] pt-1' />
            <div className='flex-col'>
                <h1 className='text-[23px] font-medium'>Simply English AI</h1>  
                <p> Your Gateway to Success!</p>
            </div> 
           </div>  
           
           <div className='text-[24px] font-bold text-left'>
              <h1 className='py-5 '>Unlock 1 Billion Dreams </h1>        
              <h1 classname = 'py-6' >With Our AI Driven English Learning APP </h1>        
           </div>

          <ul className='list-disc pt-8 pl-4' >
            <li>Elevate Your Language Skills for Interviews and Exams </li>
            <li>Powered by Advanced AI Technology</li>
            <li> Future of Education, Right at Your Fingertips  </li>
          </ul>      

           <div className='my-6 flex flex-row'>
              <img src={googleplay} alt = 'googleplay' className='h-[80px] pt-4'/>
              <img src={qr} alt ='qr' className='h-[100px]' /> 
            </div>      

            {/* social media icons */}
            <div className='flex flex-row justify-around w-[120px]'>

                <div className='h-[35px] w-[35px] rounded-full bg-black p-[1px]'> 
                <div className='h-[100%] w-[100%] rounded-full bg-white content-center flex justify-center items-center'>
            <img src = {facebook} /> </div>  </div>
            <div className='h-[35px] w-[35px] rounded-full bg-black p-[1px]'> 
                <div className='h-[100%] w-[100%] rounded-full bg-white content-center flex justify-center items-center'>
            <img src = {instagram} /> </div>  </div> 
            <div className='h-[35px] w-[35px] rounded-full bg-black p-[1px]'> 
                <div className='h-[100%] w-[100%] rounded-full bg-white content-center flex justify-center items-center'>
            <img src = {twitter} className='w-[15px] h-[15px]' /> </div>  </div> 
            
           </div> 

           {/* --social media icons-- */}

        </div>
        <div>
        <img src={banner} alt="billing" className="w-[100%] h-[100%] mx-9" /> 
        </div> 

       
    </div>
  )
}

export default About 