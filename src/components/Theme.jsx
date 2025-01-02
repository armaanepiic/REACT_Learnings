import { useState } from "react";

import './Theme.css'
export default function Theme() {
  
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleIsDarkMode = () =>{
    setIsDarkMode((prevMode) => !prevMode);
  }

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <h1>{isDarkMode ? 'Dark Mode' : 'White Mode'}</h1>
      <button onClick={handleIsDarkMode}>Switch to {isDarkMode ? 'Light' : 'Dark' } Mode</button>
    </div>
  );
}