import React, { useState } from 'react';
import { X, Phone, Calendar, Clock, CheckCircle2, Send, MapPin } from 'lucide-react';
import { SALON_DETAILS } from '../data/salonInfo';
import { ConsultationInquiry, FormErrors } from '../types';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmittedSuccess?: () => void;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  onSubmittedSuccess,
}) => {
  const [formData, setFormData] = useState<ConsultationInquiry>({
    fullName: '',
    contactMethod: 'phone',
    contactValue: '',
    preferredTiming: 'Morning / Afternoon',
    stylingNotes: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please provide your name.';
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = 'Name must be at least 2 characters.';
    }

    if (!formData.contactValue.trim()) {
      errs.contactValue = 'Please provide your telephone number or email.';
    } else if (
      formData.contactMethod === 'phone' &&
      !/^[\d\s+\-().]{6,20}$/.test(formData.contactValue.trim())
    ) {
      errs.contactValue = 'Please enter a valid telephone number.';
    } else if (
      formData.contactMethod === 'email' &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contactValue.trim())
    ) {
      errs.contactValue = 'Please enter a valid email address.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Frontend validated submission
    setSubmitted(true);
    if (onSubmittedSuccess) onSubmittedSuccess();
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      contactMethod: 'phone',
      contactValue: '',
      preferredTiming: 'Morning / Afternoon',
      stylingNotes: '',
    });
    setErrors({});
    onClose();
  };

  return (
    <div
      id="consultation-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1F1417]/75 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
    >
      <div
        id="consultation-modal-card"
        className="relative w-full max-w-xl bg-[#FAF7F2] border border-[#2C0F1A]/20 shadow-2xl overflow-hidden"
      >
        {/* Modal Header */}
        <div className="bg-[#2C0F1A] text-[#FAF7F2] p-6 sm:p-8 relative">
          <button
            id="close-modal-btn"
            onClick={handleReset}
            className="absolute top-5 right-5 p-2 text-[#EACFD3] hover:text-[#FAF7F2] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <span className="text-xs uppercase tracking-[0.25em] text-[#DEB5BC] block mb-1">
            Umberto Styliste · Consultation & Appointments
          </span>
          <h2 id="consultation-modal-title" className="font-serif text-2xl sm:text-3xl font-medium tracking-tight">
            Arrange Your Salon Visit
          </h2>
          <p className="text-xs sm:text-sm text-[#EACFD3]/80 mt-2 leading-relaxed">
            Every styling session is tailored individually. Appointments are scheduled directly by phone or via this consultation inquiry.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {/* Quick Direct Call Banner */}
          <div className="mb-6 p-4 sm:p-5 bg-[#F5EAEC] border border-[#DEB5BC]/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#591D34] font-semibold block">
                Immediate Assistance
              </span>
              <p className="text-xs text-[#421626]/80 mt-0.5">
                Speak directly with the salon in La Chaux-de-Fonds.
              </p>
            </div>
            <a
              id="modal-quick-call-cta"
              href={`tel:${SALON_DETAILS.phoneRaw}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#2C0F1A] text-[#FAF7F2] text-xs uppercase tracking-widest font-medium hover:bg-[#591D34] transition-colors shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-[#DEB5BC]" />
              <span>Call 032 914 39 79</span>
            </a>
          </div>

          {submitted ? (
            <div id="modal-success-state" className="py-8 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#EACFD3] text-[#591D34] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-[#2C0F1A]">
                Inquiry Received
              </h3>
              <p className="text-sm text-[#423035] max-w-sm mx-auto leading-relaxed">
                Thank you, {formData.fullName}. Your styling inquiry has been recorded. We will contact you at{' '}
                <span className="font-medium text-[#2C0F1A]">{formData.contactValue}</span> to arrange your consultation.
              </p>
              <div className="pt-4 flex justify-center">
                <button
                  id="modal-success-close-btn"
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#2C0F1A] text-[#FAF7F2] text-xs uppercase tracking-widest hover:bg-[#591D34] transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="text-xs uppercase tracking-wider text-[#591D34] font-semibold border-b border-[#2C0F1A]/10 pb-1.5">
                Or Leave a Consultation Inquiry
              </div>

              {/* Full Name */}
              <div>
                <label
                  htmlFor="modal-fullname"
                  className="block text-xs uppercase tracking-wider text-[#2C0F1A] font-medium mb-1"
                >
                  Your Name *
                </label>
                <input
                  id="modal-fullname"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => {
                    setFormData({ ...formData, fullName: e.target.value });
                    if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                  }}
                  placeholder="e.g. Claire Dubois"
                  className={`w-full px-3.5 py-2.5 text-sm bg-white border ${
                    errors.fullName ? 'border-red-600 bg-red-50/20' : 'border-[#2C0F1A]/20'
                  } focus:outline-none focus:border-[#591D34] transition-colors`}
                />
                {errors.fullName && (
                  <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>
                )}
              </div>

              {/* Contact Method Choice */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-1">
                  <label
                    htmlFor="modal-contact-method"
                    className="block text-xs uppercase tracking-wider text-[#2C0F1A] font-medium mb-1"
                  >
                    Contact By
                  </label>
                  <select
                    id="modal-contact-method"
                    value={formData.contactMethod}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        contactMethod: e.target.value as 'phone' | 'email',
                      })
                    }
                    className="w-full px-3 py-2.5 text-sm bg-white border border-[#2C0F1A]/20 focus:outline-none focus:border-[#591D34]"
                  >
                    <option value="phone">Telephone</option>
                    <option value="email">Email</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="modal-contact-value"
                    className="block text-xs uppercase tracking-wider text-[#2C0F1A] font-medium mb-1"
                  >
                    {formData.contactMethod === 'phone' ? 'Phone Number *' : 'Email Address *'}
                  </label>
                  <input
                    id="modal-contact-value"
                    type={formData.contactMethod === 'phone' ? 'tel' : 'email'}
                    value={formData.contactValue}
                    onChange={(e) => {
                      setFormData({ ...formData, contactValue: e.target.value });
                      if (errors.contactValue) setErrors({ ...errors, contactValue: undefined });
                    }}
                    placeholder={
                      formData.contactMethod === 'phone' ? '079 000 00 00' : 'name@example.ch'
                    }
                    className={`w-full px-3.5 py-2.5 text-sm bg-white border ${
                      errors.contactValue ? 'border-red-600 bg-red-50/20' : 'border-[#2C0F1A]/20'
                    } focus:outline-none focus:border-[#591D34] transition-colors`}
                  />
                  {errors.contactValue && (
                    <p className="text-xs text-red-600 mt-1">{errors.contactValue}</p>
                  )}
                </div>
              </div>

              {/* Preferred Timing */}
              <div>
                <label
                  htmlFor="modal-timing"
                  className="block text-xs uppercase tracking-wider text-[#2C0F1A] font-medium mb-1"
                >
                  Preferred Timeframe for Visit / Call
                </label>
                <input
                  id="modal-timing"
                  type="text"
                  value={formData.preferredTiming}
                  onChange={(e) =>
                    setFormData({ ...formData, preferredTiming: e.target.value })
                  }
                  placeholder="e.g. Tuesday morning, next Thursday afternoon"
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#2C0F1A]/20 focus:outline-none focus:border-[#591D34]"
                />
              </div>

              {/* Notes */}
              <div>
                <label
                  htmlFor="modal-notes"
                  className="block text-xs uppercase tracking-wider text-[#2C0F1A] font-medium mb-1"
                >
                  Hair Styling Notes or Consultation Questions (Optional)
                </label>
                <textarea
                  id="modal-notes"
                  rows={3}
                  value={formData.stylingNotes}
                  onChange={(e) =>
                    setFormData({ ...formData, stylingNotes: e.target.value })
                  }
                  placeholder="Describe your current hair style, desired changes, or any specific considerations..."
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#2C0F1A]/20 focus:outline-none focus:border-[#591D34] resize-none"
                />
              </div>

              {/* Form Note & Submit */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-[11px] text-[#423035]/75">
                  Appointments are finalized in personal consultation.
                </span>
                <button
                  id="submit-modal-form-btn"
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#2C0F1A] text-[#FAF7F2] text-xs uppercase tracking-widest font-medium hover:bg-[#591D34] transition-colors cursor-pointer"
                >
                  <span>Send Consultation Request</span>
                  <Send className="w-3.5 h-3.5 text-[#DEB5BC]" />
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Modal Footer Note */}
        <div className="bg-[#FAF7F2] border-t border-[#2C0F1A]/10 px-6 py-3.5 flex items-center justify-between text-[11px] text-[#591D34]">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" />
            <span>Rue Numa-Droz 89 · La Chaux-de-Fonds</span>
          </div>
          <a
            href={`tel:${SALON_DETAILS.phoneRaw}`}
            className="hover:underline font-medium text-[#2C0F1A]"
          >
            Direct: 032 914 39 79
          </a>
        </div>
      </div>
    </div>
  );
};
