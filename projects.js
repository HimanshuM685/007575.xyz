/**
 * Project registry for the 007575.xyz sitemap.
 * ---------------------------------------------------------------------------
 * To add a project: copy a block, change the fields. That's it.
 *
 *   subdomain  – the part before .007575.xyz (used to build the URL + label)
 *   name       – display name
 *   tagline    – one-line description
 *   tags       – array of strings used for filtering
 *   status     – "live" | "wip" | "paused"  (affects the badge)
 *   accent     – any CSS color; tints the card. Optional.
 *   emoji      – shown in the card icon. Optional.
 */
window.PROJECTS = [
  {
    subdomain: "blockoff",
    name: "Blockoff",
    tagline: "Block out distractions and focus on what matters.",
    tags: ["productivity", "web"],
    status: "live",
    accent: "#6c8cff",
    emoji: "🧱",
  },
  {
    subdomain: "pigeon",
    name: "Pigeon",
    tagline: "Lightweight messaging / delivery experiment.",
    tags: ["messaging", "web"],
    status: "live",
    accent: "#46d3a5",
    emoji: "🐦",
  },
  {
    subdomain: "timevault",
    name: "TimeVault",
    tagline: "Capture time, lock away memories and moments.",
    tags: ["utility", "web"],
    status: "live",
    accent: "#f5a25d",
    emoji: "⏳",
  },
];
