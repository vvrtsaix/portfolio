import itripMn from "@/assets/images/itrip-mn.webp";
import absoluteMn from "@/assets/images/absolute-mn.webp";
import absoluteStudentApp from "@/assets/images/absolute-student-app.webp";
import yunaRestaurant from "@/assets/images/yuna-restaurant.webp";
import awsSaA from "@/assets/images/aws-sa-a.webp";
import cka from "@/assets/images/cka.webp";

export type Experience = {
  date: string
  company: string
  position: string
  details: string[]
  stack?: string[]
}

export type Project = {
  title: string
  description: string
  tags: string[]
  image: ImageMetadata
  imageAlt: string
  href?: string
}

export type Certificate = {
  name: string
  org: string
  href?: string
  image: ImageMetadata
}

export type Capability = { name: string; years: number }

export const experiences: Experience[] = [{
  date: "Jan 2026 - Present",
  company: "AND Global Pte. Ltd.",
  position: "Senior Developer",
  details: [],
}, {
  date: "Nov 2023 - Dec 2025",
  company: "Zero Technology LLC",
  position: "Team Tech Lead",
  details: [
    "Designed and deployed a payment gateway averaging 10 transactions per second, powering GS25 POS, Shunkhlai Petroleum POS, APU DOT and Orange App.",
    "Delivered Orange App with loyalty, e-commerce and service ordering for 1M+ Shunkhlai Petroleum customers.",
    "Built a B2B POS system for 7 partner companies and 200+ active users, covering loans, invoices and transactions with integrated loyalty.",
    "Led development of the Shunkhlai Campus super-app, used by 2,000+ employees for food, parking, meeting rooms and service requests with centralized access control.",
    "Built a central loyalty system integrated across 6 platforms (mobile apps, websites, POS) with real-time accrual and redemption across Shunkhlai Group companies.",
  ],
  stack: ["Go", "Node.js", "Next.js", "React", "Tailwind CSS", "Microservices"],
}, {
  date: "Feb 2023 - Nov 2023",
  company: "Mono Solution",
  position: "Senior Lead Software Developer",
  details: [
    "Directed development of Detect HCC, a clinical research management system with real-time chat, video, file sharing and study management.",
    "Led development of a Business Management System (BMS) with HR, CRM, communication tools and a company newsfeed.",
    "Mentored peers in DevOps and set up CI/CD pipelines to speed up delivery.",
  ],
  stack: ["Go", "Node.js", "GraphQL", "Next.js", "React", "Flutter", "MQTT", "Tailwind CSS", "Microservices"],
}, {
  date: "Feb 2022 - Feb 2023",
  company: "FIBO GLOBAL",
  position: "Chief Cloud Architect",
  details: [
    "Led R&D for public cloud services (cloud.mn, cloud.ttc.kz), including Managed Kubernetes, an app platform and Simplehost for PHP apps.",
    "Delivered cloud and DevOps consulting for client companies.",
    "Ran Kubernetes and containerization training for internal and external engineering teams.",
  ],
}, {
  date: "Jun 2021 - Feb 2023",
  company: "TECH PARTNERS",
  position: "Senior Software Engineer (part-time)",
  details: [
    "Led development of the ITrip.mn travel booking site.",
    "Contributed to the Yuna restaurant app's digital ordering and loyalty features.",
    "Built the student management system for Citi University.",
  ],
  stack: ["Go", "React", "Next.js", "Flutter", "tRPC", "gRPC", ".NET", "Tailwind CSS"],
}, {
  date: "Jan 2020 - Feb 2022",
  company: "FIBO GLOBAL",
  position: "Senior Software Engineer",
  details: [
    "Built the Fibo Stack private cloud management system and the Mongolian public cloud Cloud.mn.",
    "Consulted enterprise clients on AWS, GCP and Azure adoption and DevOps.",
    "Built and tuned CI/CD pipelines in Jenkins and GitLab CI.",
  ],
  stack: ["Go", "Python", "React", "gRPC", "OpenStack", "Kubernetes", "Docker", "AWS", "GCP", "Jenkins", "GitLab CI", "Linux"],
}, {
  date: "Jul 2019 - Dec 2019",
  company: "Towersoft",
  position: "Full Stack Engineer",
  details: [
    "One of three engineers building a hospital ERP system.",
  ],
  stack: ["Laravel (PHP)", "Vue", "Spring (Java)"],
}, {
  date: "Jan 2019 - Jul 2019",
  company: "Codo Core",
  position: "Mobile Application Developer",
  details: [
    "Built a React Native job app with separate employee and employer flows, backed by WordPress over GraphQL.",
    "Built a React Native nurse booking app.",
  ],
  stack: ["React Native", "WordPress", "GraphQL"],
}]

