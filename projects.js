/**
 * Project registry for the 007575.xyz sitemap.
 * ---------------------------------------------------------------------------
 * To add a project: copy a block, change the fields.
 *
 *   subdomain  – the part before .007575.xyz (used to build the URL + label)
 *   name       – display name (rendered ALL CAPS in the Didone)
 *   tagline    – one-line description (mono caption)
 *   tags       – array of strings used for filtering
 *   status     – "live" | "wip" | "paused"
 *   motif      – "sun" | "orbit" | "compass" | "eye"  (engraving emblem). Optional.
 */
window.PROJECTS = [
  {
    subdomain: "blockoff",
    name: "Blockoff",
    tagline: "Block out distractions. Focus on what matters.",
    tags: ["productivity", "web"],
    status: "live",
    motif: "compass",
  },
  {
    subdomain: "pigeon",
    name: "Pigeon",
    tagline: "Lightweight messaging & delivery experiment.",
    tags: ["messaging", "web"],
    status: "live",
    motif: "orbit",
  },
  {
    subdomain: "kuma",
    name: "Kuma",
    tagline: "Uptime & status monitoring at a glance.",
    tags: ["monitoring", "web"],
    status: "live",
    motif: "eye",
  },
  {
    subdomain: "tendril",
    name: "Tendril",
    tagline: "Connected threads, branching experiments.",
    tags: ["utility", "web"],
    status: "live",
    motif: "orbit",
  },
  {
    subdomain: "minnow",
    name: "Minnow",
    tagline: "Live jobs and internships, matched to you.",
    tags: ["jobs", "web"],
    status: "live",
    motif: "compass",
  },
  {
    subdomain: "fallow",
    name: "Fallow",
    tagline: "Prepaid compute, metered in XLM.",
    tags: ["compute", "web3"],
    status: "live",
    motif: "sun",
  },
  {
    subdomain: "tinyx402",
    name: "tinyx402",
    tagline: "Web agents paid per request in USDC or USDT via x402. No API keys.",
    tags: ["x402", "api", "web3"],
    status: "live",
    motif: "eye",
  },
  {
    subdomain: "arc",
    name: "Arc Facilitator",
    tagline: "Gasless x402 USDC payments on Arc. No custody.",
    tags: ["x402", "web3"],
    status: "live",
    motif: "orbit",
  },
  {
    subdomain: "whitechain",
    name: "Whitechain Facilitator",
    tagline: "Gasless x402 USDT payments on Whitechain. No custody.",
    tags: ["x402", "web3"],
    status: "live",
    motif: "compass",
  },
];
