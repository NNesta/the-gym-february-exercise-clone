import React from "react";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import {
  FaInstagramSquare,
  FaLinkedin,
  FaYoutubeSquare,
  FaTwitterSquare,
  FaFacebookSquare,
} from "react-icons/fa";

const Card = ({ data, icon }) => {
  return (
    <div className=" w-[316px] h-[285px] p-5 lg:shadow-3xl bg-white flex flex-col justify-between my-4">
      <ul className="flex flex-col gap-2 text-primary-black leading-[30px] text-[18px]">
        {data.map((item, index) => (
          <li key={index}>
            <Link
              href={item.link}
              className="flex items-center justify-between"
            >
              <span>{item.title}</span>
              <AiOutlineArrowRight />
            </Link>
          </li>
        ))}
      </ul>
      {icon && (
        <div className=" flex items-center gap-2">
          <FaInstagramSquare
            className="text-primary-blue bg-white "
            size={45}
          />
          <FaLinkedin className="text-primary-blue bg-white " size={45} />
          <FaFacebookSquare className="text-primary-blue bg-white " size={45} />
          <FaTwitterSquare className="text-primary-blue bg-white " size={45} />
          <FaYoutubeSquare className="text-primary-blue bg-white " size={45} />
        </div>
      )}
    </div>
  );
};

export default Card;
