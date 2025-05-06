import { Code } from "lucide-react";
import { useState } from "react";

const skillCategories = [
  {
    name: "Programming Languages",
    skills: [
      { name: "JavaScript", proficiency: 90 },
      { name: "Python", proficiency: 89 },
      { name: "C#", proficiency: 68 },
      { name: "SQL", proficiency: 88 },
      { name: "TypeScript", proficiency: 82 }
    ]
  },
  {
    name: "Frontend",
    skills: [
      { name: "React", proficiency: 90 },
      { name: "HTML", proficiency: 95 },
      { name: "CSS", proficiency: 96 },
      { name: "Tailwind CSS", proficiency: 92 },
      { name: "Responsive UI Design", proficiency: 88 }
    ]
  },
  {
    name: "Backend",
    skills: [
      { name: "Flask", proficiency: 85 },
      { name: "SQLAlchemy", proficiency: 80 },
      { name: "Alembic", proficiency: 78 },
      { name: "Express", proficiency: 75 },
      { name: "Node.js", proficiency: 85 }
    ]
  },
  {
    name: "Database Management",
    skills: [
      { name: "MongoDB", proficiency: 85 },
      { name: "PostgreSQL", proficiency: 87 },
      { name: "SQLite", proficiency: 93 },
      { name: "SQL", proficiency: 90 }
    ]
  },
  {
    name: "DevOps & Tools",
    skills: [
      { name: "Docker", proficiency: 82 },
      { name: "GitHub", proficiency: 90 },
      { name: "GitHub Actions", proficiency: 85 },
      { name: "Git", proficiency: 92 }
    ]
  },
  {
    name: "Soft Skills",
    skills: [
      { name: "Communication", proficiency: 95 },
      { name: "Problem Solving", proficiency: 92 },
      { name: "Team Collaboration", proficiency: 90 },
      { name: "Adaptability", proficiency: 92 }
    ]
  }
];

export default function Skills() {
  return (
    <section className="bg-gradient-to-br from-indigo-950 via-purple-900 to-violet-950 text-white py-20">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header with decorative elements */}
        <div className="relative mb-16 text-center">
          {/* Decorative circles */}
          <div className="absolute w-40 h-40 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 blur-xl -top-10 left-1/4 animate-pulse"></div>
          <div className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-indigo-500/10 to-blue-500/10 blur-xl top-0 right-1/4 animate-pulse"></div>
          
          <div className="inline-block px-6 py-2 bg-indigo-500/20 rounded-full text-indigo-100 font-medium mb-4">
            My Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & <span className="text-pink-400">Expertise</span></h2>
          <div className="h-1 w-40 bg-gradient-to-r from-indigo-400 to-pink-500 mx-auto mb-6"></div>
          <p className="text-lg text-indigo-100 max-w-2xl mx-auto">
            A comprehensive overview of my technical proficiencies and soft skills that I've
            developed and refined throughout my career.
          </p>
        </div>
        
        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category) => (
            <div 
              key={category.name} 
              className="bg-indigo-900/30 backdrop-blur-sm border border-indigo-700/30 rounded-xl p-6 md:p-8 shadow-xl hover:shadow-indigo-700/20 transition-all duration-300 hover:translate-y-[-4px]"
            >
              <h3 className="text-xl font-semibold text-center text-pink-400 mb-6">{category.name}</h3>
              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-indigo-100">{skill.name}</span>
                      <span className="text-indigo-200">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full bg-indigo-800/40 rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-2 rounded-full bg-gradient-to-r from-indigo-400 to-pink-500" 
                        style={{ width: `${skill.proficiency}%` }}
                      >
                        <div className="h-full w-full bg-white/20 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom decorative element */}
        <div className="flex justify-center mt-16">
          <div className="px-8 py-3 bg-indigo-500/20 rounded-full text-indigo-100 font-medium">
            <span className="text-pink-400 mr-2">✓</span> Always learning new technologies
          </div>
        </div>
      </div>
    </section>
  );
}