import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MainContainer = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch projects from the backend
    axios.get('/api/projects')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the projects!', error);
      });
  }, []);

  return (
    <div className="flex-1 p-8">
      <h1 className="text-2xl font-bold mb-6">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <div key={project.id} className="bg-white p-4 rounded shadow-md">
            <h2 className="text-xl font-bold">{project.name}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainContainer;
