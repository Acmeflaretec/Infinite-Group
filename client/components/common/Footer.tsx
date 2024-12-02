"use client";
import { links } from "@/data/footerData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white font-bricolage text-stone-500">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 lg:w-1/4 px-12 max-w-md pb-6">
            <Link href="/" className="flex flex-col items-center">
              <Image
                src="/assets/primarylogo.png"
                alt="Infinite Group Logo"
                width={220}
                height={100}
                className="w-full h-full"
              />
              <span className="self-center whitespace-nowrap text-xs lg:text-sm">
                Mon - Sat : 9.00 AM - 6.00 PM
              </span>
            </Link>
          </div>
          <div className="flex flex-wrap md:flex-nowrap flex-row gap-8 lg:w-3/4 px-4 justify-between md:px-12">
            {links.map((section, idx) => (
              <div key={idx} className="w-2/5 sm:w-1/5">
                <h2 className="mb-4 text-sm font-semibold text-gray-900">
                  {section.title}
                </h2>
                <ul className="font-thin">
                  {section.items.map((item) => (
                    <li key={item.title} className="mb-2">
                      <Link href={item.href} className="hover:underline">
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="w-full sm:w-2/5">
              <h2 className="mb-4 text-sm font-semibold text-gray-900">
                Subscribe Newsletter
              </h2>
              <p className="font-thin text-sm pb-4">
                Subscribe to our newsletter to get the latest news and updates.
              </p>
              <input
                placeholder="Enter your email"
                className="border border-stone-300 rounded-2xl text-sm py-2 px-4 w-full"
              />
            </div>
          </div>
        </div>
        <hr className="my-4 border-gray-200 sm:mx-auto" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm sm:text-center">
            © {new Date().getFullYear()}{" "}
            <Link href="/" className="hover:underline">
              Infinite Group of Companies™
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 gap-4 text-sm text-stone-500">
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
