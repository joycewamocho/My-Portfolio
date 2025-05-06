'use client';

import Layout from "./components/Layouts/Layout";
import Hero from "./components/sections/hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Skills from "./components/sections/Skills";

export default function Home() {
  return (
    <Layout>
      <div className="w-full min-h-screen bg-indigo-950 text-white transition-colors duration-300 overflow-x-hidden">
        {/* Hero section - already has the gradient background */}
        <section id="hero" className="relative">
          <Hero />
        </section>
        
        {/* About section with purple gradient */}
        <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-indigo-950 to-indigo-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">About Me</h2>
              <div className="h-1 w-24 bg-pink-500 mx-auto rounded"></div>
            </div>
            <div className="lg:flex items-center gap-12">
              <About />
            </div>
          </div>
        </section>
        
        {/* Projects section with darker purple */}
        <section id="projects" className="py-16 md:py-24 bg-gradient-to-b from-indigo-900 to-violet-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">My Projects</h2>
              <div className="h-1 w-24 bg-pink-500 mx-auto rounded"></div>
            </div>
            <Projects />
          </div>
        </section>
        
        {/* Skills section with gradient */}
        <section id="skills" className="py-16 md:py-24 bg-gradient-to-b from-violet-950 to-purple-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Skills & Expertise</h2>
              <div className="h-1 w-24 bg-pink-500 mx-auto rounded"></div>
            </div>
            <Skills />
          </div>
        </section>
        
        {/* Contact section with darker purple and decorative elements */}
        <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-purple-900 to-indigo-950 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Get In Touch</h2>
              <div className="h-1 w-24 bg-pink-500 mx-auto rounded"></div>
              <p className="mt-6 text-lg text-indigo-100 max-w-2xl mx-auto">
                Interested in working together? Fill out the form below and let's connect.
              </p>
            </div>
            <Contact />
          </div>
          
          {/* Decorative elements with position constraints to prevent overflow */}
          <div className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 blur-xl top-20 left-0 animate-pulse"></div>
          <div className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-indigo-500/10 to-blue-500/10 blur-xl bottom-10 right-0 animate-pulse"></div>
        </section>
      </div>
    </Layout>
  );
}