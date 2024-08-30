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
import { EducationCard } from "./EduDataTypes";
import { EducationItem } from "./EducationItem";
import { ListCard } from "@/components/ListCard";

export const EducationFeat = () => {
  const router = useRouter();
  const [eduData, setEduData] = useState<EducationCard[]>([]);
  const { resumeData, setResumeData } = useResumeContext();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editIdx, setEditIdx] = useState<number>(-1);

  const handleEdit = (idx: number) => {
    setIsEdit(true);
    setEditIdx(idx);
  };

  const handleDelete = (text: string, startDate: string, endDate: string) => {
    setEduData((prev) =>
      prev.filter(
        (item) =>
          item.schoolName != text ||
          item.endDate != endDate ||
          item.startDate != startDate
      )
    );
  };

  const continueToProjects = () => {
    setResumeData((prev) => ({ ...prev, education: eduData }));
    localStorage.setItem(
      "NextResumeData",
      JSON.stringify({
        ...resumeData,
        education: eduData,
      })
    );
    router.push("/build-resume/fill-data/projects");
  };

  useEffect(() => {
    const { education } = resumeData;
    setEduData(education);
  }, [resumeData]);

  return (
    <div className="w-full h-full grid lg:grid-cols-3 grid-cols-1 place-items-center lg:gap-8 gap-6 md:pt-20">
      <div className="flex flex-col gap-4 items-center w-full lg:col-span-2">
        <div className="md:text-3xl text-xl font-bold text-textColor">
          Please Add Your Education
        </div>
        <div className="md:text-lg text-base font-semibold text-textColor/70 -mt-4">
          Make sure to add them in order
        </div>
        <div>
          <EducationItem
            setEduData={setEduData}
            eduData={eduData}
            isEdit={isEdit}
            editIdx={editIdx}
            setIsEdit={setIsEdit}
            setEditIdx={setEditIdx}
          />
        </div>
        <div className="w-full bg-gray-50 flex flex-col items-center gap-2 p-1 rounded border border-gray-300 shadow-inner min-h-11 flex-wrap">
          {!eduData ? (
            <div className="text-textColor/50 ml-3">No Education added...</div>
          ) : (
            eduData.map((edu, idx) => (
              <ListCard
                key={edu.schoolName + idx}
                text={edu.schoolName}
                index={idx}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                startDate={edu.startDate}
                endDate={edu.endDate}
              />
            ))
          )}
        </div>
      </div>
      <SmallPreview isSelected={false} disableAction={true} name={"classic"}>
        {templatesData[resumeData.templateName as keyof TemplatesDataTypes]}
      </SmallPreview>

      <BuildingResumeFooter
        text={"Continue to Projects"}
        confCustoms={continueToProjects}
        handleBack={() => router.back}
      />
    </div>
  );
};
