"use client";

import { Handle, Position } from "@xyflow/react";
const pfp = "/pfp.jpeg";
import pfp2 from "/pfp2.jpg";
import { GitHubCalendar } from "react-github-calendar";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";
import { useState } from "react";
import { useDebug } from "./debug-context";

function CoordinateBadge({ x, y }) {
  const { showCoordinates } = useDebug();
  if (!showCoordinates || x === undefined || y === undefined) return null;
  return (
    <div className="absolute -top-3 -right-3 bg-[#D4AF37] text-white text-[10px] font-mono px-2 py-1 z-[100] shadow-lg pointer-events-none rounded">
      X: {Math.round(x)} | Y: {Math.round(y)}
    </div>
  );
}

function IntroductionNode({ positionAbsoluteX, positionAbsoluteY }) {
  return (
    <div className="relative group">
      <CoordinateBadge x={positionAbsoluteX} y={positionAbsoluteY} />
      <div
        className="relative overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl"
        style={{
          width: "580px",
          background: "rgba(255, 255, 255, 0.65)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.4)",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
          borderRadius: "12px",
          color: "#334155",
        }}
      >
        {/* Title bar — 3 dots only, no text */}
        <div className="h-8 border-b border-white/20 bg-white/20 flex items-center px-4 select-none shrink-0">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400/80" />
            <div className="w-3 h-3 rounded-full bg-amber-300/80" />
            <div className="w-3 h-3 rounded-full bg-green-400/80" />
          </div>
        </div>

        {/* Content */}
        <div className="flex">
          {/* Left: text */}
          <div className="flex-1 flex flex-col justify-center p-8 gap-3">
            <h1 className="font-sans text-xl font-bold text-slate-800 leading-snug">
              Hi, I'm Ayush Raj.
              <br />
              <span className="text-xs uppercase tracking-wider font-mono text-[#D4AF37]">
                Full Stack Developer
              </span>
            </h1>

            <p className="font-sans text-sm text-slate-600 leading-relaxed">
              I specialize in React, Node.js, Express, and MongoDB, crafting
              performant user interfaces and robust backend systems. I enjoy
              solving complex engineering problems, designing clean APIs, and
              turning ideas into production-ready products.
            </p>
          </div>

          {/* Right: photo 30% */}
          <div
            className="border-l border-slate-200/50 shrink-0"
            style={{ width: "30%" }}
          >
            <div
              className="relative w-full h-full"
              style={{ minHeight: "200px" }}
            >
              <img
                src={pfp2}
                alt="Ayush"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <Handle
                id="education-right"
                type="source"
                position={Position.Right}
                className="!opacity-0 !w-4 !h-4"
                style={{ top: "50%" }}
              />
            </div>
          </div>
        </div>

        <Handle
          id="projects"
          type="source"
          position={Position.Bottom}
          className="!opacity-0 !w-4 !h-4"
        />
        <Handle
          id="projects-right"
          type="source"
          position={Position.Right}
          className="!opacity-0 !w-4 !h-4"
        />
        <Handle
          id="experience"
          type="source"
          position={Position.Right}
          className="!opacity-0 !w-4 !h-4"
        />
        <Handle
          id="experience-left"
          type="source"
          position={Position.Left}
          className="!opacity-0 !w-4 !h-4"
        />
        <Handle
          id="github"
          type="source"
          position={Position.Top}
          className="!opacity-0 !w-4 !h-4"
        />
      </div>
    </div>
  );
}

