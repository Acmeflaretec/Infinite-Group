import CustomJob from '@/components/career/CustomJob'
import HeroSection from '@/components/career/HeroSection'
import JoinOurTeam from '@/components/career/JoinOurTeam'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Career | Infinite Group",
  description: "Apply today & connect with your future! @ Infinite Group of Companies",
};

const page = () => {
  return (
    <main>
      <HeroSection/>
      <JoinOurTeam/>
      <CustomJob/>
    </main>
  )
}

export default page
