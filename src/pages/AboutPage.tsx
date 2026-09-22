import React from 'react';
import { Phone, MapPin, Compass, ArrowUpRight, Sparkles } from 'lucide-react';
import { PageId } from '../types';
import { SALON_DETAILS, SALON_IMAGES } from '../data/salonInfo';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
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
            <span>Salon Identity & Craft</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#2C0F1A] font-light tracking-tight leading-[1.1]">
            About Umberto Styliste
          </h1>
          <p className="text-base sm:text-lg text-[#423035] leading-relaxed font-light">
            An independent hairstyling atelier on Rue Numa-Droz in La Chaux-de-Fonds, dedicated to personal consultation, thoughtful hair design, and genuine client rapport.
          </p>
        </div>
      </section>

      {/* 2. Editorial Narrative Section with Portrait Image */}
      <section className="px-4 sm:px-8 max-w-7xl mx-auto py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Editorial Narrative */}
          <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-[#423035] leading-relaxed">
            <span className="text-xs uppercase tracking-[0.25em] text-[#591D34] font-semibold block">
              La Chaux-de-Fonds Heritage
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2C0F1A] font-normal tracking-tight">
              An unhurried salon experience in the heart of the Jura mountains.
            </h2>
            <p>
              Located at <strong className="text-[#2C0F1A] font-medium">{SALON_DETAILS.street}</strong> in the renowned Swiss watchmaking town of La Chaux-de-Fonds, <strong className="text-[#2C0F1A] font-medium">Umberto Styliste</strong> was created as a local hairstyling salon where the pace slows down and the individual takes center stage.
            </p>
            <p>
              Rather than treating haircutting as a rapid sequence of transactions, our salon embraces an artisanal approach: taking time to examine the hair’s natural fall, discuss personal lifestyle demands, and discover proportions that suit the client’s unique features.
            </p>

            <div className="p-6 bg-[#F5EAEC] border-l-3 border-[#742945] my-6 space-y-2">
              <p className="font-serif text-lg sm:text-xl text-[#2C0F1A] italic">
                &ldquo;True elegance in hairstyling is not about imposing a rigid template. It is about revealing the harmony between the person, the silhouette, and the hair’s natural texture.&rdquo;
              </p>
              <span className="text-xs uppercase tracking-widest text-[#742945] block pt-1">
                Umberto Styliste Ethos
              </span>
            </div>

            <p>
              Whether you are seeking a subtle refinement to your existing cut, a complete transformation, or guidance on maintaining hair vitality, our consultations are grounded in open conversation, careful technique, and respect for the craft.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                id="about-call-salon-btn"
                href={`tel:${SALON_DETAILS.phoneRaw}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#2C0F1A] text-[#FAF7F2] text-xs uppercase tracking-widest font-medium hover:bg-[#591D34] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#DEB5BC]" />
                <span>Call the Salon ({SALON_DETAILS.phone})</span>
              </a>
              <button
                id="about-book-consult-btn"
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#2C0F1A] text-[#2C0F1A] text-xs uppercase tracking-widest font-medium hover:bg-[#F5EAEC] transition-colors cursor-pointer"
              >
                <span>Book a Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#591D34]" />
              </button>
            </div>
          </div>

          {/* Right Image Frame */}
          <div className="lg:col-span-5">
            <div className="p-3 bg-[#FAF7F2] border border-[#2C0F1A]/15 shadow-sm">
              <div className="overflow-hidden aspect-3/4 relative bg-[#2C0F1A]">
                <img
                  src={SALON_IMAGES.portrait}
                  alt="Editorial portrait capturing the thoughtful styling approach at Umberto Styliste"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center hover:scale-103 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="pt-3 flex items-center justify-between text-[11px] text-[#591D34] uppercase tracking-wider">
                <span>Personal Styling Focus</span>
                <span>Rue Numa-Droz 89</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Salon Values & Principles (Grounded in genuine craft, no fake awards) */}
      <section className="bg-[#FAF7F2] border-t border-b border-[#2C0F1A]/10 py-16 sm:py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-[#742945] font-semibold block mb-2">
              Our Core Principles
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2C0F1A] font-light">
              How we approach every appointment.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white border border-[#2C0F1A]/10 space-y-3">
              <span className="text-xs font-mono text-[#742945] uppercase tracking-widest block">
                Principle I
              </span>
              <h3 className="font-serif text-xl text-[#2C0F1A]">Attentive Dialogue</h3>
              <p className="text-xs sm:text-sm text-[#423035]/80 leading-relaxed">
                Before scissors meet hair, we listen to your habits, your daily styling time, and how you want to feel. Consultation is the foundation of enduring styling.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#2C0F1A]/10 space-y-3">
              <span className="text-xs font-mono text-[#742945] uppercase tracking-widest block">
                Principle II
              </span>
              <h3 className="font-serif text-xl text-[#2C0F1A]">Structural Harmony</h3>
              <p className="text-xs sm:text-sm text-[#423035]/80 leading-relaxed">
                We work with the head’s bone structure and hair grain to craft balanced silhouettes that grow out gracefully between visits.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#2C0F1A]/10 space-y-3">
              <span className="text-xs font-mono text-[#742945] uppercase tracking-widest block">
                Principle III
              </span>
              <h3 className="font-serif text-xl text-[#2C0F1A]">A Calm Environment</h3>
              <p className="text-xs sm:text-sm text-[#423035]/80 leading-relaxed">
                Our salon at Rue Numa-Droz 89 is a relaxed setting designed to let you unwind while receiving personalized, focused styling care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Location Invitation */}
      <section className="px-4 sm:px-8 max-w-7xl mx-auto pt-16">
        <div className="p-8 sm:p-12 bg-[#2C0F1A] text-[#FAF7F2] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#DEB5BC] block">
              Visit Us in La Chaux-de-Fonds
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-light">
              Rue Numa-Droz 89 · 2300 La Chaux-de-Fonds
            </h2>
            <p className="text-xs sm:text-sm text-[#EACFD3]/80 max-w-xl">
              All appointments and consultations are arranged directly by telephone at 032 914 39 79.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a
              href={`tel:${SALON_DETAILS.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#FAF7F2] text-[#2C0F1A] text-xs uppercase tracking-widest font-medium hover:bg-[#EACFD3] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#591D34]" />
              <span>Call 032 914 39 79</span>
            </a>
            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#FAF7F2]/40 text-[#FAF7F2] text-xs uppercase tracking-widest hover:border-[#FAF7F2] transition-colors cursor-pointer"
            >
              <span>Get in Touch</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
