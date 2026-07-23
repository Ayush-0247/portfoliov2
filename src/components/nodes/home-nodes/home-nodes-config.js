"use client";

const tg3 = "/tg3.png";
const lifelinkr = "/lifelinkr.png";
import chat from "/chatapp.png";
import cvc from "/cvc.png";
import code from "/code.png";
import bank from "/bank.png";

const bracketsLogo = "/brackets.svg";

export const nodeData = {
  intro: {
    label: "Me",
  },

  time1: {
    period: "2026/Mar - 2026/Jul",
  },

  exp1: {
    company: "TG3 Agency",
    role: "Frontend Developer Intern",
    details: [
      "Built modern, responsive interfaces for Flinque and Vitrify Software using React.js and Tailwind CSS.",
      "Developed reusable component libraries, improving consistency and reducing development time across projects.",
      "Integrated 30+ REST APIs and collaborated closely with backend developers to deliver production-ready features.",
      "Resolved 15+ UI and functionality issues, improving application stability and user experience.",
      "Optimized application performance and responsiveness across desktop and mobile devices.",
      "Worked closely with designers and product teams to transform Figma designs into pixel-perfect interfaces.",
    ],
    media: tg3,
  },

  time2: {
    period: "2026/Jun - 2026/Sep",
  },

  exp2: {
    company: "Lifelinkr",
    role: "Software Engineering Intern",
    details: [
      "Developed CRM and healthcare dashboard modules using React.js, Tailwind CSS, and JavaScript.",
      "Integrated more than 30 REST APIs for patient, appointment, and clinic management workflows.",
      "Built scalable UI components and improved overall dashboard usability.",
      "Collaborated with cross-functional teams to ship production-ready healthcare features.",
      "Worked with modern development workflows using Git, Postman, and RESTful architecture.",
    ],
    media: lifelinkr,
  },

  time3: {
    period: "2026/Present",
  },

  exp3: {
    company: "CipherVest Capital",
    role: "Founder & CTO",
    details: [
      "Building a fintech platform focused on investment management, portfolio tracking, and financial analytics.",
      "Leading architecture decisions across frontend and backend using the MERN stack.",
      "Designing secure authentication, scalable APIs, and real-time financial dashboards.",
      "Managing product development from idea to deployment while continuously adding new platform capabilities.",
    ],
    media: cvc,
  },

  education: {
    institute: "KIET Group of Institutions",
    degree: "B.Tech in Electronics & Communication Engineering",
    duration: "2024 - 2028",
    cgpa: "7.67 CGPA",
    details: [
      "Relevant Coursework: Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks",
      "Frontend Development Lead at DSDL",
      "Built multiple MERN stack projects",
    ],
    // media: kiet, // optional logo
  },

  techStack: {
    title: "Tech Stack",
    subtitle: "Technologies I build with",
    categories: [
      {
        name: "Frontend",
        skills: ["React", "HTML5", "CSS3", "TailwindCSS", "JavaScript"],
      },
      {
        name: "Backend & Databases",
        skills: [
          "Node.js",
          "Express.js",
          "MongoDB",
          "MYSQL",
          "PostgreSQL",
          "REST APIs",
          "Socket.IO",
          "Mongoose",
        ],
      },
      {
        name: "Tools & DevOps",
        skills: [
          "Git",
          "GitHub",
          "Docker",
          "AWS",
          "Postman",
          "Vercel",
          "Render",
          "Netlify",
        ],
      },
    ],
  },

  proj1: {
    title: "CipherVest Capital",
    tag: "FinTech Platform",
    media: cvc,
    link: "https://ciphervestcapital.in",
    description:
      "A full-stack fintech platform featuring secure JWT authentication, role-based access control, portfolio management, analytics dashboards, and REST APIs built with the MERN stack.",
  },

  proj2: {
    title: "Real-Time Collaborative Code Editor",
    tag: "MERN • Socket.IO • Docker • AWS",
    media: code,
    link: "https://github.com/Ayush-0247/...",
    description:
      "A collaborative code editor with live multi-user editing, room-based collaboration, instant synchronization using Socket.IO, and a scalable Dockerized deployment on AWS.",
  },

  proj3: {
    title: "Real-Time Chat Application",
    tag: "React • Node.js • WebSockets",
    media: chat,
    link: "https://github.com/Ayush-0247/...",
    description:
      "A modern chat platform featuring instant messaging, typing indicators, online presence, and a responsive React interface powered by WebSockets.",
  },

  proj4: {
    title: "Banking System Backend",
    tag: "Node.js • Express • MongoDB",
    media: bank,
    link: "https://github.com/Ayush-0247/...",
    description:
      "A secure banking backend implementing JWT authentication, account management, money transfers, transaction history, email notifications, blacklist-based logout, and a modular MVC architecture.",
  },

  github: {
    username: "Ayush-0247",
  },

  contact: {
    email: "email@example.com",
    phone: "+91 12345 67890",
    location: "India",
  },
};

