export const personalInfo = {
  name: "Aishani Banerjee",
  role: "Full-Stack Developer & Multimodal AI Engineer",
  subRole: "B.Tech CSE @ KIIT University ('28) • AI/ML & Scalable Systems",
  location: "Kolkata, West Bengal / Bhubaneswar, Odisha",
  email: "aishani453@gmail.com",
  phone: "+91-7980131108",
  github: "https://github.com/aisha453",
  githubUsername: "aisha453",
  linkedin: "https://linkedin.com/in/aishanibanerjee",
  linkedinUsername: "aishanibanerjee",
  targetRole: "Actively seeking a Technology role at Accenture & cutting-edge AI teams",
  summary: "Computer Science undergraduate at KIIT University with a strong foundation in full-stack development, AI/ML systems, and data structures. Demonstrated ability to design and deploy production-grade solutions using Python, React.js, FastAPI, and generative AI tools. Experienced in building failover-resilient backends, multimodal vision-audio pipelines, and automated multi-role enterprise workflows.",
  stats: [
    { label: "Production Projects", value: "5+", icon: "Code2", detail: "Full-stack & Multimodal" },
    { label: "Failover Resilience", value: "0", suffix: "Frame Drops", icon: "ShieldCheck", detail: "FastAPI Heuristics under Load" },
    { label: "AI Workflows", value: "4-Stage", icon: "Workflow", detail: "Search & Lifecycle Pipelines" },
    { label: "Core Foundation", value: "B.Tech", suffix: "2024-28", icon: "GraduationCap", detail: "KIIT University CSE" }
  ]
};

export const skillsTrack1 = [
  { name: "Python", category: "Language", icon: "FileCode2", highlight: "Primary AI & Scripting" },
  { name: "React.js", category: "Framework", icon: "Atom", highlight: "Modern Frontend & Hooks" },
  { name: "Google Gemini 2.0 Flash", category: "GenAI", icon: "Sparkles", highlight: "Vision AI & Realtime" },
  { name: "FastAPI", category: "Backend", icon: "Zap", highlight: "Async APIs & Failover" },
  { name: "JavaScript (ES6+)", category: "Language", icon: "Code", highlight: "Modern Web Core" },
  { name: "Ollama / Qwen3-VL", category: "GenAI", icon: "Cpu", highlight: "Local Private Inference" },
  { name: "Java", category: "Language", icon: "Coffee", highlight: "OOP & Systems" },
  { name: "OpenAI Whisper", category: "Audio NLP", icon: "Mic", highlight: "Realtime Speech NLP" },
  { name: "SQL & PostgreSQL", category: "Database", icon: "Database", highlight: "Relational Queries" },
  { name: "Claude API", category: "GenAI", icon: "Bot", highlight: "Agentic Prompting" },
  { name: "C Programming", category: "Language", icon: "Binary", highlight: "Memory & Low-level" },
  { name: "Prompt Engineering", category: "GenAI", icon: "TerminalSquare", highlight: "System Framing & CoT" }
];

export const skillsTrack2 = [
  { name: "Node.js & Express", category: "Backend", icon: "Server", highlight: "RESTful Services" },
  { name: "Supabase", category: "Cloud DB", icon: "Cloud", highlight: "Realtime DB & Sync" },
  { name: "Socket.IO", category: "Realtime", icon: "Radio", highlight: "Live WebSockets" },
  { name: "Prisma ORM", category: "Database", icon: "Layers", highlight: "Schema & Migrations" },
  { name: "System Design", category: "CS Core", icon: "Network", highlight: "Scalable Architecture" },
  { name: "Data Structures & Algo", category: "CS Core", icon: "Binary", highlight: "Optimized Problem Solving" },
  { name: "Git & GitHub", category: "DevOps", icon: "GitBranch", highlight: "Version Control" },
  { name: "Railway & Netlify", category: "Deployment", icon: "Globe", highlight: "Production Hosting" },
  { name: "Operating Systems", category: "CS Core", icon: "Cpu", highlight: "Processes, Threads, I/O" },
  { name: "DBMS & Indexing", category: "CS Core", icon: "HardDrive", highlight: "ACID & Query Plans" },
  { name: "Computer Networks", category: "CS Core", icon: "Wifi", highlight: "TCP/IP, HTTP, Sockets" },
  { name: "Figma & UI/UX", category: "Design", icon: "Palette", highlight: "Wireframing & Glassmorphism" }
];

