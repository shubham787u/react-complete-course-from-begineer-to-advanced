import Parent from "../components/Parent";
import { ThemeContext } from "../context/ThemeContext";

const Contact = () => {
  const val = userContext(ThemeContext);
  return (
    <div className="flex flex-col justify-center items-center h-[calc(100vh-100px)] bg-purple-100">
      <h3 className="text-xl font-semibold tracking-wider ">
        Theme in Contact : {val.theme}
      </h3>
      <Parent />
    </div>
  );
};

export default Contact;
