import { useReducer } from "react";
import "../App.css";

const reducer = (state, action) => {
  if (action.type == true) return !state;
  return !state;
};

const styles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#D5C29A",
  padding: "10px",
};
export default function ToggleButton() {
  const [isOn, dispatch] = useReducer(reducer, false);
  return (
    <div style={styles}>
      <h1>Switch Toggler</h1>
      <button className="btn" onClick={() => dispatch({ type: !isOn })}>
        {isOn ? "OFF" : "ON"}
      </button>
    </div>
  );
}
