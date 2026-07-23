import React, { useState, useEffect } from "react";

/**
 * Hook to detect whether the user is on a phone-sized device and in portrait orientation.
 */
function useMobilePortrait() {
  const [isMobilePortrait, setIsMobilePortrait] = useState(false);

  useEffect(() => {
    const checkQuery = () => {
      const isPhone = window.matchMedia("(max-width: 767px)").matches;
      const isPortrait = window.matchMedia("(orientation: portrait)").matches;
      setIsMobilePortrait(isPhone && isPortrait);
    };

    checkQuery();

    const phoneQuery = window.matchMedia("(max-width: 767px)");
    const portraitQuery = window.matchMedia("(orientation: portrait)");

    // Modern browsers support addEventListener on MediaQueryList
    if (phoneQuery.addEventListener) {
      phoneQuery.addEventListener("change", checkQuery);
      portraitQuery.addEventListener("change", checkQuery);
    } else {
      // Fallback for older browsers
      phoneQuery.addListener(checkQuery);
      portraitQuery.addListener(checkQuery);
    }

    return () => {
      if (phoneQuery.removeEventListener) {
        phoneQuery.removeEventListener("change", checkQuery);
        portraitQuery.removeEventListener("change", checkQuery);
      } else {
        phoneQuery.removeListener(checkQuery);
        portraitQuery.removeListener(checkQuery);
      }
    };
  }, []);

  return isMobilePortrait;
}

export default function LandscapePrompt() {
  const isMobilePortrait = useMobilePortrait();
  const [lockAttempted, setLockAttempted] = useState(false);

  const handleRotateAndFullscreen = async () => {
    setLockAttempted(true);

    try {
      const element = document.documentElement;

      if (element.requestFullscreen) {
        await element.requestFullscreen();
      } else if (element.webkitRequestFullscreen) {
        await element.webkitRequestFullscreen();
      } else if (element.mozRequestFullScreen) {
        await element.mozRequestFullScreen();
      } else if (element.msRequestFullscreen) {
        await element.msRequestFullscreen();
      }

      if (screen.orientation && screen.orientation.lock) {
        await screen.orientation.lock("landscape");
      } else if (screen.lockOrientation) {
        await screen.lockOrientation("landscape");
      } else if (screen.mozLockOrientation) {
        await screen.mozLockOrientation("landscape");
      } else if (screen.msLockOrientation) {
        await screen.msLockOrientation("landscape");
      }
    } catch (error) {
      console.warn("Fullscreen/Orientation lock failed silently:", error);
    }
  };

  if (!isMobilePortrait) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-lg bg-white border-2 border-black shadow-[10px_10px_0_rgba(0,0,0,1)]">
        <div className="border-b-2 border-black bg-white p-6">
          <div className="items-center flex flex-col border border-black p-2">
            <p className="font-mono text-xl font-black uppercase tracking-[0.12em] text-black">
            Rotate your phone
          </p>
          
          </div>
          
          <p className="mt-4 text-sm font-mono text-slate-900 leading-7">
            This experience works best in landscape mode on phones. Tap the
            button below to open the site in landscape.
          </p>
        </div>

        <button
          type="button"
          onClick={handleRotateAndFullscreen}
          className="w-full border-t-2 border-black bg-black px-4 py-3 text-sm font-mono font-bold uppercase tracking-[0.08em] text-white transition hover:bg-slate-800"
        >
          Open in landscape
        </button>

        {lockAttempted && (
          <p className="px-6 py-4 text-xs font-mono text-slate-500">
            If your browser blocks automatic rotation, rotate the device
            manually.
          </p>
        )}
      </div>
    </div>
  );
}
