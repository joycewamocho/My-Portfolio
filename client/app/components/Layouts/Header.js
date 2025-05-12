import { useState, useEffect } from "react";
import Link from "next/link";
import { User, Github, Mail, Linkedin, Menu, X } from "lucide-react";

// Button component
const Button = ({ children, variant = "default", size = "md", className, ...props }) => {
  const sizeClasses = {
    sm: "py-1 px-2 sm:py-1.5 sm:px-3 text-xs sm:text-sm",
    md: "py-1.5 px-3 sm:py-2 sm:px-4 text-sm sm:text-base",
    lg: "py-2 px-4 sm:py-2.5 sm:px-5 text-base sm:text-lg",
  };

  return (
    <button 
      className={`font-semibold rounded-xl transition-all duration-300 ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// SocialLink component
const SocialLink = ({ href, icon, label, className }) => {
  return (
    <Link 
      href={href}
      aria-label={label}
      className={className}
    >
      {icon}
    </Link>
  );
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-40 transition-all duration-300 backdrop-blur-lg
        ${isScrolled 
          ? "bg-indigo-950/90 border-b border-indigo-800/40 shadow-lg" 
          : "bg-indigo-950/30"
        }`}
    >
      <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8 flex h-14 sm:h-16 md:h-18 lg:h-20 items-center justify-between">
        {/* Logo/Name */}
        <Link 
          href="/" 
          className="flex items-center gap-1.5 sm:gap-2 font-bold text-white group"
        >
          <div className="bg-pink-500 p-1 sm:p-1.5 rounded-lg shadow-md group-hover:bg-pink-600 group-hover:shadow-pink-500/50 transition-all duration-300">
            <User className="h-3.5 sm:h-4 md:h-5 text-white" />
          </div>
          <span className="text-base sm:text-lg md:text-xl tracking-tight group-hover:text-pink-300 transition-colors duration-300">Joyce Wamocho</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-4 sm:gap-6 lg:gap-8">
          {["About", "Projects", "Skills", "Contact","Education"].map((item) => (
            <Link 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs sm:text-sm md:text-base font-medium text-indigo-100 hover:text-pink-400 relative group py-1 sm:py-2"
            >
              {item}
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-pink-400/80 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>
        
        {/* Social Links (Desktop) */}
        <div className="hidden md:flex items-center gap-1.5 sm:gap-2 lg:gap-3">
          <SocialLink 
            href="https://github.com/joycewamocho" 
            icon={<Github className="h-3.5 sm:h-4 md:h-5" />}
            label="GitHub"
            className="text-indigo-100 hover:text-white hover:bg-indigo-600/80 p-1 sm:p-1.5 md:p-2 rounded-full transition-all duration-300 shadow-sm hover:shadow-indigo-500/50"
          />
          <SocialLink 
            href="https://www.linkedin.com/in/joyce-wamocho-476250259" 
            icon={<Linkedin className="h-3.5 sm:h-4 md:h-5" />}
            label="LinkedIn"
            className="text-indigo-100 hover:text-white hover:bg-indigo-600/80 p-1 sm:p-1.5 md:p-2 rounded-full transition-all duration-300 shadow-sm hover:shadow-indigo-500/50"
          />
          <SocialLink 
            href="mailto:nafulajoycewamocho@gmail.com" 
            icon={<Mail className="h-3.5 sm:h-4 md:h-5" />}
            label="Email"
            className="text-indigo-100 hover:text-white hover:bg-indigo-600/80 p-1 sm:p-1.5 md:p-2 rounded-full transition-all duration-300 shadow-sm hover:shadow-indigo-500/50"
          />
          
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-1.5 sm:p-2 rounded-lg bg-indigo-800/50 hover:bg-indigo-700/70 text-white shadow-md hover:shadow-indigo-500/50 transition-all duration-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-4 sm:h-5 md:h-6" /> : <Menu className="h-4 sm:h-5 md:h-6" />}
        </button>
      </div>
      
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-gradient-to-br from-indigo-950/90 via-purple-900/80 to-violet-950/90 md:hidden flex items-center justify-center">
          <button 
            className="absolute top-3 sm:top-4 md:top-6 right-3 sm:right-4 md:right-6 p-1.5 sm:p-2 rounded-lg bg-indigo-800/50 hover:bg-indigo-700/70 text-white shadow-md hover:shadow-indigo-500/50 transition-all duration-300"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-4 sm:h-5 md:h-6" />
          </button>
          
          <div className="flex flex-col items-center justify-center h-full gap-4 sm:gap-6 md:gap-8">
            {["About", "Projects", "Skills", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-lg sm:text-xl md:text-2xl font-semibold text-white hover:text-pink-400 transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            
            <div className="flex items-center gap-3 sm:gap-4 md:gap-6 mt-4 sm:mt-6 md:mt-8">
              <SocialLink 
                href="https://github.com/joycewamocho" 
                icon={<Github className="h-4 sm:h-5 md:h-6" />}
                className="bg-indigo-800/50 hover:bg-pink-500/80 text-white p-1.5 sm:p-2 md:p-3 rounded-full transition-all duration-300 shadow-md hover:shadow-pink-500/50"
              />
              <SocialLink 
                href="https://www.linkedin.com/in/joyce-wamocho-476250259" 
                icon={<Linkedin className="h-4 sm:h-5 md:h-6" />}
                className="bg-indigo-800/50 hover:bg-pink-500/80 text-white p-1.5 sm:p-2 md:p-3 rounded-full transition-all duration-300 shadow-md hover:shadow-pink-500/50"
              />
              <SocialLink 
                href="mailto:nafulajoycewamocho@gmail.com" 
                icon={<Mail className="h-4 sm:h-5 md:h-6" />}
                className="bg-indigo-800/50 hover:bg-pink-500/80 text-white p-1.5 sm:p-2 md:p-3 rounded-full transition-all duration-300 shadow-md hover:shadow-pink-500/50"
              />
            </div>
         
          </div>
        </div>
      )}
    </header>
  );
}