"use client";
import { BuildingResumeFooter } from "@/components/BuildingResumeFooter";
import { SmallPreview } from "@/components/SmallPreview";
import { useResumeContext } from "@/context/ResumeContext";
import {
  templatesData,
  TemplatesDataTypes,
} from "@/features/ResumeTemplates/templatesData";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ExperienceItem } from "./ExperienceItem";
import { ExperienceCard } from "./ExpDataTypes";
import { ListCard } from "@/components/ListCard";

export const ExperienceFeat = () => {
  const router = useRouter();
  const [expData, setExpData] = useState<ExperienceCard[]>([]);
  const { resumeData, setResumeData } = useResumeContext();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editIdx, setEditIdx] = useState<number>(-1);

  const handleEdit = (idx: number) => {
    setIsEdit(true);
    setEditIdx(idx);
  };

  const handleDelete = (text: string, startDate: string, endDate: string) => {
    setExpData((prev) =>
      prev.filter(
        (item) =>
          item.companyName != text &&
          item.endDate != startDate &&
          item.startDate != endDate
      )
    );
  };

  const continueToEducation = () => {
    setResumeData((prev) => ({ ...prev, experience: expData }));
    localStorage.setItem(
      "NextResumeData",
      JSON.stringify({
        ...resumeData,
        experience: expData,
      })
    );
    router.push("/build-resume/fill-data/education");
  };

  useEffect(() => {
    const { experience } = resumeData;
    setExpData(experience);
  }, [resumeData]);

  return (
    <div className="w-full h-full grid lg:grid-cols-3 grid-cols-1 place-items-center lg:gap-8 gap-6 md:pt-20">
      <div className="flex flex-col gap-4 items-center w-full lg:col-span-2">
        <div className="md:text-3xl text-xl font-bold text-textColor">
          Please Add Your Esperience
        </div>
        <div className="md:text-lg text-base font-semibold text-textColor/70 -mt-4">
          Make sure to add them in order
        </div>
        <div>
          <ExperienceItem
            setExpData={setExpData}
            expData={expData}
            isEdit={isEdit}
            editIdx={editIdx}
            setIsEdit={setIsEdit}
            setEditIdx={setEditIdx}
          />
        </div>
        <div className="w-full bg-gray-50 flex flex-col items-center gap-2 p-1 rounded border border-gray-300 shadow-inner min-h-11 flex-wrap">
          {!expData ? (
            <div className="text-textColor/50 ml-3">No Experience added...</div>
          ) : (
            expData.map((exp, idx) => (
              <ListCard
                key={exp.companyName + idx}
                text={exp.companyName}
                index={idx}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                startDate={exp.startDate}
                endDate={exp.endDate}
              />
            ))
          )}
        </div>
      </div>
      <SmallPreview isSelected={false} disableAction={true} name={"classic"}>
        {templatesData[resumeData.templateName as keyof TemplatesDataTypes]}
      </SmallPreview>

      <BuildingResumeFooter
        text={"Continue to education"}
        confCustoms={continueToEducation}
        handleBack={() => router.back}
      />
    </div>
  );
};
