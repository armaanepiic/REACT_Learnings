import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

export default function App() {
  return (
    <div>
      <h1>Simple Todo App</h1>
      <AddTask />
      <TaskList />
    </div>
  );
}
