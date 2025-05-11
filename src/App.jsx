import Counter from "./components/Counter";
import ToggleButton from "./components/ToggleButton";
import Theme from "./components/Theme";
import FormInput from "./components/FormInput";
export default function App() {
  
  return (
    <div>
      <h1>useReducer Hook</h1>
      <Theme />
      <Counter />
      <ToggleButton />
      <FormInput />
    </div>
  );
}
