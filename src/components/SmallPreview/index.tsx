import React from "react";

export const SmallPreview = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex-shrink-0 relative w-[218px] h-[320px] overflow-hidden border border-gray-600 hover:outline outline-blue-500 cursor-pointer">
      <div className="scale-[0.27] origin-top-left absolute w-[800px]">
        {children}
      </div>
    </div>
  );
};
