
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

export const useSmoothScroll = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis smooth scrolling
    lenisRef.current = new Lenis({
    //   duration: 1.2,
    //   easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Ease out exponential
    //   direction: 'vertical',
    //   gestureDirection: 'vertical',
    //   smooth: true,
    //   mouseMultiplier: 1,
    //   smoothTouch: false, // Disable smooth scrolling on touch devices
    //   touchMultiplier: 2,
    //   infinite: false,

      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Ease out exponential
      orientation: 'vertical',         // Changed from 'direction'
      gestureOrientation: 'vertical',  // Changed from 'gestureDirection'
      smoothWheel: true,
      wheelMultiplier: 1,
    //   smoothTouch: false, // Disable smooth scrolling on touch devices
      touchMultiplier: 2,
      infinite: false,
    });

    // Create a RAF loop for Lenis
    function raf(time: number) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }

    // Start the animation loop
    requestAnimationFrame(raf);

    // Cleanup function
    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  return lenisRef;
};