import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-4 text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} Task Manager | Designed by Tanushri
      </p>
    </footer>
  );
}

export default Footer;
