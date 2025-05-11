import { useState } from "react";
import ThemeToggleButton from "./components/ThemeToggleButton";
export default function App() {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => {
    setIsDark(!isDark);
  }
  const appStyles = {
    margin: '0px',
    paddin: '0px',
    backgroundColor: isDark ? "#1e1e1e" : "#fff",
    color: isDark ? '#fff' : '#000',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    transition: '0.5s ease'
  }
  return (
    <div style={appStyles}>
      <h1>{isDark ? "Dark Mode" : "Light Mode"}</h1>
      <ThemeToggleButton isDark={isDark} toggleTheme={toggleTheme} />
    </div>
  );
}
