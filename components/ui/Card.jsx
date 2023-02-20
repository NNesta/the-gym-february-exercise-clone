import React from 'react';
import Link from 'next/link';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Card = ({data}) => {
  return (
    <div className=" w-[316px] h-[285px] p-5 shadow-lg bg-white">
<ul className='flex flex-col text-[#333333] leading-[30px] text-[18px]'>
    {data.map((item,index)=><li key={index}><Link href={item.link} className="flex items-center justify-between"><span>{item.title}</span>
    <AiOutlineArrowRight/>
    </Link></li>)}
</ul>
    </div>
  )
}

export default Card
