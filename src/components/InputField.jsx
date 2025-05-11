import { useState } from "react";
import "../App.css";
export default function InputField() {
  const [name, setName] = useState("");
  return (
    <div className="input">
      <input
        className="field"
        type="text"
        value={name}
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      />
      <p>My name is: {name || "Stranger"}!</p>
    </div>
  );
}
