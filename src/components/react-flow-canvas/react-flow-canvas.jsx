"use client";

import {
  ReactFlow,
  applyEdgeChanges,
  applyNodeChanges,
  addEdge,
  ReactFlowProvider,
  useReactFlow,
  Controls,
  Panel,
  Background,
} from "@xyflow/react";

import { useCallback, useEffect, useState, useContext } from "react";
import "@xyflow/react/dist/style.css";
import { whiteDotBg } from "@/static/graph-bg";
import {
  desktopNodes,
  desktopEdges,
} from "@/components/nodes/home-nodes/home-nodes-config";
import { DebugContext } from "@/components/nodes/home-nodes/debug-context";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { isOnCanvasEditingAllowed } from "@/static/constant-vals";

function Flow({ nodeTypes }) {
  const { showCoordinates, setShowCoordinates } = useContext(DebugContext);
  const { fitView, setCenter } = useReactFlow();
  const [nodes, setNodes] = useState(desktopNodes);
  const [edges, setEdges] = useState(desktopEdges);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    setTimeout(() => fitView({ duration: 800, padding: 0.3 }), 100);
  }, [fitView]);

  const onNodeClick = useCallback(
    (_event, node) => {
      const x = node.position.x + (node.measured?.width ?? 0) / 2;
      const y = node.position.y + (node.measured?.height ?? 0) / 2;
      setCenter(x, y, { zoom: 1.2, duration: 800 });
    },
    [setCenter],
  );

  const onPaneClick = useCallback(() => {
    fitView({ duration: 800, padding: 0.3 });
  }, [fitView]);

  const onStraightenLines = useCallback(() => {
    setNodes((currentNodes) => {
      const newNodes = [...currentNodes];

      const getNode = (id) => newNodes.find((n) => n.id === id);
      const getCenterX = (n) => n.position.x + (n.measured?.width ?? 0) / 2;
      const setCenterX = (n, targetX) => {
        n.position.x = targetX - (n.measured?.width ?? 0) / 2;
      };

      // 1. Make Time pills perfectly horizontal
      const t3 = getNode("t3");
      const t1 = getNode("t1");
      const t2 = getNode("t2");
      if (t3) {
        if (t1) t1.position.y = t3.position.y;
        if (t2) t2.position.y = t3.position.y;
      }

      // 2. Make GitHub perfectly vertically centered above Intro
      const intro = getNode("1");
      const github = getNode("git");
      if (intro && github) {
        setCenterX(github, getCenterX(intro));
      }

      // 3. Make Experiences perfectly vertically centered with Time pills
      const e3 = getNode("e3");
      if (t3 && e3) setCenterX(e3, getCenterX(t3));

      const e1 = getNode("e1");
      if (t1 && e1) setCenterX(e1, getCenterX(t1));

      const e2 = getNode("e2");
      if (t2 && e2) setCenterX(e2, getCenterX(t2));

      return newNodes;
    });
  }, [setNodes]);

  const onSavePositions = useCallback(() => {
    const positions = nodes.map((n) => ({
      id: n.id,
      x: Math.round(n.position.x),
      y: Math.round(n.position.y),
    }));
    console.log(
      "Updated Node Coordinates:\n",
      JSON.stringify(positions, null, 2),
    );
    alert(
      "ℹ️ Node Coordinates:\n\nThe new coordinates have been logged to your developer console (F12). You can copy-paste them into 'home-nodes-config.js'.",
    );
  }, [nodes]);

  // Focus camera on a specific node by id
  const focusNode = useCallback(
    (id) => {
      const node = nodes.find((n) => n.id === id);
      if (!node) return;
      const x = node.position.x + (node.measured?.width ?? 300) / 2;
      const y = node.position.y + (node.measured?.height ?? 200) / 2;
      setCenter(x, y, { zoom: 1.3, duration: 700 });
    },
    [nodes, setCenter],
  );

  const navSections = [
    {
      label: "Me",
      items: [{ id: "1", label: "Intro" }],
    },
    {
      label: "Social",
      items: [
        { id: "linkedin", label: "LinkedIn" },
        { id: "git", label: "GitHub" },
      ],
    },
    {
      label: "Experience",
      items: [
        { id: "e3", label: "Brackets" },
        { id: "e1", label: "Flinque" },
        { id: "e2", label: "Vitrify" },
      ],
    },
  ];

  const onNodesChange = useCallback(
    (changes) =>
      setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    [],
  );

  const onEdgesChange = useCallback(
    (changes) =>
      setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    [],
  );

  const onConnect = useCallback(
    (params) =>
      setEdges((edgesSnapshot) =>
        addEdge(
          { ...params, animated: true, style: { strokeWidth: 2 } },
          edgesSnapshot,
        ),
      ),
    [],
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onNodeClick={onNodeClick}
      onPaneClick={onPaneClick}
      fitView
      minZoom={0.1}
      maxZoom={5}
      fitViewOptions={{
        padding: 0.3,
        duration: 800,
      }}
      style={{ background: "transparent" }}
      proOptions={{ hideAttribution: true }}
    >
      <Background variant="dots" color="rgba(15, 23, 42, 0.05)" gap={24} size={1} />
      
      <svg className="absolute w-0 h-0 pointer-events-none">
        <defs>
          <linearGradient id="edge-grad-indigo-purple" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#9333ea" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="edge-grad-blue-teal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0d9488" stopOpacity="0.6" />
          </linearGradient>
        </defs>
      </svg>

      <Controls className="bg-white/40! backdrop-blur-md! border! border-slate-200/50! shadow-xl! rounded-xl! text-slate-800! overflow-hidden! [&_button]:border-slate-200/30! [&_button]:hover:bg-white/30! [&_svg]:fill-slate-600!" />

      {/* ── Nav Widget ── */}
      <Panel position="bottom-right" className="mb-6 mr-4">
        <div
          aria-label={navSections.map((section) => section.label).join(", ")}
          className="flex items-center gap-1.5 p-1.5 bg-white/40 backdrop-blur-md border border-slate-200/50 shadow-xl rounded-full overflow-hidden"
        >
          {/* GitHub icon */}
          <button
            onClick={() => focusNode("git")}
            title="GitHub"
            className="flex items-center justify-center w-9 h-9 rounded-full text-slate-600 hover:text-slate-900 hover:bg-white/30 transition-all duration-200 cursor-pointer"
          >
            <FaGithub size={16} />
          </button>

          {/* LinkedIn icon */}
          <button
            onClick={() => focusNode("linkedin")}
            title="LinkedIn"
            className="flex items-center justify-center w-9 h-9 rounded-full text-slate-600 hover:text-slate-900 hover:bg-white/30 transition-all duration-200 cursor-pointer"
          >
            <FaLinkedin size={16} />
          </button>

          {/* Experience button */}
          <button
            onClick={() => focusNode("e3")}
            title="Experience"
            className="flex items-center justify-center h-9 px-4 rounded-full font-mono text-[10px] font-bold text-slate-700 hover:text-slate-900 hover:bg-white/30 transition-all duration-200 tracking-widest uppercase cursor-pointer"
          >
            Exp
          </button>
        </div>
      </Panel>

      {isOnCanvasEditingAllowed && (
        <Panel position="bottom-left" className="mb-4 ml-20 flex gap-2.5">
          <button
            onClick={onPaneClick}
            className="flex items-center gap-2 px-4 py-2 bg-white/40 backdrop-blur-md border border-slate-200/50 font-mono text-xs font-bold text-slate-700 rounded-xl hover:bg-white/60 hover:text-slate-950 transition-all shadow-md cursor-pointer"
          >
            Reset
          </button>
          <button
            onClick={() => setShowCoordinates(!showCoordinates)}
            className={`flex items-center gap-2 px-4 py-2 backdrop-blur-md border font-mono text-xs font-bold rounded-xl transition-all shadow-md cursor-pointer ${
              showCoordinates
                ? "bg-indigo-600/25 border-indigo-500/40 text-indigo-800"
                : "bg-white/40 border-slate-200/50 text-slate-700 hover:bg-white/60"
            }`}
          >
            {showCoordinates ? "Hide XY" : "Show XY"}
          </button>
          {showCoordinates && (
            <>
              <button
                onClick={onStraightenLines}
                className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600/10 hover:bg-indigo-600/20 border border-indigo-500/30 font-mono text-xs font-bold text-indigo-700 rounded-xl shadow-md transition-all cursor-pointer"
              >
                Snap & Straighten Lines
              </button>
              <button
                onClick={onSavePositions}
                disabled={isSaving}
                className="flex items-center gap-2 px-5 py-2.5 bg-rose-600/10 hover:bg-rose-600/20 border border-rose-500/30 font-mono text-xs font-bold text-rose-700 rounded-xl shadow-md transition-all disabled:opacity-50 cursor-pointer"
              >
                {isSaving
                  ? "Saving..."
                  : "Save Exact Positions"}
              </button>
            </>
          )}
        </Panel>
      )}
    </ReactFlow>
  );
}

export default function ReactFlowCanvas({ nodeTypes }) {
  const [showCoordinates, setShowCoordinates] = useState(false);

  return (
    <DebugContext.Provider value={{ showCoordinates, setShowCoordinates }}>
      <ReactFlowProvider>
        <div className="relative w-full h-full bg-[#f0f6ff] overflow-hidden">
          {/* Animated blurred gradient blobs in background */}
          <div className="absolute top-[5%] left-[10%] w-[380px] h-[380px] bg-indigo-500/20 rounded-full blur-[110px] animate-blob-1 pointer-events-none" />
          <div className="absolute bottom-[10%] right-[15%] w-[480px] h-[480px] bg-purple-500/20 rounded-full blur-[130px] animate-blob-2 pointer-events-none" />
          <div className="absolute top-[45%] left-[55%] w-[320px] h-[320px] bg-cyan-500/18 rounded-full blur-[100px] animate-blob-3 pointer-events-none" />
          
          <Flow nodeTypes={nodeTypes} />
        </div>
      </ReactFlowProvider>
    </DebugContext.Provider>
  );
}
