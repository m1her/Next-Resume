"use client";
import { SmallPreview } from "@/components/SmallPreview";
import { useResumeContext } from "@/context/ResumeContext";
import { ClassicTemplate } from "@/features/ResumeTemplates/ClassicTemplate";
import { TwoColumnsTemplate } from "@/features/ResumeTemplates/TwoColumnsTemplate";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export const ChooseTempFeat = () => {
  const router = useRouter();
  const { resumeData, setResumeData } = useResumeContext();
  const [defaults, setDefaults] = useState({
    fontType: "",
    colorTheme: {
      color: "",
      ring: "",
    },
  });

  const handleBack = () => {
    setResumeData({
      templateName: "",
      colorTheme: { color: "", ring: "" },
      fontType: "",
    });
    router.back();
  };
  const confirmTemplate = () => {
    if (resumeData.templateName != "") {
      setResumeData((prev) => ({
        ...prev,
        ...defaults,
      }));
      localStorage.setItem(
        "NextResumeData",
        JSON.stringify({
          ...resumeData,
          ...defaults,
        })
      );
      router.push("/build-resume/customize-template");
    }
  };

  //to handle browser back click
  useEffect(() => {
    setDefaults({
      fontType: resumeData.fontType,
      colorTheme: resumeData.colorTheme,
    });
  }, []);
  return (
    <div className="md:pt-28 pt-20 md:p-12 p-8 flex flex-col gap-y-2 items-center font-urbanist text-textColor">
      <div className="md:text-4xl text-3xl text-center font-bold">
        Choose from our resume templates
      </div>
      <div className="md:text-2xl text-lg text-center opacity-50">
        Choose your preferred template to proceed to the next step and customize
        it
      </div>
      <div className="w-full h-[1px] bg-textColor/60"></div>

      <div className="w-full mt-8 flex md:flex-row flex-col items-center justify-center gap-8 select-none">
        <SmallPreview
          isSelected={resumeData.templateName == "classic"}
          name={"classic"}
          defaultFont={"font-notoserifgeorgian"}
          defaultColors={{ color: "#1f4e79", ring: "ring-[#1f4e79]" }}
          setDefaults={setDefaults}
        >
          <ClassicTemplate />
        </SmallPreview>
        <SmallPreview
          isSelected={resumeData.templateName == "twoCol"}
          name={"twoCol"}
          defaultFont={"font-roboto"}
          defaultColors={{ color: "#374151", ring: "ring-gray-700" }}
          setDefaults={setDefaults}
        >
          <TwoColumnsTemplate />
        </SmallPreview>
      </div>
      <div className="w-full h-32"></div>

      <div className="fixed bottom-0 left-0 md:p-12 p-8 bg-white flex justify-end items-center gap-x-8 w-full shadow-[0_0_7px_1px_rgba(0,0,0,0.2)]">
        <div
          onClick={handleBack}
          className="text-primaryColor flex items-center gap-x-1 md:text-lg text-base hover:border-b border-primaryColor cursor-pointer"
        >
          <FontAwesomeIcon icon={faChevronLeft} className="w-3 h-3" />
          Back
        </div>
        <button
          className="px-6 py-2 font-semibold md:text-lg text-base text-white bg-secondaryColor rounded-full hover:bg-amber-500 disabled:bg-gray-500 transition-colors duration-300 cursor-pointer"
          onClick={confirmTemplate}
          disabled={resumeData.templateName == ""}
        >
          Choose Template
        </button>
      </div>
    </div>
  );
};
