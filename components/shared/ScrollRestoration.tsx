"use client";

/**
 * ScrollRestoration
 *
 * Centralised scroll-reset for Lenis + Next.js 15 App Router.
 *
 * Handles three navigation types:
 *  1. PUSH  – normal <Link> / router.push()  → scroll to top immediately
 *  2. POP   – browser Back / Forward          → let the browser restore position
 *  3. HASH  – same-page or cross-page anchor  → scroll to target element
 *
 * Must be rendered inside <ReactLenis root> so that useLenis() can reach
 * the single global instance. No second Lenis instance is created here.
 */

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";

export function ScrollRestoration() {
  const pathname = usePathname();
  const lenis = useLenis();

  /**
   * Track whether the most recent navigation was triggered by the browser's
   * Back/Forward buttons (popstate) so we can skip the forced scroll-to-top
   * in that case and let the browser restore its saved position instead.
   */
  const isPop = useRef(false);

  // ── Listen for browser Back / Forward ──────────────────────────────────
  useEffect(() => {
    const onPopState = () => {
      isPop.current = true;
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  // ── React to pathname changes ───────────────────────────────────────────
  useEffect(() => {
    if (!lenis) return;

    // Detect the hash from the current URL (if any).
    const hash =
      typeof window !== "undefined" ? window.location.hash : "";

    if (isPop.current) {
      // POP navigation – reset flag and let the browser handle position.
      isPop.current = false;
      return;
    }

    if (hash) {
      // HASH navigation – scroll to the target element, fall back to top.
      // Use a small delay to allow the new page content to mount first.
      const scrollToHash = () => {
        const id = hash.replace("#", "");
        const target = document.getElementById(id);

        if (target) {
          lenis.scrollTo(target, { immediate: false, duration: 1 });
        } else {
          // Target element not found – fall back to top.
          lenis.scrollTo(0, { immediate: true });
        }
      };

      // Give React one tick to render the new page before trying to find
      // the element.
      const timer = setTimeout(scrollToHash, 80);
      return () => clearTimeout(timer);
    }

    // Normal PUSH navigation – reset scroll immediately so Lenis internal
    // state and the actual document scroll are both synchronised to 0.
    lenis.scrollTo(0, { immediate: true });
  }, [pathname, lenis]);

  return null;
}
