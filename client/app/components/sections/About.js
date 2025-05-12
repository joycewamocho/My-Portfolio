"use client";
import { useState } from "react";
import { Download, Loader2 } from "lucide-react"; // Added Loader2 for spinner
import { Button } from "../UI/button";

// SweetAlert2 CDN (included inline for simplicity)
const script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/npm/sweetalert2@11";
document.body.appendChild(script);

export default function About() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async (e) => {
    e.preventDefault();
    try {
      setIsDownloading(true);

      // Use the Dropbox direct download URL for the CV
      const cvUrl = "https://www.dropbox.com/scl/fi/q7tqqccw72u4nxj0wqlop/CURRICULUM-VITAE-Joyce-Wamocho.pdf?rlkey=0rk885dazep389pgikz92h92q&st=dma401ne&dl=1"; // Corrected to dl=1 for direct download
      console.log("Initiating download from:", cvUrl);

      // Programmatically trigger the download
      const link = document.createElement("a");
      link.href = cvUrl;
      link.download = "Joyce_Wamocho_CV.pdf"; // Suggested file name
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      console.log("Download triggered successfully");

      // Success notification with SweetAlert2
      await import("sweetalert2").then((Swal) => {
        Swal.fire({
          icon: "success",
          title: "Download Started!",
          text: "Your CV is downloading. Check your browser's download manager if it doesn’t start soon. [Retry](javascript:location.reload())",
          confirmButtonText: "OK",
          timer: 3000,
          timerProgressBar: true,
          showConfirmButton: true,
          customClass: {
            confirmButton: "bg-indigo-500 text-white hover:bg-indigo-600",
          },
        });
      });
    } catch (error) {
      console.error("Error initiating download:", error);
      // Error notification with SweetAlert2
      await import("sweetalert2").then((Swal) => {
        Swal.fire({
          icon: "error",
          title: "Download Failed",
          html: "Unable to download the CV. Please <a href='mailto:nafulajoycewamocho@gmail.com'>contact me</a> or try again.",
          confirmButtonText: "Retry",
          showCancelButton: true,
          cancelButtonText: "Cancel",
          customClass: {
            confirmButton: "bg-pink-500 text-white hover:bg-pink-600",
            cancelButton: "bg-gray-500 text-white hover:bg-gray-600",
          },
          preConfirm: () => {
            handleDownload(e); // Retry on confirm
          },
        });
      });
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <section
      className="bg-gradient-to-br from-indigo-950/50 via-purple-900/30 to-violet-950/50 text-white py-10 sm:py-12 md:py-16 lg:py-20"
      aria-label="About Section with CV Download"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with decorative elements */}
        <div className="relative mb-8 sm:mb-10 lg:mb-12 text-center">
          {/* Decorative circles */}
          <div className="absolute w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-pink-500/10 to-indigo-500/10 blur-xl -top-8 -right-8 sm:-top-10 sm:-right-10 animate-pulse"></div>
          <div className="absolute w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-indigo-500/10 to-blue-500/10 blur-xl -bottom-6 -left-8 sm:-bottom-8 sm:-left-10 animate-pulse"></div>
        </div>

        <div className="max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10">
          {/* Image column */}
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative">
              <div className="w-56 sm:w-60 md:w-64 h-72 sm:h-76 md:h-80 rounded-2xl overflow-hidden border-4 border-indigo-800/40 shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src="https://images.pexels.com/photos/1181208/pexels-photo-1181208.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Joyce Wamocho"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              {/* Experience badge */}
              <div className="absolute -right-4 sm:-right-5 md:-right-6 -bottom-4 sm:-bottom-5 md:-bottom-6 bg-gradient-to-r from-indigo-600 to-pink-500 rounded-full w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 flex items-center justify-center shadow-xl hover:shadow-pink-500/40 transition-all duration-300">
                <div className="text-center">
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold">5+</p>
                  <p className="text-xs sm:text-sm md:text-sm leading-tight">Years of<br />Experience</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content column */}
          <div className="lg:col-span-3">
            <div className="bg-indigo-900/30 backdrop-blur-md border border-indigo-800/40 rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-5 text-pink-400 hover:text-indigo-300 transition-colors">
                Web Developer & UI/UX Enthusiast
              </h3>
              
              <p className="text-indigo-100 mb-4 sm:mb-5 text-sm sm:text-base md:text-lg">
                I'm a passionate full-stack developer with over 5 years of experience building modern 
                web applications. My journey began with front-end development, mastering HTML, CSS, and 
                JavaScript, and evolved into full-stack expertise with React, Node.js, and various databases.
              </p>
              
              <p className="text-indigo-100 mb-5 sm:mb-6 text-sm sm:text-base md:text-lg">
                What drives me is creating intuitive, accessible, and visually stunning digital experiences 
                that solve real-world problems. I believe in clean code, continuous learning, and staying 
                on top of emerging technologies and best practices.
              </p>
              
              {/* Personal info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span className="text-indigo-200 text-xs sm:text-sm md:text-base">Name:</span>
                  <span className="text-white font-medium text-xs sm:text-sm md:text-base">Joyce Wamocho</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span className="text-indigo-200 text-xs sm:text-sm md:text-base">Email:</span>
                  <span className="text-white font-medium text-xs sm:text-sm md:text-base break-all">nafulajoycewamocho@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span className="text-indigo-200 text-xs sm:text-sm md:text-base">Location:</span>
                  <span className="text-white font-medium text-xs sm:text-sm md:text-base">Nairobi, Kenya</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span className="text-indigo-200 text-xs sm:text-sm md:text-base">Availability:</span>
                  <span className="text-white font-medium text-xs sm:text-sm md:text-base">Full-time</span>
                </div>
              </div>
              
              <Button
                onClick={handleDownload}
                className={`bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-xl font-bold text-sm sm:text-base md:text-lg shadow-md hover:shadow-lg hover:shadow-pink-500/40 transition-all flex items-center gap-1.5 sm:gap-2 ${
                  isDownloading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={isDownloading}
                aria-label="Download Joyce Wamocho's CV"
              >
                {isDownloading ? (
                  <>
                    <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                    <span>Downloading...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Download CV</span>
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}