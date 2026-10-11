export interface ServiceItem {
  id: string;
  title: string;
  category: 'advanced' | 'family' | 'digital';
  shortDesc: string;
  features: string[];
  icon: string;
}

export interface PatientTestimonial {
  id: string;
  name: string;
  location: string;
  treatment: string;
  rating: number;
  quote: string;
  avatarUrl?: string;
  videoThumbUrl?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const CLINIC_CONFIG = {
  name: "Lumina Dental & Aesthetics",
  tagline: "Where Science Meets Radiance",
  subTagline: "Metropolitan Digital Dentistry • CEREC Same-Day Restorations • Complete Oral Wellness",
  founder: {
    name: "Dr. Deborah V. Vance",
    credentials: "MDS (Prosthodontics & Implantology), Fellow ICOI (Europe)",
    bio: "With over 12 years of specialized clinical experience, Dr. Vance integrates digital precision scanning, micro-aesthetic restorations, and compassionate gentle dentistry to craft enduring smiles.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800"
  },
  contact: {
    phone: "+1 (555) 382-7890",
    phoneDisplay: "+1 (555) 382-7890",
    emergencyPhone: "+1 (555) 382-7890",
    email: "concierge@luminadental.com",
    address: {
      line1: "Suite 400, Horizon Medical Pavilion",
      line2: "742 Evergreen Avenue, North District",
      city: "Metro City",
      state: "CA",
      zip: "94103"
    },
    hours: {
      weekdays: "Mon - Sat: 9:00 AM – 7:00 PM",
      sunday: "Sunday: On-call Urgent Care Only"
    },
    whatsappUrl: "https://wa.me/15553827890?text=Hello%20Lumina%20Dental!%20I%20would%20like%20to%20inquire%20about%20an%20appointment."
  },
  highlights: [
    { label: "Pioneering CEREC 3D Technology", icon: "Award" },
    { label: "MDS Board Certified Specialists", icon: "Users" },
    { label: "Single-Visit Digital Crowns", icon: "CheckCircle" },
    { label: "ICOI European Fellowship", icon: "GraduationCap" },
    { label: "Hospital-Grade Class-B Sterilization", icon: "ShieldCheck" }
  ],
  services: [
    {
      id: "cerec",
      title: "CEREC Same-Day Restorations",
      category: "digital",
      shortDesc: "Precise ceramic crowns milled in under an hour without messy silicone impressions.",
      features: [
        "Digital Single-Visit Crowns (CEREC)",
        "Dental Implants & Guided Surgery",
        "Smile Design & Porcelain Veneers",
        "Microscopic Root Canal Therapy",
        "Laser Teeth Whitening",
        "Full Mouth Rehabilitation"
      ],
      icon: "Cpu"
    },
    {
      id: "family",
      title: "Comprehensive Family Dentistry",
      category: "family",
      shortDesc: "Gentle preventive oral care, pediatric checkups with ceiling entertainment screens, and gum wellness.",
      features: [
        "Pediatric Gentle Dentistry",
        "Ceiling Entertainment for Anxiety Relief",
        "Preventive Oral Prophylaxis",
        "Custom Night Guards & Sports Guards",
        "Fluoride Therapy & Pit-Fissure Sealants",
        "Periodontal Maintenance & Gum Therapy"
      ],
      icon: "Heart"
    },
    {
      id: "digital",
      title: "Digital Imaging & 3D Diagnostics",
      category: "digital",
      shortDesc: "Low-radiation 3D CBCT scanning and AI-assisted smile simulation for pinpoint accuracy.",
      features: [
        "Intraoral 3D Optical Scanning",
        "AI-Driven Smile Simulation",
        "CBCT 3D Volumetric Imaging",
        "Computer-Guided Implant Planning",
        "Minimally Invasive Dental Lasers",
        "Digital Occlusal Analysis"
      ],
      icon: "Scan"
    }
  ] as ServiceItem[],
  testimonials: [
    {
      id: "1",
      name: "Sophia Chen",
      location: "Financial District",
      treatment: "Full Ceramic Veneers & CEREC Crown",
      rating: 5,
      quote: "The single-visit crown process was truly revolutionary. No sticky goop, no temporary tooth falling off over the weekend. I walked in at 10 AM and had my final permanent crown fitted by noon with zero discomfort.",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
    },
    {
      id: "2",
      name: "Marcus Sterling",
      location: "West End",
      treatment: "Computer-Guided Dental Implant",
      rating: 5,
      quote: "Dr. Vance and her entire clinical team are exceptionally polite and meticulous. The 3D imaging showed me exactly how the implant would anchor before we even started. Healing was fast and painless.",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
    },
    {
      id: "3",
      name: "Elena Rostova",
      location: "Midtown",
      treatment: "Pediatric Care & Family Dentistry",
      rating: 5,
      quote: "Best dental clinic for children! The ceiling-mounted screens with cartoons completely distracted my 6-year-old daughter. The clinic smells like a boutique spa rather than a cold hospital.",
      avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
    }
  ] as PatientTestimonial[],
  faqs: [
    {
      question: "What is CEREC technology and how does it save me visits?",
      answer: "CEREC (Chairside Economical Restoration of Esthetic Ceramics) utilizes a high-precision 3D intraoral optical camera to scan your prepared tooth. Our CAD/CAM computer mills a durable, tooth-colored ceramic restoration right in the clinic within 20 minutes, allowing you to walk out with your permanent crown in a single visit without temporary crowns or goopy impression molds."
    },
    {
      question: "Are digital dental implants painful?",
      answer: "Not at all. With computer-guided 3D CBCT planning, implant placement is minimally invasive. Most patients report minimal swelling and only mild tenderness manageable with standard over-the-counter medication, returning to normal routines the next day."
    },
    {
      question: "How does the ceiling entertainment screen help pediatric patients?",
      answer: "Our treatment suites feature high-definition ceiling monitors equipped with popular cartoons and music playlists. Paired with noise-cancelling headphones, younger patients stay completely relaxed, transforming dental checkups into a calm and positive experience."
    },
    {
      question: "What safety and sterilization standards do you follow?",
      answer: "We adhere strictly to hospital-grade sterilization protocols utilizing Class-B vacuum autoclaves, biologically monitored sterilization indicators, sealed single-use pouches, and air purification systems in every operatory."
    },
    {
      question: "How do I schedule an appointment?",
      answer: "You can book directly via our interactive online scheduler, message our patient concierge on WhatsApp for prompt response, or call our clinic desk directly during working hours."
    }
  ] as FaqItem[]
};
