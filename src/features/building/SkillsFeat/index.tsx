"use client";
import { BuildingResumeFooter } from "@/components/BuildingResumeFooter";
import { ListMiniCard } from "@/components/ListMiniCard";
import { SmallPreview } from "@/components/SmallPreview";
import { TextInput } from "@/components/TextInput";
import { useResumeContext } from "@/context/ResumeContext";
import {
  templatesData,
  TemplatesDataTypes,
} from "@/features/ResumeTemplates/templatesData";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  skill: string;
};

export const SkillsFeat = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();
  const router = useRouter();
  const [mySkills, setMySkills] = useState<string[]>([]);
  const { resumeData, setResumeData } = useResumeContext();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setMySkills((prev) => [...prev, data.skill]);
    reset({ skill: "" });
  };

  const handleDelete = (text: string) => {
    setTimeout(() => {
      setMySkills((prev) => prev.filter((item) => item !== text));
    }, 300);
  };
  
  const handleEdit = (text: string) => {
    setMySkills((prev) => prev.filter((item) => item !== text));
    reset({ skill: text });
  };

  const continueToExperience = () => {
    setResumeData((prev) => ({ ...prev, skills: mySkills }));
    localStorage.setItem(
      "NextResumeData",
      JSON.stringify({
        ...resumeData,
        skills: mySkills,
      })
    );
    router.push("/build-resume/fill-data/experience");
  };

  useEffect(() => {
    const { skills } = resumeData;
    setMySkills(skills);
  }, [reset, resumeData]);

  return (
    <div className="w-full h-full grid lg:grid-cols-3 grid-cols-1 place-items-center lg:gap-8 gap-6">
      <div className="flex flex-col gap-4 items-center w-full lg:col-span-2">
        <div className="md:text-3xl text-xl font-bold text-textColor">
          Please Enter Your Skills
        </div>
        <div className="md:text-lg text-base font-semibold text-textColor/70 -mt-4">
          Make sure not to forget any!
        </div>
        <form id="skills-info" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex lg:flex-row flex-col items-end gap-4 w-full">
            <TextInput
              id="skill"
              label="Skill"
              name="skill"
              placeholder="e.g. Typescript"
              error={!!errors.skill}
              errorMsg={errors.skill?.message}
              register={register}
              registerProps={{
                required: "Skill is Required",
              }}
            />
            <button
              type="submit"
              className="font-semibold text-white bg-primaryColor rounded px-10 py-2 lg:w-fit w-full hover:bg-primaryColor/90 transition-all duration-300"
            >
              Add
            </button>
          </div>
        </form>
        <div className="w-[400px] relative bg-gray-50 flex items-center gap-2 p-1 rounded border border-gray-300 shadow-inner min-h-11 flex-wrap">
          {mySkills.map((skill) => (
            <ListMiniCard
              key={skill}
              text={skill}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          ))}
        </div>
      </div>
      <SmallPreview isSelected={false} disableAction={true} name={"classic"}>
        {templatesData[resumeData.templateName as keyof TemplatesDataTypes]}
      </SmallPreview>

      <BuildingResumeFooter
        text={"Continue to experience"}
        confCustoms={continueToExperience}
        handleBack={() => router.back}
      />
    </div>
  );
};
