const { Button, Card, Badge, Tag, Icon } = window.OPCGlobalDesignSystem_c086b9 || {};

function StandardRow({ s, onOpen, last }) {
  const [hover, setHover] = React.useState(false);
  const meta = window.OPC_DATA.statusMeta[s.status];
  return (
    <button type="button" onClick={() => onOpen(s)} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: "grid", gridTemplateColumns: "150px minmax(0,1fr) 120px 110px 24px", alignItems: "center", gap: 16, width: "100%", padding: "16px 12px", border: 0, borderBottom: last ? 0 : "1px solid var(--opc-line)", background: hover ? "var(--opc-surface)" : "transparent", textAlign: "left", cursor: "pointer", fontFamily: "var(--font-sans)", color: "var(--text-body)", transition: "background-color var(--dur-base) var(--ease-out)" }}>
      <span style={{ font: "var(--type-mono)", color: "var(--text-muted)" }}>{s.id}</span>
      <span style={{ display: "flex", flexDirection: "column", gap: 2, minWidth: 0 }}>
        <span style={{ fontSize: "var(--text-base)", fontWeight: 600, color: "var(--text-heading)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{s.title}</span>
        <span style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>{s.track}</span>
      </span>
      <span><Badge tone={meta.tone} dot>{meta.label}</Badge></span>
      <span style={{ font: "var(--type-mono)", color: "var(--text-muted)" }}>{s.date}</span>
      <span style={{ color: hover ? "var(--opc-navy)" : "var(--text-faint)", display: "inline-flex" }}><Icon name="chevron-right" /></span>
    </button>
  );
}

function Home({ t, onNavigate, onOpenStandard }) {
  const D = window.OPC_DATA;
  const latest = D.standards.slice().sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, 4);
  return (
    <main>
      <section aria-label="Introduction" style={{ position: "relative", height: 560, background: "var(--opc-navy-deep)", overflow: "hidden" }}>
        <img src={window.OPC_ASSETS + "/brand/opcglobal-brand-hero.jpg"} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,22,38,0.95) 0%, rgba(10,22,38,0.88) 50%, rgba(10,22,38,0.35) 80%, rgba(10,22,38,0) 100%)" }} />
        <Container style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", paddingBottom: 64 }}>
          <Eyebrow dark>{t.eyebrow}</Eyebrow>
          <h1 style={{ font: "var(--type-display)", color: "#fff", marginTop: 16, letterSpacing: "var(--tracking-tight)" }}>{t.headline}</h1>
          <p style={{ font: "var(--type-body-lg)", color: "rgba(255,255,255,0.82)", maxWidth: 620, marginTop: 16 }}>{t.lede}</p>
          <div style={{ display: "flex", gap: 12, marginTop: 32 }}>
            <Button variant="inverse" size="lg" onClick={() => onNavigate("membership")}>{t.cta}</Button>
            <Button variant="ghost" size="lg" style={{ color: "#fff" }} trailing={<Icon name="arrow-right" />} onClick={() => onNavigate("standards")}>{t.cta2}</Button>
          </div>
        </Container>
      </section>

      <section style={{ background: "var(--opc-surface)", padding: "var(--section-y) 0" }}>
        <Container>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24, marginBottom: 40 }}>
            <div><Eyebrow>Three tracks</Eyebrow><h2 style={{ marginTop: 12 }}>Global alliance, standards, and cross-region collaboration.</h2></div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: 24 }}>
            {D.tracks.map((tr) => (
              <Card key={tr.n} eyebrow={"Track " + tr.n} title={tr.title} description={tr.desc} interactive onClick={() => onNavigate(tr.n === "02" ? "standards" : "membership")}
                footer={<span style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "var(--opc-navy)", fontWeight: 600, fontSize: "var(--text-sm)" }}>Learn more <Icon name="arrow-right" size="sm" /></span>} />
            ))}
          </div>
        </Container>
      </section>

      <section style={{ background: "var(--opc-navy)", color: "#fff", padding: "var(--section-y) 0" }}>
        <Container style={{ display: "grid", gridTemplateColumns: "minmax(0,1.4fr) minmax(0,1fr)", gap: 64, alignItems: "center" }}>
          <div>
            <Eyebrow dark>OPC Global · 欧匹赛全球联盟</Eyebrow>
            <p style={{ font: "var(--type-h2)", color: "#fff", marginTop: 20 }}>OPC Global is a global alliance IP for collaboration, standards, and resource connection.</p>
            <p style={{ font: "var(--type-body-lg)", color: "rgba(255,255,255,0.72)", marginTop: 16 }}>欧匹赛全球联盟是面向全球协作、标准与资源连接的 IP。</p>
          </div>
          <div style={{ borderLeft: "1px solid var(--opc-line-gold)", paddingLeft: 32, display: "flex", flexDirection: "column", gap: 16 }}>
            <Eyebrow dark>Who the alliance serves</Eyebrow>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>{D.audiences.map((a) => <Tag key={a} style={{ background: "rgba(255,255,255,0.12)", color: "#fff" }}>{a}</Tag>)}</div>
            <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "var(--text-sm)" }}>Members adopt shared standards, join cross-region working groups, and list resources for one-person companies.</p>
          </div>
        </Container>
      </section>

      <section style={{ padding: "var(--section-y) 0" }}>
        <Container>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24, marginBottom: 24 }}>
            <div><Eyebrow>Standards</Eyebrow><h2 style={{ marginTop: 12 }}>Latest in the library</h2></div>
            <Button variant="secondary" trailing={<Icon name="arrow-right" />} onClick={() => onNavigate("standards")}>Browse all standards</Button>
          </div>
          <div style={{ border: "1px solid var(--opc-line)", borderRadius: "var(--radius-md)", overflow: "hidden", background: "var(--opc-paper)" }}>
            {latest.map((s, i) => <StandardRow key={s.id} s={s} onOpen={onOpenStandard} last={i === latest.length - 1} />)}
          </div>
        </Container>
      </section>

      <section style={{ padding: "0 0 var(--section-y)" }}>
        <Container>
          <div style={{ borderTop: "1px solid var(--opc-line-gold)", paddingTop: 48, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32, flexWrap: "wrap" }}>
            <div><Eyebrow>Membership</Eyebrow><h2 style={{ marginTop: 12 }}>Join the alliance.</h2><p style={{ color: "var(--text-muted)", marginTop: 8 }}>Alliance institutions and international partners. Applications are reviewed within five working days.</p></div>
            <Button size="lg" onClick={() => onNavigate("membership")}>Apply for membership</Button>
          </div>
        </Container>
      </section>
    </main>
  );
}

Object.assign(window, { Home, StandardRow });
