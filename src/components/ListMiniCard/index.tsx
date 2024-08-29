import { faPencil, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export const ListMiniCard = ({
  text,
  handleDelete,
  handleEdit,
}: {
  text: string;
  handleDelete: (text: string) => void;
  handleEdit: (text: string) => void;
}) => {
  const [crudOpen, setCrudOpen] = useState(false);
  const [deleteAnimation, setDeleteAnimation] = useState(false);

  const handleDeleteAnimation = () => {
    handleDelete(text);
    setDeleteAnimation(true);
  };

  return (
    <div
      className={` ${
        deleteAnimation ? "scale-50 opacity-0" : "scale-100 opacity-100"
      } transition-all duration-300`}
    >
      <div
        onClick={() => setCrudOpen((prev) => !prev)}
        className={`relative z-20 w-fit min-w-20 h-full bg-white flex items-center justify-center px-2 py-1 border border-primaryColor/50 rounded cursor-pointer select-none transition-all duration-300 group
            ${crudOpen ? "z-30" : "z-10"}
            `}
      >
        {text}
        <div
          onClick={handleDeleteAnimation}
          className={`w-6 absolute aspect-square z-50 rounded-full flex items-center justify-center bg-errorColor cursor-pointer hover:bg-red-600 transition-all duration-200
            ${
              crudOpen
                ? "-top-7 left-2 scale-100 opacity-100"
                : "top-0 left-5 scale-[0.2] opacity-0"
            }
            `}
        >
          <FontAwesomeIcon icon={faX} className="w-3 h-3 text-white" />
        </div>
        <div
          onClick={() => handleEdit(text)}
          className={`absolute w-6 aspect-square rounded-full flex items-center justify-center bg-primaryColor cursor-pointer hover:bg-blue-600 transition-all duration-200
            ${
              crudOpen
                ? "-top-7 right-2 scale-100 opacity-100"
                : "top-0 right-5 scale-[0.2] opacity-0 -z-50"
            }
            `}
        >
          <FontAwesomeIcon icon={faPencil} className="w-3 h-3 text-white" />
        </div>
      </div>
      {crudOpen && (
        <div
          className="fixed w-full min-h-screen z-20 top-0 left-0"
          onClick={() => setCrudOpen(false)}
        ></div>
      )}
    </div>
  );
};
