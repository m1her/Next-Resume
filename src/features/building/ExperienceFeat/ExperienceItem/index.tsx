import React, { useEffect } from "react";
import { ExpHeaderData } from "./ExpHeaderData";
import { ExpBullitPointsData } from "./ExpBullitPointsData";
import { ExpKeyTechs } from "./ExpKeyTechs";
import { SubmitHandler, useForm } from "react-hook-form";
import { ExperienceCard } from "../ExpDataTypes";

export const ExperienceItem = ({
  setExpData,
  isEdit,
  editIdx,
  expData,
  setIsEdit,
  setEditIdx,
}: {
  setExpData: React.Dispatch<React.SetStateAction<ExperienceCard[]>>;
  isEdit: boolean;
  editIdx: number;
  expData: ExperienceCard[];
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  setEditIdx: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<ExperienceCard>({
    defaultValues: { expBullitPoints: [{ text: "" }] },
  });

  const onSubmit: SubmitHandler<ExperienceCard> = (data) => {
      if (!isEdit) {
      setExpData((prev) => [...prev, data]);
    } else {
      handleSave(data);
    }

    reset({
      expBullitPoints: [{ text: "" }],
      companyLocation: "",
      companyName: "",
      companyPositionRole: "",
      endDate: "",
      startDate: "",
      expTech: "",
    });
  };

  useEffect(() => {
    if (editIdx > -1) {
      const {
        expBullitPoints,
        companyLocation,
        companyName,
        companyPositionRole,
        endDate,
        startDate,
        expTech,
      } = expData[editIdx];
      reset({
        expBullitPoints,
        companyLocation,
        companyName,
        companyPositionRole,
        endDate,
        startDate,
        expTech,
      });
    }
  }, [editIdx, expData, reset]);

  const handleSave = (data: ExperienceCard) => {
    const updatedArray = [...expData]; // Create a copy of the array
    updatedArray[editIdx] = data; // Update the element at index 1
    setExpData(updatedArray);
    setIsEdit(false);
    setEditIdx(-1);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-4">
        <ExpHeaderData errors={errors} register={register} />
        <ExpBullitPointsData
          control={control}
          errors={errors}
          register={register}
        />
        <ExpKeyTechs errors={errors} register={register} />

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
