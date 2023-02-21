import React from "react";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

const AmsterdamCard = ({ image, title }) => {
  return (
    <div className="w-[329px] bg-white hover:shadow-3xl hover:z-10 duration-300 ease-in-out h-[597px] p-[30px] lg:my-16 relative">
      <div className="flex flex-col w-[269px] gap-1">
        <img className="w-full h-[359px] object-cover mb-4" src={image} alt="" />
        <h1 className="text-primary-blown text-[24px] font-light leading-9">
          {title}
        </h1>
        <Link href="read" className="text-[18px] leading-[30px] mt-[10px]">
          Read more
        </Link>
        <span class="material-symbols-outlined absolute bottom-8 right-8">
arrow_right_alt
</span>
      </div>
    </div>
  );
};

export default AmsterdamCard;
