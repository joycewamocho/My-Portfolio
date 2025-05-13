import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../UI/button";
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-indigo-950 via-purple-900 to-violet-950 min-h-screen flex items-center relative overflow-hidden pb-16 sm:pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8 sm:py-10 lg:py-0">
        {/* Decorative elements */}
        <div className="absolute w-48 h-48 lg:w-64 lg:h-64 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 blur-xl top-10 lg:top-20 -left-10 lg:-left-20 animate-pulse"></div>
        <div className="absolute w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-r from-indigo-500/10 to-blue-500/10 blur-xl bottom-10 lg:bottom-10 -right-10 lg:-right-10 animate-pulse"></div>
        
        <div className="max-w-6xl mx-auto text-center lg:text-left flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Profile Image */}
          <div className="lg:order-2 mb-6 lg:mb-0 relative flex-shrink-0">
            <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full border-4 border-indigo-700/50 p-1 relative z-10 overflow-hidden shadow-xl">
              <div className="w-full h-full rounded-full bg-gradient-to-r from-indigo-600 to-pink-500 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Joyce Wamocho" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            {/* Decorative circle */}
            <div className="absolute w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full border-2 border-dashed border-pink-400/30 top-3 left-3 animate-spin-slow"></div>
          </div>
          
          {/* Hero Content */}
          <div className="lg:order-1 text-white lg:flex-1">
            <div className="inline-block px-4 sm:px-6 py-2 bg-indigo-500/20 rounded-full text-indigo-100 font-medium mb-4 text-sm sm:text-base">
              Full-Stack Developer
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-6">
              Hi, I'm <span className="text-pink-400">Joyce Wamocho</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-indigo-100 mb-6 lg:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              I build streamlined, responsive and user-friendly web applications
              with modern technologies and best practices.
            </p>
            
            {/* Buttons - Fixed for mobile */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 lg:mb-8 relative z-20">
              <Button asChild className="bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white px-6 sm:px-8 py-3 rounded-lg font-bold text-base sm:text-lg shadow-lg hover:shadow-pink-500/30 transition-all w-full sm:w-auto min-h-12">
                <Link href="#projects" className="relative z-10 block w-full">
                  View My Work
                </Link>
              </Button>

              <Button asChild variant="outline" className="border-2 border-indigo-400 text-indigo-100 hover:bg-indigo-700/30 hover:text-white px-6 sm:px-8 py-3 rounded-lg font-bold text-base sm:text-lg transition-all w-full sm:w-auto min-h-12">
                <Link href="#contact" className="relative z-10 block w-full">
                  Contact Me
                </Link>
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start">
              <a 
                href="https://github.com/joycewamocho" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-indigo-700/50 hover:bg-pink-500 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </a>
              <a 
                href="https://www.linkedin.com/in/joyce-wamocho-476250259" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-indigo-700/50 hover:bg-pink-500 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </a>
              <a 
                href="mailto:nafulajoycewamocho@gmail.com" 
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-indigo-700/50 hover:bg-pink-500 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
                aria-label="Email Contact"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator - fixed positioning */}
      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <a 
          href="#about" 
          className="text-indigo-200 hover:text-pink-400 transition-colors flex flex-col items-center group"
          aria-label="Scroll to about section"
        >
          <span className="text-xs sm:text-sm mb-2 opacity-80 group-hover:opacity-100 transition-opacity">Scroll Down</span>
          <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5" />
        </a> 
      </div>
    </div>
  );
}