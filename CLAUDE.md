# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Jekyll-based personal academic website for Hosein Fooladi, a Machine Learning researcher. The site uses the Minimal Mistakes theme and is hosted on GitHub Pages. It showcases research publications, blog posts, teaching activities, and talks.

## Development Commands

### Local Development
```bash
# Install dependencies
bundle install

# Build the site
rake build
# or
jekyll build --profile --trace --config _config.yml,_config.dev.yml

# Serve locally for development
bundle exec jekyll serve --config _config.yml,_config.dev.yml
# or
rake serve
```

### Build Configuration
- Production config: `_config.yml`
- Development config: `_config.dev.yml` (overrides production settings)
- Development server runs on http://localhost:4000

## Site Architecture

### Content Collections
The site uses Jekyll collections to organize different types of content:

- `_posts/` - Blog posts (Markdown files with YAML frontmatter)
- `_publications/` - Research publications with citations and abstracts
- `_teaching/` - Teaching activities and courses
- `_talks/` - Conference talks and presentations
- `_portfolio/` - Project portfolio items
- `_pages/` - Static pages (About, Archive pages, etc.)

### Key Configuration
- **Theme**: Minimal Mistakes remote theme (`mmistakes/minimal-mistakes@master`)
- **Search**: lunr-powered client-side search with full content indexing
- **Comments**: Utterances for GitHub-based comments
- **Analytics**: Google Universal Analytics
- **Social**: Twitter, GitHub, LinkedIn integration

### Layouts and Defaults
- Posts use `single` layout with author profile disabled
- Pages use `single` layout with author profile enabled
- Publications and talks use `single` layout with sharing enabled
- All content supports comments except docs

### Content Structure
- Publications include citation format, venue, and paper URLs
- Publication frontmatter is canonical for `authors` (markdown string, own name bolded), `codeurl`, and `bibtex` (YAML block scalar); bodies hold the abstract only. The listing (`/publications/`, via `_includes/archive-single-publication.html`) renders Barron-style rows; `_layouts/publication.html` renders authors/venue/buttons/BibTeX on detail pages
- Publication thumbnails: set `header.teaser`, convention `assets/images/publications/<slug>.png` (~800x600); without one a gradient venue tile renders
- Posts support tags, table of contents (toc), and MathJax
- All content uses permalink patterns defined in `_config.yml`
- Blog listings (`/year-archive/`, `/tags/`) render posts as a card grid (`_includes/archive-single-card.html`, styles in `_sass/minimal-mistakes/_custom.scss`)
- Post cover images: set `header.teaser` in frontmatter, convention `assets/images/blog/<slug>/cover.png` (~1280x720, cropped to 16:9 on cards); posts without a teaser get a styled gradient fallback card
- Card excerpts use the post's `description:` frontmatter (excerpt fallback), so keep `description` filled in

### Assets and Styling
- Custom CSS in `assets/css/` (academicons, collapse effects)
- Custom fonts including Latin Modern and Font Awesome
- JavaScript for interactive elements in `assets/js/`

## Important Notes
- Site builds to `_site/` directory
- Uses GitHub Pages compatible plugins only
- Supports both local development and GitHub Pages deployment
- Search index built client-side by lunr (no external service or API key needed)