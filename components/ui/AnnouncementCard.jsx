
import React from 'react'

const AnnouncementCard = ({title,subTitle}) => {
  return (
    <div className="w-full bg-white h-[270px] flex items-center justify-center  mt-[60px]">
    <div className='flex flex-col lg:flex-row w-full max-w-[988px] lg:mx-auto pt-[30px] lg:m-0 mx-5 my-[30px] pb-[45px] px-5 lg:py-[45px] lg:px-[60px] font-[500] leading-[30px] text-[18px] items-center justify-between bg-primary-blue'>
      <h1 className="lg:leading-9 leading-8 text-[22px] lgtext-[24px] text-white text-center mb-[35px] lg:mb-0">
        {title}
      </h1>
      <button className="py-[15px] px-[30px] text-[24px] bg-white">
        {subTitle}
      </button>
    </div>
  </div>
  )
}

export default AnnouncementCard
