"use client";

import { useState } from "react";

export default function Final({ onRestart }: { onRestart: () => void }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <section style={styles.wrap}>
      <div style={styles.card}>
        <h2 style={styles.h2}>O que nós somos</h2>

        <p style={styles.p}>
          Não é sobre uma data. É sobre o que a gente vem construindo com
          constância.
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
              background: revealed
                ? "rgba(255,255,255,0.10)"
                : "rgba(176, 79, 255, 0.20)",
            }}
          >
            {revealed ? "Ocultar" : "Revelar"}
          </button>

          <div
            style={{ ...styles.message, ...(revealed ? styles.messageOn : {}) }}
          >
            <p style={{ marginTop: 0 }}>
              Fernanda, isso aqui não é sobre um dia específico. É sobre tudo
              que a gente vem sustentando até aqui.
            </p>

            <p>
              Eu não estou com você por impulso, nem por momento. Eu estou com
              você porque escolhi — e continuo escolhendo.
            </p>

            <p>
              E enquanto depender de mim, isso aqui vai ser conduzido com
              seriedade, respeito e direção.
            </p>

            <p style={{ marginBottom: 0, opacity: 0.78 }}>— Gustavo</p>
          </div>
        </div>

        <div style={styles.row}>
          <button onClick={onRestart} style={styles.secondary}>
            Reiniciar
          </button>
          <div style={{ opacity: 0.65, fontSize: 12 }}>
            Se quiser mudar o texto, edita direto aqui no arquivo.
          </div>
        </div>
      </div>

      <div style={styles.side}>
        <div style={styles.sideCard}>
          <div style={styles.badge}>Sobre isso</div>

          <p style={styles.sideText}>
            Não foi feito pra ser perfeito. Foi feito pra ser verdadeiro.
          </p>

          <p style={styles.sideMuted}>E isso é o que importa.</p>
        </div>

        <div style={styles.sideCard}>
          <div style={styles.badge}>Constância</div>

          <p style={styles.sideText}>
            O valor não está em um momento. Está em continuar, mesmo quando não
            é fácil.
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
    background: "rgba(255,255,255,0.06)",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "rgba(255,255,255,0.12)",
    overflow: "hidden",
  },
  h2: { margin: 0, fontSize: 28 },
  p: { marginTop: 8, opacity: 0.75, lineHeight: 1.55, maxWidth: 720 },
  box: {
    marginTop: 14,
    borderRadius: 18,
    padding: 16,
    background: "rgba(0,0,0,0.22)",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "rgba(255,255,255,0.10)",
    display: "grid",
    gap: 12,
  },
  lock: {
    width: 34,
    height: 34,
    borderRadius: 12,
    display: "grid",
    placeItems: "center",
    background: "rgba(255,255,255,0.08)",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "rgba(255,255,255,0.12)",
  },
  primary: {
    justifySelf: "start",
    appearance: "none",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "rgba(255,255,255,0.18)",
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
    borderColor: "rgba(255,255,255,0.14)",
    background: "rgba(255,255,255,0.06)",
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
    background: "rgba(255,255,255,0.04)",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "rgba(255,255,255,0.10)",
  },
  badge: {
    display: "inline-block",
    padding: "6px 10px",
    borderRadius: 999,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "rgba(255,255,255,0.14)",
    background: "rgba(255,255,255,0.05)",
    fontSize: 12,
    opacity: 0.9,
    marginBottom: 10,
  },
  sideText: { margin: 0, lineHeight: 1.6, opacity: 0.9 },
  sideMuted: { marginTop: 10, marginBottom: 0, opacity: 0.55, fontSize: 12 },
};
