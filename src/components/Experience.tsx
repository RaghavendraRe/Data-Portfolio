import React from 'react';
import SectionHeader from './SectionHeader';
import { Briefcase, Calendar, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { ExperienceItem } from '../types';
import { motion } from 'framer-motion';

const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: "Data Analyst",
    company: "Red Switch Global",
    location: "Bangalore, India",
    period: "May 2025 – Present",
    description: [
      "Built interactive Power BI dashboards using real business datasets to deliver decision-making insights.",
      "Cleaned, prepared, and transformed raw data using Power Query, SQL, and Excel.",
      "Collaborated with the Data Science team on case studies and predictive forecasting models.",
      "Extracted business insights using KPIs like ROI, YOY Growth, Sales Forecast, and Profit Margin.",
      "Developed domain-specific dashboards across Sales, Healthcare, Pharmaceuticals, Logistics, and Supply Chain.",
      "Followed end-to-end BI lifecycle: Dataset understanding → Cleaning → Data modeling → DAX → Dashboard design → Publishing."
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-brand-black relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader 
          title="Professional Experience" 
          subtitle="My journey in the data analytics landscape."
        />
        
        <div className="max-w-5xl mx-auto mt-16">
          <div className="relative border-l-2 border-brand-border ml-3 md:ml-6 pl-8 md:pl-12 py-4 space-y-12">
            
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[41px] md:-left-[57px] top-0 flex flex-col items-center justify-center">
                   <div className="w-6 h-6 rounded-full bg-brand-black border-4 border-brand-primary shadow-[0_0_10px_rgba(0,194,255,0.4)]"></div>
                </div>

                {/* Experience Card */}
                <div className="bg-brand-card rounded-2xl border border-brand-border p-1 overflow-hidden group hover:border-brand-primary/40 transition-colors duration-300">
                  <div className="bg-brand-black/50 p-6 md:p-8 rounded-xl h-full">
                    
                    {/* Header: Role & Company */}
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                      <div>
                        <h3 className="text-2xl font-heading font-bold text-white mb-2 group-hover:text-brand-primary transition-colors">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-lg font-medium text-brand-secondary">
                          <Briefcase size={18} />
                          <span>{exp.company}</span>
                        </div>
                      </div>

                      <div className="flex flex-col items-start md:items-end gap-1.5 text-sm text-brand-muted bg-white/5 p-3 rounded-lg border border-white/5">
                        <div className="flex items-center gap-2 text-brand-text">
                          <Calendar size={14} className="text-brand-primary" />
                          <span className="font-semibold">{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px w-full bg-gradient-to-r from-brand-border via-brand-primary/20 to-brand-border mb-6"></div>

                    {/* Description List */}
                    <ul className="grid grid-cols-1 gap-4">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 group/item">
                          <ArrowRight size={16} className="text-brand-primary mt-1.5 shrink-0 group-hover/item:translate-x-1 transition-transform" />
                          <span className="text-brand-text/90 leading-relaxed text-[15px]">{item}</span>
                        </li>
                      ))}
                    </ul>

                  </div>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;