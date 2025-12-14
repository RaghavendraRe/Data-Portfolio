import React from 'react';
import SectionHeader from './SectionHeader';
import { Download, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Resume: React.FC = () => {
    const resumePreviewUrl = "https://drive.google.com/file/d/1zztXMSDiey7jUW_OdCAXUIKBZV9nUB6-/preview";
    const resumeDownloadUrl = "https://drive.google.com/file/d/1zztXMSDiey7jUW_OdCAXUIKBZV9nUB6-/view?usp=sharing";

    return (
        <section id="resume" className="py-24 bg-background relative">
            <div className="container mx-auto px-6">
                <SectionHeader
                    title="Resume"
                    subtitle="A detailed look at my professional journey and qualifications."
                />

                <div className="max-w-5xl mx-auto mt-12 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="w-full h-[800px] md:h-screen rounded-2xl overflow-hidden border border-primary/20 shadow-[0_0_30px_rgba(139,92,246,0.1)] card-gradient"
                    >
                        <iframe
                            src={resumePreviewUrl}
                            width="100%"
                            height="100%"
                            className="w-full h-full border-0"
                            allow="autoplay"
                            title="Resume Preview"
                        ></iframe>
                    </motion.div>

                    <div className="flex justify-center gap-6 mt-8">
                        <a
                            href={resumeDownloadUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 px-8 py-3 gradient-primary text-white font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary group"
                        >
                            <Download size={20} className="group-hover:animate-bounce" />
                            Download Resume
                        </a>
                        <a
                            href={resumeDownloadUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 px-8 py-3 bg-card border border-border text-foreground font-medium rounded-xl hover:border-primary hover:text-primary transition-all duration-300"
                        >
                            <ExternalLink size={20} />
                            Open in New Tab
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
