import React from 'react';
import Wrapper from '../ui/Wrapper';
import AmsterdamCard from '../ui/AmsterdamCard';
import {MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft} from 'react-icons/md';

const AmsterdamSection = () => {
  return (
    <Wrapper className='flex flex-col'>
        <h1 className="text-[#cc4100] text-[38px] font-[300] leading-[56px] mb-[25px] max-w-[988px] mx-auto">
        We are VU Amsterdam
        </h1>
        <div className='flex flex-col lg:flex-row overflow-scroll scrollbar-hide'>
        {
            [
                {
                    image:'https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/af80e288-3224-4918-a78c-14c99e741d32/Gustaaf-Peek_Foto_Maya-Hermes_2134x1600.jpg?fm=jpg&auto=format&dpr=1',
                    title:'Vrije Schrijver (Writer in Residence)'
                },
                {
                    image:'https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/af80e288-3224-4918-a78c-14c99e741d32/Gustaaf-Peek_Foto_Maya-Hermes_2134x1600.jpg?fm=jpg&auto=format&dpr=1',
                    title:'Vrije Schrijver (Writer in Residence)'
                },
                {
                    image:'https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/af80e288-3224-4918-a78c-14c99e741d32/Gustaaf-Peek_Foto_Maya-Hermes_2134x1600.jpg?fm=jpg&auto=format&dpr=1',
                    title:'Vrije Schrijver (Writer in Residence)'
                },
                {
                    image:'https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/af80e288-3224-4918-a78c-14c99e741d32/Gustaaf-Peek_Foto_Maya-Hermes_2134x1600.jpg?fm=jpg&auto=format&dpr=1',
                    title:'Vrije Schrijver (Writer in Residence)'
                },
                {
                    image:'https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/af80e288-3224-4918-a78c-14c99e741d32/Gustaaf-Peek_Foto_Maya-Hermes_2134x1600.jpg?fm=jpg&auto=format&dpr=1',
                    title:'Vrije Schrijver (Writer in Residence)'
                },
            ].map((item,index)=><AmsterdamCard key={index} {...item} />)
        }
        </div>
        <div className='bg-[#fcd3b6] text-[24px] leading-6 self-end w-[120px] ml-auto'>
        <span class="material-symbols-outlined text-center inline-flex items-center justify-center w-[60px] h-[60px] font-[100]">
arrow_back_ios
</span>
        <span className='material-symbols-outlined text-center inline-flex items-center justify-center w-[60px] h-[60px] font-[100]'>
arrow_forward_ios
</span>
        </div>
    </Wrapper>
  )
}

export default AmsterdamSection