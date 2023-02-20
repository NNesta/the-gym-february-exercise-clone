import React from 'react';
import Wrapper from '../ui/Wrapper';
import Link from 'next/link';
import {SlGraduation} from 'react-icons/sl';
import {FaGlobeAfrica, FaMedal} from 'react-icons/fa';
import {AiOutlineArrowRight} from 'react-icons/ai';
import {TbPuzzle} from 'react-icons/tb';

const EducationSection = () => {
  return (
    <Wrapper styles="bg-[#FAF7F5] z-[500]  relative lg:-mt-12 max-w-[1008px] mx-auto">
       <ul className='flex justify-between items-center max-w-[1008px] mx-auto text-[#333333] h-[90px] py-[30px]'>
         <li className='flex flex-col lg:flex-row items-center text-center'>
            <SlGraduation className="text-[30px] leading-[30px] text-[#0077b3] mr-[15px]"/>
            <span className="text-[18px] font-[500] leading-[20.5px]">31.704 students</span>
         </li>
         <li className='flex flex-col lg:flex-row items-center text-center'>
            <FaGlobeAfrica className="text-[30px] leading-[30px] text-[#0077b3] mr-[15px]"/>
            <span className="text-[18px] font-[500] leading-[20.5px]">5.190 international students</span>
         </li>
         <li className='flex flex-col lg:flex-row items-center text-center'>
            <FaMedal className="text-[30px] leading-[30px] text-[#0077b3] mr-[15px]"/>
            <span className="text-[18px] font-[500] leading-[20.5px]">459 PhD defences</span>
         </li>
         <li className='flex flex-col lg:flex-row items-center text-center'>
            <TbPuzzle className="text-[30px] leading-[30px] text-[#0077b3] mr-[15px]"/>
            <span className="text-[18px] font-[500] leading-[20.5px]">9 faculties</span>
         </li>
        </ul>
    
        <div className='grid lg:grid-cols-2 gap-8 max-w-[1008px] mx-auto'>
         <div className='w-full max-w-[484px] bg-white  p-[30px] flex flex-col gap-12'>
            <div className='flex items-center justify-between text-[#0077B3]'>
                <h1 className='text-[38px] leading-[56px] font-[300]'>Education</h1>
                <AiOutlineArrowRight size={38}/>
            </div>
            <ul className=' text-[#333333] text-[18px] leading-[30px]  flex flex-col '>
                {
                    [
                        {
                          title: 'Bachelors programmes',
                          link: 'bachelors'
                        },
                        { title: 'Masters programmes', link: 'masters' },
                        { title: 'Honours programme', link: 'honours' },
                        {
                          title: 'Education for professionals',
                          link: 'education'
                        },
                        { title: 'Study guide', link: 'study' }
                      ].map((item, index) => <li key={index}><Link className='flex items-center justify-between' href={item.link}>
                        <span>{item.title}</span>
                <AiOutlineArrowRight/>
                       
                        </Link></li>)
                }
            </ul>
         </div>
         <div className='w-full max-w-[484px] bg-white  p-[30px] flex flex-col gap-12'>
            <div className='flex items-center justify-between text-[#0077B3]'>
                <h1 className='text-[38px] leading-[56px] font-[300]'>Research</h1>
                <AiOutlineArrowRight size={38}/>
            </div>
            <ul className=' text-[#333333] text-[18px] leading-[30px]  flex flex-col '>
                {                
[
  {
    title: 'Research highlights',
    link: 'research'
  },
  { title: 'Valorisation', link: 'valorisation' },
  { title: 'Our scientists', link: 'our' },
  {
    title: 'Prizes and distinctions',
    link: 'prizes'
  },
  {
    title: 'Interdisciplinary research institutes',
    link: 'interdisciplinary'
  }
].map((item, index) => <li key={index}><Link className='flex items-center justify-between' href={item.link}>
                        <span>{item.title}</span>
                <AiOutlineArrowRight/>
                       
                        </Link></li>)
                }
            </ul>
         </div>
        </div>
        <div className="w-full bg-white h-[270px] flex items-center justify-center  mt-[60px]">
        <div className='flex flex-col lg:flex-row max-w-[988px] mx-auto py-[45px] px-[60px] font-[500]" leading-[30px] text-[18px] items-center justify-between bg-[#0077B3]'>
              <h1 className="leading-[36px] text-[24px] text-white">Do you also want to change your world?</h1>
              <button className="py-[15px] px-[30px] text-[24px] bg-white">Visit the VU Master’s Event</button>
        </div>
        </div>
    </Wrapper>
  )
}

export default EducationSection