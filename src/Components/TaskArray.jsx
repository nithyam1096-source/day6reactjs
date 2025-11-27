import { useState } from "react";

function TaskArray() {
  const [tasks, setTasks] = useState([]);

  return (
    <div>
      <h2>State with Arrays</h2>
      <ul>
        {tasks.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskArray;