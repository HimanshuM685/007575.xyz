/**
 * Project registry for the 007575.xyz sitemap (SunView edition).
 * ---------------------------------------------------------------------------
 * To add a project: copy a block, change the fields.
 *
 *   subdomain  – the part before .007575.xyz (used to build the URL + label)
 *   name       – display name
 *   tagline    – one-line description
 *   tags       – array of strings used for filtering
 *   status     – "live" | "wip" | "paused"
 *   glyph      – 1–2 char pixel glyph shown in the icon box. Optional.
 */
window.PROJECTS = [
  {
    subdomain: "blockoff",
    name: "Blockoff",
    tagline: "Block out distractions and focus on what matters.",
    tags: ["productivity", "web"],
    status: "live",
    glyph: "#",
  },
  {
    subdomain: "pigeon",
    name: "Pigeon",
    tagline: "Lightweight messaging / delivery experiment.",
    tags: ["messaging", "web"],
    status: "live",
    glyph: ">>",
  },
  {
    subdomain: "timevault",
    name: "TimeVault",
    tagline: "Capture time, lock away memories and moments.",
    tags: ["utility", "web"],
    status: "live",
    glyph: "@",
  },
];
