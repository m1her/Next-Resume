import { ExperienceCard } from "@/features/building/ExperienceFeat/ExpDataTypes";
import { faPencil, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const ListCard = ({
  text,
  handleDelete,
  handleEdit,
  startDate,
  endDate,
  index,
}: {
  text: string;
  startDate: string;
  endDate: string;
  index: number;
  handleEdit: (idx: number) => void;
  handleDelete: (text: string, startDate: string, endDate: string) => void;
}) => {
  const deleteExp = () => {
    handleDelete(text, startDate, endDate);
  };
  const editExp = () => {
    handleEdit(index);
  };

  return (
    <div
      className={`w-full h-12 bg-white flex items-center justify-between pl-2 pr-1 py-1 border border-primaryColor/50 rounded select-none`}
    >
      {text}
      <div className="flex gap-2 items-center">
        <div
          onClick={deleteExp}
          className="h-10 w-12 rounded flex items-center justify-center bg-errorColor hover:bg-red-600 cursor-pointer transition-all duration-200"
        >
          <FontAwesomeIcon icon={faX} className="w-3 h-3 text-white" />
        </div>
        <div
          onClick={editExp}
          className="h-10 w-12 rounded flex items-center justify-center bg-primaryColor hover:bg-blue-500 cursor-pointer transition-all duration-200"
        >
          <FontAwesomeIcon icon={faPencil} className="w-3 h-3 text-white" />
        </div>
      </div>
    </div>
  );
};
