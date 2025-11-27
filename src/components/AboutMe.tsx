import React from 'react';
import SectionHeader from './SectionHeader';
import { motion } from 'framer-motion';
import { GraduationCap, BrainCircuit, Sparkles } from 'lucide-react';

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-brand-black relative">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="About Me" 
          subtitle="My journey, education, and what drives me."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Bio */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6 text-brand-text/80 leading-relaxed text-lg"
          >
            <p>
              Hi, I’m <span className="text-white font-semibold">Raghavendra Reddy</span> — a Data & BI professional who loves working with data, solving problems, and building meaningful digital solutions.
            </p>
            <p>
              I’m deeply interested in how data, analytics, and technology can help businesses understand their performance, make better decisions, and improve efficiency. Turning raw data into something clear, useful, and easy to understand is what excites me the most.
            </p>
            <p>
              My journey into data started with curiosity — how numbers tell stories, how dashboards reveal patterns, and how simple reports can support smart decisions. Over time, I learned to work across the full analytics pipeline: from collecting and cleaning data to modelling, analyzing, and presenting it through dashboards and reports.
            </p>
            <p>
              Beyond technical work, I enjoy exploring modern tools, trying new design ideas, and blending clean visuals with strong logic. I like creating solutions that don’t just work — but also feel smooth, simple, and user-friendly.
            </p>
            <p>
              I’m always learning, improving, and staying curious about new technologies like AI tools, automation, and smarter ways to work with data. My goal is to build solutions that make an impact, help people understand information easily, and solve real problems.
            </p>
          </motion.div>

          {/* Right Column: Education & Focus Areas */}
          <div className="space-y-8">
            {/* Education Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-brand-card p-8 rounded-2xl border border-brand-border hover:border-brand-primary/30 transition-colors relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-primary/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-brand-black rounded-lg text-brand-primary">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-xl font-heading font-bold text-white">Education</h3>
              </div>
              
              <h4 className="text-lg font-semibold text-white mb-1">B.Tech in Electronics & Communication Engineering</h4>
              <p className="text-brand-muted">SRM University, Chennai, Tamil Nadu</p>
              <p className="text-sm text-brand-muted mt-2 font-mono">2019 – 2023</p>
            </motion.div>

            {/* What I Work With */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.3 }}
               viewport={{ once: true }}
               className="bg-brand-card p-8 rounded-2xl border border-brand-border hover:border-brand-primary/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-brand-black rounded-lg text-brand-secondary">
                  <BrainCircuit size={24} />
                </div>
                <h3 className="text-xl font-heading font-bold text-white">What I Work With</h3>
              </div>

              <ul className="space-y-3">
                {[
                  "Data Analytics & Reporting",
                  "Power BI Dashboards & Data Visualization",
                  "SQL (Queries, Joins, Data Modelling)",
                  "Excel (Advanced Functions, Automations)",
                  "Python for Data (Pandas, NumPy, Web Scraping)",
                  "ETL Concepts & Data Cleaning",
                  "AI Tools & Automation Experiments"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-brand-text/90">
                    <Sparkles size={16} className="text-brand-primary mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;