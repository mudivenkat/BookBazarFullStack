 import React from 'react'
import { Link } from 'react-router'

import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import avatar from "../assets/avatar.png"






 function NavBar() {
  const currentUser= true;
   return (
     <header className='max-w-screen-2xl  mx-auto px-4 py-6'>
               <nav className='flex  justify-between  items-center'>
      {/* leftSide */}
      <div className='flex items-center md:gap-16 gap-4'>
        
          <Link to="/">  <HiMiniBars3BottomLeft className='size-6'/>
          </Link>  
           {/* searchBar  */}
           <div className='relative sm:w-72 w-40 space-x-2'>
            <IoIosSearch className='absolute inline-block left-3 inset-y-2' />
            <input type="search" placeholder='Search here' className='bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md 
             focus:outline-none focus:ring-2 focus:ring-blue-500" '/>
             
           </div>
      </div>

         <div className='flex relative items-center md:space-x-3 space-x-2'>
          <div>
            {currentUser? <>

            <button>
              <img src={avatar} alt='user'/>
            </button>
            
            </>:
            <Link to="/login">
           
            <FaRegUser className='size-6 '/>
            </Link>
            }
          </div>
           <button className='hidden sm:block'>
           <CiHeart className='size-6 '/>
           </button>
           <Link to="/cart" className='bg-amber-400  p-1 sm:px-6 px-2 flex items-center'>
             <HiOutlineShoppingCart className='size-6  ' />
             <span className='text-sm font-semibold sm:ml-1'>0</span>
           </Link>


      </div>

      </nav>
              
     </header>
   )
 }
 
 export default NavBar