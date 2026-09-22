export type PageId = 'home' | 'about' | 'services' | 'contact';

export interface SalonDetails {
  name: string;
  category: string;
  address: string;
  street: string;
  postalCode: string;
  city: string;
  country: string;
  phone: string;
  phoneRaw: string;
  description: string;
}

export interface ConsultationInquiry {
  fullName: string;
  contactMethod: 'phone' | 'email';
  contactValue: string;
  preferredTiming: string;
  stylingNotes: string;
}

export interface FormErrors {
  fullName?: string;
  contactValue?: string;
  stylingNotes?: string;
}
