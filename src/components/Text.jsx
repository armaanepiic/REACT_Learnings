import { useState } from "react";
import "../App.css";
export default function Text() {
  const [isVisible, setIsVisible] = useState(true);
  const handleClick = () => {
    isVisible ? setIsVisible(false) : setIsVisible(true);
  };
  return (
    <div className="component text">
      {isVisible && <p>Hello!!!!</p>}
      <button onClick={handleClick}>{isVisible ? "Hide" : "Show"} text</button>
    </div>
  );
}
