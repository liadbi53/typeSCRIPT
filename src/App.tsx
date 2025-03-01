import { useState } from "react";
import { Task } from "./types/task";
import AddTask from "./components/AddTask";
import QuoteBox from "./components/QuoteBox";
import ClockBox from "./components/ClockBox";
import TaskItem from "./components/TaskItem";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const toggleTaskCompletion = (id: string) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      <div className="container p-4 bg-light rounded shadow text-center" style={{ maxWidth: "500px" }}>
        <h1 className="text-primary mb-4">📌 רשימת משימות</h1>

        <div className="mb-3">
          <ClockBox />
        </div>
        
        <div className="mb-3">
          <QuoteBox />
        </div>

        <div className="mb-3">
          <AddTask onAddTask={addTask} />
        </div>

        <ul className="list-group">
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} onToggleComplete={toggleTaskCompletion} />
          ))}
        </ul>
      </div>
    </div>
  );
}
