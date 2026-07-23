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

  useEffect(() => {
    if (!isMobilePortrait) {
      return;
    }

    const handleRotateAndFullscreen = async () => {
      try {
        const element = document.documentElement;
        
        // Request fullscreen first (required by Screen Orientation API on standard browsers)
        if (element.requestFullscreen) {
          await element.requestFullscreen();
        } else if (element.webkitRequestFullscreen) {
          await element.webkitRequestFullscreen();
        } else if (element.mozRequestFullScreen) {
          await element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          await element.msRequestFullscreen();
        }

        // Lock to landscape orientation
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

    // Try immediately on load (might fail due to user activation policy in standard mobile browsers)
    handleRotateAndFullscreen();

    // Register interaction listeners to lock orientation on the first touch or click
    const triggerRotate = () => {
      handleRotateAndFullscreen();
      cleanup();
    };

    const cleanup = () => {
      window.removeEventListener("click", triggerRotate);
      window.removeEventListener("touchstart", triggerRotate);
      window.removeEventListener("pointerdown", triggerRotate);
    };

    window.addEventListener("click", triggerRotate);
    window.addEventListener("touchstart", triggerRotate);
    window.addEventListener("pointerdown", triggerRotate);

    return cleanup;
  }, [isMobilePortrait]);

  return null;
}
