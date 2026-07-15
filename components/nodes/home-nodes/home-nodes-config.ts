"use client";

import type { Node, Edge } from "@xyflow/react";
import fwl from "@/public/fwl.png";
import uchs from "@/public/uchs.png";
import vitrifyLogo from "@/public/vitrify.jpg";

const bracketsLogo = "/brackets.svg";

export const nodeData = {
  intro: { label: "Me" },
  time1: { period: "2025/Dec - 2026/Jun" },
  exp1: {
    company: "Flinque (TG3)",
    role: "Backend Engineer",
    details: [
      "Structured and architected the backend for an influencer marketing SaaS platform, building a scalable multi-tenant system from scratch to production.",
      "Developed real-time data pipelines for scraping, ingestion, and syncing via external services to keep data continuously updated.",
      "Developed internal marketing tools for drip campaigns, and utm trackings, enabling the marketing team to run targeted campaigns and track their performance effectively.",
       "Automated workflows using cron jobs and background processes, improving reliability and reducing manual intervention.",
      "Integrated payment systems and subscription flows, aligning backend logic with the product’s revenue model.",
      "Built an internal CMS/admin system to manage, monitor, and operate the platform efficiently.",
    ],
    media: null,
  },
  time2: { period: "2025/Apr - 2026/Jun" },
  exp2: {
    company: "Vitrify Softwares (TG3)",
    role: "Full Stack Engineer",
    details: [
      "Took ownership of the backend and rebuilt it from the ground up with a clean, modular architecture that actually scales.",
      "Engineered core modules like billing and medical treatment workflows powering a live healthcare product used in IVF clinics.",
      "Led and shipped a complete ART bank management system for Donor banks.",
      "Plugged in marketing and tracking systems directly into the software, bridging the gap between Doctors and Patients.",
      "Worked closely with doctors, turning raw feedback into practical features that improved the product in meaningful ways.",
  ],
    media: vitrifyLogo
  },
  time3: { period: "2026/Jun - Now" },
  exp3: {
    company: "Brackets",
    role: "AI Engineer",
    details: [
      "Working on logistics platform features by processing third-party telematics data and implementing business logic for trip route visualization, stop detection, fuel events, and trip cost breakdowns",
      "Implemented a payroll module that syncs with trips to automate payroll calculations",
      "Designed analytics dashboards for mileage trends, ownership costs, and fleet performance metrics."
    ],
    media: bracketsLogo
  },
  proj1: {
    title: "Formwavelabs",
    tag: "Productivity / Utility",
    media: fwl,
    link: "http://formwavelabs.vercel.app",
    description: "FormWaveLabs lets you build multi-step forms with themes and enhanced design control"
  },
  proj2: {
    title: "useCustomHookSpace",
    tag: "DX (Developer Experience)",
    media: uchs,
    link: "https://usecustomhookspace.vercel.app",
    description: "A collection of ready-to-use React hooks and utilities to supercharge your development workflow."
  },
  github: {
    username: "vinayisactive"
  }
};

export const desktopNodes: Node[] = [
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
    position: { x: -1109, y: 781 },
    data: nodeData.proj1,
  },
  {
    id: "5",
    type: "project",
    position: { x: -936, y: 946 },
    data: nodeData.proj2,
  },
  {
    id: "twitter",
    type: "twitter",
    position: { x: -585, y: 651 },
    data: {},
  }
];

export const desktopEdges: Edge[] = [
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
    id: "intro-twitter",
    source: "1",
    target: "twitter",
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
  }
];

export const mobileNodes: Node[] = [
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
    position: { x: -200, y: 2014 },
    data: nodeData.proj1,
  },
  {
    id: "5",
    type: "project",
    position: { x: 160, y: 2014 },
    data: nodeData.proj2,
  },
];

export const mobileEdges: Edge[] = [
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
    id: "e1-5",
    source: "1",
    target: "5",
    sourceHandle: "projects-right",
    type: "smoothstep",
    style: { stroke: "#000", strokeWidth: 2 },
  },
];