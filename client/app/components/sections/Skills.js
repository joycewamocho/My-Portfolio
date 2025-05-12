export function Skills({ skills }) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-br from-purple-950 to-purple-900 rounded-xl shadow-2xl border border-purple-800/30 backdrop-blur-sm">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {skills.map((category, index) => (
          <div 
            key={index} 
            className="p-5 sm:p-6 md:p-8 rounded-xl bg-purple-900/60 border border-purple-700/50 backdrop-blur-md hover:shadow-lg hover:shadow-pink-500/10 transition-all duration-300 transform hover:-translate-y-1"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 text-pink-400 flex items-center">
              <span className="mr-2 inline-block w-2 h-6 bg-gradient-to-b from-pink-400 to-indigo-400 rounded-full"></span>
              {category.name}
            </h3>
            
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="group">
                  <div className="flex justify-between mb-2 items-center">
                    <span className="font-medium text-white text-sm sm:text-base group-hover:text-pink-200 transition-colors">{skill.name}</span>
                    <span className="text-xs sm:text-sm font-bold text-pink-300 bg-purple-950/60 py-1 px-2 rounded-full group-hover:bg-pink-500 group-hover:text-purple-900 transition-colors">{skill.proficiency}%</span>
                  </div>
                  <div className="w-full bg-purple-800/60 rounded-full h-2 md:h-3 overflow-hidden backdrop-blur-sm p-0.5">
                    <div 
                      className="bg-gradient-to-r from-indigo-400 via-pink-400 to-pink-500 h-full rounded-full shadow-inner shadow-white/5 transition-all duration-700 ease-in-out group-hover:from-pink-400 group-hover:to-indigo-400"
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
