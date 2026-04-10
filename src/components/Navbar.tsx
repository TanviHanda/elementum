import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
function Navbar() {
  return (
    <nav className='container flex items-center justify-between py-6'>
        {/* logo */}
        <h1 className='text-xl font-semibold tracking-wide cursor-pointer'>
            Elementum
        </h1>

        {/* for desktop view*/}
        <ul className='hidden md:flex items-center gap-8 text-sm text-gray-600'>
            <li className='hover:text-black cursor-pointer transition'>Home</li>
            <li className='hover:text-black cursor-pointer transition'>Studio</li>
            <li className='hover:text-black cursor-pointer transition'>Services</li>
            <li className='hover:text-black cursor-pointer transition'>Contact</li>
            <li className='hover:text-black cursor-pointer transition'>FAQs</li>
        </ul>

        {/* for mobile view */}
        <div className='md:hidden text-2xl cursor-pointer'>
            <RxHamburgerMenu />
        </div>
    </nav>
  )
}

export default Navbar
