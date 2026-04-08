"use client";

import type { Node, Edge } from "@xyflow/react";
import fwl from "@/public/fwl.png";
import uchs from "@/public/uchs.png";
import vitrifyLogo from "@/public/vitrify.jpg";

export const nodeData = {
  intro: { label: "Me" },
  time1: { period: "2025/Dec - Now" },
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
  time2: { period: "2025/Apr - Now" },
  exp2: {
    company: "Vitrify Softwares",
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
};

export const desktopNodes: Node[] = [
  {
    id: "1",
    type: "introduction",
    position: { x: -125, y: -50 },
    data: nodeData.intro,
  },
  {
    id: "t1",
    type: "time",
    position: { x: 680, y: 200 },
    data: nodeData.time1,
  },
  {
    id: "e1",
    type: "experience",
    position: { x: 880, y: -29 }, 
    data: nodeData.exp1,
  },
  {
    id: "t2",
    type: "time",
    position: { x: 689, y: 686 },
    data: nodeData.time2,
  },
  {
    id: "e2",
    type: "experience",
    position: { x: 880  , y: 500 },
    data: nodeData.exp2,
  },
  {
    id: "4",
    type: "project",
    position: { x: -200, y: 380 },
    data: nodeData.proj1,
    zIndex: 1,
  },
  {
    id: "5",
    type: "project",
    zIndex: 1,
    position: { x: -30, y: 571, },
    data: nodeData.proj2,
  },
];

export const desktopEdges: Edge[] = [
  {
    id: "e1-t1",
    source: "1",
    target: "t1",
    sourceHandle: "experience",
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
    id: "e1-4",
    source: "1",
    target: "4",
    sourceHandle: "projects",
    type: "smoothstep",
    style: { stroke: "#000", strokeWidth: 2 },
  },
  {
    id: "e1-5",
    source: "1",
    target: "5",
    sourceHandle: "projects",
    type: "smoothstep",
    style: { stroke: "#000", strokeWidth: 2 },
  },
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
    position: { x: -315, y: 450 },
    data: nodeData.time1,
  },
  {
    id: "e1",
    type: "experience",
    position: { x: -140, y: 221 },
    data: nodeData.exp1,
  },
  {
    id: "t2",
    type: "time",
    position: { x: -315, y: 984 },
    data: nodeData.time2,
  },
  {
    id: "e2",
    type: "experience",
    position: { x: -140, y: 798 },
    data: nodeData.exp2,
  },
  {
    id: "4",
    type: "project",
    position: { x: -150, y: 1280 },
    data: nodeData.proj1,
  },
  {
    id: "5",
    type: "project",
    position: { x: 160, y: 1280 },
    data: nodeData.proj2,
  },
];

export const mobileEdges: Edge[] = [
  {
    id: "e1-t1",
    source: "1",
    target: "t1",
    sourceHandle: "experience",
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
    id: "e1-4",
    source: "1",
    target: "4",
    sourceHandle: "projects",
    type: "smoothstep",
    style: { stroke: "#000", strokeWidth: 2 },
  },
  {
    id: "e1-5",
    source: "1",
    target: "5",
    sourceHandle: "projects",
    type: "smoothstep",
    style: { stroke: "#000", strokeWidth: 2 },
  },
];