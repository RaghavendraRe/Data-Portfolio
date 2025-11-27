import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className="bg-brand-black min-h-screen text-brand-text">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <AboutMe />
        <Contact />
      </main>
      
      <footer className="py-8 text-center text-brand-muted text-sm bg-brand-black border-t border-brand-border">
        <p>© {new Date().getFullYear()} Raghavendra Reddy. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
}

export default App;