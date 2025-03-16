
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CursorTracker } from "./components/CursorTracker";
import { ThemeProvider } from "./components/ThemeProvider";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import "./App.css";

import { useSmoothScroll } from "./hooks/use-smooth-scroll";

function App() {
  // Check if device is touch device to disable cursor effect
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Initialize smooth scrolling
  useSmoothScroll();

  useEffect(() => {
    // Check if it's a touch device
    const touchDevice = (
      'ontouchstart' in window || 
      navigator.maxTouchPoints > 0 || 
      (navigator as Navigator & { msMaxTouchPoints?: number }).msMaxTouchPoints > 0
    );
    setIsTouchDevice(touchDevice);
    
    // Add custom cursor class to html element if not a touch device
    if (!touchDevice) {
      document.documentElement.classList.remove('has-custom-cursor');
    }

    return () => {
      document.documentElement.classList.remove('has-custom-cursor');
    };
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        {!isTouchDevice && <CursorTracker />}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
