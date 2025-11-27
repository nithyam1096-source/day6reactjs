import { useState } from "react";

function RemoveItem() {
  const [tasks, setTasks] = useState(["Task 1", "Task 2"]);

  const removeLast = () => {
    setTasks(tasks.slice(0, -1));
  };

  return (
    <div>
      <h2>Remove Item from List</h2>
      <button onClick={removeLast}>Remove Last</button>

      <ul>
        {tasks.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default RemoveItem;
