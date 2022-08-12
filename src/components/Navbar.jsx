import React from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {
  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <h1 className='text-3xl font-bold mr-4 sm:font-4xl'>BRAND</h1>
        <ul className='hidden md:flex'>
          <li>Home</li>
          <li>About</li>
          <li>Support</li>
          <li>Platforms</li>
          <li>Pricing</li>
        </ul>
        </div>
        <div className='hidden md:flex pr-4'>
          <button className='bg-transparent text-black border-none mr-4'>Sign In</button>
          <button className='px-8 py-3'>Sign Up</button>
        </div>
      </div>
      <MenuIcon className='w-5'/>
      </div>
  )
}

export default Navbar;