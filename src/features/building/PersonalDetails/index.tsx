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
import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  job: string;
  phone: string;
  email: string;
  location: string;
  website: string;
};

export const PersonalDetails = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();
  const router = useRouter();
  const { resumeData, setResumeData } = useResumeContext();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setResumeData((prev) => ({ ...prev, ...data }));
    localStorage.setItem(
      "NextResumeData",
      JSON.stringify({
        ...resumeData,
        ...data,
      })
    );
    router.push("/build-resume/fill-data/summary");
  };

  useEffect(() => {
    const { email, job, location, name, phone, website } = resumeData;
    reset({
      email,
      job,
      location,
      name,
      phone,
      website,
    });
  }, [reset, resumeData]);

  return (
    <div className="w-full h-full grid lg:grid-cols-3 grid-cols-1 place-items-center lg:gap-8 gap-6">
      <div className="flex flex-col gap-4 items-center w-full lg:col-span-2">
        <div className="md:text-3xl text-xl font-bold text-textColor">
          Please fill your personal info
        </div>
        <div className="md:text-lg text-base font-semibold text-textColor/70 -mt-4">
          Make sure everything is correct
        </div>
        <form id="personal-info" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex lg:flex-row flex-col items-start gap-4 w-full">
            <TextInput
              id="full_name"
              label="Full Name"
              name="name"
              placeholder="e.g. Maher Nassrallah"
              error={!!errors.name}
              errorMsg={errors.name?.message}
              register={register}
              registerProps={{
                required: "Full Name is Required",
              }}
            />
            <TextInput
              id="job_title"
              label="Job Title"
              name="job"
              placeholder="e.g. Frontend Developer"
              error={!!errors.job}
              errorMsg={errors.job?.message}
              register={register}
              registerProps={{
                required: "Job title is Required",
              }}
            />
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 w-full gap-4 mt-4">
            <TextInput
              id="phone_number"
              label="Phone Number"
              name="phone"
              placeholder="e.g. +20 0000000000"
              error={!!errors.phone}
              errorMsg={errors.phone?.message}
              register={register}
              registerProps={{
                required: "Phone is Required",
              }}
            />
            <TextInput
              id="email"
              label="Email"
              name="email"
              placeholder="e.g. me-email@example.com"
              error={!!errors.email}
              errorMsg={errors.email?.message}
              register={register}
              registerProps={{
                required: "Email is Required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              }}
            />
            <TextInput
              id="location"
              label="Location"
              name="location"
              placeholder="e.g. Cairo, Egypt"
              error={!!errors.location}
              errorMsg={errors.location?.message}
              register={register}
              registerProps={{
                required: "Location is Required",
              }}
            />
            <TextInput
              id="website"
              label="Website"
              name="website"
              placeholder="e.g. https://www.linkedin.com/in/mns21"
              error={!!errors.website}
              errorMsg={errors.website?.message}
              register={register}
              registerProps={{
                required: "Portfolio is Required",
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
        form="personal-info"
        handleBack={() => router.back()}
      />
    </div>
  );
};
