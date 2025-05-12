"use client";

export default function Projects({ projects }) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-950/50 via-purple-900/30 to-violet-950/50 text-white max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white/10 backdrop-blur-sm border border-indigo-800/30 hover:border-pink-400 dark:bg-gray-800/50 hover:bg-indigo-900/20"
          >
            <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden group">
              <img
                src={project.image || '/placeholder.jpg'}
                alt={project.title}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-pink-300 hover:text-pink-400 transition-colors line-clamp-1">
                {project.title}
              </h3>
              <p className="mb-4 text-sm sm:text-base text-indigo-100 dark:text-gray-300 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs sm:text-sm px-2 py-1 rounded-full bg-gradient-to-r from-pink-500/20 to-indigo-500/20 text-pink-300 hover:bg-pink-500/30 dark:text-indigo-200 dark:hover:bg-indigo-500/30 font-medium transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex justify-start space-x-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View live demo of ${project.title}`}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 bg-pink-500 hover:bg-pink-600 transition-colors text-white rounded-lg text-xs sm:text-sm font-semibold shadow-md hover:shadow-pink-500/50"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View GitHub repository for ${project.title}`}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 bg-indigo-600 hover:bg-indigo-700 transition-colors text-white rounded-lg text-xs sm:text-sm font-semibold shadow-md hover:shadow-indigo-500/50"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}