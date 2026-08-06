# Hotel Vaishali Website

Static site for **Hotel Vaishali**, Nashik, built with Pelican (Python static
site generator) and deployed free on GitHub Pages via GitHub Actions.

See in-repo comments and TODOs in `content/pages/*.md` and `pelicanconf.py`
for what to replace with real hotel details (logo, photos, phone, WhatsApp,
Formspree endpoint, Google Maps embed).

## Local setup
```
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
pelican content -s pelicanconf.py -o output -l
```
Open http://localhost:8000

## Deploy
Push to `main` — GitHub Actions (`.github/workflows/deploy.yml`) builds and
publishes to the `gh-pages` branch automatically. Enable Pages in repo
Settings → Pages → Deploy from branch → gh-pages.
