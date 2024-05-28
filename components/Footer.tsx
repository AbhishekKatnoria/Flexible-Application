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
  console.log(footerLink);
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
              <div className="footer_column">
                <h4 className="font-semibold">{item?.title}</h4>
                <ul className="flex flex-col gap-2 font-normal">
                  {item?.links.map((link, index) => (
                    <Link href="/" key={index}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
