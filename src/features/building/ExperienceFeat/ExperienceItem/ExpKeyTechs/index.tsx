import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { ExperienceCard } from "../../ExpDataTypes";
import { TextInput } from "@/components/TextInput";

export const ExpKeyTechs = ({
  errors,
  register,
}: {
  errors: FieldErrors<ExperienceCard>;
  register: UseFormRegister<ExperienceCard>;
}) => {
  return (
    <div className="grid w-full gap-4">
      <TextInput
        id="experience-key-techs"
        label="Key Techs"
        name="expTech"
        placeholder="e.g. Typecript, React.js..."
        error={!!errors.expTech}
        errorMsg={errors.expTech?.message}
        register={register}
        registerProps={{
          required: "Key Techs are Required",
        }}
      />
    </div>
  );
};
