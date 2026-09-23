import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Subchild = () => {
  const val = useContext(ThemeContext);
  console.log("Val in subchild:", val);

  return (
    <div className="bg-orange-300 w-80 h-50 rounded-lg mx-auto mt-6 text-center">
      <h3 className="text-xl font-semibold tracking-wider p-6">
        Subchild Component
      </h3>
      <h4 className="text-2xl font-semibold">Thema : {val.theme}</h4>
    </div>
  );
};

export default Subchild;
