import { useState } from "react";
import "./Counter.css"

export default function Counter() {

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    console.log("icrement");
    setCount(count + 1);
  };

  return (
    <div className="counter">
      <div>
        <h1 className="heading">Count: {count}</h1>
      </div>
      <div className="btn">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}
// useState returns(current value, changeValue Function)

// const handleclick = () => {
//   console.log("Clicked");
//   // increment count
//   // reload/re-render
//   setCount((c)=> c+1);
// };
