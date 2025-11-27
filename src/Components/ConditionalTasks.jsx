import { useState } from "react";

function ConditionalTasks() {
  const [tasks, setTasks] = useState([]);

  return (
    <div>
      <h2>Conditional Rendering</h2>

      {tasks.length === 0 ? (
        <p>List is empty</p>
      ) : (
        <ul>
          {tasks.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ConditionalTasks;