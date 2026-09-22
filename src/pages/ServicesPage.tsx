import React from 'react';
import { Phone, ArrowUpRight, Check, Sparkles, MessageCircle, HelpCircle } from 'lucide-react';
import { PageId } from '../types';
import { SALON_DETAILS } from '../data/salonInfo';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  return (
    <div className="pt-24 sm:pt-28 pb-20 sm:pb-28">
      {/* 1. Header Banner */}
      <section className="px-4 sm:px-8 max-w-7xl mx-auto pb-12 sm:pb-16 border-b border-[#2C0F1A]/10">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#742945] font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Artisanal Hair Disciplines</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#2C0F1A] font-light tracking-tight leading-[1.1]">
            Styling Services & Consultations
          </h1>
          <p className="text-base sm:text-lg text-[#423035] leading-relaxed font-light">
            At Umberto Styliste, hair design is tailored to the individual. Every appointment begins with an in-depth dialogue to align technique with your hair’s unique characteristics.
          </p>
        </div>
      </section>

      {/* 2. Editorial Note on Bespoke Services & Appointments */}
      <section className="px-4 sm:px-8 max-w-7xl mx-auto py-8">
        <div className="p-6 sm:p-8 bg-[#F5EAEC] border border-[#DEB5BC] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-[#591D34] font-semibold block">
              Bespoke Salon Approach
            </span>
            <h2 className="font-serif text-xl sm:text-2xl text-[#2C0F1A]">
              Personalized Consultations & Direct Booking
            </h2>
            <p className="text-xs sm:text-sm text-[#421626]/80 leading-relaxed">
              Because every client’s hair density, length, texture, and desired outcome are distinct, treatments and exact requirements are determined during your personal consultation. We invite you to call our salon directly to discuss your styling desires.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3">
            <a
              id="services-top-call-btn"
              href={`tel:${SALON_DETAILS.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#2C0F1A] text-[#FAF7F2] text-xs uppercase tracking-widest font-medium hover:bg-[#591D34] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#DEB5BC]" />
              <span>Call {SALON_DETAILS.phone}</span>
            </a>
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#2C0F1A] text-[#2C0F1A] text-xs uppercase tracking-widest font-medium hover:bg-[#FAF7F2] transition-colors cursor-pointer"
            >
              <span>Book Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#591D34]" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. Editorial Disciplines (No invented prices, no fake menus) */}
      <section className="px-4 sm:px-8 max-w-7xl mx-auto py-12 sm:py-16">
        <div className="space-y-16">
          {/* Discipline 1: Consultation */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-[#2C0F1A]/10 pt-10">
            <div className="lg:col-span-4">
              <span className="text-xs font-mono text-[#742945] uppercase tracking-widest block mb-1">
                Discipline 01
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#2C0F1A] font-light">
                Individual Consultation & Analysis
              </h3>
            </div>
            <div className="lg:col-span-8 space-y-4 text-sm sm:text-base text-[#423035] leading-relaxed">
              <p>
                The cornerstone of Umberto Styliste is the introductory consultation. We take the time to examine your hair’s natural fall, growth whorls, past treatments, and everyday routine.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-[#591D34] pt-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#742945]" />
                  <span>Assessment of hair texture, porosity, and natural silhouette</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#742945]" />
                  <span>Dialogue regarding maintenance routines and styling preferences</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#742945]" />
                  <span>Tailored recommendations suited to your facial contours</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Discipline 2: Precision Cutting */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-[#2C0F1A]/10 pt-10">
            <div className="lg:col-span-4">
              <span className="text-xs font-mono text-[#742945] uppercase tracking-widest block mb-1">
                Discipline 02
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#2C0F1A] font-light">
                Precision Cutting & Sculptural Shaping
              </h3>
            </div>
            <div className="lg:col-span-8 space-y-4 text-sm sm:text-base text-[#423035] leading-relaxed">
              <p>
                Hair cutting is practiced as a craft of volume control and balance. Whether creating defined architectural perimeters or soft, textured layers, cuts are engineered to grow out gracefully between visits and fall naturally without requiring hours of daily effort.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-[#591D34] pt-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#742945]" />
                  <span>Bespoke haircuts adapted to individual hair flow and crown position</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#742945]" />
                  <span>Weight removal and interior texturizing for natural bounce</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#742945]" />
                  <span>Finishing and guidance on effortless at-home styling</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Discipline 3: Color & Nuance */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-[#2C0F1A]/10 pt-10">
            <div className="lg:col-span-4">
              <span className="text-xs font-mono text-[#742945] uppercase tracking-widest block mb-1">
                Discipline 03
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#2C0F1A] font-light">
                Color Harmony & Chromatic Nuance
              </h3>
            </div>
            <div className="lg:col-span-8 space-y-4 text-sm sm:text-base text-[#423035] leading-relaxed">
              <p>
                Color at our salon is approached with subtlety and respect for hair integrity. We seek tones that illuminate your skin complexion and enrich your natural pigment, rather than overwhelming it with harsh contrasts.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-[#591D34] pt-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#742945]" />
                  <span>Personalized shade matching and tone harmony evaluation</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#742945]" />
                  <span>Careful dimensional placement and grey blending</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#742945]" />
                  <span>Gentle formulations preserving cuticle softness and shine</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Discipline 4: Conditioning & Fibre Care */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-[#2C0F1A]/10 pt-10">
            <div className="lg:col-span-4">
              <span className="text-xs font-mono text-[#742945] uppercase tracking-widest block mb-1">
                Discipline 04
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#2C0F1A] font-light">
                Hair Vitality & Conditioning Discipline
              </h3>
            </div>
            <div className="lg:col-span-8 space-y-4 text-sm sm:text-base text-[#423035] leading-relaxed">
              <p>
                Healthy hair is the canvas for all beautiful styling. We evaluate scalp condition and fibre health, recommending tailored conditioning rituals to restore moisture, elasticity, and natural radiance.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-[#591D34] pt-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#742945]" />
                  <span>Deep moisture replenishing and scalp comfort</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#742945]" />
                  <span>Thermal and environmental protection advice</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#742945]" />
                  <span>Long-term hair care strategies suited to Swiss seasonal climates</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Practical Details Card */}
      <section className="px-4 sm:px-8 max-w-7xl mx-auto pt-8">
        <div className="bg-[#FAF7F2] border border-[#2C0F1A]/20 p-8 sm:p-12 space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#742945] font-semibold block">
              How Appointments Work
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#2C0F1A]">
              Scheduling Your Visit at Rue Numa-Droz 89
            </h2>
            <p className="text-sm text-[#423035] leading-relaxed">
              To give every client our undivided attention, all visits are scheduled in advance by telephone. When you call, we will discuss your availability and the time required for your consultation and service.
            </p>
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              id="services-bottom-call-btn"
              href={`tel:${SALON_DETAILS.phoneRaw}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#2C0F1A] text-[#FAF7F2] text-xs uppercase tracking-widest font-medium hover:bg-[#591D34] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#DEB5BC]" />
              <span>Call the Salon ({SALON_DETAILS.phone})</span>
            </a>
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-8 py-4 border border-[#2C0F1A] text-[#2C0F1A] text-xs uppercase tracking-widest font-medium hover:bg-[#F5EAEC] transition-colors cursor-pointer"
            >
              <span>Book a Consultation</span>
              <ArrowUpRight className="w-4 h-4 text-[#591D34]" />
            </button>
            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs uppercase tracking-widest text-[#591D34] hover:text-[#2C0F1A] underline decoration-1 underline-offset-4 py-2 cursor-pointer"
            >
              Visit Contact Page →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
