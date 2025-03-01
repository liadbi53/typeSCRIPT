import { Task } from "../types/task";

interface TaskItemProps {
  task: Task;
  onToggleComplete: (id: string) => void;
}

export default function TaskItem({ task, onToggleComplete }: TaskItemProps) {
  return (
    <li className={`list-group-item d-flex justify-content-between align-items-center ${task.completed ? "bg-success text-white" : ""}`}>
      <span className={task.completed ? "text-decoration-line-through" : ""}>
        {task.title}
      </span>
      <button 
        onClick={() => onToggleComplete(task.id)}
        className={`btn ${task.completed ? "btn-secondary" : "btn-primary"}`}
      >
        {task.completed ? "↩️ ביטול" : "✅ הושלם"}
      </button>
    </li>
  );
}
