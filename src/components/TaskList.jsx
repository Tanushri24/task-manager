import React from "react";

function TaskList({ tasks, markDone, deleteTask }) {
  return (
    <div className="w-full max-w-md">
      {tasks.length === 0 ? (
        <p className="text-gray-600 text-center">No tasks available.</p>
      ) : (
        tasks.map((task) => (
          <div
            key={task.id}
            className={`flex justify-between items-start bg-white p-4 rounded-lg shadow mb-3 ${
              task.completed ? "border-l-4 border-green-500" : "border-l-4 border-yellow-500"
            }`}
          >
            <div>
              <h3
                className={`font-semibold text-lg ${
                  task.completed ? "line-through text-gray-400" : ""
                }`}
              >
                {task.name}
              </h3>
              <p className="text-gray-600 text-sm">{task.description}</p>
            </div>
            <div className="flex flex-col gap-2">
              {!task.completed && (
                <button
                  onClick={() => markDone(task.id)}
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 text-sm"
                >
                  Mark Done
                </button>
              )}
              <button
                onClick={() => deleteTask(task.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default TaskList;
