import React, { useState, useEffect } from "react";
import { nodeTypes } from "@/components/nodes/home-nodes/home-nodes";
import ReactFlowCanvas from "@/components/react-flow-canvas/react-flow-canvas";
import LandscapePrompt from "@/components/landscape-prompt/LandscapePrompt";
import VerticalList from "@/components/vertical-list/VerticalList";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  const [isCanvasView, setIsCanvasView] = useState(true);

  // Automatically lock layout to list view on screens < 768px in portrait
  // and switch to canvas mode on orientation shift to landscape
  useEffect(() => {
    let lastOrientation = window.matchMedia("(orientation: portrait)").matches ? "portrait" : "landscape";

    const handleResize = () => {
      const isPortrait = window.matchMedia("(orientation: portrait)").matches;
      const currentOrientation = isPortrait ? "portrait" : "landscape";

      // If user rotated from portrait to landscape, automatically flip to canvas view
      if (lastOrientation === "portrait" && currentOrientation === "landscape") {
        setIsCanvasView(true);
      }
      // If user rotated from landscape to portrait and it's a mobile screen, force list view
      else if (window.innerWidth < 768 && isPortrait) {
        setIsCanvasView(false);
      }
      
      lastOrientation = currentOrientation;
    };

    handleResize(); // run initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="w-screen h-screen relative bg-slate-50 overflow-hidden select-none">
      {/* Manual Toggle Switch - Floating at top-right, hidden on mobile */}
      <button
        onClick={() => setIsCanvasView((prev) => !prev)}
        className="toggle-view-btn fixed top-6 right-6 z-50 flex items-center justify-center px-4 py-2 font-mono text-xs font-bold transition-all duration-150 hover:-translate-y-0.5 cursor-pointer"
        style={{
          background: "rgba(255, 255, 255, 0.75)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.5)",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
          borderRadius: "12px",
          color: "#334155",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "#D4AF37";
          e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.5)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "#334155";
          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.5)";
        }}
      >
        {isCanvasView ? "Show List View" : "Show Canvas View"}
      </button>

      {/* Canvas View Wrapper - hidden on screens < 768px via CSS */}
      <div className={`canvas-wrapper w-full h-full ${isCanvasView ? "block" : "hidden"}`}>
        <ReactFlowCanvas nodeTypes={nodeTypes} />
        <LandscapePrompt />
      </div>

      {/* Vertical List View Wrapper - shown when canvas is hidden */}
      <div className={`vertical-list-wrapper w-full h-full overflow-y-auto ${!isCanvasView ? "block" : "hidden"}`}>
        <VerticalList />
      </div>

      <Analytics />
    </main>
  );
}
