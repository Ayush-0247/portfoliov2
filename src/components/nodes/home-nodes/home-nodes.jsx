"use client";

import { Handle, Position } from "@xyflow/react";
const pfp = "/pfp.jpeg";
import pfp2 from "/pfp2.jpg";
import { GitHubCalendar } from "react-github-calendar";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaDownload,
} from "react-icons/fa";
import { useState } from "react";
import { useDebug } from "./debug-context";

function CoordinateBadge({ x, y }) {
  const { showCoordinates } = useDebug();
  if (!showCoordinates || x === undefined || y === undefined) return null;
  return (
    <div className="absolute -top-3 -right-3 bg-black text-white text-[10px] font-mono px-2 py-1 z-[100] shadow-lg pointer-events-none rounded">
      X: {Math.round(x)} | Y: {Math.round(y)}
    </div>
  );
}

function IntroductionNode({ positionAbsoluteX, positionAbsoluteY }) {
  return (
    <div className="group relative">
      <CoordinateBadge x={positionAbsoluteX} y={positionAbsoluteY} />
      <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3" />

      <div
        className="relative bg-white border-2 border-black overflow-hidden flex flex-col"
        style={{ width: "580px" }}
      >
        {/* Title bar — 3 dots only, no text */}
        <div className="h-8 border-b-2 border-black bg-stone-100 flex items-center px-4 select-none shrink-0">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500 border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]" />
            <div className="w-3 h-3 rounded-full bg-amber-400 border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]" />
            <div className="w-3 h-3 rounded-full bg-green-500 border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]" />
          </div>
        </div>

        {/* Content */}
        <div className="flex">
          {/* Left: text */}
          {/* <div className="flex-1 flex flex-col justify-center p-8 gap-3">
            <h1 className="font-mono text-lg font-black text-black leading-snug">
              I&apos;m Vinay Chaudhary, Backend Engineer &amp; Systems Thinker.
            </h1>
            <p className="font-mono text-sm text-gray-500 leading-relaxed">
              I build scalable backends, obsess over clean data models, and re-architect legacy systems for clarity and scale. When I&apos;m not shipping code, I&apos;m collecting keycaps and reading about databases. Based in India.
            </p>
          </div> */}

          <div className="flex-1 flex flex-col justify-center p-8 gap-3">
            <h1 className="font-mono text-lg font-black text-black leading-snug">
              Hi, I'm Ayush Raj.
              <br />
              Full Stack Developer building scalable web applications.
            </h1>

            <p className="font-mono text-sm text-gray-500 leading-relaxed">
              I specialize in React, Node.js, Express, and MongoDB, crafting
              performant user interfaces and robust backend systems. I enjoy
              solving complex engineering problems, designing clean APIs, and
              turning ideas into production-ready products.
            </p>
          </div>

          {/* Right: photo 30% */}
          <div
            className="border-l-2 border-black shrink-0"
            style={{ width: "30%" }}
          >
            <div
              className="relative w-full h-full"
              style={{ minHeight: "200px" }}
            >
              <img
                src={pfp2}
                alt="Vinay"
                className="absolute inset-0 h-full  object-cover object-center"
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
  return (
    <div className="relative bg-white border-2 border-black px-3 py-2 font-mono text-xs font-bold text-black z-10 rounded-xl flex gap-2 justify-center items-center w-[180px] text-center">
      <CoordinateBadge x={positionAbsoluteX} y={positionAbsoluteY} />
      {data.period}

      {data.period.includes("Now") && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
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
    <div className="relative w-[600px] md:w-[600px] bg-white border-2 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
      <CoordinateBadge x={positionAbsoluteX} y={positionAbsoluteY} />
      <div className="flex justify-start items-center gap-4">
        {data.media && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={typeof data.media === "string" ? data.media : data.media.src}
            alt={`${data.company} logo`}
            width={80}
            height={50}
            className="object-contain mb-4"
          />
        )}

        <div className="flex flex-col mb-4 border-b-2 border-black pb-3 w-full">
          <h3 className="text-2xl font-black text-black uppercase tracking-tight leading-none">
            {data.company}
          </h3>
          <p className="text-sm font-mono text-black font-bold mt-2">
            {data.role}
          </p>
        </div>
      </div>

      <ul className="space-y-3">
        {data.details.map((detail, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <div className="mt-1.5 w-2 h-2 bg-black shrink-0" />
            <span className=" text-black leading-snug">{detail}</span>
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
    <div className="relative w-60 bg-white border-2 border-black p-3 pb-8  transition-transform shadow-lg group">
      <CoordinateBadge x={positionAbsoluteX} y={positionAbsoluteY} />
      <div className="relative w-full h-32 bg-neutral-100 border group-hover:border-2 border-black flex items-center justify-center overflow-hidden mb-3">
        <img
          src={data.media}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className=" absolute top-0 left-0 bg-gray-400/05 w-full h-full group-hover:flex flex-col gap-2 group-hover: backdrop-blur-xs hidden justify-center items-center">
          <a
            href={data.link}
            target="_blank"
            className="text-sm font-mono bg-white px-2 py-1 border border-black cursor-pointer"
          >
            Live Preview
          </a>

          <button
            onClick={() => setIsDescriptionVisible(!isDescriptionVisible)}
            className="text-sm font-mono bg-white px-2 py-1 border border-black cursor-pointer"
          >
            Show Description
          </button>
        </div>
      </div>
      <h4 className="font-mono text-lg leading-none text-black">
        {data.title}
      </h4>
      <span className="text-xs font-mono text-white bg-blue-400 px-1">
        {data.tag}
      </span>

      {isDescriptionVisible && (
        <div className="absolute top-0 left-0 bg-white w-full h-full p-4 flex flex-col justify-between z-20">
          <div>{data.description}</div>

          <button
            onClick={() => setIsDescriptionVisible(false)}
            className="text-sm font-mono bg-white px-2 py-1 border border-black cursor-pointer mt-2"
          >
            Hide Description
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

function SocialNode({ data, positionAbsoluteX, positionAbsoluteY }) {
  const email = data?.email ?? "email@example.com";
  const phone = data?.phone ?? "+91 12345 67890";

  const getPhoneLink = () => phone.replace(/\s+/g, "");

  return (
    <div className="relative group">
      <CoordinateBadge x={positionAbsoluteX} y={positionAbsoluteY} />
      <div className="absolute inset-0 bg-black rounded-tr-2xl rounded-br-2xl translate-x-2 translate-y-2" />

      <div className="relative bg-white border-2 border-black p-4 flex flex-wrap gap-3 items-center rounded-tr-2xl rounded-br-2xl rounded-tl-none rounded-bl-none">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-black" />

        <a
          href="https://github.com/Ayush-0247"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded border-2 border-black px-3 py-2 text-black hover:bg-slate-100 transition-all"
        >
          <FaGithub size={18} />
          <span className="text-xs font-black uppercase">GitHub</span>
        </a>

        <a
          href="https://linkedin.com/in/ayushraj2407"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded border-2 border-black px-3 py-2 text-blue-700 hover:bg-slate-100 hover:text-blue-800 transition-all"
        >
          <FaLinkedin size={18} />
          <span className="text-xs font-black uppercase">LinkedIn</span>
        </a>

        <a
          href={`mailto:${email}`}
          className="flex items-center gap-2 rounded border-2 border-black px-3 py-2 text-red-500 hover:bg-slate-100 hover:text-red-600 transition-all"
        >
          <FaEnvelope size={18} />
          <span className="text-xs font-black uppercase">Email</span>
        </a>

        <a
          href={`tel:${getPhoneLink()}`}
          className="flex items-center gap-2 rounded border-2 border-black px-3 py-2 text-black hover:bg-slate-100 transition-all"
        >
          <FaPhone size={18} />
          <span className="text-xs font-black uppercase">{phone}</span>
        </a>

        <Handle
          type="target"
          position={Position.Top}
          className="bg-black! w-3! h-3! border-none!"
        />
      </div>
    </div>
  );
}

function EducationNode({ data, positionAbsoluteX, positionAbsoluteY }) {
  return (
    <div className="relative w-[600px] bg-white border-2 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
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

        <div className="flex flex-col mb-4 border-b-2 border-black pb-3 w-full">
          <h3 className="text-2xl font-black text-black uppercase tracking-tight leading-none">
            {data.institute}
          </h3>
          <div className="flex justify-between items-center mt-2 flex-wrap gap-2">
            <p className="text-sm font-mono text-black font-bold">
              {data.degree}
            </p>
            <p className="text-xs font-mono text-stone-600 bg-stone-100 border border-black px-2 py-0.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              {data.duration} | {data.cgpa}
            </p>
          </div>
        </div>
      </div>

      <ul className="space-y-3">
        {data.details &&
          data.details.map((detail, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <div className="mt-1.5 w-2 h-2 bg-black shrink-0" />
              <span className="text-black leading-snug">{detail}</span>
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
    <div className="relative w-[600px] bg-white dark:bg-stone-800 border-2 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
      <CoordinateBadge x={positionAbsoluteX} y={positionAbsoluteY} />

      <div className="flex flex-col mb-4 border-b-2 border-black pb-3 w-full">
        <h3 className="text-2xl font-black text-black uppercase tracking-tight leading-none">
          {data.title || "Tech Stack"}
        </h3>
        <p className="text-sm font-mono text-stone-600 dark:text-stone-300 mt-2">
          {data.subtitle || "Technologies I use"}
        </p>
      </div>

      <div className="space-y-4">
        {data.categories &&
          data.categories.map((cat, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              <h4 className="font-mono text-xs font-black uppercase text-stone-500 tracking-wider">
                {cat.name}
              </h4>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="bg-white dark:bg-stone-900 border-2 border-black px-3 py-1 font-mono text-xs font-bold text-black dark:text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all select-none"
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
        className="flex items-center gap-2 bg-black text-white border-2 border-black px-4 py-2 font-mono text-xs font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 hover:-translate-x-0.5 transition-all duration-150"
      >
        <FaGithub size={16} />
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
    link.download = "Ayush_raj_cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative">
      <CoordinateBadge x={positionAbsoluteX} y={positionAbsoluteY} />
      <button
        onClick={handleDownload}
        className="flex items-center gap-2 border-2 border-black px-4 py-2 font-mono text-xs font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 hover:-translate-x-0.5 transition-all duration-150 cursor-pointer text-white"
        style={{ backgroundColor: "black", color: "white" }}
      >
        <FaDownload size={13} className="text-white" />
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
        className="flex items-center gap-2 bg-black text-white border-2 border-black px-4 py-2 font-mono text-xs font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 hover:-translate-x-0.5 transition-all duration-150"
      >
        <FaLinkedin size={16} />
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
        className="absolute -top-9 left-0 flex items-center gap-1.5 bg-black text-white border-2 border-black px-3 py-1 font-mono text-xs font-bold z-10 hover:-translate-y-0.5 hover:-translate-x-0.5 transition-all duration-150"
      >
        <FaGithub size={13} />
        <span>GitHub</span>
      </a>
      {/* Connecting line from pill to card */}
      <div className="absolute -top-[10px] left-[22px] w-0.5 h-[10px] bg-black" />

      <div className="relative bg-white border-2 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 w-fit">
        <GitHubCalendar
          username={data.username}
          year={2026}
          colorScheme="light"
          blockMargin={4}
          blockSize={14}
          hideTotalCount={true}
          hideColorLegend={true}
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
// const nodeTypes = {
//   introduction: IntroductionNode,
//   experience: ExperienceNode,
//   project: ProjectNode,
//   github: GithubNode,
//   linkedin: LinkedinNode,
//   time: TimeNode,

// };
export {
  IntroductionNode,
  TimeNode,
  ExperienceNode,
  ProjectNode,
  SocialNode,
  GithubNode,
  nodeTypes,
};
