import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import Wrapper from './Wrapper';
import {CiUser} from 'react-icons/ci';
import {HiOutlineSearch, HiMenu} from 'react-icons/hi';

const Navbar = () => {
  const [nav,setNav] = useState(false);
  const [data,setData] = useState(false);
//   useEffect(() => {
//     document.body.style.overflow = "hidden";
//     return () => (document.body.style.overflow = "scroll");
// });
  return (
    <Wrapper styles="fixed inset-x-0 top-0 max-w-[1252px] mx-auto z-[999]">
     {!nav? <div className=' flex items-center h-[75px]'>
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
                <li onClick={()=>setNav(true)} className='' aria-label="Menu">
                <HiMenu size={25} className='text-[19.8px] leading-[19.8px] inline-block' />
                </li>
            </ul>
       
    </div>
    :
    <div className="bg-white h-screen relative z-[500]">
      <div onClick={()=>setNav(false)} className='h-[60px] w-[60px] text-[24px] leading-[30px] flex items-center justify-center ml-auto bg-[#f2efed]'>
      <span className="material-symbols-outlined rotate-180 duration-300 ease-in-out">
close
</span>
      </div>
      <div className='max-w-[988px] mx-auto'>
        <div>
        <ul className='flex flex-col gap-8 max-w-[494px] pl-25'>
          {[
  { title: 'Study at VU Amsterdam',link:'study', data:[
    {
      title: 'Bachelors degree programmes',
      link: 'bachelors'
    },
    {
      title: 'Masters degree programmes',
      link: 'masters'
    },
    { title: 'Minor programmes', link: 'minor' },
    { title: 'Exchange Programme', link: 'exchange' }
  ] },
  { title: 'Research', link:'research', data:
  [
    { title: 'Home Research', link: 'home' },
    {
      title: 'Scientists of VU Amsterdam',
      link: 'scientists'
    }
  ] },
  { title: 'About VU Amsterdam', link: 'about' },
  { title: 'VU press office', link: 'vu' },
  { title: 'Alumni', link: 'alumni' },
  { title: 'Student', link: 'student' },
  { title: 'Employee', link: 'employee' }
].map((item,index)=><li key={index}><Link className='flex text-[24px] leading-[30px] font-[500] items-center justify-between' href={item.link}><span>{item.title}</span> 
{item.data?<span  class="material-symbols-outlined">
add
</span>:<span class="material-symbols-outlined">
arrow_forward
</span>}
</Link></li>)}
        </ul></div>
      </div>
      </div>}
    </Wrapper>
    
  )
}

export default Navbar