import React from "react";
import "./GanttChart.css";

const GanttChart = ({ tasks }) => {
  const calculateBarWidth = (startDate, endDate) => {
    const start = new Date(startDate).getTime();
    const end = new Date(endDate).getTime();
    const durationInDays = (end - start) / (1000 * 60 * 60 * 24);
    return durationInDays * 10; // Scale each day to 10px
  };

  return (
    <div className="gantt-chart">
      <h2>Gantt Chart</h2>
      <div className="chart-container">
        {tasks.map((task) => (
          <div className="task-row" key={task.id}>
            <span className="task-name">{task.name}</span>
            <div
              className="task-bar"
              style={{
                width: `${calculateBarWidth(task.startDate, task.endDate)}px`,
                backgroundColor: "#007bff",
              }}
            ></div>
            <div className="task-dates">
              <span>{task.startDate}</span> - <span>{task.endDate}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GanttChart;
