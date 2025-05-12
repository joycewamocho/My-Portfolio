"use client";

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
    <Link href={href} aria-label={label} className={className} target="_blank" rel="noopener noreferrer">
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

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

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

  // Smooth scroll handler for navigation
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  // Menu items
  const menuItems = [
    { name: "About", icon: <User size={18} /> },
    { name: "Projects", icon: <Github size={18} /> },
    { name: "Skills", icon: <Linkedin size={18} /> },
    { name: "Contact", icon: <Mail size={18} /> },
    { name: "Education", icon: <User size={18} /> },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-xl ${
        isScrolled ? "bg-indigo-950/90 shadow-lg" : "bg-indigo-950/50"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 md:h-20 items-center justify-between">
        {/* Logo/Name */}
        <Link href="/" className="flex items-center gap-2 font-bold text-white group">
          <div className="relative h-8 w-8 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 animate-spin-slow [mask-image:linear-gradient(transparent,white)]">
              <div className="absolute inset-[2px] bg-indigo-950 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-white">JW</span>
              </div>
            </div>
          </div>
          <span className="text-lg md:text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-500">
            Joyce Wamocho
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.name.toLowerCase()}`}
              onClick={(e) => handleNavClick(e, item.name.toLowerCase())}
              className="relative text-indigo-100 hover:text-white transition-colors duration-200 group text-sm md:text-base"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>

        {/* Social Links (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <SocialLink
            href="https://github.com/joycewamocho"
            icon={<Github className="h-5" />}
            label="GitHub"
            className="text-indigo-100 hover:text-white hover:bg-indigo-600/80 p-2 rounded-full transition-all duration-300 shadow-sm hover:shadow-indigo-500/50"
          />
          <SocialLink
            href="https://www.linkedin.com/in/joyce-wamocho-476250259"
            icon={<Linkedin className="h-5" />}
            label="LinkedIn"
            className="text-indigo-100 hover:text-white hover:bg-indigo-600/80 p-2 rounded-full transition-all duration-300 shadow-sm hover:shadow-indigo-500/50"
          />
          <SocialLink
            href="mailto:nafulajoycewamocho@gmail.com"
            icon={<Mail className="h-5" />}
            label="Email"
            className="text-indigo-100 hover:text-white hover:bg-indigo-600/80 p-2 rounded-full transition-all duration-300 shadow-sm hover:shadow-indigo-500/50"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 hover:from-pink-500/20 hover:to-purple-500/20 transition-all duration-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-5 text-pink-500 hover:text-purple-500 transition-colors duration-300" />
          ) : (
            <Menu className="h-5 text-pink-500 hover:text-purple-500 transition-colors duration-300" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed top-0 right-0 w-full h-screen bg-indigo-950/95 backdrop-blur-xl z-40 transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 hover:from-pink-500/30 hover:to-purple-500/30 transition-all duration-300"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <X className="h-6 text-pink-500" />
        </button>

        {/* Mobile Menu Header */}
        <div className="flex items-center gap-4 pt-20 pb-6 px-8 border-b border-indigo-800/40">
          <div className="relative h-10 w-10 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 animate-spin-slow [mask-image:linear-gradient(transparent,white)]">
              <div className="absolute inset-[2px] bg-indigo-950 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-white">JW</span>
              </div>
            </div>
          </div>
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>
            <span className="font-medium text-lg bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
              Joyce Wamocho
            </span>
          </Link>
        </div>

        {/* Mobile Menu Items */}
        <div className="flex flex-col gap-5 p-8 overflow-y-auto max-h-[calc(100vh-180px)]">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.name.toLowerCase()}`}
              onClick={(e) => handleNavClick(e, item.name.toLowerCase())}
              className="flex items-center gap-4 py-3 text-lg text-indigo-100 hover:text-white transition-all duration-200 group"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 group-hover:from-pink-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                {item.icon}
              </div>
              <span className="relative">
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </span>
            </a>
          ))}
        </div>

        {/* Social Links (Mobile) */}
        <div className="mt-auto border-t border-indigo-800/40 p-8">
          <h3 className="text-indigo-100/50 text-sm mb-4">Connect with me</h3>
          <div className="flex gap-4">
            <SocialLink
              href="https://github.com/joycewamocho"
              icon={<Github className="h-5 text-white" />}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 hover:from-pink-500/30 hover:to-purple-500/30 transition-all duration-300"
            />
            <SocialLink
              href="https://www.linkedin.com/in/joyce-wamocho-476250259"
              icon={<Linkedin className="h-5 text-white" />}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 hover:from-pink-500/30 hover:to-purple-500/30 transition-all duration-300"
            />
            <SocialLink
              href="mailto:nafulajoycewamocho@gmail.com"
              icon={<Mail className="h-5 text-white" />}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 hover:from-pink-500/30 hover:to-purple-500/30 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </header>
  );
}