// src/context/ThemeContext.js
import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Get theme from local storage
  let selected_theme = localStorage.getItem("theme");
  selected_theme = (selected_theme==null)? "light" : selected_theme;

  //console.log("selected_theme : ", selected_theme);
  const [theme, setTheme] = useState(selected_theme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// custom hook
export const useTheme = () => useContext(ThemeContext);
