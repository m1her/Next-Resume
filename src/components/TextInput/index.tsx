import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ChangeEvent } from "react";

interface TextInputTypes {
  id?: string;
  name?: string;
  type?: string;
  label?: string;
  placeholder?: string;
  defaultValue?: string;
  error?: boolean | string;
  errorMsg?: string;
  register?: any;
  registerProps?: any;
}

export const TextInput = ({
  id,
  name = "textInput",
  type = "text",
  label = "Text label",
  placeholder = "Enter value",
  error,
  errorMsg,
  defaultValue,
  register,
  registerProps,
}: TextInputTypes) => {
  return (
    <div className="font-urbanist w-full relative">
      <label
        className={`text-sm font-semibold ${
          error ? "text-errorColor" : "text-black"
        }`}
      >
        {label}
      </label>
      <input
        autoComplete="off"
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        {...register(name, registerProps)}
        className={`w-full border  rounded px-4 py-2  text-textColor focus:outline outline-1
          ${
            error
              ? "focus:outline-errorColor border-errorColor"
              : "focus:outline-primaryColor border-gray-500 focus:border-primaryColor"
          }
          `}
      />
      {error && (
        <div className="flex items-center gap-2 text-sm text-errorColor absolute">
          <FontAwesomeIcon icon={faCircleXmark} />
          <span className="text-[0.8rem] font-normal">{errorMsg}</span>
        </div>
      )}
    </div>
  );
};
