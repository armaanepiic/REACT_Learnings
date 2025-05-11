import { useState } from "react";
import "../App.css";
export default function SetBg() {
  const [color, setColor] = useState("white");
  const handleChangeColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${r},${g},${b})`;
    setColor(randomColor);
  };
  return (
    <div className="component" style={{ background: color, height: "100px" }}>
      <button onClick={handleChangeColor}>Change Color</button>
    </div>
  );
}
