// TODO: replace all placeholder values below with real content.
export interface Profile {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  location: string;
  avatarUrl: string;
  resumeUrl: string;
  email: string;
  whatsappNumber: string; // E.164 format without '+', e.g. 919876543210
  social: {
    github: string;
    linkedin: string;
  };
}

export const profile: Profile = {
  name: "Rohit Sharma",
  role: "Software Engineer",
  tagline: "Building reliable, scalable web applications end to end.",
  bio: "I am a software engineer who enjoys turning complex problems into simple, elegant, and maintainable solutions. I specialize in building full-stack web applications with React, Node.js, and cloud-native tooling, and I care deeply about clean architecture, performance, and developer experience.",
  location: "Bengaluru, India",
  avatarUrl: "/avatar-placeholder.svg",
  resumeUrl: "/resume-placeholder.pdf",
  email: "rohit.sharma@example.com",
  whatsappNumber: "910000000000",
  social: {
    github: "https://github.com/rohit-placeholder",
    linkedin: "https://linkedin.com/in/rohit-placeholder",
  },
};
