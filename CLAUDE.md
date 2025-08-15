# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Jekyll-based marketing website for Color.cee, a mobile app focused on color-first communication. The site is designed for GitHub Pages deployment and follows Jekyll conventions.

## Development Commands

### Local Development
```bash
# Install Ruby dependencies
bundle install

# Start local development server with live reload
bundle exec jekyll serve --livereload

# Access at http://localhost:4000
```

### Build
```bash
# Build for production (GitHub Pages handles this automatically)
bundle exec jekyll build
```

## Architecture

### File Structure
- **Content**: Pages in `/pages/` and `index.md` (home page)
- **Data**: Content data in `_data/` (features.yml, testimonials.yml, faqs.yml)
- **Templates**: Layouts in `_layouts/` (default.html, home.html, page.html)
- **Components**: Reusable includes in `_includes/`
- **Styles**: SCSS in `assets/scss/` with modular structure
- **Assets**: Images in `assets/img/`, JavaScript in `assets/js/`

### Key Components
- **Home Layout** (`_layouts/home.html`): Main landing page with hero, features grid, screenshots, testimonials
- **Feature System**: Data-driven features from `_data/features.yml` rendered via `_includes/feature.html`
- **Navigation**: Configured in `_config.yml` under `nav:`
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox

### Styling System
- SCSS modules: variables, mixins, buttons, cards, utilities
- Main stylesheet: `assets/scss/main.scss` imports all modules
- Jekyll processes SCSS (requires front matter in .scss files)
- Focus on accessibility with visible focus rings and semantic markup

### JavaScript
- `nav-toggle.js`: Mobile navigation toggle
- `lightbox.js`: Screenshot gallery lightbox
- Both loaded deferred in default layout

## Configuration

### Jekyll Config (`_config.yml`)
- Site metadata (title, description, URL)
- Plugin configuration (SEO, sitemap, feed)
- Navigation menu structure
- Analytics and form integration toggles

### GitHub Pages Deployment
- Set `url` and `baseurl` in `_config.yml` for your domain
- Uses GitHub Pages default Jekyll build
- No custom build process required

### Content Management
- **Features**: Edit `_data/features.yml` for everyday/business features
- **Testimonials**: Edit `_data/testimonials.yml` 
- **FAQs**: Edit `_data/faqs.yml`
- **Images**: Replace screenshots in `assets/img/screenshots/` (use .webp format)

## Integration Points

### Analytics
- Set `analytics: true` in `_config.yml`
- Configure GA tracking ID in `_includes/analytics.html`

### Contact Forms
- Set `formspree_endpoint` in `_config.yml` for form handling
- Fallback to mailto: action if no endpoint configured

## Development Notes

- All external links include `rel="noopener"` for security
- Images use modern formats (.webp) for performance
- Semantic HTML with proper ARIA labels and landmarks
- Skip link for keyboard navigation accessibility