const { Button, Card, Badge, Tag, Tabs, Input, Switch, Icon } = window.OPCGlobalDesignSystem_c086b9 || {};

function Standards({ onOpenStandard, notify }) {
  const D = window.OPC_DATA;
  const [tab, setTab] = React.useState("all");
  const [q, setQ] = React.useState("");
  const [tracks, setTracks] = React.useState([]);
  const toggleTrack = (tr) => setTracks(tracks.includes(tr) ? tracks.filter((x) => x !== tr) : [...tracks, tr]);
  const count = (st) => D.standards.filter((s) => st === "all" || s.status === st).length;
  const list = D.standards.filter((s) => (tab === "all" || s.status === tab) && (!tracks.length || tracks.includes(s.track)) && (!q || (s.title + " " + s.id).toLowerCase().includes(q.toLowerCase())));
  const review = D.standards.filter((s) => s.status === "review");
  return (
    <main>
      <PageHeader eyebrow="Standards" title="Standards library" lede="Shared definitions, frameworks, and procedures ratified by the alliance. Drafts are open for member comment before ratification."
        aside={<div style={{ display: "flex", gap: 8 }}><Badge tone="success" dot>{count("ratified") + " ratified"}</Badge><Badge tone="warning" dot>{count("review") + " in review"}</Badge><Badge tone="info" dot>{count("draft") + " draft"}</Badge></div>} />
      <Container style={{ padding: "40px var(--gutter) var(--section-y)", display: "grid", gridTemplateColumns: "minmax(0,1fr) 300px", gap: 40, alignItems: "start" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
            <Tabs items={[{ id: "all", label: "All", count: count("all") }, { id: "draft", label: "Draft", count: count("draft") }, { id: "review", label: "In review", count: count("review") }, { id: "ratified", label: "Ratified", count: count("ratified") }]} value={tab} onChange={setTab} />
            <Input size="sm" placeholder="Search by title or ID" value={q} onChange={(e) => setQ(e.target.value)} leading={<Icon name="search" size="sm" />} fullWidth={false} style={{ width: 260 }} />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, margin: "20px 0", flexWrap: "wrap" }}>
            <span style={{ font: "var(--type-small)", color: "var(--text-muted)", marginRight: 4 }}>Track</span>
            {D.tracks.map((tr) => <Tag key={tr.title} selected={tracks.includes(tr.title)} onSelect={() => toggleTrack(tr.title)}>{tr.title}</Tag>)}
            {tracks.length > 0 && <Button variant="ghost" size="sm" onClick={() => setTracks([])}>Clear</Button>}
          </div>
          <div style={{ border: "1px solid var(--opc-line)", borderRadius: "var(--radius-md)", overflow: "hidden", background: "var(--opc-paper)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "150px minmax(0,1fr) 120px 110px 24px", gap: 16, padding: "10px 12px", borderBottom: "1px solid var(--opc-line)", background: "var(--opc-surface)", font: "var(--type-eyebrow)", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-muted)" }}>
              <span>ID</span><span>Standard</span><span>Status</span><span>Updated</span><span />
            </div>
            {list.length === 0 && <div style={{ padding: 40, textAlign: "center", color: "var(--text-muted)" }}>No standards match these filters.</div>}
            {list.map((s, i) => <StandardRow key={s.id} s={s} onOpen={onOpenStandard} last={i === list.length - 1} />)}
          </div>
          <p style={{ font: "var(--type-small)", color: "var(--text-muted)", marginTop: 12 }}>{list.length} of {D.standards.length} standards · Select a row for the summary and PDF.</p>
        </div>
        <aside style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <Card tone="surface" eyebrow="Comment periods" title={review.length + " standards open for comment"} description="Members may submit comments on drafts in review until the closing date on each document." padding={20}
            footer={<Button variant="secondary" size="sm" fullWidth onClick={() => setTab("review")}>View drafts in review</Button>} />
          <Card padding={20} title="Notifications" description="Receive new drafts and ratification notices by email.">
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 8 }}>
              <Switch label="New drafts" defaultChecked onChange={(e) => notify({ tone: "neutral", title: e.target.checked ? "Draft notifications on" : "Draft notifications off" })} />
              <Switch label="Ratification notices" onChange={(e) => notify({ tone: "neutral", title: e.target.checked ? "Ratification notices on" : "Ratification notices off" })} />
            </div>
          </Card>
          <Card tone="navy" padding={20} eyebrow="Working groups" title="Propose a standard" description="Alliance institutions may propose a new working group with three co-sponsors."
            footer={<Button variant="inverse" size="sm" onClick={() => notify({ tone: "neutral", title: "Proposals open 2026-10-01", description: "The procedure is described in OPC-STD-002." })}>Read the procedure</Button>} />
        </aside>
      </Container>
    </main>
  );
}

Object.assign(window, { Standards });
