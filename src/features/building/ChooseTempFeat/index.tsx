"use client";
import { BuildingResumeFooter } from "@/components/BuildingResumeFooter";
import Modal from "@/components/Modal";
import { SmallPreview } from "@/components/SmallPreview";
import { defaultResumeData, useResumeContext } from "@/context/ResumeContext";
import { ClassicTemplate } from "@/features/ResumeTemplates/ClassicTemplate";
import { TwoColumnsTemplate } from "@/features/ResumeTemplates/TwoColumnsTemplate";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export const ChooseTempFeat = () => {
  const router = useRouter();
  const [isContinued, setIsContinued] = useState(false);
  const { resumeData, setResumeData } = useResumeContext();
  const [defaults, setDefaults] = useState({
    fontType: "",
    colorTheme: {
      color: "",
      ring: "",
    },
  });

  const handleBack = () => {
    setResumeData(defaultResumeData);
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
  }, [resumeData.colorTheme, resumeData.fontType]);

  useEffect(() => {
    const data = localStorage.getItem("NextResumeData");
    if (data) {
      setIsContinued(true);
    }
  }, []);

  const handleContinue = () => {
    router.push("/build-resume/fill-data/name-and-contacts");
    setIsContinued(false);
  };
  const deleteContinue = () => {
    setIsContinued(false);
    localStorage.removeItem("NextResumeData");
    setResumeData(defaultResumeData);
  };

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
      <BuildingResumeFooter
        handleBack={handleBack}
        confCustoms={confirmTemplate}
        text={"Choose Template"}
        disabled={resumeData.templateName == ""}
      />

      {isContinued && (
        <Modal
          customStyle="absolute bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10/12 md:w-8/12 lg:w-2/5 p-6 rounded"
          onDismiss={() => setIsContinued(false)}
        >
          <div className="flex flex-col gap-y-4 items-center">
            <div className="text-2xl font-semibold text-textColor">
              Continue with the last resume?
            </div>
            <div className="flex items-center gap-x-4">
              <button
                className="text-lg font-semibold text-white bg-errorColor rounded-full px-6 py-2 hover:bg-errorColor/90 transition-all duration-300"
                onClick={deleteContinue}
              >
                Delete
              </button>
              <button
                className="text-lg font-semibold text-white bg-primaryColor rounded-full px-8 py-2 hover:bg-primaryColor/90 transition-all duration-300"
                onClick={handleContinue}
              >
                Continue
              </button>
            </div>
          </div>
        </Modal>
      )}
      {/* <div className="w-full h-32"></div>
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
      </div> */}
    </div>
  );
};
