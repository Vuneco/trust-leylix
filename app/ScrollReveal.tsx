"use client";

import { ReactNode } from "react";

export default function ScrollReveal({ children }: { children: ReactNode }) {
  return <div className="reveal">{children}</div>;
}