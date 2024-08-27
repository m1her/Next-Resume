"use client";
import { SmallPreview } from "@/components/SmallPreview";
import { TextInput } from "@/components/TextInput";
import { useResumeContext } from "@/context/ResumeContext";
import {
  templatesData,
  TemplatesDataTypes,
} from "@/features/ResumeTemplates/templatesData";
import React from "react";

export const SummaryFeat = () => {
  const { resumeData, setResumeData } = useResumeContext();
  return (
    <div className="w-full h-full grid lg:grid-cols-3 grid-cols-1 md:place-items-center lg:gap-8 gap-4 font-urbanist">
      <div className="flex flex-col gap-4 items-center w-full lg:col-span-2">
        <div className="md:text-3xl text-xl font-bold text-textColor">
          Please Enter Your Summery
        </div>
        <div className="md:text-lg text-base font-semibold text-textColor/70 -mt-4">
          Make sure to express everything
        </div>
        <div className="w-full">
          <label className="text-sm font-semibold">Summary</label>
          <textarea rows={6} className="w-full border border-gray-500 rounded px-4 py-2 focus:outline-primaryColor text-textColor" />
        </div>
      </div>

      <SmallPreview isSelected={false} disableAction={true} name={"classic"}>
        {templatesData[resumeData.templateName as keyof TemplatesDataTypes]}
      </SmallPreview>
    </div>
  );
};
