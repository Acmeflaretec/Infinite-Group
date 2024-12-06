"use client";
import { Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Icons } from "../common/Icons";

interface CarousalProps {
  breakpoints?: { sm: number; md: number; lg: number };
  children: React.ReactNode;
  dark?: boolean;
}
const Carousel: React.FC<CarousalProps> = ({
  breakpoints,
  dark = false,
  children,
}) => {
  const sm = breakpoints?.sm ?? 1;
  const md = breakpoints?.md ?? 2;
  const lg = breakpoints?.lg ?? 3;
  return (
    <div className="relative w-full">
      <div className="absolute top-4 lg:top-0 right-12 lg:right-20 z-10 flex gap-2">
        <button
          className={`swiper-button-next group !p-2 flex justify-center items-center border border-solid !w-10 !h-10 transition-all duration-500 rounded-full ${
            dark
              ? "border-black border-opacity-20"
              : "border-white border-opacity-10"
          }`}
        >
          <Icons.leftArrow
            className={`${
              dark
                ? "text-black group-hover:text-opacity-50"
                : "text-white group-hover:text-opacity-50"
            }`}
          />
        </button>
        <button
          className={`swiper-button-prev group !p-2 flex justify-center items-center border border-solid !w-10 !h-10 transition-all duration-500 rounded-full ${
            dark
              ? "border-black border-opacity-20"
              : "border-white border-opacity-10"
          }`}
        >
          <Icons.rightArrow
            className={`${
              dark
                ? "text-black group-hover:text-opacity-50"
                : "text-white group-hover:text-opacity-50"
            }`}
          />
        </button>
      </div>
      <div className="pt-16">
        <Swiper
          loop={true}
          spaceBetween={20}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            1920: { slidesPerView: lg, spaceBetween: 30 },
            1028: { slidesPerView: md, spaceBetween: 30 },
            990: { slidesPerView: sm, spaceBetween: 0 },
          }}
          modules={[Navigation]}
          className="multiple-slide-carousel"
        >
          {children}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
