import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function TaskForm({ addTask }) {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName.trim()) return;

    const newTask = {
      id: Date.now(),
      name: taskName,
      description,
      completed: false,
    };

    addTask(newTask);
    setTaskName("");
    setDescription("");
    navigate("/tasks");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-sky-100 to-gray-200" style={{width:"800px"}}>
      <h1 className="text-4xl font-bold text-gray-900 mb-8 tracking-wide drop-shadow-md">
        Task Management
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100"
      >
        <h2 className="text-2xl font-semibold mb-6 text-gray-600 text-center">
          ADD TASK
        </h2>

        {/* Task Name Floating Label */}
        <div className="relative mb-6">
          <input
            type="text"
            id="taskName"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            placeholder=" "
            className="peer border border-gray-300 rounded-lg w-full p-3 text-gray-700 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-400 transition-all"
          />
          <label
            htmlFor="taskName"
            className="absolute left-3 top-3 text-gray-500 bg-white px-1 transition-all duration-200 
              peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-gray-400 
              peer-placeholder-shown:text-base 
              peer-focus:top-[-8px] peer-focus:text-sm peer-focus:text-gray-600"
          >
            Task Name
          </label>
        </div>

        {/* Description Floating Label */}
        <div className="relative mb-6">
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder=" "
            rows="4"
            className="peer border border-gray-300 rounded-lg w-full p-3 text-gray-700 resize-none focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-400 transition-all"
          />
          <label
            htmlFor="description"
            className="absolute left-3 top-3 text-gray-500 bg-white px-1 transition-all duration-200 
              peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-gray-400 
              peer-placeholder-shown:text-base 
              peer-focus:top-[-8px] peer-focus:text-sm peer-focus:text-gray-600"
          >
            Description
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-gray-500 to-gray-600 text-white py-3 rounded-lg font-semibold shadow-md hover:from-gray-600 hover:to-gray-700 transition-all duration-200"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
