import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, Mail, Github, Linkedin, ArrowDown, LayoutDashboard, Database, Code, Sparkles, Lightbulb } from 'lucide-react';

const roles = [
  "Data Analyst",
  "Power BI Developer",
  "SQL Developer",
  "AI Explorer",
  "Tech Innovator"
];

// Duplicate roles to create seamless loop
const tickerRoles = [...roles, ...roles, ...roles, ...roles];

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center pt-32 pb-20 relative overflow-hidden bg-brand-black">
      {/* Background Gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 z-10">
        
        {/* Top Section: Profile & Intro */}
        {/* Changed grid-cols to 35% 65% to move photo left and widen text area */}
        <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-12 items-start mb-16 lg:mb-24">
            {/* Left Side: Profile Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center lg:justify-end lg:order-1"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* Glowing Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-brand-primary/30 animate-spin-slow"></div>
                <div className="absolute inset-0 rounded-full shadow-[0_0_50px_rgba(0,194,255,0.2)]"></div>
                
                <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-brand-card bg-brand-card z-10">
                  <img 
                      src="assets/profile.jpg"
                      onError={(e) => {
                        e.currentTarget.src = "https://picsum.photos/400/400?grayscale";
                      }}
                      alt="Raghavendra Reddy" 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                </div>
              </div>
            </motion.div>

            {/* Right Side: Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center lg:text-left lg:order-2 flex flex-col gap-6"
            >
              {/* Header Section */}
              <div className="w-full">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                  Hi, I'm <span className="bg-brand-primary/10 text-brand-primary px-4 py-1 rounded-xl inline-block mt-2 md:mt-0 shadow-[0_0_15px_rgba(0,194,255,0.1)]">Raghavendra Reddy</span>
                </h2>

                {/* Horizontal Ticker */}
                <div className="w-full overflow-hidden bg-brand-card/50 border-y border-brand-border/50 py-3 mb-6 relative mask-linear-fade">
                  <motion.div
                    className="whitespace-nowrap flex gap-12 text-brand-muted font-mono text-sm md:text-base uppercase tracking-widest font-semibold"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 15 }} 
                  >
                    {tickerRoles.map((role, idx) => (
                      <div key={idx} className="flex items-center gap-12">
                        <span>{role}</span>
                        <span className="text-brand-primary">•</span>
                      </div>
                    ))}
                  </motion.div>
                  {/* Fade edges for ticker */}
                  <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-brand-black to-transparent z-10"></div>
                  <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-brand-black to-transparent z-10"></div>
                </div>

                {/* Bio - Removed max-w-2xl to allow full width */}
                <div className="space-y-4 text-brand-text/80 text-base leading-relaxed mx-auto lg:mx-0">
                  <p>Welcome to my data-driven world — where every insight has a purpose.</p>
                  <p>
                    I believe every dataset has a story, and I’m here to uncover it.
                    Using Power BI, SQL, Python, and modern analytics tools, I transform raw information into clear, meaningful insights that drive smarter decisions.
                  </p>
                </div>
              </div>

              {/* Info Cards Row - Changed from grid to flex-wrap for better fitting of long email */}
              <div className="flex flex-wrap gap-4 mt-4 w-full">
                <div className="flex-1 min-w-[140px] bg-brand-card p-4 rounded-xl border border-brand-border flex flex-col items-center lg:items-start hover:border-brand-primary/50 transition-colors">
                  <div className="flex items-center gap-2 mb-1 text-brand-primary">
                    <MapPin size={16} /> <span className="text-xs font-semibold uppercase tracking-wider">Location</span>
                  </div>
                  <p className="text-sm font-medium text-white">Bangalore, India</p>
                </div>

                <div className="flex-1 min-w-[140px] bg-brand-card p-4 rounded-xl border border-brand-border flex flex-col items-center lg:items-start hover:border-brand-primary/50 transition-colors">
                  <div className="flex items-center gap-2 mb-1 text-brand-primary">
                    <Briefcase size={16} /> <span className="text-xs font-semibold uppercase tracking-wider">Expertise</span>
                  </div>
                  <p className="text-sm font-medium text-white">Data Analytics, AI</p>
                </div>

                {/* Email card given more flex weight (flex-[2]) to accommodate long text */}
                <div className="flex-[2] min-w-[240px] bg-brand-card p-4 rounded-xl border border-brand-border flex flex-col items-center lg:items-start hover:border-brand-primary/50 transition-colors">
                  <div className="flex items-center gap-2 mb-1 text-brand-primary">
                    <Mail size={16} /> <span className="text-xs font-semibold uppercase tracking-wider">Email</span>
                  </div>
                  <p className="text-xs md:text-sm font-medium text-white whitespace-nowrap">traghavendrareddy2002@gmail.com</p>
                </div>
              </div>
            </motion.div>
        </div>

        {/* Middle Section: What I Do & Connect */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center max-w-5xl mx-auto"
        >
            {/* What I Do - Vertical List (Line by Line) */}
            <div className="w-full bg-brand-card/30 p-8 md:p-10 rounded-3xl border border-brand-border/30 hover:bg-brand-card/50 transition-colors mb-12">
                 <h3 className="text-xl md:text-2xl font-bold text-white mb-8 flex items-center justify-center gap-3">
                    <div className="p-2 bg-brand-primary/10 rounded-lg text-brand-primary">
                      <Sparkles size={24} />
                    </div>
                    What I Do
                 </h3>
                 <ul className="flex flex-col gap-6 max-w-3xl mx-auto">
                    <li className="flex items-center justify-center gap-3 text-brand-text/90 group p-2 hover:bg-white/5 rounded-lg transition-colors text-center">
                        <LayoutDashboard className="text-brand-muted group-hover:text-brand-primary transition-colors shrink-0" size={24} />
                        <span className="group-hover:text-white transition-colors text-lg font-medium">Build interactive dashboards in Power BI</span>
                    </li>
                    <li className="flex items-center justify-center gap-3 text-brand-text/90 group p-2 hover:bg-white/5 rounded-lg transition-colors text-center">
                        <Database className="text-brand-muted group-hover:text-brand-primary transition-colors shrink-0" size={24} />
                        <span className="group-hover:text-white transition-colors text-lg font-medium">Write optimized SQL queries for analytics</span>
                    </li>
                    <li className="flex items-center justify-center gap-3 text-brand-text/90 group p-2 hover:bg-white/5 rounded-lg transition-colors text-center">
                        <Code className="text-brand-muted group-hover:text-brand-primary transition-colors shrink-0" size={24} />
                        <span className="group-hover:text-white transition-colors text-lg font-medium">Automate tasks using Python</span>
                    </li>
                    <li className="flex items-center justify-center gap-3 text-brand-text/90 group p-2 hover:bg-white/5 rounded-lg transition-colors text-center">
                        <Sparkles className="text-brand-muted group-hover:text-brand-primary transition-colors shrink-0" size={24} />
                        <span className="group-hover:text-white transition-colors text-lg font-medium">Transform raw data into stories and insights</span>
                    </li>
                    <li className="flex items-center justify-center gap-3 text-brand-text/90 group p-2 hover:bg-white/5 rounded-lg transition-colors text-center">
                          <Lightbulb className="text-brand-muted group-hover:text-brand-primary transition-colors shrink-0" size={24} />
                          <span className="group-hover:text-white transition-colors text-lg font-medium">Solve business problems with data-driven thinking</span>
                    </li>
                 </ul>
            </div>

            {/* Connect - Centered */}
            <div className="flex flex-col items-center gap-6">
                 <h3 className="text-xl font-semibold text-white flex items-center gap-3">
                    Let's Connect <div className="h-px w-16 bg-brand-border"></div>
                 </h3>
                 <div className="flex flex-wrap justify-center gap-4">
                   <a href="https://github.com/RaghavendraRe" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-8 py-3 bg-brand-card border border-brand-border rounded-xl text-white hover:text-brand-black hover:bg-brand-primary hover:border-brand-primary transition-all duration-300 shadow-lg group text-lg">
                     <Github size={22} />
                     <span className="font-medium">GitHub</span>
                   </a>
                   <a href="https://www.linkedin.com/in/raghavendrareddyprofile/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-8 py-3 bg-brand-card border border-brand-border rounded-xl text-white hover:text-brand-black hover:bg-brand-primary hover:border-brand-primary transition-all duration-300 shadow-lg group text-lg">
                     <Linkedin size={22} />
                     <span className="font-medium">LinkedIn</span>
                   </a>
                   <a href="mailto:traghavendrareddy2002@gmail.com" className="flex items-center gap-2 px-8 py-3 bg-brand-card border border-brand-border rounded-xl text-white hover:text-brand-black hover:bg-brand-primary hover:border-brand-primary transition-all duration-300 shadow-lg group text-lg">
                     <Mail size={22} />
                     <span className="font-medium">Email</span>
                   </a>
                 </div>
            </div>
        </motion.div>

      </div>
      
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-brand-muted opacity-50">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;