export const desktopNodes = [
  {
    id: "1",
    type: "introduction",
    position: { x: -1031, y: 324 },
    data: nodeData.intro,
  },
  {
    id: "git",
    type: "github",
    position: { x: -1244, y: 8 },
    data: nodeData.github,
  },
  {
    id: "git-visit",
    type: "gitvisit",
    position: { x: -1480, y: 100 },
    data: {},
  },
  {
    id: "t3",
    type: "time",
    position: { x: 156, y: 444 },
    data: nodeData.time3,
  },
  {
    id: "e3",
    type: "experience",
    position: { x: -56, y: 11 },
    data: nodeData.exp3,
  },
  {
    id: "t1",
    type: "time",
    position: { x: 636, y: 442 },
    data: nodeData.time1,
  },
  {
    id: "e1",
    type: "experience",
    position: { x: 425, y: 596 },
    data: nodeData.exp1,
  },
  {
    id: "t2",
    type: "time",
    position: { x: 1109, y: 442 },
    data: nodeData.time2,
  },
  {
    id: "e2",
    type: "experience",
    position: { x: 898, y: -58 },
    data: nodeData.exp2,
  },
  {
    id: "4",
    type: "project",
    position: { x: -1220, y: 760 },
    data: nodeData.proj1,
  },
  {
    id: "5",
    type: "project",
    position: { x: -620, y: 760 },
    data: nodeData.proj2,
  },
  {
    id: "6",
    type: "project",
    position: { x: -1220, y: 1020 },
    data: nodeData.proj3,
  },
  {
    id: "7",
    type: "project",
    position: { x: -620, y: 1020 },
    data: nodeData.proj4,
  },
  {
    id: "linkedin",
    type: "linkedin",
    position: { x: -585, y: 651 },
    data: {},
  },
  {
    id: "edu",
    type: "education",
    position: { x: -1900, y: 400 },
    data: nodeData.education,
  },
  {
    id: "tech",
    type: "techstack",
    position: { x: -300, y: 780 },
    data: nodeData.techStack,
  },
  {
    id: "resume",
    type: "resume",
    position: { x: -960, y: 651 },
    data: {},
  },
];

