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
import React, { useEffect, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { LangDataTypes } from "./LangDataTypes";

type Inputs = {
  language: string;
  level: string;
};

export const LanguagesFeat = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();
  const router = useRouter();
  const [myLanguages, setMyLanguages] = useState<LangDataTypes[]>([]);
  const { resumeData, setResumeData } = useResumeContext();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setMyLanguages((prev) => [
      ...prev,
      { language: data.language, level: data.level },
    ]);
    reset({ language: "", level: "" });
  };

  const handleDelete = (text: string) => {
    setTimeout(() => {
      setMyLanguages((prev) => prev.filter((item) => item.language !== text));
    }, 300);
  };

  const handleEdit = (language: string, extra?: string) => {
    setMyLanguages((prev) => prev.filter((item) => item.language !== language));
    reset({ language: language, level: extra });
  };

  const saveAndDownload = async () => {
    setResumeData((prev) => ({ ...prev, languages: myLanguages }));
    localStorage.setItem(
      "NextResumeData",
      JSON.stringify({
        ...resumeData,
        languages: myLanguages,
      })
    );

    router.push("/download");
  };

  useEffect(() => {
    const { languages } = resumeData;
    setMyLanguages(languages);
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
              id="language"
              label="Language"
              name="language"
              placeholder="e.g. Arabic"
              error={!!errors.language}
              errorMsg={errors.language?.message}
              register={register}
              registerProps={{
                required: "Language is Required",
              }}
            />
            <TextInput
              id="level"
              label="Level"
              name="level"
              placeholder="e.g. Fluent"
              error={!!errors.level}
              errorMsg={errors.level?.message}
              register={register}
              registerProps={{
                required: "Level is Required",
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
        <div className="w-[400px] bg-gray-50 flex items-center gap-2 p-1 rounded border border-gray-300 shadow-inner min-h-11 flex-wrap">
          {myLanguages.map((lang) => (
            <ListMiniCard
              key={lang.language}
              text={lang.language}
              extra={lang.level}
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
        text={"Save & Download"}
        confCustoms={saveAndDownload}
        handleBack={() => router.back}
      />
    </div>
  );
};
