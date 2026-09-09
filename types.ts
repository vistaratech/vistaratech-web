export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  year: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  tags: string[];
}

export interface NavItem {
  label: string;
  href: string;
}
