import React from 'react';
import SectionHeader from './SectionHeader';
import { ExternalLink, Github, FolderGit2 } from 'lucide-react';
import { Project } from '../types';
import { motion } from 'framer-motion';

const projects: Project[] = [
  {
    id: 1,
    title: "IMDb Regional Movie Analysis",
    category: "Python & Power BI",
    description: "Scraped 600+ movie records using Python and engineered an interactive dashboard. Uncovered key market insights showing Malayalam films achieved highest ratings.",
    technologies: ["Python", "Power BI", "Pandas", "Excel"],
    image: "https://picsum.photos/seed/movie/600/400",
    github: "https://github.com/RaghavendraRe"
  },
  {
    id: 2,
    title: "Adidas Marketing Campaign",
    category: "Power BI & Analytics",
    description: "Analyzed sales outcomes to identify 'missing opportunity' areas. Performed trend analysis to pinpoint peak sales months and top product segments.",
    technologies: ["Power BI", "DAX", "Excel"],
    image: "https://picsum.photos/seed/sports/600/400"
  },
  {
    id: 3,
    title: "Grocery Store DB Management",
    category: "SQL & Database Design",
    description: "Built a relational database system with 7 interconnected tables. Optimized employee scheduling by identifying top 10% of customers and peak sales days.",
    technologies: ["SQL", "ER Diagrams", "RDBMS"],
    image: "https://picsum.photos/seed/grocery/600/400"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-brand-black">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="Featured Projects" 
          subtitle="Real-world applications of data analysis and automation."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-brand-card rounded-2xl overflow-hidden border border-brand-border hover:border-brand-primary/50 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-52 overflow-hidden shrink-0">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-card to-transparent opacity-80"></div>
                <div className="absolute top-4 right-4 bg-brand-black/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-brand-primary border border-brand-primary/20">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-3">
                   <FolderGit2 size={18} className="text-brand-primary" />
                   <h3 className="text-xl font-heading font-semibold text-white group-hover:text-brand-primary transition-colors">
                    {project.title}
                   </h3>
                </div>
                
                <p className="text-brand-muted text-sm mb-6 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 rounded bg-white/5 text-gray-300 border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 pt-4 border-t border-brand-border">
                  <a href={project.github || "#"} className="flex items-center gap-2 text-sm font-medium text-white hover:text-brand-primary transition-colors">
                    <Github className="w-4 h-4" /> View Code
                  </a>
                  {project.link && (
                    <button className="flex items-center gap-2 text-sm font-medium text-white hover:text-brand-primary transition-colors">
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;