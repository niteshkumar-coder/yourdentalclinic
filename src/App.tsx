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
  ExternalLink,
  Heart,
  Sparkles,
  Smile,
  ShieldCheck,
  Check,
  ThumbsUp,
  UserCheck,
  Calendar
} from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import BookingForm from './components/BookingForm';
import AdminDashboard from './components/AdminDashboard';
import { CLINIC_INFO, REVIEWS, GALLERY, BEFORE_AFTER } from './constants';

export default function App() {
  const [isAdminView, setIsAdminView] = useState(false);

  useEffect(() => {
    // Dynamic SEO optimization for page title and description
    document.title = "Bihar Dental Clinic Patna | Dr. Neha Kumari | Best Dental Clinic In Patna";
    
    // Attempt updating meta description dynamically (safe fallback)
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Bihar Dental Clinic offers root canal treatment, dental implants, smile designing, teeth whitening, braces, and complete dental care in Patna. Book your appointment today.');
    }
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      setIsAdminView(window.location.hash === '#admin');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (isAdminView) {
    return <AdminDashboard />;
  }

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900 relative">
      <Navbar />
      
      <main>
        {/* Dynamic Header Banner / Hero Section */}
        <Hero />

        {/* Highlight Stats / Features Bar */}
        <section className="relative z-20 -mt-16 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: ShieldCheck, title: "100% Sterile", desc: "Chemical Autoclave Safety" },
              { icon: Award, title: "Expert Surgeon", desc: "Dr. Neha Kumari (BDS)" },
              { icon: Sparkles, title: "Modern Tech", desc: "Advanced painless care" },
              { icon: Heart, title: "Patient First", desc: "Highly compassionate team" }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-3xl shadow-card border border-[#EDF2F7] flex items-center gap-5 hover:border-primary/20 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-secondary text-primary rounded-2xl flex items-center justify-center shrink-0">
                  <feature.icon size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-text-dark text-sm tracking-tight">{feature.title}</h4>
                  <p className="text-xs text-text-light font-medium mt-0.5">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Left Column: Premium Interactive Images */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="lg:col-span-6 relative"
              >
                <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border border-[#EDF2F7] bg-white">
                  <img 
                    src="https://i.ibb.co/XrYfDmWh/image.png" 
                    alt="Sterile Clinical Workspace" 
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Secondary offset decorative background element */}
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary rounded-[2rem] -z-10 hidden md:block"></div>
                
                {/* Embedded Ratings badge */}
                <div className="absolute -bottom-4 left-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-card border border-primary/10 max-w-xs">
                  <div className="flex items-center gap-3 mb-1.5">
                    <div className="w-8 h-8 bg-[#22A652]/10 text-medical rounded-lg flex items-center justify-center font-bold">
                      ★
                    </div>
                    <span className="font-black text-text-dark text-sm">248+ Verified Reviews</span>
                  </div>
                  <p className="text-xs text-text-light font-medium">"Bihar Dental Clinic is truly the best in Patna! Zero Pain experience."</p>
                </div>
              </motion.div>

              {/* Right Column: Narrative Copy */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: true }}
                className="lg:col-span-6"
              >
                <h2 className="text-primary font-black uppercase tracking-widest text-xs mb-3 flex items-center gap-2">
                  <span className="w-6 h-0.5 bg-primary"></span>
                  Welcome To Bihar Dental Clinic
                </h2>
                <h3 className="text-2xl md:text-4xl font-black text-text-dark mb-6 leading-tight">
                  Trusted Expert <span className="text-medical">Dental Care</span> with Advanced Technology
                </h3>
                <p className="text-text-light text-base md:text-lg mb-8 leading-relaxed font-semibold">
                  Bihar Dental Clinic is dedicated to providing high-quality dental care with modern technology and a patient-first approach. Under the guidance of Dr. Neha Kumari, we focus on preventive, cosmetic, restorative, and advanced dental treatments. Our goal is to help every patient achieve a healthy, confident smile in a comfortable environment.
                </p>
                
                {/* Structured Checkpoints */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                  {[
                    "Experienced Professionals",
                    "Modern Dental Technology",
                    "Painless Treatment Approach",
                    "Affordable Pricing Model",
                    "Personalized Family Care",
                    "Strict Sterilization Protocols"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-text-dark font-black text-sm">
                      <div className="w-6 h-6 rounded-full bg-[#22A652]/10 flex items-center justify-center">
                        <CheckCircle2 className="text-medical" size={16} strokeWidth={3} />
                      </div>
                      {item}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <a href="#services" className="btn-primary flex items-center gap-2">
                    Our Specialized Treatments
                    <ArrowRight size={16} />
                  </a>
                  <a href="#book" className="btn-outline">
                    Book Consultation
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Doctor Section */}
        <section className="py-24 bg-gradient-to-br from-primary to-blue-900 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-300/10 via-transparent to-transparent -z-10"></div>
          
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Doctor Bio - Left Column */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="lg:col-span-7"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-xs font-extrabold uppercase tracking-wider mb-4 border border-white/10">
                  <UserCheck size={14} />
                  Lead Consultant Surgeon
                </div>
                <h3 className="text-4xl md:text-5xl font-black mb-3 text-white tracking-tight">
                  {CLINIC_INFO.doctorName}
                </h3>
                <p className="text-accent text-lg font-bold tracking-wide mb-6 uppercase">
                  {CLINIC_INFO.doctorTitle}
                </p>
                <p className="text-white/90 text-base md:text-lg mb-8 leading-relaxed font-medium">
                  {CLINIC_INFO.doctorBio}
                </p>

                {/* Focus points & credentials */}
                <div className="space-y-4 mb-10 border-l-2 border-accent/40 pl-6">
                  {[
                    "Expert in root canal therapies (RCT) & dental implants",
                    "Specialist in pediatric (kids) treatment without dental fear",
                    "Passionate about modern smile redesigns and cosmetic veneers"
                  ].map((cred, i) => (
                    <div key={i} className="flex gap-3 text-sm font-semibold text-white/90">
                      <span className="text-accent font-black">✓</span>
                      {cred}
                    </div>
                  ))}
                </div>
                
                <a 
                  href="#book" 
                  className="bg-white text-primary px-8 py-4 rounded-full font-black text-sm hover:bg-zinc-100 hover:shadow-2xl hover:shadow-white/10 active:scale-95 transition-all inline-flex items-center gap-3 shadow-lg"
                >
                  <Calendar size={18} />
                  Book Appointment with Dr. Neha Kumari
                </a>
              </motion.div>

              {/* Doctor Portrait - Right Column */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="lg:col-span-5 flex justify-center lg:justify-end"
              >
                <div className="max-w-[390px] w-full rounded-[2.5rem] overflow-hidden border-8 border-white/15 bg-white/5 shadow-2xl relative group">
                  <img 
                    src="https://i.ibb.co/PGp2s7gM/image.png" 
                    alt="Dr. Neha Kumari" 
                    className="w-full h-auto block object-cover brightness-110 contrast-[1.02]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Services / Treatments Grid */}
        <Services />

        {/* Brand New Section: Why Choose Us */}
        <section className="py-24 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-primary font-black uppercase tracking-widest text-xs mb-3">Why Patients Trust Us</h2>
              <h3 className="text-2xl md:text-4xl font-black text-text-dark">Elite Care Standards</h3>
              <p className="text-text-light font-semibold max-w-2xl mx-auto text-base md:text-lg mt-3">
                At Bihar Dental Clinic, we go above and beyond to provide Patna's most comfortable, trusted, and modern healthcare experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  icon: UserCheck, 
                  title: "Experienced Dental Professionals", 
                  desc: "Led by Dr. Neha Kumari, bringing clinical excellence, deep diagnostics, and extreme precision to every simple or complex procedure." 
                },
                { 
                  icon: Sparkles, 
                  title: "Modern Dental Technology", 
                  desc: "Utilizing modern advanced tools, high resolution oral scanners, and digital X-rays to maximize treatment comfort and accuracy." 
                },
                { 
                  icon: Smile, 
                  title: "Painless Treatment Approach", 
                  desc: "Specially formulated pain-management protocols and comforting treatment rooms to dissolve any form of dental anxiety instantly." 
                },
                { 
                  icon: ThumbsUp, 
                  title: "Affordable Pricing", 
                  desc: "100% transparent pricing with absolutely zero hidden costs. Restoring your dental health should never be a financial burden." 
                },
                { 
                  icon: Heart, 
                  title: "Personalized Care", 
                  desc: "Unique custom treatment charts crafted exclusively around your specific dental health goals, convenience, and facial aesthetics." 
                },
                { 
                  icon: ShieldCheck, 
                  title: "High Standards Of Sterilization", 
                  desc: "Zero compromise safety structure. Complete chemical autoclave processes and high hygiene protocols following international standards." 
                }
              ].map((reason, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#EAF4FC] text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <reason.icon size={24} />
                  </div>
                  <h4 className="text-lg font-black text-text-dark mb-3 leading-tight">{reason.title}</h4>
                  <p className="text-sm text-text-light leading-relaxed font-semibold">{reason.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Smile Transformation (Before / After) Section */}
        <section className="py-24 bg-white border-t border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-primary font-black uppercase tracking-widest text-xs mb-3">Smile Transformation</h2>
              <h3 className="text-2xl md:text-4xl font-black text-text-dark">Before / After Gallery</h3>
              <p className="text-text-light max-w-2xl mx-auto text-base md:text-lg mt-3 font-semibold">
                Explore a few real case results representing premium restoration work.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {BEFORE_AFTER.map((caseItem, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zinc-50 p-6 rounded-[2.5rem] border border-gray-200/50"
                >
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="relative rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-white">
                      <img 
                        src={caseItem.before} 
                        alt="Before treatment" 
                        className="w-full h-auto"
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                        Before
                      </span>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-white">
                      <img 
                        src={caseItem.after} 
                        alt="After treatment" 
                        className="w-full h-auto"
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute top-3 left-3 bg-medical text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                        After
                      </span>
                    </div>
                  </div>
                  <h4 className="text-lg font-black text-text-dark leading-tight">{caseItem.title}</h4>
                  <p className="text-xs text-text-light font-bold uppercase tracking-wider mt-1">{caseItem.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Patient Review Testimonials Section */}
        <section id="reviews" className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-primary font-black uppercase tracking-widest text-xs mb-3">Hear From Our Clinic Patients</h2>
              <h3 className="text-2xl md:text-4xl font-black text-text-dark">Patient Testimonials</h3>
              <p className="text-text-light max-w-2xl mx-auto mt-3 font-semibold text-base md:text-lg">
                Real feedback from five Patna families who transformed their dental health with Dr. Neha Kumari.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {REVIEWS.map((review, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-[#F8FAFC] p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex text-amber-400 gap-1 mb-4">
                      {[...Array(review.rating)].map((_, starIdx) => (
                        <Star key={starIdx} size={18} fill="currentColor" strokeWidth={0} />
                      ))}
                    </div>
                    <p className="text-text-dark text-sm italic leading-relaxed mb-6">"{review.text}"</p>
                  </div>
                  
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-200/50">
                    <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center font-black text-sm">
                      {review.name[0]}
                    </div>
                    <div>
                      <div className="font-bold text-text-dark text-sm">{review.name}</div>
                      <div className="text-[10px] text-text-light font-bold uppercase tracking-widest mt-0.5">{review.date}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                className="inline-flex items-center gap-2 bg-[#1A365D] text-white px-8 py-4 rounded-full font-black text-sm hover:bg-black hover:shadow-xl transition-all"
              >
                View Patient Reviews on Google <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* Gallery Grid Section with remaining resolved clinical images */}
        <section className="py-24 bg-zinc-50 border-t border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-primary font-black uppercase tracking-widest text-xs mb-3">Explore Our Facility</h2>
              <h3 className="text-2xl md:text-4xl font-black text-text-dark">Bihar Dental Clinic Gallery</h3>
              <p className="text-text-light max-w-2xl mx-auto text-base md:text-lg mt-3 font-semibold">
                Explore our modern, clean, and international-standard sterilization facility setup.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {GALLERY.slice(0, 12).map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -6 }}
                  className="group relative aspect-square rounded-[1.5rem] overflow-hidden shadow-sm border border-gray-100 bg-white"
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                    <p className="text-white text-xs font-black tracking-normal leading-tight">{item.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to action booking section */}
        <section id="book" className="py-24 bg-gradient-to-br from-white to-blue-50/50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-primary font-black uppercase tracking-widest text-xs mb-3">Book Your Dental Consultation Today</h2>
            <h3 className="text-2xl md:text-4xl font-black text-text-dark mb-4">Protect Your Smile</h3>
            <p className="text-text-light max-w-2xl mx-auto text-base md:text-lg mb-10 font-semibold leading-relaxed">
              Take the first step toward a healthier and brighter smile. Schedule your appointment with Bihar Dental Clinic today or call our expert helpdesk direct.
            </p>
            
            {/* Quick interactive choice box */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a 
                href={`tel:${CLINIC_INFO.phone}`} 
                className="btn-medical px-8 py-4.5 text-base w-full sm:w-auto inline-flex items-center justify-center gap-2"
              >
                <Phone size={18} />
                Call +91 9055584791
              </a>
              <a 
                href={`tel:${CLINIC_INFO.phoneSecondary}`} 
                className="btn-outline px-8 py-4.5 text-base w-full sm:w-auto inline-flex items-center justify-center gap-2"
              >
                <Phone size={18} />
                Call +91 9973468666
              </a>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-10">
            <BookingForm />
          </div>
        </section>

        {/* Contact info card panel */}
        <section id="contact" className="py-24 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              
              {/* Detailed Contact Address Block */}
              <div className="lg:col-span-5">
                <h2 className="text-primary font-black uppercase tracking-widest text-xs mb-3">Get in Touch</h2>
                <h3 className="text-2xl md:text-3xl font-black text-text-dark mb-8">Visit Bihar Dental Clinic</h3>
                
                <div className="space-y-8">
                  <div className="flex gap-5">
                    <div className="w-12 h-12 bg-[#EAF4FC] text-primary rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-primary/5">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <h4 className="font-black text-text-dark mb-1 text-base leading-snug">Address Location</h4>
                      <p className="text-text-light font-semibold text-sm leading-relaxed">{CLINIC_INFO.address}</p>
                      <a 
                        href="https://maps.apple.com/?address=Anurag+Abha,+Rajeev+Nagar+Main+Road,+Patna" 
                        target="_blank" 
                        className="text-primary font-black text-xs mt-2.5 inline-flex items-center gap-1 hover:gap-2 transition-all uppercase tracking-wider"
                      >
                        Get Directions <ChevronRight size={14} />
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex gap-5">
                    <div className="w-12 h-12 bg-[#EAF4FC] text-primary rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-primary/5">
                      <Phone size={22} />
                    </div>
                    <div>
                      <h4 className="font-black text-text-dark mb-1 text-base leading-snug">Phone Contact</h4>
                      <p className="text-text-light font-semibold text-sm">{CLINIC_INFO.phone}</p>
                      <p className="text-text-light font-semibold text-sm mt-0.5">{CLINIC_INFO.phoneSecondary}</p>
                      <p className="text-[#22A652] font-black text-xs mt-2 uppercase tracking-widest">{CLINIC_INFO.status}</p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="w-12 h-12 bg-[#EAF4FC] text-primary rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-primary/5">
                      <Clock size={22} />
                    </div>
                    <div>
                      <h4 className="font-black text-text-dark mb-1 text-base leading-snug">Working Hours</h4>
                      <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 text-text-light text-sm font-semibold mt-1">
                        <span>Monday - Saturday:</span> <span className="text-text-dark font-black">9:00 AM - 8:00 PM</span>
                        <span>Sunday:</span> <span className="text-red-500 font-extrabold text-[12px] uppercase">Emergency Appointments Only</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Patna Map Location Frame container */}
              <div className="lg:col-span-7 rounded-[2rem] overflow-hidden shadow-xl border border-[#EDF2F7] h-[400px] lg:h-auto min-h-[350px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14391.111818290356!2d85.1114251!3d25.6133036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed581a0670fb01%3A0xe5f9be8f94ad3fc7!2sRajeev%20Nagar%2C%20Patna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1713264000000!5m2!1sen!2sin" 
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

      {/* Rebranded Clinic Footer */}
      <footer className="bg-zinc-950 text-white pt-20 pb-10 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 relative shrink-0">
                  <img 
                    src="https://i.ibb.co/k2by7F4X/image.png" 
                    alt="Bihar Dental Clinic Logo" 
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h2 className="text-2xl font-black tracking-tighter text-white">{CLINIC_INFO.displayName}</h2>
              </div>
              <p className="text-zinc-400 mb-6 leading-relaxed text-sm font-semibold">
                Trusted Multispeciality expert dental care in Patna, Rajeev Nagar under lead surgeon Dr. Neha Kumari (BDS).
              </p>
              <div className="flex gap-4">
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-xl flex items-center justify-center hover:bg-primary hover:text-white hover:-translate-y-1 transition-all shadow-sm">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-extrabold text-white text-base mb-6">Quick Sitemap</h4>
              <ul className="space-y-4 text-zinc-450 text-sm font-semibold">
                {['Home', 'About', 'Services', 'Reviews', 'Contact'].map(link => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-zinc-400 hover:text-primary transition-colors hover:pl-1 transition-all">
                      {link}
                    </a>
                  </li>
                ))}
                <li>
                  <button 
                    onClick={() => {
                      window.location.hash = '#admin';
                      setIsAdminView(true);
                    }} 
                    className="text-zinc-400 hover:text-primary transition-colors cursor-pointer text-left w-full"
                  >
                    Admin Login Portal
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-extrabold text-white text-base mb-6">Our Services</h4>
              <ul className="space-y-4 text-zinc-400 text-sm font-semibold">
                {['Root Canal Treatment', 'Dental Implants', 'Teeth Cleaning', 'Teeth Whitening', 'Smile Designing'].map(service => (
                  <li key={service}>
                    <a href="#services" className="text-zinc-400 hover:text-primary transition-colors">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-extrabold text-white text-base mb-6">Reach Us Direct</h4>
              <div className="space-y-4 text-zinc-400 text-sm font-semibold">
                <p className="flex items-start gap-3 text-zinc-300">
                  <MapPin size={18} className="text-primary shrink-0 mt-0.5" /> 
                  {CLINIC_INFO.address}
                </p>
                <p className="flex items-center gap-3 text-zinc-300">
                  <Phone size={18} className="text-primary shrink-0" /> 
                  +91 9055584791
                </p>
                <p className="flex items-center gap-3 text-zinc-300">
                  <Phone size={18} className="text-primary shrink-0" /> 
                  +91 9973468666
                </p>
                <p className="flex items-center gap-3 text-zinc-300">
                  <Clock size={18} className="text-[#22A652] shrink-0" /> 
                  Open 9:00 AM - 8:00 PM
                </p>
              </div>
            </div>
          </div>
          
          <div className="pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-zinc-500 font-semibold">
            <p>© {new Date().getFullYear()} {CLINIC_INFO.fullName}. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-primary text-zinc-400">Privacy Policy</a>
              <a href="#" className="hover:text-primary text-zinc-400">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Instant Communication Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4">
        <a 
          href={`https://wa.me/${CLINIC_INFO.whatsapp}`} 
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all outline-none"
        >
          <MessageCircle size={28} />
        </a>
        <a 
          href={`tel:${CLINIC_INFO.phone}`} 
          className="w-14 h-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all outline-none md:hidden"
        >
          <Phone size={28} />
        </a>
      </div>
    </div>
  );
}
