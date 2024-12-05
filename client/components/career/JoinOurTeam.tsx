"use client";
import React, { useEffect, useState } from "react";
import CustomButton from "../ui/CustomButton";
import Link from "next/link";
import { jobData } from "@/data/jobData";
import JobCard from "./JobCard";
import { Icons } from "../common/Icons";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

const JoinOurTeam: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [data, setData] = useState(jobData[0]);
  const [showModel, setShowModel] = useState(false);

  useEffect(() => {
    const job_id = searchParams.get("job_id") ?? null;
    if (job_id) {
      const search = jobData?.filter((item) => item?.job_id === job_id);
      if (search?.length) {
        setData(search?.[0]);
        setShowModel(true);
      }
    }
  }, [searchParams]);

  return (
    <div className="flex flex-col gap-4 md:gap-8 p-8 lg:p-12 xl:p-28">
      <CustomButton type="primary" pointer={false}>
        <span className="font-semibold">Join Our Team</span>
      </CustomButton>
      <h1 className="text-2xl lg:text-4xl xl:text-5xl font-bold leading-snug md:leading-tight max-w-2xl bg-gradient-to-r from-primary100 via-primary200 to-primary100 text-transparent bg-clip-text font-bricolage">
        Explore our open positions and apply now
      </h1>
      <p className="max-w-md text-sm md:text-base text-stone-500 font-bricolage">
        Send your CV and a short motivational letter to
        <Link className="text-blue-600" href={"mailto:career@infinite-grp.com"}>
          {" "}
          career@infinite-grp.com{" "}
        </Link>
        with the name of the position you are applying for in the subject of the
        email.
      </p>
      {jobData?.map((item, idx) => (
        <div
          key={idx}
          className="flex flex-col md:flex-row gap-4 justify-between items-center bg-gradient-to-t from-stone-50 to-white min-h-40 p-8 shadow-xl rounded-2xl"
        >
          <div className="flex flex-col gap-2">
            <h1 className="text-sm lg:text-xl xl:text-2xl font-bold leading-snug md:leading-tight max-w-2xl">
              {item?.job_title}
            </h1>
            <div className="flex gap-4">
              <p className="flex gap-2 items-center max-w-3xl text-sm md:text-base text-stone-500">
                <Icons.location />
                {item?.job_location}
              </p>
              <p className="flex gap-2 items-center max-w-3xl text-sm md:text-base text-stone-500">
                <Icons.breifcase />
                {item?.job_employment_type}
              </p>
            </div>
            <p className="max-w-md lg:max-w-xl xl:max-w-3xl h-auto line-clamp-2 text-sm md:text-base text-stone-500">
              {item?.job_description}
            </p>
          </div>
          <CustomButton
            type="primary"
            onClick={() => {
              setData(item);
              router.push(`/career?job_id=${item?.job_id}`);
              setShowModel(true);
            }}
          >
            Apply Now
          </CustomButton>
        </div>
      ))}
      <JobCard
        data={data}
        isVisible={showModel}
        onClose={() => setShowModel(false)}
      />
    </div>
  );
};

export default JoinOurTeam;