export const skillCategories = [
  {
    category: "Languages",
    skills: ["Python", "Java", "C", "JavaScript", "SQL", "HTML5 / CSS3"]
  },
  {
    category: "AI & GenAI",
    skills: ["Generative AI", "Google Gemini 2.0 Flash", "OpenAI Whisper", "Ollama (Qwen3-VL)", "Claude API", "Prompt Engineering", "LLM Integration"]
  },
  {
    category: "Frameworks & Backend",
    skills: ["React.js", "FastAPI", "Node.js / Express", "Socket.IO", "Prisma ORM", "NumPy", "Matplotlib", "Seaborn"]
  },
  {
    category: "Databases & Cloud",
    skills: ["Supabase Realtime", "PostgreSQL", "Railway", "Netlify", "Git / GitHub"]
  },
  {
    category: "CS Fundamentals & Design",
    skills: ["Data Structures & Algorithms", "System Design", "Operating Systems", "Computer Networks", "DBMS", "Software Engineering", "Figma UI/UX"]
  }
];

export const projectsData = [
  {
    id: "aegis-crisis",
    title: "Aegis Crisis System",
    category: "ai",
    featured: true,
    tagline: "Multimodal AI-powered emergency response platform with live CCTV, voice NLP & failover heuristics",
    date: "April 2026",
    status: "Live & Deployed",
    liveDemo: "https://vocal-gecko-cfe1a9.netlify.app",
    github: "https://github.com/AyanBis/aegis-crisis-system",
    techStack: ["React.js", "FastAPI", "Google Gemini 2.0 Flash", "OpenAI Whisper", "Supabase", "Railway", "Netlify"],
    metrics: [
      { label: "Peak Frame Drop", val: "0%" },
      { label: "Threat Classification", val: "Real-time" },
      { label: "Modality", val: "Vision + Voice + Text" }
    ],
    highlights: [
      "Built a multimodal AI emergency response platform processing live CCTV video feeds, audio voice reports, and operator text inputs in real time.",
      "Integrated Google Gemini 2.0 Flash (Vision AI) and OpenAI Whisper for audio NLP to classify critical threats (medical emergencies, fire hazards, weapons) with location coordinates.",
      "Engineered custom backend failover heuristics using FastAPI, ensuring uninterrupted high availability when primary Vision APIs encounter throttling — zero frame drops during heavy traffic spikes.",
      "Deployed frontend on Netlify and backend microservice on Railway; synchronized incidents via Supabase real-time database."
    ],
    architecture: {
      client: "React.js Glassmorphic Operator Dashboard",
      pipeline: "Audio NLP (Whisper) + Vision AI (Gemini 2.0 Flash) -> FastAPI Failover Dispatcher",
      storage: "Supabase Realtime DB with Geographic Incident Pinning"
    }
  },
  {
    id: "kstop-hostel",
    title: "KSTOP — Hostel Management Platform",
    category: "fullstack",
    featured: true,
    tagline: "Multi-role residential system featuring 4-stage automated digital gate pass & NLP grievance triage",
    date: "2025 – 2026",
    status: "Production Ready",
    liveDemo: null,
    github: "https://github.com/SoumyaGhosh2006/KSTOP",
    techStack: ["React.js", "Node.js", "Express", "Prisma ORM", "PostgreSQL", "Socket.IO", "Crypto Auth"],
    metrics: [
      { label: "User Roles", val: "4 Segregated" },
      { label: "Gate-Pass Flow", val: "4-Stage Digital" },
      { label: "Auth Limits", val: "6-Digit OTP / 10m" }
    ],
    highlights: [
      "Engineered a multi-role hostel operations platform spanning 4 distinct user personas (Student, Parent, Mentor, Hostel Staff) with automated digital workflows.",
      "Automated a full 4-stage leave lifecycle: Student Request -> Parent Approval -> Mentor Approval -> QR Gate Verification, replacing fragmented manual gate passes.",
      "Implemented secure OTP-based authentication using hashed 6-digit codes with 10-minute expiry windows and 5-attempt verification thresholds alongside parent-registry validation.",
      "Developed NLP-style grievance prioritization that calculates category baselines and severity signals to automatically surface urgent maintenance issues to staff; added realtime parent-mentor chat over Socket.IO."
    ],
    architecture: {
      client: "Role-Guarded React Frontend (Student / Parent / Staff Portals)",
      pipeline: "Node.js/Express API + Prisma ORM + Socket.IO Event Engine",
      storage: "PostgreSQL with Parent Registry Relation & Audit Logs"
    }
  },
  {
    id: "tinkersight",
    title: "TinkerSight — Multimodal Device Assistant",
    category: "ai",
    featured: true,
    tagline: "Privacy-oriented on-device multimodal assistant for household device diagnostics & safety guidance",
    date: "2025 – 2026",
    status: "Active Open-Source",
    liveDemo: null,
    github: "https://github.com/aisha453/TinkerSight",
    techStack: ["Qwen3-VL", "Ollama", "Local Inference", "Python", "Computer Vision", "Client-Side Opt"],
    metrics: [
      { label: "Data Privacy", val: "100% Local" },
      { label: "Image Dimension", val: "1280px Max" },
      { label: "JPEG Quality", val: "82% Optimized" }
    ],
    highlights: [
      "Built a privacy-first multimodal assistant using local Qwen3-VL/Ollama inference to identify household devices directly from camera snapshots and translate visual cues into actionable repair instructions.",
      "Implemented manufacturer-grounded responses with official documentation cross-referencing and a deterministic safety gate to block hazardous electrical, gas, or high-voltage instructions.",
      "Optimized image processing client-side to a 1280px maximum dimension at 82% JPEG quality before model dispatch, cutting payload bandwidth and accelerating inference time."
    ],
    architecture: {
      client: "Lightweight Vision Capture with Canvas 82% JPEG Compression",
      pipeline: "Deterministic Safety Gate -> Local Ollama / Qwen3-VL Vision Model",
      storage: "Local Storage / Zero Cloud Leakage"
    }
  },
  {
    id: "purplexity",
    title: "Purplexity — AI Research Platform",
    category: "ai",
    featured: false,
    tagline: "Intelligent web retrieval & LLM answer synthesis engine with automatic source attribution",
    date: "2025 – 2026",
    status: "Completed",
    liveDemo: null,
    github: "https://github.com/aisha453/purplexity",
    techStack: ["React.js", "Express", "LLM APIs", "Web Retrieval", "Search Parsing"],
    metrics: [
      { label: "Pipeline", val: "4-Stage Search" },
      { label: "Attribution", val: "Exact Source Citations" },
      { label: "Follow-ups", val: "Contextual" }
    ],
    highlights: [
      "Built an AI-powered web research engine combining real-time web retrieval, LLM-based answer synthesis, source citation mapping, and contextual follow-up query suggestions.",
      "Designed a robust 4-stage search-to-answer pipeline: (1) Targeted Query Retrieval, (2) Content Synthesis, (3) Source Attribution Verification, and (4) Contextual Follow-up Generation.",
      "Delivered clean, hallucination-resistant summaries backed by verified web references."
    ],
    architecture: {
      client: "Research Workspace UI with Collapsible Source Drawers",
      pipeline: "4-Stage Query Pipeline (Retrieval -> Synthesis -> Citations -> Suggestions)",
      storage: "In-memory Query Cache & Express Middleware"
    }
  },
  {
    id: "glamgo",
    title: "GLAMGO — E-commerce Storefront",
    category: "web",
    featured: false,
    tagline: "Resilient e-commerce storefront with real-time Supabase sync, local cache fallback & SEO optimization",
    date: "2025",
    status: "Production Ready",
    liveDemo: null,
    github: "https://github.com/SoumyaGhosh2006/GLAMGO",
    techStack: ["React.js", "Supabase", "Tailwind CSS", "Local Cache", "SEO Metadata"],
    metrics: [
      { label: "Sync Engine", val: "Real-time Pub/Sub" },
      { label: "Fallback", val: "100% Offline Cache" },
      { label: "Code Split", val: "Route-Level Lazy" }
    ],
    highlights: [
      "Engineered an e-commerce storefront featuring real-time Supabase product catalog synchronization paired with resilient local fallback data to guarantee 100% availability during network spikes.",
      "Implemented real-time INSERT/UPDATE/DELETE live catalog updates, route-level lazy loading for optimal bundle size, centralized SEO metadata, and canonical URL structure.",
      "Built application-level error boundaries to isolate component failures without crashing the shopping session."
    ],
    architecture: {
      client: "React Lazy-loaded Route Components with Glass UI Cards",
      pipeline: "Supabase Realtime WebSockets + Offline LocalStorage Cache",
      storage: "Supabase PostgreSQL Database with Product Vectors"
    }
  }
];

