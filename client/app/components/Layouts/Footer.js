import { User, Github, Mail, Linkedin } from "lucide-react";
import Link from "next/link";

// SocialLink component styled to match the hero section
const SocialLink = ({ href, icon }) => {
  return (
    <Link 
      href={href}
      className="w-10 h-10 rounded-full bg-indigo-700/50 hover:bg-pink-500 flex items-center justify-center shadow-lg transition-colors"
    >
      <span className="text-white">{icon}</span>
    </Link>
  );
};

export default function Footer() {
  return (
    <footer className="border-t border-indigo-800/30 py-6 md:py-8 bg-gradient-to-br from-indigo-950 via-purple-900 to-violet-950 transition-colors">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 text-indigo-100">
          <User className="h-5 w-5 text-pink-400" />
          <span className="font-semibold">Joyce Wamocho</span>
        </div>
        
        <div className="text-sm text-indigo-200 order-3 md:order-2">
          © {new Date().getFullYear()} Joyce Wamocho. All rights reserved.
        </div>
        
        <div className="flex gap-4 order-2 md:order-3">
          <SocialLink href="https://github.com/joycewamocho" icon={<Github className="h-5 w-5" />} />
          <SocialLink href="https://www.linkedin.com/in/joyce-wamocho-476250259/" icon={<Linkedin className="h-5 w-5" />} />
          <SocialLink href="nafulajoycewamocho@gmail.com" icon={<Mail className="h-5 w-5" />} />
        </div>
      </div>
    </footer>
  );
}