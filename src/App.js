import React, { useState } from "react";
import TaskManager from "./components/TaskManager";
import GanttChart from "./components/GanttChart";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Gantt Chart</h1>
      </header>
      <TaskManager tasks={tasks} setTasks={setTasks} />
      <GanttChart tasks={tasks} />
    </div>
  );
};

export default App;
