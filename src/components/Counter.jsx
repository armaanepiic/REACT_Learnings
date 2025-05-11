import { useState } from "react";
import '../App.css'

export default function Counter() {
  const [count, setCount] = useState(0);
  function handleIncrement() {
    setCount((c) => c + 1);
    }
    function handleDecrement() {
      setCount((c) => c - 1);
    }
    function handleReset() {
      setCount(0);
    }
  return (
    <div>
      <div className="component">
        <p className="heading">
          <strong>Counter App :</strong>
        </p>
        <p className="count-value">{count}</p>
        <button onClick={handleIncrement}>+1</button>
        <button onClick={handleDecrement}>-1</button>
        <button onClick={handleReset}>reset </button>
      </div>
    </div>
  );
}
