import React from 'react';
import { Phone, MapPin, ArrowUp, ArrowUpRight } from 'lucide-react';
import { PageId } from '../types';
import { SALON_DETAILS } from '../data/salonInfo';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenConsultation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#1F1417] text-[#F7F3EC] pt-16 sm:pt-20 pb-12 border-t border-[#421626]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Editorial Ribbon */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-14 border-b border-[#FAF7F2]/10">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.3em] text-[#DEB5BC] block mb-3">
              Independent Hairdresser & Stylist
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#FAF7F2] font-normal leading-[1.15]">
              Attentive styling craft shaped for the individual.
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              id="footer-call-salon-cta"
              href={`tel:${SALON_DETAILS.phoneRaw}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#FAF7F2] text-[#1F1417] text-xs uppercase tracking-widest font-medium hover:bg-[#EACFD3] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#591D34]" />
              <span>Call {SALON_DETAILS.phone}</span>
            </a>
            <button
              id="footer-book-consult-cta"
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#FAF7F2]/30 text-[#FAF7F2] text-xs uppercase tracking-widest hover:border-[#FAF7F2] transition-colors cursor-pointer"
            >
              <span>Book a Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#DEB5BC]" />
            </button>
          </div>
        </div>

        {/* Multi-column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-14 border-b border-[#FAF7F2]/10">
          {/* Brand & Address Column */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="font-serif text-2xl tracking-widest uppercase text-[#FAF7F2]">
              Umberto Styliste
            </h3>
            <p className="text-sm text-[#FAF7F2]/70 leading-relaxed max-w-sm">
              A local hair salon in the watchmaking town of La Chaux-de-Fonds, dedicated to personal consultation and thoughtful hairstyling.
            </p>
            <div className="pt-2 space-y-2 text-sm text-[#EACFD3]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#DEB5BC] shrink-0 mt-0.5" />
                <span>
                  {SALON_DETAILS.street}
                  <br />
                  {SALON_DETAILS.postalCode} {SALON_DETAILS.city}, {SALON_DETAILS.country}
                </span>
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-[#DEB5BC] shrink-0" />
                <a
                  href={`tel:${SALON_DETAILS.phoneRaw}`}
                  className="hover:text-white transition-colors underline decoration-1 underline-offset-4"
                >
                  {SALON_DETAILS.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#DEB5BC] block font-medium">
              Navigation
            </span>
            <ul className="space-y-2.5 text-sm">
              {(['home', 'about', 'services', 'contact'] as PageId[]).map((page) => (
                <li key={page}>
                  <button
                    onClick={() => {
                      onNavigate(page);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-[#FAF7F2]/75 hover:text-white transition-colors uppercase tracking-wider text-xs cursor-pointer"
                  >
                    {page}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Salon Ethos & Booking Notice */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#DEB5BC] block font-medium">
              Consultations & Visits
            </span>
            <p className="text-sm text-[#FAF7F2]/70 leading-relaxed">
              Appointments and consultations are scheduled directly by telephone. This ensures dedicated, undisturbed time to understand your hair character and personal style.
            </p>
            <div className="p-4 bg-[#2C0F1A]/70 border border-[#591D34]/50 mt-3">
              <span className="block text-xs uppercase tracking-wider text-[#FAF7F2] font-medium mb-1">
                Direct Appointment Contact
              </span>
              <p className="text-xs text-[#EACFD3]/80 mb-2">
                Please call our salon at Rue Numa-Droz 89:
              </p>
              <a
                href={`tel:${SALON_DETAILS.phoneRaw}`}
                className="text-base font-serif tracking-wider text-[#FAF7F2] hover:text-[#DEB5BC] transition-colors font-medium"
              >
                032 914 39 79
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF7F2]/50 tracking-wider">
          <p>© {new Date().getFullYear()} Umberto Styliste · La Chaux-de-Fonds. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Rue Numa-Droz 89</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#EACFD3] hover:text-white transition-colors cursor-pointer"
              aria-label="Scroll back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
