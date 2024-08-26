import React from "react";

export const TextInput = () => {
  return (
    <div className="font-urbanist w-full">
      <label className="text-sm font-medium">Full Name</label>
      <input className="w-full border border-gray-500 rounded px-4 py-2 focus:outline-primaryColor text-textColor" />
    </div>
  );
};
