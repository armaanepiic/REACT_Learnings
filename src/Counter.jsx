import { useState } from "react";

export default function Counter() {
    const [count] = useState(0);
    const handleClick = () => {
        console.log("I am clicked");
    }
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={handleClick}>Increment</button>
    </div>
  );
}
