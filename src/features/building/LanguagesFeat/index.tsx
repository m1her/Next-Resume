"use client";
import { BuildingResumeFooter } from "@/components/BuildingResumeFooter";
import { SmallPreview } from "@/components/SmallPreview";
import { useResumeContext } from "@/context/ResumeContext";
import {
  templatesData,
  TemplatesDataTypes,
} from "@/features/ResumeTemplates/templatesData";
import { useRouter } from "next/navigation";
import React from "react";

export const LanguagesFeat = () => {
  const router = useRouter();
  const { resumeData, setResumeData } = useResumeContext();

  return (
    <div className="w-full h-full grid lg:grid-cols-3 grid-cols-1 place-items-center lg:gap-8 gap-6">
      <div className="flex flex-col gap-4 items-center w-full lg:col-span-2">
        <div className="md:text-3xl text-xl font-bold text-textColor">
          Please Add Your Languages
        </div>
        <div className="md:text-lg text-base font-semibold text-textColor/70 -mt-4">
          Make sure not to exaggerate your levels
        </div>

<form></form>

      </div>
      <SmallPreview isSelected={false} disableAction={true} name={"classic"}>
        {templatesData[resumeData.templateName as keyof TemplatesDataTypes]}
      </SmallPreview>

      <BuildingResumeFooter
        btnType="submit"
        text={"Continue to summary"}
        form="personal-info"
        handleBack={() => router.back}
      />
    </div>
  );
};
