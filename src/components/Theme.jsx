import React, { useState } from "react";
import "../App.css";
export default function Theme() {
  const [isDay, setIsDay] = useState(true);
  const toggleMode = () => {
    setIsDay(!isDay);
    };
    const styles = {
        backgroundColor: isDay ? '#fff' : '#1e1e1e',
        color: isDay ? '#000' : '#fff',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'all 0.5s ease'
    }
  return (
    <div style={styles}>
      <h1>{isDay ? "Day Mode" : "Night Mode"}</h1>
      <button onClick={toggleMode}>Switch to {isDay ? "Night" : "Day"}</button>
    </div>
  );
}
