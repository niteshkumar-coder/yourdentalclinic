import React from 'react';
import { Star } from 'lucide-react';
import { CLINIC_INFO } from '../constants';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-[95vh] lg:min-h-screen flex flex-col justify-between pt-28 pb-16 overflow-hidden bg-white"
    >
      {/* 100% Crisp, Clear and Bright Background Image Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: "url('https://i.ibb.co/qF3F0xpj/image.png')" 
        }}
      />
      
      {/* Invisible layer to guarantee that the absolute container has standard styling height */}
      <div className="absolute inset-0 bg-white/10 z-1 pointer-events-none" />

      {/* Main content centered on screen with maximum clarity */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full text-center relative z-10 my-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto flex flex-col items-center pt-8 md:pt-14"
        >
          {/* Top Category Capsule Badge */}
          <div className="inline-flex items-center justify-center border-2 border-sky-300 bg-white/80 px-4 py-1.5 rounded-full text-[10px] md:text-xs font-black tracking-widest text-[#00509d] mb-6 shadow-sm">
            DENTAL IMPLANT | ALIGNERS | RCT | BRACES
          </div>

          {/* Sleek, Beautifully Slender Display Titles */}
          <h1 className="text-3xl md:text-4xl lg:text-[48px] font-light tracking-widest text-[#00509d] leading-none uppercase select-none">
            BIHAR
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-[64px] font-light tracking-wider text-[#00509d] leading-none uppercase mt-2 select-none">
            DENTAL CLINIC
          </h1>

          {/* Location Line */}
          <p className="text-lg md:text-xl font-bold text-gray-500 tracking-wide mt-4">
            Patliputra, Patna
          </p>

          {/* Side-by-side Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full justify-center max-w-sm px-4">
            <a
              href="#book"
              className="bg-[#00509d] hover:bg-[#003f7a] text-white px-8 py-3.5 text-xs md:text-sm font-bold rounded-full w-full sm:w-auto text-center shadow-lg hover:shadow-xl transition-all"
            >
              Instant Booking
            </a>
            <a
              href="tel:+919055584791"
              className="bg-white/90 backdrop-blur-sm border-2 border-[#00509d] hover:bg-[#00509d]/5 text-[#00509d] px-8 py-3.5 text-xs md:text-sm font-bold rounded-full w-full sm:w-auto text-center transition-all"
            >
              Call 062014 78033
            </a>
          </div>

          {/* Horizontal Social Proof Metrics Bar with pill shapes */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-10 text-xs md:text-sm text-gray-700 font-bold">
            <div className="flex items-center gap-1.5 bg-white/70 backdrop-blur-sm border border-gray-200/50 px-3 py-1 rounded-full shadow-sm">
              <span className="text-stone-900 font-black">5.0</span>
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <span className="text-gray-500 font-normal text-[11px]">(153 Reviews)</span>
            </div>

            <div className="flex items-center gap-1.5 bg-white/70 backdrop-blur-sm border border-gray-200/50 px-3 py-1 rounded-full shadow-sm">
              <span className="text-[#00509d] text-sm">🛡️</span>
              <span>Sterilized & Safe Care</span>
            </div>

            <div className="flex items-center gap-1.5 bg-white/70 backdrop-blur-sm border border-gray-200/50 px-3 py-1 rounded-full shadow-sm">
              <span className="text-[#00509d] text-sm">👩‍⚕️</span>
              <span>Expert Aesthetic Dentistry</span>
            </div>
          </div>

          {/* Blue bordered Testimonial Quote Block exactly style like screenshot */}
          <div className="w-full max-w-2xl bg-sky-50/95 border border-[#00509d]/70 px-6 py-4 rounded-lg shadow-md mt-10 text-center">
            <p className="text-xs md:text-sm font-medium italic text-[#00509d] leading-relaxed">
              "Visited for my RCT and Implant treatment. Dr. Neha Kumari treated me so well. Truly the best dentist in town. Prices were very affordable."
            </p>
          </div>
        </motion.div>
      </div>

      {/* Overlapping White Feature Cards at the bottom border */}
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 relative z-20 mt-12 md:mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-lg flex items-center gap-4 hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[#00509d] text-xl shrink-0">
              🛡️
            </div>
            <div>
              <h4 className="font-extrabold text-gray-900 text-sm">Sterilized Care</h4>
              <p className="text-gray-500 text-xs mt-0.5">International safety protocols</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-lg flex items-center gap-4 hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[#00509d] text-xl shrink-0">
              👩‍⚕️
            </div>
            <div>
              <h4 className="font-extrabold text-gray-900 text-sm">Expert Doctors</h4>
              <p className="text-gray-500 text-xs mt-0.5">Highly qualified specialists</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-lg flex items-center gap-4 hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[#00509d] text-xl shrink-0">
              🕒
            </div>
            <div>
              <h4 className="font-extrabold text-gray-900 text-sm">Modern Tech</h4>
              <p className="text-gray-500 text-xs mt-0.5">Advanced painless dentistry</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
