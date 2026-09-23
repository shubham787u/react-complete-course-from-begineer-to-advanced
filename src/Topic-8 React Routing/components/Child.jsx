import React from "react";
import Subchild from "./Subchild";

const Child = () => {
  return (
    <div className="bg-blue-200 w-120 h-80 mx-auto mt-8 border-2 border-black rounded-xl p-6">
      <h2 className="text-2xl font-semibold tracking-wider">Child Component</h2>
      <Subchild />
    </div>
  );
};

export default Child;
