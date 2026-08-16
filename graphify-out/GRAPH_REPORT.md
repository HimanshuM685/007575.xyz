# Graph Report - .  (2026-07-30)

## Corpus Check
- Corpus is ~13,902 words - fits in a single context window. You may not need a graph.

## Summary
- 45 nodes · 68 edges · 9 communities (7 shown, 2 thin omitted)
- Extraction: 81% EXTRACTED · 19% INFERRED · 0% AMBIGUOUS · INFERRED: 13 edges (avg confidence: 0.83)
- Token cost: 0 input · 55,971 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Rendering Helper Functions|Rendering Helper Functions]]
- [[_COMMUNITY_README Documentation|README Documentation]]
- [[_COMMUNITY_Docs Page Feature Reference|Docs Page Feature Reference]]
- [[_COMMUNITY_Project Grid Filtering|Project Grid Filtering]]
- [[_COMMUNITY_Hero Art Engraving|Hero Art Engraving]]
- [[_COMMUNITY_About Page Site Identity|About Page Site Identity]]
- [[_COMMUNITY_Live Search|Live Search]]
- [[_COMMUNITY_Hero Terminal UI|Hero Terminal UI]]

## God Nodes (most connected - your core abstractions)
1. `DOCS Page` - 11 edges
2. `INDEX / Home Page` - 8 edges
3. `ABOUT Page` - 7 edges
4. `cardFor()` - 6 edges
5. `script.js (Rendering, Search, Tag Filters, Stats)` - 5 edges
6. `styles.css (All Styling)` - 5 edges
7. `render()` - 4 edges
8. `007575.xyz Static Sitemap` - 4 edges
9. `Hero Art Image` - 4 edges
10. `projects.js (Project Data Module)` - 4 edges

## Surprising Connections (you probably didn't know these)
- `ABOUT Page` --references--> `DOCS Page`  [EXTRACTED]
  about.html → docs.html
- `ABOUT Page` --references--> `INDEX / Home Page`  [EXTRACTED]
  about.html → index.html
- `ABOUT Page` --references--> `styles.css (All Styling)`  [EXTRACTED]
  about.html → docs.html
- `INDEX / Home Page` --references--> `Live Sandbox / No-Build, No-Framework, No-Tracking Philosophy`  [EXTRACTED]
  index.html → about.html
- `DOCS Page` --references--> `INDEX / Home Page`  [EXTRACTED]
  docs.html → index.html

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Four-File No-Build Static Site Architecture** — index_html_page, readme_projects_js_data, readme_script_js_rendering, readme_styles_css [INFERRED 0.85]
- **Shared Site Navigation (Masthead: PROJECTS / ABOUT / DOCS)** — about_about_page, docs_docs_page, index_index_page [EXTRACTED 1.00]
- **No-Framework Static Stack (styles.css, projects.js, script.js on GitHub Pages)** — styles_styles_css, projects_projects_js, script_script_js, about_github_pages [INFERRED 0.85]
- **Project Browsing System (search + tag filters over project data schema)** — index_search_input, index_filters_component, docs_project_entry_schema, projects_projects_js [INFERRED 0.75]

## Communities (9 total, 2 thin omitted)

### Community 0 - "Rendering Helper Functions"
Cohesion: 0.38
Nodes (9): buildFilters(), cardFor(), emblem(), escapeHtml(), fillTerminal(), matches(), pad2(), render() (+1 more)

### Community 1 - "README Documentation"
Cohesion: 0.33
Nodes (7): 007575.xyz Static Sitemap, Site Features (search, tag filter, theme, responsive), No Build Step / No Framework Principle, projects.js Project Data, script.js Rendering & Interaction Logic, styles.css Styling, Subdomain URL Convention

### Community 2 - "Docs Page Feature Reference"
Cohesion: 0.47
Nodes (6): DOCS Page, Local Dev Server (python3 -m http.server), Project Entry Schema (subdomain, name, tagline, tags, status, accent, emoji), prefers-reduced-motion Support, Responsive Grid Feature, styles.css (All Styling)

### Community 3 - "Project Grid Filtering"
Cohesion: 0.53
Nodes (6): Tag Filtering Feature, Tag Filter Chips (#filters), INDEX / Home Page, Projects Index Section / Grid, projects.js (Project Data Module), script.js (Rendering, Search, Tag Filters, Stats)

### Community 4 - "Hero Art Engraving"
Cohesion: 0.47
Nodes (6): Blue-on-Black Engraving Aesthetic, Hero Art Image, Electric Lightning Background Field, Multi-Armed Winged Figure, Radiating Line Rays, Winged Helmet (Hermes/Mercury Motif)

### Community 5 - "About Page Site Identity"
Cohesion: 0.70
Nodes (5): ABOUT Page, GitHub Pages (Host), Himanshu Malik, Live Sandbox / No-Build, No-Framework, No-Tracking Philosophy, 007575.xyz GitHub Repository (Source)

## Knowledge Gaps
- **6 isolated node(s):** `styles.css Styling`, `Site Features (search, tag filter, theme, responsive)`, `Blue-on-Black Engraving Aesthetic`, `Project Entry Schema (subdomain, name, tagline, tags, status, accent, emoji)`, `Local Dev Server (python3 -m http.server)` (+1 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `DOCS Page` connect `Docs Page Feature Reference` to `Project Grid Filtering`, `About Page Site Identity`, `Live Search`?**
  _High betweenness centrality (0.089) - this node is a cross-community bridge._
- **Why does `INDEX / Home Page` connect `Project Grid Filtering` to `Docs Page Feature Reference`, `About Page Site Identity`, `Hero Terminal UI`?**
  _High betweenness centrality (0.068) - this node is a cross-community bridge._
- **Why does `ABOUT Page` connect `About Page Site Identity` to `Docs Page Feature Reference`, `Project Grid Filtering`?**
  _High betweenness centrality (0.053) - this node is a cross-community bridge._
- **What connects `styles.css Styling`, `Subdomain URL Convention`, `No Build Step / No Framework Principle` to the rest of the system?**
  _8 weakly-connected nodes found - possible documentation gaps or missing edges._