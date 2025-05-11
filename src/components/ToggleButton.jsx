import { useReducer } from "react"
const reducer = (state,action) => {
    if (action.type == true) return !state;
    return !state;
}
export default function ToggleButton() {
    const [isOn, dispatch] = useReducer(reducer, false)
  return (
      <div>
          <button onClick={() => dispatch({ type: !isOn })}>{isOn ? 'OFF' : 'ON'}</button>
    </div>
  )
}
