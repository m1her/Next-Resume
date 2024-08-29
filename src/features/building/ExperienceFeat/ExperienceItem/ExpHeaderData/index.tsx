import { TextInput } from "@/components/TextInput";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ExperienceHeaderInputs } from "../../ExpDataTypes";

export const ExpHeaderData = ({
  setHeadData,
}: {
  setHeadData: React.Dispatch<
    React.SetStateAction<ExperienceHeaderInputs[] | []>
  >;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ExperienceHeaderInputs>();

  const onSubmit: SubmitHandler<ExperienceHeaderInputs> = (data) => {
    setHeadData((prev) => [...prev, data]);
    reset({
      companyLocation: "",
      companyName: "",
      companyPositionRole: "",
      endDate: "",
      startDate: "",
    });
  };

  return (
    <form
      id="experience-form"
      onSubmit={handleSubmit(onSubmit)}
      className="grid lg:grid-cols-2 grid-cols-1 w-full gap-4"
    >
      <TextInput
        id="company-name"
        label="Company Name"
        name="companyName"
        placeholder="e.g. Google"
        error={!!errors.companyName}
        errorMsg={errors.companyName?.message}
        register={register}
        registerProps={{
          required: "Company Name is Required",
        }}
      />
      <TextInput
        id="company-location"
        label="Company Location"
        name="companyLocation"
        placeholder="e.g. Cairo, Egypt"
        error={!!errors.companyLocation}
        errorMsg={errors.companyLocation?.message}
        register={register}
        registerProps={{
          required: "Company Location is Required",
        }}
      />
      <TextInput
        id="position-role"
        label="Position Role"
        name="companyPositionRole"
        placeholder="e.g. Frontend Developer"
        error={!!errors.companyPositionRole}
        errorMsg={errors.companyPositionRole?.message}
        register={register}
        registerProps={{
          required: "Role is Required",
        }}
      />
      <div className="flex items-center gap-x-2">
        <TextInput
          id="start-date"
          label="Start Date"
          name="startDate"
          placeholder="e.g. jan/2023"
          error={!!errors.startDate}
          errorMsg={errors.startDate?.message}
          register={register}
          registerProps={{
            required: "Start Date is Required",
          }}
        />
        <TextInput
          id="end-date"
          label="End Date"
          name="endDate"
          placeholder="e.g. may/2024"
          error={!!errors.endDate}
          errorMsg={errors.endDate?.message}
          register={register}
          registerProps={{
            required: "End Date is Required",
          }}
        />
      </div>
    </form>
  );
};
