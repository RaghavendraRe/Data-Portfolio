import React from 'react';



import SectionHeader from './SectionHeader';

import { motion } from 'framer-motion';

import { Database, FileSpreadsheet, Code2, BarChart3, BrainCircuit, Terminal, GitBranch, Globe } from 'lucide-react';

const skills = [

  { name: 'Power BI', icon: BarChart3, category: 'Tools' },

  { name: 'SQL', icon: Database, category: 'Backend' },

  { name: 'Python', icon: Code2, category: 'Languages' },

  { name: 'Excel', icon: FileSpreadsheet, category: 'Tools' },

  { name: 'DAX', icon: BrainCircuit, category: 'Languages' },

  { name: 'Git', icon: GitBranch, category: 'Tools' },

  { name: 'ETL', icon: Globe, category: 'Backend' },

  { name: 'VBA', icon: Terminal, category: 'Languages' },

];

const Skills: React.FC = () => {

  return (

    <section id="skills" className="py-24 bg-background relative">

      <div className="container mx-auto px-6">

        <SectionHeader

          title="My Skills"

          subtitle="Technical expertise blended with creativity — explore my core competencies below."

        />

        <div className="mt-16 relative">

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-primary opacity-10 rounded-full blur-[120px] animate-pulse-glow"></div>

          <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto relative z-10">

            {skills.map((skill, index) => (

              <motion.div

                key={index}

                initial={{ opacity: 0, y: 30 }}

                whileInView={{ opacity: 1, y: 0 }}

                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 50
                }}

                viewport={{ once: true, margin: "-50px" }}

                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  transition: { type: "spring", stiffness: 300 }
                }}

                className="flex flex-col items-center gap-3 group"

              >

                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full card-gradient border border-primary/20 flex items-center justify-center group-hover:border-primary group-hover:glow-primary transition-all duration-500 group-hover:scale-110">

                  <skill.icon size={32} className="text-muted-foreground group-hover:text-primary transition-colors duration-500" />

                </div>

                <span className="text-sm font-medium text-foreground group-hover:text-foreground transition-colors">

                  {skill.name}

                </span>

              </motion.div>

            ))}

          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">

          {[

            { title: 'Programming Languages', items: ['Python', 'SQL', 'VBA', 'DAX'] },

            { title: 'Tools & Platforms', items: ['Power BI', 'Excel', 'Git', 'Databricks', 'Amplitude'] },

            { title: 'Concepts', items: ['Data Modeling', 'ETL', 'Statistical Analysis', 'Forecasting'] }

          ].map((category, idx) => (

            <motion.div

              key={idx}

              initial={{ opacity: 0, y: 20 }}

              whileInView={{ opacity: 1, y: 0 }}

              transition={{ delay: 0.2 + (idx * 0.1) }}

              className="bg-card border border-primary/20 p-6 rounded-2xl hover:border-primary hover:glow-primary transition-all duration-500"

            >

              <h3 className="text-xl font-heading font-bold text-foreground mb-4">{category.title}</h3>

              <ul className="space-y-2">

                {category.items.map((item, i) => (

                  <li key={i} className="flex items-center gap-2 text-muted-foreground">

                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>

                    {item}

                  </li>

                ))}

              </ul>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );

};

export default Skills;

