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
    ReactFlowProvider,
    useReactFlow,
    NodeTypes,
    Controls,
} from "@xyflow/react"

import { useCallback, useEffect, useState } from "react"
import '@xyflow/react/dist/style.css'; 
import { whiteDotBg } from "@/static/graph-bg"
import { desktopNodes, mobileNodes, desktopEdges, mobileEdges } from "@/components/nodes/home-nodes/home-nodes-config" 

function Flow({ nodeTypes }: { nodeTypes: NodeTypes }) {

  const { fitView } = useReactFlow();
  const [nodes, setNodes] = useState<Node[]>(desktopNodes)
  const [edges, setEdges] = useState<Edge[]>(desktopEdges)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setNodes(mobileNodes);
        setEdges(mobileEdges)
      } else {
        setNodes(desktopNodes);
        setEdges(desktopEdges)
      }
      
      setTimeout(() => {
        fitView({ duration: 800, padding: 0.08 });
      }, 100);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [fitView]);

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
        fitView
        minZoom={0.1}
        maxZoom={5}
        fitViewOptions={{
          padding: 0.15,
          duration: 800, 
        }}
        style={{ backgroundImage: whiteDotBg }}
        proOptions={{ hideAttribution: true }}
      >
        <Controls className="bg-white! border-2! border-black! shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]! rounded-none! text-black!" />
      </ReactFlow>
  )
}

export default function ReactFlowCanvas({ nodeTypes }: { nodeTypes: NodeTypes }) {
  return (
     <ReactFlowProvider>
        <Flow nodeTypes={nodeTypes} />
    </ReactFlowProvider>
  )
}