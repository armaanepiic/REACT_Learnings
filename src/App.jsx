import './App.css'

function Item({ name, isPacked }) {
  if (isPacked) {
    // return <li className="item">{name} ✅</li>;
    // if i dont want to show this message
    return null;
  }
  else
    return <li className="item">{name}</li>;
    
}

export default function App() {
  
  return (
    <section>
      <h1>Sally Rides Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}