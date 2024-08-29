import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ExperienceTechs } from "../../ExpDataTypes";
import { TextInput } from "@/components/TextInput";

export const ExpKeyTechs = ({
  setExpKeyTechs,
}: {
  setExpKeyTechs: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ExperienceTechs>();

  const onSubmit: SubmitHandler<ExperienceTechs> = (data) => {
    setExpKeyTechs(data.expTech);
    reset({
      expTech: "",
    });
  };
  return (
    <form
      id="experience-form"
      onSubmit={handleSubmit(onSubmit)}
      className="grid lg:grid-cols-2 grid-cols-1 w-full gap-4"
    >
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
    </form>
  );
};
