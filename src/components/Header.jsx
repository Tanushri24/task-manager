import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gradient-to-r from-gray-600 to-gray-400 text-white shadow-md w-full">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-4 py-3">
        <h1 className="text-2xl font-bold tracking-wide">📝 Task Manager</h1>

        <nav>
          <ul className="flex space-x-6 text-sm font-medium">
            <li>
              <Link to="/add" className="hover:text-gray-200">
                Add Task
              </Link>
            </li>
            <li>
              <Link to="/tasks" className="hover:text-gray-200">
                View Tasks
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
