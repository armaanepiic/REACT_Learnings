import { useReducer } from "react";
import "../App.css";

const initialState = {
  name: "",
  email: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "change":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "reset":
      return {
        initialState,
      };
    default:
      return state;
  }
};

export default function FormInput() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="main-form">
      <div className="form">
        <input
          type="name"
          placeholder="Enter name"
          value={state.name}
          onChange={(e) =>
            dispatch({ type: "change", field: "name", value: e.target.value })
          }
        />
        <input
          type="email"
          placeholder="Enter name"
          value={state.email}
          onChange={(e) =>
            dispatch({ type: "change", field: "email", value: e.target.value })
          }
        />
      </div>
      <div className="result">
        <p>Name: {state.name}</p>
        <p>Email: {state.email}</p>
      </div>
      <button className="btn" onClick={() => dispatch({ type: "reset" })}>
        Clear
      </button>
    </div>
  );
}

// import React, { useReducer } from "react";

// const initialState = {
//   name: "",
//   email: "",
// };

// function formReducer(state, action) {
//   switch (action.type) {
//     case "change":
//       return {
//         ...state,
//         [action.field]: action.value,
//       };
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// }

// export default function FormInput() {
//   const [state, dispatch] = useReducer(formReducer, initialState);

//   return (
//     <div>
//       <input
//         name="name"
//         placeholder="Name"
//         value={state.name}
//         onChange={(e) =>
//           dispatch({ type: "change", field: "name", value: e.target.value })
//         }
//       />
//       <input
//         name="email"
//         placeholder="Email"
//         value={state.email}
//         onChange={(e) =>
//           dispatch({ type: "change", field: "email", value: e.target.value })
//         }
//       />
//       <p>Name: {state.name}</p>
//       <p>Email: {state.email}</p>
//       <button onClick={() => dispatch({ type: "reset" })}>Clear</button>
//     </div>
//   );
// }
