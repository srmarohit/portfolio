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
    company: "Simform Solutions Pvt. Ltd.",
    role: "MERN Stack Developer",
    startDate: "Jun 2023",
    endDate: "Oct 2026",
    location: "India",
    summary:
      "Designed and built scalable web platforms spanning travel booking, unified communications, subscription-based fan clubs, and partner collaboration, using React, Next.js, Node.js/NestJS, and event-driven architecture.",
    highlights: [
      "Curated European Trip Booking Platform: built a Next.js public site with Redis and WebSockets for real-time availability, letting customers browse, filter, and book self-guided trips, group tours, and custom interrailing routes.",
      "Built the platform's internal admin panel with React.js, NestJS, PostgreSQL, and BullMQ to manage packages, bookings, and deposits, and to automate confirmation emails and travel-pack generation.",
      "UCaaS Platform: built a unified communications platform for messaging, video/audio calling, and faxing across web, mobile, and desktop, with SSO (Microsoft 365/Google) and MFA.",
      "Integrated the Jitsi API for video calling, built RESTful APIs in Node.js, and used Redis Pub/Sub for real-time notifications alongside PostgreSQL/AWS RDS for storage.",
      "Set up monitoring and observability with Prometheus, Grafana, and Loki to track system health and troubleshoot production issues.",
      "Athlete Fan Club Platform: built a role-based web app for Members, Athletes, and Admins, letting fans subscribe to athlete clubs for exclusive content.",
      "Implemented authentication with Clerk, integrated Prisma ORM with MongoDB, and used BullMQ for subscription/payment background workflows to improve reliability.",
      "Partner & Opportunity Management Platform: built a collaboration platform where organizations register, invite partners, and manage shared opportunities, with role-based access and AI-powered chat.",
      "Built invite/accept-reject workflows and an analytics dashboard, using Redis Pub/Sub for real-time collaboration updates and BullMQ for async notification queues.",
    ],
    techStack: [
      "React.js",
      "Next.js",
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "MongoDB",
      "Prisma",
      "Redis",
      "BullMQ",
      "WebSockets",
      "Jitsi",
      "Clerk",
      "AWS RDS",
      "Prometheus",
      "Grafana",
      "Loki",
    ],
  },
  {
    id: "exp-2",
    company: "Xeenius Technologies Pvt. Ltd.",
    role: "Full Stack Developer",
    startDate: "Jul 2022",
    endDate: "Jun 2023",
    location: "India",
    summary:
      "Built a personalized job-search dashboard that automatically turns a user's email inbox into structured job tracking.",
    highlights: [
      "Built a web app that extracts job-related details from the user's email inbox and presents them in a personalized dashboard.",
      "Implemented secure email integration with 2FA and IMAP-based scraping to pull and structure job emails, removing the need for manual tracking.",
      "Developed the frontend in React.js and the backend in Express.js, using Firebase for authentication and hosting.",
    ],
    techStack: ["React.js", "Express.js", "Node.js", "Firebase", "IMAP"],
  },
  {
    id: "exp-1",
    company: "LevelApp Innovation Pvt. Ltd.",
    role: "Trainer",
    startDate: "Jul 2020",
    endDate: "Jun 2022",
    location: "India",
    summary:
      "Worked as a trainer, building the foundation for a move into full-stack development.",
    highlights: [],
    techStack: [],
  },
];
