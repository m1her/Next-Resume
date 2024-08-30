import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { ProjectCard } from "../../PrjDataTypes";
import { TextInput } from "@/components/TextInput";

export const PrjHeaderData = ({
  errors,
  register,
}: {
  errors: FieldErrors<ProjectCard>;
  register: UseFormRegister<ProjectCard>;
}) => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 w-full gap-4">
      <TextInput
        id="project-name"
        label="Project Name"
        name="projectName"
        placeholder="e.g. Next Resume"
        error={!!errors.projectName}
        errorMsg={errors.projectName?.message}
        register={register}
        registerProps={{
          required: "Project Name is Required",
        }}
      />
      <TextInput
        id="prj-finish-date"
        label="Finish Date"
        name="finishDate"
        placeholder="e.g. 16/Jan/2023"
        error={!!errors.finishDate}
        errorMsg={errors.finishDate?.message}
        register={register}
        registerProps={{
          required: "Finish Date is Required",
        }}
      />
      <div className="w-full lg:col-span-2">
        <TextInput
          id="about-project"
          label="About Project"
          name="aboutProject"
          placeholder="e.g. It's a good app and you have to use it ;)"
          error={!!errors.aboutProject}
          errorMsg={errors.aboutProject?.message}
          register={register}
          registerProps={{
            required: "About Project is Required",
          }}
        />
      </div>
    </div>
  );
};
