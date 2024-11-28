import React, { useState } from "react";
import "./TaskManager.css";

const TaskManager = ({ tasks, setTasks }) => {
  const [newTask, setNewTask] = useState({
    name: "",
    startDate: "",
    endDate: "",
  });

  const handleAddTask = () => {
    if (!newTask.name || !newTask.startDate || !newTask.endDate) {
      alert("Please fill in all fields.");
      return;
    }

    setTasks([
      ...tasks,
      { id: Date.now(), ...newTask }, 
    ]);

    setNewTask({ name: "", startDate: "", endDate: "" }); 
  };

  return (
    <div className="task-manager">
      <h2>Task Manager</h2>
      <div className="task-inputs">
        <input
          type="text"
          placeholder="Task Name"
          value={newTask.name}
          onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
        />
        <input
          type="date"
          value={newTask.startDate}
          onChange={(e) =>
            setNewTask({ ...newTask, startDate: e.target.value })
          }
        />
        <input
          type="date"
          value={newTask.endDate}
          onChange={(e) => setNewTask({ ...newTask, endDate: e.target.value })}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
    </div>
  );
};

export default TaskManager;
