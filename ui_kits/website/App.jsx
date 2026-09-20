const DS = window.OPCGlobalDesignSystem_c086b9;

function MissingBundle() {
  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 24, fontFamily: "var(--font-sans)", color: "var(--text-body)" }}>
      <div style={{ maxWidth: 480, border: "1px solid var(--opc-line)", borderRadius: "var(--radius-md)", padding: 24 }}>
        <div style={{ font: "var(--type-h3)", color: "var(--text-heading)" }}>Design-system bundle not compiled yet</div>
        <p style={{ color: "var(--text-muted)", marginTop: 8 }}>This kit composes components from <code>_ds_bundle.js</code>, which is generated when the project compiles. Reload after the next turn.</p>
      </div>
    </div>
  );
}

function App() {
  const D = window.OPC_DATA;
  const [page, setPage] = React.useState(() => (location.hash || "#home").slice(1));
  const [lang, setLang] = React.useState("en");
  const [toasts, setToasts] = React.useState([]);
  const [std, setStd] = React.useState(null);
  const t = D.i18n[lang];
  const notify = React.useCallback((toast) => setToasts((ts) => [...ts, { id: Date.now() + Math.random(), ...toast }]), []);
  const dismiss = (id) => setToasts((ts) => ts.filter((x) => x.id !== id));
  const navigate = (p) => {
    if (p === "resources") { notify({ tone: "neutral", title: "Resources is not part of this kit", description: "Only Home, Standards, and Membership are composed." }); return; }
    setPage(p); location.hash = p; window.scrollTo(0, 0);
  };
  React.useEffect(() => { const h = () => setPage((location.hash || "#home").slice(1)); window.addEventListener("hashchange", h); return () => window.removeEventListener("hashchange", h); }, []);
  const { Dialog, Button, Badge, Toast, ToastViewport, Icon } = DS;
  const meta = std && D.statusMeta[std.status];
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "var(--surface-page)" }}>
      <SiteNav page={page} onNavigate={navigate} lang={lang} setLang={setLang} t={t} />
      {page === "standards" ? <Standards onOpenStandard={setStd} notify={notify} /> : page === "membership" ? <Membership notify={notify} /> : <Home t={t} onNavigate={navigate} onOpenStandard={setStd} />}
      <SiteFooter onNavigate={navigate} />
      <Dialog open={!!std} onClose={() => setStd(null)} title={std ? std.title : ""} description={std ? std.summary : ""}
        footer={<><Button variant="ghost" onClick={() => setStd(null)}>Close</Button><Button leading={<Icon name="download" />} onClick={() => { notify({ tone: "success", title: "Download started", description: std.id + " " + std.version + " (PDF)" }); setStd(null); }}>Download PDF</Button></>}>
        {std && (
          <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", font: "var(--type-mono)", color: "var(--text-muted)" }}>
            <span>{std.id}</span><span>·</span><span>{std.version}</span><span>·</span><span>Updated {std.date}</span><Badge tone={meta.tone} dot>{meta.label}</Badge><Badge>{std.track}</Badge>
          </div>
        )}
      </Dialog>
      <ToastViewport>{toasts.map((x) => <Toast key={x.id} tone={x.tone} title={x.title} description={x.description} onDismiss={() => dismiss(x.id)} duration={6000} />)}</ToastViewport>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(DS ? <App /> : <MissingBundle />);
