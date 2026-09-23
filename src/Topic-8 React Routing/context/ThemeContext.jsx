import { createContext } from "react";

//! step -1 Create a context or store
export const ThemeContext = createContext();

//! step -2 Create a Provider
export const ThemeProvider = ({ children }) => {
  const mode = { theme: "light" };
  return <ThemeContext.Provider value={mode}>{children}</ThemeContext.Provider>;
};
