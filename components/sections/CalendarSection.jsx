import React from 'react';
import Wrapper from '../ui/Wrapper';
import {MdKeyboardArrowDown, MdOutlineKeyboardArrowRight,MdOutlineKeyboardArrowLeft} from 'react-icons/md';
import {AiOutlineArrowRight} from 'react-icons/ai';

const CalendarSection = () => {
  return (
    <div>
    <Wrapper styles="bg-white">
        <div className=" max-w-[1008px] mx-auto py-[60px] px-5">
        <div className='grid lg:grid-cols-4 gap-8 py-16'>
            <div className='flex flex-col gap-16 col-span-2 '>
            <h1 className='text-[#0077b3] text-[38px] font-[300] leading-[56px]'>Calendar</h1>
            <div className='hidden lg:grid grid-cols-2'>
           <div>
        <p className='underline text-[18px] font-[300] leading-[30px] mb-[5px]'>PhD Defences</p>
        <p className='text-[#0077b3] text-[18px] leading-[30px] font-[700] mb-[5px]'>20 February 2023</p>
        <p className='text-[24px] font-[300] leading-[30px]'>PhD defence by T.J.H. Jonkers</p>
       </div>
       <div>
       <p className='underline text-[18px] font-[300] leading-[30px] mb-[5px]'>Social events</p>
       <p className='underline text-[18px] font-[300] leading-[30px] mb-[5px]'>Workshop</p>
       <p className='underline text-[18px] font-[300] leading-[30px] mb-[5px]'>Sport</p>
       <p className='text-[#0077b3] text-[18px] leading-[30px] font-[700] mb-[5px]'>20 February 2023</p>
       <p className='text-[24px] font-[300] leading-[30px]'>Pilates - Life is Better in 3D</p>
    
       </div>
            </div>
            </div>
            <div className='flex flex-col gap-16'>
            <div className='flex items-center justify-between py-[10px] lg:px-5 bg-white shadow-md'>
                <span className='leading-[30px] font-[500] text-[18px] pl-[30px]'>All categories</span>
                <MdKeyboardArrowDown/>
            </div>
            <div>
        <p className='underline text-[18px] font-[300] leading-[30px] mb-[5px]'>Other events</p>
        <p className='text-[#0077b3] text-[18px] leading-[30px] font-[700] mb-[5px]'>21 February 2023</p>
        <p className='text-[24px] font-[300] leading-[30px]'>ABRI Writing Boost</p>
       </div>
            </div>
            <div className='flex flex-col gap-16'>
            <div className='flex items-center justify-between py-[10px] lg:px-5 bg-white shadow-md'>
                <span className='leading-[30px] font-[500] text-[18px] pl-[30px]'>Date</span>
                <MdKeyboardArrowDown/>
            </div>
            <div>
        <p className='underline text-[18px] font-[300] leading-[30px] mb-[5px]'>Lectures</p>
        <p className='text-[#0077b3] text-[18px] leading-[30px] font-[700] mb-[5px]'>21 February 2023</p>
        <p className='text-[24px] font-[300] leading-[30px]'>ABRI lunch seminar Dr. Paula Jarzabkowski</p>
       </div>
            </div>
            
        </div>
        <hr className="hidden lg:block py-[1px] bg-[#0077b3] px-4"/>
        <div className='flex flex-col lg:flex-row items-center justify-between'>
     <div className='flex items-center gap-8'>
     <span className="text-[18px] font-[500] leading-[30px] ">View calendar</span>
     <span class="material-symbols-outlined font-[300] leading-[30px] text-[28px]">
arrow_right_alt
</span>
     </div>
        
        <div className='hidden lg:block bg-[#dff2fd] text-[24px] leading-6 self-end'>
        <span class="material-symbols-outlined text-center inline-flex items-center justify-center w-[60px] h-[60px] font-[100]">
arrow_back_ios
</span>
        <span className='material-symbols-outlined text-center inline-flex items-center justify-center w-[60px] h-[60px] font-[100]'>
arrow_forward_ios
</span>
        </div></div></div> </Wrapper>
            <Wrapper styles="">
        <div className='h-[270px] w-full flex items-center'>
        <div className='flex flex-col lg:flex-row max-w-[988px] mx-auto py-[45px] px-[60px] font-[500]" leading-[30px] text-[18px] items-center justify-between bg-[#0077B3]'>
              <h1 className="leading-[36px] text-[24px] text-white">Working at VU Amsterdam?</h1>
              <button className="py-[15px] px-[30px] text-[24px] bg-white">Take a look at our vacancies!</button>
        </div>
        </div>
        </Wrapper>
        </div>
   
  )
}

export default CalendarSection