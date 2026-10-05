// TODO: replace with real projects/repos. Entries with `repoUrl` also appear in the Repos section.
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  stars?: number;
  language?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "DevBoard",
    description:
      "A real-time engineering metrics dashboard aggregating CI/CD, PR, and incident data into one view.",
    image: "/project-placeholder-1.svg",
    tags: ["React", "TypeScript", "MUI", "WebSockets"],
    liveUrl: "https://devboard.example.com",
    repoUrl: "https://github.com/rohit-placeholder/devboard",
    stars: 128,
    language: "TypeScript",
    featured: true,
  },
  {
    id: "proj-2",
    title: "ShelfSync",
    description:
      "Inventory management system with barcode scanning and low-stock alerts for small retailers.",
    image: "/project-placeholder-2.svg",
    tags: ["React", "Node.js", "PostgreSQL"],
    liveUrl: "https://shelfsync.example.com",
    repoUrl: "https://github.com/rohit-placeholder/shelfsync",
    stars: 64,
    language: "JavaScript",
    featured: true,
  },
  {
    id: "proj-3",
    title: "quick-form-validate",
    description:
      "A lightweight, zero-dependency form validation library with TypeScript-first API.",
    image: "/project-placeholder-3.svg",
    tags: ["TypeScript", "Open Source"],
    repoUrl: "https://github.com/rohit-placeholder/quick-form-validate",
    stars: 302,
    language: "TypeScript",
  },
  {
    id: "proj-4",
    title: "Recipe Finder",
    description:
      "A recipe discovery app with ingredient-based search and saved favorites, built as a learning project.",
    image: "/project-placeholder-4.svg",
    tags: ["React", "REST API"],
    repoUrl: "https://github.com/rohit-placeholder/recipe-finder",
    stars: 21,
    language: "JavaScript",
  },
];
