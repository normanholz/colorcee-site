# LessWord Inc. — Color.cee (Jekyll, GitHub Pages)

Production-ready Jekyll site for the **Color.cee** mobile app. Compatible with GitHub Pages default build.

## Local Development
1. Install Ruby and Bundler.
2. Install deps:
   ```bash
   bundle install
   ```
3. Run locally:
   ```bash
   bundle exec jekyll serve --livereload
   ```
4. Visit http://localhost:4000

## Deploy to GitHub Pages (Project Pages)
- Create a repo named e.g. `color-cee-site`.
- Push this project.
- In `_config.yml`, set:
  ```yml
  url: "https://<your-username>.github.io"
  baseurl: "/<repo-name>"
  ```
- In **Settings → Pages**, set source to `Deploy from a branch`, branch `main`, folder `/ (root)`.
- The site will be available at: `https://<your-username>.github.io/<repo-name>/`.

## Configuration
- **Analytics**: Set `analytics: true` and replace GA ID in `_includes/analytics.html`.
- **Formspree**: Set `formspree_endpoint:` to your Formspree form URL. Fallback is a `mailto:` action.
- **Navigation**: Adjust items in `_config.yml` under `nav:`.

## Content
- Pages are in `/pages` and `index.md`.
- Home and App pages render components from `_includes` and data from `_data`:
  - Features: `_data/features.yml`
  - Testimonials: `_data/testimonials.yml`
  - FAQs: `_data/faqs.yml`

## Notes
- SCSS lives under `assets/scss/` and compiles to `assets/scss/main.css` at build.
- Images are webp for performance; replace placeholders in `assets/img/screenshots/`.
- All external links use `rel="noopener"` for security.
- Accessibility: semantic landmarks, skip link, visible focus rings.
