import { useReducer } from "react";

const initialState = {
  name: "",
  email: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "change":
      return {
        ...state,
        [action.field]: action.value
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
    <div>
      <input
        type="name"
        placeholder="Enter your name"
        value={state.name}
        onChange={(e) => {
          dispatch({ type: "change", field: "name", value: e.target.value });
        }}
      />
      <input
        type="email"
        placeholder="Enter email"
        value={state.email}
        onChange={(e) => {
          dispatch({ type: "change", field: "email", value: e.target.value });
        }}
      />
      <p>name: {state.name}</p>
      <p>email: {state.email}</p>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
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
