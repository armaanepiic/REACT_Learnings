import './App.css'
import BioData from './components/BioData';
function App() {
  console.log("I am running");

  return (
    <div className="app">
      <BioData
        name="Arman"
        age={28}
        occupation="Software Developer"
        skills={["React", "NextJS", "NodeJS"]}
        interests={["Cycling", "Swimming", "Travelling"]}
      />
      <hr />
      <BioData
        name="Nusrat"
        age={26}
        occupation="UI UX Designer"
        contact="+8801874015451"
        skills={["Figma", "Canva", "Adobe"]}
        interests={["Shopping", "Reading", "Travelling"]}
      />
    </div>
  );
}

export default App
