const DS = window.OPCGlobalDesignSystem_c086b9 || {};
const { Logo, Button, Tabs, Icon } = DS;
const ASSETS = "../../assets";

function Container({ children, style, narrow }) {
  return <div style={{ maxWidth: narrow ? "var(--container-narrow)" : "var(--container-max)", margin: "0 auto", padding: "0 var(--gutter)", boxSizing: "border-box", ...style }}>{children}</div>;
}

function Eyebrow({ children, dark, style }) {
  return <div style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: dark ? "var(--opc-gold)" : "var(--opc-gold-deep)", ...style }}>{children}</div>;
}

function PageHeader({ eyebrow, title, lede, aside }) {
  return (
    <div style={{ borderBottom: "1px solid var(--opc-line)", background: "var(--opc-paper)" }}>
      <Container style={{ padding: "56px var(--gutter) 40px", display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 32, flexWrap: "wrap" }}>
        <div style={{ maxWidth: 680, display: "flex", flexDirection: "column", gap: 12 }}>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 style={{ font: "var(--type-h1)", color: "var(--text-heading)" }}>{title}</h1>
          {lede && <p style={{ font: "var(--type-body-lg)", color: "var(--text-muted)" }}>{lede}</p>}
        </div>
        {aside}
      </Container>
    </div>
  );
}

function NavLink({ active, onClick, children }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button type="button" onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} aria-current={active ? "page" : undefined}
      style={{ position: "relative", height: "var(--nav-height)", padding: "0 2px", border: 0, background: "none", cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: "var(--text-base)", fontWeight: 600, color: active || hover ? "var(--opc-navy)" : "var(--text-muted)", transition: "color var(--dur-base) var(--ease-out)" }}>
      {children}
      <span aria-hidden="true" style={{ position: "absolute", left: 0, right: 0, bottom: -1, height: 2, background: active ? "var(--opc-gold)" : "transparent" }} />
    </button>
  );
}

function SiteNav({ page, onNavigate, lang, setLang, t }) {
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(255,255,255,0.85)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", borderBottom: "1px solid var(--opc-line)" }}>
      <Container style={{ display: "flex", alignItems: "center", gap: 40, height: "var(--nav-height)" }}>
        <button type="button" onClick={() => onNavigate("home")} aria-label="OPC Global home" style={{ border: 0, background: "none", padding: 0, cursor: "pointer", display: "inline-flex" }}>
          <Logo assetsBase={ASSETS + "/logo"} height={32} withName />
        </button>
        <nav aria-label="Primary" style={{ display: "flex", alignItems: "center", gap: 28, flex: 1 }}>
          <NavLink active={page === "home"} onClick={() => onNavigate("home")}>{t.alliance}</NavLink>
          <NavLink active={page === "standards"} onClick={() => onNavigate("standards")}>{t.standards}</NavLink>
          <NavLink active={page === "membership"} onClick={() => onNavigate("membership")}>{t.membership}</NavLink>
          <NavLink onClick={() => onNavigate("resources")}>{t.resources}</NavLink>
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Tabs variant="segmented" size="sm" items={[{ id: "en", label: "EN" }, { id: "zh", label: "中文" }]} value={lang} onChange={setLang} aria-label="Language" />
          <Button size="sm" onClick={() => onNavigate("membership")}>{t.apply}</Button>
        </div>
      </Container>
    </header>
  );
}

function FooterCol({ title, links, onNavigate }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <div style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--opc-gold)", marginBottom: 4 }}>{title}</div>
      {links.map((l) => <a key={l.label} href="#" onClick={(e) => { e.preventDefault(); onNavigate(l.page || "resources"); }} style={{ color: "rgba(255,255,255,0.78)", fontSize: "var(--text-sm)" }}>{l.label}</a>)}
    </div>
  );
}

function SiteFooter({ onNavigate }) {
  return (
    <footer style={{ background: "var(--opc-navy-deep)", color: "#fff", marginTop: "auto" }}>
      <Container style={{ padding: "56px var(--gutter) 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1.6fr) repeat(3, minmax(0,1fr))", gap: 40 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <Logo assetsBase={ASSETS + "/logo"} variant="white" height={40} withName bilingual />
            <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "var(--text-sm)", maxWidth: 360 }}>Global alliance, standards, and cross-region collaboration.<br />全球联盟、标准建设与跨区域协作。</p>
          </div>
          <FooterCol title="Alliance" onNavigate={onNavigate} links={[{ label: "About the alliance", page: "home" }, { label: "Institutions" }, { label: "Partners" }, { label: "Annual assembly" }]} />
          <FooterCol title="Standards" onNavigate={onNavigate} links={[{ label: "Standards library", page: "standards" }, { label: "Working groups" }, { label: "Comment periods", page: "standards" }, { label: "Ratification record" }]} />
          <FooterCol title="Membership" onNavigate={onNavigate} links={[{ label: "Apply", page: "membership" }, { label: "Member directory" }, { label: "Resource registry" }, { label: "Contact" }]} />
        </div>
        <div style={{ borderTop: "1px solid rgba(183,155,99,0.35)", marginTop: 40, paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap", color: "rgba(255,255,255,0.56)", fontSize: "var(--text-xs)" }}>
          <span>© 2026 OPC Global · 欧匹赛全球联盟 · One Person Company Alliance</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><Icon name="globe" size="sm" /> opcglobal.ai</span>
        </div>
      </Container>
    </footer>
  );
}

Object.assign(window, { Container, Eyebrow, PageHeader, SiteNav, SiteFooter, OPC_ASSETS: ASSETS });
