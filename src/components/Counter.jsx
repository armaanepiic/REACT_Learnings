import { useState } from "react";

export default function Counter() {

  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Welcome to the class");
  
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <p>{message}</p>
      <button onClick={()=> setMessage("Welcome to the REACT class")}>Change Message</button>
    </>
  );
}









// import { useState } from "react";
// import { useReducer } from "react";
// import "./Counter.css";

// const initialState = 0;

// function reducer(state, action) {
//   switch (action.type) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     case "reset":
//       return initialState;
//     default:
//       throw new Error("Unknown action type");
//   }
// }

// export default function App() {
//   const [count, dispatch] = useReducer(reducer, initialState);
//   return (
//     <div className="counter">
//       <div>
//         <h1 className="heading">Count:{count}</h1>
//       </div>
//       <div className="btn">
//         <button onClick={() => dispatch({ type: "increment" })}>
//           Increment
//         </button>
//         <button onClick={() => dispatch({ type: "decrement" })}>
//           Decrement
//         </button>
//         <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
//       </div>
//     </div>
//   );
// }

// using useState()

// export default function Counter() {

//   const [count, setCount] = useState(0);

//   const handleIncrement = () => {
//     console.log("icrement");
//     setCount(count + 1);
//   };

//   return (
//     <div className="counter">
//       <div>
//         <h1 className="heading">Count: {count}</h1>
//       </div>
//       <div className="btn">
//         <button onClick={handleIncrement}>Increment</button>
//         <button onClick={() => setCount(count - 1)}>Decrement</button>
//         <button onClick={() => setCount(0)}>Reset</button>
//       </div>
//     </div>
//   );
// }
// useState returns(current value, changeValue Function)

// const handleclick = () => {
//   console.log("Clicked");
//   // increment count
//   // reload/re-render
//   setCount((c)=> c+1);
// };
