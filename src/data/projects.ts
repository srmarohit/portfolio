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
    title: "Curated European Trip Booking Platform",
    description:
      "End-to-end system for discovering, booking, and fulfilling curated European rail travel packages. The public Next.js site lets customers browse, filter, and book self-guided trips, group tours, and custom interrailing routes with real-time availability. The internal admin panel lets staff manage packages, bookings, and deposits, and automates confirmation emails and travel-pack generation.",
    image: "/project-placeholder-1.svg",
    tags: [
      "Next.js",
      "React.js",
      "NestJS",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "WebSockets",
    ],
    featured: true,
  },
  {
    id: "proj-2",
    title: "UCaaS – Unified Communications Platform",
    description:
      "Unified communications platform for messaging, video/audio calling, and faxing across web, mobile, and desktop, with SSO (Microsoft 365/Google) and MFA. Uses Jitsi for video calling, Redis Pub/Sub for real-time notifications, and Prometheus, Grafana, and Loki for production monitoring.",
    image: "/project-placeholder-2.svg",
    tags: [
      "Node.js",
      "Jitsi",
      "Redis Pub/Sub",
      "PostgreSQL",
      "AWS RDS",
      "Prometheus",
      "Grafana",
      "Loki",
    ],
    featured: true,
  },
  {
    id: "proj-3",
    title: "Athlete Fan Club Platform",
    description:
      "Role-based web app for Members, Athletes, and Admins, where fans subscribe to athlete clubs for exclusive content. Authentication runs on Clerk, and BullMQ handles subscription and payment workflows in the background for better reliability.",
    image: "/project-placeholder-3.svg",
    tags: ["React.js", "Clerk", "Prisma", "MongoDB", "BullMQ"],
    featured: true,
  },
  {
    id: "proj-4",
    title: "Partner & Opportunity Management Platform",
    description:
      "Collaboration platform where organizations register, invite partners, and manage shared opportunities, with role-based access and AI-powered chat. Includes invite/accept-reject workflows and an analytics dashboard, with Redis Pub/Sub for real-time updates and BullMQ for async notification queues.",
    image: "/project-placeholder-4.svg",
    tags: ["React.js", "Node.js", "Redis Pub/Sub", "BullMQ", "RBAC", "AI Chat"],
    featured: true,
  },
  {
    id: "proj-5",
    title: "Personalized Job Dashboard",
    description:
      "Web app that streamlines job search management by extracting job-related details from the user's email inbox and presenting them in a personalized dashboard. Uses secure email integration with 2FA and IMAP-based scraping, so no manual tracking is needed.",
    image: "/project-placeholder-2.svg",
    tags: ["React.js", "Express.js", "Firebase", "IMAP", "2FA"],
  },
  {
    id: "proj-6",
    title: "POC: NestJS + GraphQL Inventory API",
    description:
      "Schema-first GraphQL API in NestJS for a multi-warehouse inventory system. Uses DataLoader to resolve N+1 issues and Guards for field-level authorization, with real-time stock updates via GraphQL Subscriptions and validated, type-safe queries and mutations.",
    image: "/project-placeholder-1.svg",
    tags: ["NestJS", "GraphQL", "PostgreSQL", "DataLoader", "Subscriptions"],
    repoUrl: "https://github.com/srmarohit/nestjs-graphQL-postgress",
    language: "TypeScript",
  },
  {
    id: "proj-7",
    title: "POC: Kafka Event-Driven Microservices",
    description:
      "Event-driven order processing system built from 3 NestJS microservices that communicate via Kafka topics, using consumer groups and dead-letter topics for reliability. Ordered, idempotent message processing handles Kafka's at-least-once delivery guarantee.",
    image: "/project-placeholder-4.svg",
    tags: ["NestJS", "Kafka", "Redis", "Docker", "PostgreSQL", "Microservices"],
    repoUrl: "https://github.com/srmarohit/NestJs-Redis-docker-kafka-postgress",
    language: "TypeScript",
  },
  {
    id: "proj-8",
    title: "POC: Micro-Frontend with Module Federation",
    description:
      "Micro-frontend dashboard built with Module Federation (Vite), featuring a host shell and independently deployable React remotes. React and React-DOM are shared as singletons, and remotes load dynamically without redeploying the host.",
    image: "/project-placeholder-3.svg",
    tags: ["React", "Vite", "Module Federation", "Micro-Frontends"],
    repoUrl: "https://github.com/srmarohit/mfe-vite",
    language: "TypeScript",
  },
];
