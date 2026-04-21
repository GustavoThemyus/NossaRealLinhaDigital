"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const photos = [
  "/photos/IMG_0510.jpeg",
  "/photos/784cb32d-c28a-4a6e-9c59-c1172c445f41.jpeg",
  "/photos/6f8bf220-833c-47ad-90bc-d8543c831d6e.jpeg",
  "/photos/ff00dbf5-de66-4af1-a34b-f89966a19a45.jpeg",
  "/photos/dbfb6288-ddf9-4d2f-ab97-a730198a6dd9.jpeg",
  "/photos/66a1de24-ed80-4570-916c-6c6346de8ea9.jpeg",
];

export default function Gallery({ onNext }: { onNext: () => void }) {
  const [active, setActive] = useState(0);

  const current = useMemo(() => photos[active] ?? photos[0], [active]);

  return (
    <section style={styles.wrap}>
      <div style={styles.viewer}>
        <div style={styles.viewerInner}>
          <Image
            src={current}
            alt="Foto"
            fill
            style={{ objectFit: "cover", borderRadius: 18 }}
            priority
          />
        </div>

        <div style={styles.caption}>
          <div style={{ fontWeight: 700 }}>Galeria</div>
          <div style={{ opacity: 0.7, fontSize: 12 }}>
            Clique nas miniaturas
          </div>
        </div>
      </div>

      <div style={styles.side}>
        <div className="minimalScroll" style={styles.grid}>
          {photos.map((p, i) => (
            <button
              key={p}
              onClick={() => setActive(i)}
              style={{
                ...styles.thumbBtn,
                ...(i === active ? styles.thumbBtnActive : {}),
              }}
              title={`Foto ${i + 1}`}
            >
              <div style={styles.thumb}>
                <Image
                  src={p}
                  alt={`Miniatura ${i + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </button>
          ))}
        </div>

        <div style={styles.panel}>
          <div style={styles.panelTitle}>Legenda rápida</div>
          <textarea
            className="minimalScroll"
            defaultValue={"Te amo em todos os momentos."}
            style={styles.textarea}
          />
          <button onClick={onNext} style={styles.primary}>
            Próximo: Caixa →
          </button>
        </div>
      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrap: {
    height: "100%",
    display: "grid",
    gridTemplateColumns: "1.2fr 0.8fr",
    gap: 16,
  },
  viewer: {
    borderRadius: 18,
    padding: 14,
    background: "var(--panel)",
    border: "1px solid var(--border)",
    borderColor: "rgba(138, 76, 99, 0.32)",
    display: "grid",
    gridTemplateRows: "1fr auto",
    gap: 12,
    overflow: "hidden",
  },
  viewerInner: {
    position: "relative",
    borderRadius: 18,
    overflow: "hidden",
    border: "1px solid var(--border)",
  },
  caption: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    padding: "0 4px",
  },
  side: {
    display: "grid",
    gridTemplateRows: "minmax(0, auto) minmax(0, 1fr)",
    gap: 16,
    overflow: "hidden",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 10,
    overflowY: "auto",
    maxHeight: "100%",
    paddingRight: 6,
  },
  thumbBtn: {
    appearance: "none",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "rgba(138, 76, 99, 0.24)",
    background: "rgba(59, 21, 35, 0.7)",
    borderRadius: 16,
    padding: 8,
    cursor: "pointer",
  },
  thumbBtnActive: {
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "rgba(138, 76, 99, 0.4)",
    background: "rgba(106, 47, 69, 0.16)",
  },
  thumb: {
    position: "relative",
    width: "100%",
    aspectRatio: "1 / 1",
    borderRadius: 12,
    overflow: "hidden",
  },
  panel: {
    borderRadius: 18,
    padding: 18,
    background: "rgba(255,255,255,0.03)",
    border: "1px solid var(--border)",
    borderColor: "rgba(138, 76, 99, 0.32)",
    display: "grid",
    gridTemplateRows: "auto 1fr auto",
    gap: 12,
  },
  panelTitle: { fontWeight: 700 },
  textarea: {
    width: "100%",
    resize: "none",
    borderRadius: 14,
    border: "1px solid rgba(138, 76, 99, 0.3)",
    background: "rgba(255,255,255,0.03)",
    color: "rgba(255,255,255,0.9)",
    padding: 12,
    outline: "none",
    lineHeight: 1.5,
    minHeight: 200,
  },
  primary: {
    appearance: "none",
    border: "1px solid rgba(138, 76, 99, 0.42)",
    background: "var(--wine)",
    color: "rgba(255,255,255,0.95)",
    padding: "12px 16px",
    borderRadius: 14,
    cursor: "pointer",
    fontWeight: 600,
    justifySelf: "start",
  },
};
