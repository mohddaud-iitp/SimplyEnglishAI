import React from 'react'
import { benefit1,benefit3,benefit2 } from '../assests'

const Benefits = () => {
  return (
    <div className='md:px-20 lg:px-40  px-12 pt-12 pb-12 my-16 text-dimWhite'> 
        <h1 className='text-[40px] font-medium underline underline-offset-20 decoration-dimWhite pb-2'>Key Benefits</h1>
        <div className='flex sm:flex-row flex-col  pt-10 pl-8 justify-around items-center'>
            <div className='flex flex-col sm:pb-0 pb-8 items-center'>
              <img src={benefit1} className=' w-[180px] ' /> 
              <h1 className='text-[28px] font-medium ' >24X7 English Tutor</h1>
            </div>
            <div className='flex flex-col sm:pb-0 pb-8 items-center'>
              <img src={benefit2} className=' w-[180px] ' /> 
              <h1 className='text-[28px] font-medium' >Ask Questions Any Time</h1>
            </div>
            <div className='flex flex-col sm:pb-0 pb-8 items-center'>
              <img src={benefit3} className=' w-[180px] ' /> 
              <h1 className='text-[28px] font-medium ' >Progress Tracking</h1> 
            </div>
        </div>
    </div> 

  )
}

export default Benefits