import React from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';
import Spotlight from './Spotlight';
import { MapPin, Briefcase, Mail, Github, Linkedin, ArrowDown, ChevronDown, FileText, LayoutDashboard, Database, Code, Sparkles, Lightbulb } from 'lucide-react';

const roles = [
  "Data Analyst",
  "Power BI Developer",

  "SQL Developer",

  "AI Explorer",

  "Tech Innovator"

];

const tickerRoles = [...roles, ...roles, ...roles, ...roles];

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  return (

    <section id="home" className="min-h-[90vh] md:min-h-screen flex flex-col items-center justify-center pt-24 md:pt-32 pb-20 relative overflow-hidden">

      <Spotlight />

      {/* Background Elements */}
      {/* <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] pointer-events-none animate-pulse-glow"></div>

      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-secondary/15 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '1.5s' }}></div>

      <div className="absolute top-[40%] right-[20%] w-[30%] h-[30%] bg-accent/10 rounded-full blur-[100px] pointer-events-none animate-float"></div> */}

      <div className="container mx-auto px-6 z-10">

        <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-12 items-start mb-16 lg:mb-24">

          <motion.div

            initial={{ opacity: 0, scale: 0.8 }}

            animate={{ opacity: 1, scale: 1 }}

            transition={{ duration: 0.8 }}

            className="flex justify-center lg:justify-end lg:order-1"

          >

            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">

              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 animate-spin-slow blur-xl"></div>

              <div className="absolute inset-0 rounded-full shadow-[0_0_60px_rgba(139,92,246,0.4)] animate-pulse-glow"></div>

              <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-primary/30 bg-card z-10 shadow-[0_0_30px_rgba(139,92,246,0.3)]">

                <img

                  src={`${import.meta.env.BASE_URL}profile.jpg`}

                  alt="Raghavendra Reddy"

                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"

                />

              </div>

            </div>

          </motion.div>

          <motion.div

            initial={{ opacity: 0, x: 50 }}

            animate={{ opacity: 1, x: 0 }}

            transition={{ duration: 0.8, delay: 0.2 }}

            className="text-center lg:text-left lg:order-2 flex flex-col gap-6"

          >

            <div className="w-full">

              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">

                Hi, I'm{' '}

                <span className="gradient-text font-extrabold px-4 py-1 inline-block mt-2 md:mt-0 animate-gradient-shift bg-200%">

                  Raghavendra Reddy

                </span>

              </h2>

              <div className="w-full overflow-hidden bg-card/50 border-y border-border/50 py-3 mb-6 relative mask-linear-fade">

                <motion.div

                  className="whitespace-nowrap flex gap-12 text-muted-foreground font-mono text-sm md:text-base uppercase tracking-widest font-semibold"

                  animate={{ x: ["0%", "-50%"] }}

                  transition={{ repeat: Infinity, ease: "linear", duration: 15 }}

                >

                  {tickerRoles.map((role, idx) => (

                    <div key={idx} className="flex items-center gap-12">

                      <span>{role}</span>

                      <span className="text-primary">•</span>

                    </div>

                  ))}

                </motion.div>

                <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-background to-transparent z-10"></div>

                <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-background to-transparent z-10"></div>

              </div>

              <div className="space-y-4 text-foreground/80 text-base leading-relaxed mx-auto lg:mx-0">

                <p>Welcome to my data-driven world — where every insight has a purpose.</p>

                <p>

                  I believe every dataset has a story, and I'm here to uncover it. Using Power BI, SQL, Python, and modern analytics tools, I transform raw information into clear, meaningful insights that drive smarter decisions.

                </p>

              </div>

            </div>

            <div className="flex flex-wrap gap-4 mt-4 w-full">

              <div className="flex-1 min-w-[140px] bg-card p-4 rounded-xl border border-border flex flex-col items-center lg:items-start hover:border-primary/50 transition-colors">

                <div className="flex items-center gap-2 mb-1 text-primary">

                  <MapPin size={16} />

                  <span className="text-xs font-semibold uppercase tracking-wider">Location</span>

                </div>

                <p className="text-sm font-medium text-foreground">Bangalore, India</p>

              </div>

              <div className="flex-1 min-w-[140px] bg-card p-4 rounded-xl border border-border flex flex-col items-center lg:items-start hover:border-primary/50 transition-colors">

                <div className="flex items-center gap-2 mb-1 text-primary">

                  <Briefcase size={16} />

                  <span className="text-xs font-semibold uppercase tracking-wider">Expertise</span>

                </div>

                <p className="text-sm font-medium text-foreground">Data Analytics, AI</p>

              </div>

              <div className="flex-[2] min-w-[240px] bg-card p-4 rounded-xl border border-border flex flex-col items-center lg:items-start hover:border-primary/50 transition-colors">

                <div className="flex items-center gap-2 mb-1 text-primary">

                  <Mail size={16} />

                  <span className="text-xs font-semibold uppercase tracking-wider">Email</span>

                </div>

                <p className="text-xs md:text-sm font-medium text-foreground whitespace-nowrap">traghavendrareddy2002@gmail.com</p>

              </div>

            </div>

          </motion.div>

        </div>

        <motion.div

          initial={{ opacity: 0, y: 30 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.8, delay: 0.4 }}

          className="flex flex-col items-center max-w-5xl mx-auto"

        >

          <div className="w-full card-gradient p-8 md:p-10 rounded-3xl border border-primary/20 hover:border-primary/40 transition-all duration-500 mb-12 glow-primary">

            <h3 className="text-xl md:text-2xl font-bold gradient-text mb-8 flex items-center justify-center gap-3">

              <div className="p-2 gradient-primary rounded-lg text-white animate-pulse-glow">

                <Sparkles size={24} />

              </div>

              What I Do

            </h3>

            <ul className="flex flex-col gap-6 max-w-3xl mx-auto">

              {[

                { icon: LayoutDashboard, text: "Build interactive dashboards in Power BI" },

                { icon: Database, text: "Write optimized SQL queries for analytics" },

                { icon: Code, text: "Automate tasks using Python" },

                { icon: Sparkles, text: "Transform raw data into stories and insights" },

                { icon: Lightbulb, text: "Solve business problems with data-driven thinking" }

              ].map((item, i) => (

                <li key={i} className="flex items-center justify-start md:justify-center gap-3 text-foreground/90 group p-2 hover:bg-white/5 rounded-lg transition-colors text-left md:text-center">

                  <item.icon className="text-muted-foreground group-hover:text-primary transition-colors shrink-0" size={24} />

                  <span className="group-hover:text-foreground transition-colors text-xs md:text-lg font-medium">{item.text}</span>

                </li>

              ))}

            </ul>

          </div>

          <div className="flex flex-col items-center gap-6">

            <h3 className="text-xl font-semibold text-foreground flex items-center gap-3">

              Let's Connect

              <div className="h-px w-16 bg-border"></div>

            </h3>

            <div className="flex flex-wrap justify-center gap-4">

              <a href="https://github.com/RaghavendraRe" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-8 py-3 bg-card border border-primary/30 rounded-xl text-foreground hover:gradient-primary hover:text-white hover:border-primary transition-all duration-500 shadow-lg hover:shadow-primary group text-lg hover:scale-105">

                <Github size={22} />

                <span className="font-medium">GitHub</span>

              </a>

              <a href="https://www.linkedin.com/in/raghavendrareddyprofile/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-8 py-3 gradient-primary border border-primary rounded-xl text-white transition-all duration-500 shadow-lg hover:shadow-primary group text-lg hover:scale-105 animate-gradient-shift bg-200%">

                <Linkedin size={22} />

                <span className="font-medium">LinkedIn</span>

              </a>

              <a href="mailto:traghavendrareddy2002@gmail.com" className="flex items-center gap-2 px-8 py-3 bg-card border border-secondary/30 rounded-xl text-foreground hover:gradient-secondary hover:text-white hover:border-secondary transition-all duration-500 shadow-lg hover:shadow-secondary group text-lg hover:scale-105">

                <Mail size={22} />

                <span className="font-medium">Email</span>

              </a>

            </div>

          </div>

        </motion.div>

      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground opacity-50">

        <ArrowDown size={24} />

      </div>

    </section>

  );

};

export default Hero;

