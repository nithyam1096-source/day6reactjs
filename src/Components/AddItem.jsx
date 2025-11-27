import { useState } from "react";

function AddItem() {
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    setTasks([...tasks, "New Task"]);
  };

  return (
    <div>
      <h2>Add Item to List</h2>
      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default AddItem;