import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TemplatesReveiw } from "./TemplatesReveiw";

export const Main = () => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 md:gap-12 gap-8 md:px-12 px-8">
      <div className="col-span-2 flex flex-col md:gap-y-12 gap-y-6 md:items-start items-center">
        <div className="text-textColor md:text-6xl text-4xl font-urbanist font-medium">
          The Best Online <br /> Resume Builder
        </div>
        <div className="md:hidden block md:w-full w-2/3 aspect-square relative">
          <Image src={"/cv.svg"} alt={"cv image"} fill sizes="2" />
          <div className="w-2/3 aspect-square rounded-full bg-secondaryColor/30 blur-3xl -z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="text-textColor md:text-2xl text-xl font-urbanist font-medium">
          Easily create the perfect resume for any job using our best-in-class
          resume builder platform.
        </div>
        <Link
          href="/build-resume/choose-template"
          className="text-white text-center bg-gradient-to-r from-secondaryColor hover:from-amber-400 to-orange-500 hover:to-[#f96916] md:text-xl text-lg font-urbanist font-semibold px-6 py-4 rounded md:w-1/2 w-full"
        >
          Create My Resume Now
        </Link>
        <div className="flex items-center font-urbanist">
          <div className="flex flex-col pr-6 border-r border-indigo-600 items-center gap-y-2 bg-gradient-to-r from-primaryColor to-indigo-600 text-transparent bg-clip-text">
            <div className="md:text-4xl text-3xl font-bold flex gap-x-2 items-center">
              <FontAwesomeIcon
                icon={faArrowUp}
                className="text-primaryColor w-7 h-7"
              />
              2x
            </div>
            <div className="md:text-xl text-lg">more reviews</div>
          </div>
          <div className="flex flex-col items-center pl-6 gap-y-2 bg-gradient-to-r from-primaryColor to-indigo-600 text-transparent bg-clip-text">
            <div className="md:text-4xl text-3xl font-bold flex gap-x-2 items-center">
              <FontAwesomeIcon
                icon={faArrowUp}
                className="text-primaryColor w-7 h-7"
              />
              25%
            </div>
            <div className="md:text-xl text-lg">more job offers</div>
          </div>
        </div>
      </div>
      <div className="w-full h-full relative md:flex items-center justify-center hidden lg:px-14">
        {/* <Image src={"/cv.svg"} alt={"cv image"} fill sizes="2" /> */}
        <TemplatesReveiw />
        <div className="w-2/3 aspect-square rounded-full bg-secondaryColor/30 blur-3xl -z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </div>
  );
};
