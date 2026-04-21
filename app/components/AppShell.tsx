"use client";

import { useMemo, useState } from "react";
import Intro from "./sections/Intro";
import Timeline from "./sections/Timeline";
import Gallery from "./sections/Gallery";
import Gifts from "./sections/Gifts";
import Final from "./sections/Final";

type SectionId = "intro" | "timeline" | "gallery" | "gifts" | "final";

const sections: { id: SectionId; label: string }[] = [
  { id: "intro", label: "Início" },
  { id: "timeline", label: "Linha do tempo" },
  { id: "gallery", label: "Fotos" },
  { id: "gifts", label: "Caixa" },
  { id: "final", label: "Final" },
];

export default function AppShell() {
  const [active, setActive] = useState<SectionId>("intro");
  const year = useMemo(() => new Date().getFullYear(), []);

  const go = (id: SectionId) => setActive(id);

  return (
    <div style={styles.stage}>
      <div style={styles.frame}>
        <header style={styles.header}>
          <div style={styles.brand}>
            <div style={styles.dot} />
            <div>
              <div style={styles.title}>Gustavo & Fernanda</div>
              <div style={styles.subtitle}>
                Nosso aniversário de namoro • {year}
              </div>
            </div>
          </div>

          <nav style={styles.nav}>
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => go(s.id)}
                style={{
                  ...styles.navBtn,
                  ...(active === s.id ? styles.navBtnActive : {}),
                }}
              >
                {s.label}
              </button>
            ))}
          </nav>
        </header>

        <main style={styles.main}>
          {active === "intro" && <Intro onNext={() => go("timeline")} />}
          {active === "timeline" && <Timeline onNext={() => go("gallery")} />}
          {active === "gallery" && <Gallery onNext={() => go("gifts")} />}
          {active === "gifts" && <Gifts onNext={() => go("final")} />}
          {active === "final" && <Final onRestart={() => go("intro")} />}
        </main>

        <footer style={styles.footer}>
          <div style={{ opacity: 0.8 }}>Feito por mim, para você.</div>
          <div style={{ opacity: 0.6 }}>Assim como deve ser.</div>
        </footer>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  stage: {
    height: "100vh",
    display: "grid",
    placeItems: "center",
    padding: 18,
  },
  frame: {
    width: 1366,
    height: 768,
    maxWidth: "calc(100vw - 36px)",
    maxHeight: "calc(100vh - 36px)",
    borderRadius: 18,
    background: "var(--panel)",
    border: "1px solid var(--border)",
    boxShadow: "0 18px 60px rgba(0,0,0,0.60)",
    overflow: "hidden",
    display: "grid",
    gridTemplateRows: "76px 1fr 44px",
    backdropFilter: "blur(10px)",
  },
  header: {
    display: "grid",
    gridTemplateColumns: "280px 1fr",
    alignItems: "center",
    padding: "0 18px",
    borderBottom: "1px solid var(--border)",
    background: "var(--wine-night)",
  },
  brand: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 999,
    background: "var(--wine-soft)",
    boxShadow: "0 0 0 4px rgba(138, 76, 99, 0.18)",
  },
  title: {
    fontWeight: 700,
    letterSpacing: 0.2,
  },
  subtitle: {
    fontSize: 12,
    opacity: 0.65,
  },
  nav: {
    justifySelf: "center",
    display: "flex",
    gap: 10,
    padding: 8,
    background: "rgba(43, 20, 29, 0.78)",
    border: "1px solid rgba(138, 76, 99, 0.24)",
    borderRadius: 999,
  },
  navBtn: {
    appearance: "none",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "rgba(138, 76, 99, 0.26)",
    background: "var(--wine-deep)",
    color: "rgba(255,255,255,0.92)",
    padding: "8px 12px",
    borderRadius: 999,
    cursor: "pointer",
    fontSize: 13,
  },
  navBtnActive: {
    background: "var(--wine-night)",
    borderColor: "rgba(138, 76, 99, 0.4)",
    color: "rgba(255,255,255,0.96)",
  },
  main: {
    padding: 18,
    overflow: "hidden",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 18px",
    borderTop: "1px solid var(--border)",
    fontSize: 12,
    background: "rgba(45, 27, 36, 0.5)",
  },
};