function TimeNode({ data, positionAbsoluteX, positionAbsoluteY }) {
  const isPresent = data.period.toLowerCase().includes("now") || data.period.toLowerCase().includes("present");
  return (
    <div
      className="relative px-3 py-2 font-mono text-xs font-bold z-10 flex gap-2 justify-center items-center w-[180px] text-center"
      style={{
        background: "rgba(255, 255, 255, 0.65)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255, 255, 255, 0.4)",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
        borderRadius: "12px",
        color: "#334155",
      }}
    >
      <CoordinateBadge x={positionAbsoluteX} y={positionAbsoluteY} />
      {data.period}

      {isPresent && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
        </span>
      )}
      <Handle
        type="target"
        position={Position.Left}
        id="left"
        className="!opacity-0 !w-3 !h-3"
      />
      <Handle
        type="source"
        position={Position.Right}
        id="right"
        className="!opacity-0 !w-3 !h-3"
      />
      <Handle
        type="source"
        position={Position.Top}
        id="top"
        className="!opacity-0 !w-3 !h-3"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="bottom"
        className="!opacity-0 !w-3 !h-3"
      />
    </div>
  );
}

function ExperienceNode({ data, positionAbsoluteX, positionAbsoluteY }) {
  return (
    <div
      className="relative w-[600px] md:w-[600px] p-6 transition-all duration-200 hover:-translate-y-0.5"
      style={{
        background: "rgba(255, 255, 255, 0.65)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255, 255, 255, 0.4)",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
        borderRadius: "12px",
        color: "#334155",
      }}
    >
      <CoordinateBadge x={positionAbsoluteX} y={positionAbsoluteY} />
      <div className="flex justify-start items-center gap-4">
        {data.media && (
          <img
            src={typeof data.media === "string" ? data.media : data.media.src}
            alt={`${data.company} logo`}
            width={80}
            height={50}
            className="object-contain mb-4"
          />
        )}

        <div className="flex flex-col mb-4 border-b border-slate-200/50 pb-3 w-full">
          <h3 className="text-2xl font-black text-slate-800 uppercase tracking-tight leading-none">
            {data.company}
          </h3>
          <p className="text-sm font-mono text-slate-500 font-bold mt-2">
            {data.role}
          </p>
        </div>
      </div>

      <ul className="space-y-3">
        {data.details.map((detail, idx) => (
          <li key={idx} className="flex items-start gap-3 text-slate-600">
            <div className="mt-1.5 w-2 h-2 shrink-0 rounded-full" style={{ backgroundColor: "#D4AF37" }} />
            <span className="leading-snug text-sm">{detail}</span>
          </li>
        ))}
      </ul>

      <Handle
        type="target"
        position={Position.Left}
        id="left"
        className="!opacity-0 !w-3 !h-3"
      />
      <Handle
        type="target"
        position={Position.Top}
        id="top"
        className="!opacity-0 !w-3 !h-3"
      />
      <Handle
        type="target"
        position={Position.Bottom}
        id="bottom"
        className="!opacity-0 !w-3 !h-3"
      />
    </div>
  );
}

