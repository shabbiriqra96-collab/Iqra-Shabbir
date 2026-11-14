# Iqra Shabbir — Personal Portfolio

A responsive personal portfolio for Iqra Shabbir, an Artificial Intelligence undergraduate and developer. Built with semantic HTML, CSS, and vanilla JavaScript.

**Tagline:** Where Mathematics Meets Technology.

## Features
- Responsive mobile, tablet, and desktop layouts
- Sticky navigation and accessible mobile menu
- Animated role text and scroll reveal
- Reduced-motion support and keyboard focus styles
- Projects, skills, education, leadership, and contact sections
- SEO/social metadata and custom SVG favicon
- Custom 404 page and Vercel configuration
- No build step, API keys, or paid services

## Project structure
```text
portfolio/
├── index.html
├── style.css
├── script.js
├── README.md
├── 404.html
├── vercel.json
└── assets/
    └── favicon.svg
```

## Run locally
Open `index.html` in a browser, or run a local server:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000`. In VS Code, Live Server also works. No npm install is required.

## Configure your professional email
In `script.js`, replace the empty value with an email address you own:
```js
const SITE_CONFIG = {
  professionalEmail: "your-real-email@example.com"
};
```
Until configured, the contact button links to GitHub instead of a non-working mailto address.

## Deploy to Vercel
1. Push this repository to GitHub.
2. Sign in at https://vercel.com/ and choose **Add New → Project**.
3. Import `shabbiriqra96-collab/Iqra-Shabbir`.
4. Select **Other** as framework preset.
5. Leave build command and output directory empty; this is a static site.
6. Deploy.

Alternatively install the Vercel CLI and run:
```bash
vercel
vercel --prod
```

## Git workflow
For an existing clone:
```bash
git status
git add .
git commit -m "Build personal portfolio website"
git push origin main
```
For a new local folder:
```bash
git init
git branch -M main
git remote add origin https://github.com/shabbiriqra96-collab/Iqra-Shabbir.git
git add .
git commit -m "Build personal portfolio website"
git push -u origin main
```

## Before publishing checklist
- [ ] Verify the project descriptions and repository URLs.
- [ ] Confirm the department naming against the official university record.
- [ ] Configure your real professional email.
- [ ] Test mobile navigation and keyboard Escape behavior.
- [ ] Test reduced-motion settings.
- [ ] Check desktop, tablet, and mobile widths.
- [ ] Check external links and browser console.
- [ ] Confirm favicon, title, metadata, and 404 route.

## Accuracy notes
- No professional email is invented.
- ChessMate's technology stack is not stated because it has not been verified.
- Some project repositories are under a collaborator's account; links do not claim ownership.
- No unverified employment, clients, awards, certificates, or statistics are claimed.

## License
Add a license if you want to specify how others may reuse this project.
