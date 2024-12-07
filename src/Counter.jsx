
import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        // setCount(count + 1);
        setCount((cnt) => cnt + 2);
    }
    // const changeMessage = () => {
    //     setMessage("Welcome to the React class.");
    // }
    // const [message, setMessage] = useState("welcome to the class.")
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleClick}>Increment</button>
            {/* <p>{message}</p>
            <button onClick={changeMessage}>Chnage message</button> */}
        </div>
    );
};

export default Counter;

