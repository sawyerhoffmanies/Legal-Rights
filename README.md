# Legal Rights

A responsive, image-free legal information homepage focused on medical negligence, birth injuries, clinical malpractice, patient rights, and compensation questions.

## Files

- `index.html` — semantic homepage, navigation, service sections, complete journal article, and enquiry form.
- `style.css` — responsive design system, CSS-only shapes, gradients, glass-like surfaces, animated dividers, and reduced-motion support.
- `script.js` — mobile navigation, scroll progress, active section highlighting, reveal animations, year stamp, and demo form feedback.
- `manus-routes.json` — static route manifest for the homepage.
- `app.config.ts` — project logo metadata.

## Run locally

Because this is a static site, serve the folder with any static HTTP server. For example:

```bash
python3 -m http.server 3000
```

Then open `http://localhost:3000`.

## Content note

The enquiry form is intentionally front-end only: it shows a confirmation state and does not send data anywhere. Connect it to the chosen form or CRM provider before production use. Replace any draft article copy with verified firm details before publishing.
