"use client";
import { SmallPreview } from "@/components/SmallPreview";
import { useResumeContext } from "@/context/ResumeContext";
import { ClassicTemplate } from "@/features/ResumeTemplates/ClassicTemplate";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export const CustomizeTempFeat = () => {
  const { resumeData } = useResumeContext();

  return (
    <div className="md:pt-28 pt-20 md:p-12 p-8 flex flex-col gap-y-2 items-center font-urbanist text-textColor">
      <div className="md:text-4xl text-3xl text-center font-bold ">
        Choose tour preferred styles
      </div>
      <div className="w-full h-[1px] bg-textColor/60"></div>

      <div className="w-full mt-8 grid grid-cols-2 gap-x-8 select-none place-items-end">
        <div className="w-full h-full flex flex-col gap-y-4">
          <div className="text-lg font-semibold ">Choose color theme</div>
          <div className="grid grid-cols-4 gap-4 w-fit">
            <div className="w-7 aspect-square rounded-full bg-black hover:ring-[5px] ring-black outline outline-white cursor-pointer"></div>
            <div className="w-7 aspect-square rounded-full bg-slate-400 hover:ring-[5px] ring-slate-400 outline outline-white cursor-pointer"></div>
            <div className="w-7 aspect-square rounded-full bg-indigo-700 hover:ring-[5px] ring-indigo-700 outline outline-white cursor-pointer"></div>
            <div className="w-7 aspect-square rounded-full bg-[#1f4e79] hover:ring-[5px] ring-[#1f4e79] outline outline-white cursor-pointer"></div>
            <div className="w-7 aspect-square rounded-full bg-fuchsia-600 hover:ring-[5px] ring-fuchsia-600 outline outline-white cursor-pointer"></div>
            <div className="w-7 aspect-square rounded-full bg-purple-700 hover:ring-[5px] ring-purple-700 outline outline-white cursor-pointer"></div>
            <div className="w-7 aspect-square rounded-full bg-lime-500 hover:ring-[5px] ring-lime-500 outline outline-white cursor-pointer"></div>
            <div className="w-7 aspect-square rounded-full bg-teal-600 hover:ring-[5px] ring-teal-600 outline outline-white cursor-pointer"></div>
            <div className="w-7 aspect-square rounded-full bg-green-700 hover:ring-[5px] ring-green-700 outline outline-white cursor-pointer"></div>
            <div className="w-7 aspect-square rounded-full bg-rose-600 hover:ring-[5px] ring-rose-600 outline outline-white cursor-pointer"></div>
            <div className="w-7 aspect-square rounded-full bg-red-600 hover:ring-[5px] ring-red-600 outline outline-white cursor-pointer"></div>
            <div className="w-7 aspect-square rounded-full bg-amber-500 hover:ring-[5px] ring-amber-500 outline outline-white cursor-pointer"></div>
          </div>
          <div className="text-lg font-semibold ">Choose font</div>
          <div className="grid grid-cols-2 gap-4 w-fit">
            <div className="w-40 font-urbanist font-semibold border border-gray-600 text-center px-4 py-1 hover:bg-gray-600 hover:text-white transition-colors duration-300 cursor-pointer">
              Aa | Urbanist
            </div>
            <div className="w-40 font-jost font-semibold border border-gray-600 text-center px-4 py-1 hover:bg-gray-600 hover:text-white transition-colors duration-300 cursor-pointer">
              Aa | Jost
            </div>
            <div className="w-40 font-notoserifgeorgian font-semibold border border-gray-600 text-center px-4 py-1 hover:bg-gray-600 hover:text-white transition-colors duration-300 cursor-pointer">
              Aa | Georgian
            </div>
            <div className="w-40 font-roboto font-semibold border border-gray-600 text-center px-4 py-1 hover:bg-gray-600 hover:text-white transition-colors duration-300 cursor-pointer">
              Aa | Roboto
            </div>
          </div>
        </div>
        <SmallPreview isSelected={false} disableAction={true} name={"classic"}>
          {resumeData.template}
        </SmallPreview>
      </div>
      <div className="w-full h-32"></div>
      <div className="fixed bottom-0 left-0 md:p-12 p-8 bg-white flex items-center gap-x-8 justify-end w-full shadow-[0_0_7px_1px_rgba(0,0,0,0.2)]">
        <Link
          href="/build-resume/choose-template"
          className="text-primaryColor flex items-center gap-x-1 text-lg hover:border-b border-primaryColor"
        >
          <FontAwesomeIcon icon={faChevronLeft} className="w-3 h-3" />
          Back
        </Link>
        <Link
          href="/build-resume/customize-template"
          className="px-6 py-2 font-semibold text-lg text-white bg-secondaryColor rounded-full hover:bg-amber-500 transition-colors duration-300"
        >
          Start Building Resume
        </Link>
      </div>
    </div>
  );
};
