import Profile from "./components/Profile";
import './App.css'
const person = {
  name: 'Arman',
  theme: {
    background: 'black',
    color: 'white',
  }
}
export default function App() {
  return (
    <div className="portfolio">
      <h1>{person.name}'s Portfolio</h1>
      <Profile/>
      <h3>Interests:</h3>
      <ul>
        <li>Shopping</li>
        <li>Reading</li>
        <li>Travelling</li>
      </ul>
    </div>
  );
}

















// import Profile from "./components/Profile";
// import './App.css'

// export default function App() {
//   return (
//     <section>
//       <h1>Hill Pictures</h1>
//       <Profile />
//       <Profile />
//       <Profile />
//     </section>
//   );
// }
