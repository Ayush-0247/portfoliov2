"use client"

import { Handle, NodeTypes, Position } from "@xyflow/react"
import Image from "next/image"
import pfp from '@/public/pfp.jpeg'
import Link from "next/link"
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa"
import { useState } from "react"

function IntroductionNode() {
  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3" />
      
      <div className="relative w-180 bg-white border-2 border-black p-0 overflow-hidden flex flex-col">
        
        <div className="h-8 border-b-2 border-black bg-stone-100 flex items-center px-4 justify-between select-none">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500 border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]" />
            <div className="w-3 h-3 rounded-full bg-amber-400 border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]" />
            <div className="w-3 h-3 rounded-full bg-green-500 border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]" />
          </div>
          <div className="font-mono text-[10px] text-gray-500 tracking-widest uppercase">
          </div>
        </div>

        <div className="flex p-8 gap-8 items-start">
          <div className="flex-1 flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 border border-black rounded-full px-3 py-1 bg-green-50 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-green-800">Available for work</span>
            </div>

            <div>
              <h1 className="text-6xl font-black text-black tracking-tighter leading-[0.9]">
                VINAY CHAUDHARY
              </h1>
              <p className="font-mono text-gray-900 mt-1">
                Full Stack Engineer + Designer 🎨
              </p>
            </div>

            <p className="text-lg text-gray-800 font-medium leading-relaxed">
              I structure software from the ground up, optimized for
              <span className="mx-1 relative inline-block">
                <span className="relative z-10 px-1 font-bold text-black underline">performance</span>
              </span>
              and
              <span className="mx-1 relative inline-block">
                <span className="relative z-10 px-1 font-bold text-black underline">evolution</span>
              </span>.
            </p>
          </div>

          <div className="relative shrink-0">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/30 backdrop-blur-sm border-l border-r border-white/50 rotate-2 z-20 shadow-sm opacity-80" />
            
            <div className="relative w-40 h-40 bg-white border-2 border-black p-2 shadow-lg rotate-2 group-hover:rotate-1 transition-transform duration-300">
              <div className="relative w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500">
                <Image 
                  src={pfp} 
                  alt="Vinay" 
                  fill 
                  className="object-cover border border-black/10" 
                />
              </div>
            </div>
          </div>
        </div>

      <Handle id="projects" type="source" position={Position.Bottom} className="bg-transparent! w-4! h-4! border-[3px]! border-white!"/>
      <Handle id="projects-right" type="source" position={Position.Right} className="bg-transparent! w-4! h-4! border-[3px]! border-white!"/>
      <Handle id="experience" type="source" position={Position.Right} className="bg-transparent! w-4! h-4! border-[3px]! border-white!"/>
      <Handle id="experience-left" type="source" position={Position.Left} className="bg-transparent! w-4! h-4! border-[3px]! border-white!"/>
      </div>
    </div>
  )
}

function TimeNode({ data }: { data: { period: string } }) {
  return (
    <div className="relative bg-white border-2 border-black px-3 py-2 font-mono text-xs font-bold text-black  z-10 rounded-xl flex gap-2 items-center">
      {data.period}

      {
        data.period === "2025/Dec - Now" && (
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
        )
      }
      
      <Handle type="target" position={Position.Top} className="w-3 h-3 bg-transparent! border-none!" />
      <Handle type="source" position={Position.Bottom} id="bottom" className="w-3 h-3 bg-transparent! border-none!" />
      <Handle type="source" position={Position.Right} id="right" className="w-3 h-3 bg-transparent! border-none!" />
    </div>
  )
}

function ExperienceNode({ data }: { data: { role: string, company: string, details: string[], media: string } }) {
  return (
    <div className="relative w-150 md:w-150 bg-white border-2 border-black p-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
      <div className="flex  justify-start items-center gap-4">
        {
          data.media && (
           <Image src={data.media} alt={`${data.company} logo`} width={80} height={50} className="object-contain mb-4" />
          )
        }

        <div className="flex flex-col mb-4 border-b-2 border-black pb-3">
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

      <Handle type="target" position={Position.Left} className="w-3 h-3  bg-transparent! border-none!" />
    </div>
  )
}

function ProjectNode({ data }: { data: { title: string, tag: string, media: string, link: string, description: string } }) {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  
  return (
    <div className="relative w-60 bg-white border-2 border-black p-3 pb-8  transition-transform shadow-lg group">
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

      <Handle type="target" position={Position.Top} className="bg-transparent! border-none!" />
    </div>
  )
}

function SocialNode() {
  return (
    <div className="relative group">
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

const nodeTypes: NodeTypes = {
  introduction: IntroductionNode,
  time: TimeNode,
  experience: ExperienceNode,
  project: ProjectNode,
  social: SocialNode,
}

export {
    IntroductionNode, 
    TimeNode, 
    ExperienceNode, 
    ProjectNode,
    SocialNode,
    nodeTypes
}