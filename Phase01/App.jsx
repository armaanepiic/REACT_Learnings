import "./App.css"
import Biodata from "./components/BioData";

function App() {

  return (
    <div className="App">
      <Biodata
        name="Arman"
        age={27}
        occupation="Software Engineer"
        location="Oxigen, chattogram, Bangladesh"
        mobile= "01874015451"
        skills={["React", "C++", "Javascript"]}
        interests={["Playing Games", "Travelling", "Swimming"]}
      />
      <hr />
      <Biodata
        name="Nusrat"
        age={25}
        occupation="UI/UX Designer"
        location= "Sitakund, Chattogram, Bangladesh"
        skills={["Canva", "Figma", "Adobe"]}
        interests={["Reading", "Watching movie", "Travelling"]}
      />
    </div>
  );
}

export default App;
