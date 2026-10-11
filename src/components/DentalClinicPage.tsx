"use client";

import React, { useState } from "react";
import { CLINIC_CONFIG } from "@/data/clinicData";
import {
  Phone,
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  ChevronDown,
  Shield,
  Award,
  Sparkles,
  Star,
  ArrowRight,
  MessageCircle,
  Menu,
  X,
  Play,
  Cpu,
  Scan,
  Users,
  GraduationCap,
  HeartPulse,
  Navigation,
  Check
} from "lucide-react";

export default function DentalClinicPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  // Booking Form State
  const [bookingName, setBookingName] = useState("");
  const [bookingPhone, setBookingPhone] = useState("");
  const [bookingService, setBookingService] = useState("CEREC Single-Visit Crown");
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("Morning (10:00 AM - 1:00 PM)");
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingName || !bookingPhone) return;
    setBookingSuccess(true);
  };

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % CLINIC_CONFIG.testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + CLINIC_CONFIG.testimonials.length) % CLINIC_CONFIG.testimonials.length);
  };

  const currentTestimonial = CLINIC_CONFIG.testimonials[currentTestimonialIndex];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-teal-600 selection:text-white w-full max-w-full overflow-x-clip">
      {/* ============================================================ */}
      {/* HEADER: Fully responsive matching luxury clinical aesthetic */}
      {/* ============================================================ */}
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
        <div className="relative w-full">
          <div className="absolute inset-x-0 bottom-0 h-[3px] bg-teal-500/80"></div>

          <div className="page-width h-20 flex items-center justify-between gap-4">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group shrink-0" aria-label="Go to homepage">
              <div className="size-8 overflow-hidden rounded-full bg-gradient-to-br from-teal-500 to-teal-700 shadow-md flex items-center justify-center text-white">
                <Sparkles className="size-4" />
              </div>
              <span className="text-[17px] sm:text-[18px] tracking-[0.22em] uppercase text-slate-700 group-hover:text-slate-900 transition-colors font-medium">
                Aura
              </span>
            </a>

            {/* Main Desktop Navigation (xl+ to guarantee spacious luxury editorial spacing) */}
            <nav aria-label="Main" className="hidden xl:flex items-center gap-7 2xl:gap-9">
              <a
                href="#"
                className="flex items-center gap-2 text-[12px] 2xl:text-[13px] tracking-[0.2em] uppercase text-slate-700 hover:text-teal-700 transition-colors"
              >
                <span>Home</span>
              </a>
              <a
                href="#about"
                className="flex items-center gap-2 text-[12px] 2xl:text-[13px] tracking-[0.2em] uppercase text-slate-700 hover:text-teal-700 transition-colors"
              >
                <span>About Us</span>
              </a>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  className="flex items-center gap-1 text-[12px] 2xl:text-[13px] tracking-[0.2em] uppercase text-slate-700 hover:text-teal-700 transition-colors py-2"
                  aria-expanded={servicesDropdownOpen}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      servicesDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {servicesDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-60 rounded-2xl bg-white shadow-xl ring-1 ring-black/5 border border-slate-100 py-4 flex flex-col gap-1 z-50 animate-in fade-in duration-200">
                    <a
                      href="#services"
                      onClick={() => setServicesDropdownOpen(false)}
                      className="px-5 py-2 text-[12px] tracking-[0.2em] uppercase text-slate-600 hover:text-teal-700 hover:bg-teal-50/60 transition-colors"
                    >
                      Dental Services
                    </a>
                    <a
                      href="#technology"
                      onClick={() => setServicesDropdownOpen(false)}
                      className="px-5 py-2 text-[12px] tracking-[0.2em] uppercase text-slate-600 hover:text-teal-700 hover:bg-teal-50/60 transition-colors"
                    >
                      Sterilization
                    </a>
                    <a
                      href="#technology"
                      onClick={() => setServicesDropdownOpen(false)}
                      className="px-5 py-2 text-[12px] tracking-[0.2em] uppercase text-slate-600 hover:text-teal-700 hover:bg-teal-50/60 transition-colors"
                    >
                      Aura Imaging Centre
                    </a>
                  </div>
                )}
              </div>

              <a
                href="#technology"
                className="flex items-center gap-2 text-[12px] 2xl:text-[13px] tracking-[0.2em] uppercase text-slate-700 hover:text-teal-700 transition-colors"
              >
                <span>Digital Dentistry</span>
              </a>
              <a
                href="#compare"
                className="flex items-center gap-2 text-[12px] 2xl:text-[13px] tracking-[0.2em] uppercase text-slate-700 hover:text-teal-700 transition-colors"
              >
                <span>Gallery</span>
              </a>
              <a
                href="#testimonials"
                className="flex items-center gap-2 text-[12px] 2xl:text-[13px] tracking-[0.2em] uppercase text-slate-700 hover:text-teal-700 transition-colors"
              >
                <span>Reviews</span>
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 text-[12px] 2xl:text-[13px] tracking-[0.2em] uppercase text-slate-700 hover:text-teal-700 transition-colors"
              >
                <span>Contact Us</span>
              </a>
            </nav>

            {/* Desktop Action Button */}
            <div className="hidden xl:flex items-center gap-3 shrink-0">
              <a
                href="#appointment"
                className="px-5 py-2.5 border-2 border-slate-900 text-slate-900 text-xs uppercase tracking-wider font-semibold hover:bg-slate-900 hover:text-white transition-colors duration-200"
              >
                Book Appointment
              </a>
            </div>

            {/* Mobile & Tablet Controls */}
            <div className="xl:hidden flex items-center gap-2 sm:gap-3">
              <a
                href="#appointment"
                className="hidden sm:inline-flex px-3.5 py-1.5 border-2 border-slate-900 text-slate-900 text-[11px] uppercase tracking-wider font-semibold hover:bg-slate-900 hover:text-white transition-colors"
              >
                Book
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-slate-900 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Dropdown / Drawer (Contained with viewport boundary protection) */}
          {mobileMenuOpen && (
            <div className="xl:hidden border-t border-slate-200 bg-white/98 backdrop-blur-md px-5 py-5 shadow-2xl transition-all max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain animate-in slide-in-from-top-2 duration-200">
              <nav className="flex flex-col gap-3 text-[13px] tracking-[0.22em] uppercase text-slate-700 font-medium">
                <a href="#" onClick={() => setMobileMenuOpen(false)} className="py-2.5 border-b border-slate-100 hover:text-teal-700 transition-colors">
                  Home
                </a>
                <a href="#about" onClick={() => setMobileMenuOpen(false)} className="py-2.5 border-b border-slate-100 hover:text-teal-700 transition-colors">
                  About Us
                </a>

                <div className="py-2.5 border-b border-slate-100">
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="flex items-center justify-between w-full text-left"
                    aria-expanded={mobileServicesOpen}
                  >
                    <span>Services</span>
                    <ChevronDown className={`size-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {mobileServicesOpen && (
                    <div className="pl-3 mt-2.5 border-l-2 border-teal-500/40 flex flex-col gap-2.5 text-[12px] tracking-[0.2em] animate-in fade-in duration-150">
                      <a href="#services" onClick={() => setMobileMenuOpen(false)} className="py-1 text-slate-600 hover:text-teal-700 transition-colors">
                        Dental Services
                      </a>
                      <a href="#technology" onClick={() => setMobileMenuOpen(false)} className="py-1 text-slate-600 hover:text-teal-700 transition-colors">
                        Sterilization
                      </a>
                      <a href="#technology" onClick={() => setMobileMenuOpen(false)} className="py-1 text-slate-600 hover:text-teal-700 transition-colors">
                        Aura Imaging Centre
                      </a>
                    </div>
                  )}
                </div>

                <a href="#technology" onClick={() => setMobileMenuOpen(false)} className="py-2.5 border-b border-slate-100 hover:text-teal-700 transition-colors">
                  Digital Dentistry
                </a>
                <a href="#compare" onClick={() => setMobileMenuOpen(false)} className="py-2.5 border-b border-slate-100 hover:text-teal-700 transition-colors">
                  Gallery
                </a>
                <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="py-2.5 border-b border-slate-100 hover:text-teal-700 transition-colors">
                  Reviews
                </a>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="py-2.5 hover:text-teal-700 transition-colors">
                  Contact Us
                </a>
              </nav>

              <div className="mt-5 pt-4 border-t border-slate-200 flex flex-col sm:flex-row gap-3">
                <a
                  href="#appointment"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-3 border-2 border-slate-900 text-slate-900 text-xs uppercase tracking-wider font-semibold hover:bg-slate-900 hover:text-white transition-colors"
                >
                  Book Appointment
                </a>
                <a
                  href={CLINIC_CONFIG.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-3 bg-[#25D366] text-white text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 hover:bg-[#20bd5a] transition-colors"
                >
                  <MessageCircle className="size-4 fill-white" />
                  WhatsApp
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* ============================================================ */}
      {/* 1. HERO SECTION: Exactly matching the original site */}
      {/* ============================================================ */}
      <section className="relative overflow-visible">
        <div className="absolute inset-0">
          <img
            alt="Modern dental clinic interior showcasing advanced technology"
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover"
          />
          {/* Exact color gradient overlay from the original CSS */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/80 via-teal-400/70 to-green-400/60"></div>
        </div>

        <div className="relative z-10 page-width min-h-[80vh] py-16 lg:py-24 flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center w-full">
            <div className="text-white max-w-xl">
              <p className="uppercase tracking-[0.2em] text-xs md:text-sm font-semibold text-white/90">
                Transform Your Smile in Just One Visit
              </p>

              <h1 className="mt-4 font-serif uppercase tracking-wide text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
                A Brighter Smile <br /> Awaits
              </h1>

              <p className="mt-4 text-sm text-white font-medium">
                Shillong's First CEREC Technology • Advanced Digital Dentistry • Complete Oral Wellness
              </p>

              <div className="mt-6 flex flex-wrap gap-3 sm:gap-4 items-center">
                <a
                  href="#appointment"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 border-2 border-white text-white text-xs sm:text-sm uppercase tracking-wider font-semibold hover:bg-white hover:text-[#212529] transition-colors duration-300 text-center whitespace-nowrap"
                >
                  Book Appointment
                </a>
                <a
                  href={CLINIC_CONFIG.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-8 py-3 bg-[#25D366] border-2 border-[#25D366] text-white text-xs sm:text-sm uppercase tracking-wider font-semibold hover:bg-[#20bd5a] hover:border-[#20bd5a] transition-colors duration-300 text-center whitespace-nowrap"
                >
                  <MessageCircle className="size-4 sm:size-5 fill-white" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <p className="mt-6 text-xs text-white font-medium">
                500+ Smile Transformations | 98% Patient Satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. TRUST HIGHLIGHTS STRIP: Exactly matching the original site */}
      {/* ============================================================ */}
      <section className="relative py-4 bg-white border-y border-[#ececec]">
        <div className="page-width">
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-[11px] tracking-wide text-[#495057] font-medium">
            <span className="flex items-center gap-1">
              <Award className="size-4 text-teal-600" />
              Shillong's First CEREC Technology
            </span>

            <span className="hidden sm:inline text-[#ced4da]">|</span>

            <span className="flex items-center gap-1">
              <Users className="size-4 text-teal-600" />
              MDS Qualified Dentist
            </span>

            <span className="hidden sm:inline text-[#ced4da]">|</span>

            <span className="flex items-center gap-1">
              <CheckCircle2 className="size-4 text-teal-600" />
              Digital Single-Visit Crowns
            </span>

            <span className="hidden sm:inline text-[#ced4da]">|</span>

            <span className="flex items-center gap-1">
              <GraduationCap className="size-4 text-teal-600" />
              Certified Implantologist (GCOI Fellowship - Europe)
            </span>

            <span className="hidden sm:inline text-[#ced4da]">|</span>

            <span className="flex items-center gap-1">
              <Shield className="size-4 text-teal-600" />
              Sterilization Certified
            </span>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. ABOUT DR. DEBORAH & CLINIC EXCELLENCE */}
      {/* ============================================================ */}
      <section id="about" className="relative py-28 bg-[radial-gradient(circle_at_1px_1px,#dcdcdc_1px,transparent_0)] [background-size:22px_22px]">
        <div className="page-width grid lg:grid-cols-2 gap-20 items-start">
          <div className="order-2 lg:order-1">
            <div className="mb-10 text-left">
              <p className="text-[11px] tracking-[0.3em] font-semibold uppercase text-teal-600 mb-4">
                About Dr. Deborah & Clinic Excellence
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] leading-tight font-medium relative inline-block text-slate-900">
                Dr. Deborah Lalhmingmawii Pachuau, MDS
                <span className="block h-[3px] w-24 bg-teal-600 mt-4 rounded"></span>
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-[#555] max-w-2xl">
                Prosthodontist & Implantologist
              </p>
            </div>

            <div className="space-y-3 text-sm leading-7 text-[#444] max-w-xl mb-8">
              <p>
                Dr. Deborah Pachuau leads Aura Dental & Aesthetics with a vision for precision, innovation, and warm, patient-centered care.
              </p>
              <p>
                A Fellow of the Global Council of Oral Implantology (GCOI Fellowship - Europe), she blends advanced prosthodontics, implantology, and digital dentistry to deliver world-class results.
              </p>
              <p>
                Guided by compassion and the clinic's philosophy “Where smiles meet radiance,” she creates beautiful, functional smiles that transform lives.
              </p>
            </div>

            <div className="flex flex-wrap gap-5">
              <a
                href="#appointment"
                className="px-7 py-3 bg-teal-600 text-white text-[11px] tracking-[0.25em] uppercase font-semibold rounded-md shadow-sm hover:shadow-md hover:bg-teal-700 transition"
              >
                Book Consultation
              </a>
              <a
                href="#services"
                className="px-7 py-3 text-[11px] tracking-[0.25em] uppercase font-semibold rounded-md border border-[#d0d0d0] hover:bg-[#212529] hover:text-white transition"
              >
                Read More
              </a>
            </div>
          </div>

          <div className="relative order-1 lg:order-2 max-w-[450px] mx-auto">
            <div className="relative inline-block z-10 rounded-xl shadow-2xl ring-1 ring-black/5 overflow-hidden">
              <img
                src={CLINIC_CONFIG.founder.image}
                alt="Dr. Deborah Lalhmingmawii Pachuau"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -right-10 top-20 hidden lg:block w-28 h-28 bg-white shadow-xl rounded-lg -z-10"></div>
            <div className="absolute -left-8 bottom-16 hidden lg:block w-20 h-20 bg-white shadow-xl rounded-lg -z-10"></div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. SERVICES SHOWCASE: 3 Cards */}
      {/* ============================================================ */}
      <section id="services" className="relative py-28 bg-white">
        <div className="page-width">
          <div className="mb-14 text-center mx-auto">
            <p className="text-[11px] tracking-[0.3em] font-semibold uppercase text-teal-600 mb-4">
              Services Showcase
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] leading-tight font-medium relative inline-block mx-auto text-slate-900">
              Comprehensive Dental Care
              <span className="block h-[3px] w-24 bg-teal-600 mt-4 rounded mx-auto"></span>
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-[#555] max-w-2xl mx-auto">
              Explore a full spectrum of clinical services designed for comfort, precision and lasting results.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.1)] border border-[#ececec] overflow-hidden h-full">
              <div className="relative flex items-center gap-4 mb-6">
                <div className="size-14 flex items-center justify-center rounded-xl bg-teal-600 text-white shadow-inner">
                  <Cpu className="size-7" />
                </div>
                <h3 className="text-xl font-semibold tracking-wide text-slate-900">Advanced Dentistry</h3>
              </div>
              <ul className="relative space-y-2">
                {[
                  "Digital Single-Visit Crowns (CEREC)",
                  "Dental Implants",
                  "Smile Design",
                  "Veneers",
                  "Root Canal Therapy",
                  "Teeth Whitening",
                  "Full Mouth Rehabilitation"
                ].map((item, idx) => (
                  <li key={idx} className="text-sm flex items-start gap-2 text-[#555] py-1 px-2">
                    <span className="inline-block mt-1 size-1.5 rounded-full bg-teal-600 shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.1)] border border-[#ececec] overflow-hidden h-full">
              <div className="relative flex items-center gap-4 mb-6">
                <div className="size-14 flex items-center justify-center rounded-xl bg-teal-600 text-white shadow-inner">
                  <HeartPulse className="size-7" />
                </div>
                <h3 className="text-xl font-semibold tracking-wide text-slate-900">Family Dental Care</h3>
              </div>
              <ul className="relative space-y-2">
                {[
                  "Pediatric Dentistry",
                  "Preventive Care",
                  "Oral Prophylaxis",
                  "Night Guards / Mouth Guard",
                  "Sealants & Fluoride Therapy",
                  "Gum Health Maintenance",
                  "Ceiling Cartoon TV Suite"
                ].map((item, idx) => (
                  <li key={idx} className="text-sm flex items-start gap-2 text-[#555] py-1 px-2">
                    <span className="inline-block mt-1 size-1.5 rounded-full bg-teal-600 shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.1)] border border-[#ececec] overflow-hidden h-full">
              <div className="relative flex items-center gap-4 mb-6">
                <div className="size-14 flex items-center justify-center rounded-xl bg-teal-600 text-white shadow-inner">
                  <Scan className="size-7" />
                </div>
                <h3 className="text-xl font-semibold tracking-wide text-slate-900">Digital Dentistry</h3>
              </div>
              <ul className="relative space-y-2">
                {[
                  "CEREC One-Day Restorations",
                  "Intraoral 3D Scanning",
                  "3D Smile Simulation",
                  "Guided Implant Planning",
                  "CBCT Imaging",
                  "Digital Smile Design Reviews"
                ].map((item, idx) => (
                  <li key={idx} className="text-sm flex items-start gap-2 text-[#555] py-1 px-2">
                    <span className="inline-block mt-1 size-1.5 rounded-full bg-teal-600 shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. BEFORE & AFTER TRANSFORMATIONS: Interactive Slider */}
      {/* ============================================================ */}
      <section id="compare" className="relative py-28 bg-[#f8f9fa]">
        <div className="page-width mx-auto">
          <div className="mb-14 text-center mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] leading-tight font-medium relative inline-block mx-auto text-slate-900">
              Before & After Transformations
              <span className="block h-[3px] w-24 bg-teal-600 mt-4 rounded mx-auto"></span>
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-[#555] max-w-2xl mx-auto">
              See the stunning results of our smile makeovers
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-[4/3] sm:aspect-[16/9] md:aspect-[16/7] w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200 select-none bg-slate-900">
              {/* After Image */}
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1400"
                  alt="Dental Treatment After - Patient Smile Transformation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-teal-700/90 text-white text-[11px] font-bold px-3 py-1 rounded shadow uppercase tracking-wider">
                  After
                </div>
              </div>

              {/* Before Image */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
              >
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1400"
                  alt="Dental Treatment Before - Patient Smile Transformation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-slate-900/90 text-white text-[11px] font-bold px-3 py-1 rounded shadow uppercase tracking-wider">
                  Before
                </div>
              </div>

              {/* Slider Handle */}
              <div
                className="absolute top-0 bottom-0 w-[2px] bg-white cursor-ew-resize z-20 flex items-center justify-center"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="w-7 h-7 rounded-md bg-white text-slate-800 shadow-md flex items-center justify-center font-bold text-xs border border-slate-300">
                  ↔
                </div>
              </div>

              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                aria-label="Drag slider"
              />
            </div>

            <div className="mt-4 flex flex-col sm:flex-row justify-between items-center text-center gap-2 text-xs text-[#666]">
              <span>← Slide to Reveal After</span>
              <span className="font-semibold text-teal-700">Digital CEREC Single-Visit Smile Design</span>
              <span>Slide to Reveal Before →</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. TECHNOLOGY & INNOVATION HUB */}
      {/* ============================================================ */}
      <section id="technology" className="relative py-28 bg-white bg-[radial-gradient(circle_at_1px_1px,#dcdcdc_1px,transparent_0)] [background-size:22px_22px]">
        <div className="page-width">
          <div className="mb-14 text-center mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] leading-tight font-medium relative inline-block mx-auto text-slate-900">
              Technology & Innovation Hub
              <span className="block h-[3px] w-24 bg-teal-600 mt-4 rounded mx-auto"></span>
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-[#555] max-w-2xl mx-auto">
              State-of-the-art equipment for precise, comfortable care
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-7">
              {[
                { title: "CEREC Crown-in-One-Visit", desc: "Same-day crowns without impressions" },
                { title: "Digital Scanning", desc: "No messy impressions, precise digital scans" },
                { title: "Hospital-Grade Sterilization", desc: "Ensuring the highest safety standards" },
                { title: "Minimally-Invasive Laser Dentistry", desc: "Gentle treatments with advanced lasers" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <CheckCircle2 className="size-6 text-teal-600 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold tracking-wide text-slate-900">{item.title}</h3>
                    <p className="text-sm text-[#555]">{item.desc}</p>
                  </div>
                </div>
              ))}

              <a
                href="#services"
                className="inline-flex items-center mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-teal-600 to-emerald-600 text-white text-sm font-semibold tracking-wide shadow hover:shadow-lg transition"
              >
                Know More
              </a>
            </div>

            <div className="relative max-w-[620px] mx-auto">
              <div className="relative inline-block z-10 rounded-xl shadow-xl ring-1 ring-black/5 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1000"
                  alt="Advanced dental technology"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. PATIENT JOURNEY: 5 Steps */}
      {/* ============================================================ */}
      <section className="relative py-28 bg-[#f8f9fa]">
        <div className="page-width">
          <div className="mb-14 text-center mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] leading-tight font-medium relative inline-block mx-auto text-slate-900">
              Your Patient Journey
              <span className="block h-[3px] w-24 bg-teal-600 mt-4 rounded mx-auto"></span>
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-[#555] max-w-2xl mx-auto">
              From booking to your perfect smile
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { num: 1, title: "Book Online", desc: "Easy online booking in minutes", note: "Choose your preferred time slot and service through our secure online portal." },
              { num: 2, title: "Warm Welcome", desc: "Comfortable arrival and consultation", note: "Our friendly staff greets you and prepares you for your consultation." },
              { num: 3, title: "Digital Scan", desc: "Painless scanning technology", note: "Advanced 3D scanning captures precise images of your teeth and gums." },
              { num: 4, title: "Treatment", desc: "Expert care with latest tech", note: "Receive personalized treatment using state-of-the-art equipment." },
              { num: 5, title: "New Smile", desc: "Enjoy your transformed smile", note: "Leave with confidence and a smile that lights up the room." }
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="relative size-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-5 shadow-lg group-hover:scale-110 transition">
                  {step.num}
                </div>
                <h3 className="font-semibold mb-2 text-lg text-slate-900">{step.title}</h3>
                <p className="text-sm text-[#555] leading-relaxed mb-2">{step.desc}</p>
                <p className="text-xs text-[#777] italic leading-relaxed">{step.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. TESTIMONIALS SLIDER: Exactly matching the original site */}
      {/* ============================================================ */}
      <section id="testimonials" className="relative py-28 bg-[#f8f9fa]">
        <div className="page-width">
          <div className="mb-14 text-center mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] leading-tight font-medium relative inline-block mx-auto text-slate-900">
              What Our Patients Say
              <span className="block h-[3px] w-24 bg-teal-600 mt-4 rounded mx-auto"></span>
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-[#555] max-w-2xl mx-auto">
              Real reviews from real patients
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Arrows */}
            <div className="absolute top-1/2 left-1 sm:-left-4 md:-left-12 transform -translate-y-1/2 z-10">
              <button
                type="button"
                onClick={prevTestimonial}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-slate-700 hover:bg-teal-600 hover:text-white transition duration-200"
                aria-label="Previous testimonial"
              >
                ←
              </button>
            </div>
            <div className="absolute top-1/2 right-1 sm:-right-4 md:-right-12 transform -translate-y-1/2 z-10">
              <button
                type="button"
                onClick={nextTestimonial}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-slate-700 hover:bg-teal-600 hover:text-white transition duration-200"
                aria-label="Next testimonial"
              >
                →
              </button>
            </div>

            {/* Testimonial Card */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden p-8 flex flex-col justify-center">
              <div className="flex items-center mb-4">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="size-5 fill-yellow-400 text-yellow-400 mr-1" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6 leading-relaxed text-sm sm:text-base">
                "{currentTestimonial.quote}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 flex items-center justify-center bg-teal-100 text-teal-700 font-bold rounded-full mr-4 text-base">
                  {currentTestimonial.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-sm sm:text-base">{currentTestimonial.name}</h4>
                  <p className="text-xs text-slate-400">{currentTestimonial.treatment}</p>
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {CLINIC_CONFIG.testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonialIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentTestimonialIndex === idx ? "bg-teal-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 9. APPOINTMENT BOOKING: Clean Luxury Section */}
      {/* ============================================================ */}
      <section id="appointment" className="py-24 bg-white border-t border-slate-200">
        <div className="page-width max-w-4xl mx-auto">
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-8 sm:p-12 shadow-sm">
            <div className="text-center mb-8">
              <p className="text-[11px] tracking-[0.3em] font-semibold uppercase text-teal-600 mb-2">Schedule A Visit</p>
              <h2 className="font-serif text-3xl font-medium text-slate-900">
                Book Your Consultation
              </h2>
              <p className="mt-2 text-sm text-[#555]">
                Fast confirmation with our clinic concierge.
              </p>
            </div>

            {bookingSuccess ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <Check className="size-7" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Consultation Request Confirmed</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <strong>{bookingName}</strong>. We have earmarked your appointment for <strong>{bookingService}</strong> on <strong>{bookingDate || "your chosen date"}</strong>. Our team will contact you via {bookingPhone}.
                </p>
                <button
                  onClick={() => setBookingSuccess(false)}
                  className="text-xs font-semibold text-teal-700 hover:underline pt-2"
                >
                  Book another slot
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={bookingName}
                      onChange={(e) => setBookingName(e.target.value)}
                      placeholder="e.g. Rachel Adams"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Phone Number / WhatsApp
                    </label>
                    <input
                      type="tel"
                      required
                      value={bookingPhone}
                      onChange={(e) => setBookingPhone(e.target.value)}
                      placeholder="+91 93666 29706"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 bg-white"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Service
                    </label>
                    <select
                      value={bookingService}
                      onChange={(e) => setBookingService(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 bg-white"
                    >
                      <option value="CEREC Single-Visit Crown">CEREC Single-Visit Crown</option>
                      <option value="Dental Implants">Dental Implants</option>
                      <option value="Smile Makeover & Veneers">Smile Makeover & Veneers</option>
                      <option value="Pediatric Dental Care">Pediatric Dental Care</option>
                      <option value="Laser Teeth Whitening">Laser Teeth Whitening</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      required
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Time Slot
                    </label>
                    <select
                      value={bookingTime}
                      onChange={(e) => setBookingTime(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 bg-white"
                    >
                      <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                      <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM - 4:00 PM)</option>
                      <option value="Evening (4:00 PM - 7:30 PM)">Evening (4:00 PM - 7:30 PM)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs uppercase tracking-wider rounded-md transition shadow mt-2"
                >
                  Submit Appointment Request
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 10. VISIT US SECTION: Exactly matching the original site */}
      {/* ============================================================ */}
      <section id="contact" className="relative py-28 bg-white border-t border-[#ececec]">
        <div className="page-width">
          <div className="mb-14 text-center mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] leading-tight font-medium relative inline-block mx-auto text-slate-900">
              Visit Us
              <span className="block h-[3px] w-24 bg-teal-600 mt-4 rounded mx-auto"></span>
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-[#555] max-w-2xl mx-auto">
              Find us easily in the heart of Shillong
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Google Maps iFrame */}
            <div className="rounded-xl overflow-hidden shadow-2xl ring-1 ring-black/5 aspect-[16/10]">
              <iframe
                title="Aura Dental & Aesthetics on Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599.0380455328327!2d91.89259387539406!3d25.570400977472637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37507f839a982aa3%3A0xb9b40e2bbfbe7e90!2sAura%20Dental%20%26%20Aesthetics%2C%20Shillong!5e0!3m2!1sen!2sin!4v1760122887508!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>

            {/* Address Details & Get Directions */}
            <div className="space-y-6">
              <div className="bg-gray-100 rounded-2xl p-6 shadow-lg">
                <h3 className="font-semibold mb-3 text-slate-900">Address</h3>
                <ul className="space-y-2 text-sm text-[#555]">
                  <li>2nd floor, IPDE building, Laitumkhrah Main Rd</li>
                  <li>Adjacent Yalana hotel, opposite Jockey Showroom</li>
                  <li>Nongkynrih, Shillong, Meghalaya 793003</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2 text-slate-900">Get Directions</h3>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-teal-600 font-semibold text-sm hover:text-teal-700 transition"
                  href="https://maps.app.goo.gl/A78FctsKgjkwwgs79"
                >
                  <Navigation className="size-4" />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 11. FAQ SECTION */}
      {/* ============================================================ */}
      <section id="faq" className="py-28 bg-white border-t border-[#ececec]">
        <div className="page-width max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[11px] tracking-[0.3em] font-semibold uppercase text-teal-600 mb-4">FAQ</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] leading-tight font-medium relative inline-block text-slate-900">
              Frequently Asked Questions
              <span className="block h-[3px] w-24 bg-teal-600 mt-4 rounded mx-auto"></span>
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-[#555] max-w-2xl mx-auto">
              Find answers to common questions about our dental services
            </p>
          </div>

          <div className="space-y-4">
            {CLINIC_CONFIG.faqs.map((faq, index) => {
              const isOpen = activeFaqIndex === index;
              return (
                <div
                  key={index}
                  className="border border-[#ececec] rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaqIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-[#212529] pr-8 text-sm sm:text-base">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`size-5 text-teal-600 shrink-0 transform transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-[#555] leading-relaxed border-t border-[#ececec] pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 12. BOTTOM HERO CALLOUT (Ready for Your Smile Transformation?) */}
      {/* ============================================================ */}
      <section className="relative py-32 bg-gradient-to-r from-blue-400/80 via-teal-400/70 to-green-400/60 text-white">
        <div className="page-width text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif mb-7 leading-tight font-light">
            Ready for Your Smile Transformation?
          </h2>
          <p className="text-base md:text-lg mb-10">
            Join hundreds of satisfied patients who've transformed their smiles with us
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <a
              href="#appointment"
              className="px-10 py-3.5 bg-white text-[#212529] font-semibold rounded-md hover:bg-gray-100 transition tracking-wide shadow"
            >
              Book Online
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-3.5 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-[#212529] transition tracking-wide"
              href={CLINIC_CONFIG.contact.whatsappUrl}
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 13. FOOTER: Exactly matching the original site */}
      {/* ============================================================ */}
      <footer className="relative bg-gradient-to-br from-teal-900 to-slate-900 text-white overflow-hidden py-16">
        <div className="page-width">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 pb-12 border-b border-white/10">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="size-10 overflow-hidden rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white shadow-lg">
                  <Sparkles className="size-5" />
                </div>
                <span className="text-[18px] tracking-[0.22em] uppercase text-white font-medium">
                  Aura
                </span>
              </div>
              <p className="text-white/80 mb-6 leading-relaxed text-sm">
                Your trusted partner for exceptional dental care. We combine advanced technology with compassionate care to give you the perfect smile you deserve.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3 text-sm text-white/80">
                <li><a href="#about" className="hover:text-white transition">About Us</a></li>
                <li><a href="#services" className="hover:text-white transition">Services</a></li>
                <li><a href="#technology" className="hover:text-white transition">Digital Dentistry</a></li>
                <li><a href="#technology" className="hover:text-white transition">Sterilization</a></li>
                <li><a href="#technology" className="hover:text-white transition">Imaging Center</a></li>
                <li><a href="#compare" className="hover:text-white transition">Gallery</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold mb-6 text-white">Contact Info</h3>
              <div className="space-y-4 text-sm text-white/80">
                <div className="flex items-center gap-3">
                  <MapPin className="size-5 text-teal-400 shrink-0" />
                  <span>2nd floor, IPDE building, Laitumkhrah Main Rd, Shillong</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="size-5 text-teal-400 shrink-0" />
                  <a href="tel:+919366629706" className="hover:text-white transition">+91 93666 29706</a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="size-5 text-teal-400 shrink-0" />
                  <div>
                    <p>Mon - Sat: 10:00 AM – 7:30 PM</p>
                    <p className="text-xs text-white/60">Sunday: Closed (Emergency on call)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-5 text-xs text-white/60">
            {/* Copyright Notice */}
            <p className="order-2 sm:order-1 text-center sm:text-left text-white/50 tracking-wider">
              © 2026 Aura Dental. All rights reserved.
            </p>
            
            {/* Salah Developer Credit Attribution */}
            <a
              href="https://salah-portfolio-pink.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="order-1 sm:order-2 group inline-flex flex-col sm:flex-row items-center justify-center sm:justify-end gap-x-2.5 gap-y-1.5 px-4 py-2.5 sm:py-1.5 rounded-2xl sm:rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-teal-400/40 transition-all duration-300 text-white/70 hover:text-white max-w-full text-center"
              aria-label="Salah - Software Developer & Creative Technologist"
            >
              <span className="inline-flex items-center gap-2 shrink-0">
                <img
                  src="/s-symbol.webp"
                  alt=""
                  width={15}
                  height={18}
                  className="h-4 w-auto object-contain transition-transform duration-300 group-hover:scale-110 shrink-0 filter drop-shadow-[0_1px_4px_rgba(20,184,166,0.3)]"
                  loading="eager"
                  decoding="async"
                />
                <span className="font-semibold tracking-[0.16em] uppercase text-teal-300 group-hover:text-teal-200 transition-colors text-[11px]">
                  SALAH
                </span>
              </span>
              <span className="hidden sm:inline text-white/30" aria-hidden="true">·</span>
              <span className="text-[10px] sm:text-[11px] tracking-[0.12em] sm:tracking-[0.14em] uppercase text-white/60 group-hover:text-white/90 transition-colors text-center whitespace-normal sm:whitespace-nowrap">
                SOFTWARE DEVELOPER <span className="text-white/30" aria-hidden="true">·</span> CREATIVE TECHNOLOGIST
              </span>
            </a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Action Button */}
      <aside aria-label="WhatsApp Contact" className="fixed bottom-6 right-6 z-50">
        <a
          href={CLINIC_CONFIG.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all duration-300"
        >
          <MessageCircle className="size-7 fill-white" />
        </a>
      </aside>
    </div>
  );
}
