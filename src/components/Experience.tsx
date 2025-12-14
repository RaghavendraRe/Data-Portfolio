import React from 'react';



import SectionHeader from './SectionHeader';

import { Briefcase, Calendar, MapPin, ArrowRight } from 'lucide-react';

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

    <section id="experience" className="py-24 bg-background relative overflow-hidden">

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-primary opacity-10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow"></div>

      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-secondary opacity-10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 relative z-10">

        <SectionHeader

          title="Professional Experience"

          subtitle="My journey in the data analytics landscape."

        />

        <div className="max-w-5xl mx-auto mt-16">

          <div className="relative border-l-2 border-border ml-4 md:ml-3 md:ml-6 pl-8 md:pl-12 py-4 space-y-12">

            {experiences.map((exp, index) => (

              <motion.div

                key={exp.id}

                initial={{ opacity: 0, x: -50 }}

                whileInView={{ opacity: 1, x: 0 }}

                transition={{
                  delay: index * 0.2,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 50
                }}

                viewport={{ once: true, margin: "-100px" }}

                className="relative"

              >

                <div className="absolute -left-[41px] md:-left-[57px] top-0 flex flex-col items-center justify-center">

                  <div className="w-6 h-6 rounded-full bg-background border-4 border-primary glow-primary animate-pulse-glow"></div>

                </div>

                <div className="card-gradient rounded-2xl border border-primary/20 p-1 overflow-hidden group hover:border-primary hover:glow-primary transition-all duration-500">

                  <div className="bg-background/50 p-6 md:p-8 rounded-xl h-full">

                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">

                      <div>

                        <h3 className="text-2xl font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">

                          {exp.role}

                        </h3>

                        <div className="flex items-center gap-2 text-lg font-medium text-secondary">

                          <Briefcase size={18} />

                          <span>{exp.company}</span>

                        </div>

                      </div>

                      <div className="flex flex-col items-start md:items-end gap-1.5 text-sm text-muted-foreground bg-white/5 p-3 rounded-lg border border-white/5">

                        <div className="flex items-center gap-2 text-foreground">

                          <Calendar size={14} className="text-primary" />

                          <span className="font-semibold">{exp.period}</span>

                        </div>

                        <div className="flex items-center gap-2">

                          <MapPin size={14} />

                          <span>{exp.location}</span>

                        </div>

                      </div>

                    </div>

                    <div className="h-px w-full bg-gradient-to-r from-border via-primary/20 to-border mb-6"></div>

                    <ul className="grid grid-cols-1 gap-4">

                      {exp.description.map((item, idx) => (

                        <li key={idx} className="flex items-start gap-3 group/item">

                          <ArrowRight size={16} className="text-primary mt-1.5 shrink-0 group-hover/item:translate-x-1 transition-transform" />

                          <span className="text-foreground/90 leading-relaxed text-[15px]">{item}</span>

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

