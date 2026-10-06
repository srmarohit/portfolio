export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    description:
      "Core languages I use to build reliable, type-safe full-stack software.",
    skills: [
      { name: "JavaScript (ES6+)", level: 92 },
      { name: "TypeScript", level: 88 },
      { name: "Python", level: 65 },
    ],
  },
  {
    category: "Frontend",
    description:
      "Building scalable, performant, and responsive interfaces with modern React and Next.js.",
    skills: [
      { name: "React.js", level: 92 },
      { name: "Next.js", level: 85 },
      { name: "Redux / Redux Toolkit", level: 85 },
      { name: "Module Federation", level: 75 },
      { name: "React Query / TanStack Query", level: 82 },
      { name: "Apollo Client", level: 78 },
    ],
  },
  {
    category: "Styling & UI",
    description:
      "Crafting consistent, accessible UIs with utility-first and component-driven styling.",
    skills: [
      { name: "Tailwind CSS", level: 88 },
      { name: "Sass/SCSS", level: 85 },
      { name: "Styled Components", level: 82 },
      { name: "MUI", level: 85 },
      { name: "Ant Design", level: 78 },
      { name: "Bootstrap", level: 80 },
      { name: "CSS Modules", level: 82 },
    ],
  },
  {
    category: "Backend",
    description:
      "Designing APIs and services that stay fast, modular, and maintainable.",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 88 },
      { name: "NestJS", level: 88 },
      { name: "FastAPI", level: 60 },
      { name: "REST APIs", level: 92 },
      { name: "GraphQL", level: 82 },
      { name: "WebSockets", level: 82 },
      { name: "gRPC", level: 65 },
    ],
  },
  {
    category: "Databases",
    description:
      "Modeling and querying data across relational, document, and vector stores.",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 88 },
      { name: "Prisma", level: 82 },
      { name: "TypeORM", level: 78 },
      { name: "Mongoose", level: 85 },
      { name: "Pinecone", level: 60 },
      { name: "Qdrant", level: 58 },
    ],
  },
  {
    category: "Messaging & Microservices",
    description:
      "Building event-driven, decoupled systems that scale and recover gracefully.",
    skills: [
      { name: "Kafka", level: 80 },
      { name: "RabbitMQ", level: 72 },
      { name: "Redis Pub/Sub", level: 85 },
      { name: "BullMQ / Bull", level: 85 },
      { name: "AWS SQS/SNS", level: 70 },
      { name: "NestJS Microservices", level: 85 },
      { name: "Event-Driven Architecture", level: 82 },
    ],
  },
  {
    category: "Auth & Security",
    description:
      "Securing applications with robust authentication, authorization, and hardening.",
    skills: [
      { name: "JWT", level: 88 },
      { name: "OAuth 2.0", level: 80 },
      { name: "Clerk", level: 78 },
      { name: "Passport.js", level: 82 },
      { name: "RBAC", level: 88 },
      { name: "Helmet / CORS", level: 85 },
      { name: "Rate Limiting (Throttler)", level: 80 },
    ],
  },
  {
    category: "Caching & Delivery",
    description:
      "Speeding up content delivery and reducing load with smart caching and distribution.",
    skills: [
      { name: "Redis", level: 88 },
      { name: "Cache-Manager", level: 78 },
      { name: "CloudFront", level: 72 },
      { name: "CloudFlare", level: 70 },
      { name: "Nginx (Load Balancing)", level: 72 },
    ],
  },
  {
    category: "Cloud & DevOps",
    description:
      "Shipping, automating, and deploying applications with confidence.",
    skills: [
      { name: "AWS (EC2, S3, Lambda, RDS, ECS)", level: 78 },
      { name: "Azure", level: 55 },
      { name: "GCP", level: 55 },
      { name: "Docker / Docker Compose", level: 82 },
      { name: "GitHub Actions", level: 80 },
      { name: "Jenkins", level: 68 },
      { name: "Git / GitHub / GitLab / Bitbucket", level: 90 },
      { name: "Vercel / Netlify", level: 85 },
    ],
  },
  {
    category: "Monitoring & Logging",
    description:
      "Keeping production healthy with observability, metrics, and structured logs.",
    skills: [
      { name: "Prometheus", level: 75 },
      { name: "Grafana", level: 75 },
      { name: "Loki", level: 70 },
      { name: "Datadog", level: 65 },
      { name: "Winston", level: 82 },
    ],
  },
  {
    category: "Testing",
    description:
      "Protecting quality with unit, component, and end-to-end test coverage.",
    skills: [
      { name: "Jest", level: 82 },
      { name: "React Testing Library", level: 80 },
      { name: "Cypress", level: 75 },
      { name: "E2E Testing", level: 78 },
    ],
  },
  {
    category: "Performance",
    description:
      "Optimizing front-end load times and back-end queries for a snappy experience.",
    skills: [
      { name: "Lighthouse / Web Vitals", level: 85 },
      { name: "Code Splitting / Lazy Loading", level: 88 },
      { name: "Memoization", level: 85 },
      { name: "DB Indexing (B-tree)", level: 80 },
      { name: "Query/Aggregation Optimization", level: 80 },
      { name: "Sharding / Partitioning", level: 65 },
    ],
  },
  {
    category: "AI & Emerging Tech",
    description:
      "Applying GenAI, agents, and AI-assisted workflows to build and ship faster.",
    skills: [
      { name: "GenAI", level: 72 },
      { name: "RAG", level: 70 },
      { name: "Agentic AI / Agents", level: 70 },
      { name: "MCP", level: 68 },
      { name: "Spec-Driven Development", level: 78 },
      { name: "Claude / Copilot / ChatGPT", level: 88 },
      { name: "AI Code Review & PR Automation", level: 75 },
    ],
  },
  {
    category: "Real-Time & Integrations",
    description:
      "Integrating video, communication, and analytics SDKs into production apps.",
    skills: [
      { name: "Jitsi", level: 78 },
      { name: "AWS Chime SDK", level: 68 },
      { name: "MizuSDK", level: 62 },
      { name: "PostHog", level: 70 },
    ],
  },
  {
    category: "Tooling",
    description:
      "Everyday tools that keep code clean, consistent, and easy to debug.",
    skills: [
      { name: "npm / yarn / pnpm", level: 90 },
      { name: "ESLint / Prettier", level: 88 },
      { name: "Husky", level: 78 },
      { name: "Postman", level: 88 },
      { name: "Chrome DevTools", level: 90 },
    ],
  },
];
