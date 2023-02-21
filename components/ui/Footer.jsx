import React from "react";
import Link from "next/link";
import Wrapper from "../ui/Wrapper";
import { BsArrowRight } from "react-icons/bs";

const Footer = () => {
  return (
    <Wrapper styles="bg-primary-blue text-white font-normal py-[30px] ">
      <div className=" max-w-[1008px] mx-auto px-5 flex flex-col gap-5">
      <ul className=" items-center gap-4 leading-[28px] flex flex-wrap">
        {[
          { title: "Privacy Statement", link: "privacy" },
          { title: "Disclaimer", link: "disclaimer" },
          {
            title: "Safety at VU Amsterdam",
            link: "safety",
          },
          { title: "Colofon", link: "colofon" },
          { title: "Cookie Settings", link: "cookie" },
          { title: "Web archive", link: "web" },
        ].map((item, index) => (
          <li key={index}>
            <Link href={item.link} className="flex items-center gap-2">
              <span>{item.title}</span>
              <BsArrowRight className="leading-[16px]" />
            </Link>
          </li>
        ))}
      </ul>
      <p className="leading-[27px]">
        Copyright © 2023 - Vrije Universiteit Amsterdam
      </p></div>
    </Wrapper>
  );
};

export default Footer;
