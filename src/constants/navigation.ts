export const NAVIGATION_LABELS = {
  about: "About",
  resume: "Resume",
  journal: "Journal",
  projects: "MVP",
} as const;

export const NAVIGATION_LINKS = [
  { path: "/about", label: NAVIGATION_LABELS.about },
  { path: "/blog", label: NAVIGATION_LABELS.journal },
  { path: "/projects", label: NAVIGATION_LABELS.projects },
] as const;