export const skills: Capability[] = [
  { name: "Software development", years: 7 },
  { name: "DevOps", years: 5 },
  { name: "System Architecture", years: 5 },
  { name: "Cloud architecture", years: 5 },
  { name: "Team leadership", years: 4 },
];

export const technologies: Capability[] = [
  { name: "Go", years: 6 },
  { name: "JavaScript, TypeScript", years: 7 },
  { name: "Next.js, React", years: 7 },
  { name: "React Native", years: 7 },
  { name: "Flutter", years: 5 },
  { name: "Kubernetes", years: 5 },
  { name: "Docker", years: 6 },
  { name: "AWS", years: 5 },
  { name: "PostgreSQL, SQL", years: 7 },
  { name: "GraphQL", years: 5 },
  { name: "gRPC", years: 3 },
  { name: "MQTT, RabbitMQ", years: 4 },
];

export const projects: Project[] = [
  {
    title: "ITrip.mn",
    description:
      "Travel booking for flights, tours, hotels, trains and travel insurance. Led the development team and wrote most of the backend.",
    tags: ["Next.js", "Node.js", "Go", ".NET", "MQTT", "Third-party APIs"],
    image: itripMn,
    imageAlt: "ITrip.mn homepage: flight search form over a photo of hot-air balloons at sunrise",
    href: "https://itrip.mn/"
  },
  {
    title: "Absolute.mn",
    description:
      "Website for the Absolute English course, built on Strapi CMS, Next.js and MinIO object storage.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Strapi CMS"],
    image: absoluteMn,
    imageAlt: "Absolute.mn homepage: headline “Let us be your bridge to the Future” beside two students holding a vocabulary book",
    href: "https://absolute.mn"
  },
  {
    title: "Absolute Student App",
    description:
      "Student app for Absolute English: video and audio lessons, reading materials, quizzes, news and weekly schedules.",
    tags: ["React Native", "Reanimated", "Go", "Next.js", "MinIO"],
    image: absoluteStudentApp,
    imageAlt: "Absolute Student App home screen on an iPhone: video lesson player, course shortcuts and weekly schedule",
    href: "https://apps.apple.com/us/app/absolute-student-app/id1658466540"
  },
  {
    title: "Yuna restaurant",
    description:
      "Menu browsing, ordering and promotions for Yuna restaurants. Built the admin dashboard, backend services and mobile app.",
    tags: ["Flutter", "Go", "Next.js", "MinIO"],
    image: yunaRestaurant,
    imageAlt: "Yuna restaurant app home screen on an iPhone: dish carousel and service shortcuts for delivery, table booking and branches",
    href: "https://apps.apple.com/mm/app/yuna-restaurant/id1625573111?platform=iphone"
  },
]

export const certifications: Certificate[] = [{
  name: "AWS Certified Solutions Architect - Associate",
  org: "Amazon Web Services",
  href: "https://www.credly.com/badges/d6e42bf3-8f7e-4ec5-b38b-6a29cea68361?source=linked_in_profile",
  image: awsSaA
}, {
  name: "CKA: Certified Kubernetes Administrator",
  org: "Linux Foundation",
  href: "https://www.credly.com/badges/4344e721-048d-47e5-bbd2-573d36a6643a?source=linked_in_profile",
  image: cka
}]
