import Link from "next/link";
import React from "react";

export const NavBar = () => {
  return (
    <div className="z-50 w-full md:text-xl text-base select-none font-urbanist font-semibold text-secondaryColor flex justify-between items-center fixed top-0 left-0 md:px-12 px-8 md:py-4 py-2 bg-bgColor">
      <div>Next Resume</div>
      <Link
        href="/build-resume/choose-template"
        className="bg-gradient-to-r from-primaryColor to-indigo-600 md:px-6 px-4 md:py-3 py-2 rounded text-transparent hover:text-white bg-clip-text hover:bg-clip-padding relative transition-all duration-300"
      >
        Build My Resume
        <div className="bg-gradient-to-r from-primaryColor to-indigo-600 w-full h-full p-[1px] absolute top-0 left-0 rounded-[5px] -z-10">
          <div className="bg-bgColor w-full h-full rounded"></div>
        </div>
      </Link>
    </div>
  );
};
