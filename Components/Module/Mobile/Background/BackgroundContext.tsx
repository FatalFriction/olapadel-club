"use client";

import { createContext, useContext, useEffect, useState } from "react";

const combos = [
  {
    colors: ["var(--sideline-white)", "var(--court-green)"],
    logo: "/OLA-VERT-CONTRAST-MOB.png"
  },
  {
    colors: ["var(--court-green)", "var(--diamond-green)"],
    logo: "/OLA-Primary-VERT-MOB.png"
  },
  {
    colors: ["var(--court-green)", "var(--rubber-black)"],
    logo: "/OLA-VERT-ACCENT-MO.png"
  },
  {
    colors: ["var(--diamond-green)", "var(--sideline-white)"],
    logo: "/OLA-Primary-VERT-MOB.png"
  },
  {
    colors: ["var(--court-green)", "var(--court-green)"],
    logo: "/OLA-VERT-ACCENT-MO.png"
  },
  {
    colors: ["var(--diamond-green)", "var(--court-green)"],
    logo: "/OLA-VERT-CONTRAST-MOB.png"
  }
];

const BackgroundContext = createContext<any>(null);

export function BackgroundProvider({ children }: { children: React.ReactNode }) {
  const [gradient, setGradient] = useState("");
  const [logo, setLogo] = useState("");

  useEffect(() => {
    const combo = combos[Math.floor(Math.random() * combos.length)];
    const [c1, c2] = combo.colors;
    const bg = `linear-gradient(to top, ${c1}, ${c2})`;

    setGradient(bg);
    setLogo(combo.logo);
  }, []);

  return (
    <BackgroundContext.Provider value={{ gradient, logo }}>
      {children}
    </BackgroundContext.Provider>
  );
}

export function useBackground() {
  return useContext(BackgroundContext);
}
