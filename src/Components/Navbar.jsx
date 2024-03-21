import React, {useState} from 'react'
import { navIcon } from '../assests';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);    
  return (
    <nav className={`${
      !toggle ? 'mb-0' : "mb-44"
    }`}>
    <div className = "bg-primary px-4 md:py-4  w-full fixed top-0 z-[10]"> 
    <ul className= 'md:flex hidden flex-row justify-end pr-52 text-dimWhite text-[16px] border-l-[dimWhite]' >
        <li className='pr-2  border-r-[2px] border-r-[dimWhite]'> About Us </li>
        <li className='px-2  border-r-[2px] border-r-[dimWhite]'> SimplyEnglish Web </li> 
        <li className='pl-2'> Blogs </li> 
    </ul>

    <div className="md:hidden flex flex-1 flex-col justify-end pr-8">
        <div className='flex flex-row justify-end'>
        <img
          src={navIcon} 
          alt="menu"
          className="w-[60px] h-[60px] object-contain "
          onClick={() => setToggle(!toggle)} 
        />
        </div>

        <div
          className={`${
            !toggle ? "hidden" : "flex flex-col items-center justify-center"
          }`}
        >
      <ul className= 'flex flex-col justify-center items-center  pl-8 pb-3 text-dimWhite text-[18px] border-l-[dimWhite]' >
        <li className='pr-2  border-r-[2px] border-r-[dimWhite]'> About Us </li>
        <li className='px-2  border-r-[2px] border-r-[dimWhite]'> SimplyEnglish Web </li> 
        <li className='pl-2'> Blogs </li> 
      </ul>
        </div>
      </div>
     
    </div> 

    </nav> 
    
  )            
}    
        
export default Navbar 