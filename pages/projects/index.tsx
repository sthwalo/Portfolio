//import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { projects } from '../../data/projects';

const Navigation = () => (
  <nav className="bg-gray-800 p-4">
    <div className="max-w-7xl mx-auto">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="text-white">Home</Link>
        </li>
        <li>
          <Link href="/projects" className="text-white">Cybersecurity</Link>
        </li>
        <li>
          <Link href="/projects" className="text-white">Software Engineering</Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </div>
  </nav>
);

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <Navigation />
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
         Cybersecurity
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.isArray(projects) && projects.length > 0 ? (
            projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                <Link href={`/projects/${project.id}`}>
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                      {project.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {Array.isArray(project.technologies) && project.technologies.length > 0 ? (
                        project.technologies.map((tech) => (
                          <span 
                            key={tech} 
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full text-gray-700 dark:text-gray-300"
                          >
                            {tech}
                          </span>
                        ))
                      ) : (
                        <span className="text-gray-500 dark:text-gray-400">No technologies listed</span>
                      )}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                      <span>View Project Details</span>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4 ml-2" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M14 5l7 7m0 0l-7 7m7-7H3" 
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-gray-500 dark:text-gray-400">No projects available.</p>
          )}
        </div>
      </div>
    </div>
  );
}