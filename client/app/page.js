import fs from 'fs/promises';
import path from 'path';
import Layout from './components/Layouts/Layout';
import Hero from './components/sections/hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import { Skills } from './components/sections/Skills';
import Education from './components/sections/Education';

export default async function Home() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'data.json');
    const jsonData = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(jsonData);
    const projects = data.projects;
    const skills = data.skills;

    return (
      <Layout>
        <div className="w-full min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900/50 to-violet-950/50 text-white transition-colors duration-300 overflow-x-hidden">
          <section id="hero" className="relative scroll-mt-16">
            <Hero />
          </section>
          <section id="about" className="py-8 sm:py-10 md:py-12 lg:py-16 bg-gradient-to-b from-indigo-950 to-indigo-900 scroll-mt-16">
            <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8 max-w-4xl sm:max-w-5xl md:max-w-6xl">
              <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 text-white bg-gradient-to-r from-pink-400 to-indigo-500 bg-clip-text text-transparent animate-pulse-slow group">
                  <span className="cursor-pointer hover:text-pink-300 transition-colors duration-300">About Me</span>
                </h2>
                <div className="h-0.5 w-16 sm:w-20 md:w-24 bg-pink-500 mx-auto rounded transition-all duration-300 group-hover:w-28 group-hover:bg-indigo-500"></div>
              </div>
              <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
                <About />
              </div>
            </div>
          </section>
          <section id="projects" className="py-8 sm:py-10 md:py-12 lg:py-16 bg-gradient-to-b from-indigo-900 to-violet-950 scroll-mt-16">
            <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8 max-w-5xl sm:max-w-6xl md:max-w-7xl">
              <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 text-white bg-gradient-to-r from-pink-400 to-indigo-500 bg-clip-text text-transparent animate-pulse-slow group">
                  <span className="cursor-pointer hover:text-pink-300 transition-colors duration-300">My Projects</span>
                </h2>
                <div className="h-0.5 w-16 sm:w-20 md:w-24 bg-pink-500 mx-auto rounded transition-all duration-300 group-hover:w-28 group-hover:bg-indigo-500"></div>
              </div>
              <Projects projects={projects} />
            </div>
          </section>
          <section id="skills" className="py-8 sm:py-10 md:py-12 lg:py-16 bg-gradient-to-b from-violet-950 to-purple-900 scroll-mt-16">
            <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8 max-w-4xl sm:max-w-5xl md:max-w-6xl">
              <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 text-white bg-gradient-to-r from-pink-400 to-indigo-500 bg-clip-text text-transparent animate-pulse-slow group">
                  <span className="cursor-pointer hover:text-pink-300 transition-colors duration-300">Skills & Expertise</span>
                </h2>
                <div className="h-0.5 w-16 sm:w-20 md:w-24 bg-pink-500 mx-auto rounded transition-all duration-300 group-hover:w-28 group-hover:bg-indigo-500"></div>
              </div>
              <Skills skills={skills} />
            </div>
          </section>
          <section id="education" className="py-8 sm:py-10 md:py-12 lg:py-16 bg-gradient-to-b from-purple-900 to-indigo-950 scroll-mt-16">
            <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8 max-w-4xl sm:max-w-5xl md:max-w-6xl">
              <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 text-white bg-gradient-to-r from-pink-400 to-indigo-500 bg-clip-text text-transparent animate-pulse-slow group">
                  <span className="cursor-pointer hover:text-pink-300 transition-colors duration-300">My Education</span>
                </h2>
                <div className="h-0.5 w-16 sm:w-20 md:w-24 bg-pink-500 mx-auto rounded transition-all duration-300 group-hover:w-28 group-hover:bg-indigo-500"></div>
              </div>
              <Education />
            </div>
          </section>
          <section id="contact" className="py-8 sm:py-10 md:py-12 lg:py-16 bg-gradient-to-b from-indigo-950 to-indigo-900 relative scroll-mt-16">
            <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8 max-w-3xl sm:max-w-4xl md:max-w-5xl relative z-10">
              <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 text-white bg-gradient-to-r from-pink-400 to-indigo-500 bg-clip-text text-transparent animate-pulse-slow group">
                  <span className="cursor-pointer hover:text-pink-300 transition-colors duration-300">Get In Touch</span>
                </h2>
                <div className="h-0.5 w-16 sm:w-20 md:w-24 bg-pink-500 mx-auto rounded transition-all duration-300 group-hover:w-28 group-hover:bg-indigo-500"></div>
                <p className="mt-3 sm:mt-4 md:mt-6 text-sm sm:text-base md:text-lg text-indigo-100 max-w-xs sm:max-w-md md:max-w-2xl mx-auto">
                  Interested in working together? Fill out the form below and let’s connect.
                </p>
              </div>
              <Contact />
            </div>
            <div className="absolute w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 blur-xl top-10 sm:top-16 md:top-20 left-0 animate-pulse"></div>
            <div className="absolute w-60 sm:w-72 md:w-80 h-60 sm:h-72 md:h-80 rounded-full bg-gradient-to-r from-indigo-500/10 to-blue-500/10 blur-xl bottom-10 sm:bottom-16 md:bottom-20 right-0 animate-pulse"></div>
          </section>
        </div>
      </Layout>
    );
  } catch (error) {
    console.error('Error reading data.json:', error);
    return (
      <Layout>
        <div className="w-full min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900/50 to-violet-950/50 text-white flex items-center justify-center">
          <div className="text-center px-4 sm:px-6 md:px-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">Error Loading Data</h1>
            <p className="text-sm sm:text-base md:text-lg text-indigo-100 max-w-md mx-auto">Unable to load portfolio data. Please try again later.</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-lg transition-all duration-300"
            >
              Retry
            </button>
          </div>
        </div>
      </Layout>
    );
  }
}