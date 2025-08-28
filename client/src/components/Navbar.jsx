import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
import { MenuIcon, SearchIcon } from 'lucide-react'

const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-16 lg:px=36 py-5'>
        <Link to= '/' className='max-md:flex-1'>
        <img src={assets.logo} alt = "" className='w-36 h-auto'/>
        </Link>
        
        <div>

        </div>

        <div>
            <SearchIcon className='max-md:hidden w-6 h-6 cursor-pointer'/>
            <button className='px-4 py-1 sm:px-7 sm:py-2 bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer'>Login</button>
        </div>

       <MenuIcon className='max-md ml-4 md:hidden w-8 h-8 cursor-pointer'/>

    </div>
  )
}

export default Navbar
