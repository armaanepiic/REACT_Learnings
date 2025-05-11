import Counter from "./components/Counter";
import InputField from "./components/InputField";
import Text from "./components/Text";
import SetBg from "./components/SetBg";
import Login from "./components/Login";
import Theme from "./components/Theme";

export default function App() {
  return (
    <div>
      <h1 className="heading">useState</h1>
      <div>
        {/* <Theme /> */}
        <Counter />
        <InputField />
        <Text />
        <SetBg />
        <Login />
      </div>
    </div>
  );
}
