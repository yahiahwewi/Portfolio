import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ScrollIndicator = () => {
  const indicatorRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const indicator = indicatorRef.current;
    const progress = progressRef.current;

    if (!indicator || !progress) return;

    // Initial animation
    gsap.fromTo(indicator,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, delay: 1, ease: 'power2.out' }
    );

    // Progress animation
    gsap.to(progress, {
      height: '100%',
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={indicatorRef}
      className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block"
    >
      <div className="w-1 h-32 bg-white/20 rounded-full overflow-hidden">
        <div
          ref={progressRef}
          className="w-full bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"
          style={{ height: '0%' }}
        />
      </div>
    </div>
  );
};

export default ScrollIndicator;