export interface Appointment {
  id?: string;
  fullName: string;
  phone: string;
  age: string;
  gender: string;
  address: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
  createdAt: any;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  diagnosis?: string;
  medicines?: string;
  treatmentPlanned?: string;
  advice?: string;
  followUpDate?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: {
    what: string;
    who: string;
    benefits: string;
    journey: string;
    aftercare: string;
  };
}
