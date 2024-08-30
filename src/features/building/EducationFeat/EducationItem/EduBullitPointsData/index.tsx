import React from "react";
import {
  Control,
  FieldErrors,
  useFieldArray,
  UseFormRegister,
} from "react-hook-form";
import { EducationCard } from "../../EduDataTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { TextInput } from "@/components/TextInput";

export const EduBullitPointsData = ({
  control,
  errors,
  register,
}: {
  control: Control<EducationCard, any>;
  errors: FieldErrors<EducationCard>;
  register: UseFormRegister<EducationCard>;
}) => {
  const { fields, append, remove } = useFieldArray({
    name: "eduBullitPoints",
    control,
  });

  return (
    <div className="flex flex-col gap-4">
      {fields.map((field, index) => (
        <div className="flex justify-between items-end gap-4" key={field.id}>
          <TextInput
            id={`edu-bullit-point-${index}.text`}
            label="Bullit Point"
            name={`eduBullitPoints.${index}.text` as const}
            placeholder="Any note about the experience"
            error={!!errors.eduBullitPoints?.[index]?.text}
            errorMsg={errors.eduBullitPoints?.[index]?.text?.message}
            register={register}
            registerProps={{
              required: "Bullit Point is Required",
            }}
          />
          <button
            className="px-4 py-2 w-20 h-[42px] text-center text-white text-sm font-semibold bg-errorColor rounded hover:bg-red-600 transition-colors duration-300"
            type="button"
            onClick={() => remove(index)}
          >
            DELETE
          </button>
        </div>
      ))}
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => append({ text: "" })}
      >
        <div className="w-full h-[1px] bg-primaryColor hover:bg-blue-600 transition-colors duration-300"></div>
        <div className="w-4 h-4 rounded-full flex items-center justify-center border border-primaryColor text-primaryColor hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
          <FontAwesomeIcon icon={faPlus} className="w-3 h-3" />
        </div>
      </div>
    </div>
  );
};
