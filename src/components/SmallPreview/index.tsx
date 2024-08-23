import React from "react";

export const SmallPreview = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
 
      <div className="w-1/2 border border-textColor/50">{children}</div>

  );
};
