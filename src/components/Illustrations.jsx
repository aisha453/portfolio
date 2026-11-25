import React from 'react';

// Elegant minimal coffee cup & warm steam illustration (pure SVG)
export function CoffeeIllustration({ className = "w-28 h-28" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 140 140" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Steam curves */}
      <path 
        d="M56 46C53 38 58 32 55 24" 
        stroke="#8C5A3C" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeDasharray="4 3" 
      />
      <path 
        d="M70 42C67 33 73 27 70 18" 
        stroke="#AD5424" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
      />
      <path 
        d="M84 46C81 38 86 32 83 24" 
        stroke="#C48866" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeDasharray="3 3" 
      />

      {/* Cup saucer */}
      <ellipse cx="70" cy="116" rx="46" ry="7" fill="#E8DFD3" stroke="#D5CBBE" strokeWidth="2" />
      <ellipse cx="70" cy="115" rx="36" ry="4" fill="#DDD2C4" />

      {/* Cup Body */}
      <path 
        d="M38 58H102V90C102 103 91 110 70 110C49 110 38 103 38 90V58Z" 
        fill="#FFFFFF" 
        stroke="#4A3D34" 
        strokeWidth="2.5" 
        strokeLinejoin="round" 
      />

      {/* Coffee liquid surface: warm #8C5A3C coffee */}
      <ellipse cx="70" cy="58" rx="32" ry="7" fill="#8C5A3C" stroke="#70442B" strokeWidth="1.5" />
      {/* Latte foam art heart/leaf */}
      <path 
        d="M70 54C68 52 64 54 64 57C64 61 70 63 70 63C70 63 76 61 76 57C76 54 72 52 70 54Z" 
        fill="#FFF8F0" 
      />

      {/* Cup Handle */}
      <path 
        d="M102 66C112 66 118 73 118 80C118 88 110 93 102 93" 
        stroke="#4A3D34" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
      />

      {/* Subtle minimalist code token */}
      <text x="70" y="86" textAnchor="middle" fill="#8C5A3C" fontSize="9" fontFamily="monospace" fontWeight="600">
        &lt;code /&gt;
      </text>
    </svg>
  );
}

// Minimalist system architecture illustration for projects
export function ArchIllustration({ className = "w-full max-w-sm h-auto" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 320 80" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Node 1: Ingestion */}
      <rect x="8" y="16" width="76" height="48" rx="6" fill="#FFFDF9" stroke="#A47253" strokeWidth="1.5" />
      <text x="46" y="38" textAnchor="middle" fill="#20140E" fontSize="10" fontWeight="700" fontFamily="sans-serif">Stream Ingest</text>
      <text x="46" y="50" textAnchor="middle" fill="#7A4C30" fontSize="8" fontFamily="monospace">CCTV / Audio</text>

      {/* Connector 1 */}
      <path d="M84 40H118" stroke="#FFD2A6" strokeWidth="2" strokeDasharray="3 3" />
      <polygon points="118,36 124,40 118,44" fill="#FFD2A6" />

      {/* Node 2: Failover API */}
      <rect x="126" y="16" width="76" height="48" rx="6" fill="#FFFDF9" stroke="#FFD2A6" strokeWidth="2" />
      <text x="164" y="38" textAnchor="middle" fill="#8C5A3C" fontSize="10" fontWeight="700" fontFamily="sans-serif">FastAPI Core</text>
      <text x="164" y="50" textAnchor="middle" fill="#AD5424" fontSize="8" fontFamily="monospace">Failover Router</text>

      {/* Connector 2 */}
      <path d="M202 40H236" stroke="#FFD2A6" strokeWidth="2" />
      <polygon points="236,36 242,40 236,44" fill="#FFD2A6" />

      {/* Node 3: AI Inference */}
      <rect x="244" y="16" width="68" height="48" rx="6" fill="#FFFDF9" stroke="#A47253" strokeWidth="1.5" />
      <text x="278" y="38" textAnchor="middle" fill="#20140E" fontSize="10" fontWeight="700" fontFamily="sans-serif">Gemini 2.0</text>
      <text x="278" y="50" textAnchor="middle" fill="#7A4C30" fontSize="8" fontFamily="monospace">Vision + NLP</text>
    </svg>
  );
}

// Clean document illustration for the resume section
export function DocumentIllustration({ className = "w-10 h-10" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="8" y="6" width="24" height="28" rx="3" fill="#FFFDF9" stroke="#FFFDF9" strokeWidth="1.5" />
      <line x1="13" y1="13" x2="27" y2="13" stroke="#8C5A3C" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="13" y1="18" x2="27" y2="18" stroke="#D5CBBE" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="13" y1="23" x2="23" y2="23" stroke="#D5CBBE" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="25" cy="27" r="2.5" fill="#FFF8F0" stroke="#8C5A3C" strokeWidth="1" />
    </svg>
  );
}
