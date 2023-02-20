import React from 'react';
import Wrapper from '../ui/Wrapper';
import {HiOutlineSearch} from 'react-icons/hi'                                                                                      
import {BsArrowRight} from 'react-icons/bs'                                                                                      

const HeroSection = () => {
  return (
    <div className='mt-[75px] lg:mt-0'>
 <Wrapper styles="z-50 py-12 bg-white">
    <div className='bg-white py-[90px]  text-[#333333] text-[33px] lg:text-[60px] leading-[40px] lg:leading-[72px] font-[300]'>

        <h1 className='max-w-[1038px] mx-auto py-4'>You don’t just become something, you become someone</h1>
    </div>
    <div className='flex flex-col lg:flex-row items-center w-full max-w-[988px] mx-auto bg-white -mb-12 relative'>
        <div className="lg:w-[576px] w-full  text-white bg-[#0077B3] py-[30px] px-10">
  <div className=' flex justify-between items-center border-b border-white'>
    <input className='bg-transparent placeholder:text-white text-[22px] leading-[34px] font-[300] outline-none' placeholder='search...'/>
        <HiOutlineSearch size={25} />
  </div>
        
        </div>
        <div className='lg:w-[412px]  py-[30px] px-10 bg-white flex text-[#0077B3] font-[300] justify-between items-center'>
            <p className='text-[22px] leading-[30px]'>About VU Amsterdam</p>
            <BsArrowRight className='text-[22px]' />
            </div>
    </div>
    </Wrapper>
    <img className='w-full max-w-[2200px] mx-auto lg:-mt-12' src='https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/883a3f00-09ba-48b4-ba79-5de8eee6b868/CH_C119530b_BA_home_hero_2200x720.jpg?w=2200&h=720&fit=clip&rect=0,1,2200,720' alt="" />
    </div>
   
  )
}

export default HeroSection