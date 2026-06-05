import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    
    // Check if device supports hover (desktop vs mobile)
    if (window.matchMedia("(pointer: coarse)").matches) {
      // Hide cursor on touch devices
      if (cursor) cursor.style.display = 'none';
      if (follower) follower.style.display = 'none';
      return;
    }

    const onMouseMove = (e) => {
      gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });
      gsap.to(follower, { x: e.clientX, y: e.clientY, duration: 0.5 });
    };

    // Add active state when hovering over links/buttons
    const handleMouseOver = (e) => {
      if (e.target.tagName.toLowerCase() === 'a' || 
          e.target.tagName.toLowerCase() === 'button' ||
          e.target.closest('a') || 
          e.target.closest('button')) {
        gsap.to(follower, { scale: 1.5, backgroundColor: 'rgba(108, 99, 255, 0.1)', duration: 0.3 });
      }
    };

    const handleMouseOut = () => {
      gsap.to(follower, { scale: 1, backgroundColor: 'transparent', duration: 0.3 });
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-2 h-2 bg-text rounded-full pointer-events-none z-[100] transform -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 w-8 h-8 border border-accent rounded-full pointer-events-none z-[100] transform -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />
    </>
  );
}
