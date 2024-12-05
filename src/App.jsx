import "./App.css";

export default function App() {
  const people = [
    {
      id: 0,
      name: "Creola Katherine Johnson",
      profession: "mathematician",
    },
    {
      id: 1,
      name: "Mario José Molina-Pasquel Henríquez",
      profession: "chemist",
    },
    {
      id: 2,
      name: "Mohammad Abdus Salam",
      profession: "physicist",
    },
    {
      id: 3,
      name: "Percy Lavon Julian",
      profession: "chemist",
    },
    {
      id: 4,
      name: "Subrahmanyan Chandrasekhar",
      profession: "astrophysicist",
    },
  ];
  const chemists = people.filter((people) => people.profession === 'chemist');
  return (
    <ul>
      {chemists.map((chemist) => (
        <li key={chemist.id}>{chemist.name}</li>
      ))}
    </ul>
  );
}
