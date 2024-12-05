import Link from "next/link";
import React from "react";

const VideoSection: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center min-h-[50vh] overflow-hidden text-white bg-gradient-to-b from-violet-50 via-white to-white border-b-2">
      <h1 className="text-2xl lg:text-4xl xl:text-5xl py-10 text-center font-bold leading-snug md:leading-tight max-w-screen-lg font-bricolage bg-gradient-to-r from-primary100 via-primary200 to-primary100 text-transparent bg-clip-text">
        A Passionate Team Committed to Your Success
      </h1>
      <div className="relative rounded-tr-[6rem] lg:rounded-tr-[12rem] overflow-hidden min-h-[40vh] xl:min-h-[60vh] w-full">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/assets/Infinite-Group.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <Link
        href={"/contact"}
        className="font-bold text-primary100 uppercase text-xs lg:text-sm min-h-14 p-4"
      >
        Join the 10,000+ companies trusting
      </Link>
    </div>
  );
};

export default VideoSection;
