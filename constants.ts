import { Project, Service, NavItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Aesthetic Cloth Brand",
    category: "E-Commerce / Full Stack",
    year: "2024",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "DMSpark - Instagram Automation",
    category: "SaaS / AI Automation",
    year: "2024",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Easy Records",
    category: "Web Application / Cloud",
    year: "2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "AWS Cloud Infrastructure",
    category: "DevOps & Architecture",
    year: "2024",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Fresh Mart",
    category: "Mobile App / React Native",
    year: "2024",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "SpotFix - Mechanic Finder",
    category: "Mobile App / React Native",
    year: "2024",
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?q=80&w=1200&auto=format&fit=crop"
  }
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Web Development",
    description: "Build powerful, scalable web applications with cutting-edge technologies and modern frameworks.",
    tags: ["React", "Node.js", "Next.js"]
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    tags: ["React Native", "Flutter", "iOS/Android"]
  },
  {
    id: 3,
    title: "AI & Machine Learning",
    description: "Harness the power of artificial intelligence to transform your business with intelligent solutions.",
    tags: ["TensorFlow", "PyTorch", "NLP"]
  },
  {
    id: 4,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and services to power your digital transformation journey.",
    tags: ["AWS", "Azure", "Google Cloud"]
  },
  {
    id: 5,
    title: "UI/UX Design",
    description: "Create stunning, intuitive interfaces that users love with our expert design team.",
    tags: ["Figma", "Adobe XD", "Design Systems"]
  },
  {
    id: 6,
    title: "Data Analytics",
    description: "Turn your data into actionable insights with advanced analytics and visualization.",
    tags: ["Power BI", "Tableau", "Python"]
  },
  {
    id: 7,
    title: "Cybersecurity",
    description: "Protect your digital assets with enterprise-grade security solutions and best practices.",
    tags: ["Penetration Testing", "Security Audits", "Compliance"]
  },
  {
    id: 8,
    title: "Digital Transformation",
    description: "Modernize your business with innovative digital strategies and cutting-edge technology.",
    tags: ["Strategy", "Automation", "Innovation"]
  }
];

export const NAV_ITEMS: NavItem[] = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" }
];