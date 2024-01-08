import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='flex-wrap'>
        <div className='flex' >
            <div className='h-[2px] m-auto w-20 bg-transparent'></div>
            <div className='h-[2px] flex-grow m-auto w-full bg-amber-300'></div>
            <div className='h-[2px] m-auto w-20 bg-transparent'></div>
        </div>
    <div className='flex bg-gradient-to-r from-blue-600 to-violet-600 h-full p-11'>
        <div className='px-4 py-3 flex-grow text-xs'>&copy; 2024 AA coding</div>
        <div className='px-4'><Link target='_blank' href={'https://www.linkedin.com/in/abdur-rahman-akbar-84a71028b/'}> <FaLinkedin size={30}  /></Link></div>
    </div>
    </div>
  )
}

export default Footer
