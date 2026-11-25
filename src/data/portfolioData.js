export const personalInfo = {
  name: "Aishani Banerjee",
  role: "Full-Stack Developer & AI Systems",
  location: "Kolkata, West Bengal",
  campus: "KIIT University, Bhubaneswar",
  email: "aishani453@gmail.com",
  phone: "+91-7980131108",
  github: "https://github.com/aisha453",
  githubUser: "aisha453",
  linkedin: "https://linkedin.com/in/aishani-banerjee-951b9332",
  linkedinUser: "aishani-banerjee-951b9332",
  summary: "Computer Science undergraduate at KIIT University with a strong foundation in full-stack development, AI/ML systems, and data structures. Demonstrated ability to design and deploy production-grade solutions using Python, React.js, FastAPI, and generative AI tools. Experience in cross-functional collaboration, digital marketing, and structured problem-solving. Actively seeking a technology role to contribute to scalable, intelligent software solutions.",
  currentFocus: "Engineering high-availability backends with failover heuristics, real-time multimodal audio/vision pipelines, and multi-role operations systems."
};

export const technicalSkills = {
  languages: ["Python", "Java", "C", "JavaScript", "SQL", "HTML/CSS"],
  frameworks: ["React.js", "FastAPI", "Node.js/Express", "Socket.IO", "Prisma", "NumPy", "Matplotlib", "Seaborn"],
  aiGenAi: [
    "Generative AI",
    "Claude API",
    "Prompt Engineering",
    "Google Gemini API",
    "Whisper (Audio NLP)",
    "Ollama (Qwen3-VL)",
    "LLM API Integration"
  ],
  databasesTools: ["Supabase", "PostgreSQL", "Git/GitHub", "Netlify", "Railway", "Figma"]
};

// Flattened list for the ticker
export const allSkillsList = [
  "Python",
  "React.js",
  "FastAPI",
  "Google Gemini 2.0",
  "Node.js / Express",
  "OpenAI Whisper",
  "Supabase",
  "PostgreSQL",
  "Socket.IO",
  "Prisma",
  "Ollama (Qwen3-VL)",
  "Claude API",
  "Java",
  "JavaScript",
  "SQL",
  "C Programming",
  "Git / GitHub",
  "Railway",
  "Netlify",
  "Figma"
];

export const projects = [
  {
    id: "aegis-crisis",
    title: "Aegis Crisis System",
    period: "Apr 2026",
    stack: ["React.js", "FastAPI", "Google Gemini 2.0", "Whisper", "Supabase"],
    summary: "Multimodal AI emergency response platform that ingests live CCTV video feeds, audio voice notes, and text reports to detect and classify critical incidents with geographic tagging.",
    bullets: [
      "Built a multimodal AI-powered emergency response platform processing live CCTV feeds, voice reports, and text inputs in real time, integrating Gemini 2.0 Flash and OpenAI Whisper to classify threats with location tagging.",
      "Implemented custom backend failover heuristics using FastAPI for high availability during API throttling."
    ],
    liveDemo: "https://vocal-gecko-cfe1a9.netlify.app",
    github: "https://github.com/AyanBis/aegis-crisis-system"
  },
  {
    id: "kstop",
    title: "KSTOP — Hostel Management Platform",
    period: "2025 – 2026",
    stack: ["React", "Node.js", "Prisma", "PostgreSQL", "Socket.IO"],
    summary: "Multi-role residential platform coordinating workflows between students, parents, mentors, and hostel staff with automated leave verification.",
    bullets: [
      "Engineered a multi-role hostel-management platform spanning 4 user roles with automated leave, grievance, notification, and parent–mentor communication workflows.",
      "Automated a 4-stage leave lifecycle with QR gate verification and OTP-based authentication, replacing manual coordination with a digital gate-pass workflow.",
      "Developed NLP-style grievance prioritization and real-time parent-mentor chat over Socket.IO."
    ],
    liveDemo: null,
    github: "https://github.com/SoumyaGhosh2006/KSTOP"
  },
  {
    id: "tinkersight",
    title: "TinkerSight — Multimodal Device Assistant",
    period: "2025 – 2026",
    stack: ["Qwen3-VL", "Ollama", "Local Inference", "Python"],
    summary: "Privacy-oriented on-device assistant that inspects home appliances via vision models and dispenses official, safety-gated troubleshooting steps.",
    bullets: [
      "Built a privacy-oriented multimodal assistant using local Qwen3-VL/Ollama inference to identify household devices from images with manufacturer-grounded safety gates."
    ],
    liveDemo: null,
    github: "https://github.com/aisha453/TinkerSight"
  },
  {
    id: "purplexity",
    title: "Purplexity — AI Research Platform",
    period: "2025 – 2026",
    stack: ["React", "Express", "LLM API", "Web Retrieval"],
    summary: "Search-to-answer research pipeline combining targeted web crawling with LLM synthesis and explicit attribution.",
    bullets: [
      "Built an AI-powered web research platform combining web retrieval, LLM-based answer synthesis, source attribution, and contextual follow-up queries into a 4-stage search-to-answer pipeline."
    ],
    liveDemo: null,
    github: "https://github.com/aisha453/purplexity"
  },
  {
    id: "glamgo",
    title: "GLAMGO — E-commerce Storefront",
    period: "2025",
    stack: ["React", "Supabase", "Tailwind CSS"],
    summary: "Online retail storefront with live Supabase catalogue synchronization and graceful offline data resilience.",
    bullets: [
      "Built a production-ready e-commerce storefront with real-time Supabase product synchronization, local fallback data, route-level lazy loading, and application-level error boundaries."
    ],
    liveDemo: null,
    github: "https://github.com/SoumyaGhosh2006/GLAMGO"
  }
];

export const experience = [
  {
    role: "Program Participant",
    organization: "McKinsey Forward Program — McKinsey & Company",
    period: "Apr 2026 – Present",
    location: "Global Virtual",
    summary: "Selected globally for a structured program developing core capabilities in structured thinking, problem-solving, and adaptability in cross-functional environments."
  },
  {
    role: "Marketing Team Member",
    organization: "CyberPeace Corps, KIIT Chapter",
    period: "Feb 2026 – Present",
    location: "Bhubaneswar",
    summary: "Plan and execute digital marketing campaigns, outreach strategies, and event communications to promote cybersecurity awareness across campus."
  },
  {
    role: "SheFi Scholar (Season 15)",
    organization: "SheFi",
    period: "Oct 2025 – Dec 2025",
    location: "Remote",
    summary: "Competitive educational fellowship focusing on Web3 infrastructure, decentralized finance protocols, and blockchain application logic."
  }
];

export const education = {
  degree: "B.Tech in Computer Science & Engineering",
  institution: "Kalinga Institute of Industrial Technology (KIIT University)",
  period: "2024 – 2028",
  location: "Bhubaneswar, Odisha",
  coursework: [
    "Data Structures & Algorithms",
    "DBMS",
    "Operating Systems",
    "Computer Networks",
    "Software Engineering",
    "System Design"
  ]
};

export const certifications = [
  {
    title: "Controllers Job Simulation",
    issuer: "Goldman Sachs (Forage)",
    period: "Apr 2026",
    summary: "Practical training in financial analysis, corporate data validation, and risk control modeling."
  }
];
