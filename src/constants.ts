import { Experience, Project, SkillCategory, NewsletterItem } from "./types";

export const TAG_STYLES = {
  post: {
    label: "POST",
    bg: "bg-accent/5",
    text: "text-accent",
    hover: "group-hover:bg-accent",
  },
  project: {
    label: "PRG",
    bg: "bg-blue-600/10",
    text: "text-blue-600",
    hover: "group-hover:bg-blue-600",
  },
  link: {
    label: "LINK",
    bg: "bg-green-500/10",
    text: "text-green-500",
    hover: "group-hover:bg-green-500",
  },
} as const;

export const CONTENT = {
  bio: "Over 10 years of experience in digital transformation. Specialized in process optimization and ensuring strategic alignment between business objectives and technology roadmaps. I lead complex stakeholder environments and coordinate cross-functional teams with a result-oriented approach.",
  now: "Currently spending most of my time exploring the AI ecosystem applied to project/product management and building small experimental tools.",
  labels: {
    about: "About",
    experience: "Experience",
    projects: "Selected Projects",
    skills: "Capabilities",
    contact: "Contact",
    footer: "Stefano Perelli / Portfolio 2025",
    now: "Now",
    activities: "Recent Activity",
  },
  about_content: {
    philosophy:
      "I believe that technology should be invisible: a powerful tool that enables business without becoming an obstacle. My approach is based on the synthesis of technical rigor and strategic vision.",
    background:
      "With over 10 years spent between startups and large enterprises, I've learned that disorder (the mess) is part of the creative process, but synthesis (the synthetic) is what brings real value.",
  },
  resume_bio:
    "Product Director & Delivery Manager with a strong passion for building complex and scalable digital products.",
  experiences: [
    {
      period: "Jun 2025",
      company: "HARLEY&DIKKINSON",
      link: "https://harleydikkinson.com/",
      role: "Project & Delivery Manager",
      description: "Finance and guarantees for real estate regeneration",
      details: [
        "IT Governance & Standardization: Definition and orchestration of the migration strategy for multiple vertical platforms towards a single, flexible, and scalable infrastructure, ensuring architectural and operational consistency.",
        "Process Optimization: Standardization of duplicate operational flows into unified and maintainable processes, significantly reducing technical debt and enhancing the efficiency of the Digital Factory.",
        "Strategic Alignment: Assisting in the elicitation of business and technical requirements to optimize the product roadmap in alignment with strategic corporate objectives.",
      ],
    },
    {
      period: "Sep 2024 - Mar 2025",
      company: "RANDSTAD DIGITAL @ THALES DIS",
      link: "https://www.thalesgroup.com/",
      role: "Senior Project Manager",
      description: "Smart cards and electronic transaction systems",
      details: [
        "Change Management: Facilitating organizational and cultural shifts to improve business process efficiency during the migration of legacy systems to global platforms.",
        "Stakeholder Management: Normalizing requirements from internal and external stakeholders, identifying common patterns to accelerate the resolution of systemic issues.",
        "Delivery Governance: Identifying bottlenecks in the delivery lifecycle and implementing strategies to increase resource productivity and operational output.",
      ],
    },
    {
      period: "Mar 2023 - Aug 2024",
      company: "MANGROVIA BLOCKCHAIN SOLUTIONS",
      link: "https://mangrovia.io/",
      role: "Product Director",
      description: "Blockchain-based B2B SaaS solutions",
      details: [
        "Portfolio Management: Defining and maintaining the product roadmap in alignment with market trends and long-term business goals.",
        "Resource Coordination: Overseeing the entire product lifecycle, ensuring transparent planning and effective collaboration across diverse development teams.",
      ],
    },
    {
      period: "Apr 2020 - Mar 2023",
      company: "FISCOZEN",
      link: "https://www.fiscozen.it/",
      role: "Senior Product Manager",
      description: "B2C SaaS for tax assistance for sole traders (VAT holders)",
      details: [
        "Regulatory Compliance & IT Policy: Translating complex technical regulations (Revenue Agency) into detailed technical specifications, ensuring software compliance with institutional directives.",
        "Cross-functional Leadership: Continuous collaboration with Founders and tax/dev teams to define strategic priorities and plan agile sprints in high-criticality contexts.",
      ],
    },
    {
      period: "Jun 2018 - Apr 2020",
      company: "PAX ITALIA",
      link: "https://www.paxitalia.com/",
      role: "Product Manager",
      description: "Global leader in payment systems (POS)",
      details: [
        "Digital Transformation: Supporting cross-functional teams in product design, tool selection, and methodology implementation.",
        "UX Prototyping: Creating intuitive digital experiences for end-users, field technicians, and service centers using industry-standard tools like Framer, Adobe XD, and Figma.",
        "Strategic Evaluation: Assessing product scenarios with a specialized focus on Open Banking and PSD2 frameworks.",
      ],
    },
    {
      period: "Apr 2013 - Jun 2018",
      company: "NTT DATA",
      link: "https://it.nttdata.com/",
      role: "Frontend Developer / Fullstack Designer",
      description: "Consulting, Cybersecurity, and System Integration",
      details: [
        "Role Evolution: Joined as a Front End Developer and expanded the scope to include user experience design. Promoted to Fullstack Designer, bridging technical and design competencies to create user-centric digital products.",
        "Digital Factory Management: Leading key initiatives for Enterprise clients (UniCredit, Vodafone, Carrefour), applying Agile and LEAN methodologies to optimize performance.",
        "Cross-country Integration: Redesigning operational tools for various European regions into a single, shared web platform to standardize international processes.",
      ],
    },
    {
      period: "Jan 2012 - Apr 2013",
      company: "SKILLYBIZ",
      link: "https://www.skillybiz.net/",
      role: "Founder",
      description: "B2C Platform for local business",
      details: [
        "Development of a web platform dedicated to the world of small entrepreneurs, with the objective of collecting user requests and directing them to the right professionals.",
      ],
    },
    {
      period: "Jan 2008 -  Dec 2011",
      company: "FREELANCE",
      link: "https://www.stefanoperelli.me/",
      role: "Web designer",
      description: "",
      details: ["Website, logos, brand identity"],
    },
  ],
  projects: [
    {
      title: "Datome",
      role: "Product Director",
      link: "https://www.datome.io/",
      description:
        "Saas B2B for data modeling and data governance based on blockchain technology. Datome allows clients to easily integrate all the advantages of the blockchain into their existing data infrastructure.",
    },
    {
      title: "ChainKpr",
      role: "Product Manager",
      link: "https://chainkpr.com/",
      description: "Gateway to Seamless Blockchain Integration.",
    },
    {
      title: "Ho Mobile (Vodafone)",
      role: "Frontend Lead",
      description:
        "Managed the frontend development of the web platform. Coordinated a team of 6 developers, including 4 offshore and 2 onsite resources.",
    },
    {
      title: "UniCredit",
      role: "Frontend Lead",
      description:
        "Redesigned operational tools for Eastern European branches into a unified, shared web platform.",
    },
    {
      title: "Retail E-commerce",
      role: "Frontend Developer",
      description:
        "Frontend design and development for major e-commerce platforms including Unes, Iper, Coop, and Conad. Optimized user experiences for cross-browser and cross-device compatibility.",
    },
  ],
  skills: [
    {
      title: "CORE EXPERTISE",
      skills: [
        "End-to-End Product Lifecycle Management",
        "IT Governance & Infrastructure Strategy",
        "Strategic Business & Technical Alignment",
        "Continuous Innovation & Process Improvement",
        "KPI Definition & Performance Tracking",
        "Mentorship & Junior Talent Development",
      ],
    },
    {
      title: "PROFESSIONAL SKILLS",
      skills: [
        "Result-Oriented Digital Product Management",
        "Mentorship within Dev & Product Teams",
        "Full Product Delivery Process (Ideation to Release)",
        "Technical & Process Pain Point Analysis",
      ],
    },
    {
      title: "SOFT SKILLS",
      skills: [
        "Data-Driven Analytical Thinking",
        "Problem Solving in High-Complexity Scenarios",
        "Technological Curiosity & Continuous Learning",
        "Collaborative Team-Working Methodologies",
      ],
    },
  ],
  newsletters: [
    {
      title: "GLM - My favorite AI Agent",
      description:
        "GLM is a versatile AI agent that has become my go-to for a wide range of tasks. Whether it's brainstorming ideas, summarizing complex information, or even just having a casual conversation, GLM consistently delivers impressive results. Its ability to understand context and provide relevant responses makes it an invaluable tool in my daily workflow.",
      link: "https://z.ai/model-api",
      date: "2026-01-06",
    },
  ],
};
