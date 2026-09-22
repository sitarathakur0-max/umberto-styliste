import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Menu, X, ArrowUpRight } from 'lucide-react';
import { PageId } from '../types';
import { SALON_DETAILS } from '../data/salonInfo';

interface HeaderProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activePage,
  onNavigate,
  onOpenConsultation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#2C0F1A]/10 shadow-xs'
          : 'bg-[#FAF7F2] border-b border-[#2C0F1A]/8'
      }`}
    >
      {/* Top Editorial Ribbon */}
      <div className="border-b border-[#2C0F1A]/8 bg-[#2C0F1A] text-[#FAF7F2] text-xs py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-[11px] sm:text-xs tracking-wider uppercase">
          <div className="flex items-center gap-2 text-[#EACFD3]">
            <MapPin className="w-3.5 h-3.5 text-[#DEB5BC]" aria-hidden="true" />
            <span>Rue Numa-Droz 89 · 2300 La Chaux-de-Fonds, Switzerland</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline text-[#CB929B]">Personal Hairstyling & Consultation</span>
            <a
              id="header-top-phone-link"
              href={`tel:${SALON_DETAILS.phoneRaw}`}
              className="flex items-center gap-1.5 font-medium text-[#FAF7F2] hover:text-[#DEB5BC] transition-colors"
              aria-label={`Call Umberto Styliste at ${SALON_DETAILS.phone}`}
            >
              <Phone className="w-3 h-3 text-[#DEB5BC]" aria-hidden="true" />
              <span>{SALON_DETAILS.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo / Wordmark */}
        <button
          id="brand-logo-btn"
          onClick={() => handleNavClick('home')}
          className="text-left group cursor-pointer"
          aria-label="Umberto Styliste - Return to Home"
        >
          <span className="block font-serif text-2xl sm:text-3xl tracking-[0.12em] font-medium text-[#2C0F1A] uppercase leading-none group-hover:text-[#591D34] transition-colors">
            Umberto
          </span>
          <span className="block font-sans text-[10px] sm:text-[11px] tracking-[0.32em] text-[#742945] uppercase mt-1">
            Styliste · La Chaux-de-Fonds
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav
          id="desktop-nav"
          className="hidden md:flex items-center gap-8 lg:gap-10"
          aria-label="Main Navigation"
        >
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm tracking-widest uppercase transition-all duration-200 relative py-1 cursor-pointer ${
                  isActive
                    ? 'text-[#2C0F1A] font-semibold'
                    : 'text-[#591D34]/80 hover:text-[#2C0F1A]'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#591D34]"
                    aria-hidden="true"
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            id="header-call-btn"
            href={`tel:${SALON_DETAILS.phoneRaw}`}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest px-4 py-2.5 border border-[#2C0F1A]/25 text-[#2C0F1A] hover:bg-[#FAF7F2] hover:border-[#2C0F1A] transition-colors rounded-none"
            aria-label="Call the Salon directly"
          >
            <Phone className="w-3.5 h-3.5 text-[#591D34]" aria-hidden="true" />
            <span>Call the Salon</span>
          </a>
          <button
            id="header-consultation-btn"
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest px-5 py-2.5 bg-[#2C0F1A] text-[#FAF7F2] hover:bg-[#421626] transition-colors rounded-none cursor-pointer"
          >
            <span>Book a Consultation</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#DEB5BC]" aria-hidden="true" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            id="mobile-quick-call-btn"
            href={`tel:${SALON_DETAILS.phoneRaw}`}
            className="p-2 text-[#2C0F1A] border border-[#2C0F1A]/20 hover:bg-[#EACFD3]/30"
            aria-label="Call salon"
          >
            <Phone className="w-4 h-4 text-[#591D34]" />
          </a>
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#2C0F1A] hover:text-[#591D34] focus:outline-none"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden bg-[#FAF7F2] border-b border-[#2C0F1A]/15 px-6 py-8 shadow-xl"
        >
          <nav className="flex flex-col gap-5">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left text-lg font-serif tracking-wider uppercase pb-2 border-b border-[#2C0F1A]/10 flex items-center justify-between ${
                    isActive
                      ? 'text-[#2C0F1A] font-bold pl-2 border-l-2 border-l-[#591D34]'
                      : 'text-[#591D34]/80'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="text-xs font-sans tracking-widest text-[#742945]">Active</span>}
                </button>
              );
            })}
            <div className="pt-4 flex flex-col gap-3">
              <a
                id="mobile-drawer-call-btn"
                href={`tel:${SALON_DETAILS.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#FAF7F2] border border-[#2C0F1A] text-[#2C0F1A] text-xs uppercase tracking-widest"
              >
                <Phone className="w-3.5 h-3.5 text-[#591D34]" />
                <span>Call {SALON_DETAILS.phone}</span>
              </a>
              <button
                id="mobile-drawer-consult-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#2C0F1A] text-[#FAF7F2] text-xs uppercase tracking-widest"
              >
                <span>Book a Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#DEB5BC]" />
              </button>
            </div>
            <div className="pt-2 text-[11px] text-[#742945]/80 text-center tracking-wider">
              {SALON_DETAILS.address}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
