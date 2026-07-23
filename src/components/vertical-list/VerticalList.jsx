"use client";

import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaExternalLinkAlt } from "react-icons/fa";
import { nodeData } from "@/components/nodes/home-nodes/home-nodes-config";
import pfp2 from "/pfp2.jpg";

export default function VerticalList() {
  const [activeProjectDesc, setActiveProjectDesc] = useState(null);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Ayush_Raj_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const projects = [
    { id: "proj1", ...nodeData.proj1 },
    { id: "proj2", ...nodeData.proj2 },
    { id: "proj3", ...nodeData.proj3 },
    { id: "proj4", ...nodeData.proj4 },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-slate-50 to-slate-150 py-16 px-4 md:px-8 font-sans text-slate-700 select-text overflow-y-auto">
      {/* Floating top-left Nav Widget for List View */}
      <div
        className="fixed top-6 left-6 z-50 items-center gap-px overflow-hidden hidden md:flex"
        style={{
          background: "rgba(255, 255, 255, 0.65)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.4)",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
          borderRadius: "12px",
        }}
      >
        <a
          href="https://github.com/Ayush-0247"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
          className="flex items-center justify-center w-9 h-9 text-slate-700 hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors duration-150 cursor-pointer"
        >
          <FaGithub size={16} />
        </a>

        <a
          href="https://linkedin.com/in/ayushraj2407"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          className="flex items-center justify-center w-9 h-9 border-l border-slate-200/20 text-slate-700 hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors duration-150 cursor-pointer"
        >
          <FaLinkedin size={16} />
        </a>

        <button
          onClick={() => {
            const expSection = document.getElementById("experience-section");
            if (expSection) {
              expSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          title="Jump to Experience"
          className="flex items-center justify-center h-9 px-3 border-l border-slate-200/20 font-mono text-[10px] font-bold text-slate-700 hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors duration-150 tracking-widest uppercase cursor-pointer"
        >
          Exp
        </button>
      </div>

      <div className="max-w-3xl mx-auto space-y-12">
        
        {/* ── 1. INTRODUCTION SECTION ── */}
        <section className="relative">
          <div
            style={{
              background: "rgba(255, 255, 255, 0.65)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255, 255, 255, 0.4)",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
              borderRadius: "12px",
            }}
            className="flex flex-col md:flex-row overflow-hidden transition-all duration-300 hover:shadow-lg"
          >
            {/* Left Content Column */}
            <div className="flex-1 p-6 md:p-8 flex flex-col justify-between gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-300/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                </div>
                <h1 className="text-3xl font-bold text-slate-800 tracking-tight leading-tight">
                  Hi, I'm Ayush Raj.
                </h1>
                <p className="text-xs uppercase tracking-wider font-mono text-[#D4AF37] font-bold">
                  Full Stack Developer
                </p>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal">
                  I specialize in React, Node.js, Express, and MongoDB, crafting
                  performant user interfaces and robust backend systems. I enjoy
                  solving complex engineering problems, designing clean APIs, and
                  turning ideas into production-ready products.
                </p>
              </div>

              {/* Interaction Row (CV & Socials) */}
              <div className="flex flex-wrap items-center gap-4 border-t border-slate-200/50 pt-6">
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-2 px-4 py-2 font-mono text-xs font-bold transition-all duration-150 cursor-pointer rounded-lg hover:-translate-y-0.5"
                  style={{
                    background: "rgba(255, 255, 255, 0.8)",
                    border: "1px solid rgba(255, 255, 255, 0.5)",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.02)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#D4AF37";
                    e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "inherit";
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.5)";
                  }}
                >
                  <FaDownload size={12} />
                  <span>Download CV</span>
                </button>

                <div className="flex items-center gap-4 text-slate-500 ml-auto">
                  <a
                    href="https://github.com/Ayush-0247"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#D4AF37] transition-all hover:scale-110"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href="https://linkedin.com/in/ayushraj2407"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#D4AF37] transition-all hover:scale-110"
                  >
                    <FaLinkedin size={20} />
                  </a>
                  <a
                    href="mailto:email@example.com"
                    className="hover:text-[#D4AF37] transition-all hover:scale-110"
                  >
                    <FaEnvelope size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Photo Column */}
            <div className="w-full md:w-1/3 min-h-[220px] md:min-h-full relative border-t md:border-t-0 md:border-l border-slate-200/50">
              <img
                src={pfp2}
                alt="Ayush"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </section>

        {/* ── 2. EXPERIENCE SECTION ── */}
        <section id="experience-section" className="space-y-6">
          <h2 className="text-xl font-semibold tracking-wider font-mono text-[#D4AF37] uppercase border-b border-slate-200/50 pb-2">
            Experience
          </h2>
          <div className="space-y-6">
            {/* TG3 Agency */}
            <div
              style={{
                background: "rgba(255, 255, 255, 0.65)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.4)",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
                borderRadius: "12px",
              }}
              className="p-6 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex justify-between items-start flex-wrap gap-2 border-b border-slate-200/50 pb-4 mb-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-800 uppercase">
                    {nodeData.exp1.company}
                  </h3>
                  <p className="text-xs font-mono text-[#D4AF37] font-semibold mt-1">
                    {nodeData.exp1.role}
                  </p>
                </div>
                <span className="text-[10px] font-mono text-slate-500 bg-slate-100/50 px-2 py-0.5 rounded border border-slate-200/30">
                  {nodeData.time1.period}
                </span>
              </div>
              <ul className="space-y-3">
                {nodeData.exp1.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed">
                    <div className="mt-1.5 w-2 h-2 shrink-0 rounded-full" style={{ backgroundColor: "#D4AF37" }} />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Lifelinkr */}
            <div
              style={{
                background: "rgba(255, 255, 255, 0.65)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.4)",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
                borderRadius: "12px",
              }}
              className="p-6 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex justify-between items-start flex-wrap gap-2 border-b border-slate-200/50 pb-4 mb-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-800 uppercase">
                    {nodeData.exp2.company}
                  </h3>
                  <p className="text-xs font-mono text-[#D4AF37] font-semibold mt-1">
                    {nodeData.exp2.role}
                  </p>
                </div>
                <span className="text-[10px] font-mono text-slate-500 bg-slate-100/50 px-2 py-0.5 rounded border border-slate-200/30">
                  {nodeData.time2.period}
                </span>
              </div>
              <ul className="space-y-3">
                {nodeData.exp2.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed">
                    <div className="mt-1.5 w-2 h-2 shrink-0 rounded-full" style={{ backgroundColor: "#D4AF37" }} />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── 3. PROJECTS SECTION ── */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold tracking-wider font-mono text-[#D4AF37] uppercase border-b border-slate-200/50 pb-2">
            Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                style={{
                  background: "rgba(255, 255, 255, 0.65)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(255, 255, 255, 0.4)",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
                  borderRadius: "12px",
                }}
                className="relative overflow-hidden p-4 flex flex-col justify-between h-[360px] group transition-all duration-300 hover:shadow-lg"
              >
                <div>
                  {/* Screenshot Wrapper */}
                  <div className="relative w-full h-36 bg-slate-100 border border-slate-200/50 flex items-center justify-center overflow-hidden mb-4 rounded-lg">
                    <img
                      src={project.media}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 w-full h-full group-hover:flex flex-col gap-2 backdrop-blur-xs hidden justify-center items-center p-3 text-center">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full text-center text-xs font-mono bg-white/90 hover:bg-white text-slate-800 hover:text-[#D4AF37] px-2 py-1.5 rounded transition-all cursor-pointer flex items-center justify-center gap-1.5"
                      >
                        <span>Live Preview</span>
                        <FaExternalLinkAlt size={10} />
                      </a>
                      <button
                        onClick={() => setActiveProjectDesc(project.id)}
                        className="w-full text-center text-xs font-mono bg-white/90 hover:bg-white text-slate-800 hover:text-[#D4AF37] px-2 py-1.5 rounded transition-all cursor-pointer"
                      >
                        Show Details
                      </button>
                    </div>
                  </div>

                  <h3 className="font-bold text-base text-slate-800 leading-tight mb-2">
                    {project.title}
                  </h3>
                  <span className="text-[10px] font-mono text-white px-2 py-0.5 rounded inline-block" style={{ backgroundColor: "#D4AF37" }}>
                    {project.tag}
                  </span>
                </div>

                {/* Always visible brief description at bottom */}
                <p className="text-xs text-slate-500 line-clamp-3 mt-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Slide-up detailed overlay */}
                {activeProjectDesc === project.id && (
                  <div
                    className="absolute inset-0 p-6 flex flex-col justify-between z-20"
                    style={{
                      background: "rgba(255, 255, 255, 0.98)",
                      backdropFilter: "blur(16px)",
                      WebkitBackdropFilter: "blur(16px)",
                      borderRadius: "12px",
                    }}
                  >
                    <div className="space-y-3 overflow-y-auto">
                      <h4 className="font-bold text-slate-800 text-sm border-b border-slate-200/50 pb-2">
                        {project.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-sans">
                        {project.description}
                      </p>
                    </div>
                    <button
                      onClick={() => setActiveProjectDesc(null)}
                      className="text-xs font-mono bg-slate-100 hover:bg-slate-250 text-slate-700 hover:text-[#D4AF37] px-3 py-1.5 border border-slate-200 rounded mt-4 cursor-pointer transition-all self-start"
                    >
                      Close Details
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── 4. EDUCATION SECTION ── */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold tracking-wider font-mono text-[#D4AF37] uppercase border-b border-slate-200/50 pb-2">
            Education
          </h2>
          <div
            style={{
              background: "rgba(255, 255, 255, 0.65)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255, 255, 255, 0.4)",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
              borderRadius: "12px",
            }}
            className="p-6 transition-all duration-300 hover:shadow-lg"
          >
            <div className="flex justify-between items-start flex-wrap gap-2 border-b border-slate-200/50 pb-4 mb-4">
              <div>
                <h3 className="text-lg font-bold text-slate-800 uppercase">
                  {nodeData.education.institute}
                </h3>
                <p className="text-xs font-mono text-[#D4AF37] font-semibold mt-1">
                  {nodeData.education.degree}
                </p>
              </div>
              <div className="flex flex-col items-end gap-1.5">
                <span className="text-[10px] font-mono text-slate-500 bg-slate-100/50 px-2 py-0.5 rounded border border-slate-200/30">
                  {nodeData.education.duration}
                </span>
                <span className="text-[10px] font-mono text-slate-600 bg-white/50 border border-slate-200/50 px-2 py-0.5 rounded shadow-sm">
                  {nodeData.education.cgpa}
                </span>
              </div>
            </div>

            <ul className="space-y-3">
              {nodeData.education.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed">
                  <div className="mt-1.5 w-2 h-2 shrink-0 rounded-full" style={{ backgroundColor: "#D4AF37" }} />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

      </div>
    </div>
  );
}
