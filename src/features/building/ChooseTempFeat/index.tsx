"use client";
import { SmallPreview } from "@/components/SmallPreview";
import { useResumeContext } from "@/context/ResumeContext";
import { ClassicTemplate } from "@/features/ResumeTemplates/ClassicTemplate";
import { TwoColumnsTemplate } from "@/features/ResumeTemplates/TwoColumnsTemplate";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export const ChooseTempFeat = () => {
  const { resumeData, setResumeData } = useResumeContext();
  const [font, setFont] = useState<string>(resumeData.fontType);
  const router = useRouter();
  const confirmTemplate = () => {
    setResumeData((prev) => ({
      ...prev,
      fontType: font,
    }));
    router.push("/build-resume/customize-template");
  };
  return (
    <div className="md:pt-28 pt-20 md:p-12 p-8 flex flex-col gap-y-2 items-center font-urbanist text-textColor">
      <div className="md:text-4xl text-3xl text-center font-bold">
        Choose from our resume templates
      </div>
      <div className="md:text-2xl text-xl text-center opacity-50">
        Choose your preferred template to proceed to the next step and customize
        it
      </div>
      <div className="w-full h-[1px] bg-textColor/60"></div>

      <div className="w-full mt-8 flex justify-center gap-x-8 select-none">
        <SmallPreview
          isSelected={resumeData.templateName == "classic"}
          name={"classic"}
          defaultFont={"font-notoserifgeorgian"}
          setFont={setFont}
        >
          <ClassicTemplate />
        </SmallPreview>
        <SmallPreview
          isSelected={resumeData.templateName == "twoCol"}
          name={"twoCol"}
          defaultFont={"font-roboto"}
          setFont={setFont}
        >
          <TwoColumnsTemplate />
        </SmallPreview>
      </div>
      <div className="w-full h-32"></div>

      <div className="fixed bottom-0 left-0 md:p-12 p-8 bg-white flex justify-end items-center gap-x-8 w-full shadow-[0_0_7px_1px_rgba(0,0,0,0.2)]">
        <Link
          href="/"
          className="text-primaryColor flex items-center gap-x-1 text-lg hover:border-b border-primaryColor"
        >
          <FontAwesomeIcon icon={faChevronLeft} className="w-3 h-3" />
          Back
        </Link>
        <div
          className="px-6 py-2 font-semibold text-lg text-white bg-secondaryColor rounded-full hover:bg-amber-500 transition-colors duration-300 cursor-pointer"
          onClick={confirmTemplate}
        >
          Choose Template
        </div>
      </div>
    </div>
  );
};
