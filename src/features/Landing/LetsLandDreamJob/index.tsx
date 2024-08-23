import Image from "next/image";
import React from "react";

export const LetsLandDreamJob = () => {
  return (
    <div className="w-full md:p-16 p-10 font-urbanist bg-gradient-to-r flex flex-col md:gap-16 gap-10 items-center from-primaryColor from-10% to-80% to-accentColor">
      <div className="text-white md:text-7xl text-5xl font-bold text-center md:w-2/3 w-full">
        Let’s Land Your Dream Job Together
      </div>
      <button className="md:px-8 px-6 md:py-4 py-3 text-white md:text-2xl text-xl font-semibold bg-gradient-to-br from-secondaryColor to-orange-500 rounded-lg hover:from-amber-500 hover:to-orange-600">
        Start Your Resume Now
      </button>
      <div className="text-white text-lg font-bold text-center md:w-2/3 w-full">
        As seen in
      </div>
      <div className="md:w-2/3 w-full flex gap-x-8 items-center justify-center flex-wrap md:-mt-16 -mt-10">
        <div className="md:w-32 w-24 aspect-video relative">
          <Image src={"/tesla.svg"} alt={"Tesla Logo"} fill sizes="2" />
        </div>
        <div className="md:w-32 w-24 aspect-video relative">
          <Image src={"/yahoo.svg"} alt={"Tesla Logo"} fill sizes="2" />
        </div>
        <div className="md:w-32 w-24 aspect-video relative">
          <Image src={"/walmart.svg"} alt={"Tesla Logo"} fill sizes="2" />
        </div>
        <div className="md:w-32 w-24 aspect-video relative">
          <Image src={"/microsoft.svg"} alt={"Tesla Logo"} fill sizes="2" />
        </div>
        <div className="md:w-32 w-24 aspect-video relative">
          <Image src={"/spotify.svg"} alt={"Tesla Logo"} fill sizes="2" />
        </div>
        <div className="md:w-32 w-24 aspect-video relative">
          <Image src={"/google.svg"} alt={"Tesla Logo"} fill sizes="2" />
        </div>
        <div className="md:w-32 w-24 aspect-video relative">
          <Image src={"/netflix.svg"} alt={"Tesla Logo"} fill sizes="2" />
        </div>
      </div>
    </div>
  );
};