export const experienceData = [
  {
    role: "Program Participant",
    organization: "McKinsey Forward Program — McKinsey & Company",
    period: "Apr 2026 – Present",
    type: "Leadership & Strategy",
    badge: "Global Cohort",
    location: "Global Virtual",
    description: "Selected globally for an intensive program focused on developing future-proof workplace capabilities in structured thinking, problem-solving, digital fluency, and business communication.",
    highlights: [
      "Applying McKinsey problem-solving frameworks (Issue Trees, MECE principle, 7-Step Problem Solving) to complex organizational challenges.",
      "Cultivating adaptability, strategic communication, and executive decision-making in cross-functional team environments."
    ]
  },
  {
    role: "Marketing Team Member",
    organization: "CyberPeace Corps — KIIT Chapter",
    period: "Feb 2026 – Present",
    type: "Outreach & Community",
    badge: "Campus Chapter",
    location: "Bhubaneswar, Odisha",
    description: "Spearheading digital marketing campaigns and educational outreach to promote cybersecurity awareness across university campuses and community forums.",
    highlights: [
      "Planned and executed digital campaigns reaching hundreds of students, driving engagement for workshops on cyber safety and threat hygiene.",
      "Coordinated content creation, cross-platform social outreach strategies, and event communications for high-impact campus initiatives."
    ]
  },
  {
    role: "SheFi Scholar — Season 15",
    organization: "SheFi",
    period: "Oct 2025 – Dec 2025",
    type: "Fellowship & Emerging Tech",
    badge: "Scholar Cohort",
    location: "Remote",
    description: "Selected for a competitive global educational cohort focused on Web3 fundamentals, decentralized finance (DeFi), smart contract architectures, and decentralized applications.",
    highlights: [
      "Explored cryptographic fundamentals, consensus protocols, and decentralized systems architecture.",
      "Engaged in technical cohort discussions analyzing scalable blockchain applications and decentralized governance models."
    ]
  }
];

export const educationData = {
  degree: "B.Tech, Computer Science & Engineering",
  institution: "Kalinga Institute of Industrial Technology (KIIT University)",
  period: "2024 – 2028",
  location: "Bhubaneswar, Odisha",
  coursework: [
    "Data Structures & Algorithms",
    "Database Management Systems (DBMS)",
    "Operating Systems",
    "Computer Networks",
    "Software Engineering",
    "System Design",
    "Object-Oriented Programming"
  ],
  certification: {
    title: "Controllers Job Simulation",
    issuer: "Goldman Sachs (Forage)",
    date: "April 2026",
    skills: ["Financial Analysis", "Financial Management", "Risk Assessment", "Data Modeling"]
  }
};

