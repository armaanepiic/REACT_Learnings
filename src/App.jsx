import Counter from "./components/Counter";


export default function App() {
  return (
    <div>
      <Counter/>
    </div>
  )
}






















// import MessyTernary from "./components/MessyTernary";

// export default function App() {
//   const people = [
//     {
//       id: 0,
//       name: "Creola Katherine Johnson",
//       profession: "mathematician",
//     },
//     {
//       id: 1,
//       name: "Mario José Molina-Pasquel Henríquez",
//       profession: "chemist",
//     },
//     {
//       id: 2,
//       name: "Mohammad Abdus Salam",
//       profession: "physicist",
//     },
//     {
//       id: 3,
//       name: "Percy Lavon Julian",
//       profession: "chemist",
//     },
//     {
//       id: 4,
//       name: "Subrahmanyan Chandrasekhar",
//       profession: "astrophysicist",
//     },
//   ];
//   const chemists = people.filter(people => people.profession === 'chemist');
//   return (
//     <div>
//       <ul>
//         {chemists.map((chemist) => (
//           <li key={chemist.id}>{chemist.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function Item({ name, isPacked }) {
//   return (
//     <li className="item">
//       {name} {isPacked && "✅"}
//     </li>
//   );
// }

// export default function App() {
//   return (
//     <section>
//       <h1>Sally Ride's Packing List</h1>
//       <ul>
//         <Item isPacked={true} name="Space suit" />
//         <Item isPacked={true} name="Helmet with a golden leaf" />
//         <Item isPacked={false} name="Photo of Tam" />
//       </ul>

//     </section>
//   );
// }

// const today = new Date();
// console.log(today);

// function formatDate(date) {
//   return new Intl.DateTimeFormat('en-US', { weekday : 'long' }).format(date);
// }

// export default function App() {
//   return <h1>To Do List for {formatDate(today)}</h1>;
// }

// const link = "https://images.unsplash.com/photo-1746307415334-8914cae06a28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8";

// const description = "currency";

// export default function App() {
//   return (
//     <>
//       <img src={link} alt={description} />
//     </>
//   );
// }

// const person = {
//   name: 'Arman',
//   theme: {
//     background: 'black',
//     color: 'white',
//   }
// }
// export default function App() {
//   return (
//     <div className="portfolio">
//       <h1>{person.name}'s Portfolio</h1>
//       <Profile/>
//       <h3>Interests:</h3>
//       <ul>
//         <li>Shopping</li>
//         <li>Reading</li>
//         <li>Travelling</li>
//       </ul>
//     </div>
//   );

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
