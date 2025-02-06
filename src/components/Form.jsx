import { useState } from "react";
import "./Form.css";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (event) => {
    console.log(event);
    const input = event.target.value;
    if (input.length <= 20) {
      setName(input);
    }
  };
  const handleEmailChange = (event) => {
    const input = event.target.value;
    setEmail(input);
  };
  return (
    <div className="form">
      <h1>Reach form input</h1>
      <form>
        <div className="input">
          <label>
            Name:{" "}
            <input
              className="large-text-input"
              type="text"
              value={name}
              onChange={handleNameChange}
            />
          </label>
          <label>
            Email:{" "}
            <input
              className="large-text-input"
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
          </label>
        </div>
      </form>
      <div className="preview">
        <h1>Preview</h1>
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
      </div>
    </div>
  );
}
