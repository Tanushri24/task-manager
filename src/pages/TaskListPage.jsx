import React from "react";
import TaskTable from "../components/TaskTable";

function TaskListPage({ tasks, markDone, deleteTask }) {
  return (
    <div className="flex flex-col items-center py-8 px-4">
      <TaskTable tasks={tasks} markDone={markDone} deleteTask={deleteTask} />
    </div>
  );
}

export default TaskListPage;
