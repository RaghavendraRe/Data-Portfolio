import React from 'react';



import SectionHeader from './SectionHeader';

import { Mail, MapPin, Send, Linkedin, Phone } from 'lucide-react';

const Contact: React.FC = () => {

  return (

    <section id="contact" className="py-24 relative bg-muted border-t border-border">

      <div className="container mx-auto px-6">

        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            Get In Touch
            <span className="text-accent">.</span>
          </h2>
          <div className="h-1 w-20 bg-accent rounded-full mb-4 mx-auto"></div>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed mx-auto pl-8">
            Let's build something amazing together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 card-gradient p-6 md:p-12 rounded-3xl border border-primary/20 glow-primary">

          <div className="flex flex-col justify-center space-y-8">

            <div>

              <h3 className="text-2xl font-heading font-bold text-foreground mb-2">Connect</h3>

              <p className="text-muted-foreground">

                I am available for Data Analyst roles. Feel free to reach out for collaborations.

              </p>

            </div>

            <div className="space-y-6">

              <div className="flex items-center gap-4 group">

                <div className="w-12 h-12 bg-background border border-border rounded-xl flex items-center justify-center text-primary group-hover:border-primary transition-colors">

                  <MapPin size={20} />

                </div>

                <div>

                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Location</p>

                  <p className="text-foreground font-medium">Bangalore, India</p>

                </div>

              </div>

              <div className="flex items-center gap-4 group">

                <div className="w-12 h-12 bg-background border border-border rounded-xl flex items-center justify-center text-primary group-hover:border-primary transition-colors">

                  <Mail size={20} />

                </div>

                <div>

                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Email</p>

                  <a

                    href="mailto:traghavendrareddy2002@gmail.com"

                    className="text-foreground font-medium hover:text-primary transition-colors"

                  >

                    traghavendrareddy2002@gmail.com

                  </a>

                </div>

              </div>

              <div className="flex items-center gap-4 group">

                <div className="w-12 h-12 bg-background border border-border rounded-xl flex items-center justify-center text-primary group-hover:border-primary transition-colors">

                  <Phone size={20} />

                </div>

                <div>

                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Phone</p>

                  <a

                    href="tel:+918008370049"

                    className="text-foreground font-medium hover:text-primary transition-colors"

                  >

                    +91 8008370049

                  </a>

                </div>

              </div>

            </div>

          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>

            <div className="space-y-1">

              <label className="text-xs font-medium text-muted-foreground uppercase">Name</label>

              <input

                type="text"

                className="w-full bg-background border border-border rounded-lg p-3 text-foreground focus:outline-none focus:border-primary transition-colors placeholder-muted-foreground"

                placeholder="Your Name"

              />

            </div>

            <div className="space-y-1">

              <label className="text-xs font-medium text-muted-foreground uppercase">Email</label>

              <input

                type="email"

                className="w-full bg-background border border-border rounded-lg p-3 text-foreground focus:outline-none focus:border-primary transition-colors placeholder-muted-foreground"

                placeholder="email@example.com"

              />

            </div>

            <div className="space-y-1">

              <label className="text-xs font-medium text-muted-foreground uppercase">Message</label>

              <textarea

                rows={4}

                className="w-full bg-background border border-border rounded-lg p-3 text-foreground focus:outline-none focus:border-primary transition-colors placeholder-muted-foreground"

                placeholder="Let's discuss..."

              ></textarea>

            </div>

            <button className="w-full py-3 gradient-primary text-white font-bold rounded-lg hover:scale-105 transition-all duration-500 flex items-center justify-center gap-2 glow-primary">

              <Send size={18} />

              Send Message

            </button>

          </form>

        </div>

      </div>

    </section>

  );

};

export default Contact;

