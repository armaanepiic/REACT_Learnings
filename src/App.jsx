import { useReducer } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { initialTasks } from './data/initialTasks';
import taskReducer from "./Reducers/taskReducer";
let nextId = 4;
export default function App() {

  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);
  
  const handleChangeTask = (task) => {
    dispatch({
      type: 'changed',
      task
    })
  };
  const handleDeleteTask = (taskId) => {
    dispatch({
      type: 'deleted',
      id: taskId
    })
  };
  const handleAddTask = (text) => {
    dispatch({
      type: 'added',
      text: text,
      id: nextId++
    });
  };

  return (
    <div>
      <h1>Simple Todo App</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks = {tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}
