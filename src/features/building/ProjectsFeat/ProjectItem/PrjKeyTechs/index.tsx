import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { ProjectCard } from "../../PrjDataTypes";
import { TextInput } from "@/components/TextInput";

export const PrjKeyTechs = ({
  errors,
  register,
}: {
  errors: FieldErrors<ProjectCard>;
  register: UseFormRegister<ProjectCard>;
}) => {
  return (
    <div className="grid w-full gap-4">
      <TextInput
        id="project-key-techs"
        label="Key Techs"
        name="prjTech"
        placeholder="e.g. Typecript, React.js..."
        error={!!errors.prjTech}
        errorMsg={errors.prjTech?.message}
        register={register}
        registerProps={{
          required: "Key Techs are Required",
        }}
      />
    </div>
  );
};
