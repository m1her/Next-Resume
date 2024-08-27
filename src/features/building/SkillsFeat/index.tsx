"use client";
import { BuildingResumeFooter } from "@/components/BuildingResumeFooter";
import { SmallPreview } from "@/components/SmallPreview";
import { TextInput } from "@/components/TextInput";
import { useResumeContext } from "@/context/ResumeContext";
import {
  templatesData,
  TemplatesDataTypes,
} from "@/features/ResumeTemplates/templatesData";
import { useRouter } from "next/navigation";
import React from "react";
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
  const { resumeData, setResumeData } = useResumeContext();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
   
  };

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
          <div className="flex lg:flex-row flex-col items-start gap-4 w-full">
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
          </div>
        </form>
      </div>
      <SmallPreview isSelected={false} disableAction={true} name={"classic"}>
        {templatesData[resumeData.templateName as keyof TemplatesDataTypes]}
      </SmallPreview>

      <BuildingResumeFooter
        btnType="submit"
        text={"Continue to summary"}
        form="skills-info"
        handleBack={() => router.back}
      />
    </div>
  );
};