export const desktopEdges = [
  {
    id: "intro-edu",
    source: "1",
    target: "edu",
    sourceHandle: "education-right",
    targetHandle: "right",
    type: "smoothstep",
    animated: true,
    style: {
      stroke: "#000",
      strokeWidth: 2,
      strokeDasharray: "6 3",
    },
  },
  {
    id: "intro-tech",
    source: "1",
    target: "tech",
    sourceHandle: "education-right",
    targetHandle: "left",
    type: "smoothstep",
    animated: true,
    style: {
      stroke: "#000",
      strokeWidth: 2,
      strokeDasharray: "6 3",
    },
  },
  {
    id: "intro-resume",
    source: "1",
    target: "resume",
    sourceHandle: "projects",
    targetHandle: "top",
    type: "straight",
    animated: true,
    style: {
      stroke: "#000",
      strokeWidth: 2,
      strokeDasharray: "6 3",
    },
  },
  {
    id: "intro-git",
    source: "1",
    target: "git",
    sourceHandle: "github",
    targetHandle: "bottom",
    type: "straight",
    animated: true,
    style: { stroke: "#000", strokeWidth: 2, strokeDasharray: "6 3" },
  },
  {
    id: "git-gitvisit",
    source: "git",
    target: "git-visit",
    sourceHandle: "left-source",
    targetHandle: "right",
    type: "smoothstep",
    animated: true,
    style: { stroke: "#000", strokeWidth: 2, strokeDasharray: "6 3" },
  },
  {
    id: "intro-t3",
    source: "1",
    target: "t3",
    sourceHandle: "experience",
    targetHandle: "left",
    type: "smoothstep",
    animated: true,
    style: { stroke: "#000", strokeWidth: 2, strokeDasharray: "6 3" },
  },
  {
    id: "t3-e3",
    source: "t3",
    target: "e3",
    sourceHandle: "top",
    targetHandle: "bottom",
    type: "straight",
    animated: true,
    style: { stroke: "#000", strokeWidth: 2, strokeDasharray: "6 3" },
  },
  {
    id: "t3-t1",
    source: "t3",
    target: "t1",
    sourceHandle: "right",
    targetHandle: "left",
    type: "straight",
    animated: true,
    style: { stroke: "#000", strokeWidth: 2, strokeDasharray: "6 3" },
  },
  {
    id: "t1-e1",
    source: "t1",
    target: "e1",
    sourceHandle: "bottom",
    targetHandle: "top",
    type: "straight",
    animated: true,
    style: { stroke: "#000", strokeWidth: 2, strokeDasharray: "6 3" },
  },
  {
    id: "t1-t2",
    source: "t1",
    target: "t2",
    sourceHandle: "right",
    targetHandle: "left",
    type: "straight",
    animated: true,
    style: { stroke: "#000", strokeWidth: 2, strokeDasharray: "6 3" },
  },
  {
    id: "t2-e2",
    source: "t2",
    target: "e2",
    sourceHandle: "top",
    targetHandle: "bottom",
    type: "straight",
    animated: true,
    style: { stroke: "#000", strokeWidth: 2, strokeDasharray: "6 3" },
  },
  {
    id: "intro-4",
    source: "1",
    target: "4",
    sourceHandle: "projects",
    type: "smoothstep",
    animated: true,
    style: { stroke: "#000", strokeWidth: 2, strokeDasharray: "6 3" },
  },
  {
    id: "intro-6",
    source: "1",
    target: "6",
    sourceHandle: "projects",
    type: "smoothstep",
    animated: true,
    style: { stroke: "#000", strokeWidth: 2, strokeDasharray: "6 3" },
  },
  {
    id: "intro-linkedin",
    source: "1",
    target: "linkedin",
    sourceHandle: "projects",
    type: "smoothstep",
    animated: true,
    style: { stroke: "#000", strokeWidth: 2, strokeDasharray: "6 3" },
  },
  {
    id: "intro-5",
    source: "1",
    target: "5",
    sourceHandle: "projects",
    type: "smoothstep",
    animated: true,
    style: { stroke: "#000", strokeWidth: 2, strokeDasharray: "6 3" },
  },
  {
    id: "intro-7",
    source: "1",
    target: "7",
    sourceHandle: "projects",
    type: "smoothstep",
    animated: true,
    style: { stroke: "#000", strokeWidth: 2, strokeDasharray: "6 3" },
  },
];

