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
- **Search**: Algolia-powered search with full content indexing
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
- Posts support tags, table of contents (toc), and MathJax
- All content uses permalink patterns defined in `_config.yml`

### Assets and Styling
- Custom CSS in `assets/css/` (academicons, collapse effects)
- Custom fonts including Latin Modern and Font Awesome
- JavaScript for interactive elements in `assets/js/`

## Important Notes
- Site builds to `_site/` directory
- Uses GitHub Pages compatible plugins only
- Supports both local development and GitHub Pages deployment
- Search index managed through Algolia with API key configuration