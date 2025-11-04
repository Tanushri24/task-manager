import React from "react";
import TaskForm from "../components/TaskForm";

function AddTaskPage({ addTask }) {
  return (
    <div className="flex flex-col items-center py-8 px-4">
      <TaskForm addTask={addTask} />
    </div>
  );
}

export default AddTaskPage;
