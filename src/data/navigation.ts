export interface NavSection {
  id: string;
  label: string;
}

export const navSections: NavSection[] = [
  { id: "hero", label: "Home" },
  { id: "introduction", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "repos", label: "Repos" },
  { id: "contact", label: "Contact" },
];
