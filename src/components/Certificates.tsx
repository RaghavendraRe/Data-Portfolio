import React from 'react';
import SectionHeader from './SectionHeader';
import { ExternalLink, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const certificates = [
  {
    id: 1,
    title: "Advanced Data Science with Python",
    issuer: "NASSCOM",
    image: "https://picsum.photos/seed/nasscom/600/400"
  },
  {
    id: 2,
    title: "SQL Certification",
    issuer: "HackerRank",
    image: "https://picsum.photos/seed/sqlcert/600/400"
  },
  {
    id: 3,
    title: "Power BI Data Analyst Associate",
    issuer: "Microsoft (In Progress)",
    image: "https://picsum.photos/seed/powerbi/600/400"
  }
];

const Certificates: React.FC = () => {
  return (
    <section id="certificates" className="py-24 bg-brand-dark">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="Certificates" 
          subtitle="Explore my certifications — technical & others."
        />

        <div className="flex gap-4 mb-8">
           <button className="px-6 py-2 rounded-lg bg-brand-primary text-black font-semibold text-sm">Tech</button>
           <button className="px-6 py-2 rounded-lg bg-brand-card text-brand-muted font-semibold text-sm hover:text-white transition-colors">Others</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-brand-card rounded-2xl overflow-hidden border border-brand-border group hover:border-brand-primary/50 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden bg-white/5 p-4 flex items-center justify-center">
                 <img src={cert.image} alt={cert.title} className="w-full h-full object-cover rounded-lg opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-brand-primary transition-colors">{cert.title}</h3>
                <p className="text-sm text-brand-muted mb-6">{cert.issuer}</p>
                
                <button className="px-4 py-2 bg-brand-primary text-black text-sm font-bold rounded-lg flex items-center gap-2 hover:bg-white transition-colors">
                  <ExternalLink size={14} /> View
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;