"use client";

import Image from "next/image";

const giftImages = [
  {
    src: "/photos/CamScanner%2006-05-2025%2023.43_1.jpeg",
    alt: "Primeira página",
  },
  {
    src: "/photos/IMG_0453.jpeg",
    alt: "Segunda página",
  },
  {
    src: "/photos/CamScanner%2006-05-2025%2023.44_1.jpeg",
    alt: "Terceira página",
  },
];

export default function Gifts({ onNext }: { onNext: () => void }) {
  return (
    <section style={styles.wrap}>
      <div style={styles.left}>
        <h2 style={styles.h2}>
          Carta da nossa consagração, reescrita por você
        </h2>
        <p style={styles.p}>Do momento que nós fomos entregues a Deus.</p>

        <div className="minimalScroll" style={styles.grid}>
          {giftImages.map((image, index) => (
            <article key={image.src} style={styles.card}>
              <div style={styles.cardHeader}>
                <span style={styles.pill}>PÁGINA {index + 1}</span>
              </div>

              <div style={styles.media}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 60vw"
                  style={styles.image}
                />
              </div>
            </article>
          ))}
        </div>

        <button onClick={onNext} style={styles.primary}>
          Ir pro final →
        </button>
      </div>

      <div style={styles.right}>
        <div style={styles.note}>
          <div style={styles.noteTitle}>Plano inicial</div>
          <div style={styles.noteText}>
            Foi engraçado que o que foi feito nessa quinta-feira no santuário,
            dia 10 de abril, seria o que eu estava planejando fazer no momento
            que eu te pedisse em namoro, já na frente do Sacrário. E com
            cerimôniazinha até (privada, obviamente). Foi bom do jeito que foi,
            e fazer isso depois.
          </div>
        </div>

        <div style={styles.panel}>
          <div style={styles.panelTitle}>Imprevisto</div>
          <div style={styles.panelText}>
            Fora a hora exata que surgiu 15 mil seres humanos em volta no
            momento que lemos a carta, que até hoje eu acho que foi de
            propósito.
          </div>
        </div>
      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrap: {
    height: "100%",
    display: "grid",
    gridTemplateColumns: "1.25fr 0.75fr",
    gap: 16,
  },
  left: {
    borderRadius: 18,
    padding: 22,
    background: "var(--panel)",
    border: "1px solid var(--border)",
    borderColor: "rgba(138, 76, 99, 0.32)",
    overflow: "hidden",
    display: "grid",
    gridTemplateRows: "auto auto minmax(0, 1fr) auto",
  },
  right: { display: "grid", gap: 16 },
  h2: { margin: 0, fontSize: 28 },
  p: { marginTop: 8, opacity: 0.75, lineHeight: 1.55, maxWidth: 720 },
  grid: {
    marginTop: 14,
    display: "grid",
    gap: 12,
    overflowY: "auto",
    paddingRight: 6,
    minHeight: 0,
  },
  card: {
    borderRadius: 18,
    padding: 12,
    background: "rgba(255,255,255,0.03)",
    border: "1px solid var(--border)",
    borderColor: "rgba(138, 76, 99, 0.32)",
    display: "grid",
    gap: 10,
  },
  cardHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  pill: {
    fontSize: 11,
    padding: "4px 8px",
    borderRadius: 999,
    border: "1px solid rgba(138, 76, 99, 0.34)",
    opacity: 0.85,
  },
  media: {
    position: "relative",
    width: "100%",
    minHeight: 340,
    height: 420,
    borderRadius: 14,
    overflow: "hidden",
    background: "rgba(51, 64, 50, 0.24)",
    border: "1px solid rgba(184, 163, 151, 0.16)",
  },
  image: {
    objectFit: "contain",
  },
  primary: {
    marginTop: 16,
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
  note: {
    borderRadius: 18,
    padding: 18,
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(138, 76, 99, 0.32)",
  },
  noteTitle: { fontWeight: 700, marginBottom: 8 },
  noteText: { opacity: 0.9, lineHeight: 1.55 },
  panel: {
    borderRadius: 18,
    padding: 18,
    background: "rgba(255,255,255,0.03)",
    border: "1px solid var(--border)",
    borderColor: "rgba(138, 76, 99, 0.32)",
  },
  panelTitle: { fontWeight: 700, marginBottom: 8 },
  panelText: { opacity: 0.85, lineHeight: 1.6 },
};
