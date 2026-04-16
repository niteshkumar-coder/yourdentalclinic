import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Star, 
  Shield, 
  Award, 
  CheckCircle2, 
  Instagram, 
  Facebook, 
  Twitter, 
  MessageCircle, 
  ArrowRight,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import BookingForm from './components/BookingForm';
import AdminDashboard from './components/AdminDashboard';
import { CLINIC_INFO, REVIEWS, GALLERY } from './constants';

// Error Boundary Component
export default function App() {
  const [isAdminView, setIsAdminView] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setIsAdminView(window.location.hash === '#admin');
    };
    window.addEventListener('hashchange', handleHashChange);
    // Removed the initial handleHashChange() call to prevent persisting admin view on refresh
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (isAdminView) {
    return (
      <AdminDashboard />
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      
      <main>
        <Hero />

        {/* Features Bar */}
        <section className="relative z-20 -mt-12 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: "Sterilized Care", desc: "International safety protocols" },
              { icon: Award, title: "Expert Doctors", desc: "Highly qualified specialists" },
              { icon: Clock, title: "Modern Tech", desc: "Advanced painless dentistry" }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-3xl shadow-card border border-[#EDF2F7] flex items-center gap-5"
              >
                <div className="w-12 h-12 bg-secondary text-primary rounded-2xl flex items-center justify-center shrink-0">
                  <feature.icon size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-text-dark">{feature.title}</h4>
                  <p className="text-sm text-text-light">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative z-10 rounded-[24px] overflow-hidden shadow-card border border-[#EDF2F7]">
                  <img 
                    src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1000" 
                    alt="Clinic Interior" 
                    className="w-full h-auto"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary rounded-[24px] -z-10 hidden md:block"></div>
                
                <div className="absolute bottom-10 left-10 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-card border border-white/50 max-w-xs">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center">
                      <Star size={20} fill="currentColor" />
                    </div>
                    <span className="font-bold text-text-dark">5.0 Rating</span>
                  </div>
                  <p className="text-sm text-text-light">"Dr Aryan treated me so well. Truly the best dentist in town."</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">About the Clinic</h2>
                <h3 className="text-4xl font-extrabold text-text-dark mb-6 leading-tight">
                  Modern Dentistry with a <span className="text-primary">Personal Touch</span> in Patna
                </h3>
                <p className="text-text-light text-lg mb-8 leading-relaxed">
                  Welcome to <strong>{CLINIC_INFO.fullName}</strong>, your destination for premium dental care in Patliputra, Patna. We believe that a healthy smile is a beautiful smile.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  {[
                    "Modern Equipment",
                    "Pain-minimized Treatment",
                    "Hygiene & Sterilization",
                    "Personalized Care Plans",
                    "Affordable Advanced Care",
                    "Comfortable Environment"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-text-dark font-medium">
                      <CheckCircle2 className="text-primary" size={20} />
                      {item}
                    </div>
                  ))}
                </div>

                <a href="#book" className="btn-primary">
                  Experience the difference
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Doctor Section */}
        <section className="py-16 bg-primary text-white">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-secondary font-bold uppercase tracking-widest text-[12px] mb-2">Meet the Expert</h2>
                <h3 className="text-3xl md:text-4xl font-extrabold mb-4">{CLINIC_INFO.doctorName}</h3>
                <p className="text-secondary text-lg font-medium mb-6">
                  {CLINIC_INFO.doctorTitle}
                </p>
                <p className="text-white/80 text-base mb-8 leading-relaxed">
                  With years of experience in aesthetic and restorative dentistry, Dr. Aryan Parmar is committed to transforming smiles and improving oral health.
                </p>
                
                <a 
                  href="#book" 
                  className="bg-white text-primary px-6 py-3 rounded-full font-bold text-base hover:bg-secondary transition-all shadow-xl flex items-center justify-center md:inline-flex gap-2"
                >
                  Book Appointment with Dr. Aryan
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative flex justify-center lg:justify-end"
              >
                <div className="max-w-[380px] w-full rounded-[20px] overflow-hidden border-4 border-white/10 bg-white/5">
                  <img 
                    src="https://i.ibb.co/BJSvTKY/f6b4d2b9-5335-4e2b-827f-d8325c936085.jpg" 
                    alt="Dr. Aryan Parmar" 
                    className="w-full h-auto block brightness-110 contrast-[1.05]"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Services />

        {/* Reviews Section */}
        <section id="reviews" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
              <div>
                <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Patient Stories</h2>
                <h3 className="text-4xl font-extrabold text-text-dark">What Our Patients Say</h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {REVIEWS.map((review, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-bg-soft p-8 rounded-3xl border border-[#EDF2F7] shadow-card"
                >
                  <div className="flex text-[#F6AD55] mb-4">
                    {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-text-dark mb-6 italic">"{review.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-secondary text-primary rounded-full flex items-center justify-center font-bold">
                      {review.name[0]}
                    </div>
                    <div>
                      <div className="font-bold text-text-dark">{review.name}</div>
                      <div className="text-xs text-text-light">{review.date}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <button className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-bold hover:bg-black transition-all shadow-lg">
                View All Reviews on Google <ExternalLink size={18} />
              </button>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-24 bg-bg-soft">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Our Gallery</h2>
              <h3 className="text-4xl font-extrabold text-text-dark">Smile Transformations</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {GALLERY.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className="group relative aspect-square rounded-[24px] overflow-hidden shadow-card"
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <p className="text-white font-bold">{item.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <BookingForm />

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Get in Touch</h2>
                <h3 className="text-4xl font-extrabold text-text-dark mb-8">Visit Our Clinic</h3>
                
                <div className="space-y-8">
                  <div className="flex gap-5">
                    <div className="w-12 h-12 bg-secondary text-primary rounded-2xl flex items-center justify-center shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-text-dark mb-1">Location</h4>
                      <p className="text-text-light leading-relaxed">{CLINIC_INFO.address}</p>
                      <a href="https://maps.google.com" target="_blank" className="text-primary font-bold text-sm mt-2 inline-flex items-center gap-1">
                        Get Directions <ChevronRight size={14} />
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex gap-5">
                    <div className="w-12 h-12 bg-secondary text-primary rounded-2xl flex items-center justify-center shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-text-dark mb-1">Phone</h4>
                      <p className="text-text-light">{CLINIC_INFO.phone}</p>
                      <p className="text-primary font-bold text-sm mt-1">{CLINIC_INFO.status}</p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="w-12 h-12 bg-secondary text-primary rounded-2xl flex items-center justify-center shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-text-dark mb-1">Working Hours</h4>
                      <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-text-light text-sm">
                        <span>Mon - Sat:</span> <span className="font-medium">10:00 AM - 08:00 PM</span>
                        <span>Sunday:</span> <span className="font-medium text-red-500">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[24px] overflow-hidden shadow-card border border-[#EDF2F7] h-[400px] lg:h-auto">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.555621447069!2d85.106517!3d25.619717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed582666666667%3A0x0!2zMjXCsDM3JzExLjAiTiA4NcKwMDYnMjMuNSJF!5e0!3m2!1sen!2sin!4v1713264000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-bg-soft text-text-dark pt-20 pb-10 border-t border-[#EDF2F7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <img 
                  src="https://i.ibb.co/Y7nDkTjZ/6e5d4ab0-f303-4add-bcf0-4da2e3b24718-removebg-preview.png" 
                  alt="YOUR DENTIST Logo" 
                  className="w-10 h-10 object-contain"
                  referrerPolicy="no-referrer"
                />
                <h2 className="text-2xl font-extrabold tracking-tighter text-primary">{CLINIC_INFO.displayName}</h2>
              </div>
              <p className="text-text-light mb-6 leading-relaxed">
                Premium aesthetic and dental clinic in Patna providing world-class dental care with advanced technology.
              </p>
              <div className="flex gap-4">
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 bg-white border border-[#EDF2F7] rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-4 text-text-light">
                {['Home', 'About', 'Services', 'Reviews', 'Contact'].map(link => (
                  <li key={link}><a href={`#${link.toLowerCase()}`} className="hover:text-primary transition-colors">{link}</a></li>
                ))}
                <li><button onClick={() => setIsAdminView(true)} className="hover:text-primary transition-colors cursor-pointer text-left w-full">Admin Login</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Services</h4>
              <ul className="space-y-4 text-text-light">
                {['Dental Implants', 'Aligners', 'Root Canal', 'Braces', 'Smile Makeover'].map(service => (
                  <li key={service}><a href="#services" className="hover:text-primary transition-colors">{service}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Contact Us</h4>
              <div className="space-y-4 text-text-light text-sm">
                <p className="flex items-start gap-3"><MapPin size={18} className="text-primary shrink-0" /> {CLINIC_INFO.address}</p>
                <p className="flex items-center gap-3"><Phone size={18} className="text-primary shrink-0" /> {CLINIC_INFO.phone}</p>
                <p className="flex items-center gap-3"><Clock size={18} className="text-primary shrink-0" /> {CLINIC_INFO.status}</p>
              </div>
            </div>
          </div>
          
          <div className="pt-10 border-t border-[#EDF2F7] flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-text-light">
            <p>© {new Date().getFullYear()} {CLINIC_INFO.fullName}. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-primary">Privacy Policy</a>
              <a href="#" className="hover:text-primary">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4">
        <a 
          href={`https://wa.me/${CLINIC_INFO.whatsapp}`} 
          target="_blank"
          className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-card flex items-center justify-center hover:scale-110 transition-transform"
        >
          <MessageCircle size={28} />
        </a>
        <a 
          href={`tel:${CLINIC_INFO.phone}`} 
          className="w-14 h-14 bg-primary text-white rounded-full shadow-card flex items-center justify-center hover:scale-110 transition-transform md:hidden"
        >
          <Phone size={28} />
        </a>
      </div>
    </div>
  );
}

// Helper component for Sparkles icon which was missing in imports
function Sparkles(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  );
}
