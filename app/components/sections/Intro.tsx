"use client";

export default function Intro({ onNext }: { onNext: () => void }) {
  return (
    <section style={styles.wrap}>
      <div style={styles.card}>
        <div style={styles.kicker}>
          Uma melhoria que eu tava querendo fazer há um tempo da Nossa Linha
          Digital
        </div>

        <h1 style={styles.h1}>Nosso dia</h1>

        <p style={styles.p}>
          Isso é só uma parte do que a gente construiu até aqui. Ainda terá
          muito mais.
        </p>

        <p style={styles.p}>
          E você sabe que eu não faço nada pela metade e jamais vou fazer. Eu só
          quero o puro suco da excelência.
        </p>

        <div style={styles.row}>
          <button onClick={onNext} style={styles.primary}>
            Começar →
          </button>
        </div>
      </div>

      <div style={styles.side}>
        <div className="minimalScroll" style={styles.sideCard}>
          <div style={styles.badge}>Mensagem</div>

          <p style={styles.sideText}>
            Que eu gosto muito, muito, muito de você, isso você já sabe. Que eu
            te amo muito também. Mas muito mais do que isso, eu daria mesmo o
            que eu não tenho por você e por nós dois. Sonho todos os dias com a
            nossa família na nossa casa, tirando muitas fotos e guardando 15 mil
            momentos juntos que nem o Céu vai deixar de lado. Porque é um Céu
            aqui que eu já quero te dar.
          </p>

          <p style={styles.sideMuted}>
            Porque é de lá que você roubou o aroma.
          </p>
        </div>

        <div className="minimalScroll" style={styles.sideCard}>
          <div style={styles.badge}>Sobre nós</div>

          <p style={styles.sideText}>
            Amo muito os seus olhos, gosto muito da sensação de perfume da vida
            que você tem só de olhar pra você e sentir seu cheiro. Amo quando
            você escolhe palavras que reforçam a minha natureza. Amo seus gestos
            de cuidado e quando você mostra o quanto se importa. Amo a paz que a
            sua presença me dá. Amo o toque absurdo de bom que você tem, o
            acolhimento das suas palavras que eu aprecio muito quando você faz,
            que mais do que desaceleram a minha cabeça e talvez você nem imagina
            isso, nem o quanto. Por essas coisas e muito mais eu sei que é você
            que eu quero passar o resto da minha vida, e 1 ano ainda é muito
            pouco pra mim, e pra história que queremos escrever.
          </p>

          <p style={styles.sideMuted}>E história a gente vai ter.</p>
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
    border: "1px solid var(--border)",
    borderColor: "rgba(138, 76, 99, 0.32)",
    boxShadow: "0 14px 50px rgba(0,0,0,0.55)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  kicker: { opacity: 0.7, marginBottom: 10 },
  h1: { margin: 0, fontSize: 44, letterSpacing: 0.2 },
  p: { marginTop: 12, opacity: 0.85, lineHeight: 1.55, maxWidth: 720 },
  row: {
    marginTop: 18,
    display: "flex",
    alignItems: "center",
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
  },
  side: {
    display: "grid",
    gridTemplateRows: "1fr 1fr",
    gap: 16,
    overflow: "hidden",
  },
  sideCard: {
    borderRadius: 18,
    padding: 18,
    background: "rgba(255,255,255,0.03)",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "rgba(138, 76, 99, 0.32)",
    overflowY: "auto",

    scrollbarWidth: "thin", // Firefox
  },
  badge: {
    display: "inline-block",
    padding: "6px 10px",
    borderRadius: 999,
    border: "1px solid rgba(138, 76, 99, 0.34)",
    background: "rgba(106, 47, 69, 0.18)",
    fontSize: 12,
    opacity: 0.9,
    marginBottom: 10,
  },
  sideText: {
    margin: 0,
    lineHeight: 1.6,
    opacity: 0.9,
    fontSize: 14,
  },
  sideMuted: { marginTop: 10, marginBottom: 0, opacity: 0.55, fontSize: 12 },
};
