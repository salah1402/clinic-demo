import type { Metadata } from "next";
import DentalClinicPage from "@/components/DentalClinicPage";
import { CLINIC_CONFIG } from "@/data/clinicData";

export const metadata: Metadata = {
  title: `${CLINIC_CONFIG.name} | Advanced Digital Dentistry & Smile Makeovers`,
  description: `${CLINIC_CONFIG.name} offers CEREC same-day crowns, 3D digital dentistry, guided implants, and compassionate family care in an anxiety-free environment.`,
  keywords: [
    "CEREC crowns",
    "Digital dentistry",
    "Dental implants",
    "Cosmetic dentist",
    "Same-day crowns",
    "Lumina Dental"
  ]
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": CLINIC_CONFIG.name,
    "telephone": CLINIC_CONFIG.contact.phone,
    "email": CLINIC_CONFIG.contact.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": CLINIC_CONFIG.contact.address.line1,
      "addressLocality": CLINIC_CONFIG.contact.address.city,
      "addressRegion": CLINIC_CONFIG.contact.address.state,
      "postalCode": CLINIC_CONFIG.contact.address.zip,
      "addressCountry": "US"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "19:00"
      }
    ],
    "founder": {
      "@type": "Person",
      "name": CLINIC_CONFIG.founder.name,
      "jobTitle": "Prosthodontist & Implantologist",
      "description": CLINIC_CONFIG.founder.credentials
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DentalClinicPage />
    </>
  );
}
