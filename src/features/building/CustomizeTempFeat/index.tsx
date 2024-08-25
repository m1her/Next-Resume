"use client";
import { SmallPreview } from "@/components/SmallPreview";
import { useResumeContext } from "@/context/ResumeContext";
import { fontsData } from "@/features/building/CustomizeTempFeat/fontsData";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { colors } from "./colorsData";
import { useRouter } from "next/navigation";

export const CustomizeTempFeat = () => {
  const { resumeData, setResumeData } = useResumeContext();
  const router = useRouter();
  const handleBack = () => {
    setResumeData({
      template: <></>,
      templateName: "",
      colorTheme: { color: "", ring: "" },
      fontType: "",
    });
    router.back();
  };

  return (
    <div className="md:pt-28 pt-20 md:p-12 p-8 flex flex-col gap-y-2 items-center font-urbanist text-textColor">
      <div className="md:text-4xl text-3xl text-center font-bold ">
        Choose tour preferred styles
      </div>
      <div className="w-full h-[1px] bg-textColor/60"></div>

      <div className="w-full mt-8 grid md:grid-cols-2 grid-cols-1 gap-8 select-none md:place-items-end place-items-center">
        <div className="w-full h-full flex flex-col gap-y-4">
          <div className="text-lg font-semibold ">Choose color theme</div>
          <div className="grid grid-cols-4 gap-4 w-fit">
            {colors.map((item, index) => (
              <div
                key={Math.random()}
                className={`w-7 aspect-square rounded-full ${item.ring} ${
                  item.color == resumeData.colorTheme.color
                    ? "ring-[5px]"
                    : "ring-[0px]"
                } hover:ring-[5px] outline outline-white cursor-pointer`}
                style={{ backgroundColor: item.color }}
                onClick={() =>
                  setResumeData((prev) => ({ ...prev, colorTheme: item }))
                }
              ></div>
            ))}
          </div>

          <div className="text-lg font-semibold ">Choose font</div>
          <div className="grid grid-cols-2 gap-4 w-fit">
            {fontsData.map((item, index) => (
              <div
                key={index}
                className={`w-40 ${item.font}
                ${
                  item.font == resumeData.fontType
                    ? "bg-gray-600 text-white"
                    : ""
                }
                font-semibold border border-gray-600 text-center px-4 py-1 hover:bg-gray-600 hover:text-white transition-colors duration-300 cursor-pointer`}
                onClick={() =>
                  setResumeData((prev) => ({ ...prev, fontType: item.font }))
                }
              >
                {item.text}
              </div>
            ))}
          </div>
        </div>
        <SmallPreview isSelected={false} disableAction={true} name={"classic"}>
          {resumeData.template}
        </SmallPreview>
      </div>
      <div className="w-full h-32"></div>
      <div className="fixed bottom-0 left-0 md:p-12 p-8 bg-white flex items-center gap-x-8 justify-end w-full shadow-[0_0_7px_1px_rgba(0,0,0,0.2)]">
        <div
          onClick={handleBack}
          className="text-primaryColor flex items-center gap-x-1 md:text-lg text-base hover:border-b border-primaryColor cursor-pointer"
        >
          <FontAwesomeIcon icon={faChevronLeft} className="w-3 h-3" />
          Back
        </div>
        <Link
          href="/build-resume/customize-template"
          className="px-6 py-2 font-semibold md:text-lg text-base text-white bg-secondaryColor rounded-full hover:bg-amber-500 transition-colors duration-300"
        >
          Start Building Resume
        </Link>
      </div>
    </div>
  );
};
