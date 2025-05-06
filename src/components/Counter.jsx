import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0); // [current value, changeValue function]
  //   const handleIncrement = () => {
  //         // 1. increment count
  //         // 2. reload/ re-render
  //       setCount(count + 1); // setter function
  //     };
  //     const handleDecrement = () => {
  //       // 1. increment count
  //       // 2. reload/ re-render
  //       setCount(count - 1); // setter function
  //     };
  //     const reset = () => {
  //       // 1. increment count
  //       // 2. reload/ re-render
  //       setCount(0); // setter function
  //     };

  const [message, setMessage] = useState("Welcome to the class");
  return (
    <div>
      <h1>Counter: {count}</h1>
      <p>{message}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <br />
      <button onClick={() => setMessage("Welcome to the REACT class")}>
        Change Message
      </button>
    </div>
  );
}
