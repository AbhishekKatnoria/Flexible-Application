import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import AuthProvider from "./AuthProvider";

const Navbar = () => {
  const session={};
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image loading ="lazy" src="./logo.svg" width={155} height={50} alt="" />
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((item, index) => (
            <Link href={item?.href} key={index}>{item?.text}</Link>
          ))}
        </ul>
          </div>
        <div className="flexCenter gap-4"> 
          {
            session ? (
              <>
              User 
              <Link href="/create-project">
                Share Work
              </Link>
              </>
            ) : (
              <AuthProvider/>
            )
          }
      </div>
    </nav>
  );
};

export default Navbar;
