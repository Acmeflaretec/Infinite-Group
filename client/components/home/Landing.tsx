import React, { FC } from "react";
import CustomButton from "../ui/CustomButton";

const Landing: FC = () => {
  return (
    <div className="relative grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-[90vh] mt-16 md:mt-0 md:min-h-screen overflow-hidden text-white">
      <video
        className="hidden xl:block absolute inset-0 w-full h-full object-cover z-0"
        src="/assets/Infinite-group-16-9.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <video
        className="absolute xl:hidden inset-0 w-full h-full object-cover z-0"
        src="/assets/Infinite-group-9-16.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="flex flex-col h-80 xl:h-60 gap-8 row-start-2 justify-end z-10">
        <CustomButton type="primary" href="/contact">
          Get Started Now
        </CustomButton>
      </div>
    </div>
  );
};

export default Landing;
