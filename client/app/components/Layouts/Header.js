import { useState, useEffect } from "react";
import Link from "next/link";
import { User, Github, Mail, Linkedin, Menu, X } from "lucide-react";

// Button component since it's imported in the original code
const Button = ({ children, variant = "default", size = "md", className, ...props }) => {
  const sizeClasses = {
    sm: "py-2 px-4 text-sm",
    md: "py-2.5 px-5 text-base",
    lg: "py-3 px-6 text-lg"
  };

  return (
    <button 
      className={`font-medium rounded-lg transition-all ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// SocialLink component since it's used in the original code
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
      className={`sticky top-0 z-40 transition-all duration-300 backdrop-blur-md
        ${isScrolled 
          ? "bg-indigo-900/95 border-b border-indigo-700 shadow-lg" 
          : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 flex h-20 items-center justify-between">
        {/* Logo/Name */}
        <Link 
          href="/" 
          className="flex items-center gap-3 font-bold text-white group"
        >
          <div className="bg-pink-500 p-2 rounded-lg shadow-md group-hover:bg-pink-600 transition-all duration-300">
            <User className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl tracking-tight group-hover:text-pink-400 transition-colors duration-300">Joyce Wamocho</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {["About", "Projects", "Skills", "Contact"].map((item) => (
            <Link 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-md font-medium text-indigo-100 hover:text-pink-400 relative group py-2"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500/80 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>
        
        {/* Social Links (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <SocialLink 
            href="https://github.com/yourusername" 
            icon={<Github className="h-5 w-5" />}
            label="GitHub"
            className="text-indigo-100 hover:text-white hover:bg-indigo-700 p-2 rounded-full transition-colors"
          />
          <SocialLink 
            href="https://linkedin.com/in/yourusername" 
            icon={<Linkedin className="h-5 w-5" />}
            label="LinkedIn"
            className="text-indigo-100 hover:text-white hover:bg-indigo-700 p-2 rounded-full transition-colors"
          />
          <SocialLink 
            href="mailto:your.email@example.com" 
            icon={<Mail className="h-5 w-5" />}
            label="Email"
            className="text-indigo-100 hover:text-white hover:bg-indigo-700 p-2 rounded-full transition-colors"
          />
          <Button 
            variant="default" 
            size="sm" 
            className="ml-3 font-medium shadow-md bg-pink-500 hover:bg-pink-600 text-white"
          >
            Resume
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-lg bg-indigo-800 hover:bg-indigo-700 text-white shadow-md"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-800 md:hidden flex items-center justify-center">
          <button 
            className="absolute top-6 right-6 p-2 rounded-lg bg-indigo-800 hover:bg-indigo-700 text-white"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
          
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {["About", "Projects", "Skills", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-2xl font-medium text-white hover:text-pink-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            
            <div className="flex items-center gap-6 mt-8">
              <SocialLink 
                href="https://github.com/joycewamocho" 
                icon={<Github className="h-6 w-6" />}
                className="bg-indigo-800/50 hover:bg-pink-500 text-white p-3 rounded-full transition-all duration-300"
              />
              <SocialLink 
                href="www.linkedin.com/in/joyce-wamocho-476250259" 
                icon={<Linkedin className="h-6 w-6" />}
                className="bg-indigo-800/50 hover:bg-pink-500 text-white p-3 rounded-full transition-all duration-300"
              />
              <SocialLink 
                href="nafulajoycewamocho@gmail.com" 
                icon={<Mail className="h-6 w-6" />}
                className="bg-indigo-800/50 hover:bg-pink-500 text-white p-3 rounded-full transition-all duration-300"
              />
            </div>
            
            <Button 
              variant="default" 
              size="lg" 
              className="mt-6 font-medium bg-pink-500 hover:bg-pink-600 text-white px-8 py-6 text-lg rounded-xl shadow-lg"
            >
              Resume
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}