
import "./App.css"
import Biodata from "./components/BioData";
function App() {

  return (
    <div className="App">
      <div className="biodata">
        <h1>Arman Hossain</h1>
        <div className="personal-info">
          <p>Age: 27</p>
          <p>Occupation: Web Developer</p>
          <p>Location: Chattogram, Bangladesh</p>
        </div>
        <div className="skills">
          <h3>My Skills</h3>
          <ul>
            <li>C++</li>
            <li>Javascript</li>
            <li>React</li>
          </ul>
        </div>
        <div className="interest">
          <h3>My Interest</h3>
          <ul>
            <li>Cycling</li>
            <li>Swimming</li>
            <li>Travelling</li>
          </ul>
        </div>
      </div>
      <hr />
      <Biodata />
    </div>
  );
}

export default App;