function ProjectNode({ data, positionAbsoluteX, positionAbsoluteY }) {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  return (
    <div
      className="relative w-60 p-3 pb-8 transition-all duration-200 hover:-translate-y-0.5 group"
      style={{
        background: "rgba(255, 255, 255, 0.65)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255, 255, 255, 0.4)",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
        borderRadius: "12px",
        color: "#334155",
      }}
    >
      <CoordinateBadge x={positionAbsoluteX} y={positionAbsoluteY} />
      <div className="relative w-full h-32 bg-slate-100 border border-slate-200/50 flex items-center justify-center overflow-hidden mb-3 rounded-lg">
        <img
          src={data.media}
          alt={data.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 w-full h-full group-hover:flex flex-col gap-2 backdrop-blur-xs hidden justify-center items-center p-2">
          <a
            href={data.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center text-xs font-mono bg-white/90 hover:bg-white text-slate-800 hover:text-[#D4AF37] px-2 py-1 rounded transition-all cursor-pointer"
          >
            Live Preview
          </a>

          <button
            onClick={() => setIsDescriptionVisible(true)}
            className="w-full text-center text-xs font-mono bg-white/90 hover:bg-white text-slate-800 hover:text-[#D4AF37] px-2 py-1 rounded transition-all cursor-pointer"
          >
            Description
          </button>
        </div>
      </div>
      <h4 className="font-sans text-sm font-bold leading-tight text-slate-800 mb-1.5">
        {data.title}
      </h4>
      <span className="text-[10px] font-mono text-white px-2 py-0.5 rounded" style={{ backgroundColor: "#D4AF37" }}>
        {data.tag}
      </span>

      {isDescriptionVisible && (
        <div
          className="absolute inset-0 p-4 flex flex-col justify-between z-20"
          style={{
            background: "rgba(255, 255, 255, 0.96)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            borderRadius: "12px",
            color: "#334155",
          }}
        >
          <div className="text-xs font-sans leading-relaxed overflow-y-auto">{data.description}</div>

          <button
            onClick={() => setIsDescriptionVisible(false)}
            className="text-xs font-mono bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-[#D4AF37] px-2 py-1 border border-slate-200 rounded mt-2 cursor-pointer transition-all self-start"
          >
            Close
          </button>
        </div>
      )}

      <Handle
        type="target"
        position={Position.Top}
        className="!opacity-0 !border-none"
      />
    </div>
  );
}

function SocialNode({ positionAbsoluteX, positionAbsoluteY }) {
  return (
    <div className="relative">
      <CoordinateBadge x={positionAbsoluteX} y={positionAbsoluteY} />

      <div
        className="relative p-4 flex gap-6 items-center transition-all duration-200 hover:shadow-md"
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
          className="text-slate-700 hover:text-[#D4AF37] hover:scale-110 transition-all"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://linkedin.com/in/ayushraj2407"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-700 hover:text-[#D4AF37] hover:scale-110 transition-all"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="mailto:email@example.com"
          className="text-slate-700 hover:text-[#D4AF37] hover:scale-110 transition-all"
        >
          <FaEnvelope size={24} />
        </a>

        <Handle
          type="target"
          position={Position.Top}
          className="!opacity-0 !w-3 !h-3"
        />
      </div>
    </div>
  );
}

function EducationNode({ data, positionAbsoluteX, positionAbsoluteY }) {
  return (
    <div
      className="relative w-[600px] p-6 transition-all duration-200 hover:-translate-y-0.5"
      style={{
        background: "rgba(255, 255, 255, 0.65)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255, 255, 255, 0.4)",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
        borderRadius: "12px",
        color: "#334155",
      }}
    >
      <CoordinateBadge x={positionAbsoluteX} y={positionAbsoluteY} />
      <div className="flex justify-start items-center gap-4">
        {data.media && (
          <img
            src={typeof data.media === "string" ? data.media : data.media.src}
            alt={`${data.institute} logo`}
            width={80}
            height={50}
            className="object-contain mb-4"
          />
        )}

        <div className="flex flex-col mb-4 border-b border-slate-200/50 pb-3 w-full">
          <h3 className="text-2xl font-black text-slate-800 uppercase tracking-tight leading-none">
            {data.institute}
          </h3>
          <div className="flex justify-between items-center mt-2 flex-wrap gap-2">
            <p className="text-sm font-mono text-slate-700 font-bold">
              {data.degree}
            </p>
            <p className="text-[10px] font-mono text-slate-600 bg-white/50 border border-slate-200/50 px-2 py-0.5 rounded shadow-sm">
              {data.duration} | {data.cgpa}
            </p>
          </div>
        </div>
      </div>

      <ul className="space-y-3">
        {data.details &&
          data.details.map((detail, idx) => (
            <li key={idx} className="flex items-start gap-3 text-slate-600">
              <div className="mt-1.5 w-2 h-2 shrink-0 rounded-full" style={{ backgroundColor: "#D4AF37" }} />
              <span className="leading-snug text-sm">{detail}</span>
            </li>
          ))}
      </ul>

      <Handle
        type="target"
        position={Position.Left}
        id="left"
        className="!opacity-0 !w-3 !h-3"
      />
      <Handle
        type="target"
        position={Position.Top}
        id="top"
        className="!opacity-0 !w-3 !h-3"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="bottom"
        className="!opacity-0 !w-3 !h-3"
      />
      <Handle
        type="target"
        position={Position.Right}
        id="right"
        className="!opacity-0 !w-3 !h-3"
      />
    </div>
  );
}

function TechStackNode({ data, positionAbsoluteX, positionAbsoluteY }) {
  return (
    <div
      className="relative w-[600px] p-6 transition-all duration-200 hover:-translate-y-0.5"
      style={{
        background: "rgba(255, 255, 255, 0.65)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255, 255, 255, 0.4)",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
        borderRadius: "12px",
        color: "#334155",
      }}
    >
      <CoordinateBadge x={positionAbsoluteX} y={positionAbsoluteY} />
      
      <div className="flex flex-col mb-4 border-b border-slate-200/50 pb-3 w-full">
        <h3 className="text-2xl font-black text-slate-800 uppercase tracking-tight leading-none">
          {data.title || "Tech Stack"}
        </h3>
        <p className="text-sm font-mono text-slate-500 mt-2">
          {data.subtitle || "Technologies I use"}
        </p>
      </div>

      <div className="space-y-4">
        {data.categories && data.categories.map((cat, idx) => (
          <div key={idx} className="flex flex-col gap-2">
            <h4 className="font-mono text-xs font-black uppercase text-slate-400 tracking-wider">
              {cat.name}
            </h4>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, sIdx) => (
                <span 
                  key={sIdx} 
                  className="bg-white/40 border border-slate-200/50 px-3 py-1 font-mono text-xs font-medium text-slate-700 rounded-lg hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition-all select-none"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Handle
        type="target"
        position={Position.Top}
        id="top"
        className="!opacity-0 !w-3 !h-3"
      />
      <Handle
        type="target"
        position={Position.Left}
        id="left"
        className="!opacity-0 !w-3 !h-3"
      />
      <Handle
        type="target"
        position={Position.Bottom}
        id="bottom"
        className="!opacity-0 !w-3 !h-3"
      />
      <Handle
        type="source"
        position={Position.Right}
        id="right"
        className="!opacity-0 !w-3 !h-3"
      />
    </div>
  );
}

function GithubVisitNode({ positionAbsoluteX, positionAbsoluteY }) {
  return (
    <div className="relative">
      <CoordinateBadge x={positionAbsoluteX} y={positionAbsoluteY} />
      <a
        href="https://github.com/Ayush-0247"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 font-mono text-xs font-bold transition-all duration-150 hover:-translate-y-0.5"
        style={{
          background: "rgba(255, 255, 255, 0.65)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.4)",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
          borderRadius: "12px",
          color: "#334155",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.color = '#D4AF37'; e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.4)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.color = '#334155'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)'; }}
      >
        <FaGithub size={16} style={{ color: 'inherit' }} />
        <span>Visit GitHub</span>
      </a>
      <Handle
        type="target"
        position={Position.Top}
        id="top"
        className="!opacity-0 !w-3 !h-3"
      />
      <Handle
        type="target"
        position={Position.Left}
        id="left"
        className="!opacity-0 !w-3 !h-3"
      />
      <Handle
        type="target"
        position={Position.Bottom}
        id="bottom"
        className="!opacity-0 !w-3 !h-3"
      />
      <Handle
        type="target"
        position={Position.Right}
        id="right"
        className="!opacity-0 !w-3 !h-3"
      />
    </div>
  );
}

function ResumeNode({ positionAbsoluteX, positionAbsoluteY }) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Ayush_Raj_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative">
      <CoordinateBadge x={positionAbsoluteX} y={positionAbsoluteY} />
      <button
        onClick={handleDownload}
        className="flex items-center gap-2 px-4 py-2 font-mono text-xs font-bold transition-all duration-150 cursor-pointer hover:-translate-y-0.5"
        style={{
          background: "rgba(255, 255, 255, 0.65)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.4)",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
          borderRadius: "12px",
          color: "#334155",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.color = '#D4AF37'; e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.4)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.color = '#334155'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)'; }}
      >
        <FaDownload size={13} style={{ color: 'inherit' }} />
        <span>Download CV</span>
      </button>
      <Handle
        type="target"
        position={Position.Top}
        id="top"
        className="!opacity-0 !w-3 !h-3"
      />
      <Handle
        type="target"
        position={Position.Left}
        id="left"
        className="!opacity-0 !w-3 !h-3"
      />
      <Handle
        type="target"
        position={Position.Bottom}
        id="bottom"
        className="!opacity-0 !w-3 !h-3"
      />
      <Handle
        type="target"
        position={Position.Right}
        id="right"
        className="!opacity-0 !w-3 !h-3"
      />
    </div>
  );
}

function LinkedInNode({ positionAbsoluteX, positionAbsoluteY }) {
  return (
    <div className="relative">
      <CoordinateBadge x={positionAbsoluteX} y={positionAbsoluteY} />
      <a
        href="https://linkedin.com/in/ayushraj2407"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 font-mono text-xs font-bold transition-all duration-150 hover:-translate-y-0.5"
        style={{
          background: "rgba(255, 255, 255, 0.65)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.4)",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
          borderRadius: "12px",
          color: "#334155",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.color = '#D4AF37'; e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.4)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.color = '#334155'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)'; }}
      >
        <FaLinkedin size={16} style={{ color: 'inherit' }} />
        <span>ayushraj2407</span>
      </a>
      <Handle
        type="target"
        position={Position.Top}
        className="!opacity-0 !w-3 !h-3"
      />
    </div>
  );
}

function GithubNode({ data, positionAbsoluteX, positionAbsoluteY }) {
  return (
    <div className="relative">
      <CoordinateBadge x={positionAbsoluteX} y={positionAbsoluteY} />

      {/* Floating GitHub pill label above the card — clickable */}
      <a
        href="https://github.com/Ayush-0247"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute -top-9 left-0 flex items-center gap-1.5 px-3 py-1 font-mono text-xs font-bold z-10 hover:-translate-y-0.5 transition-all duration-150"
        style={{
          background: "rgba(255, 255, 255, 0.65)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.4)",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
          borderRadius: "12px",
          color: "#334155",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.color = '#D4AF37'; e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.4)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.color = '#334155'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)'; }}
      >
        <FaGithub size={13} style={{ color: 'inherit' }} />
        <span>GitHub</span>
      </a>
      {/* Connecting line from pill to card */}
      <div className="absolute -top-[10px] left-[22px] w-0.5 h-[10px]" style={{ backgroundColor: "#D4AF37" }} />

      <div
        className="relative p-6 transition-all duration-200 w-fit hover:-translate-y-0.5"
        style={{
          background: "rgba(255, 255, 255, 0.65)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.4)",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
          borderRadius: "12px",
          color: "#334155",
        }}
      >
        <GitHubCalendar
          username={data.username}
          colorScheme="light"
          blockMargin={4}
          blockSize={14}
          showTotalCount={false}
          showColorLegend={false}
        />
        <Handle
          id="bottom"
          type="target"
          position={Position.Bottom}
          className="!opacity-0 !w-4 !h-4"
        />
        <Handle
          id="left-source"
          type="source"
          position={Position.Left}
          className="!opacity-0 !w-4 !h-4"
        />
      </div>
    </div>
  );
}

const nodeTypes = {
  introduction: IntroductionNode,
  time: TimeNode,
  experience: ExperienceNode,
  project: ProjectNode,
  social: SocialNode,
  github: GithubNode,
  linkedin: LinkedInNode, 
  education: EducationNode,
  techstack: TechStackNode,
  resume: ResumeNode,
  gitvisit: GithubVisitNode,
};

export {
  IntroductionNode,
  TimeNode,
  ExperienceNode,
  ProjectNode,
  SocialNode,
  GithubNode,
  nodeTypes,
};
