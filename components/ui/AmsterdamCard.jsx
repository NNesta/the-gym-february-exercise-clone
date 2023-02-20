import React from 'react'
import Link from 'next/link';
import {AiOutlineArrowRight} from 'react-icons/ai';

const AmsterdamCard = ({image,title}) => {
  return (
    <div className='w-[329px] h-[597px] p-[30px]'>
    <div className='flex flex-col w-[269px]'>
      <img className='w-full h-[359px] object-cover' src={image} alt="" />  
      <h1 className='text-[#cc4100] text-[24px] font-[300] leading-8'>{title}</h1>
      <Link href='read' className="text-[18px] leading-[30px] mt-[10px]">Read more</Link>
      <AiOutlineArrowRight className='self-end'/>
    </div></div>
  )
}

export default AmsterdamCard