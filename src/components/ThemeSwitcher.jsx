import { useTheme } from "../context/ThemeContext.jsx";
import "../styles/theme-switcher.css";

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="theme-switcher-btn">
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}

export default ThemeSwitcher;
