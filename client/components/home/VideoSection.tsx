import Image from "next/image";
import Link from "next/link";
import React from "react";

const VideoSection: React.FC = () => {
  return (
    <div className="relative grid grid-rows-[20px_1fr_20px] items-center min-h-[40vh] md:min-h-[50vh] overflow-hidden text-white">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/assets/Infinite-Group.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute bg-opacity-60 z-1 bg-black w-full h-full" />
      <div className="flex flex-col gap-8 row-start-2 z-10 px-4">
        <h1 className="text-xl lg:text-3xl max-w-2xl font-plus_jakarta">
          Where innovation meets excellence, turning possibilities into
          realities with every project.
        </h1>
      </div>
      <div className="absolute bg-opacity-10 text-xs lg:text-sm bottom-0 z-1 bg-black w-full min-h-16 flex flex-col lg:flex-row gap-1 justify-center uppercase items-center p-4">
        <p className="text-center px-4">
          Let&apos;s create something extraordinary together.
        </p>
        <Link href={"/contact"} className="underline">
          Got a project in mind ?
        </Link>
      </div>
    </div>
  );
};

export default VideoSection;
