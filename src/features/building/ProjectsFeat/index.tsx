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
import { ProjectCard } from "./PrjDataTypes";
import { ProjectItem } from "./ProjectItem";
import { ListCard } from "@/components/ListCard";

export const ProjectsFeat = () => {
  const router = useRouter();
  const [prjData, setPrjData] = useState<ProjectCard[]>([]);
  const { resumeData, setResumeData } = useResumeContext();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editIdx, setEditIdx] = useState<number>(-1);

  const handleEdit = (idx: number) => {
    setIsEdit(true);
    setEditIdx(idx);
  };

  const handleDelete = (text: string, finishDate: string) => {
    setPrjData((prev) =>
      prev.filter(
        (item) => item.projectName != text || item.finishDate != finishDate
      )
    );
  };

  const continueToLanguages = () => {
    setResumeData((prev) => ({ ...prev, projects: prjData }));
    localStorage.setItem(
      "NextResumeData",
      JSON.stringify({
        ...resumeData,
        projects: prjData,
      })
    );
    router.push("/build-resume/fill-data/languages");
  };

  useEffect(() => {
    const { projects } = resumeData;
    setPrjData(projects);
  }, [resumeData]);

  return (
    <div className="w-full h-full grid lg:grid-cols-3 grid-cols-1 place-items-center lg:gap-8 gap-6 md:pt-20">
      <div className="flex flex-col gap-4 items-center w-full lg:col-span-2">
        <div className="md:text-3xl text-xl font-bold text-textColor">
          Please Add Your Projects
        </div>
        <div className="md:text-lg text-base font-semibold text-textColor/70 -mt-4">
          Make sure choose ones you&lsquo;re proud of
        </div>
        <div>
          <ProjectItem
            setExpData={setPrjData}
            expData={prjData}
            isEdit={isEdit}
            editIdx={editIdx}
            setIsEdit={setIsEdit}
            setEditIdx={setEditIdx}
          />
        </div>
        <div className="w-full bg-gray-50 flex flex-col items-center gap-2 p-1 rounded border border-gray-300 shadow-inner min-h-11 flex-wrap">
          {!prjData ? (
            <div className="text-textColor/50 ml-3">No Experience added...</div>
          ) : (
            prjData.map((prj, idx) => (
              <ListCard
                key={prj.projectName + Math.random()}
                text={prj.projectName}
                index={idx}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                startDate={prj.finishDate}
                endDate={prj.finishDate}
              />
            ))
          )}
        </div>
      </div>
      <SmallPreview isSelected={false} disableAction={true} name={"classic"}>
        {templatesData[resumeData.templateName as keyof TemplatesDataTypes]}
      </SmallPreview>

      <BuildingResumeFooter
        text={"Continue to languages"}
        confCustoms={continueToLanguages}
        handleBack={() => router.back}
      />
    </div>
  );
};
