import Image from "next/image";
import React, { FC } from "react";
import CustomButton from "../ui/CustomButton";

const Landing: FC = () => {
  return (
    <div className="relative grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen overflow-hidden text-white">
      <Image
        className="absolute object-cover"
        src="/assets/banner.png"
        alt="background cover image"
        fill
        priority
      />
      <div className="absolute bg-opacity-40 z-1 bg-[#16233F] rounded-full w-[140vw] h-[140vw] lg:h-[120vh] lg:w-[120vh]"></div>
      <div className="absolute bg-opacity-40 z-1 bg-[#16233F] rounded-full w-[100vw] h-[100vw] lg:h-[90vh] lg:w-[90vh]"></div>
      <main className="flex flex-col gap-8 row-start-2 items-center z-10">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-center font-plus_jakarta leading-snug md:leading-tight pb-8 tracking-wider max-w-6xl">
          Innovating Solutions Across Multiple Industries
        </h1>
        <CustomButton type="primary">Get Started Now</CustomButton>
      </main>
    </div>
  );
};

export default Landing;
