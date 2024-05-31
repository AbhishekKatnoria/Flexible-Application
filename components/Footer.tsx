"use client";
import { footerLink } from "@/common.types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type column = {
  title: string;
  link: string;
};

const Footer = () => {
  return (
    <footer className="footer flexStart">
      <div className="flex flex-col w-full gap-12">
        <div className="flex items-start flex-col">
          <Image
            loading="lazy"
            src="/logo-purple.svg"
            width={119}
            height={31}
            alt=""
          />
          <p className="font-normal text-start mt-4 text-sm  max-w-xs">
            Flexibble is the world's leading community for creatives to share,
            grow, and get hired.
          </p>
        </div>

        <div className="flex flex-wrap gap-12">
          {footerLink.map((item, index) => (
            <div className="footer_column" key={index}>
              <h4 className="font-semibold">{item?.title}</h4>
              <ul className="flex flex-col gap-2 font-normal">
                {item?.links.map((link, index) => (
                  <Link href="/" key={index} className="hover:bg-red-50">
                    {link}
                  </Link>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col w-full justify-between sm:flex-row text-center">
        <p>@2022 Flexible All the rights resvered</p>
        <p className="text-gray">
          <span className="text-black font-semibold">10,300</span> project
          submit
        </p>
      </div>
    </footer>
  );
};

export default Footer;
