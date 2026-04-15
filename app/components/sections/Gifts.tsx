"use client";

import { useMemo, useState } from "react";

const gifts = [
  {
    title: "O que eu admiro em você",
    content: "A forma como você se entrega, mesmo quando não é fácil.",
  },
  {
    title: "O que você mudou em mim",
    content:
      "Você me fez ser mais responsável com aquilo que realmente importa.",
  },
  {
    title: "O que eu quero construir com você",
    content: "Algo estável, limpo e certo — sem bagunça, sem meio termo.",
  },
  {
    title: "A minha escolha",
    content:
      "Eu não estou com você por acaso. Eu escolho você, conscientemente.",
  },
];

export default function Gifts({ onNext }: { onNext: () => void }) {
  const [opened, setOpened] = useState<number[]>([]);

  const openCount = opened.length;
  const allOpen = openCount === gifts.length;

  const toggle = (idx: number) => {
    setOpened((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx],
    );
  };

  const progress = useMemo(
    () => Math.round((openCount / gifts.length) * 100),
    [openCount],
  );

  return (
    <section style={styles.wrap}>
      <div style={styles.left}>
        <h2 style={styles.h2}>Caixa de presentes</h2>
        <p style={styles.p}>
          Clica pra abrir. Isso aqui é “surpresa sem infantilidade”: simples e
          certeiro.
        </p>

        <div style={styles.barWrap}>
          <div style={styles.barTop}>
            <span style={{ opacity: 0.75 }}>Progresso</span>
            <span style={{ opacity: 0.9, fontWeight: 700 }}>{progress}%</span>
          </div>
          <div style={styles.bar}>
            <div style={{ ...styles.barFill, width: `${progress}%` }} />
          </div>
        </div>

        <div style={styles.grid}>
          {gifts.map((g, idx) => {
            const isOpen = opened.includes(idx);
            return (
              <button
                key={g.title}
                onClick={() => toggle(idx)}
                style={{ ...styles.card, ...(isOpen ? styles.cardOpen : {}) }}
              >
                <div style={styles.cardTitle}>
                  <span style={styles.pill}>
                    {isOpen ? "ABERTO" : "FECHADO"}
                  </span>
                  <span style={{ fontWeight: 800 }}>{g.title}</span>
                </div>

                <div
                  style={{
                    ...styles.cardBody,
                    ...(isOpen ? styles.cardBodyOpen : {}),
                  }}
                >
                  {g.content}
                </div>
              </button>
            );
          })}
        </div>

        <button
          onClick={onNext}
          disabled={!allOpen}
          style={{
            ...styles.primary,
            ...(allOpen ? {} : styles.primaryDisabled),
          }}
          title={allOpen ? "" : "Abra todos primeiro"}
        >
          Ir pro final →
        </button>
      </div>

      <div style={styles.right}>
        <div style={styles.note}>
          <div style={styles.noteTitle}>Troca rápida</div>
          <div style={styles.noteText}>
            Em <code>Gifts.tsx</code>, edita o array <code>gifts</code>. Não
            inventa complexidade. Você tá com pressa.
          </div>
        </div>

        <div style={styles.panel}>
          <div style={styles.panelTitle}>Regra de ouro</div>
          <div style={styles.panelText}>
            Nada de texto longo. Presente bom é objetivo: <b>uma frase</b> que
            diz o que precisa ser dito.
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
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)",
    overflow: "hidden",
  },
  right: { display: "grid", gap: 16 },
  h2: { margin: 0, fontSize: 28 },
  p: { marginTop: 8, opacity: 0.75, lineHeight: 1.55, maxWidth: 720 },

  barWrap: {
    marginTop: 14,
    borderRadius: 16,
    padding: 12,
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.10)",
  },
  barTop: { display: "flex", justifyContent: "space-between", marginBottom: 8 },
  bar: {
    height: 10,
    borderRadius: 999,
    background: "rgba(255,255,255,0.10)",
    overflow: "hidden",
  },
  barFill: {
    height: "100%",
    borderRadius: 999,
    background: "rgba(176, 79, 255, 0.65)",
    boxShadow: "0 0 18px rgba(176,79,255,0.35)",
  },

  grid: {
    marginTop: 14,
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 12,
    maxHeight: 420,
    overflow: "auto",
    paddingRight: 6,
  },
  card: {
    textAlign: "left",
    appearance: "none",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.04)",
    borderRadius: 18,
    padding: 14,
    cursor: "pointer",
    color: "rgba(255,255,255,0.92)",
  },
  cardOpen: {
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "rgba(176, 79, 255, 0.45)",
    background: "rgba(176, 79, 255, 0.10)",
  },
  cardTitle: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginBottom: 8,
  },
  pill: {
    fontSize: 11,
    padding: "4px 8px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.14)",
    opacity: 0.85,
  },
  cardBody: {
    opacity: 0.0,
    maxHeight: 0,
    overflow: "hidden",
    transition: "all 180ms ease",
    lineHeight: 1.5,
  },
  cardBodyOpen: {
    opacity: 0.9,
    maxHeight: 140,
    marginTop: 8,
  },

  primary: {
    marginTop: 16,
    appearance: "none",
    border: "1px solid rgba(255,255,255,0.18)",
    background: "rgba(176, 79, 255, 0.20)",
    color: "rgba(255,255,255,0.95)",
    padding: "12px 16px",
    borderRadius: 14,
    cursor: "pointer",
    fontWeight: 600,
  },
  primaryDisabled: {
    opacity: 0.5,
    cursor: "not-allowed",
  },

  note: {
    borderRadius: 18,
    padding: 18,
    background: "rgba(176, 79, 255, 0.10)",
    border: "1px solid rgba(176, 79, 255, 0.25)",
  },
  noteTitle: { fontWeight: 700, marginBottom: 8 },
  noteText: { opacity: 0.9, lineHeight: 1.55 },

  panel: {
    borderRadius: 18,
    padding: 18,
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.10)",
  },
  panelTitle: { fontWeight: 700, marginBottom: 8 },
  panelText: { opacity: 0.85, lineHeight: 1.6 },
};
