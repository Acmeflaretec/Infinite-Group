import CustomJob from "@/components/career/CustomJob";
import HeroSection from "@/components/career/HeroSection";
import JoinOurTeam from "@/components/career/JoinOurTeam";
import { Metadata } from "next";
import React, { Suspense } from "react";

export const metadata: Metadata = {
  title: "Career | Infinite Group",
  description:
    "Apply today & connect with your future! @ Infinite Group of Companies",
};

const page = () => {
  return (
    <main>
      <Suspense>
        <HeroSection />
        <JoinOurTeam />
        <CustomJob />
      </Suspense>
    </main>
  );
};

export default page;
