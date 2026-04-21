"use client";

import { useState } from "react";

export default function Final({ onRestart }: { onRestart: () => void }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <section style={styles.wrap}>
      <div style={styles.card}>
        <h2 style={styles.h2}>O que quero pra nós</h2>

        <p style={styles.p}>
          Além de casar com você, passar décadas te chamando de linda e te
          tratando igual uma princesa e futura rainha...
        </p>

        <div style={styles.box}>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <span style={styles.lock}>{revealed ? "✓" : "🔒"}</span>
            <div>
              <div style={{ fontWeight: 800 }}>Mensagem final</div>
              <div style={{ opacity: 0.65, fontSize: 12 }}>
                Clique pra revelar
              </div>
            </div>
          </div>

          <button
            onClick={() => setRevealed((v) => !v)}
            style={{
              ...styles.primary,
              background: revealed ? "var(--wine-deep)" : "var(--wine)",
            }}
          >
            {revealed ? "Ocultar" : "Revelar"}
          </button>

          <div
            style={{ ...styles.message, ...(revealed ? styles.messageOn : {}) }}
          >
            <p style={{ marginTop: 0 }}>
              <strong>Fernanda Gabriela de Moraes Cardoso Jarabiza</strong>, por
              mais um ano, eu reafirmo a minha vontade absoluta, concreta,
              convicta, definitiva e sem reservas de estar ao seu lado por toda
              a minha vida até eu morrer. E renovo minha decisão de te amar
              muito, muito, muito e muito todos os dias, de todas as formas e
              com toda a manifestação. Se assim Deus quiser, e assim todos os
              santos intercederem, assim vai ser.
            </p>

            <p>Por mais um ano eu escolho você, e unicamente você.</p>

            <p style={{ marginBottom: 0, opacity: 0.78 }}>
              {" "}
              <strong> — Gustavo Themyus Freitas Lima</strong>
            </p>
          </div>
        </div>

        <div style={styles.row}>
          <button onClick={onRestart} style={styles.secondary}>
            Reiniciar
          </button>
          <div style={{ opacity: 0.65, fontSize: 12 }}>
            Sempre que quiser ver
          </div>
        </div>
      </div>

      <div style={styles.side}>
        <div style={styles.sideCard}>
          <div style={styles.badge}>Pra que possamos chegar lá</div>

          <p style={styles.sideText}>
            É necessário que sejamos atentos às necessidades do outro, ao que o
            outro tem a dizer, o que ele precisa. Que sejamos sempre
            comunicativos, perguntando, ouvindo, acolhendo e considerando.
            Porque é assim que uma parceria funciona, e principalmente uma
            parceria de trincheira, que caminha pra ser a parceria da vida. Que
            o que pensamos, sentimos, enfrentamos não seja oculto ao outro, mas
            sempre compartilhado. Do namoro até o casamento é uma jornada, e
            essas coisas fazem parte dela. E ela precisa estar toda visível a
            luz pra não tropeçarmos.
          </p>

          <p style={styles.sideMuted}>E isso é o que importa.</p>
        </div>

        <div style={styles.sideCard}>
          <div style={styles.badge}>Constância</div>

          <p style={styles.sideText}>
            O valor está em ser presente, ouvinte, solícito, servente, suporte e
            intercessor no pior momento do outro. E assim, aprendeu a amar para
            sempre.
          </p>
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
  card: {
    height: "100%",
    borderRadius: 18,
    padding: 22,
    background: "var(--panel)",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "rgba(138, 76, 99, 0.32)",
    overflow: "hidden",
  },
  h2: { margin: 0, fontSize: 28 },
  p: { marginTop: 8, opacity: 0.75, lineHeight: 1.55, maxWidth: 720 },
  box: {
    marginTop: 14,
    borderRadius: 18,
    padding: 16,
    background: "rgba(51, 64, 50, 0.24)",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "rgba(138, 76, 99, 0.32)",
    display: "grid",
    gap: 12,
  },
  lock: {
    width: 34,
    height: 34,
    borderRadius: 12,
    display: "grid",
    placeItems: "center",
    background: "rgba(106, 47, 69, 0.2)",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "rgba(138, 76, 99, 0.34)",
  },
  primary: {
    justifySelf: "start",
    appearance: "none",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "rgba(138, 76, 99, 0.42)",
    background: "var(--wine)",
    color: "rgba(255,255,255,0.95)",
    padding: "10px 14px",
    borderRadius: 14,
    cursor: "pointer",
    fontWeight: 600,
  },
  message: {
    opacity: 0,
    maxHeight: 0,
    overflow: "hidden",
    transition: "all 180ms ease",
    lineHeight: 1.6,
  },
  messageOn: {
    opacity: 0.95,
    maxHeight: 220,
    marginTop: 6,
  },
  row: {
    marginTop: 16,
    display: "flex",
    alignItems: "center",
    gap: 12,
  },
  secondary: {
    appearance: "none",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "rgba(138, 76, 99, 0.3)",
    background: "var(--wine)",
    color: "rgba(255,255,255,0.9)",
    padding: "10px 14px",
    borderRadius: 14,
    cursor: "pointer",
    fontWeight: 600,
  },
  side: { display: "grid", gap: 16 },
  sideCard: {
    borderRadius: 18,
    padding: 18,
    background: "rgba(255,255,255,0.03)",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "rgba(138, 76, 99, 0.32)",
  },
  badge: {
    display: "inline-block",
    padding: "6px 10px",
    borderRadius: 999,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "rgba(138, 76, 99, 0.34)",
    background: "rgba(106, 47, 69, 0.18)",
    fontSize: 12,
    opacity: 0.9,
    marginBottom: 10,
  },
  sideText: { margin: 0, lineHeight: 1.6, opacity: 0.9 },
  sideMuted: { marginTop: 10, marginBottom: 0, opacity: 0.55, fontSize: 12 },
};
