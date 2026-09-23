import React from "react";
import Child from "./Child";

const Parent = () => {
  return (
    <div className="w-200 h-125 border-2 border-neutral-400 rounded-4xl p-4">
      <h1 className="text-3xl from-semibold tracking-wider">
        Parent Component
      </h1>
      <Child />
    </div>
  );
};

export default Parent;
