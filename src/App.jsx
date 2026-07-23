import { nodeTypes } from "@/components/nodes/home-nodes/home-nodes";
import ReactFlowCanvas from "@/components/react-flow-canvas/react-flow-canvas";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <main className="w-screen h-screen">
      <ReactFlowCanvas nodeTypes={nodeTypes} />
      <Analytics />
    </main>
  );
}
