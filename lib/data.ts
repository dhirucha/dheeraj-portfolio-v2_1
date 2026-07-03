export const profile = {
  name: "Dheeraj Chaubey",
  first: "Dheeraj",
  last: "Chaubey",
  title: "AI Engineer · Full Stack Developer · GenAI Builder",
  blurb:
    "Building intelligent systems that think, reason, and act. Specializing in multi-agent AI pipelines, LLM orchestration, and full-stack applications that bridge cutting-edge AI with real-world utility.",
  location: "Thane, Maharashtra, India",
  email: "dheerajubecha@gmail.com",
  phone: "+91 91204 90640",
  linkedin: "https://www.linkedin.com/in/dheeraj-chaubey2312/",
  github: "https://github.com/dhirucha",
  availability: "Available for opportunities",
};

export const stats = [
  { value: "9.28", label: "CGPA" },
  { value: "40%", label: "API Speedup" },
  { value: "1st", label: "Prize Won" },
];

export const experience = [
  {
    company: "Growstats Media Pvt. Ltd.",
    role: "Junior Software Engineer",
    location: "Pune, Maharashtra",
    period: "Jan 2026 – Present",
    bullets: [
      "Designed and developed AI-powered full-stack applications integrating Agentic AI workflows with React.js, Node.js/Express, TypeScript, and GraphQL; enforced JWT authentication, RBAC, and AI security guardrails for secure, ethical AI usage.",
      "Built and deployed multi-agent orchestration pipelines using LangChain and LLM integration on cloud environments; implemented AgentOps monitoring to track agent performance, accuracy, and reliability in production.",
      "Developed and exposed AI model capabilities via FastAPI-style RESTful APIs, integrating real-time webhooks and third-party services; deployed via Docker/CI-CD maintaining 99.5% uptime with Sentry/New Relic monitoring.",
      "Achieved 40% API response time improvement through Redis caching and 35% database efficiency gains (MongoDB/MySQL) via query optimization and indexing strategies.",
      "Collaborated with cross-functional Agile teams; mentored junior developers, conducted code reviews, and established engineering best practices across the organization.",
    ],
  },
];

export const projects = [
  {
    title: "Localee",
    icon: "📍",
    badge: "🏆 1st Prize",
    accent: "amber",
    description:
      "A location-based discovery platform powered by Grok AI. Integrated natural language queries for place discovery with Google Maps, Geocoding, and Places APIs — grounding AI responses in real-time geospatial data. Won 1st prize at a college-level hackathon for innovative GenAI + geo integration.",
    tags: ["React.js", "Node.js", "MongoDB", "Grok AI", "Google Maps API", "Tailwind CSS"],
    links: { github: "https://github.com/dhirucha" },
    featured: true,
  },
  {
    title: "AI Multi-Agent Research System",
    icon: "🤖",
    badge: "Multi-Agent System",
    accent: "cyan",
    description:
      "Architected a GenAI pipeline with specialized Search, Reader, Writer, and Critic agents orchestrated via LangChain. Integrated Mistral AI as the LLM backbone and the Tavily Search API for real-time web retrieval and grounded report generation. Deployed as an interactive Streamlit application.",
    tags: ["Python", "LangChain", "LangGraph", "Mistral AI", "Tavily", "Streamlit"],
    links: { github: "https://github.com/dhirucha" },
    featured: true,
  },
  {
  title: "AI Reputation Intelligence Dashboard",
  description:
    "AI-powered reputation intelligence platform for ICICI Prudential AMC — classifies media mentions with Mistral AI into reputation drivers and sub-drivers, then surfaces sentiment trends and executive insights on an interactive dashboard.",
  tags: ["Streamlit", "Mistral AI", "Python", "Plotly", "LLM Classification"],
  accent: "cyan",
  icon: "🏦",
  badge: "AI + BI",
  links: {
    github: "https://github.com/dhirucha/eminence-assignment",
    live: "https://ai-reputation-intelligence-dashboard-dheeraj-aiproject.streamlit.app/",
  },
},
] as const;

export const skillGroups = [
  {
    title: "AI / GenAI",
    color: "pink",
    skills: [
      "LangChain",
      "LangGraph",
      "Mistral AI",
      "Grok AI",
      "Claude",
      "Agentic AI",
      "Multi-Agent Systems",
      "Prompt Engineering",
      "RAG",
      "AgentOps",
      "Tavily",
    ],
  },
  {
    title: "Backend & APIs",
    color: "cyan",
    skills: ["Node.js", "Express.js", "FastAPI", "GraphQL", "REST APIs", "JWT Auth", "WebSockets", "RBAC"],
  },
  {
    title: "Frontend",
    color: "indigo-light",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Streamlit", "HTML5", "CSS3"],
  },
  {
    title: "Database",
    color: "amber",
    skills: ["MongoDB", "MySQL", "Redis", "Query Optimization", "Indexing"],
  },
  {
    title: "Cloud & DevOps",
    color: "pink",
    skills: ["Docker", "CI/CD", "Vercel", "Render", "Streamlit Cloud", "MCP Servers", "Sentry", "New Relic"],
  },
  {
    title: "Languages & Tools",
    color: "cyan",
    skills: ["Python", "JavaScript (ES6+)", "TypeScript", "Git", "GitHub", "Postman", "Jest", "RTL"],
  },
] as const;

export const education = [
  {
    degree: "Bachelor of Computer Applications",
    school: "Regal College of Technology & Management, Kalyan",
    period: "Aug 2022 – Jul 2025",
    score: "9.28",
    scoreLabel: "CGPA",
  },
  {
    degree: "Higher Secondary Certificate",
    school: "Central Board of Secondary Education (CBSE)",
    period: "May 2021 – Apr 2022",
    score: "73%",
    scoreLabel: "",
  },
];

export const certifications = [
  { icon: "🏅", label: "Full Stack Development — PhysicsWallah" },
  { icon: "🍃", label: "MongoDB — MongoDB University" },
  { icon: "⚡", label: "NodeJS with Express & MongoDB — PW Skills (iNeuron)" },
];

export const extracurricular = {
  name: "Level Supermind Hackathon",
  sub: "Participant · Mumbai, India · Dec 2024 – Jan 2025",
  bullets: [
    "Developed an AI-driven prototype using Python, LangChain, and LLM integrations to generate intelligent responses from structured inputs, simulating a real-world multi-agent pipeline under time constraints.",
    "Collaborated with a cross-functional team to design AI workflow logic, applying Agentic AI principles and prompt engineering to deliver a functional system within limited development timelines.",
  ],
};

export const navLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];
