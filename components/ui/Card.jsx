import React from 'react';
import Link from 'next/link';
import { AiOutlineArrowRight } from 'react-icons/ai';
import {AiFillInstagram,AiFillLinkedin,AiFillFacebook, AiFillTwitterSquare, AiFillYoutube} from 'react-icons/ai';
import {FaInstagramSquare, FaLinkedin} from 'react-icons/fa'

const Card = ({data,icon}) => {
  return (
    <div className=" w-[316px] h-[285px] p-5 shadow-lg bg-white flex flex-col justify-between">
<ul className='flex flex-col text-[#333333] leading-[30px] text-[18px]'>
    {data.map((item,index)=><li key={index}><Link href={item.link} className="flex items-center justify-between"><span>{item.title}</span>
    <AiOutlineArrowRight/>
    </Link></li>)}
</ul>
{icon&&<div className=" flex items-center gap-2">
<FaInstagramSquare className="text-[#0077b3] bg-white "size={45}/>
<FaLinkedin className="text-[#0077b3] bg-white "size={45}/>
<AiFillFacebook className="text-[#0077b3] bg-white "size={45}/>
<AiFillTwitterSquare className="text-[#0077b3] bg-white "size={45}/>
<AiFillYoutube className="text-[#0077b3] bg-white "size={45}/>
</div>}
    </div>
  )
}

export default Card
