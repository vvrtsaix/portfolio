export type Experience = {
  date: string
  company: string
  position: string
  details: string[]
}

export type Project = {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  href?: string
}

export type Certificate = {
  name: string
  org: string
  href?: string
  imageUrl: string
}

export const experiences: Experience[] = [{
  date: "Feb 2023 - Now",
  company: "Monosolution LLC",
  position: "Senior Lead Software Developer",
  details: [
    "As a Development Team Lead, I spearheaded two projects. The first, 'Detect HCC,' is a Clinical Research Management System has real-time communication (including chat, video, and phone), file system, and comprehensive clinical study capabilities. The second project, the 'Business Management System (BMS),' boasts features such as communication tools, file system, company newsfeed, HR, and CRM.",
    "I trained my peers and used DevOps CI/CD.",
    "Technologies: NodeJS, GraphQL, TailwindCSS, React, GoLang, NextJS, Flutter, MQTT and Microservice",
  ],
}, {
  date: "Feb 2022 - Feb 2023",
  company: "Fibo Cloud Pte Ltd",
  position: "Chief Cloud Architect",
  details: [
    "My role involved researching and developing features and services for public clouds, including cloud.mn and cloud.ttc.kz. I made significant contributions to the creation of Managed Kubernetes Service and App platform, as well as Simplehost for PHP-based applications.",
    "I provided valuable DevOps and cloud service consulting services to other companies.",
    "I instructed courses on Kubernetes and container technology.",
  ],
}, {
  date: "Jun 2021 - Feb 2023",
  company: "TECH PARTNERS",
  position: "Senior Software Engineer",
  details: [
    "I've had the privilege of working on diverse projects, including leading the development team for the travel website ITrip.mn, contributing to the Yuna restaurant app, and developing the student management system for Citi University.",
    "Technologies: GoLang, React, NextJS, Flutter, tRPC, gRPC, TailwindCSS and DotNet",
  ],
}, {
  date: "Jun 2021 - Feb 2022",
  company: "Fibo Cloud Pte Ltd",
  position: "Senior Software Engineer",
  details: [
    "I've played a pivotal role in diverse projects, including the Fibo Stack Private Cloud Management System, the Mongolian Public Cloud Service (Cloud.mn), and consulting on public cloud (AWS, GCP, Azure) and DevOps.",
    "Technologies: AWS, GCP, Docker, Kubernetes, Linux, Openstack, Jenkins, Gitlab CI, GoLang, gRPC, React and Python",
  ],
}, {
  date: "Jul 2020 - Dec 2020",
  company: "Eclinic",
  position: "Full Stack Engineer",
  details: [
    "I was part of a three-engineer team that developed an ERP system for a hospital.",
    "Technologies: Laravel (PHP), Vue (Javascript) and Java spring (Java)",
  ],
}, {
  date: "Jun 2020 - Jul 2020",
  company: "Eclinic",
  position: "Full Stack Engineer",
  details: [
    "I've worked on two React Native applications. The first is a mobile job app with separate interfaces for employees and employers. It's powered by a WordPress backend with GraphQL integration. The second is a nurse rental app.",
    "Technologies: React Native, Wordpress and GraphQL",
  ],
}]

export const skills = [
  "Software development (5 years)",
  "DevOps (3 years)",
  "System Architecture (3 years)",
  "Cloud Solutions Architect (3 years)",
  "Team management (3 years)",
] as const;

export const technologies = [
  "GoLang (4 years)",
  "Javascript (5 years)",
  "Typescript (3 years)",
  "NextJS, React (5 years)",
  "TailwindCSS (3 years)",
  "Python (2 years)",
  "Svelte, Vue (2 years)",
  "React Native (5 years)",
  "Flutter (3 years)",
  "PHP (3 years)",
  "Java (2 years)",
  "Rust (1 years)",
  "DotNet (1 years)",
  "Elastic search (3 years)",
  "Kubernetes (3 years)",
  "AWS (3 years)",
  "Docker (4 years)",
  "RDS, SQL (5 years)",
  "Postgres (5 years)",
  "MongoDB (1 years)",
  "GraphQL (4 years)",
  "gRPC (1 years)",
  "MQTT, RabbitMQ (2 years)",
] as const;

