import { Experience, Project, SkillCategory } from "./types";

export interface LanguageContent {
  bio: string;
  labels: {
    about: string;
    experience: string;
    projects: string;
    skills: string;
    contact: string;
    footer: string;
  };
  experiences: Experience[];
  projects: Project[];
  skills: SkillCategory[];
}

export const CONTENT: Record<"it" | "en", LanguageContent> = {
  it: {
    bio: "Oltre 10 anni di esperienza nelle trasformazioni digitali. Specializzato nell'ottimizzazione dei processi e nel garantire l'allineamento strategico tra obiettivi di business e roadmap tecnologiche. Gestisco quotidianamente stakeholder complessi e coordino team cross-funzionali con un approccio orientato ai risultati.",
    labels: {
      about: "Info",
      experience: "Esperienza",
      projects: "Progetti Selezionati",
      skills: "Competenze",
      contact: "Contatti",
      footer: "Stefano Perelli / Portfolio 2025",
    },
    experiences: [
      {
        period: "Giu 2025",
        company: "HARLEY&DIKKINSON",
        link: "https://harleydikkinson.com/",
        role: "Project & Delivery Manager",
        description: "Finanza e garanzie per la rigenerazione immobiliare",
        details: [
          "IT Governance & Standardization: Definizione e coordinamento della strategia di migrazione di molteplici piattaforme verticali verso un’unica infrastruttura flessibile e scalabile, garantendo coerenza architetturale e operativa.",
          "Process Optimization: Standardizzazione dei flussi operativi duplicati in processi unificati e manutenibili, riducendo il debito tecnico e migliorando l'efficienza della Digital Factory.",
          "Strategic Alignment: Supporto alla raccolta dei requisiti di business e tecnici per ottimizzare la roadmap di prodotto in funzione degli obiettivi strategici aziendali.",
        ],
      },
      {
        period: "Set 2024 - Mar 2025",
        company: "RANDSTAD DIGITAL @ THALES DIS",
        link: "https://www.thalesgroup.com/",
        role: "Senior Project Manager",
        description: "Smart cards e sistemi per le transazioni elettroniche",
        details: [
          "Change Management: Abilitazione del cambiamento organizzativo e culturale per migliorare l'efficienza dei processi aziendali durante la migrazione di sistemi legacy verso piattaforme global.",
          "Stakeholder Management: Normalizzazione delle richieste di stakeholder interni ed esterni, identificando pattern comuni per velocizzare la risoluzione di problematiche sistemiche.",
          "Delivery Governance: Identificazione dei colli di bottiglia nel ciclo di vita della delivery e implementazione di strategie per l'aumento della produttività delle risorse.",
        ],
      },
      {
        period: "Mar 2024 - Ago 2024",
        company: "MANGROVIA BLOCKCHAIN SOLUTIONS",
        link: "https://mangrovia.io/",
        role: "Product Director",
        description: "Soluzioni SaaS B2B blockchain-based",
        details: [
          "Portfolio Management: Definizione e mantenimento della roadmap di prodotto in linea con i trend di mercato e gli obiettivi di business a lungo termine.",
          "Resource Coordination: Gestione dell'intero ciclo di vita del prodotto, assicurando una pianificazione trasparente e una collaborazione efficace tra i team di sviluppo.",
        ],
      },
      {
        period: "Apr 2020 - Mar 2023",
        company: "FISCOZEN",
        link: "https://www.fiscozen.it/",
        role: "Senior Product Manager",
        description: "SaaS B2C per l’assistenza fiscale alle partite iva",
        details: [
          "Regulatory Compliance & IT Policy: Trasformazione di normative tecniche complesse (Agenzia delle Entrate) in specifiche tecniche dettagliate, garantendo la conformità del software alle direttive istituzionali.",
          "Cross-functional Leadership: Collaborazione costante con i Founder e i team tax/dev per definire priorità strategiche e pianificare sprint agili in contesti ad alta criticità.",
        ],
      },
      {
        period: "Giu 2018 - Apr 2020",
        company: "PAX ITALIA",
        link: "https://www.paxitalia.com/",
        role: "Product Manager",
        description: "Leader global sistemi di pagamento (POS)",
        details: [
          "Digital Transformation: Supporto a team cross-funzionali nella progettazione di prodotti, selezione di strumenti e implementazione di metodologie.",
          "UX Prototyping: Prototipazione di esperienze digitali intuitive per utenti finali e tecnici in-field utilizzando strumenti come Framer, Adobe XD e Figma.",
          "Strategic Evaluation: Valutazione di scenari di prodotto con focus su open-banking e PSD2.",
        ],
      },
      {
        period: "Apr 2013 - Giu 2018",
        company: "NTT DATA",
        link: "https://it.nttdata.com/",
        role: "Frontend Developer / Fullstack Designer",
        description: "Consulenza, Cybersecurity e System Integration",
        details: [
          "Evoluzione del Ruolo: Entrato come Front End Developer, ho ampliato le mie competenze includendo la progettazione UX, unendo tecnica e design per creare prodotti user-centric.",
          "Digital Factory Management: Guida di progetti chiave per clienti Enterprise (UniCredit, Vodafone, Carrefour), ottimizzando le prestazioni dei team tramite metodologie Agile e LEAN.",
          "Standardizzazione Internazionale: Riprogettazione dei tool operativi per diverse country europee all'interno di un'unica piattaforma web condivisa.",
        ],
      },
      {
        period: "Jan 2012 - Apr 2013",
        company: "SKILLYBIZ",
        link: "https://www.skillybiz.net/",
        role: "Founder",
        description: "B2C Platform for local business",
        details: [
          "Sviluppo di una web platform dedicata al mondo dei piccoli imprenditori con l’obiettivo di raccogliere le richieste degli utenti e direzionarle ai giusti professionisti",
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
          "Gestione dello sviluppo front end della piattaforma web. Coordinamento di un team di 6 sviluppatori (4 offshore, 2 onsite).",
      },
      {
        title: "UniCredit",
        role: "Frontend Lead",
        description:
          "Riprogettazione dei tool operativi delle countries dell’Est Europa all’interno di un’unica piattaforma web condivisa.",
      },
      {
        title: "Retail E-commerce",
        role: "Frontend Developer",
        description:
          "Progettazione e sviluppo frontend per piattaforme e-commerce (Unes, Iper, Coop, Conad). Ottimizzazione UX per compatibilità cross-browser.",
      },
    ],
    skills: [
      {
        title: "ESPERTIZE CORE",
        skills: [
          "Gestione del ciclo di vita del prodotto",
          "IT Governance e Strategia Infrastrutturale",
          "Allineamento Strategico Business & Tech",
          "Innovazione Continua dei Processi",
          "Definizione e monitoraggio KPI",
          "Mentoring e Sviluppo Talenti Junior",
        ],
      },
      {
        title: "COMPETENZE PROFESSIONALI",
        skills: [
          "Product Management orientato ai risultati",
          "Mentorship all'interno di team Dev & Product",
          "Processo di Delivery End-to-End",
          "Analisi dei Pain Point Tecnici e di Processo",
        ],
      },
      {
        title: "SOFT SKILLS",
        skills: [
          "Pensiero Analitico Data-Driven",
          "Problem Solving in contesti complessi",
          "Curiosità Tecnologica e Apprendimento Continuo",
          "Metodologie di Lavoro Collaborativo",
        ],
      },
    ],
  },
  en: {
    bio: "Over 10 years of experience in digital transformation. Specialized in process optimization and ensuring strategic alignment between business objectives and technology roadmaps. I lead complex stakeholder environments and coordinate cross-functional teams with a result-oriented approach.",
    labels: {
      about: "About",
      experience: "Experience",
      projects: "Selected Projects",
      skills: "Capabilities",
      contact: "Contact",
      footer: "Stefano Perelli / Portfolio 2025",
    },
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
        description:
          "B2C SaaS for tax assistance for sole traders (VAT holders)",
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
  },
};
