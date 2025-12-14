import React, { useState, useEffect } from 'react';



import { Menu, X } from 'lucide-react';

import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {

  const [isOpen, setIsOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 20);

    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, []);

  const navLinks = [

    { name: 'Home', href: '#home' },

    { name: 'Skills', href: '#skills' },

    { name: 'Experience', href: '#experience' },

    { name: 'Projects', href: '#projects' },

    { name: 'Certificates', href: '#certificates' },

    { name: 'About', href: '#about' },

    { name: 'Resume', href: '#resume' },

    { name: 'Contact', href: '#contact' },

  ];

  return (

    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-md py-4 border-b border-border' : 'bg-transparent py-6'}`}>

      <div className="container mx-auto px-6 flex justify-between items-center">

        <div className="flex items-center gap-2">

          <span className="text-2xl font-bold font-heading text-primary">RR</span>

          <div className="hidden sm:block border-l border-border pl-3 ml-1">

            <h1 className="text-foreground text-sm font-semibold leading-none">Raghavendra</h1>

            <p className="text-[10px] text-muted-foreground uppercase tracking-wider mt-1">Data Analyst</p>

          </div>

        </div>

        <div className="hidden lg:flex items-center gap-8">

          {navLinks.map((link) => (

            <a

              key={link.name}

              href={link.href}

              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"

            >

              {link.name}

              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>

            </a>

          ))}

        </div>

        <button

          className="lg:hidden text-foreground hover:text-primary transition-colors"

          onClick={() => setIsOpen(!isOpen)}

        >

          {isOpen ? <X size={28} /> : <Menu size={28} />}

        </button>

      </div>

      <AnimatePresence>

        {isOpen && (

          <motion.div

            initial={{ opacity: 0, height: 0 }}

            animate={{ opacity: 1, height: '100vh' }}

            exit={{ opacity: 0, height: 0 }}

            className="lg:hidden fixed top-[70px] left-0 w-full bg-background z-40 overflow-hidden"

          >

            <div className="flex flex-col items-center justify-center h-full gap-8">

              {navLinks.map((link) => (

                <a

                  key={link.name}

                  href={link.href}

                  className="text-2xl font-medium text-muted-foreground hover:text-primary transition-colors"

                  onClick={() => setIsOpen(false)}

                >

                  {link.name}

                </a>

              ))}

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </nav>

  );

};

export default Navbar;

