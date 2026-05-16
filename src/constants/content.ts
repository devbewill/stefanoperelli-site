import { Experience, Project, SkillCategory, NewsletterItem } from "../types";

export const CONTENT = {
  bio: "I lead teams through digital transformation journeys, building the structures, processes and culture that make change scalable and lasting. My technical background helps me connect people, teams and functions across the organisation, creating clearer, more effective ways of working together.",
  now: "Currently leading AI adoption and product governance at Harley&Dikkinson, while building small experimental tools at the intersection of AI and product management.",
  labels: {
    about: "About",
    experience: "Experience",
    projects: "Selected Projects",
    skills: "Capabilities",
    contact: "Contact",
    footer: "Stefano Perelli / Portfolio 2026",
    now: "Now",
    activities: "Recent Activity",
  },
  about_content: {
    philosophy:
      "I believe that technology should be invisible: a powerful tool that enables business without becoming an obstacle. My approach is based on synthesis of technical rigor and strategic vision.",
    background:
      "A long time spent between startups and large enterprises, I've learned that disorder (the mess) is part of creative process, but synthesis (the synthetic) is what brings real value.",
  },
  resume_bio:
    "I lead teams through digital transformation, building structures, processes and culture that make change scalable and lasting.",
  experiences: [
    {
      period: "Jun 2025 – Present",
      company: "HARLEY&DIKKINSON",
      link: "https://harleydikkinson.com/",
      role: "Project & Quality Manager",
      description: "Fintech platform for real estate regeneration",
      details: [
        "AI Adoption: Launched company-wide AI programme — tool selection, training of 3 teams (Creative, PM, Analyst).",
        "Team Redesign: Restructured Product organisation with new roles, clear ownership, structured engagement process.",
        "Platform Consolidation: Initiated consolidation of 10+ vertical platforms into unified infrastructure, cutting management overhead by ~20%.",
        "Quality Workflow: Introduced cross-project sprint review workflow, reducing manual QA time by half.",
      ],
    },
    {
      period: "Apr 2023 – May 2025",
      company: "MANGROVIA BLOCKCHAIN SOLUTIONS",
      link: "https://mangrovia.io/",
      role: "Product Director",
      description: "B2B SaaS blockchain & enterprise platforms",
      details: [
        "Built the Product function from scratch in a company with ambitious vision but immature organisational structure.",
        "Introduced feature prioritisation framework from day 1, aligning C-suite, sales and engineering on shared roadmap — time-to-decision reduced by ~50%.",
        "Managed relationships with 10+ stakeholders across enterprise clients on requirements and strategic direction.",
        "Centralised information sources (CRM, customer calls, analytics) to support data-driven roadmap decisions.",
      ],
    },
    {
      period: "Apr 2020 – Apr 2023",
      company: "FISCOZEN",
      link: "https://www.fiscozen.it/",
      role: "Senior Product Manager",
      description: "B2C SaaS for tax assistance to freelancers and sole traders",
      details: [
        "Scaled tax return campaigns from 400 to 2,500 to 5,000 clients across 2–3 tax regimes over 3 years.",
        "Coordinated 2 cross-functional teams (10 people) across multiple parallel workstreams.",
        "Automated 10+ tax compliance processes, reducing operational load on the support team.",
        "Automated annual update of tax form compilation module, saving one full month of work for two full-time resources each year.",
      ],
    },
    {
      period: "2018 – 2020",
      company: "PAX ITALIA",
      link: "https://www.paxitalia.com/",
      role: "Product Manager",
      description: "Global leader in payment systems (POS)",
      details: [
        "Redesigned UX of POS terminal operational workflows for end-users, field technicians, and service centers.",
        "Assessed product scenarios with a specialized focus on Open Banking and PSD2 frameworks.",
      ],
    },
    {
      period: "2013 – 2018",
      company: "NTT DATA",
      link: "https://it.nttdata.com/",
      role: "Team Lead, Enterprise Delivery",
      description: "Consulting, Cybersecurity, and System Integration",
      details: [
        "5 years on tier-1 clients (Vodafone, UniCredit, Carrefour). Grew from developer to team lead on complex enterprise, multi-country projects.",
        "Led frontend development for Ho Mobile (Vodafone), coordinating a 6-person team (4 offshore, 2 onsite).",
        "Redesigned operational tools for Eastern European branches into a unified, shared web platform for UniCredit.",
      ],
    },
    {
      period: "2012 – 2013",
      company: "SKILLYBIZ",
      link: "https://www.skillybiz.net/",
      role: "Founder",
      description: "B2C Platform for local business",
      details: [
        "0-to-1 experience: built the platform matching professionals and entrepreneurs, assembled the team, acquired first customers.",
      ],
    },
    {
      period: "2008 – 2011",
      company: "FREELANCE",
      link: "https://www.stefanoperelli.me/",
      role: "Web Designer",
      description: "",
      details: ["Website, logos, brand identity for local businesses."],
    },
  ] as const satisfies Experience[],
  projects: [
    {
      title: "Datome",
      role: "Product Director",
      link: "https://www.datome.io/",
      description:
        "B2B SaaS platform for blockchain-based data modelling and governance. Enables enterprise clients to seamlessly integrate the benefits of blockchain into their existing data infrastructure.",
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
        "Managed frontend development of the consumer web platform. Coordinated a team of 6 developers, including 4 offshore and 2 onsite resources.",
    },
    {
      title: "UniCredit FEU",
      role: "Frontend Developer + UX",
      description:
        "Gathered and clustered operational requirements from Eastern European branches to build a unified web interface for internal operational tools.",
    },
    {
      title: "Retail E-commerce",
      role: "Frontend Developer",
      description:
        "Frontend development and UX design for major e-commerce retailers (Unes, Iper, Coop, Conad), focused on cross-browser and cross-device optimisation at scale.",
    },
  ] as const satisfies Project[],
  skills: [
    {
      title: "LEADERSHIP AREAS",
      skills: [
        "Digital Transformation",
        "Product Strategy",
        "AI & Innovation",
        "Governance & Delivery",
        "Change Management",
        "Cross-functional Team Leadership",
      ],
    },
    {
      title: "PROFESSIONAL SKILLS",
      skills: [
        "End-to-End Product Lifecycle Management",
        "Roadmap Strategy & Prioritisation",
        "KPI Definition & Performance Tracking",
        "Technical & Process Pain Point Analysis",
      ],
    },
    {
      title: "DAILY TOOLS",
      skills: [
        "Generative AI — reasoning & decision support",
        "Jira — delivery oversight & cross-team governance",
        "Obsidian — connected notes & project context",
      ],
    },
  ] as const satisfies SkillCategory[],
  newsletters: [
    {
      title: "GLM - My favorite AI Agent",
      description:
        "GLM is a versatile AI agent that has become my go-to for a wide range of tasks. Whether it's brainstorming ideas, summarizing complex information, or even just having a casual conversation, GLM consistently delivers impressive results. Its ability to understand context and provide relevant responses makes it an invaluable tool in my daily workflow.",
      link: "https://z.ai/model-api",
      date: "2026-02-28",
    },
  ] as const satisfies NewsletterItem[],
};
