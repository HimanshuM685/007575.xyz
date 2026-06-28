# 007575.xyz

A static sitemap for projects I host on `*.007575.xyz` subdomains. Pure HTML, CSS & JS — no build step, no framework, no tracking.

## Files

| File          | Purpose                                            |
| ------------- | -------------------------------------------------- |
| `index.html`  | Page markup                                        |
| `styles.css`  | All styling (dark default + light theme toggle)    |
| `projects.js` | **The data** — edit this to add/remove projects    |
| `script.js`   | Rendering, search, tag filters, theme, stats       |

## Adding a project

Open `projects.js` and add a block to the list:

```js
{
  subdomain: "myapp",                 // → myapp.007575.xyz
  name: "My App",
  tagline: "One line about it.",
  tags: ["web", "tool"],              // powers the filter chips
  status: "live",                      // "live" | "wip" | "paused"
  accent: "#6c8cff",                  // optional card tint
  emoji: "🚀",                         // optional icon
}
```

The URL is built automatically as `https://<subdomain>.007575.xyz`.

## Run locally

Just open `index.html`, or serve the folder:

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

## Features

- 🔍 Live search (press `/` to focus, `Esc` to clear)
- 🏷️ Tag filtering
- 🌗 Dark / light theme (remembered)
- 📱 Responsive grid
- ♿ Respects `prefers-reduced-motion`