export const mobileNodes = [
  {
    id: "edu",
    type: "education",
    position: { x: -140, y: 1850 },
    data: nodeData.education,
  },
  {
    id: "tech",
    type: "techstack",
    position: { x: -140, y: 2614 },
    data: nodeData.techStack,
  },
  {
    id: "resume",
    type: "resume",
    position: { x: -140, y: 2950 },
    data: {},
  },
  {
    id: "1",
    type: "introduction",
    position: { x: -225, y: -100 },
    data: nodeData.intro,
  },
  {
    id: "t1",
    type: "time",
    position: { x: -340, y: 650 },
    data: nodeData.time1,
  },
  {
    id: "e1",
    type: "experience",
    position: { x: -50, y: -173 },
    data: nodeData.exp1,
  },
  {
    id: "t2",
    type: "time",
    position: { x: -333, y: 1184 },
    data: nodeData.time2,
  },
  {
    id: "e2",
    type: "experience",
    position: { x: -140, y: 998 },
    data: nodeData.exp2,
  },
  {
    id: "t3",
    type: "time",
    position: { x: -333, y: 1718 },
    data: nodeData.time3,
  },
  {
    id: "e3",
    type: "experience",
    position: { x: -140, y: 1532 },
    data: nodeData.exp3,
  },
  {
    id: "4",
    type: "project",
    position: { x: -260, y: 2014 },
    data: nodeData.proj1,
  },
  {
    id: "5",
    type: "project",
    position: { x: 220, y: 2014 },
    data: nodeData.proj2,
  },
  {
    id: "6",
    type: "project",
    position: { x: -260, y: 2314 },
    data: nodeData.proj3,
  },
  {
    id: "7",
    type: "project",
    position: { x: 220, y: 2314 },
    data: nodeData.proj4,
  },
];

export const mobileEdges = [
  {
    id: "intro-edu-mobile",
    source: "1",
    target: "edu",
    sourceHandle: "education-right",
    targetHandle: "right",
    type: "smoothstep",
    animated: true,
    style: {
      stroke: "#000",
      strokeWidth: 2,
      strokeDasharray: "6 3",
    },
  },
  {
    id: "intro-tech-mobile",
    source: "1",
    target: "tech",
    sourceHandle: "education-right",
    targetHandle: "left",
    type: "smoothstep",
    animated: true,
    style: {
      stroke: "#000",
      strokeWidth: 2,
      strokeDasharray: "6 3",
    },
  },
  {
    id: "intro-resume-mobile",
    source: "1",
    target: "resume",
    sourceHandle: "projects",
    targetHandle: "top",
    type: "straight",
    animated: true,
    style: {
      stroke: "#000",
      strokeWidth: 2,
      strokeDasharray: "6 3",
    },
  },
  {
    id: "e1-t1",
    source: "1",
    target: "t1",
    sourceHandle: "experience-left",
    type: "smoothstep",
    animated: true,
    style: { stroke: "#000", strokeWidth: 2, strokeDasharray: "5,5" },
  },
  {
    id: "e-t1-e1",
    source: "t1",
    target: "e1",
    sourceHandle: "right",
    type: "smoothstep",
    animated: true,
    style: { stroke: "#000", strokeWidth: 2, strokeDasharray: "5,5" },
  },
  {
    id: "e-t1-t2",
    source: "t1",
    target: "t2",
    sourceHandle: "bottom",
    type: "straight",
    style: { stroke: "#000", strokeWidth: 2 },
  },
  {
    id: "e-t2-e2",
    source: "t2",
    target: "e2",
    sourceHandle: "right",
    type: "straight",
    style: { stroke: "#000", strokeWidth: 2 },
  },
  {
    id: "e-t2-t3",
    source: "t2",
    target: "t3",
    sourceHandle: "bottom",
    type: "straight",
    style: { stroke: "#000", strokeWidth: 2 },
  },
  {
    id: "e-t3-e3",
    source: "t3",
    target: "e3",
    sourceHandle: "right",
    type: "straight",
    style: { stroke: "#000", strokeWidth: 2 },
  },
  {
    id: "e1-4",
    source: "1",
    target: "4",
    sourceHandle: "projects-right",
    type: "smoothstep",
    style: { stroke: "#000", strokeWidth: 2 },
  },
  {
    id: "e1-6",
    source: "1",
    target: "6",
    sourceHandle: "projects-right",
    type: "smoothstep",
    style: { stroke: "#000", strokeWidth: 2 },
  },
  {
    id: "e1-5",
    source: "1",
    target: "5",
    sourceHandle: "projects-right",
    type: "smoothstep",
    style: { stroke: "#000", strokeWidth: 2 },
  },
  {
    id: "e1-7",
    source: "1",
    target: "7",
    sourceHandle: "projects-right",
    type: "smoothstep",
    style: { stroke: "#000", strokeWidth: 2 },
  },
];
