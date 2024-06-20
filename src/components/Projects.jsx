import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('/api/projects')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the projects!', error);
      });
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(project => (
          <div key={project.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
            <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
            <p className="text-gray-700">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
