import './App.css'
import MessyTernary from './components/MessyTernary';

function Item({ name, isPacked }) {
  // const isCheckMark = isPacked ? "✅" : null;
  return (
    // <li className='item'>{name} {isCheckMark} </li>
    <li className='item'> {name} {isPacked && '✅'} </li>
  )
  /*
  if (isPacked) {
    // return <li className="item">{name} ✅</li>;
    // if i dont want to show this message
    return null; 
  }
  else
    return <li className="item">{name}</li>;
    */
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
      <MessyTernary user={false} isAdmin={false} isGuest={true} />
    </section>
  );
}

//  another jsx file MessyTernary

export default function MessyTernary({user, isAdmin, isGuest}) {
    const message = user ? (isAdmin ? "Admin" : "Guest") : null;
    return (
        <div>
            <h1> Hello {message} </h1>
        </div>
    )
}
