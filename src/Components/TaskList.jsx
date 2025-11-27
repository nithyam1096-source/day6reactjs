import { useState } from "react";

function TaskList() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTaskList([...taskList, task]);
      setTask("");
    }
  };

  const removeLastTask = () => {
    setTaskList(taskList.slice(0, -1));
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>Task List</h2>
      <input
        type="text"
        placeholder="Enter Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <button onClick={removeLastTask}>Remove Last Task</button>

      <ul>
        {taskList.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;