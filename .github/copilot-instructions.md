# Copilot Instructions for This Repository

## Build, test, and lint commands

This repository is a **plain static website** (`index.html`, `styles.css`, `script.js`) with no package manager, build step, test runner, or linter configured.

- **Build:** none configured
- **Lint:** none configured
- **Test suite:** none configured (so no single-test command exists)

For local preview, run either:

```bash
python -m http.server 8000
# then open http://localhost:8000
```

or open `index.html` directly in a browser.

## High-level architecture

The app is a single-page portfolio with strict separation of concerns:

1. **`index.html`** defines all content sections and semantic structure (hero, skills, projects, process, stats, testimonials, FAQ, contact), plus ARIA attributes for nav and FAQ interactions.
2. **`styles.css`** owns all design tokens and presentation (dark theme variables, glassmorphism cards, responsive breakpoints at `1100px` and `760px`, reveal transitions, and component states like `.is-open`, `.is-visible`, `.is-scrolled`).
3. **`script.js`** wires behavior by toggling CSS classes and ARIA state (mobile nav, sticky-header/back-to-top behavior, reveal-on-scroll, stat counter animation, FAQ accordion, and demo contact form submit handling).

`blueprint.md` documents the intended product/content direction (Vietnamese-first copy style, section composition, interaction model) and should stay aligned with changes to content structure.

## Key conventions in this codebase

- **No external dependencies by design:** keep the site dependency-free and framework-free unless explicitly requested.
- **Class/state contract is the UI API:** JavaScript should control behavior by toggling CSS state classes (`.is-open`, `.is-visible`, `.is-scrolled`) rather than applying inline styles.
- **Reveal animation pattern:** any element that should animate on scroll must include `.reveal`; the observer adds `.is-visible` once and unobserves.
- **Stats counter pattern:** numeric counters use `data-counter` attributes and are animated when `.stats-section` enters the viewport.
- **FAQ structure dependency:** each `.faq-item` button must be immediately followed by its `.faq-panel` sibling (`.faq-item[aria-expanded="true"] + .faq-panel` controls visibility).
- **Responsive nav behavior:** mobile menu behavior depends on `.nav-toggle[aria-expanded]` + `.site-nav.is-open`; keep those in sync.
- **Content voice:** copy is primarily Vietnamese with a polished “Gen Z but professional” tone, matching `blueprint.md`.
