import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { projects } from '../../data/projects';

export default function ProjectDetail() {
  const router = useRouter();
  const { id } = router.query;
  const project = projects.find(p => p.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-2xl text-red-600">Project not found</h1>
          <Link href="/#projects" className="text-blue-500 hover:text-blue-600">
            Return to projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
      <div className="max-w-4xl mx-auto px-4">
        <Link 
          href="/#projects"
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Back to Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {project.title}
          </h1>

          <div className="prose dark:prose-invert max-w-none">
            {/* Project Overview */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Project Overview
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {project.description}
              </p>
              {project.detailedDescription && (
                <div className="mt-4">
                  {project.detailedDescription.map((paragraph, index) => (
                    <p key={index} className="text-gray-600 dark:text-gray-400 mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}
            </section>

            {/* Skills & Technologies */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Skills & Technologies
              </h2>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              {project.skillDetails && (
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                  {project.skillDetails.map((detail, index) => (
                    <li key={index} className="mb-2">{detail}</li>
                  ))}
                </ul>
              )}
            </section>

            {/* Tools & Methodologies */}
            {project.tools && (
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Tools & Methodologies
                </h2>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                {project.toolDetails && (
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                    {project.toolDetails.map((detail, index) => (
                      <li key={index} className="mb-2">{detail}</li>
                    ))}
                  </ul>
                )}
              </section>
            )}

            {/* Process & Methodology */}
            {project.process && (
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Process & Methodology
                </h2>
                <ol className="list-decimal list-inside space-y-4">
                  {project.process.map((step, index) => (
                    <li key={index} className="text-gray-600 dark:text-gray-400">
                      <span className="font-medium">{step.title}: </span>
                      {step.description}
                    </li>
                  ))}
                </ol>
              </section>
            )}

            {/* Key Outcomes & Deliverables */}
            {project.outcomes && (
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Key Outcomes & Deliverables
                </h2>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-4">
                  {project.outcomes.map((outcome, index) => (
                    <li key={index}>{outcome}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* Challenges & Solutions */}
            {project.challenges && (
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Challenges & Solutions
                </h2>
                <div className="space-y-6">
                  {project.challenges.map((challenge, index) => (
                    <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Challenge {index + 1}: {challenge.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {challenge.description}
                      </p>
                      <div>
                        <span className="font-medium text-gray-900 dark:text-white">Solution: </span>
                        <span className="text-gray-600 dark:text-gray-400">{challenge.solution}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Documentation & Resources */}
            {(project.documentation || project.resources) && (
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Documentation & Resources
                </h2>
                {project.documentation && (
                  <div className="mb-6">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">
                      Documentation
                    </h3>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                      {project.documentation.map((doc, index) => (
                        <li key={index}>
                          <a
                            href={doc.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-600"
                          >
                            {doc.title}
                          </a>
                          {doc.description && (
                            <span className="ml-2 text-gray-500">- {doc.description}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {project.resources && (
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">
                      Additional Resources
                    </h3>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                      {project.resources.map((resource, index) => (
                        <li key={index}>
                          <a
                            href={resource.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-600"
                          >
                            {resource.title}
                          </a>
                          {resource.description && (
                            <span className="ml-2 text-gray-500">- {resource.description}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
