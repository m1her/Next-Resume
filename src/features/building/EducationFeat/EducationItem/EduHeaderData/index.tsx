import { TextInput } from "@/components/TextInput";
import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { EducationCard } from "../../EduDataTypes";

export const EduHeaderData = ({
  errors,
  register,
}: {
  errors: FieldErrors<EducationCard>;
  register: UseFormRegister<EducationCard>;
}) => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 w-full gap-4">
      <TextInput
        id="school-name"
        label="School Name"
        name="schoolName"
        placeholder="e.g. Al-Azhar Uni"
        error={!!errors.schoolName}
        errorMsg={errors.schoolName?.message}
        register={register}
        registerProps={{
          required: "School Name is Required",
        }}
      />
      <TextInput
        id="school-location"
        label="School Location"
        name="schoolLocation"
        placeholder="e.g. Gaza, Palestine"
        error={!!errors.schoolLocation}
        errorMsg={errors.schoolLocation?.message}
        register={register}
        registerProps={{
          required: "School Location is Required",
        }}
      />
      <TextInput
        id="school-degree"
        label="School Degree"
        name="schoolDegree"
        placeholder="e.g. BC. Software Engineering"
        error={!!errors.schoolDegree}
        errorMsg={errors.schoolDegree?.message}
        register={register}
        registerProps={{
          required: "Degree is Required",
        }}
      />
      <div className="flex items-center gap-x-2">
        <TextInput
          id="edu-start-date"
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
          id="edu-end-date"
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
    </div>
  );
};
