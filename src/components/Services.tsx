import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES } from '../constants';
import * as Icons from 'lucide-react';
import { X, ArrowRight } from 'lucide-react';

export default function Services() {
  const [selectedService, setSelectedService] = useState<any>(null);

  const IconComponent = ({ name, ...props }: { name: string; [key: string]: any }) => {
    const LucideIcon = (Icons as any)[name];
    return LucideIcon ? <LucideIcon {...props} /> : <Icons.Activity {...props} />;
  };

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Premium Dental Services</h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We provide comprehensive dental care using the latest technology and a patient-first approach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedService(service)}
              className="bg-white p-8 rounded-3xl shadow-card hover:shadow-lg transition-all cursor-pointer group border border-[#EDF2F7]"
            >
              <div className="w-14 h-14 bg-secondary text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <IconComponent name={service.icon} size={28} />
              </div>
              <h4 className="text-xl font-bold text-text-dark mb-3">{service.title}</h4>
              <p className="text-text-light mb-6 line-clamp-2">{service.description}</p>
              <div className="flex items-center text-primary font-bold text-sm group-hover:gap-2 transition-all">
                Learn More <ArrowRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-blue-950/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              <div className="p-6 border-b flex justify-between items-center bg-gray-50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center">
                    <IconComponent name={selectedService.icon} size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedService.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="p-8 overflow-y-auto space-y-8">
                <div>
                  <h4 className="text-blue-600 font-bold uppercase tracking-wider text-xs mb-2">What is it?</h4>
                  <p className="text-gray-700 leading-relaxed">{selectedService.details.what}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-blue-600 font-bold uppercase tracking-wider text-xs mb-2">Who needs it?</h4>
                    <p className="text-gray-700 text-sm">{selectedService.details.who}</p>
                  </div>
                  <div>
                    <h4 className="text-blue-600 font-bold uppercase tracking-wider text-xs mb-2">Benefits</h4>
                    <p className="text-gray-700 text-sm">{selectedService.details.benefits}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-blue-600 font-bold uppercase tracking-wider text-xs mb-2">Treatment Journey</h4>
                  <p className="text-gray-700 text-sm">{selectedService.details.journey}</p>
                </div>

                <div className="bg-blue-50 p-6 rounded-2xl">
                  <h4 className="text-blue-600 font-bold uppercase tracking-wider text-xs mb-2">Aftercare Guidance</h4>
                  <p className="text-gray-700 text-sm italic">{selectedService.details.aftercare}</p>
                </div>

                <button
                  onClick={() => {
                    setSelectedService(null);
                    window.location.href = '#book';
                  }}
                  className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
                >
                  Book Appointment for {selectedService.title}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
