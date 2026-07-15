"use client"

import { Handle, NodeTypes, Position } from "@xyflow/react"
import Image from "next/image"
import pfp from '@/public/pfp.jpeg'
import Link from "next/link"
import { GitHubCalendar } from "react-github-calendar"
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa"
import { useState } from "react"
import { useDebug } from "./debug-context"

function CoordinateBadge({ x, y }: { x?: number, y?: number }) {
  const { showCoordinates } = useDebug();
  if (!showCoordinates || x === undefined || y === undefined) return null;
  return (
    <div className="absolute -top-3 -right-3 bg-black text-white text-[10px] font-mono px-2 py-1 z-[100] shadow-lg pointer-events-none rounded">
      X: {Math.round(x)} | Y: {Math.round(y)}
    </div>
  )
}

function IntroductionNode({ positionAbsoluteX, positionAbsoluteY }: any) {
  return (
    <div className="group relative">
      <CoordinateBadge x={positionAbsoluteX} y={positionAbsoluteY} />
      <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3" />

      <div className="relative bg-white border-2 border-black overflow-hidden flex flex-col" style={{ width: '580px' }}>

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
          <div className="flex-1 flex flex-col justify-center p-8 gap-3">
            <h1 className="font-mono text-lg font-black text-black leading-snug">
              I'm Vinay Chaudhary, Backend Engineer &amp; Systems Thinker.
            </h1>
            <p className="font-mono text-sm text-gray-500 leading-relaxed">
              I build scalable backends, obsess over clean data models, and re-architect legacy systems for clarity and scale. When I'm not shipping code, I'm collecting keycaps and reading about databases. Based in India.
            </p>
          </div>

          {/* Right: photo 30% */}
          <div className="border-l-2 border-black shrink-0" style={{ width: '30%' }}>
            <div className="relative w-full h-full" style={{ minHeight: '200px' }}>
              <Image src={pfp} alt="Vinay" fill className="object-cover object-center" />
            </div>
          </div>

        </div>

        <Handle id="projects" type="source" position={Position.Bottom} className="!opacity-0 !w-4 !h-4"/>
        <Handle id="projects-right" type="source" position={Position.Right} className="!opacity-0 !w-4 !h-4"/>
        <Handle id="experience" type="source" position={Position.Right} className="!opacity-0 !w-4 !h-4"/>
        <Handle id="experience-left" type="source" position={Position.Left} className="!opacity-0 !w-4 !h-4"/>
        <Handle id="github" type="source" position={Position.Top} className="!opacity-0 !w-4 !h-4"/>
      </div>
    </div>
  )
}

function TimeNode({ data, positionAbsoluteX, positionAbsoluteY }: any) {
  return (
    <div className="relative bg-white border-2 border-black px-3 py-2 font-mono text-xs font-bold text-black z-10 rounded-xl flex gap-2 justify-center items-center w-[180px] text-center">
      <CoordinateBadge x={positionAbsoluteX} y={positionAbsoluteY} />
      {data.period}

      {
        data.period.includes("Now") && (
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
        )
      }
      <Handle type="target" position={Position.Left} id="left" className="!opacity-0 !w-3 !h-3" />
      <Handle type="source" position={Position.Right} id="right" className="!opacity-0 !w-3 !h-3" />
      <Handle type="source" position={Position.Top} id="top" className="!opacity-0 !w-3 !h-3" />
      <Handle type="source" position={Position.Bottom} id="bottom" className="!opacity-0 !w-3 !h-3" />
    </div>
  )
}

function ExperienceNode({ data, positionAbsoluteX, positionAbsoluteY }: any) {
  return (
    <div className="relative w-[600px] md:w-[600px] bg-white border-2 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
      <CoordinateBadge x={positionAbsoluteX} y={positionAbsoluteY} />
      <div className="flex justify-start items-center gap-4">
        {data.media && (
           // eslint-disable-next-line @next/next/no-img-element
           <img src={typeof data.media === 'string' ? data.media : data.media.src} alt={`${data.company} logo`} width={80} height={50} className="object-contain mb-4" />
          )}

        <div className="flex flex-col mb-4 border-b-2 border-black pb-3 w-full">
            <h3 className="text-2xl font-black text-black uppercase tracking-tight leading-none">{data.company}</h3>
            <p className="text-sm font-mono text-black font-bold mt-2">{data.role}</p>
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

      <Handle type="target" position={Position.Left} id="left" className="!opacity-0 !w-3 !h-3" />
      <Handle type="target" position={Position.Top} id="top" className="!opacity-0 !w-3 !h-3" />
      <Handle type="target" position={Position.Bottom} id="bottom" className="!opacity-0 !w-3 !h-3" />
    </div>
  )
}

