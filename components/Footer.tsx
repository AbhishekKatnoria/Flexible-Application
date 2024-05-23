import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer flexStart">
      <div className="flex flex-col w-full gap-12">
        <div className="flex items-start flex-col">
          <Image loading="lazy" src="/logo-purple.svg" width={119} height={31} alt="" />

           <p className="font-normal text-start mt-4 text-sm  max-w-xs">Flexibble is the world's leading community for creatives to share, grow, and get hired.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
