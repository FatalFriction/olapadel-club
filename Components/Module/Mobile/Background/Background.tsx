"use client";

import { useBackground } from "./BackgroundContext";
import './Background.css';

export default function Background() {
  const { gradient } = useBackground();

  return (
    <div
      className="mobile-bg bg-none"
      style={{ backgroundImage: gradient }}
    />
  );
}