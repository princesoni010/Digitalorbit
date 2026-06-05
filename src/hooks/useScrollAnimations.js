import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook for GSAP ScrollTrigger reveal animations.
 * Attach the returned ref to a container, and child elements
 * with `.reveal-up`, `.reveal-left`, `.reveal-right`, `.reveal-scale`
 * classes will animate in when scrolled into view.
 */
export function useScrollReveal(options = {}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      // Fade in from bottom
      gsap.utils.toArray('.reveal-up').forEach((el) => {
        gsap.to(el, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      });

      // Slide in from left
      gsap.utils.toArray('.reveal-left').forEach((el) => {
        gsap.to(el, {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      });

      // Slide in from right
      gsap.utils.toArray('.reveal-right').forEach((el) => {
        gsap.to(el, {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      });

      // Scale in
      gsap.utils.toArray('.reveal-scale').forEach((el) => {
        gsap.to(el, {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return containerRef;
}

/**
 * Animate a list of elements with a staggered reveal.
 * Returns a ref to attach to the parent container.
 */
export function useStaggerReveal(selector = '.stagger-item', options = {}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll(selector);
    if (!items.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: options.stagger || 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container,
            start: options.start || 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, container);

    return () => ctx.revert();
  }, [selector]);

  return containerRef;
}

/**
 * Animate a heading with word-by-word reveal.
 * Returns a ref for the heading element.
 */
export function useTextReveal() {
  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    // Split text into words
    const text = el.textContent;
    const words = text.split(' ');
    el.innerHTML = words
      .map((word) => `<span class="inline-block overflow-hidden"><span class="inline-block translate-y-full">${word}</span></span>`)
      .join(' ');

    const innerSpans = el.querySelectorAll('span > span');

    const ctx = gsap.context(() => {
      gsap.to(innerSpans, {
        y: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return textRef;
}

/**
 * Counter animation — animates a number from 0 to target.
 */
export function useCountUp(target, duration = 2) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const obj = { val: 0 };
      gsap.to(obj, {
        val: target,
        duration,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        onUpdate: () => {
          el.textContent = Math.round(obj.val);
        },
      });
    });

    return () => ctx.revert();
  }, [target, duration]);

  return ref;
}
