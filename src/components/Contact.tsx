import React from 'react';
import SectionHeader from './SectionHeader';
import { Mail, MapPin, Send, Phone, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative bg-brand-dark border-t border-brand-border">
      <div className="container mx-auto px-6">
        <SectionHeader title="Get In Touch" subtitle="Let's build something amazing together." centered />

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-brand-card p-8 md:p-12 rounded-3xl border border-brand-border">
          
          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
             <div>
                <h3 className="text-2xl font-heading font-bold text-white mb-2">Connect</h3>
                <p className="text-brand-muted">
                  I am available for Data Analyst roles. Feel free to reach out for collaborations.
                </p>
             </div>

             <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-brand-black border border-brand-border rounded-xl flex items-center justify-center text-brand-primary group-hover:border-brand-primary transition-colors">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-brand-muted uppercase tracking-wider">Location</p>
                    <p className="text-white font-medium">Bangalore, India</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-brand-black border border-brand-border rounded-xl flex items-center justify-center text-brand-primary group-hover:border-brand-primary transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-brand-muted uppercase tracking-wider">Email</p>
                    <a href="mailto:traghavendrareddy2002@gmail.com" className="text-white font-medium hover:text-brand-primary transition-colors">
                      traghavendrareddy2002@gmail.com
                    </a>
                  </div>
                </div>
             </div>
             
             <div className="flex gap-4 pt-4">
               <a href="#" className="p-3 bg-brand-black rounded-lg text-gray-400 hover:text-white hover:bg-brand-primary hover:text-black transition-all">
                  <Linkedin size={20} />
               </a>
             </div>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1">
              <label className="text-xs font-medium text-brand-muted uppercase">Name</label>
              <input 
                type="text" 
                className="w-full bg-brand-black border border-brand-border rounded-lg p-3 text-white focus:outline-none focus:border-brand-primary transition-colors placeholder-gray-700"
                placeholder="Your Name"
              />
            </div>
            
            <div className="space-y-1">
              <label className="text-xs font-medium text-brand-muted uppercase">Email</label>
              <input 
                type="email" 
                className="w-full bg-brand-black border border-brand-border rounded-lg p-3 text-white focus:outline-none focus:border-brand-primary transition-colors placeholder-gray-700"
                placeholder="email@example.com"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-brand-muted uppercase">Message</label>
              <textarea 
                rows={4}
                className="w-full bg-brand-black border border-brand-border rounded-lg p-3 text-white focus:outline-none focus:border-brand-primary transition-colors placeholder-gray-700"
                placeholder="Let's discuss..."
              ></textarea>
            </div>

            <button className="w-full py-3 bg-brand-primary text-black font-bold rounded-lg hover:bg-white transition-colors flex items-center justify-center gap-2">
              <Send size={18} /> Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;