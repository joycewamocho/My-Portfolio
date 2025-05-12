import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../UI/button";
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-indigo-950 via-purple-900 to-violet-950 min-h-screen flex items-center">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Decorative elements */}
        <div className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 blur-xl top-20 -left-20 animate-pulse"></div>
        <div className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-indigo-500/10 to-blue-500/10 blur-xl bottom-10 -right-10 animate-pulse"></div>
        
        <div className="max-w-4xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center gap-10">
          {/* Profile Image */}
          <div className="md:order-2 mb-8 md:mb-0 relative">
            <div className="w-60 h-60 rounded-full border-4 border-indigo-700/50 p-1 relative z-10 overflow-hidden shadow-xl">
              <div className="w-full h-full rounded-full bg-gradient-to-r from-indigo-600 to-pink-500 overflow-hidden">
                {/* Replace with your actual image */}
                <img 
                  src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Joyce Wamocho" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            {/* Decorative circle */}
            <div className="absolute w-60 h-60 rounded-full border-2 border-dashed border-pink-400/30 top-3 left-3 animate-spin-slow"></div>
          </div>
          
          {/* Hero Content */}
          <div className="md:order-1 text-white">
            <div className="inline-block px-6 py-2 bg-indigo-500/20 rounded-full text-indigo-100 font-medium mb-4">
              Full-Stack Developer
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-pink-400">Joyce Wamocho</span>
            </h1>
            
            <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
              I build streamlined, responsive and user-friendly web applications
              with modern technologies and best practices.
            </p>
            

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="#projects" passHref>
              <Button className="bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white px-8 py-3 rounded-lg font-bold text-lg shadow-lg hover:shadow-pink-500/30 transition-all">
                View My Work
              </Button>
            </Link>

            <Link href="#contact" passHref>
              <Button variant="outline" className="border-2 border-indigo-400 text-indigo-100 hover:bg-indigo-700/30 px-8 py-3 rounded-lg font-bold text-lg transition-all">
                Contact Me
              </Button>
            </Link>
          </div>

            
            {/* Social Links */}
            <div className="flex gap-4 mt-8 justify-center md:justify-start">
              <a href="#" className="w-10 h-10 rounded-full bg-indigo-700/50 hover:bg-pink-500 flex items-center justify-center shadow-lg transition-colors">
                <Github className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-indigo-700/50 hover:bg-pink-500 flex items-center justify-center shadow-lg transition-colors">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-indigo-700/50 hover:bg-pink-500 flex items-center justify-center shadow-lg transition-colors">
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Scroll down indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-indigo-200 hover:text-pink-400 transition-colors flex flex-col items-center">
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}