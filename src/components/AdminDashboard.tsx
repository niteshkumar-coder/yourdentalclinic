import React, { useState, useEffect } from 'react';
import { auth, db, googleProvider, signInWithPopup, signOut, collection, onSnapshot, query, orderBy, updateDoc, deleteDoc, doc, handleFirestoreError, OperationType } from '../firebase';
import { CLINIC_INFO } from '../constants';
import { Appointment } from '../types';
import { LogIn, LogOut, Trash2, Edit3, ChevronRight, Search, Filter, Calendar, Clock, User, Phone, FileText, CheckCircle, XCircle, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { jsPDF } from 'jspdf';

export default function AdminDashboard() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(localStorage.getItem('admin_session') === 'active');
  const [password, setPassword] = useState('');
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(false);
  const [authLoading, setAuthLoading] = useState(false);
  const [selectedAppt, setSelectedAppt] = useState<Appointment | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [loginError, setLoginError] = useState('');

  useEffect(() => {
    if (isAdminLoggedIn) {
      setLoading(true);
      const path = 'appointments';
      const q = query(collection(db, path), orderBy('createdAt', 'desc'));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Appointment));
        setAppointments(data);
        setLoading(false);
      }, (error) => {
        handleFirestoreError(error, OperationType.LIST, path);
        setLoading(false);
      });
      return () => unsubscribe();
    }
  }, [isAdminLoggedIn]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    setLoginError('');
    
    // In a real app, this should be verified against a secure backend
    if (password === "Your@Dental") {
      localStorage.setItem('admin_session', 'active');
      setIsAdminLoggedIn(true);
    } else {
      setLoginError('Incorrect password. Please try again.');
    }
    setAuthLoading(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_session');
    setIsAdminLoggedIn(false);
    setSelectedAppt(null);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this appointment?")) {
      const path = `appointments/${id}`;
      try {
        await deleteDoc(doc(db, 'appointments', id));
        setSelectedAppt(null);
      } catch (error) {
        handleFirestoreError(error, OperationType.DELETE, path);
      }
    }
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedAppt?.id) return;
    const path = `appointments/${selectedAppt.id}`;
    try {
      await updateDoc(doc(db, 'appointments', selectedAppt.id), { ...selectedAppt });
      setEditMode(false);
      alert("Appointment updated successfully!");
    } catch (error) {
       handleFirestoreError(error, OperationType.UPDATE, path);
    }
  };

  const generateUpdatedPDF = (appt: Appointment) => {
    const doc = new jsPDF();
    const primaryColor = [30, 58, 138];
    
    doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.rect(0, 0, 210, 40, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(22);
    doc.text(CLINIC_INFO.displayName, 20, 25);
    doc.setFontSize(10);
    doc.text('Clinical Summary & Receipt', 20, 32);
    
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('Patient Details', 20, 55);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text(`Name: ${appt.fullName}`, 20, 65);
    doc.text(`Phone: ${appt.phone}`, 20, 72);
    doc.text(`Service: ${appt.service}`, 20, 79);
    doc.text(`Date: ${appt.preferredDate} at ${appt.preferredTime}`, 20, 86);
    
    doc.setFont('helvetica', 'bold');
    doc.text('Clinical Notes', 20, 105);
    doc.setFont('helvetica', 'normal');
    doc.text(`Diagnosis: ${appt.diagnosis || 'N/A'}`, 20, 115);
    doc.text(`Treatment: ${appt.treatmentPlanned || 'N/A'}`, 20, 122);
    doc.text(`Medicines: ${appt.medicines || 'N/A'}`, 20, 129);
    doc.text(`Advice: ${appt.advice || 'N/A'}`, 20, 136);
    doc.text(`Follow-up: ${appt.followUpDate || 'N/A'}`, 20, 143);
    
    doc.save(`Updated_Receipt_${appt.fullName.replace(/\s+/g, '_')}.pdf`);
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-gray-50"><motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }} className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full" /></div>;

  if (!isAdminLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-white p-10 rounded-[2.5rem] shadow-2xl max-w-md w-full text-center">
          <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <LogIn size={32} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Admin Login</h2>
          <p className="text-gray-600 mb-8">Enter the password to access the management dashboard.</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="text-left">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-2 mb-2 block">Password</label>
              <input
                type="password"
                required
                placeholder="Enter admin password"
                className="w-full px-5 py-4 bg-gray-50 border-2 border-transparent focus:border-blue-500 rounded-2xl outline-none transition-all"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            
            {loginError && (
              <p className="text-red-500 text-sm font-medium">{loginError}</p>
            )}

            <button 
              type="submit" 
              disabled={authLoading}
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 disabled:opacity-50"
            >
              {authLoading ? 'Verifying...' : 'Unlock Dashboard'}
            </button>
          </form>

          <p className="mt-8 text-xs text-gray-400 uppercase tracking-widest font-bold">Authorized Personnel Only</p>
          
          <div className="mt-8 pt-6 border-t border-gray-100">
            <button 
              onClick={() => {
                window.location.hash = '';
                window.location.href = '/';
              }} 
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
            >
              <ArrowLeft size={16} />
              Go to Home Page
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  const filteredAppointments = appointments.filter(a => 
    a.fullName.toLowerCase().includes(searchTerm.toLowerCase()) || 
    a.phone.includes(searchTerm)
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
      {/* Sidebar */}
      <aside className="w-full lg:w-80 bg-white border-r border-gray-200 p-6 flex flex-col">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <img 
              src="https://i.ibb.co/Y7nDkTjZ/6e5d4ab0-f303-4add-bcf0-4da2e3b24718-removebg-preview.png" 
              alt="Logo" 
              className="w-8 h-8 object-contain"
              referrerPolicy="no-referrer"
            />
            <h1 className="text-xl font-bold text-blue-900 tracking-tighter">{CLINIC_INFO.displayName}</h1>
          </div>
          <p className="text-[10px] text-blue-600 font-bold uppercase tracking-widest">Admin Dashboard</p>
        </div>

        <div className="flex-1 space-y-2">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search patients..."
              className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 px-2">Appointments ({filteredAppointments.length})</div>
          
          <div className="space-y-2 overflow-y-auto max-h-[60vh] lg:max-h-none pr-2">
            {filteredAppointments.map(appt => (
              <button
                key={appt.id}
                onClick={() => { setSelectedAppt(appt); setEditMode(false); }}
                className={`w-full text-left p-4 rounded-2xl transition-all border ${selectedAppt?.id === appt.id ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-white border-transparent hover:border-gray-200 text-gray-700'}`}
              >
                <div className="font-bold truncate">{appt.fullName}</div>
                <div className={`text-xs ${selectedAppt?.id === appt.id ? 'text-blue-100' : 'text-gray-400'}`}>{appt.preferredDate} • {appt.preferredTime}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
              A
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-bold text-gray-900 truncate">Administrator</div>
              <div className="text-xs text-gray-500 truncate">Security Level: High</div>
            </div>
          </div>
          <button 
            onClick={() => {
              window.location.hash = '';
              window.location.href = '/';
            }} 
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-blue-50 hover:bg-blue-50 text-blue-600 font-bold transition-all mb-3"
          >
            <ArrowLeft size={18} /> Home Page
          </button>
          <button onClick={handleLogout} className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-red-50 hover:bg-red-50 text-red-600 font-bold transition-all">
            <LogOut size={18} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 lg:p-10 overflow-y-auto">
        <AnimatePresence mode="wait">
          {selectedAppt ? (
            <motion.div key={selectedAppt.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="max-w-4xl mx-auto">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">{selectedAppt.fullName}</h2>
                  <p className="text-gray-500">Appointment Details & Clinical Notes</p>
                </div>
                <div className="flex gap-3">
                  <button onClick={() => generateUpdatedPDF(selectedAppt)} className="p-3 bg-white border border-gray-200 rounded-xl text-gray-700 hover:bg-gray-50 transition-all shadow-sm flex items-center gap-2 font-bold text-sm">
                    <FileText size={18} /> PDF Receipt
                  </button>
                  <button onClick={() => setEditMode(!editMode)} className={`p-3 rounded-xl transition-all shadow-sm flex items-center gap-2 font-bold text-sm ${editMode ? 'bg-gray-900 text-white' : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'}`}>
                    <Edit3 size={18} /> {editMode ? 'Cancel Edit' : 'Edit Details'}
                  </button>
                  <button onClick={() => handleDelete(selectedAppt.id!)} className="p-3 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-all shadow-sm">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                  <div className="text-blue-600 mb-2"><User size={20} /></div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Patient Info</div>
                  <div className="text-gray-900 font-bold mt-1">{selectedAppt.age} yrs • {selectedAppt.gender}</div>
                  <div className="text-gray-500 text-sm mt-1 flex items-center gap-1"><Phone size={12} /> {selectedAppt.phone}</div>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                  <div className="text-blue-600 mb-2"><Calendar size={20} /></div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Schedule</div>
                  <div className="text-gray-900 font-bold mt-1">{selectedAppt.preferredDate}</div>
                  <div className="text-gray-500 text-sm mt-1 flex items-center gap-1"><Clock size={12} /> {selectedAppt.preferredTime}</div>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                  <div className="text-blue-600 mb-2"><CheckCircle size={20} /></div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Service</div>
                  <div className="text-gray-900 font-bold mt-1">{selectedAppt.service}</div>
                  <div className={`text-xs font-bold mt-2 inline-block px-2 py-1 rounded-md uppercase ${selectedAppt.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                    {selectedAppt.status}
                  </div>
                </div>
              </div>

              {editMode ? (
                <form onSubmit={handleUpdate} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Status</label>
                      <select className="w-full p-3 bg-gray-50 rounded-xl border-none outline-none focus:ring-2 focus:ring-blue-500" value={selectedAppt.status} onChange={e => setSelectedAppt({...selectedAppt, status: e.target.value as any})}>
                        <option value="pending">Pending</option>
                        <option value="confirmed">Confirmed</option>
                        <option value="completed">Completed</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Follow-up Date</label>
                      <input type="date" className="w-full p-3 bg-gray-50 rounded-xl border-none outline-none" value={selectedAppt.followUpDate || ''} onChange={e => setSelectedAppt({...selectedAppt, followUpDate: e.target.value})} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Diagnosis</label>
                    <textarea rows={2} className="w-full p-3 bg-gray-50 rounded-xl border-none outline-none" value={selectedAppt.diagnosis || ''} onChange={e => setSelectedAppt({...selectedAppt, diagnosis: e.target.value})} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Treatment Planned</label>
                    <textarea rows={2} className="w-full p-3 bg-gray-50 rounded-xl border-none outline-none" value={selectedAppt.treatmentPlanned || ''} onChange={e => setSelectedAppt({...selectedAppt, treatmentPlanned: e.target.value})} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Medicines</label>
                    <textarea rows={2} className="w-full p-3 bg-gray-50 rounded-xl border-none outline-none" value={selectedAppt.medicines || ''} onChange={e => setSelectedAppt({...selectedAppt, medicines: e.target.value})} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Advice</label>
                    <textarea rows={2} className="w-full p-3 bg-gray-50 rounded-xl border-none outline-none" value={selectedAppt.advice || ''} onChange={e => setSelectedAppt({...selectedAppt, advice: e.target.value})} />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                    Save Changes
                  </button>
                </form>
              ) : (
                <div className="space-y-6">
                  <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2"><FileText className="text-blue-600" size={20} /> Clinical Records</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Diagnosis</div>
                        <p className="text-gray-700">{selectedAppt.diagnosis || 'No diagnosis recorded yet.'}</p>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Treatment Planned</div>
                        <p className="text-gray-700">{selectedAppt.treatmentPlanned || 'No treatment plan recorded.'}</p>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Medicines</div>
                        <p className="text-gray-700">{selectedAppt.medicines || 'None prescribed.'}</p>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Doctor's Advice</div>
                        <p className="text-gray-700">{selectedAppt.advice || 'No advice recorded.'}</p>
                      </div>
                    </div>
                  </div>
                  
                  {selectedAppt.notes && (
                    <div className="bg-blue-50 p-8 rounded-[2.5rem] border border-blue-100">
                      <h4 className="text-blue-900 font-bold mb-2">Patient's Initial Notes</h4>
                      <p className="text-blue-800 italic">"{selectedAppt.notes}"</p>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center p-10">
              <div className="w-32 h-32 bg-gray-100 text-gray-300 rounded-full flex items-center justify-center mb-6">
                <Calendar size={64} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Select an Appointment</h3>
              <p className="text-gray-500 max-w-xs">Choose a patient from the sidebar to view details and manage their appointment.</p>
            </div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
