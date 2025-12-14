import React, { useState, useEffect } from 'react';



import SectionHeader from './SectionHeader';

import { ExternalLink, Github, Play, X, FolderGit2, Layers } from 'lucide-react';

import { Project } from '../types';

import { motion, AnimatePresence } from 'framer-motion';
import HolographicCard from './HolographicCard';

const projectsData: Project[] = [
  {
    id: 111,
    title: "Dubai Zofeur Full View Dashboard",
    category: "Power BI",
    description: "A comprehensive dashboard for Zofeur services in Dubai, analyzing trip data and customer usage.",
    technologies: ["Power BI", "Service Analytics"],
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop",
    videoUrl: "https://drive.google.com/file/d/1VjUi4mZoKFgN8hRKlNfcS1SJiZYNlGXD/view?usp=sharing"
  },
  {
    id: 110,
    title: "Pharmaceutical Sales & Promotion",
    category: "Power BI",
    description: "Tracking pharmaceutical sales performance and promotional campaign effectiveness.",
    technologies: ["Power BI", "Sales Analytics"],
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&h=600&fit=crop",
    videoUrl: "https://drive.google.com/file/d/1Pr_fozB9GuPY-4C2Z-akEUTypVU2F7s_/view?usp=sharing"
  },
  {
    id: 109,
    title: "Patient Drug Performance and Sentiment Analysis",
    category: "Power BI",
    description: "Evaluating drug efficacy and patient sentiment through data analysis.",
    technologies: ["Power BI", "Sentiment Analysis"],
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&h=600&fit=crop",
    videoUrl: "https://drive.google.com/file/d/1YKuFTaORmDGC3UTZlDTbp5AXEmDo9-DT/view?usp=sharing"
  },
  {
    id: 108,
    title: "Drug Pricing Analysis",
    category: "Power BI",
    description: "Comparative analysis of drug pricing strategies and market trends.",
    technologies: ["Power BI", "Market Analysis"],
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&h=600&fit=crop",
    videoUrl: "https://drive.google.com/file/d/1scz2WQhE6To0v0XIb5VotbBgikDFxVqP/view?usp=sharing"
  },
  {
    id: 107,
    title: "Diabetes Patient Health Risk Analysis",
    category: "Power BI",
    description: "Analyzing patient data to identify risk factors and trends related to diabetes.",
    technologies: ["Power BI", "Health Data"],
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=600&fit=crop",
    videoUrl: "https://drive.google.com/file/d/1bFoLI--Jwlbrj5aS5gW1S4apX9pvi_04/view?usp=sharing"
  },
  {
    id: 106,
    title: "Patient Health Monitor Dashboard",
    category: "Power BI",
    description: "Real-time monitoring of patient health vitals for proactive healthcare management.",
    technologies: ["Power BI", "Healthcare Analytics"],
    image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=800&h=600&fit=crop",
    videoUrl: "https://drive.google.com/file/d/1KudyKhSuTOuz-a4zR4q_FvOf2fMyJ_UO/view?usp=sharing"
  },
  {
    id: 101,
    title: "Logistics Sales Dashboard",
    category: "Power BI",
    description: "A comprehensive dashboard analyzing logistics sales performance, tracking key metrics and revenue trends.",
    technologies: ["Power BI", "Data Analysis"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
    videoUrl: "https://drive.google.com/file/d/1vh2W9YZA5X6TcKLCUERaF7I4qyNojbBz/view?usp=sharing"
  },
  {
    id: 102,
    title: "Logistics Workforce & Delivery Optimization Analysis",
    category: "Power BI",
    description: "Analyzing workforce efficiency and delivery routes to optimize logistics operations and reduce costs.",
    technologies: ["Power BI", "Logistics"],
    image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=800&h=600&fit=crop",
    videoUrl: "https://drive.google.com/file/d/1R8SoAERzyLlvAEwMhyrIDOGGKVyqG-e1/view?usp=sharing"
  },
  {
    id: 103,
    title: "Predicting Delivery Time for Customer Packages",
    category: "Power BI",
    description: "Predictive analysis model to estimate delivery times and improve customer satisfaction.",
    technologies: ["Power BI", "Predictive Analytics"],
    image: "https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=800&h=600&fit=crop",
    videoUrl: "https://drive.google.com/file/d/1Ds_vIrHCwC8hdRGSWeLn_3Gl-1xIxFza/view?usp=sharing"
  },
  {
    id: 104,
    title: "Analysis of Package Returns & Exchanges",
    category: "Power BI",
    description: "In-depth analysis of return reasons and exchange patterns to identify product quality issues.",
    technologies: ["Power BI", "Data Visualization"],
    image: "https://images.unsplash.com/photo-1586528116493-a029325540fa?w=800&h=600&fit=crop",
    videoUrl: "https://drive.google.com/file/d/1_Y1ok-o99cbtVCf8LhwsYAhJN6Z4OIhL/view?usp=sharing"
  },
  {
    id: 105,
    title: "Cold Chain Performance & Risk Analysis",
    category: "Power BI",
    description: "Monitoring temperature-sensitive supply chains to mitigate risks and ensure product integrity.",
    technologies: ["Power BI", "Risk Analysis"],
    image: "https://images.unsplash.com/photo-1585713181935-d5f622cc2415?w=800&h=600&fit=crop",
    videoUrl: "https://drive.google.com/file/d/1lcnndhXPlxsG-1QaoqKv6vguR9Lk5a3O/view?usp=sharing"
  },

  {
    id: 1,
    title: "IMDb Regional Movie Analysis & Interactive Dashboard",
    category: "Power BI",
    description: "A full analytics project where I scraped 600+ Indian regional movies from IMDb using Python and built an interactive Power BI dashboard. The project reveals insights on ratings, revenue patterns, and genre/language preferences.",
    technologies: ["Python (Pandas, Selenium, BeautifulSoup)", "Power BI", "Excel"],
    details: [
      "Scraped movie data (600+ records)",
      "Cleaned, transformed, and analyzed data",
      "Performed EDA to find top insights",
      "Built a multi-page Power BI dashboard",
      "Found patterns in ratings, revenue, genres, languages",
      "Added filters for dynamic exploration",
      "Recorded a full video walkthrough"
    ],
    image: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=800&h=600&fit=crop",
    videoUrl: "https://youtu.be/UMnntnihp7w",
    github: "https://github.com/RaghavendraRe/imdb-movie-analysis",
    featured: true
  },

  {

    id: 2,
    title: "Adidas Marketing Campaign Performance Dashboard",
    category: "Power BI",
    description: "Adidas Marketing Campaign Performance Dashboard\nAn end-to-end analytics project where I analyzed a real marketing campaign dataset and built a clean, interactive Power BI dashboard to uncover sales trends, channel performance, and high-value product segments.",
    technologies: ["Power BI", "DAX", "Excel"],
    details: [
      "Cleaned and prepared raw sales data using Excel",
      "Analyzed sales channels, regions, and product categories",
      "Identified “missing opportunity” areas using data patterns",
      "Found peak sales months through trend analysis",
      "Highlighted top-performing partners like West Gear and Foot Locker",
      "Discovered Men’s Street Footwear as the highest-performing segment",
      "Built an interactive Power BI dashboard for business decision-making",
      "Created DAX measures for KPIs such as ROI, Operating Profit, Growth, and Category Performance",
      "Designed visuals to clearly communicate insights",
      "Recorded a full video walkthrough explaining the dashboard"
    ],
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&h=600&fit=crop",
    videoUrl: "https://youtu.be/J2We55qEnH4",
    github: "https://github.com/RaghavendraRe/Adidas-Marketing-Campaign",
    featured: true

  },

  {
    id: 3,
    title: "Healthcare Claims Accuracy & Reporting System (VBA + Access)",
    category: "Excel & VBA",
    description: "Healthcare Claims Accuracy & Reporting System\nA Microsoft Access application designed to manage and analyze healthcare insurance claims with automated forms, SQL-based reports, and VBA-enhanced navigation.",
    technologies: ["MS Access", "VBA"],
    details: [
      "Designed relational tables for Doctors, Departments, Patients, and Claims",
      "Created lookup fields, primary keys, and referential integrity rules",
      "Built automated forms for smooth data entry and user navigation",
      "Created SQL queries to summarize claim data by doctor, department, and type",
      "Developed custom Access reports for claims analysis",
      "Used VBA to build a main menu dashboard with buttons for form/report navigation",
      "Uploaded full Access .accdb file, screenshots, and documentation on GitHub",
      "Added a video walkthrough demonstrating system workflow"
    ],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    videoUrl: "https://youtu.be/XKF9MwFjxJ4",
    github: "https://github.com/RaghavendraRe/Healthcare-Claims-Accuracy-Reporting-Application"
  },



  {

    id: 5,
    title: "Grocery Store Management Database Project",
    category: "Python & SQL",
    description: "A complete SQL database system designed for a grocery store to manage customers, suppliers, products, orders, and employees. This project focuses on building a clean relational structure, improving data integrity, and generating business insights through SQL queries.",
    technologies: ["SQL", "Database Design", "RDBMS"],
    details: [
      "Designed a 7-table relational database to manage store operations",
      "Created relationships using primary & foreign keys with cascading updates/deletes",
      "Wrote complex SQL queries for insights such as:",
      "Top 10% customers contributing to major sales",
      "Peak sales days for staff scheduling",
      "Supplier performance analysis",
      "Employee sales contributions",
      "Built a clear ER diagram to visualize relationships",
      "Ensured high data accuracy with constraints and referential integrity",
      "Optimized tables for real-world business use cases"
    ],
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=600&fit=crop",
    link: "https://github.com/RaghavendraRe/Grocery-Store-SQL-Project/blob/main/Grocery-Store-Management.pdf",
    github: "https://github.com/RaghavendraRe/Grocery-Store-SQL-Project"
  },

  {

    id: 6,
    title: "Movie Data Scraper & Insights Generator",
    category: "Python & SQL",
    description: "A Python-based movie scraper that collects real-time film data from the web and transforms it into meaningful insights.",
    technologies: ["Python", "Requests / BeautifulSoup4 / Selenium", "Pandas", "CSV Export / Data Cleaning"],
    details: [
      "Built a Python script to scrape movie details from the web (IMDb-like platforms)",
      "Extracted key attributes such as title, rating, votes, genre, release year, and duration",
      "Cleaned and transformed the scraped data into a usable table format",
      "Handled pagination, missing values, inconsistent entries, and text formatting",
      "Exported the data into CSV for easy use in Excel, Power BI, or Python EDA",
      "Added error handling and throttling to avoid scraping failures",
      "Documented all steps and made the scraper reusable for future datasets"
    ],
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=600&fit=crop",
    github: "https://github.com/RaghavendraRe/imdb-movie-analysis/tree/main/Notebooks"
  },

  {

    id: 7,
    title: "Digital Marketing Campaign Performance Tracker (Excel)",
    category: "Excel & VBA",
    description: "An Excel dashboard analyzing marketing KPIs across platforms such as Facebook, Instagram, and Google Ads.",
    technologies: ["Excel", "PivotTables", "Charts"],
    details: [
      "Created KPI formulas (CTR, ROI, Conversion Rate)",
      "Designed interactive charts + slicers",
      "Identified high-performing campaigns",
      "Built visually clean reporting dashboard"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    github: "https://github.com/RaghavendraRe/Digital-Marketing-Campaign-Excel-"
  }

];

const categories = ["All", "Power BI", "Python & SQL", "Excel & VBA"];

const Projects: React.FC = () => {

  const [activeCategory, setActiveCategory] = useState("All");

  const [visibleCount, setVisibleCount] = useState(6);

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projectsData.filter(project =>

    activeCategory === "All" ? true : project.category === activeCategory

  );



  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (

    <section id="projects" className="py-24 bg-background relative">

      <div className="container mx-auto px-6">

        <SectionHeader

          title="Featured Projects"

          subtitle="A showcase of data storytelling, automation, and analytics."

        />

        <div className="flex flex-wrap justify-center gap-3 mb-12">

          {categories.map((cat) => (

            <button

              key={cat}

              onClick={() => {

                setActiveCategory(cat);

                setVisibleCount(6);

              }}

              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-500 border ${activeCategory === cat

                ? "gradient-primary text-white border-primary glow-primary"

                : "bg-transparent text-muted-foreground border-border hover:border-primary hover:text-foreground"

                }`}

            >

              {cat}

            </button>

          ))}

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <AnimatePresence mode='popLayout'>



            {filteredProjects.slice(0, visibleCount).map((project, index) => (

              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                className="h-full" // Removed previous styling classes as they will move to inner div or be managed by HolographicCard wrapper context if needed, but here we wrap the card
              >
                <HolographicCard className="h-full">
                  <div className="group card-gradient rounded-2xl overflow-hidden border border-primary/20 hover:border-primary hover:glow-primary transition-all duration-500 flex flex-col h-full bg-card"> {/* Moved classes here and ensured bg is set */}

                    {/* ... Card Content ... */}
                    <div className="relative h-56 overflow-hidden shrink-0 cursor-pointer" onClick={() => setSelectedProject(project)}>
                      {/* ... image content ... */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                      <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-primary border border-primary/20 flex items-center gap-2">
                        <Layers size={12} />
                        {project.category}
                      </div>
                      {project.videoUrl && (
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-14 h-14 bg-primary/90 rounded-full flex items-center justify-center text-primary-foreground shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                            <Play fill="currentColor" size={24} className="ml-1" />
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 mb-3">
                        <FolderGit2 size={18} className="text-primary" />
                        <h3 className="text-xl font-heading font-semibold text-foreground group-hover:text-primary transition-colors cursor-pointer" onClick={() => setSelectedProject(project)}>
                          {project.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground text-sm mb-6 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="text-[10px] px-2 py-1 rounded bg-white/5 text-muted-foreground border border-white/5 font-mono">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4 pt-4 border-t border-border">
                        {project.videoUrl && (
                          <button onClick={() => setSelectedProject(project)} className="flex items-center gap-2 text-sm font-bold text-primary hover:text-foreground transition-colors">
                            <Play size={14} />
                            Watch Demo
                          </button>
                        )}
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors ml-auto">
                            <Github className="w-4 h-4" />
                            Code
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </HolographicCard>
              </motion.div>

            ))}

          </AnimatePresence>

        </div>

        {filteredProjects.length > visibleCount && (

          <div className="mt-12 text-center">

            <button onClick={() => setVisibleCount(prev => prev + 3)} className="px-8 py-3 bg-card border border-border text-foreground rounded-full hover:border-primary hover:text-primary transition-all duration-300">

              Show More Projects

            </button>
          </div>
        )}

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-card w-full max-w-4xl max-h-[90vh] rounded-2xl border border-border overflow-y-auto relative shadow-2xl"
                onClick={e => e.stopPropagation()}
              >
                <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                  <X size={24} />
                </button>

                <div className="flex flex-col">
                  <div className="w-full aspect-video bg-black">
                    {selectedProject.videoUrl ? (
                      <iframe
                        width="100%"
                        height="100%"
                        src={(() => {
                          const url = selectedProject.videoUrl;
                          if (url.includes('youtu.be') || url.includes('youtube.com')) {
                            const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
                            const match = url.match(regExp);
                            return (match && match[2].length === 11) ? `https://www.youtube.com/embed/${match[2]}?autoplay=1` : "";
                          } else if (url.includes('drive.google.com')) {
                            return url.replace('/view', '/preview');
                          }
                          return "";
                        })()}
                        title={selectedProject.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                    )}
                  </div>

                  <div className="p-5 md:p-8">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-primary uppercase tracking-widest">{selectedProject.category}</span>
                      <div className="h-px flex-1 bg-border"></div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">{selectedProject.title}</h3>
                    <p className="text-foreground/80 leading-relaxed mb-6">{selectedProject.description}</p>

                    {selectedProject.details && (
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-3 text-foreground">What I Did</h4>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                          {selectedProject.details.map((detail, index) => (
                            <li key={index}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-4">
                      {selectedProject.github && (
                        <a href={selectedProject.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-2 bg-border/50 rounded-lg text-foreground hover:bg-foreground hover:text-background transition-colors">
                          <Github size={18} />
                          View Code
                        </a>
                      )}
                      {selectedProject.link && (
                        <a href={selectedProject.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                          <ExternalLink size={18} />
                          View Presentation
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Projects;

