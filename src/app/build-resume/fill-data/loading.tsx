import { Spinner } from "@/components/Spinner";
import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-16 h-16 aspect-square">
        <Spinner />
      </div>
    </div>
  );
};

export default Loading;
