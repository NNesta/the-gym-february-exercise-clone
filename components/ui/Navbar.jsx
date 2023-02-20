import React from 'react';
import Link from 'next/link';
import Wrapper from './Wrapper';
import {CiUser} from 'react-icons/ci';
import {HiOutlineSearch, HiMenu} from 'react-icons/hi';

const Navbar = () => {
  return (
    <Wrapper styles="fixed inset-x-0 max-w-[1252px] mx-auto z-50">
      <div className=' flex items-center h-[75px]'>
        <div className='flex-1 bg-white h-full flex px-8'>

      <img className='h-[45px] my-auto' src="https://vu.nl/assets/images/VU-logo-nobg.svg" alt="" />
        </div>
      <ul className="flex items-center font-[300] bg-[#F2EFED] px-[30px] gap-6 text-[#333333] h-full">
                <li>
                    <Link href="/nl" className='' aria-label="Language Switch">
                        <span className='text-[23.94px] font-[300] leading-[30px]'>NL</span>
                    </Link>
                </li>
                    <li className='' aria-label="Profile">
                   <CiUser size={25} className='text-[19.8px] leading-[19.8px] inline-block'/>
                    </li>
                <li>
                    <Link className='' href="/en/search" aria-label="Search" >
                    <HiOutlineSearch size={25} className='text-[19.8px] leading-[19.8px] inline-block' />
                    </Link>
                </li>
                <li className='' aria-label="Menu">
                <HiMenu size={25} className='text-[19.8px] leading-[19.8px] inline-block' />
                </li>
            </ul>
       
    </div>
    </Wrapper>
    
  )
}

export default Navbar