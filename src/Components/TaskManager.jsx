import { useState } from "react";

export default function TaskManager() {
  const [tasks, setTasks] = useState([
    { text: "Wake Up", completed: false },
    { text: "Study React", completed: false },
    { text: "Gym Workout", completed: false },
  ]);

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  return (
    <div>
      <h2>Mini Project 2: Task Manager</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(index)}
            />
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}