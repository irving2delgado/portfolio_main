import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold mb-4">My Portfolio</h2>
      <ul>
        <li className="mb-2">Home</li>
        <li className="mb-2">Projects</li>
        <li className="mb-2">About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Sidebar;
