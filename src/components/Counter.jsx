import { useReducer } from "react";
import '../App.css'
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
    default:
      return state;
  }
};
const styles = {
  backgroundColor: "#3EF4FA",
  margin: "0px",
  padding: "0px",

  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "30px",
};


export default function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h1>Simple Counter</h1>
      <div style={styles}>
        <h2>Count: {count}</h2>
        <button className="btn" onClick={() => dispatch({ type: "increment" })}>
          Increment
        </button>
        <button className="btn" onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </button>
        <button className="btn" onClick={() => dispatch({ type: "reset" })}>
          Reset
        </button>
      </div>
    </div>
  );
}
