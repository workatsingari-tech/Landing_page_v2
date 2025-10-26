import { useEffect } from 'react';
import LandingPage from './pages/LandingPage';
import './index.css';

function App() {
  useEffect(() => {
    // Dynamically import Lenis
    let lenis: any;

    const initLenis = async () => {
      // Import Lenis dynamically
      const Lenis = (await import('lenis')).default;
      
      // Initialize Lenis
      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      });

      // Animation loop
      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    };

    initLenis();

    // Cleanup
    return () => {
      if (lenis) {
        lenis.destroy();
      }
    };
  }, []);

  return <LandingPage />;
}

export default App;