import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import AddTaskPage from "./pages/AddTaskPage";
import TaskListPage from "./pages/TaskListPage";
import EditTaskForm from "./pages/EditTaskForm";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => setTasks([...tasks, task]);

  const markDone = (id) => {
    const updated = tasks.map((task) =>
      task.id === id ? { ...task, completed: true } : task
    );
    setTasks(updated);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTask = (updatedTask) => {
  setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
};


  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
            <Route
              path="/add-task"
              element={isLoggedIn ? <AddTaskPage addTask={addTask} /> : <Navigate to="/login" />}
            />
            <Route
              path="/tasks"
              element={
                isLoggedIn ? (
                  <TaskListPage tasks={tasks} markDone={markDone} deleteTask={deleteTask} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            {/* ✅ New Edit Page */}
           <Route
  path="/edit-task/:id"
  element={isLoggedIn ? <EditTaskForm tasks={tasks} updateTask={updateTask} /> : <Navigate to="/login" />}
/>

            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
