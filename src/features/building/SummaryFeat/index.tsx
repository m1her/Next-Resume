"use client";
import { BuildingResumeFooter } from "@/components/BuildingResumeFooter";
import { SmallPreview } from "@/components/SmallPreview";
import { TextInput } from "@/components/TextInput";
import { useResumeContext } from "@/context/ResumeContext";
import {
  templatesData,
  TemplatesDataTypes,
} from "@/features/ResumeTemplates/templatesData";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  summary: string;
};

export const SummaryFeat = () => {
  const { resumeData, setResumeData } = useResumeContext();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setResumeData((prev) => ({ ...prev, ...data }));
    localStorage.setItem(
      "NextResumeData",
      JSON.stringify({
        ...resumeData,
        ...data,
      })
    );
    router.push("/build-resume/fill-data/skills");
  };

  useEffect(() => {
    const { summary } = resumeData;
    reset({
      summary,
    });
  }, [reset, resumeData]);
  return (
    <div className="w-full h-full grid lg:grid-cols-3 grid-cols-1 md:place-items-center lg:gap-8 gap-4 font-urbanist">
      <div className="flex flex-col gap-4 items-center w-full lg:col-span-2">
        <div className="md:text-3xl text-xl font-bold text-textColor">
          Please Enter Your Summery
        </div>
        <div className="md:text-lg text-base font-semibold text-textColor/70 -mt-4">
          Make sure to express everything
        </div>
        <form
          id="summary-form"
          onSubmit={handleSubmit(onSubmit)}
          className="w-full"
        >
          <label className="text-sm font-semibold">Summary</label>
          <textarea
            id="summary"
            rows={6}
            {...register("summary", {
              required: "Summary about you is a must",
              minLength: { value: 200, message: "At least 200 characters" },
            })}
            className={`w-full border  rounded px-4 py-2  text-textColor focus:outline outline-1
              ${
                errors.summary
                  ? "focus:outline-errorColor border-errorColor"
                  : "focus:outline-primaryColor border-gray-500 focus:border-primaryColor"
              }
              `}
          />
          {errors.summary && (
            <div className="flex items-center gap-2 text-sm text-errorColor absolute">
              <FontAwesomeIcon icon={faCircleXmark} />
              <span className="text-[0.8rem] font-normal">
                {errors.summary.message}
              </span>
            </div>
          )}
        </form>
      </div>

      <SmallPreview isSelected={false} disableAction={true} name={"classic"}>
        {templatesData[resumeData.templateName as keyof TemplatesDataTypes]}
      </SmallPreview>
      <BuildingResumeFooter
        btnType="submit"
        text={"Continue to skills"}
        form="summary-form"
        handleBack={() => router.back}
      />
    </div>
  );
};
