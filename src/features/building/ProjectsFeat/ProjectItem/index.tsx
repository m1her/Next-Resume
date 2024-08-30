import React, { useEffect } from "react";
import { ProjectCard } from "../PrjDataTypes";
import { SubmitHandler, useForm } from "react-hook-form";
import { PrjHeaderData } from "./PrjHeaderData";
import { PrjBullitPointsData } from "./PrjBullitPointsData";
import { PrjKeyTechs } from "./PrjKeyTechs";

export const ProjectItem = ({
  setExpData,
  isEdit,
  editIdx,
  expData,
  setIsEdit,
  setEditIdx,
}: {
  setExpData: React.Dispatch<React.SetStateAction<ProjectCard[]>>;
  isEdit: boolean;
  editIdx: number;
  expData: ProjectCard[];
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  setEditIdx: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<ProjectCard>({
    defaultValues: { prjBullitPoints: [{ text: "" }] },
  });

  const onSubmit: SubmitHandler<ProjectCard> = (data) => {
    if (!isEdit) {
      setExpData((prev) => [...prev, data]);
    } else {
      handleSave(data);
    }

    reset({
      prjBullitPoints: [{ text: "" }],
      projectName: "",
      aboutProject: "",
      finishDate: "",
      prjTech: "",
    });
  };

  useEffect(() => {
    if (editIdx > -1) {
      const {
        prjBullitPoints,
        projectName,
        aboutProject,
        finishDate,
        prjTech,
      } = expData[editIdx];
      reset({
        prjBullitPoints,
        projectName,
        aboutProject,
        finishDate,
        prjTech,
      });
    }
  }, [editIdx, expData, reset]);

  const handleSave = (data: ProjectCard) => {
    const updatedArray = [...expData]; // Create a copy of the array
    updatedArray[editIdx] = data; // Update the element at index 1
    setExpData(updatedArray);
    setIsEdit(false);
    setEditIdx(-1);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-4">
        <PrjHeaderData errors={errors} register={register} />
        <PrjBullitPointsData
          control={control}
          errors={errors}
          register={register}
        />
        <PrjKeyTechs errors={errors} register={register} />

        <button
          type="submit"
          className="mt-2 font-semibold text-white bg-primaryColor rounded px-10 py-2 lg:w-fit w-full hover:bg-primaryColor/90 transition-all duration-300"
        >
          {isEdit ? "Save" : "Add"}
        </button>
      </div>
    </form>
  );
};
