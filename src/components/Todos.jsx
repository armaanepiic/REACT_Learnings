import { useState } from "react";
import { moretasks, tasks } from "../data/tasks";
export default function Todos() {
  const [todos, setTodos] = useState([]);

  const handleEditTodo = (id) => {
    
    const updatedTodos = todos.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          title: task.title + ' Hello'
        }
      }
      return task;
    });
    setTodos(updatedTodos);
  };

  const handleTodo = () => {
    setTodos(tasks);
  };
  const handleMoreTodo = () => {
    const moreTodos = [...todos, ...moretasks];
    setTodos(moreTodos);
  }
  return (
    <>
      <h1>Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo?.title} -{" "}
            <button onClick={() => handleEditTodo(todo.id)}>Edit</button>
          </li>
        ))}
      </ul>
      <button onClick={handleTodo}>Load...</button>
      <button onClick={handleMoreTodo}>Load More...</button>
    </>
  );
}



// import { useState } from "react";
// import { tasks } from "../data/tasks";

// export default function Todos() {
//     const [todos, setTodos] = useState([]);
//     const handleTodo = () => {
//         setTodos(tasks);
//     }
//     return (
//       <div>
//         <h1>Todos</h1>
//         <ul>
//           {todos.map((todo) => (
//             <li key={todo.id}>{todo.title}</li>
//           ))}
//         </ul>
//         <div>
//           <button onClick={handleTodo}>Load...</button>
//         </div>
//       </div>
//     );
// }