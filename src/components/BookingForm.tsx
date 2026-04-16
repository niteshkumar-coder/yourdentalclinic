import React, { useState } from 'react';
import { db, collection, addDoc, serverTimestamp, handleFirestoreError, OperationType } from '../firebase';
import { CLINIC_INFO, SERVICES } from '../constants';
import { jsPDF } from 'jspdf';
import { CheckCircle2, Loader2, Download, Calendar, Clock, User, Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function BookingForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    age: '',
    gender: 'Male',
    address: '',
    service: SERVICES[0].title,
    preferredDate: '',
    preferredTime: '',
    notes: ''
  });

  const generatePDF = (appointmentId: string) => {
    const doc = new jsPDF();
    const primaryColor = [30, 58, 138]; // blue-900
    
    // Header
    doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.rect(0, 0, 210, 40, 'F');
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    doc.text(CLINIC_INFO.displayName, 20, 25);
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(CLINIC_INFO.fullName, 20, 32);
    
    // Receipt Info
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(18);
    doc.text('Appointment Receipt', 20, 55);
    
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text(`Receipt ID: ${appointmentId.substring(0, 8).toUpperCase()}`, 20, 62);
    doc.text(`Generated on: ${new Date().toLocaleString()}`, 20, 67);
    
    // Patient Details
    doc.setFillColor(245, 245, 245);
    doc.rect(20, 75, 170, 60, 'F');
    
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.setFont('helvetica', 'bold');
    doc.text('Patient Information', 30, 85);
    
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'normal');
    doc.text(`Name: ${formData.fullName}`, 30, 95);
    doc.text(`Phone: ${formData.phone}`, 30, 102);
    doc.text(`Age/Gender: ${formData.age} / ${formData.gender}`, 30, 109);
    doc.text(`Address: ${formData.address}`, 30, 116);
    doc.text(`Service: ${formData.service}`, 30, 123);
    
    // Appointment Schedule
    doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.rect(20, 145, 170, 30, 'F');
    
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.text('Scheduled For', 30, 155);
    doc.setFontSize(14);
    doc.text(`${formData.preferredDate} at ${formData.preferredTime}`, 30, 165);
    
    // Clinic Contact
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Clinic Contact Details', 20, 190);
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(`Doctor: ${CLINIC_INFO.doctorName}`, 20, 200);
    doc.text(`Phone: ${CLINIC_INFO.phone}`, 20, 207);
    doc.text(`Address: ${CLINIC_INFO.address}`, 20, 214);
    
    // Footer
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text('Please arrive 10 minutes before your scheduled time.', 105, 280, { align: 'center' });
    doc.text('This is an electronically generated receipt.', 105, 285, { align: 'center' });
    
    doc.save(`Appointment_${formData.fullName.replace(/\s+/g, '_')}.pdf`);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.preferredTime) {
      alert("Please select a preferred time slot.");
      return;
    }
    
    setLoading(true);
    try {
      const docRef = await addDoc(collection(db, 'appointments'), {
        ...formData,
        createdAt: serverTimestamp(),
        status: 'pending'
      });
      
      setSuccess(true);
      
      // Try generating PDF but don't block the UI if it fails
      try {
        generatePDF(docRef.id);
      } catch (pdfError) {
        console.error("PDF Generation failed:", pdfError);
      }
      
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'appointments');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <section id="book" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-blue-50 p-12 rounded-3xl border-2 border-blue-100"
          >
            <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-200">
              <CheckCircle2 size={40} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Appointment Booked!</h3>
            <p className="text-gray-600 mb-8 text-lg">
              Thank you, <span className="font-bold text-blue-600">{formData.fullName}</span>. Your appointment for <span className="font-bold">{formData.service}</span> has been received. Your receipt has been downloaded automatically.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setSuccess(false)}
                className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-all"
              >
                Book Another
              </button>
              <button
                onClick={() => window.location.href = '/'}
                className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
              >
                Back to Home
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="book" className="py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Schedule a Visit</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">Book Your Premium Dental Experience</h3>
            <p className="text-gray-600 text-lg mb-8">
              Take the first step towards a healthier, brighter smile. Fill out the form and our team will confirm your appointment shortly.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: CheckCircle2, text: "Instant PDF Receipt Generation" },
                { icon: CheckCircle2, text: "Priority Scheduling for Emergencies" },
                { icon: CheckCircle2, text: "Expert Consultation with Dr. Aryan Parmar" },
                { icon: CheckCircle2, text: "Modern, Hygienic & Comfortable Environment" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                  <item.icon className="text-blue-600" size={20} />
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-[24px] shadow-card border border-[#EDF2F7]"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[12px] font-bold text-text-light uppercase flex items-center gap-2">
                    <User size={14} className="text-primary" /> Patient Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Rahul Singh"
                    className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] bg-bg-soft outline-none focus:ring-1 focus:ring-primary transition-all"
                    value={formData.fullName}
                    onChange={e => setFormData({...formData, fullName: e.target.value})}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[12px] font-bold text-text-light uppercase flex items-center gap-2">
                    <Phone size={14} className="text-primary" /> Phone Number
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="e.g. 062014 78033"
                    className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] bg-bg-soft outline-none focus:ring-1 focus:ring-primary transition-all"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[12px] font-bold text-text-light uppercase">Age</label>
                  <input
                    required
                    type="number"
                    placeholder="Age"
                    className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] bg-bg-soft outline-none focus:ring-1 focus:ring-primary"
                    value={formData.age}
                    onChange={e => setFormData({...formData, age: e.target.value})}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[12px] font-bold text-text-light uppercase">Gender</label>
                  <select
                    className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] bg-bg-soft outline-none focus:ring-1 focus:ring-primary"
                    value={formData.gender}
                    onChange={e => setFormData({...formData, gender: e.target.value})}
                  >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[12px] font-bold text-text-light uppercase">Service</label>
                  <select
                    className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] bg-bg-soft outline-none focus:ring-1 focus:ring-primary"
                    value={formData.service}
                    onChange={e => setFormData({...formData, service: e.target.value})}
                  >
                    {SERVICES.map(s => <option key={s.id}>{s.title}</option>)}
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[12px] font-bold text-text-light uppercase flex items-center gap-2">
                  <MapPin size={14} className="text-primary" /> Address / Area
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Patliputra Colony, Patna"
                  className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] bg-bg-soft outline-none focus:ring-1 focus:ring-primary"
                  value={formData.address}
                  onChange={e => setFormData({...formData, address: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[12px] font-bold text-text-light uppercase flex items-center gap-2">
                    <Calendar size={14} className="text-primary" /> Preferred Date
                  </label>
                  <input
                    required
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] bg-bg-soft outline-none focus:ring-1 focus:ring-primary"
                    value={formData.preferredDate}
                    onChange={e => setFormData({...formData, preferredDate: e.target.value})}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[12px] font-bold text-text-light uppercase flex items-center gap-2">
                    <Clock size={14} className="text-primary" /> Time
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] bg-bg-soft outline-none focus:ring-1 focus:ring-primary"
                    value={formData.preferredTime}
                    onChange={e => setFormData({...formData, preferredTime: e.target.value})}
                  >
                    <option value="">Select Time</option>
                    <option>10:00 AM - 11:00 AM</option>
                    <option>11:00 AM - 12:00 PM</option>
                    <option>12:00 PM - 01:00 PM</option>
                    <option>04:00 PM - 05:00 PM</option>
                    <option>05:00 PM - 06:00 PM</option>
                    <option>06:00 PM - 07:00 PM</option>
                    <option>07:00 PM - 08:00 PM</option>
                  </select>
                </div>
              </div>

              <button
                disabled={loading}
                type="submit"
                className="btn-primary w-full py-4 text-lg flex items-center justify-center gap-3 disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" /> Processing...
                  </>
                ) : (
                  <>
                    Confirm Appointment <Download size={20} />
                  </>
                )}
              </button>
              
              <div className="flex items-center gap-2 text-[12px] text-[#2F855A] mt-5">
                <div className="w-2 h-2 bg-[#48BB78] rounded-full"></div>
                Open Now &middot; Patliputra Branch &middot; Closes 8 PM
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
