import {
  Briefcase,
  Code2,
  Coffee,
  Database,
  GitBranch,
  Globe,
  GraduationCap,
  Layout,
  Mail,
  MapPin,
  Palette,
  Phone,
  Server,
  Terminal,
} from "lucide-react";
import { title } from "process";
import { Description } from "radix-ui/dialog";

import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";

export const stats = [
  { label: "Master's Degree", value: "2024" },
  { label: "Professional Experience", value: "2+" },
  { label: "Languages Spoken", value: "5" },
  { label: "Web Technologies", value: "10+" },
];

export const highlights = [
  { icon: MapPin, text: "Based in Béjaïa, Algeria" },
  { icon: Briefcase, text: "Webmaster at Soummam Computer System" },
  { icon: GraduationCap, text: "Master's Degree in Software Engineering" },
  { icon: Coffee, text: "Passionate about web development & innovation" },
];

export const userReviewData = [
  // Tu pourras ajouter de vrais témoignages plus tard.
   {
    id: 1,
    name: "Dr Mebarki Souad",
    profession: "Chirurgienne-dentiste",
    userImage: "/images/dev-female.png",
    review:
      "Un service professionnel et de grande qualité. L'équipe a parfaitement compris mes besoins et m'a proposé des solutions modernes, efficaces et adaptées à mon activité. Je recommande vivement !"
  },
  {
    id: 2,
    name: "Soummam Computer System",
    profession: "Entreprise de solutions informatiques",
    userImage: "/images/dev-male.png",
    review:
      "Une collaboration remarquable, avec une équipe sérieuse, réactive et compétente. Les solutions proposées répondent parfaitement à nos exigences professionnelles. Un partenaire fiable que nous recommandons sans hésitation."
  },
  {
    id: 3,
    name: "Fennouch Nadjim",
    profession: "Développeur Full Stack",
    userImage: "/images/dev-male.png",
    review:
      "Une excellente expérience ! Un travail soigné, une communication fluide et une véritable maîtrise des technologies web modernes. Le résultat est performant, responsive et parfaitement adapté aux besoins du projet."
  },
];

export const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "faycalmebarki07@gmail.com",
    href: "mailto:faycalmebarki07@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+213 660 327 339",
    href: "tel:+213660327339",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Sidi aich, Béjaïa, Algeria 06005",
    href: "https://maps.app.goo.gl/SVWqTqH2JpbPFKJr7",
  },
];

export const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/faycal07",
    label: "GitHub",
  },
  {
    icon: FaLinkedinIn,
    href: "https://linkedin.com/in/fayçal-mebarki-018874379",
    label: "LinkedIn",
  },
];

export const experiences = [
  {
    type: "work",
    title: "Webmaster",
    company: "Soummam Computer System (SCS)",
    period: "April 2025 - Present",
    description:
      "Custom web development and website management using WordPress, PrestaShop, HTML, CSS and JavaScript. Integration of CIB and Dahabia payment solutions, SEO optimization, website security, business strategy implementation and project coordination.",
    technologies: [
      "WordPress",
      "PrestaShop",
      "HTML",
      "CSS",
      "JavaScript",
      "SEO",
      "CIB",
      "Dahabia",
    ],
  },
  {
    type: "work",
    title: "Dental Assistant",
    company: "Private Dental Clinic, Béjaïa",
    period: "July 2024 - March 2025",
    description:
      "Welcomed and prepared patients for treatments, managed appointments and medical records, and maintained hygiene and sterilization procedures.",
    technologies: [
      "Organization",
      "Patient Management",
      "Teamwork",
      "Communication",
    ],
  },
  {
    type: "work",
    title: "Developer Intern",
    company: "SARL SPC GB, Béjaïa",
    period: "February 2024 - May 2024",
    description:
      "Designed and developed a marketing automation CRM system following the Agile Scrum methodology.",
    technologies: [
      "Laravel",
      "PHP",
      "APIs",
      "Agile",
      "Scrum",
    ],
  },
  {
    type: "education",
    title: "Master's Degree in Software Engineering",
    company: "Abderrahmane Mira University of Béjaïa",
    period: "2022 - 2024",
    description:
      "Master's thesis focused on the design and development of a marketing automation CRM system.",
    technologies: [
      "Software Engineering",
      "CRM",
      "Laravel",
      "Agile",
      "UML",
    ],
  },
  {
    type: "education",
    title: "Bachelor's Degree in Information Systems",
    company: "Abderrahmane Mira University of Béjaïa",
    period: "2019 - 2022",
    description:
      "Final year project focused on the development of an e-commerce platform for clothing sales.",
    technologies: [
      "Information Systems",
      "E-Commerce",
      "Web Development",
      "Databases",
    ],
  },
];

export const footerSocialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/faycal07",
    label: "GitHub",
  },
  {
    icon: FaLinkedinIn,
    href: "https://linkedin.com/in/fayçal-mebarki-018874379",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:faycalmebarki07@gmail.com",
    label: "Email",
  },
];

export const projects = [
  {
    title: "Marketing Automation CRM",
    description:
      "Design and development of a CRM system dedicated to marketing automation as part of my Master's final internship.",
    image: "/images/crm-toudja.png",
    techStack: [
      "Laravel",
      "PHP",
      "JavaScript",
      "SQL",
      "APIs",
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/faycal07/market222",
  },

  {
    title: "Professional Business Website",
    description:
      "Development and maintenance of busines website using WordPress, including SEO optimization and website security.",
    image: "/images/odesk.png",
    techStack: [
      "WordPress",
      "JavaScript",
      "SEO",
    ],
    demoUrl: "https://odesk-dz.com/",
    githubUrl: "#",
  },
  {
    title:"Desktop patients managment app",
    description:"Development of a desktop app for a dentist to manage patients ,treatments and payments using react with tailwindcss ,electron and sqlite",
    image: "/images/web-project.jpg",
    techStack: [
      "React JS",
      "Electron JS",
      "TailwindCSS",
      "Sqlite",
    ],
     demoUrl: "#",
    githubUrl: "https://github.com/faycal07/SM-main",

  },
];

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: Code2 },
      { name: "CSS", icon: Palette },
      { name: "JavaScript", icon: Terminal },
      { name: "React", icon: Globe },
      { name: "Tailwind CSS", icon: Palette },
      { name: "Bootstrap", icon: Layout },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "PHP", icon: Server },
      { name: "Laravel", icon: Server },
      { name: "Java", icon: Code2 },
      { name: "SQL", icon: Database },
      { name: "REST APIs", icon: Globe },
      { name: "C", icon: Terminal },
    ],
  },
  {
    title: "CMS & Web",
    skills: [
      { name: "WordPress", icon: Globe },
      { name: "PrestaShop", icon: Globe },
      { name: "SEO", icon: Globe },
      { name: "Payment Integration", icon: Database },
      { name: "Website Security", icon: Server },
    ],
  },
  {
    title: "Tools & Methodologies",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "VS Code", icon: Code2 },
      { name: "Trello", icon: Layout },
      { name: "Agile / Scrum", icon: Briefcase },
      { name: "UML", icon: Database },
    ],
  },
];