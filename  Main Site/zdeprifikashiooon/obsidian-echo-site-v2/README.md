
# Obsidian Echo — Static Site (Netlify‑ready)

This folder contains a production‑ready static site you can drag & drop into Netlify.

## Quick deploy
1. Go to https://app.netlify.com/ → *Add new site* → **Deploy manually**.
2. Drag the entire folder `obsidian-echo-site-v2` (or the ZIP) into the upload target.

## Update links
Open `assets/js/settings.js` and set:
```js
window.OE_SETTINGS = {
  CALENDLY_30: "https://calendly.com/<your-handle>/30-minute-meeting",
  CALENDLY_60: "https://calendly.com/<your-handle>/60-minute-meeting",
  GA_MEASUREMENT_ID: "" // optional
};
```
- The *Book 30‑min* and *Book 60‑min* buttons will open the correct URLs.
- The **Book a Call** section will auto‑embed Calendly inline if links are present.
- If you add a GA4 ID, the site will automatically inject gtag.

## Contact form (Netlify Forms)
The contact form is preconfigured with Netlify Forms (`data-netlify="true"`). After first deploy, visit **Netlify → Forms** to see submissions.

## Assets
- Hero: `assets/img/city-la.jpg`
- About background: `assets/img/about-bridge.jpg`
- Headshot: `assets/img/headshot.jpg`
- Favicon: `favicon.png`

Replace images with files of the same name to update the visuals.

## Notes
- All styles are in `assets/css/style.css` (gold numbers, spacing, etc.).
- To add more sections, duplicate the existing markup in `index.html`.
