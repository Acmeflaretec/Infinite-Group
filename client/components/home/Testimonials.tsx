import Image from "next/image";
import React from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonials: React.FC = () => {
  return (
    <div
      className="xl:min-h-screen flex flex-col gap-12 py-16 px-4 items-center"
      id="testimonials"
    >
      <Image
        className="absolute object-contain h-screen w-full"
        src="/assets/testimonial.png"
        alt="background cover image"
        width={500}
        height={500}
      />
      <p className="text-3xl lg:text-5xl max-w-2xl font-plus_jakarta font-bold text-center">
        Trusted by the world&apos;s fastest growing companies
      </p>
      <div className="flex gap-4 lg:gap-12 items-center">
        <button className="!p-2 flex justify-center items-center border border-solid border-black border-opacity-10 !w-10 !h-10 transition-all duration-500 rounded-full hover:bg-black">
          <svg
            className="h-5 w-5 text-black group-hover:text-black"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M10.0002 11.9999L6 7.99971L10.0025 3.99719"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className="flex flex-col lg:flex-row gap-4 md:gap-8 items-center">
          <div className="rounded-full h-40 w-40 lg:h-60 lg:w-60 overflow-hidden">
            <Image
              className="object-cover"
              src="/assets/dubai.png"
              alt="background cover image"
              width={500}
              height={500}
            />
          </div>
          <div className="flex flex-col gap-2 lg:gap-6">
            <p className="text-xl lg:text-2xl max-w-2xl font-plus_jakarta font-bold">
              Expedia Group
            </p>
            <p className="text-sm lg:text-lg max-w-md font-plus_jakarta text-justify">
              Infinite Solutions has been an incredible partner for us. Their
              team is professional, collaborative, and incredibly skilled. We
              were able to transform our ideas into functional and visually
              stunning solutions quickly.
            </p>
            <p className="text-xs lg:text-md uppercase text-primary300 font-bold max-w-2xl font-plus_jakarta">
              Newmen, Expedia Group
            </p>
          </div>
        </div>
        <button className="!p-2 flex justify-center items-center border border-solid border-black border-opacity-10 !w-10 !h-10 transition-all duration-500 rounded-full hover:bg-black">
          <svg
            className="h-5 w-5 text-black group-hover:text-black"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M5.99984 4.00012L10 8.00029L5.99748 12.0028"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-col lg:flex-row w-full max-w-6xl gap-8 px-4">
        <TestimonialCard data={{ icon: "india.png", name: "Bussiness" }} />
        <TestimonialCard
          data={{ icon: "qatar.png", name: "Interior Design" }}
        />
        <TestimonialCard data={{ icon: "dubai.png", name: "Real Estate" }} />
      </div>
    </div>
  );
};

export default Testimonials;
