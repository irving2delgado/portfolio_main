// import React from 'react';
// import { Link } from 'react-router-dom';

// const Sidebar = () => {
//   return (
//     <div className="w-64 bg-gray-800 text-white p-6">
//       <h2 className="text-2xl font-bold mb-6">My Portfolio</h2>
//       <ul>
//         <li className="mb-4">
//           <Link to="/home" className="hover:text-gray-400">Home</Link>
//         </li>
//         <li className="mb-4">
//           <Link to="/projects" className="hover:text-gray-400">Projects</Link>
//         </li>
//         <li className="mb-4">
//           <Link to="/about" className="hover:text-gray-400">About</Link>
//         </li>
//         <li>
//           <Link to="/contact" className="hover:text-gray-400">Contact</Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;

// Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white p-6">
      <h2 className="text-2xl font-bold mb-6">My Portfolio</h2>
      <ul>
        <li className="mb-4">
          <NavLink to="/home" activeClassName="text-gray-400">Home</NavLink>
        </li>
        <li className="mb-4">
          <NavLink to="/projects" activeClassName="text-gray-400">Projects</NavLink>
        </li>
        <li className="mb-4">
          <NavLink to="/about" activeClassName="text-gray-400">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="text-gray-400">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
