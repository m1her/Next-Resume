import React from "react";

export const LinkItem = ({
  clickHandler,
  selected,
  id,
  text,
  number,
}: {
  clickHandler: (numberId: number) => void;
  selected: number;
  id: string;
  text: string;
  number: number;
}) => {
  return (
    <div
      id={id.toString()}
      onClick={() => clickHandler(number)}
      className={`flex items-center gap-x-2 cursor-pointer opacity-100 hover:opacity-95 transition-all duration-200 ${
        selected == number ? "text-secondaryColor" : "text-white"
      }`}
    >
      <div
        className={`md:flex hidden w-7 aspect-square text-sm font-bold items-center justify-center rounded-full border-2 transition-all duration-200  ${
          selected == number ? "border-secondaryColor" : "border-white "
        }`}
      >
        {number}
      </div>
      <div className="md:block hidden">{text}</div>
      <div
        onClick={() => clickHandler(number)}
        className={`md:hidden flex w-10 h-1.5 rounded-full transition-all duration-200 ${
          selected == number ? "bg-secondaryColor" : "bg-white "
        }`}
      ></div>
    </div>
  );
};
