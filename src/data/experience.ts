// TODO: replace with real work history.
export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string; // 'Present' allowed
  location: string;
  summary: string;
  highlights: string[];
  techStack: string[];
}

export const experience: ExperienceEntry[] = [
  {
    id: "exp-3",
    company: "Acme Technologies",
    role: "Senior Software Engineer",
    startDate: "Jan 2023",
    endDate: "Present",
    location: "Bengaluru, India",
    summary:
      "Leading frontend architecture for a multi-tenant SaaS analytics platform.",
    highlights: [
      "Led migration of the core dashboard to React 19 and MUI, cutting bundle size by 30%.",
      "Mentored a team of 4 engineers and established code review standards.",
      "Designed a reusable component library adopted across 3 product teams.",
    ],
    techStack: ["React", "TypeScript", "Material UI", "Node.js", "AWS"],
  },
  {
    id: "exp-2",
    company: "Globex Solutions",
    role: "Software Engineer",
    startDate: "Jun 2020",
    endDate: "Dec 2022",
    location: "Pune, India",
    summary:
      "Built and maintained customer-facing web applications for fintech clients.",
    highlights: [
      "Implemented real-time transaction dashboards using WebSockets.",
      "Reduced API response times by 40% through query optimization.",
      "Collaborated with design to ship an accessible, responsive UI overhaul.",
    ],
    techStack: ["React", "Redux", "Express", "PostgreSQL"],
  },
  {
    id: "exp-1",
    company: "Initech Labs",
    role: "Junior Developer",
    startDate: "Jul 2018",
    endDate: "May 2020",
    location: "Hyderabad, India",
    summary:
      "Started career building internal tools and learning production engineering practices.",
    highlights: [
      "Built internal admin tools used by 50+ employees.",
      "Wrote automated tests that raised coverage from 20% to 70%.",
    ],
    techStack: ["JavaScript", "Node.js", "MongoDB"],
  },
];
