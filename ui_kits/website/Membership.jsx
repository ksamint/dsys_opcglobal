const { Button, Card, Badge, Input, Select, Checkbox, Radio, Switch, Dialog, Icon } = window.OPCGlobalDesignSystem_c086b9 || {};

const EMPTY = { org: "", name: "", email: "", region: "", tracks: [], publicProfile: true, agree: false };

function Membership({ notify }) {
  const D = window.OPC_DATA;
  const [tier, setTier] = React.useState("inst");
  const [f, setF] = React.useState(EMPTY);
  const [errors, setErrors] = React.useState({});
  const [confirm, setConfirm] = React.useState(false);
  const set = (k) => (e) => setF({ ...f, [k]: e && e.target ? e.target.value : e });
  const toggleTrack = (tr) => setF({ ...f, tracks: f.tracks.includes(tr) ? f.tracks.filter((x) => x !== tr) : [...f.tracks, tr] });
  const validate = () => {
    const e = {};
    if (!f.org.trim()) e.org = "Enter the organisation name.";
    if (!f.name.trim()) e.name = "Enter a contact name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = "Enter a valid work email.";
    if (!f.region) e.region = "Select a region.";
    if (!f.agree) e.agree = "You must agree to the membership charter.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };
  const submit = (ev) => { ev.preventDefault(); if (validate()) setConfirm(true); };
  const finish = () => {
    setConfirm(false);
    notify({ tone: "success", title: "Application submitted", description: "Reference OPC-APP-2041 · " + f.org + ". We reply within five working days." });
    setF(EMPTY); setErrors({});
  };
  const tierMeta = D.tiers.find((x) => x.id === tier);
  return (
    <main>
      <PageHeader eyebrow="Membership" title="Apply for membership" lede="Alliance institutions and international partners join through one application. The standards team reviews applications within five working days." />
      <Container style={{ padding: "40px var(--gutter) var(--section-y)", display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.5fr)", gap: 40, alignItems: "start" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <Eyebrow>Membership tier</Eyebrow>
          {D.tiers.map((t) => (
            <Card key={t.id} interactive onClick={() => setTier(t.id)} padding={20} style={{ borderColor: tier === t.id ? "var(--opc-navy)" : undefined }}>
              <Radio name="tier" value={t.id} checked={tier === t.id} onChange={() => setTier(t.id)} label={<span style={{ fontWeight: 600 }}>{t.title}</span>} description={t.desc} />
            </Card>
          ))}
          <Card tone="surface" padding={20} eyebrow="What members receive" >
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10, fontSize: "var(--text-sm)", color: "var(--text-body)" }}>
              {["Voting seat in working groups", "Early access to drafts and comment periods", "Listing in the member directory", "Access to the resource connection registry"].map((x) => <li key={x} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}><span style={{ color: "var(--opc-gold-deep)", display: "inline-flex", marginTop: 1 }}><Icon name="check" size="sm" strokeWidth={2} /></span>{x}</li>)}
            </ul>
          </Card>
        </div>
        <form onSubmit={submit} noValidate>
          <Card padding={32}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, marginBottom: 8 }}>
              <h2 style={{ font: "var(--type-h2)", fontSize: "var(--text-xl)" }}>Application</h2>
              <Badge tone="navy">{tierMeta.title}</Badge>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 16 }}>
              <Input label="Organisation" required value={f.org} onChange={set("org")} error={errors.org} placeholder="Institution or company" style={{ gridColumn: "1 / -1" }} />
              <Input label="Contact name" required value={f.name} onChange={set("name")} error={errors.name} />
              <Input label="Work email" type="email" required value={f.email} onChange={set("email")} error={errors.email} leading={<Icon name="mail" />} placeholder="name@organisation.org" />
              <Select label="Region" required placeholder="Select a region" options={D.regions} value={f.region} onChange={set("region")} error={errors.region} style={{ gridColumn: "1 / -1" }} />
            </div>
            <div style={{ marginTop: 24 }}>
              <div style={{ font: "var(--type-small)", fontWeight: 600, marginBottom: 10 }}>Tracks of interest</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {D.tracks.map((tr) => <Checkbox key={tr.title} label={tr.title} description={tr.desc} checked={f.tracks.includes(tr.title)} onChange={() => toggleTrack(tr.title)} />)}
              </div>
            </div>
            <div style={{ borderTop: "1px solid var(--opc-line)", marginTop: 24, paddingTop: 24, display: "flex", flexDirection: "column", gap: 16 }}>
              <Switch label="Public member profile" description="List the organisation in the alliance directory once approved." checked={f.publicProfile} onChange={(e) => setF({ ...f, publicProfile: e.target.checked })} />
              <div>
                <Checkbox label="I agree to the membership charter (OPC-STD-001)" checked={f.agree} onChange={(e) => setF({ ...f, agree: e.target.checked })} />
                {errors.agree && <div role="alert" style={{ font: "var(--type-small)", color: "var(--opc-red)", marginTop: 6, marginLeft: 28 }}>{errors.agree}</div>}
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 28 }}>
              <Button variant="ghost" type="button" onClick={() => { setF(EMPTY); setErrors({}); }}>Clear</Button>
              <Button type="submit" trailing={<Icon name="arrow-right" />}>Submit application</Button>
            </div>
          </Card>
        </form>
      </Container>
      <Dialog open={confirm} onClose={() => setConfirm(false)} size="sm" title="Submit application?" description={"Apply as " + (tierMeta.title.toLowerCase()) + " on behalf of " + (f.org || "your organisation") + ". The standards team will contact " + (f.email || "you") + "."}
        footer={<><Button variant="ghost" onClick={() => setConfirm(false)}>Back</Button><Button onClick={finish}>Submit</Button></>} />
    </main>
  );
}

Object.assign(window, { Membership });
