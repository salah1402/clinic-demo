"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import {
  Calendar,
  Clock,
  User,
  Phone,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CreditCard,
  MessageSquare
} from "lucide-react";

interface ServiceTier {
  id: string;
  name: string;
  duration: string;
  priceEstimate: string;
  badge?: string;
  description: string;
}

const SERVICES_LIST: ServiceTier[] = [
  {
    id: "cerec-crown",
    name: "CEREC 1-Day Ceramic Crown",
    duration: "60 - 90 mins",
    priceEstimate: "$850 - $1,200",
    badge: "Most Popular",
    description: "3D intraoral scan, CAD mill design, precision ceramic firing, same-day delivery."
  },
  {
    id: "smile-makeover",
    name: "Porcelain Veneers Consultation",
    duration: "45 mins",
    priceEstimate: "Custom Plan",
    badge: "Aesthetic Suite",
    description: "Facial contour analysis, shade mapping, 3D digital smile trial simulation."
  },
  {
    id: "guided-implant",
    name: "Computer-Guided Dental Implant",
    duration: "60 mins",
    priceEstimate: "$1,500 - $2,400",
    description: "Low-radiation 3D CBCT bone scan, surgical guide fabrication, biocompatible titanium fixture."
  },
  {
    id: "laser-whitening",
    name: "In-Clinic Laser Teeth Whitening",
    duration: "45 mins",
    priceEstimate: "$350",
    description: "Non-abrasive laser activation for up to 8 shades brighter in a single session."
  },
  {
    id: "routine-checkup",
    name: "Executive Comprehensive Oral Exam",
    duration: "45 mins",
    priceEstimate: "$120",
    description: "Ultra-high-def intraoral photo survey, digital bitewings, periodontal mapping, ultrasonic polish."
  }
];

const TIME_SLOTS = [
  "09:30 AM",
  "10:45 AM",
  "12:00 PM",
  "02:15 PM",
  "03:30 PM",
  "04:45 PM",
  "06:00 PM"
];

