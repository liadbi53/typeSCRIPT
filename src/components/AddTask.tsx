import { useState } from "react";
import { Task } from "../types/task";

interface AddTaskProps {
  onAddTask: (task: Task) => void;
}

export default function AddTask({ onAddTask }: AddTaskProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTask = () => {
    if (!title.trim()) return;
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      description,
      completed: false,
    };
    onAddTask(newTask);
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="שם המשימה"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="תיאור (לא חובה)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleAddTask}>הוסף משימה</button>
    </div>
  );
}
