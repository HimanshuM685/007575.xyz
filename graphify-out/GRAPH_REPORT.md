# Graph Report - .  (2026-07-20)

## Corpus Check
- 1 files · ~13,508 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 29 nodes · 42 edges · 6 communities
- Extraction: 81% EXTRACTED · 19% INFERRED · 0% AMBIGUOUS · INFERRED: 8 edges (avg confidence: 0.84)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Rendering & Interaction Logic|Rendering & Interaction Logic]]
- [[_COMMUNITY_Hermes Hero Artwork|Hermes Hero Artwork]]
- [[_COMMUNITY_Page Markup & Data Model|Page Markup & Data Model]]
- [[_COMMUNITY_Search & Filtering|Search & Filtering]]
- [[_COMMUNITY_Static Site Foundation|Static Site Foundation]]

## God Nodes (most connected - your core abstractions)
1. `index.html Page Markup` - 8 edges
2. `cardFor()` - 6 edges
3. `007575.xyz Static Sitemap` - 5 edges
4. `projects.js Project Data` - 5 edges
5. `render()` - 4 edges
6. `script.js Rendering & Interaction Logic` - 4 edges
7. `Hero Art Image` - 4 edges
8. `pad2()` - 3 edges
9. `Multi-Armed Winged Figure` - 3 edges
10. `urlFor()` - 2 edges

## Surprising Connections (you probably didn't know these)
- `Projects Index Grid` --shares_data_with--> `projects.js Project Data`  [INFERRED]
  index.html → README.md
- `index.html Page Markup` --references--> `styles.css Styling`  [EXTRACTED]
  index.html → README.md
- `007575.xyz Static Sitemap` --references--> `index.html Page Markup`  [EXTRACTED]
  README.md → index.html
- `index.html Page Markup` --references--> `script.js Rendering & Interaction Logic`  [EXTRACTED]
  index.html → README.md
- `Terminal Shell Listing Block` --conceptually_related_to--> `Subdomain URL Convention`  [INFERRED]
  index.html → README.md

## Import Cycles
- None detected.

## Communities (6 total, 0 thin omitted)

### Community 0 - "Rendering & Interaction Logic"
Cohesion: 0.38
Nodes (9): buildFilters(), cardFor(), emblem(), escapeHtml(), fillTerminal(), matches(), pad2(), render() (+1 more)

### Community 1 - "Hermes Hero Artwork"
Cohesion: 0.47
Nodes (6): Blue-on-Black Engraving Aesthetic, Hero Art Image, Electric Lightning Background Field, Multi-Armed Winged Figure, Radiating Line Rays, Winged Helmet (Hermes/Mercury Motif)

### Community 2 - "Page Markup & Data Model"
Cohesion: 0.47
Nodes (6): Duotone Editorial Visual Theme, Projects Index Grid, index.html Page Markup, Terminal Shell Listing Block, projects.js Project Data, Subdomain URL Convention

### Community 3 - "Search & Filtering"
Cohesion: 0.67
Nodes (3): Search & Filter Controls, Site Features (search, tag filter, theme, responsive), script.js Rendering & Interaction Logic

### Community 4 - "Static Site Foundation"
Cohesion: 0.67
Nodes (3): 007575.xyz Static Sitemap, No Build Step / No Framework Principle, styles.css Styling

## Knowledge Gaps
- **1 isolated node(s):** `Blue-on-Black Engraving Aesthetic`
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `index.html Page Markup` connect `Page Markup & Data Model` to `Search & Filtering`, `Static Site Foundation`?**
  _High betweenness centrality (0.078) - this node is a cross-community bridge._
- **Why does `007575.xyz Static Sitemap` connect `Static Site Foundation` to `Page Markup & Data Model`, `Search & Filtering`?**
  _High betweenness centrality (0.031) - this node is a cross-community bridge._
- **Why does `projects.js Project Data` connect `Page Markup & Data Model` to `Search & Filtering`, `Static Site Foundation`?**
  _High betweenness centrality (0.024) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `projects.js Project Data` (e.g. with `Projects Index Grid` and `script.js Rendering & Interaction Logic`) actually correct?**
  _`projects.js Project Data` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `No Build Step / No Framework Principle`, `Duotone Editorial Visual Theme`, `Blue-on-Black Engraving Aesthetic` to the rest of the system?**
  _3 weakly-connected nodes found - possible documentation gaps or missing edges._