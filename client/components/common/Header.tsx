"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomButton from "../ui/CustomButton";

const Header: React.FC = () => {
  return (
    <header className="fixed h-16 top-0 px-8 z-50 font-bricolage bg-white backdrop-blur-lg flex justify-between items-center w-full bg-opacity-65">
      <div className="flex text-primary100">
        <Image
          src={"/assets/secondarylogo.png"}
          alt="logo"
          width={80}
          height={40}
          className="w-24 h-16"
        />
        <div className="text-xs flex flex-col justify-center">
          <h1 className="uppercase font-bold">Infinite Group of Companies</h1>
          <p className="font-xs">UAE | QATAR | INDIA | SRILANKA</p>
        </div>
      </div>
      <div className="hidden lg:flex gap-4 font-semibold text-lg text-stone-500">
        <Link href={"/"}>Home</Link>
        <Link href={"/companies"}>Our Companies</Link>
        <Link href={"/career"}>Career</Link>
        <Link href={"/blogs"}>Blogs</Link>
        <Link href={"/about"}>About</Link>
      </div>
      <div className="hidden lg:flex gap-4 items-center">
        <CustomButton type="primary" pointer={false} href="/contact">
          Contact Us
        </CustomButton>
        <Image
          src="/assets/login.svg"
          width={50}
          height={50}
          alt="login.svg"
          className="w-10 h-10"
        />
      </div>
    </header>
  );
};

export default Header;
