import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Shop = () => {
  const val = useContext(ThemeContext);
  console.log("val in shop : ", val);

  return (
    <div>
      <h1>Shope Component</h1>
      <h3> Thema : {val.theme}</h3>
    </div>
  );
};

export default Shop;
