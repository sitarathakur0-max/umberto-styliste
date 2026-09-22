import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';
import { Phone, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SALON_DETAILS } from './data/salonInfo';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('home');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleNavigate = (page: PageId) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2C0F1A] font-sans antialiased selection:bg-[#EACFD3] selection:text-[#2C0F1A]">
      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#2C0F1A] text-[#FAF7F2] text-xs uppercase tracking-widest"
      >
        Skip to main content
      </a>

      {/* Global Header */}
      <Header
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* Main Content Area */}
      <main id="main-content" className="grow">
        {activePage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        )}
        {activePage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        )}
        {activePage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        )}
        {activePage === 'contact' && <ContactPage />}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* Consultation Booking / Inquiry Modal */}
      <AppointmentModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        onSubmittedSuccess={() => {
          showToast('Consultation request sent. We will call you soon.');
        }}
      />

      {/* Floating Bottom Quick Action on Mobile */}
      <aside
        id="mobile-quick-bar"
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#2C0F1A] text-[#FAF7F2] border-t border-[#421626] px-4 py-2.5 flex items-center justify-between shadow-lg"
        aria-label="Mobile quick actions"
      >
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-widest text-[#DEB5BC]">
            Umberto Styliste
          </span>
          <span className="text-xs font-serif text-white">032 914 39 79</span>
        </div>
        <div className="flex items-center gap-2">
          <a
            id="floating-call-btn"
            href={`tel:${SALON_DETAILS.phoneRaw}`}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#FAF7F2] text-[#2C0F1A] text-[11px] uppercase tracking-wider font-semibold"
          >
            <Phone className="w-3 h-3 text-[#591D34]" />
            <span>Call</span>
          </a>
          <button
            id="floating-consult-btn"
            onClick={() => setIsConsultationOpen(true)}
            className="inline-flex items-center gap-1 px-3.5 py-2 bg-[#591D34] text-[#FAF7F2] text-[11px] uppercase tracking-wider font-medium cursor-pointer"
          >
            <span>Consult</span>
            <ArrowUpRight className="w-3 h-3 text-[#DEB5BC]" />
          </button>
        </div>
      </aside>

      {/* Toast Notification */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-16 sm:bottom-8 right-4 sm:right-8 z-50 max-w-sm bg-[#2C0F1A] text-[#FAF7F2] border border-[#DEB5BC]/60 p-4 shadow-xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300"
        >
          <CheckCircle2 className="w-5 h-5 text-[#DEB5BC] shrink-0" />
          <p className="text-xs sm:text-sm text-[#FAF7F2] font-medium">{toastMessage}</p>
        </div>
      )}
    </div>
  );
}
