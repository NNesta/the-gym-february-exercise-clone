import React from 'react';
import Wrapper from '../ui/Wrapper';
import {AiOutlineArrowRight} from 'react-icons/ai';

const LookSection = () => {
  return (
    <Wrapper styles="bg-[#faf7f5] h-[441px] flex items-center justify-between">
        <div classname="h-[321px] max-w-[988px] mx-auto">
        <h1 className='text-[#008053] text-[38px] font-[300] leading-[56px] mb-[25px]'>Take a look</h1>
        <div className='flex flex-col justify-between bg-white w-[316px] mx-auto h-[240px] p-[30px] shadow-lg'>
            <h1 className='text-[#008053] text-[24px] font-[300] leading-[36px] mb-[15px]'>VU Campus Tour</h1>
            <AiOutlineArrowRight className='font-[300] text-[18px] leading-[18px] mt-[5px] mb-[15px] self-end'/>
        </div>
        </div>
    </Wrapper>
  )
}

export default LookSection