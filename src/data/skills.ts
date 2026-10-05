// TODO: replace with real skill set and proficiency levels (0-100).
export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "TypeScript", level: 90 },
      { name: "JavaScript", level: 92 },
      { name: "Python", level: 75 },
      { name: "Java", level: 65 },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 92 },
      { name: "Material UI", level: 85 },
      { name: "Redux", level: 78 },
      { name: "Framer Motion", level: 70 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express", level: 85 },
      { name: "REST APIs", level: 90 },
      { name: "GraphQL", level: 65 },
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "AWS", level: 70 },
      { name: "Docker", level: 75 },
      { name: "GitHub Actions", level: 80 },
      { name: "CI/CD", level: 78 },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 82 },
      { name: "Redis", level: 68 },
    ],
  },
];