export default function InteractiveBookingSuite() {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [selectedServiceId, setSelectedServiceId] = useState("cerec-crown");
  const [selectedDate, setSelectedDate] = useState("2026-10-18");
  const [selectedTime, setSelectedTime] = useState("10:45 AM");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [patientNotes, setPatientNotes] = useState("");
  const [confirmationCode, setConfirmationCode] = useState("");

  const activeService = SERVICES_LIST.find((s) => s.id === selectedServiceId) || SERVICES_LIST[0];

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phoneNumber) return;

    const randomCode = `LUM-${Math.floor(100000 + Math.random() * 900000)}`;
    setConfirmationCode(randomCode);
    setCurrentStep(3);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // safe fallback
    }
  };

  return (
    <div className="w-full bg-slate-900 text-white rounded-3xl shadow-2xl border border-slate-800 overflow-hidden">
      {/* Progress Header */}
      <div className="bg-slate-950/80 px-6 sm:px-10 py-5 border-b border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <span className="text-[11px] font-mono tracking-widest text-teal-400 uppercase">
            Realtime Concierge Gateway
          </span>
          <h3 className="text-xl font-serif font-bold text-white">
            Schedule Your Clinical Consultation
          </h3>
        </div>

        {/* 3 Step Pill Indicator */}
        <div className="flex items-center gap-2">
          <div
            className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 transition ${
              currentStep === 1
                ? "bg-teal-500 text-slate-950"
                : "bg-slate-800 text-slate-400"
            }`}
          >
            <span>1</span>
            <span className="hidden md:inline">Service</span>
          </div>
          <span className="text-slate-600">→</span>
          <div
            className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 transition ${
              currentStep === 2
                ? "bg-teal-500 text-slate-950"
                : "bg-slate-800 text-slate-400"
            }`}
          >
            <span>2</span>
            <span className="hidden md:inline">Time & Info</span>
          </div>
          <span className="text-slate-600">→</span>
          <div
            className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 transition ${
              currentStep === 3
                ? "bg-emerald-400 text-slate-950"
                : "bg-slate-800 text-slate-400"
            }`}
          >
            <span>3</span>
            <span className="hidden md:inline">Confirmed</span>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-10">
        {/* STEP 1: Select Treatment Service */}
        {currentStep === 1 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="flex justify-between items-end">
              <div>
                <p className="text-xs uppercase tracking-widest text-teal-400 font-semibold">
                  Step 1 of 2
                </p>
                <h4 className="text-2xl font-serif font-medium text-white mt-1">
                  Select Your Clinical Procedure
                </h4>
              </div>
              <span className="text-xs text-slate-400 hidden sm:inline">
                Instant slot reservation • Zero prepayment required
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {SERVICES_LIST.map((service) => {
                const isSelected = selectedServiceId === service.id;
                return (
                  <div
                    key={service.id}
                    onClick={() => setSelectedServiceId(service.id)}
                    className={`cursor-pointer rounded-2xl p-5 border transition-all duration-200 relative flex flex-col justify-between ${
                      isSelected
                        ? "bg-teal-950/40 border-teal-400 shadow-lg shadow-teal-500/10 ring-1 ring-teal-400"
                        : "bg-slate-800/60 border-slate-700/80 hover:border-slate-600 hover:bg-slate-800"
                    }`}
                  >
                    <div>
                      <div className="flex justify-between items-start gap-2 mb-2">
                        <h5 className="font-bold text-white text-base">
                          {service.name}
                        </h5>
                        {service.badge && (
                          <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-teal-400 text-slate-950 shrink-0">
                            {service.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed mb-4">
                        {service.description}
                      </p>
                    </div>

                    <div className="flex justify-between items-center text-xs pt-3 border-t border-slate-700/60 text-slate-400">
                      <span className="flex items-center gap-1 text-teal-300">
                        <Clock className="w-3.5 h-3.5" />
                        {service.duration}
                      </span>
                      <span className="font-mono text-slate-200 font-semibold">
                        {service.priceEstimate}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 flex justify-end">
              <button
                type="button"
                onClick={() => setCurrentStep(2)}
                className="px-8 py-3.5 rounded-full bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs uppercase tracking-widest shadow-lg shadow-teal-500/20 transition flex items-center gap-2"
              >
                Continue to Time & Date
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Pick Date, Time, and Patient Contact */}
        {currentStep === 2 && (
          <form onSubmit={handleFinalSubmit} className="space-y-6 animate-in fade-in duration-300">
            <div className="flex justify-between items-end">
              <div>
                <p className="text-xs uppercase tracking-widest text-teal-400 font-semibold">
                  Step 2 of 2
                </p>
                <h4 className="text-2xl font-serif font-medium text-white mt-1">
                  Choose Appointment Slot & Details
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setCurrentStep(1)}
                className="text-xs text-slate-400 hover:text-teal-300 underline"
              >
                ← Change Service ({activeService.name})
              </button>
            </div>

            <div className="grid lg:grid-cols-12 gap-8">
              {/* Calendar & Slot Picker */}
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Preferred Treatment Date
                  </label>
                  <input
                    type="date"
                    required
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Available Time Slots (Dr. Vance's Operatory)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {TIME_SLOTS.map((slot) => {
                      const isSelected = selectedTime === slot;
                      return (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedTime(slot)}
                          className={`py-2.5 px-3 rounded-xl text-xs font-medium border text-center transition ${
                            isSelected
                              ? "bg-teal-500 text-slate-950 font-bold border-teal-400 shadow-md"
                              : "bg-slate-800/80 text-slate-300 border-slate-700 hover:border-slate-500"
                          }`}
                        >
                          {slot}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700 text-xs text-slate-300 space-y-1.5">
                  <div className="flex items-center gap-2 text-teal-300 font-semibold">
                    <ShieldCheck className="w-4 h-4" />
                    Guaranteed Same-Day Operatory Reservation
                  </div>
                  <p>
                    Each slot reserves the entire clinical suite including 3D CEREC scanner, hospital-grade sterile operatories, and dedicated clinical concierge.
                  </p>
                </div>
              </div>

              {/* Patient Contact Information */}
              <div className="lg:col-span-5 space-y-4 bg-slate-950/60 p-6 rounded-2xl border border-slate-800">
                <h5 className="font-bold text-sm uppercase tracking-wider text-teal-400">
                  Patient Contact Info
                </h5>

                <div>
                  <label className="block text-xs text-slate-400 mb-1">
                    Full Legal Name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-500" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Katherine Pierce"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-1">
                    Phone / WhatsApp (For confirmation code)
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-500" />
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 382-7890"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-1">
                    Special Clinical Notes / Dental History (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Need replacement for broken molar, sensitive to cold..."
                    value={patientNotes}
                    onChange={(e) => setPatientNotes(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs focus:outline-none focus:ring-2 focus:ring-teal-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-400 hover:from-teal-400 hover:to-emerald-300 text-slate-950 font-bold text-xs uppercase tracking-widest shadow-lg shadow-teal-500/25 transition duration-200 mt-2"
                >
                  Confirm & Reserve Appointment
                </button>
              </div>
            </div>
          </form>
        )}

        {/* STEP 3: Confirmed State with High-End Ticket Card */}
        {currentStep === 3 && (
          <div className="space-y-8 text-center py-6 animate-in zoom-in-95 duration-300 max-w-xl mx-auto">
            <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-xl">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-teal-400">
                Reservation Verified
              </span>
              <h4 className="text-3xl font-serif font-bold text-white">
                You're Scheduled with Dr. Vance
              </h4>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                A confirmation summary and calendar invite have been earmarked for <strong>{fullName}</strong>.
              </p>
            </div>

            {/* Luxury Digital Ticket / Voucher Card */}
            <div className="bg-slate-950 rounded-2xl border border-teal-500/30 p-6 text-left relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl"></div>
              <div className="flex justify-between items-center border-b border-slate-800 pb-4 mb-4">
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400">
                    Booking Reference
                  </span>
                  <p className="text-lg font-mono font-bold text-teal-400">
                    {confirmationCode}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400">
                    Status
                  </span>
                  <p className="text-xs font-bold text-emerald-400">
                    ● Priority Operatory Booked
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-slate-400 block">Procedure</span>
                  <p className="font-semibold text-white mt-0.5">{activeService.name}</p>
                </div>
                <div>
                  <span className="text-slate-400 block">Est. Duration</span>
                  <p className="font-semibold text-white mt-0.5">{activeService.duration}</p>
                </div>
                <div>
                  <span className="text-slate-400 block">Date & Time</span>
                  <p className="font-semibold text-white mt-0.5">
                    {selectedDate} at {selectedTime}
                  </p>
                </div>
                <div>
                  <span className="text-slate-400 block">Patient Contact</span>
                  <p className="font-semibold text-white mt-0.5">{phoneNumber}</p>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800 flex justify-between items-center text-[11px] text-slate-400">
                <span>Location: Horizon Medical Pavilion Suite 400</span>
                <span className="text-teal-300">Valet parking included</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <button
                onClick={() => {
                  setCurrentStep(1);
                  setFullName("");
                  setPhoneNumber("");
                }}
                className="px-6 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs uppercase tracking-wider font-semibold transition"
              >
                Schedule Another Patient
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
