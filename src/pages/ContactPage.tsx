import React, { useState } from 'react';
import { Phone, MapPin, Mail, Copy, Check, Send, Sparkles, Navigation, Clock, AlertCircle } from 'lucide-react';
import { SALON_DETAILS } from '../data/salonInfo';

interface ContactFormData {
  fullName: string;
  emailOrPhone: string;
  inquiryType: string;
  preferredTiming: string;
  message: string;
}

interface ContactErrors {
  fullName?: string;
  emailOrPhone?: string;
  message?: string;
}

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    emailOrPhone: '',
    inquiryType: 'Consultation & Appointment Inquiry',
    preferredTiming: '',
    message: '',
  });

  const [errors, setErrors] = useState<ContactErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(SALON_DETAILS.phone).then(() => {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    });
  };

  const validate = (): boolean => {
    const errs: ContactErrors = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = 'Name must be at least 2 characters long.';
    }

    if (!formData.emailOrPhone.trim()) {
      errs.emailOrPhone = 'Please provide a telephone number or email address.';
    } else if (formData.emailOrPhone.trim().length < 5) {
      errs.emailOrPhone = 'Please provide a valid contact detail.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please provide a brief note regarding your inquiry.';
    } else if (formData.message.trim().length < 5) {
      errs.message = 'Message must be at least 5 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      emailOrPhone: '',
      inquiryType: 'Consultation & Appointment Inquiry',
      preferredTiming: '',
      message: '',
    });
    setErrors({});
  };

  return (
    <div className="pt-24 sm:pt-28 pb-20 sm:pb-28">
      {/* 1. Page Header */}
      <section className="px-4 sm:px-8 max-w-7xl mx-auto pb-12 sm:pb-16 border-b border-[#2C0F1A]/10">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#742945] font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Salon Direct Contact</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#2C0F1A] font-light tracking-tight leading-[1.1]">
            Contact & Appointments
          </h1>
          <p className="text-base sm:text-lg text-[#423035] leading-relaxed font-light">
            We look forward to welcoming you to Umberto Styliste on Rue Numa-Droz in La Chaux-de-Fonds. Reach us directly by phone or send your consultation request below.
          </p>
        </div>
      </section>

      {/* 2. Primary Direct Contact Cards */}
      <section className="px-4 sm:px-8 max-w-7xl mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Telephone Card */}
          <div className="p-8 bg-[#2C0F1A] text-[#FAF7F2] border border-[#591D34]/40 relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.25em] text-[#DEB5BC] block">
                  Primary Contact
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] text-[#EACFD3] bg-[#421626] px-2.5 py-0.5">
                  Direct Line
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-light">
                Call the Salon
              </h2>
              <p className="text-xs sm:text-sm text-[#FAF7F2]/80 leading-relaxed">
                Calling is the quickest way to discuss your styling needs and reserve your dedicated consultation time with Umberto Styliste.
              </p>

              <div className="pt-2">
                <a
                  id="contact-page-phone-link"
                  href={`tel:${SALON_DETAILS.phoneRaw}`}
                  className="font-serif text-2xl sm:text-3xl text-white hover:text-[#DEB5BC] transition-colors block tracking-wider"
                  aria-label={`Call Umberto Styliste at ${SALON_DETAILS.phone}`}
                >
                  {SALON_DETAILS.phone}
                </a>
              </div>
            </div>

            <div className="pt-8 flex flex-wrap items-center gap-3">
              <a
                id="contact-card-call-btn"
                href={`tel:${SALON_DETAILS.phoneRaw}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#FAF7F2] text-[#2C0F1A] text-xs uppercase tracking-widest font-medium hover:bg-[#EACFD3] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#591D34]" />
                <span>Call Now</span>
              </a>
              <button
                id="copy-phone-btn"
                onClick={handleCopyPhone}
                className="inline-flex items-center gap-2 px-5 py-3 border border-[#FAF7F2]/30 text-[#FAF7F2] text-xs uppercase tracking-widest hover:border-white transition-colors cursor-pointer"
              >
                {copiedPhone ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#DEB5BC]" />
                    <span>Copy Number</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Location & Address Card */}
          <div className="p-8 bg-[#FAF7F2] border border-[#2C0F1A]/20 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.25em] text-[#742945] font-semibold block">
                  Salon Location
                </span>
                <span className="text-[11px] text-[#591D34] bg-[#F5EAEC] border border-[#DEB5BC]/60 px-2.5 py-0.5">
                  Neuchâtel, Switzerland
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#2C0F1A] font-light">
                Rue Numa-Droz 89
              </h2>
              <p className="text-xs sm:text-sm text-[#423035] leading-relaxed">
                Located on Rue Numa-Droz in central La Chaux-de-Fonds, accessible by foot from local transit stations and central avenues.
              </p>

              <div className="pt-2 text-sm text-[#2C0F1A] space-y-1">
                <p className="font-medium">Umberto Styliste</p>
                <p className="text-[#423035]">Rue Numa-Droz 89</p>
                <p className="text-[#423035]">2300 La Chaux-de-Fonds, Switzerland</p>
              </div>
            </div>

            <div className="pt-8 flex flex-wrap items-center gap-3">
              <a
                id="google-maps-directions-link"
                href="https://www.google.com/maps/search/?api=1&query=Rue+Numa-Droz+89+2300+La+Chaux-de-Fonds+Switzerland"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#2C0F1A] text-[#FAF7F2] text-xs uppercase tracking-widest font-medium hover:bg-[#591D34] transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-[#DEB5BC]" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Contact Form & Policy Section */}
      <section className="px-4 sm:px-8 max-w-7xl mx-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-white border border-[#2C0F1A]/15 p-6 sm:p-10 shadow-xs">
            <div className="border-b border-[#2C0F1A]/10 pb-4 mb-6">
              <span className="text-xs uppercase tracking-widest text-[#742945] font-semibold block">
                Written Message
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#2C0F1A] mt-1">
                Send a Consultation Inquiry
              </h2>
              <p className="text-xs sm:text-sm text-[#423035] mt-1">
                Fill out your details and styling preferences. We will reply to coordinate your appointment.
              </p>
            </div>

            {submitted ? (
              <div id="contact-form-success" className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#F5EAEC] text-[#742945] flex items-center justify-center mx-auto">
                  <Check className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-2xl text-[#2C0F1A]">
                  Thank You for Getting in Touch
                </h3>
                <p className="text-sm text-[#423035] max-w-md mx-auto leading-relaxed">
                  Your inquiry has been received. Umberto Styliste will review your request and get in touch at{' '}
                  <span className="font-semibold text-[#2C0F1A]">{formData.emailOrPhone}</span> to arrange your consultation visit.
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 bg-[#2C0F1A] text-[#FAF7F2] text-xs uppercase tracking-widest hover:bg-[#591D34] transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs uppercase tracking-wider text-[#2C0F1A] font-medium mb-1.5"
                  >
                    Full Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                    }}
                    placeholder="Your name"
                    className={`w-full px-4 py-3 text-sm bg-[#FAF7F2] border ${
                      errors.fullName ? 'border-red-600 bg-red-50/20' : 'border-[#2C0F1A]/20'
                    } focus:outline-none focus:border-[#591D34] transition-colors`}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>
                  )}
                </div>

                {/* Email or Phone */}
                <div>
                  <label
                    htmlFor="contact-email-phone"
                    className="block text-xs uppercase tracking-wider text-[#2C0F1A] font-medium mb-1.5"
                  >
                    Telephone Number or Email Address *
                  </label>
                  <input
                    id="contact-email-phone"
                    type="text"
                    value={formData.emailOrPhone}
                    onChange={(e) => {
                      setFormData({ ...formData, emailOrPhone: e.target.value });
                      if (errors.emailOrPhone) setErrors({ ...errors, emailOrPhone: undefined });
                    }}
                    placeholder="079 123 45 67 or yourname@example.ch"
                    className={`w-full px-4 py-3 text-sm bg-[#FAF7F2] border ${
                      errors.emailOrPhone ? 'border-red-600 bg-red-50/20' : 'border-[#2C0F1A]/20'
                    } focus:outline-none focus:border-[#591D34] transition-colors`}
                  />
                  {errors.emailOrPhone && (
                    <p className="text-xs text-red-600 mt-1">{errors.emailOrPhone}</p>
                  )}
                </div>

                {/* Inquiry Type & Preferred Timing */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-inquiry-type"
                      className="block text-xs uppercase tracking-wider text-[#2C0F1A] font-medium mb-1.5"
                    >
                      Inquiry Focus
                    </label>
                    <select
                      id="contact-inquiry-type"
                      value={formData.inquiryType}
                      onChange={(e) =>
                        setFormData({ ...formData, inquiryType: e.target.value })
                      }
                      className="w-full px-4 py-3 text-sm bg-[#FAF7F2] border border-[#2C0F1A]/20 focus:outline-none focus:border-[#591D34]"
                    >
                      <option value="Consultation & Appointment Inquiry">
                        Consultation & Appointment
                      </option>
                      <option value="Haircut & Styling Dialogue">
                        Haircut & Styling Guidance
                      </option>
                      <option value="General Salon Information">
                        General Salon Information
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-preferred-timing"
                      className="block text-xs uppercase tracking-wider text-[#2C0F1A] font-medium mb-1.5"
                    >
                      Preferred Days / Times
                    </label>
                    <input
                      id="contact-preferred-timing"
                      type="text"
                      value={formData.preferredTiming}
                      onChange={(e) =>
                        setFormData({ ...formData, preferredTiming: e.target.value })
                      }
                      placeholder="e.g. Wednesday morning"
                      className="w-full px-4 py-3 text-sm bg-[#FAF7F2] border border-[#2C0F1A]/20 focus:outline-none focus:border-[#591D34]"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs uppercase tracking-wider text-[#2C0F1A] font-medium mb-1.5"
                  >
                    Your Message / Styling Request *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    placeholder="Tell us about your hair, the service you are looking for, or any questions for Umberto Styliste..."
                    className={`w-full px-4 py-3 text-sm bg-[#FAF7F2] border ${
                      errors.message ? 'border-red-600 bg-red-50/20' : 'border-[#2C0F1A]/20'
                    } focus:outline-none focus:border-[#591D34] transition-colors resize-none`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-600 mt-1">{errors.message}</p>
                  )}
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-[#591D34]/80">
                    * Required fields. All appointments confirmed personally.
                  </span>
                  <button
                    id="submit-contact-form-btn"
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#2C0F1A] text-[#FAF7F2] text-xs uppercase tracking-widest font-medium hover:bg-[#591D34] transition-colors cursor-pointer"
                  >
                    <span>Submit Inquiry</span>
                    <Send className="w-3.5 h-3.5 text-[#DEB5BC]" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Practical Notes & Address Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 bg-[#FAF7F2] border border-[#2C0F1A]/20 space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#742945] font-semibold block">
                Appointment Policy
              </span>
              <h3 className="font-serif text-2xl text-[#2C0F1A]">
                Personalized Attention
              </h3>
              <p className="text-sm text-[#423035] leading-relaxed">
                To maintain a tranquil environment and give each client undivided focus, we do not double-book or rush our appointments.
              </p>
              <p className="text-sm text-[#423035] leading-relaxed">
                If you need to reschedule or have questions before your arrival, please call us in advance at <a href={`tel:${SALON_DETAILS.phoneRaw}`} className="font-medium text-[#2C0F1A] underline decoration-1">{SALON_DETAILS.phone}</a>.
              </p>
            </div>

            <div className="p-8 bg-[#F5EAEC] border border-[#DEB5BC] space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#591D34] font-semibold block">
                Neighborhood & Arrival
              </span>
              <h3 className="font-serif text-2xl text-[#2C0F1A]">
                La Chaux-de-Fonds
              </h3>
              <p className="text-sm text-[#423035] leading-relaxed">
                Umberto Styliste is nestled in the characteristic urban grid of La Chaux-de-Fonds, known worldwide for its watchmaking town planning and architecture.
              </p>
              <div className="pt-2 text-xs text-[#591D34] space-y-2">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#742945] shrink-0 mt-0.5" />
                  <span>Rue Numa-Droz 89, 2300 La Chaux-de-Fonds</span>
                </div>
                <div className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-[#742945] shrink-0 mt-0.5" />
                  <span>032 914 39 79</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