export const projects: Project[] = [
  {
    title: "TTC Cloud",
    description:
      "I played a key role in the development of the TTC Cloud service, where I was directly responsible for creating SimpleHost, Object Storage, Application Platforms, and Managed Kubernetes services.",
    tags: ["Managed Kubernetes Service", "Simplehost", "App platform", "Object storage", "Virtual Server"],
    imageUrl: "/images/cloud-ttc.webp",
    href: "https://cloud.ttc.kz/"
  },
  {
    title: "Oblako.dev",
    description:
      "Oblako Dev is a straightforward deployment solution, akin to Vercel and Render. It seamlessly integrates with GitHub and GitLab, automating deployments for various programming languages and frameworks. Additionally, it offers hassle-free PHP hosting. I took on a solo development role for the entire system, spanning frontend, backend, server management, and Kubernetes orchestration.",
    tags: ["Kubernetes", "NextJS", "tRPC", "gRPC", "GoLang", "BuildKit"],
    imageUrl: "/images/oblako-dev.webp",
    href: "https://oblako.dev"
  },
  {
    title: "ITrip.mn",
    description:
      "This is a comprehensive travel website offering details on flights, trips, hotels, trains, and travel insurance. I was lead development team, primarily contribute on backend coding.",
    tags: ["NextJS", "NodeJS", "GoLang", "DotNet", "MQTT", "3th party services"],
    imageUrl: "/images/itrip-mn.webp",
    href: "https://itrip.mn/"
  },
  {
    title: "Absolute.mn",
    description:
      "This is the official website for the Absolute English course. It's powered by a robust tech stack, featuring the Strapi CMS, Next.js for both frontend and backend, and Minio object storage, all seamlessly integrated to deliver a smooth and dynamic user experience.",
    tags: ["NextJS", "Tailwind", "Framer Motion", "Strapi CMS"],
    imageUrl: "/images/absolute-mn.webp",
    href: "https://absolute.mn"
  },
  {
    title: "Absolute Student App",
    description:
      "This educational application is tailored for absolute students, offering a comprehensive set of features including online video and audio courses, reading materials, interactive tests, real-time news updates, and convenient access to student weekly schedules.",
    tags: ["React Native", "Reanimated", "GoLang", "NextJS", "Minio S3"],
    imageUrl: "/images/absolute-student-app.webp",
    href: "https://apps.apple.com/us/app/absolute-student-app/id1658466540"
  },
  {
    title: "Yuna restaurant",
    description:
      "This program empowers users to effortlessly browse the menu, place orders, and enjoy exclusive promotions. Specifically designed for Yuna restaurants, my role encompassed the development of the admin dashboard, backend services, and the mobile application.",
    tags: ["Flutter", "GoLang", "NextJS", "Minio S3"],
    imageUrl: "/images/yuna-restaurant.webp",
    href: "https://apps.apple.com/mm/app/yuna-restaurant/id1625573111?platform=iphone"
  },
  {
    title: "Personal Portfolio",
    description:
      "Crafted with care, this website stands as a platform to showcase my professional portfolio. Here, you can explore an array of my work and projects, providing a window into my skills and dedication to excellence.",
    tags: ["Astro", "React", "Tailwind", "Framer Motion"],
    imageUrl: "/images/portfolio.webp",
    href: "https://portfolio-vvrtsaix.vercel.app"
  },
]

export const certifications: Certificate[] = [{
  name: "AWS Certified Solutions Architect - Associate",
  org: "Amazon Web Services",
  href: "https://www.credly.com/badges/d6e42bf3-8f7e-4ec5-b38b-6a29cea68361?source=linked_in_profile",
  imageUrl: "/images/aws-sa-a.webp"
}, {
  name: "CKA: Certified Kubernetes Administrator",
  org: "Linux Foundation",
  href: "https://www.credly.com/badges/4344e721-048d-47e5-bbd2-573d36a6643a?source=linked_in_profile",
  imageUrl: "/images/cka.webp"
}]