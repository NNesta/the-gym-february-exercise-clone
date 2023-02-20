import React from 'react';
import Wrapper from '../ui/Wrapper';
import Card from '../ui/Card';


const ContentSection = () => {
  return (
    <Wrapper styles="bg-white lg:h-[476px] flex items-center justify-center">
        <div className='grid lg:grid-cols-3 gap-4 max-w-[1008px] '>
        <div className='flex flex-col gap-4 '>
      <h1 className='text-[38px] font-[300] leading-[56px] text-[#0077b3] mb-[15px]'>VU main menu</h1>
      <Card data={[
  { title: 'Home', link: 'home' },
  { title: 'Education', link: 'education' },
  { title: 'Research', link: 'research' },
  { title: 'About VU Amsterdam', link: 'about' },
  {
    title: 'University Library',
    link: 'university'
  },
  { title: 'VU Press Office', link: 'vu' },
  { title: 'Alumni', link: 'alumni' }
]}/>
        </div>
        <div className='flex flex-col gap-8'>
      <h1 className='text-[38px] font-[300] leading-[56px] text-[#cc4100] mb-[15px]'>Most searched</h1>
      <Card data=
      {[
        { title: 'Contact us', link: 'contact' },
        { title: 'People finder', link: 'people' },
        {
          title: 'Bachelors degree programmes',
          link: 'bachelors'
        },
        {
          title: 'Masters degree programmes',
          link: 'masters'
        },
        { title: 'Faculties', link: 'faculties' },
        { title: 'Professionals', link: 'professionals' },
        {
          title: 'Working at VU Amsterdam',
          link: 'working'
        }
      ]}/>
        </div>
        <div className='flex flex-col gap-8'>
      <h1 className='text-[38px] font-[300] leading-[56px] text-[#008053] mb-[15px]'>Featured</h1>
      <Card icon={true} data={[
  { title: 'Campus tour', link: 'campus' },
  { title: 'Study guide', link: 'study' },
  { title: 'VU Magazine', link: 'vu' }
]}/>

        </div>
        </div>
    </Wrapper>
  )
}

export default ContentSection