function ProjectNode({ data, positionAbsoluteX, positionAbsoluteY }: any) {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  
  return (
    <div className="relative w-60 bg-white border-2 border-black p-3 pb-8  transition-transform shadow-lg group">
      <CoordinateBadge x={positionAbsoluteX} y={positionAbsoluteY} />
      <div className="relative w-full h-32 bg-neutral-100 border group-hover:border-2 border-black flex items-center justify-center overflow-hidden mb-3">
        <Image src={data.media} fill alt="" objectFit="cover" />
        <div className=" absolute top-0 left-0 bg-gray-400/05 w-full h-full group-hover:flex flex-col gap-2 group-hover: backdrop-blur-xs hidden justify-center items-center">
            <Link href={data.link} target="_blank" className="text-sm font-mono bg-white px-2 py-1 border border-black cursor-pointer">
              Live Preview 
            </Link>

            <button 
              onClick={() => setIsDescriptionVisible(!isDescriptionVisible)}
              className="text-sm font-mono bg-white px-2 py-1 border border-black cursor-pointer"
            >
              Show Description
            </button>
        </div>
      </div>
      <h4 className="font-mono text-lg leading-none text-black">{data.title}</h4>
      <span className="text-xs font-mono text-white bg-blue-400 px-1">{data.tag}</span>

      {isDescriptionVisible && (
        <div className="absolute top-0 left-0 bg-white w-full h-full p-4 flex flex-col justify-between z-20">
          <div>
             {data.description}
          </div>

            <button 
              onClick={() => setIsDescriptionVisible(false)}
              className="text-sm font-mono bg-white px-2 py-1 border border-black cursor-pointer mt-2"
            >
              Hide Description
            </button>
        </div>
      )}

      <Handle type="target" position={Position.Top} className="!opacity-0 !border-none" />
    </div>
  )
}

function SocialNode({ positionAbsoluteX, positionAbsoluteY }: any) {
  return (
    <div className="relative group">
      <CoordinateBadge x={positionAbsoluteX} y={positionAbsoluteY} />
       <div className="absolute inset-0 bg-black rounded-tr-2xl rounded-br-2xl translate-x-2 translate-y-2" />
       
       <div className="relative bg-white border-2 border-black p-4 flex gap-6 items-center rounded-tr-2xl rounded-br-2xl rounded-tl-none rounded-bl-none">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-black" />
          
          <Link href="https://github.com" target="_blank" className="text-black hover:text-gray-600 hover:scale-110 transition-transform">
            <FaGithub size={24} />
          </Link>
          <Link href="https://linkedin.com" target="_blank" className="text-blue-700 hover:text-blue-800 hover:scale-110 transition-transform">
            <FaLinkedin size={24} />
          </Link>
          <Link href="https://twitter.com" target="_blank" className="text-sky-500 hover:text-sky-600 hover:scale-110 transition-transform">
            <FaTwitter size={24} />
          </Link>
          <Link href="mailto:email@example.com" className="text-red-500 hover:text-red-600 hover:scale-110 transition-transform">
            <FaEnvelope size={24} />
          </Link>

          <Handle type="target" position={Position.Top} className="bg-black! w-3! h-3! border-none!" />
       </div>
    </div>
  )
}

function TwitterNode({ positionAbsoluteX, positionAbsoluteY }: any) {
  return (
    <div className="relative">
      <CoordinateBadge x={positionAbsoluteX} y={positionAbsoluteY} />
      <a
        href="https://x.com/vinayisactive"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-black text-white border-2 border-black px-4 py-2 font-mono text-xs font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 hover:-translate-x-0.5 transition-all duration-150"
      >
        {/* X logo */}
        <svg width="13" height="13" viewBox="0 0 1200 1227" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.163 519.284ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.828Z"/>
        </svg>
        <span>@vinayisactive</span>
      </a>
      <Handle type="target" position={Position.Top} className="!opacity-0 !w-3 !h-3" />
    </div>
  )
}

function GithubNode({ data, positionAbsoluteX, positionAbsoluteY }: any) {
  return (
    <div className="relative">
      <CoordinateBadge x={positionAbsoluteX} y={positionAbsoluteY} />

      {/* Floating GitHub pill label above the card — clickable */}
      <a
        href="https://github.com/vinayisactive"
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
           colorScheme="light"
           blockMargin={4}
           blockSize={14}
           showTotalCount={false}
           showColorLegend={false}
        />
        <Handle id="bottom" type="target" position={Position.Bottom} className="!opacity-0 !w-4 !h-4" />
      </div>
    </div>
  )
}

const nodeTypes: NodeTypes = {
  introduction: IntroductionNode,
  time: TimeNode,
  experience: ExperienceNode,
  project: ProjectNode,
  social: SocialNode,
  github: GithubNode,
  twitter: TwitterNode,
}

export {
    IntroductionNode, 
    TimeNode, 
    ExperienceNode, 
    ProjectNode,
    SocialNode,
    GithubNode,
    nodeTypes
}