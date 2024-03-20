import React from 'react'

const Navbar = () => {
  return (
    <nav>
    <div className = "bg-primary p-4 w-full fixed top-0 z-[10]"> 
    <ul className= 'flex flex-row justify-end pr-52 text-dimWhite text-[16px] border-l-[dimWhite]' >
        <li className='pr-2  border-r-[2px] border-r-[dimWhite]'> About Us </li>
        <li className='px-2  border-r-[2px] border-r-[dimWhite]'> SimplyEnglish Web </li> 
        <li className='pl-2 '> Blogs </li> 
    </ul>
    
    </div>
    </nav>
  )
}

export default Navbar 