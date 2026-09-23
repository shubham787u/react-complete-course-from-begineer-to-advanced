import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Profile = () => {
  const val = useContext(ThemeContext);
  console.log("val in profile:", val);

  return <div>Profile</div>;
};

export default Profile;
