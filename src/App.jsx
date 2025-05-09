import { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { initialTasks } from './data/initialTasks';
let nextId = 4;
export default function App() {

  const [tasks, setTasks] = useState(initialTasks);
  
  const handleChangeTask = (task) => {
    const changedTasks = tasks.map((t) => {
      if (t.id === task.id) {
        return {
          ...t,
          text: task.text,
          done: task.done,
        };
      } else {
        return t;
      }
    });
    setTasks(changedTasks);
  };
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((t) => t.id != taskId));
  };
  const handleAddTask = (text) => {
    setTasks([
      ...tasks,
      {
        id: nextId++,
        text: text,
        done: false,
      },
    ]);
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
