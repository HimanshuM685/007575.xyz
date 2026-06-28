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
    subdomain: "timevault",
    name: "TimeVault",
    tagline: "Capture time. Lock away moments.",
    tags: ["utility", "web"],
    status: "live",
    motif: "sun",
  },
];
