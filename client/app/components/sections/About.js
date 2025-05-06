import { Download } from "lucide-react";
import { Button } from "../UI/button";

export default function About() {
  return (
    <section className="bg-gradient-to-br from-indigo-950 via-purple-900 to-violet-950 text-white py-20">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header with decorative elements */}
        <div className="relative mb-16 text-center">
          {/* Decorative circles */}
          <div className="absolute w-40 h-40 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 blur-xl -top-10 -right-10 animate-pulse"></div>
          <div className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-indigo-500/10 to-blue-500/10 blur-xl -bottom-5 -left-10 animate-pulse"></div>
          
          <div className="inline-block px-6 py-2 bg-indigo-500/20 rounded-full text-indigo-100 font-medium mb-4">
            About Me
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My <span className="text-pink-400">Journey</span></h2>
          <div className="h-1 w-40 bg-gradient-to-r from-indigo-400 to-pink-500 mx-auto mb-6"></div>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Image column */}
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-80 rounded-2xl overflow-hidden border-4 border-indigo-700/30 shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/1181208/pexels-photo-1181208.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Joyce Wamocho" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Experience badge */}
              <div className="absolute -right-6 -bottom-6 bg-gradient-to-r from-indigo-600 to-pink-500 rounded-full w-32 h-32 flex items-center justify-center shadow-xl">
                <div className="text-center">
                  <p className="text-3xl font-bold">5+</p>
                  <p className="text-sm">Years of<br />Experience</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content column */}
          <div className="lg:col-span-3">
            <div className="bg-indigo-900/30 backdrop-blur-sm border border-indigo-700/30 rounded-xl p-6 md:p-8 shadow-xl">
              <h3 className="text-2xl font-semibold mb-4">Web Developer & UI/UX Enthusiast</h3>
              
              <p className="text-indigo-100 mb-6">
                I'm a passionate full-stack developer with over 5 years of experience building modern 
                web applications. My journey began with front-end development, mastering HTML, CSS, and 
                JavaScript, and evolved into full-stack expertise with React, Node.js, and various databases.
              </p>
              
              <p className="text-indigo-100 mb-6">
                What drives me is creating intuitive, accessible, and visually stunning digital experiences 
                that solve real-world problems. I believe in clean code, continuous learning, and staying 
                on top of emerging technologies and best practices.
              </p>
              
              {/* Personal info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span className="text-indigo-200">Name:</span>
                  <span className="text-white font-medium">Joyce Wamocho</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span className="text-indigo-200">Email:</span>
                  <span className="text-white font-medium">nafulajoycewamocho@example.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span className="text-indigo-200">Location:</span>
                  <span className="text-white font-medium">Nairobi, Kenya</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span className="text-indigo-200">Availability:</span>
                  <span className="text-white font-medium">Full-time</span>
                </div>
              </div>
              
              <Button className="bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg font-bold shadow-lg hover:shadow-pink-500/30 transition-all flex items-center gap-2">
                <Download className="w-5 h-5" /> Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}