import { Button } from "../UI/button";
import { ArrowRight, Mail, User, MessageSquare } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-gradient-to-br from-indigo-950 via-purple-900 to-violet-950 text-white py-20">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header with decorative elements */}
        <div className="relative mb-16 text-center">
          {/* Decorative circles */}
          <div className="absolute w-40 h-40 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 blur-xl -top-10 -right-10 animate-pulse"></div>
          <div className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-indigo-500/10 to-blue-500/10 blur-xl -bottom-5 -left-10 animate-pulse"></div>
          
          <div className="inline-block px-6 py-2 bg-indigo-500/20 rounded-full text-indigo-100 font-medium mb-4">
            Say Hello
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In <span className="text-pink-400">Touch</span></h2>
          <div className="h-1 w-40 bg-gradient-to-r from-indigo-400 to-pink-500 mx-auto mb-6"></div>
          <p className="text-lg text-indigo-100 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        {/* Contact form and info grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-indigo-900/30 backdrop-blur-sm border border-indigo-700/30 rounded-xl p-6 shadow-xl">
              <h3 className="text-xl font-semibold mb-6 text-pink-400">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-700 flex items-center justify-center shadow-lg">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-indigo-200">Email</p>
                    <p className="text-indigo-100">nafulajoycewamocho@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-700 flex items-center justify-center shadow-lg">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-indigo-200">GitHub</p>
                    <p className="text-indigo-100">github.com/joycewamocho</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-700 flex items-center justify-center shadow-lg">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178-.004-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-indigo-200">Twitter</p>
                    <p className="text-indigo-100">@joycewamocho</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-indigo-900/30 backdrop-blur-sm border border-indigo-700/30 rounded-xl p-6 shadow-xl">
              <h3 className="text-xl font-semibold mb-4 text-pink-400">Let's Connect</h3>
              <p className="text-indigo-100">Follow me on social media for updates on my latest projects and insights.</p>
              
              {/* Social links */}
              <div className="flex gap-4 mt-6">
                <a href="#" className="w-10 h-10 rounded-full bg-indigo-700 hover:bg-pink-500 flex items-center justify-center shadow-lg transition-colors">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178-.004-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-indigo-700 hover:bg-pink-500 flex items-center justify-center shadow-lg transition-colors">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-indigo-700 hover:bg-pink-500 flex items-center justify-center shadow-lg transition-colors">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact form */}
          <div className="lg:col-span-3">
            <div className="bg-indigo-900/30 backdrop-blur-sm border border-indigo-700/30 rounded-xl p-6 md:p-8 shadow-xl">
              <h3 className="text-xl font-semibold mb-6 text-pink-400">Send Me a Message</h3>
              
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-indigo-200 flex items-center gap-2">
                    <User className="w-4 h-4" /> Name
                  </label>
                  <input 
                    id="name" 
                    type="text" 
                    className="w-full p-3 bg-indigo-950/50 border border-indigo-700/30 rounded-lg text-white focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all placeholder-indigo-400" 
                    placeholder="Your Name" 
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-indigo-200 flex items-center gap-2">
                    <Mail className="w-4 h-4" /> Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full p-3 bg-indigo-950/50 border border-indigo-700/30 rounded-lg text-white focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all placeholder-indigo-400"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-indigo-200 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" /> Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full p-3 bg-indigo-950/50 border border-indigo-700/30 rounded-lg text-white focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all placeholder-indigo-400"
                    placeholder="Tell me about your project or inquiry..."
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white px-8 py-3 rounded-lg font-bold text-lg shadow-lg hover:shadow-pink-500/30 transition-all flex items-center justify-center gap-2"
                >
                  Send Message <ArrowRight className="w-5 h-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}