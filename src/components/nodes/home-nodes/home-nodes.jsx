"use client";

import { Handle, Position } from "@xyflow/react";
const pfp = "/pfp.jpeg";
import pfp2 from "/pfp2.jpg";
import { GitHubCalendar } from "react-github-calendar";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useState } from "react";
import { useDebug } from "./debug-context";

function CoordinateBadge({ x, y }) {
  const { showCoordinates } = useDebug();
  if (!showCoordinates || x === undefined || y === undefined) return null;
  return (
    <div className="absolute -top-3 -right-3 bg-slate-950/80 backdrop-blur border border-white/20 text-white text-[10px] font-mono px-2 py-1 z-[100] shadow-lg pointer-events-none rounded">
      X: {Math.round(x)} | Y: {Math.round(y)}
    </div>
  );
}

function IntroductionNode({ positionAbsoluteX, positionAbsoluteY }) {
  return (
    <div className="group relative">
      <CoordinateBadge x={positionAbsoluteX} y={positionAbsoluteY} />
      
      {/* Subtle background glow on hover */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500" />
      
      <div
        className="relative glass-card overflow-hidden flex flex-col rounded-2xl w-[580px]"
      >
        {/* Glass Title bar */}
        <div className="h-9 border-b border-slate-200/50 bg-slate-50/50 backdrop-blur-md flex items-center justify-between px-4 select-none shrink-0">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]/70 border border-slate-200" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]/70 border border-slate-200" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]/70 border border-slate-200" />
          </div>
          <span className="font-mono text-[10px] tracking-widest text-slate-500 uppercase font-semibold">terminal.sh</span>
          <div className="w-14" /> {/* spacer for visual symmetry */}
        </div>

        {/* Content */}
        <div className="flex">
          {/* Left: text */}
          <div className="flex-1 flex flex-col justify-center p-8 gap-4">
            <h1 className="font-sans text-xl font-bold text-slate-900 leading-snug">
              Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 font-extrabold">Ayush Raj</span>.
              <br />
              <span className="text-sm text-slate-600 font-semibold mt-1 block">Full Stack Developer building scalable web applications.</span>
            </h1>

            <p className="font-sans text-xs text-slate-700 leading-relaxed font-medium">
              I specialize in React, Node.js, Express, and MongoDB, crafting
              performant user interfaces and robust backend systems. I enjoy
              solving complex engineering problems, designing clean APIs, and
              turning ideas into production-ready products.
            </p>
          </div>

          {/* Right: photo 30% */}
          <div
            className="border-l border-slate-200/50 shrink-0 w-[30%]"
          >
            <div
              className="relative w-full h-full min-h-[220px]"
            >
              <img
                src={pfp2}
                alt="Ayush"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              {/* Light transparent gradient overlay for glass integration */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-transparent pointer-events-none" />
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
  return (
    <div className="relative group">
      <CoordinateBadge x={positionAbsoluteX} y={positionAbsoluteY} />
      
      <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-full blur-md opacity-0 group-hover:opacity-100 transition duration-300" />
      
      <div className="relative glass-card px-4 py-2 font-mono text-[11px] font-bold text-indigo-950 z-10 rounded-full flex gap-2 justify-center items-center w-[190px] text-center border border-indigo-200/40">
        <span>{data.period}</span>

        {data.period.includes("Present") && (
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_#10b981]"></span>
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
    </div>
  );
}

function ExperienceNode({ data, positionAbsoluteX, positionAbsoluteY }) {
  return (
    <div className="group relative">
      <CoordinateBadge x={positionAbsoluteX} y={positionAbsoluteY} />
      
      {/* Subtle background glow */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-500/5 to-indigo-500/5 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500" />

      <div className="relative w-[600px] glass-card p-6 rounded-2xl flex flex-col">
        <div className="flex justify-start items-center gap-4 border-b border-slate-200 pb-4 mb-4">
          {data.media && (
            <img
              src={typeof data.media === "string" ? data.media : data.media.src}
              alt={`${data.company} logo`}
              width={50}
              height={50}
              className="object-contain rounded-lg bg-white/60 p-1 border border-slate-200 w-12 h-12"
            />
          )}

          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight leading-tight">
              {data.company}
            </h3>
            <p className="text-xs font-mono text-indigo-600 font-semibold mt-1 uppercase tracking-wider">
              {data.role}
            </p>
          </div>
        </div>

        <ul className="space-y-2.5">
          {data.details.map((detail, idx) => (
            <li key={idx} className="flex items-start gap-3 text-slate-700 text-[13px] leading-relaxed">
              <div className="mt-1.5 w-1.5 h-1.5 bg-indigo-500 rounded-full shrink-0 shadow-[0_0_4px_#6366f1]" />
              <span>{detail}</span>
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
    </div>
  );
}

function ProjectNode({ data, positionAbsoluteX, positionAbsoluteY }) {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  return (
    <div className="group relative">
      <CoordinateBadge x={positionAbsoluteX} y={positionAbsoluteY} />
      
      <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500/5 to-teal-500/5 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition duration-300" />

      <div className="relative w-64 glass-card p-3 rounded-2xl flex flex-col shadow-lg overflow-hidden">
        {/* Image Frame */}
        <div className="relative w-full h-36 bg-slate-100 rounded-xl border border-slate-200 flex items-center justify-center overflow-hidden mb-3">
          <img
            src={data.media}
            alt={data.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Backdrop overlay for tools */}
          <div className="absolute inset-0 bg-white/90 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-all duration-300 flex flex-col gap-2.5 justify-center items-center">
            <a
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold font-mono bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1.5 rounded-lg transition-colors border border-indigo-400/20 shadow-md cursor-pointer text-center"
            >
              Live Preview
            </a>

            <button
              onClick={() => setIsDescriptionVisible(true)}
              className="text-xs font-semibold font-mono bg-slate-100 hover:bg-slate-200 text-slate-800 px-3 py-1.5 rounded-lg transition-colors border border-slate-200 cursor-pointer"
            >
              Show Info
            </button>
          </div>
        </div>

        {/* Heading */}
        <h4 className="font-bold text-sm text-slate-900 tracking-tight leading-snug mb-1">
          {data.title}
        </h4>
        <div className="mt-1">
          <span className="text-[10px] font-mono font-medium text-cyan-800 bg-cyan-50 border border-cyan-200 px-2 py-0.5 rounded-full">
            {data.tag}
          </span>
        </div>

        {/* Description overlay */}
        {isDescriptionVisible && (
          <div className="absolute inset-0 bg-white/95 p-4 flex flex-col justify-between z-20 backdrop-blur-md rounded-2xl animate-fade-in border border-slate-200">
            <div className="flex flex-col gap-2">
              <h4 className="font-bold text-sm text-slate-900">{data.title}</h4>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                {data.description}
              </p>
            </div>

            <button
              onClick={() => setIsDescriptionVisible(false)}
              className="text-xs font-semibold font-mono bg-slate-100 hover:bg-slate-200 text-slate-800 px-3 py-1.5 rounded-lg transition-colors border border-slate-200 cursor-pointer w-full text-center mt-2"
            >
              Hide Info
            </button>
          </div>
        )}

        <Handle
          type="target"
          position={Position.Top}
          className="!opacity-0 !border-none"
        />
      </div>
    </div>
  );
}

function SocialNode({ positionAbsoluteX, positionAbsoluteY }) {
  return (
    <div className="group relative">
      <CoordinateBadge x={positionAbsoluteX} y={positionAbsoluteY} />
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/5 to-indigo-500/5 rounded-r-2xl blur-md opacity-0 group-hover:opacity-100 transition duration-300" />

      <div className="relative glass-card p-4 flex gap-6 items-center rounded-r-2xl rounded-l-none border-l-0">
        {/* Glow left border indicator */}
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-purple-500" />

        <a
          href="https://github.com/Ayush-0247"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-700 hover:text-slate-900 hover:scale-110 transition-all duration-200"
        >
          <FaGithub size={22} />
        </a>
        <a
          href="https://linkedin.com/in/ayushraj2407"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0077b5] hover:text-blue-600 hover:scale-110 transition-all duration-200"
        >
          <FaLinkedin size={22} />
        </a>
        <a
          href="mailto:email@example.com"
          className="text-rose-600 hover:text-rose-500 hover:scale-110 transition-all duration-200"
        >
          <FaEnvelope size={22} />
        </a>

        <Handle
          type="target"
          position={Position.Top}
          className="bg-indigo-500! w-2.5! h-2.5! border-none!"
        />
      </div>
    </div>
  );
}

function LinkedInNode({ positionAbsoluteX, positionAbsoluteY }) {
  return (
    <div className="group relative">
      <CoordinateBadge x={positionAbsoluteX} y={positionAbsoluteY} />
      <div className="absolute -inset-1 bg-blue-500/10 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition duration-300" />
      <a
        href="https://linkedin.com/in/ayushraj2407"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center gap-2.5 bg-[#0077b5]/15 hover:bg-[#0077b5]/25 border border-[#0077b5]/40 text-blue-800 px-5 py-2.5 font-mono text-xs font-bold rounded-xl shadow-lg transition-all duration-300"
      >
        <FaLinkedin size={16} className="text-[#0077b5]" />
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
    <div className="group relative">
      <CoordinateBadge x={positionAbsoluteX} y={positionAbsoluteY} />

      {/* Floating GitHub pill label above the card — clickable */}
      <a
        href={"https://github.com/" + data.username}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute -top-10 left-0 flex items-center gap-1.5 bg-[#24292e]/10 hover:bg-[#24292e]/20 text-slate-800 border border-slate-200 px-3.5 py-1.5 font-mono text-[11px] font-bold rounded-full z-10 hover:-translate-y-0.5 transition-all duration-150 shadow-md backdrop-blur-md"
      >
        <FaGithub size={13} className="text-slate-900" />
        <span>GitHub</span>
      </a>
      
      {/* Connecting vertical neon line from pill to card */}
      <div className="absolute -top-[12px] left-[26px] w-[1px] h-[12px] bg-gradient-to-b from-slate-200 to-indigo-500/50" />

      {/* Main calendar card */}
      <div className="relative glass-card p-6 rounded-2xl w-fit shadow-xl">
        <div className="text-slate-700 font-mono text-[11px] mb-3 flex items-center justify-between">
          <span className="font-semibold text-slate-500">@{data.username} Contributions</span>
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_6px_#10b981]" />
        </div>
        
        <div className="bg-white/60 p-3 rounded-xl border border-slate-200">
          <GitHubCalendar
            username={data.username}
            colorScheme="light"
            blockMargin={4}
            blockSize={13}
            showTotalCount={false}
            showColorLegend={false}
          />
        </div>
        
        <Handle
          id="bottom"
          type="target"
          position={Position.Bottom}
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
