import React, { useEffect } from "react";
import { EducationCard } from "../EduDataTypes";
import { SubmitHandler, useForm } from "react-hook-form";
import { EduHeaderData } from "./EduHeaderData";
import { EduBullitPointsData } from "./EduBullitPointsData";

export const EducationItem = ({
  setEduData,
  isEdit,
  editIdx,
  eduData,
  setIsEdit,
  setEditIdx,
}: {
  setEduData: React.Dispatch<React.SetStateAction<EducationCard[]>>;
  isEdit: boolean;
  editIdx: number;
  eduData: EducationCard[];
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  setEditIdx: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<EducationCard>({
    defaultValues: { eduBullitPoints: [{ text: "" }] },
  });

  const onSubmit: SubmitHandler<EducationCard> = (data) => {
    if (!isEdit) {
      setEduData((prev) => [...prev, data]);
    } else {
      handleSave(data);
    }

    reset({
      eduBullitPoints: [{ text: "" }],
      schoolName: "",
      schoolLocation: "",
      schoolDegree: "",
      startDate: "",
      endDate: "",
    });
  };

  useEffect(() => {
    if (editIdx > -1) {
      const {
        eduBullitPoints,
        schoolName,
        schoolLocation,
        schoolDegree,
        startDate,
        endDate,
      } = eduData[editIdx];
      reset({
        eduBullitPoints,
        schoolName,
        schoolLocation,
        schoolDegree,
        startDate,
        endDate,
      });
    }
  }, [editIdx, eduData, reset]);

  const handleSave = (data: EducationCard) => {
    const updatedArray = [...eduData]; // Create a copy of the array
    updatedArray[editIdx] = data; // Update the element at index 1
    setEduData(updatedArray);
    setIsEdit(false);
    setEditIdx(-1);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-4">
        <EduHeaderData errors={errors} register={register} />
        <EduBullitPointsData
          control={control}
          errors={errors}
          register={register}
        />
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
