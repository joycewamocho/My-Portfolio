import { ArrowUpRight, Github, Globe } from "lucide-react";
import { Button } from "../UI/button";

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform with user authentication, product management, cart functionality, and payment processing.",
      image: "/api/placeholder/600/400",
      tags: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website with dark mode, animations, and contact form functionality.",
      image: "/api/placeholder/600/400",
      tags: ["Next.js", "TailwindCSS", "Framer Motion", "React"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team management, and deadline tracking.",
      image: "/api/placeholder/600/400",
      tags: ["React", "Firebase", "TailwindCSS", "Redux"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Weather Forecast App",
      description: "A weather forecast application that provides real-time weather data and forecasts for locations worldwide.",
      image: "/api/placeholder/600/400",
      tags: ["React", "OpenWeather API", "Chart.js", "TailwindCSS"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-indigo-950 via-purple-900 to-violet-950 text-white py-20">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header with decorative elements */}
        <div className="relative mb-16 text-center">
          {/* Decorative circles */}
          <div className="absolute w-40 h-40 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 blur-xl -top-10 -right-10 animate-pulse"></div>
          <div className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-indigo-500/10 to-blue-500/10 blur-xl -bottom-5 -left-10 animate-pulse"></div>
          
          <div className="inline-block px-6 py-2 bg-indigo-500/20 rounded-full text-indigo-100 font-medium mb-4">
            My Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="text-pink-400">Projects</span></h2>
          <div className="h-1 w-40 bg-gradient-to-r from-indigo-400 to-pink-500 mx-auto mb-6"></div>
          <p className="text-lg text-indigo-100 max-w-2xl mx-auto">
            A selection of projects I've worked on, showcasing my skills and expertise in web development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-indigo-900/30 backdrop-blur-sm border border-indigo-700/30 rounded-xl overflow-hidden shadow-xl hover:shadow-pink-500/10 transition-all hover:-translate-y-1"
            >
              {/* Project Image */}
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 to-transparent opacity-80"></div>
                
                {/* Project Links */}
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <a 
                    href={project.liveUrl} 
                    className="w-10 h-10 rounded-full bg-indigo-700/80 hover:bg-pink-500 flex items-center justify-center shadow-lg transition-colors"
                    aria-label="Live Demo"
                  >
                    <Globe className="w-5 h-5 text-white" />
                  </a>
                  <a 
                    href={project.githubUrl} 
                    className="w-10 h-10 rounded-full bg-indigo-700/80 hover:bg-pink-500 flex items-center justify-center shadow-lg transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <Github className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-pink-400">{project.title}</h3>
                <p className="text-indigo-100 mb-4">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="text-xs font-medium px-3 py-1 rounded-full bg-indigo-800/50 border border-indigo-700/50 text-indigo-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  className="border-indigo-400 text-indigo-100 hover:bg-indigo-700/30 transition-all flex items-center gap-2"
                >
                  View Details <ArrowUpRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white px-8 py-3 rounded-lg font-bold shadow-lg hover:shadow-pink-500/30 transition-all">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}