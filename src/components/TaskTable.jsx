import React from "react";

function TaskTable({ tasks, markDone, deleteTask }) {
  return (
    <div className="w-full max-w-3xl bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">All Tasks</h2>

      {tasks.length === 0 ? (
        <p className="text-gray-500 text-center">No tasks available.</p>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-100 text-left">
              <th className="p-2 border">Task Name</th>
              <th className="p-2 border">Description</th>
              <th className="p-2 border text-center">Status</th>
              <th className="p-2 border text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id} className="border-t hover:bg-gray-50">
                <td className="p-2 border">{task.name}</td>
                <td className="p-2 border">{task.description}</td>
                <td className="p-2 border text-center">
                  {task.completed ? (
                    <span className="text-green-600 font-semibold">Done</span>
                  ) : (
                    <span className="text-yellow-600 font-semibold">Pending</span>
                  )}
                </td>
                <td className="p-2 border text-center space-x-2">
                  {!task.completed && (
                    <button
                      onClick={() => markDone(task.id)}
                      className="bg-green-500 text-white px-2 py-1 rounded text-sm hover:bg-green-600"
                    >
                      Mark Done
                    </button>
                  )}
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded text-sm hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TaskTable;
