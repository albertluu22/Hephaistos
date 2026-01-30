# Word Add-in (React) — Local dev scaffold

This repository contains a minimal React + Vite scaffold for a Word Task Pane Add-in and an Office Add-in manifest under `/manifest/manifest.xml`.

What was created
- `package.json` — scripts to run the dev server (`npm run dev`) and build.
- `vite.config.js` — Vite config (dev server: port 3000).
- `index.html`, `src/main.jsx`, `src/App.jsx`, `src/index.css` — React app entry and a sample UI.
- `manifest/manifest.xml` — sample Office Add-in manifest that points to `https://localhost:3000/` (replace GUID and adjust URL if you use http/ngrok)

Quick start (Windows PowerShell)
1. Install deps:

```powershell
npm install
```

2. Run the dev server:

```powershell
npm run dev
```
