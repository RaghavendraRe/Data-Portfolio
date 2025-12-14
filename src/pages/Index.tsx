import React from 'react';



import Navbar from '@/components/Navbar';

import Hero from '@/components/Hero';

import Projects from '@/components/Projects';

import Skills from '@/components/Skills';

import Contact from '@/components/Contact';

import Experience from '@/components/Experience';

import Certificates from '@/components/Certificates';

import AboutMe from '@/components/AboutMe';
import Resume from '@/components/Resume';

const Index = () => {

  return (

    <div className="bg-background min-h-screen text-foreground">

      <Navbar />

      <main>

        <Hero />

        <Skills />

        <Experience />

        <Projects />

        <Certificates />

        <AboutMe />

        <Resume />

        <Contact />

      </main>

      <footer className="py-8 text-center text-muted-foreground text-sm bg-background border-t border-border">

        <p>© {new Date().getFullYear()} Raghavendra Reddy. Built with React & Tailwind.</p>

      </footer>

    </div>

  );

};

export default Index;

