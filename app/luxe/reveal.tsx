"use client";

import { useEffect } from "react";

/**
 * Scroll-triggered reveal for the Luxe mockup — progressive enhancement.
 *
 * Content is visible by default. This effect "arms" the reveal animation only
 * once JS is running (adds `.reveal-armed` to `.luxe`), so if the script never
 * loads or throws, the page still shows everything. Reveals are driven by a
 * throttled scroll/resize handler using getBoundingClientRect — reliable across
 * environments where IntersectionObserver's async callbacks can stall.
 */
export default function Reveal() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".luxe");
    let els = Array.from(document.querySelectorAll<HTMLElement>(".luxe [data-reveal]"));
    if (!root || els.length === 0) return;

    // Progressive enhancement: hide (arm) only now that we can reveal.
    root.classList.add("reveal-armed");

    let ticking = false;

    const cleanup = () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };

    const check = () => {
      ticking = false;
      const trigger = window.innerHeight * 0.9;
      els = els.filter((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < trigger && r.bottom > 0) {
          el.classList.add("in");
          return false; // revealed — stop tracking
        }
        return true;
      });
      if (els.length === 0) cleanup();
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(check);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    // Reveal what's already in view. Double rAF lets the armed (hidden) state
    // paint once so the entrance transition actually plays; the timeout is a
    // backup in case rAF is throttled (e.g. background tab).
    requestAnimationFrame(() => requestAnimationFrame(check));
    const backup = window.setTimeout(check, 250);

    return () => {
      cleanup();
      clearTimeout(backup);
    };
  }, []);

  return null;
}
