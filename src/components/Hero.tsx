import React from 'react';
import { Phone, Calendar, Star, Shield, Award } from 'lucide-react';
import { CLINIC_INFO } from '../constants';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-32 pb-20 bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: "linear-gradient(to bottom, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.2)), url('https://kaizenaire.com/wp-content/uploads/2023/12/image-852.webp')" 
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full flex flex-col items-center text-center">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-content flex flex-col items-center"
          >
            <div className="inline-block px-3 py-1.5 bg-secondary text-primary text-[14px] font-bold uppercase tracking-[2px] rounded-md mb-8">
              {CLINIC_INFO.heroSubtitle}
            </div>
            <h1 className="text-[64px] md:text-[100px] leading-[1.1] font-extrabold text-primary mb-6 tracking-normal">
              YOUR<br />DENTIST
            </h1>
            <p className="text-2xl md:text-3xl font-light text-text-light mb-10">
              {CLINIC_INFO.location}
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a
                href="#book"
                className="btn-primary px-10 py-5 text-[16px]"
              >
                Instant Booking
              </a>
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="btn-outline px-10 py-5 text-[16px]"
              >
                Call {CLINIC_INFO.phone}
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 pt-8 border-t border-gray-200 w-full">
              <div className="flex items-center gap-3">
                <div className="text-[24px] font-extrabold text-text-dark">{CLINIC_INFO.googleRating}</div>
                <div className="text-left">
                  <div className="text-[#F6AD55] text-[14px]">★★★★★</div>
                  <div className="text-[12px] text-text-light">{CLINIC_INFO.googleReviewsCount} Reviews</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-3xl">🛡️</div>
                <div className="text-[14px] text-text-light leading-tight text-left">Sterilized &<br />Safe Care</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-3xl">👨‍⚕️</div>
                <div className="text-[14px] text-text-light leading-tight text-left">Expert Aesthetic<br />Dentistry</div>
              </div>
            </div>

            <div className="review-quote mt-12 max-w-2xl text-lg md:text-xl italic text-gray-600 bg-blue-50/50 p-6 rounded-2xl border border-blue-100/50">
              “Visited for my RCT and implant treatment. Dr Aryan treated me so well. Truly the best dentist in town. Prices were very affordable.”
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
