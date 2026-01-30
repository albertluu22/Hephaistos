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

The Vite dev server serves the app at `http://localhost:3000` by default. The manifest is configured with `https://localhost:3000/` as the SourceLocation. Depending on your Word/Office version, you may need HTTPS to load the add-in. See notes below.

Sideload the add-in into Word (desktop on Windows)
1. Open Word (desktop).
2. Insert > Add-ins > My Add-ins > Manage My Add-ins (or 'Upload My Add-in')
3. Upload the `manifest/manifest.xml` file.
4. Open the new add-in from the Insert -> Add-ins menu (it will open the task pane pointing to the URL in the manifest).

Notes on HTTPS and localhost
- Many Office clients allow localhost over HTTP for debugging, but some require HTTPS. If Word refuses to load `http://localhost:3000`, either:
  - Serve over HTTPS (configure Vite to use HTTPS and a local dev certificate), or
  - Use a tunneling tool like `ngrok` to provide an `https://` URL and update `manifest/manifest.xml`.

Next steps / suggestions
- Replace the placeholder GUID in `manifest/manifest.xml` with a real GUID (you can generate one with `npx uuid` or an online GUID generator).
- Add icons and assets referenced by the manifest.
- Optionally configure Vite to serve over HTTPS with your certificate for a smoother Office dev experience.

If you want, I can:
- add HTTPS dev cert configuration for Vite and instructions for trusting the certificate on Windows, or
- create a small script to generate a GUID and patch the manifest automatically.
