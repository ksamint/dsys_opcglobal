// Sample content for the website kit. Standards titles are placeholders composed from the brand's three tracks; replace with real documents.
window.OPC_DATA = {
  standards: [
    { id: "OPC-STD-001", title: "Membership charter", track: "Global alliance", status: "ratified", date: "2026-03-12", version: "v1.2", summary: "Baseline obligations for alliance institutions and international partners, including governance, voting, and withdrawal." },
    { id: "OPC-STD-002", title: "Cross-region working group procedure", track: "Cross-region collaboration", status: "ratified", date: "2026-04-02", version: "v1.0", summary: "How working groups are convened across regions, how drafts move to comment, and how ratification is recorded." },
    { id: "OPC-STD-003", title: "One Person Company classification framework", track: "Standards", status: "review", date: "2026-08-20", version: "v0.9", summary: "A shared definition and classification of one-person companies for member registries and statistics." },
    { id: "OPC-STD-004", title: "Data portability framework", track: "Standards", status: "draft", date: "2026-09-05", version: "v0.3", summary: "How member companies exchange records across regions and platforms without lock-in." },
    { id: "OPC-STD-005", title: "Resource connection registry", track: "Global alliance", status: "draft", date: "2026-09-15", version: "v0.2", summary: "A registry format for computing, funding, and workspace resources offered to members by alliance institutions." },
    { id: "OPC-STD-006", title: "AI agent operating conduct for member companies", track: "Standards", status: "review", date: "2026-07-30", version: "v0.8", summary: "Expectations for transparency, accountability, and record-keeping when AI agents act on behalf of a one-person company." },
  ],
  statusMeta: { draft: { label: "Draft", tone: "info" }, review: { label: "In review", tone: "warning" }, ratified: { label: "Ratified", tone: "success" } },
  tracks: [
    { n: "01", title: "Global alliance", desc: "A network of institutions and partners that connect one-person companies to resources across regions." },
    { n: "02", title: "Standards", desc: "Shared definitions, frameworks, and procedures that let members work to the same reference." },
    { n: "03", title: "Cross-region collaboration", desc: "Working groups that carry standards and programmes between regions." },
  ],
  audiences: ["International partners", "Alliance institutions", "Standards teams"],
  regions: ["Asia-Pacific", "Europe", "Americas", "Middle East & Africa"],
  tiers: [
    { id: "inst", title: "Alliance institution", desc: "Universities, associations, and public bodies that adopt and co-develop standards." },
    { id: "partner", title: "International partner", desc: "Companies and networks running one-person-company programmes across regions." },
  ],
  i18n: {
    en: { alliance: "Alliance", standards: "Standards", membership: "Membership", resources: "Resources", apply: "Apply", eyebrow: "One Person Company Alliance", headline: "AI for Freedom.", lede: "OPC Global is a global alliance IP for collaboration, standards, and resource connection.", cta: "Apply for membership", cta2: "Browse standards" },
    zh: { alliance: "联盟", standards: "标准", membership: "成员", resources: "资源", apply: "申请加入", eyebrow: "欧匹赛全球联盟", headline: "AI for Freedom.", lede: "欧匹赛全球联盟是面向全球协作、标准与资源连接的 IP。", cta: "申请成为成员", cta2: "浏览标准" },
  },
};
