import React from 'react';
import Link from 'next/link';
import Wrapper from '../ui/Wrapper';
import {BsArrowRight} from 'react-icons/bs';

const Footer = () => {
  return (
    <Wrapper styles="bg-[#0077b3] text-white font-[300] py-[30px] ">
      <ul className=' items-center gap-4 leading-[28px] flex flex-wrap max-w-[1008px] mx-auto'>
        {[
  { title: 'Privacy Statement', link: 'privacy' },
  { title: 'Disclaimer', link: 'disclaimer' },
  {
    title: 'Safety at VU Amsterdam',
    link: 'safety'
  },
  { title: 'Colofon', link: 'colofon' },
  { title: 'Cookie Settings', link: 'cookie' },
  { title: 'Web archive', link: 'web' }
].map((item,index)=><li key={index}><Link href={item.link} className="flex items-center gap-2">
  <span>{item.title}</span>
  <BsArrowRight className='leading-[16px]'/>
  </Link></li>)}
      </ul>
      <p className='leading-[27px] max-w-[1008px] mx-auto'>Copyright © 2023 - Vrije Universiteit Amsterdam</p>
    </Wrapper>
  )
}

export default Footer