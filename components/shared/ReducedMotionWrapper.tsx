"use client";

import { useReducedMotion } from "framer-motion";
import React from "react";

export function ReducedMotionWrapper({ children }: { children: React.ReactNode }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <>{children}</>;
  }

  return <>{children}</>;
}
