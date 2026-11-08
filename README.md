# 13 Studios — Quiet Luxury Creative Agency & Design Architecture

[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat&logo=react&logoColor=black)](https://reactjs.org/)
[![GSAP](https://img.shields.io/badge/GSAP-3.12-88CE02?style=flat&logo=greensock&logoColor=white)](https://greensock.com/gsap/)
[![License](https://img.shields.io/badge/License-Proprietary-0B1F3A?style=flat)]()

> *"We believe in the power of restraint. In an attention economy saturated with noise, quiet luxury is the ultimate statement of authority."*

**13 Studios** is a high-end digital design and brand architecture consultancy website engineered with structural balance, fluid kinetic motion, and mathematical restraint.

---

## ✦ Key Features

- **The 13-Point Architectural Grid System:** Proprietary asymmetric layout matrix calculated with mathematical rigor. Includes an interactive live 13-column grid system overlay toggle.
- **Interactive Consultancy Color Themes:** Real-time theme switcher supporting 6 tailored palettes:
  - *Classic Navy + Slate* (Strategy & Advisory)
  - *Authoritative + Deep Teal* (Digital & Tech Advisory)
  - *Ink + Muted Gold* (Boutique & Premium)
  - *Warm Off-White + Oxblood* (Distinctive Editorial)
  - *Warm Off-White + Bronze* (Distinctive Editorial)
  - *Quiet Luxury Dark* (Original Studio Aesthetic)
- **Interactive Case Study Monograph Engine:** 6 comprehensive case studies (*Vapor*, *Aero*, *Chrono*, *Aether*, *Solaria*, *Valence*) with category filtering, quantitative business metrics, deliverables breakdown, client endorsements, and secondary production photographic plates.
- **Kinetic Physics & Micro-Interactions:** Custom mouse cursor, 3D perspective hover cards with 13° tilt, smooth scrubbed parallax, liquid SVG navigation transitions, and page entrance counter (`00` to `13`).
- **Interactive Editorial Monograph Reader:** Thought leadership essays with reading progress bar, pull-quotes, and direct author consultation links.
- **Executive Scoping Engine & FAQ Accordion:** Project inquiry builder with disciplinary scope, investment brackets, delivery timeline selection, and client advisory guidance.
- **Global Studio Footprint:** Real-time East Africa Time (`EAT / UTC+3`) clock, studio status indicator, and Kiambu / Nairobi flagship coordinates (`01°17'S, 36°49'E`).

---

## ✦ Tech Stack

- **Framework:** React 18
- **Bundler / Dev Server:** Vite 5
- **Animation & Scroll Choreography:** GSAP 3 (ScrollTrigger)
- **Styling:** Modular CSS Tokens with responsive media queries and CSS custom properties
- **Typography:** Playfair Display (Serif) & Inter (Sans-serif)
- **Icons:** FontAwesome 6 Free

---

## ✦ Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/kim425716-dotcom/13-studios.git

# Navigate to project directory
cd 13-studios

# Install dependencies
npm install
```

### Development

```bash
# Start Vite development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## ✦ Project Directory Structure

```
13-studios/
├── assets/                  # High-resolution architectural photography & project plates
├── public/                  # Static assets & favicon
│   └── assets/              # Public asset folder for Vite builds
├── src/
│   ├── components/
│   │   ├── ArticleModal.jsx      # Editorial article reading modal
│   │   ├── CaseStudyModal.jsx    # In-depth case study monograph modal
│   │   ├── Contact.jsx           # Scope estimator, directory & FAQ accordion
│   │   ├── CustomCursor.jsx      # Physics-informed trailing cursor
│   │   ├── Footer.jsx            # Studio directory & newsletter dispatch
│   │   ├── Header.jsx            # Live EAT time clock & floating navigation
│   │   ├── Hero.jsx              # Hero section with studio metrics
│   │   ├── Journal.jsx           # Monograph articles & author previews
│   │   ├── MenuOverlay.jsx       # SVG morphing navigation overlay
│   │   ├── PageLoader.jsx        # 00-13 counting entrance sequence
│   │   ├── PartnerTicker.jsx     # Institutional marquee & industry honors
│   │   ├── Studio.jsx            # Philosophy, 4 pillars & 13 methodology
│   │   ├── Testimonials.jsx      # Executive client endorsements
│   │   ├── ThemeSwitcher.jsx     # 6-theme consultancy color switcher
│   │   └── Work.jsx              # Filterable 6-project portfolio
│   ├── App.jsx                   # Main layout container & 13-grid overlay
│   ├── index.css                 # Quiet luxury design system & tokens
│   └── main.jsx                  # Application entry point
├── index.html                    # HTML shell
├── package.json                  # Dependencies & scripts
└── vite.config.js                # Vite build configuration
```

---

## ✦ License

© 2026 13 Studios Ltd. All rights reserved. Designed & Engineered in Quiet Luxury.

