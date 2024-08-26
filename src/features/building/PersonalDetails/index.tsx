"use client";
import { SmallPreview } from "@/components/SmallPreview";
import { TextInput } from "@/components/TextInput";
import { useResumeContext } from "@/context/ResumeContext";
import {
  templatesData,
  TemplatesDataTypes,
} from "@/features/ResumeTemplates/templatesData";
import React from "react";

export const PersonalDetails = () => {
  const { resumeData, setResumeData } = useResumeContext();
  return (
    <div className="w-full h-full grid lg:grid-cols-3 grid-cols-1 md:place-items-center lg:gap-8 gap-4">
      <div className="flex flex-col gap-4 items-center w-full lg:col-span-2">
        <div className="md:text-3xl text-xl font-bold text-textColor">
          Please fill your personal info
        </div>
        <div className="md:text-lg text-base font-semibold text-textColor/70 -mt-4">
          Make sure everything is correct
        </div>
        <div className="flex lg:flex-row flex-col items-start gap-4 w-full">
          <TextInput />
          <TextInput />
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 w-full gap-4">
          <TextInput />
          <TextInput />
          <TextInput />
          <TextInput />
        </div>
      </div>

      <SmallPreview isSelected={false} disableAction={true} name={"classic"}>
        {templatesData[resumeData.templateName as keyof TemplatesDataTypes]}
      </SmallPreview>
    </div>
  );
};
