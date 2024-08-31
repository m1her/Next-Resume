import { faPencil, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";

export const ListMiniCard = ({
  text,
  extra,
  handleDelete,
  handleEdit,
}: {
  text: string;
  extra?: string;
  handleDelete: (text: string) => void;
  handleEdit: (text: string, extra?: string) => void;
}) => {
  const [crudOpen, setCrudOpen] = useState(false);
  const [deleteAnimation, setDeleteAnimation] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleDeleteAnimation = () => {
    handleDelete(text);
    setDeleteAnimation(true);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
      setCrudOpen(false);
    }
  };

  useEffect(() => {
    if (crudOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [crudOpen]);

  return (
    <div
      ref={cardRef}
      className={`${
        deleteAnimation ? "scale-50 opacity-0" : "scale-100 opacity-100"
      } transition-all duration-300 relative`}
    >
      <div
        onClick={() => setCrudOpen((prev) => !prev)}
        className={`relative z-20 w-fit min-w-20 h-full bg-white flex items-center justify-center px-2 py-1 border border-primaryColor/50 rounded cursor-pointer select-none transition-all duration-300 group`}
      >
        {text}
        <div
          onClick={handleDeleteAnimation}
          className={`absolute w-6 h-6 aspect-square z-30 rounded-full flex items-center justify-center bg-errorColor cursor-pointer hover:bg-red-600 transition-all duration-200
            ${
              crudOpen
                ? "opacity-100 -top-7 left-2 scale-100"
                : "opacity-0 scale-0 top-0 left-5"
            }`}
        >
          <FontAwesomeIcon icon={faX} className="w-3 h-3 text-white" />
        </div>
        <div
          onClick={() => handleEdit(text, extra)}
          className={`absolute w-6 h-6 aspect-square z-30 rounded-full flex items-center justify-center bg-primaryColor cursor-pointer hover:bg-blue-600 transition-all duration-200
            ${
              crudOpen
                ? "opacity-100 -top-7 right-2 scale-100"
                : "opacity-0 scale-0 top-0 right-5"
            }`}
        >
          <FontAwesomeIcon icon={faPencil} className="w-3 h-3 text-white" />
        </div>
      </div>
    </div>
  );
};
