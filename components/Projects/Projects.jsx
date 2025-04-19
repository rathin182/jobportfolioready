// Projects.jsx
import React from 'react';
import { projects } from "../../src/Projectdetails";


// app/components/Projects.jsx


const Projects = () => {
  return (
    <div id='projects' className='w-full min-h-screen p-5'>
      <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={project.id} className="p-4 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
            {/* Image */}
            {project.image && (
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4" />
            )}

            {/* Title */}
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-3">{project.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, i) => (
                <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded-md text-gray-700">{tag}</span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f76161] font-medium hover:underline"
              >
                GitHub
              </a>
              {project.webapp && (
                <a
                  href={project.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 font-medium hover:underline"
                >
                  Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects

