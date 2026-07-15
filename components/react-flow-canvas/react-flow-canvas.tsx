"use client"

import {
   ReactFlow,
    applyEdgeChanges,
    applyNodeChanges,
    addEdge,
    NodeChange,
    EdgeChange,
    Connection,
    type Edge,
    type Node,
    type NodeMouseHandler,
    ReactFlowProvider,
    useReactFlow,
    NodeTypes,
    Controls,
    Panel,
} from "@xyflow/react"

import { useCallback, useEffect, useState, useContext } from "react"
import '@xyflow/react/dist/style.css'; 
import { whiteDotBg } from "@/static/graph-bg"
import { desktopNodes, desktopEdges } from "@/components/nodes/home-nodes/home-nodes-config"
import { DebugContext } from '@/components/nodes/home-nodes/debug-context'
import { saveNodeCoordinates } from "@/app/actions"
import { FaGithub } from "react-icons/fa"
import { isOnCanvasEditingAllowed } from "@/static/constant-vals";

function Flow({ nodeTypes }: { nodeTypes: NodeTypes }) {
  const { showCoordinates, setShowCoordinates } = useContext(DebugContext);
  const { fitView, setCenter } = useReactFlow();
  const [nodes, setNodes] = useState<Node[]>(desktopNodes)
  const [edges, setEdges] = useState<Edge[]>(desktopEdges)
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    setTimeout(() => fitView({ duration: 800, padding: 0.3 }), 100);
  }, [fitView]);

  const onNodeClick = useCallback<NodeMouseHandler>((_event, node) => {
    const x = node.position.x + (node.measured?.width ?? 0) / 2;
    const y = node.position.y + (node.measured?.height ?? 0) / 2;
    setCenter(x, y, { zoom: 1.2, duration: 800 });
  }, [setCenter]);

  const onPaneClick = useCallback(() => {
    fitView({ duration: 800, padding: 0.3 });
  }, [fitView]);

  const onStraightenLines = useCallback(() => {
    setNodes(currentNodes => {
      const newNodes = [...currentNodes];
      
      const getNode = (id: string) => newNodes.find(n => n.id === id);
      const getCenterX = (n: Node) => n.position.x + (n.measured?.width ?? 0) / 2;
      const setCenterX = (n: Node, targetX: number) => {
        n.position.x = targetX - (n.measured?.width ?? 0) / 2;
      };

      // 1. Make Time pills perfectly horizontal
      const t3 = getNode('t3');
      const t1 = getNode('t1');
      const t2 = getNode('t2');
      if (t3) {
        if (t1) t1.position.y = t3.position.y;
        if (t2) t2.position.y = t3.position.y;
      }

      // 2. Make GitHub perfectly vertically centered above Intro
      const intro = getNode('1');
      const github = getNode('git');
      if (intro && github) {
        setCenterX(github, getCenterX(intro));
      }

      // 3. Make Experiences perfectly vertically centered with Time pills
      const e3 = getNode('e3');
      if (t3 && e3) setCenterX(e3, getCenterX(t3));

      const e1 = getNode('e1');
      if (t1 && e1) setCenterX(e1, getCenterX(t1));

      const e2 = getNode('e2');
      if (t2 && e2) setCenterX(e2, getCenterX(t2));

      return newNodes;
    });
  }, [setNodes]);

  const onSavePositions = useCallback(async () => {
    setIsSaving(true);
    try {
      const positions = nodes.map(n => ({ id: n.id, x: n.position.x, y: n.position.y }));
      await saveNodeCoordinates(positions, 'desktop');
      alert('✅ Positions saved to source code!');
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'An unexpected error occurred.';
      alert('Failed to save: ' + message);
    } finally {
      setIsSaving(false);
    }
  }, [nodes]);

  // Focus camera on a specific node by id
  const focusNode = useCallback((id: string) => {
    const node = nodes.find(n => n.id === id);
    if (!node) return;
    const x = node.position.x + (node.measured?.width ?? 300) / 2;
    const y = node.position.y + (node.measured?.height ?? 200) / 2;
    setCenter(x, y, { zoom: 1.3, duration: 700 });
  }, [nodes, setCenter]);

  const navSections = [
    {
      label: 'Me',
      items: [{ id: '1', label: 'Intro' }],
    },
    {
      label: 'Social',
      items: [
        { id: 'twitter', label: '𝕏 Twitter' },
        { id: 'git', label: 'GitHub' },
      ],
    },
    {
      label: 'Experience',
      items: [
        { id: 'e3', label: 'Brackets' },
        { id: 'e1', label: 'Flinque' },
        { id: 'e2', label: 'Vitrify' },
      ],
    },
  ];

  const onNodesChange = useCallback(
    (changes: NodeChange<Node>[]) =>
      setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    []
  )

  const onEdgesChange = useCallback(
    (changes: EdgeChange<Edge>[]) =>
      setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    []
  )

  const onConnect = useCallback(
    (params: Connection) =>
      setEdges((edgesSnapshot) =>
        addEdge({ ...params, animated: true, style: { strokeWidth: 2 } }, edgesSnapshot)
      ),
    []
  )

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
        style={{ backgroundImage: whiteDotBg }}
        proOptions={{ hideAttribution: true }}
      >
        <Controls className="bg-white! border-2! border-black! shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]! rounded-none! text-black!" />

        {/* ── Nav Widget — always visible ── */}
        <Panel position="bottom-right" className="mb-6 mr-4">
          <div
            aria-label={navSections.map((section) => section.label).join(", ")}
            className="flex items-center gap-px bg-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] overflow-hidden"
          >

            {/* GitHub icon */}
            <button
              onClick={() => focusNode('git')}
              title="GitHub"
              className="flex items-center justify-center w-9 h-9 text-black hover:bg-black hover:text-white transition-colors duration-150"
            >
              <FaGithub size={16} />
            </button>

            {/* X / Twitter icon */}
            <button
              onClick={() => focusNode('twitter')}
              title="Twitter / X"
              className="flex items-center justify-center w-9 h-9 border-l border-stone-200 text-black hover:bg-black hover:text-white transition-colors duration-150"
            >
              <svg width="13" height="13" viewBox="0 0 1200 1227" fill="currentColor">
                <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.163 519.284ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.828Z"/>
              </svg>
            </button>

            {/* Experience button */}
            <button
              onClick={() => focusNode('e3')}
              title="Experience"
              className="flex items-center justify-center h-9 px-3 border-l-2 border-black font-mono text-[10px] font-bold text-black hover:bg-black hover:text-white transition-colors duration-150 tracking-widest uppercase"
            >
              Exp
            </button>

          </div>
        </Panel>


        {isOnCanvasEditingAllowed && (
          <Panel position="bottom-left" className="mb-4 ml-20 flex gap-2">
            <button 
              onClick={onPaneClick}
              className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-black font-mono text-xs font-black text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              Reset
            </button>
            <button 
              onClick={() => setShowCoordinates(!showCoordinates)}
              className={`flex items-center gap-2 px-4 py-2 border-2 border-black font-mono text-xs font-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:-translate-x-0.5 transition-all ${
                showCoordinates ? 'bg-black text-white' : 'bg-white text-black'
              }`}
            >
              {showCoordinates ? 'Hide XY' : 'Show XY'}
            </button>
            {showCoordinates && (
              <>
                <button 
                  onClick={onStraightenLines}
                  className="flex items-center gap-2 px-6 py-3 bg-indigo-600 border-2 border-black font-mono text-sm font-black text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-1 active:translate-y-1 active:shadow-none"
                >
                  Snap & Straighten Lines
                </button>
                <button 
                  onClick={onSavePositions}
                  disabled={isSaving}
                  className="flex items-center gap-2 px-6 py-3 bg-red-600 border-2 border-black font-mono text-sm font-black text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-1 active:translate-y-1 active:shadow-none disabled:opacity-50"
                >
                  {isSaving ? 'Saving to Code...' : 'Save Exact Positions to Code'}
                </button>
              </>
            )}
          </Panel>
        )}
      </ReactFlow>
  )
}

export default function ReactFlowCanvas({ nodeTypes }: { nodeTypes: NodeTypes }) {
  const [showCoordinates, setShowCoordinates] = useState(false);
  
  return (
    <DebugContext.Provider value={{ showCoordinates, setShowCoordinates }}>
      <ReactFlowProvider>
          <Flow nodeTypes={nodeTypes} />
      </ReactFlowProvider>
    </DebugContext.Provider>
  )
}
