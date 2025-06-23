import { useEffect, useState } from "react";
import { createContext } from "react";

const ThemeContext = createContext();

function ThemeProvider({children}) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light"; 
  });

  function toggleTheme() {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  }

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]); 

  const value = { theme, toggleTheme };
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };
