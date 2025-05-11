import "../App.css";
import { useState } from "react";
import ThemeToggleButton from "./ThemeToggleButton";

export default function Theme() {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  const appStyles = {
    margin: "0px",
    padding: "0px",
    backgroundColor: isDark ? "#1e1e1e" : "#fff",
    color: isDark ? "#fff" : "#000",
    minHeight: "30vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    transition: "0.5s ease",
  };
  return (
    <div style={appStyles} className="theme">
      <h1>Theme Toggler</h1>
      <h1>{isDark ? "Dark Mode" : "Light Mode"}</h1>
      <ThemeToggleButton isDark={isDark} toggleTheme={toggleTheme} />
    </div>
  );
}
