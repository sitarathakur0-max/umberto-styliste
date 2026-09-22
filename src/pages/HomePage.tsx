import React from 'react';
import { Phone, ArrowUpRight, MapPin, Compass, Sparkles, Check } from 'lucide-react';
import { PageId } from '../types';
import { SALON_DETAILS, SALON_IMAGES } from '../data/salonInfo';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  return (
    <div className="pt-24 sm:pt-28">
      {/* 1. EDITORIAL HERO SECTION */}
      <section
        id="hero-section"
        className="relative px-4 sm:px-8 max-w-7xl mx-auto pb-16 sm:pb-24"
        aria-label="Salon Introduction"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Editorial Copy */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F5EAEC] border border-[#DEB5BC]/60 text-[#591D34] text-[11px] uppercase tracking-[0.25em] font-medium">
              <Sparkles className="w-3 h-3 text-[#742945]" aria-hidden="true" />
              <span>Hair Salon · La Chaux-de-Fonds</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[#2C0F1A] leading-[1.08]">
              Hair styling shaped by dialogue, precision, and personal expression.
            </h1>

            <p className="font-sans text-base sm:text-lg text-[#423035] max-w-xl font-light leading-relaxed">
              Welcome to <strong className="font-medium text-[#2C0F1A]">Umberto Styliste</strong>, an independent hair salon located at{' '}
              <span className="text-[#2C0F1A] font-medium">{SALON_DETAILS.street}</span> in La Chaux-de-Fonds. We cultivate an unhurried, thoughtful atmosphere where every haircut and styling session begins with an individual consultation.
            </p>

            {/* Editorial Quick Facts / Location Bar */}
            <div className="pt-2 pb-2 border-y border-[#2C0F1A]/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#591D34]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#742945] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="font-semibold block uppercase tracking-wider text-[#2C0F1A]">
                    Salon Location
                  </span>
                  <span>{SALON_DETAILS.address}</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#742945] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="font-semibold block uppercase tracking-wider text-[#2C0F1A]">
                    Direct Appointments
                  </span>
                  <a
                    id="hero-phone-link"
                    href={`tel:${SALON_DETAILS.phoneRaw}`}
                    className="hover:text-[#2C0F1A] font-medium underline decoration-1 underline-offset-2"
                  >
                    {SALON_DETAILS.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                id="hero-call-salon-btn"
                href={`tel:${SALON_DETAILS.phoneRaw}`}
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 bg-[#2C0F1A] text-[#FAF7F2] text-xs uppercase tracking-widest font-medium hover:bg-[#591D34] transition-all duration-200 shadow-sm"
                aria-label="Call salon directly to book an appointment"
              >
                <Phone className="w-4 h-4 text-[#DEB5BC]" aria-hidden="true" />
                <span>Call the Salon ({SALON_DETAILS.phone})</span>
              </a>

              <button
                id="hero-book-consultation-btn"
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 border border-[#2C0F1A] text-[#2C0F1A] text-xs uppercase tracking-widest font-medium hover:bg-[#F5EAEC] transition-colors cursor-pointer"
              >
                <span>Book a Consultation</span>
                <ArrowUpRight className="w-4 h-4 text-[#591D34]" aria-hidden="true" />
              </button>

              <button
                id="hero-get-in-touch-btn"
                onClick={() => {
                  onNavigate('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs uppercase tracking-widest text-[#591D34] hover:text-[#2C0F1A] underline decoration-1 underline-offset-4 py-2 cursor-pointer"
              >
                Get in Touch →
              </button>
            </div>
          </div>

          {/* Right Editorial Image Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative p-2 bg-[#F5EAEC] border border-[#DEB5BC]/60">
              <div className="overflow-hidden aspect-4/5 sm:aspect-16/10 lg:aspect-4/5 relative bg-[#1F1417]">
                <img
                  src={SALON_IMAGES.hero}
                  alt="High fashion editorial portrait showing refined contemporary hair styling at Umberto Styliste"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-103"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F1417]/50 via-transparent to-transparent pointer-events-none" />
                
                {/* Editorial Caption Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#FAF7F2]/95 backdrop-blur-xs p-3 border border-[#2C0F1A]/10">
                  <div className="flex items-center justify-between text-[10px] tracking-widest uppercase text-[#591D34]">
                    <span className="font-semibold text-[#2C0F1A]">Editorial Focus</span>
                    <span>La Chaux-de-Fonds</span>
                  </div>
                  <p className="text-xs font-serif text-[#2C0F1A] italic mt-1">
                    Bespoke styling harmony · Rue Numa-Droz 89
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE EDITORIAL ETHOS & ESSAY SECTION */}
      <section
        id="ethos-section"
        className="bg-[#2C0F1A] text-[#FAF7F2] py-20 sm:py-28 px-4 sm:px-8 my-12"
        aria-label="Salon Philosophy"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left Big Typography */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs uppercase tracking-[0.3em] text-[#DEB5BC] block">
                The Salon Ethos
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light leading-tight text-[#FAF7F2]">
                &ldquo;Every cut begins not with the scissors, but with an attentive conversation.&rdquo;
              </h2>
              <p className="text-xs font-mono uppercase tracking-widest text-[#CB929B] pt-2">
                Umberto Styliste · Salon Philosophy
              </p>
            </div>

            {/* Right Editorial Columns */}
            <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-[#FAF7F2]/80 leading-relaxed font-light">
              <p>
                In a world of rushed routines and mechanized appointments, <strong className="text-white font-normal">Umberto Styliste</strong> remains anchored in the classic tradition of the attentive Swiss artisan salon. Located on Rue Numa-Droz in the historic UNESCO watchmaking city of La Chaux-de-Fonds, our space offers clients an intimate haven dedicated to thoughtful hair styling.
              </p>
              <p>
                We do not believe in forcing arbitrary trends upon natural hair patterns. Instead, our craft is focused on observing the way your hair moves, understanding your lifestyle, and sculpting proportions that feel organic, effortless, and flattering from every angle.
              </p>

              <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-[#FAF7F2]/15 text-xs text-[#EACFD3]">
                <div className="space-y-1.5">
                  <span className="uppercase tracking-widest font-semibold text-white block">
                    Individual Care
                  </span>
                  <p className="text-[#FAF7F2]/70 leading-normal">
                    Dedicated, one-on-one appointments without overlapping rush or distraction.
                  </p>
                </div>
                <div className="space-y-1.5">
                  <span className="uppercase tracking-widest font-semibold text-white block">
                    Consultation First
                  </span>
                  <p className="text-[#FAF7F2]/70 leading-normal">
                    Direct styling dialogue to align texture, length, and daily maintenance needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CRAFT & PHILOSOPHY ASYMMETRICAL SPREAD */}
      <section
        id="craft-section"
        className="px-4 sm:px-8 max-w-7xl mx-auto py-16 sm:py-24"
        aria-label="Styling Craft"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Editorial Image */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative p-3 bg-[#FAF7F2] border border-[#2C0F1A]/15 shadow-sm">
              <div className="overflow-hidden aspect-3/4 relative bg-[#2C0F1A]">
                <img
                  src={SALON_IMAGES.craft}
                  alt="Close-up detail of precision hair styling and scissors craft at Umberto Styliste"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center hover:scale-103 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="pt-3 flex items-center justify-between text-[11px] text-[#591D34] uppercase tracking-wider">
                <span>Atelier Discipline</span>
                <span>Rue Numa-Droz 89</span>
              </div>
            </div>
          </div>

          {/* Right Editorial Story */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#742945] font-semibold block">
              Precision & Texture
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#2C0F1A] tracking-tight leading-tight">
              A bespoke styling experience tailored to your natural character.
            </h2>
            <p className="text-sm sm:text-base text-[#423035] leading-relaxed">
              Every client arrives with a distinctive hair density, cowlick pattern, facial structure, and personal rhythm. At Umberto Styliste, the focus is placed entirely on creating styles that endure past the salon chair—cuts that fall into place with ease and reflect your authentic presence.
            </p>

            {/* Three Pillars */}
            <div className="space-y-4 pt-4 border-t border-[#2C0F1A]/10">
              <div className="flex items-start gap-4">
                <span className="font-serif text-xl text-[#742945] font-semibold shrink-0">01</span>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[#2C0F1A]">
                    In-Depth Consultation
                  </h3>
                  <p className="text-xs sm:text-sm text-[#423035]/80 mt-1 leading-relaxed">
                    Prior to any cut or color adjustment, we examine texture, growth habits, and styling preferences to create a harmonious plan.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="font-serif text-xl text-[#742945] font-semibold shrink-0">02</span>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[#2C0F1A]">
                    Precision Cutting & Proportion
                  </h3>
                  <p className="text-xs sm:text-sm text-[#423035]/80 mt-1 leading-relaxed">
                    Sculpting clean lines, weight distribution, and soft graduation that complement your natural facial architecture.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="font-serif text-xl text-[#742945] font-semibold shrink-0">03</span>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[#2C0F1A]">
                    Care & Vitality Respect
                  </h3>
                  <p className="text-xs sm:text-sm text-[#423035]/80 mt-1 leading-relaxed">
                    Preserving the hair fibre’s integrity and natural shine through disciplined techniques and attentive handling.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={() => {
                  onNavigate('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#2C0F1A] text-[#FAF7F2] text-xs uppercase tracking-widest font-medium hover:bg-[#591D34] transition-colors cursor-pointer"
              >
                <span>View Styling Services</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#DEB5BC]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PERSUASIVE INVITATION BANNER */}
      <section
        id="home-contact-banner"
        className="px-4 sm:px-8 max-w-7xl mx-auto pb-20 sm:pb-28"
        aria-label="Appointment Invitation"
      >
        <div className="bg-[#FAF7F2] border-2 border-[#2C0F1A] p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F5EAEC] rounded-full blur-3xl opacity-70 -mr-20 -mt-20 pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-[#742945] font-semibold block">
              Direct Telephone Appointments
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#2C0F1A] font-light leading-tight">
              Ready to discuss your hair styling or arrange your salon visit?
            </h2>
            <p className="text-sm sm:text-base text-[#423035] leading-relaxed">
              We warmly invite you to call our salon directly. We will take the time to answer your questions and reserve your dedicated consultation slot at Rue Numa-Droz 89 in La Chaux-de-Fonds.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                id="home-banner-call-btn"
                href={`tel:${SALON_DETAILS.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#2C0F1A] text-[#FAF7F2] text-xs uppercase tracking-widest font-medium hover:bg-[#591D34] transition-colors"
                aria-label={`Call ${SALON_DETAILS.phone}`}
              >
                <Phone className="w-4 h-4 text-[#DEB5BC]" />
                <span>Call {SALON_DETAILS.phone}</span>
              </a>

              <button
                id="home-banner-consult-btn"
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#2C0F1A] text-[#2C0F1A] text-xs uppercase tracking-widest font-medium hover:bg-[#F5EAEC] transition-colors cursor-pointer"
              >
                <span>Book a Consultation</span>
                <ArrowUpRight className="w-4 h-4 text-[#591D34]" />
              </button>
            </div>

            <div className="pt-4 flex items-center gap-2 text-xs text-[#591D34]">
              <Compass className="w-4 h-4" />
              <span>Rue Numa-Droz 89, 2300 La Chaux-de-Fonds, Switzerland</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
