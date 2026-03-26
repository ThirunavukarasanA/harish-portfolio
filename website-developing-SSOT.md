## Website Developing SSOT – Harish Photography Portfolio

### 1. Original Prompt (from user)

> ok now i need a new Photography portfolio website like add sections like top nav bar, hero section, about section,image gallery section, events covered section and contact section and in between some section add CTAs and this theme is dark, gray and white and which color is sutted for this dark theme use that color and this website look like vibrant and stunning look and its more responsive and look animated use vibrant font which suted for this photography and create a SSOT for this website SSSOT name like website developing SSOT add this i given prompt in that SSOT

This document is the **single source of truth (SSOT)** for the Harish photography portfolio site.

**Additional prompt from user (animation + Unsplash + workflow rule):**

> ok now take sample images in unplash to load the images and its not look like animated so make it animated and add this pompt in SSOT once you starting development read this SSOT to know that work in completed

**Workflow rule:** Before starting any new development or changes on this site, **read this SSOT fully**. When you finish, **verify your work against this SSOT** to confirm that all requirements are met and the design remains consistent.

---

### 2. Purpose & Goals

- **Primary purpose**: Showcase Harish’s photography work (portraits, weddings, events, editorial) in a **dark, vibrant, cinematic** layout and make it easy for visitors to inquire or book a shoot.
- **Goals**:
  - Present a strong **visual identity**: dark theme, bold accent color, modern typography.
  - Highlight **hero work**, **about**, **gallery**, **events covered**, and **contact** clearly.
  - Include **strong CTAs** in the hero, between sections, and in the events/contact areas.
  - Make the experience **responsive**, **smooth**, and **slightly animated** (hover states, depth, gradients).

---

### 3. Tech Stack & Structure

- **Framework**: Next.js (App Router) with React.
- **Styling**: Tailwind CSS (v4, via `@import "tailwindcss"` in `globals.css`).
- **Core files**:
  - `app/layout.tsx`: Root layout (fonts, `<body>` wrapper).
  - `app/page.tsx`: Main one-page photography portfolio.
  - `app/globals.css`: Global Tailwind + theme definitions.
  - `website-developing-SSOT.md`: This SSOT document.
  - `next.config.ts`: Next image configuration (allows Unsplash remote images).

---

### 4. Visual Language

- **Base theme**: Dark, gray, white.
  - Backgrounds: `#000000`, `#020617`, `#09090b`, `#18181b` (Tailwind-esque `black` / `zinc-950` / `zinc-900`).
  - Text: `#f9fafb`, `#e4e4e7`, `#a1a1aa` (light neutral grays).
- **Accent color (chosen for dark theme)**: **Vibrant cyan**.
  - Rationale: Cyan `#22d3ee` (similar to Tailwind `cyan-400`) **glows** beautifully on dark backgrounds, feels modern and digital, and matches a **photography / light-focused** aesthetic.
  - Usage:
    - Primary buttons and CTAs (e.g., “Book a Shoot”, “Check Availability”).
    - Subtle glow effects and focus rings.
    - Small status indicators and label underlines.
- **Typography**:
  - Base: Geist sans (from `next/font` via `layout.tsx`).
  - Style: High **letter-spacing** (tracking) in small uppercase labels to give a **premium, editorial** feel.
  - Headlines use **gradient text** and strong weights to feel **vibrant and cinematic**.

---

### 5. Page Sections (What must exist)

All implemented in `app/page.tsx` as a **single scrolling page**:

1. **Top Navigation (sticky)**
   - Contents:
     - **Brand mark**: “HP” circular badge + “HARISH” name + subtitle “Photography & Visual Stories”.
     - **Nav links**: `Home`, `About`, `Gallery`, `Events`, `Contact` (anchor links to page sections).
     - **Primary CTA**: “Book a Shoot” (scrolls to contact section).
   - Style:
     - Sticky at top with `backdrop-blur`, semi-transparent black background, subtle border.
     - Uses cyan accent for hover states and CTA button.

2. **Hero Section** (`#hero`)
   - Left:
     - Small **badge** with text “Cinematic Frames. Honest Emotions.”
     - Main headline:
       - Line 1: “Photography that” (light gradient text).
       - Line 2: “makes light feel alive.” (cyan/blue gradient).
     - Supporting paragraph describing Harish’s approach (bold, vibrant visuals).
     - Two CTAs:
       - Primary: “Let’s Create Together” → scroll to contact.
       - Secondary: “View Portfolio” → scroll to gallery.
     - Quick facts row: specialties and base location (e.g., “Chennai, Available Worldwide”).
   - Right:
     - Hero **portrait image** (`/photos/hero-portrait.jpg`) inside a glassy, gradient-framed card.
     - Subtle hover scale effect and gradient overlays.
     - Status strip along the bottom: “Currently booking 2025–26 weddings” with cyan dot.

3. **About Section** (`#about`)
   - Two-column layout:
     - Left:
       - Label: “About the Photographer”.
       - Heading: Emphasizes turning passing moments into vivid stories.
       - Two body paragraphs describing style, focus on emotion, and storytelling.
       - Stats row cards:
         - Years Shooting
         - Events Covered
         - Cities & Destinations
     - Right:
       - “Photography Style” panel with 3 bullet items:
         - Clean, cinematic, modern.
         - True-to-moment colors (dark, moody with vibrant highlights).
         - Emotion-first storytelling (real connections).

4. **Mid-Page CTA Strip**
   - Between About and Gallery.
   - Content:
     - “Limited 2025–26 Slots” label and short copy about securing dates early.
     - CTA button: “Check Availability” → scroll to contact.
   - Style:
     - Full-width card with cyan/sky/indigo gradient border + glow.

5. **Image Gallery Section** (`#gallery`)
   - Intro:
     - Label: “Image Gallery”.
     - Heading: “A curated glimpse into recent work.”
     - Short descriptive paragraph.
   - Content:
     - Grid of **6 gallery cards**, based on `galleryImages` array:
       - Example labels: Wedding Stories, Portrait Sessions, Street Moments, Travel Diaries, Live Events, Editorial Frames.
    - Each card:
      - Uses `next/image` with **Unsplash sample images** (via `images.unsplash.com` URLs) configured in `next.config.ts`.
       - Hover: slight zoom and brightness increase.
       - Gradient overlay from bottom on hover.
       - Caption bar: label + “View Story ↗”.

6. **Events Covered Section** (`#events`)
   - Two-column block.
   - Left:
     - Label: “Events Covered”.
     - Heading describing range from quiet vows to loud stages.
     - Descriptive paragraph on event approach.
     - List of event types from `eventsCovered` array:
       - Destination Weddings
       - Brand & Editorial Shoots
       - Concerts & Cultural Events
   - Right:
     - Featured Experience card (e.g., 3-day wedding in Goa).
     - “Perfect for” bullet list (weddings, engagements, brand launches, concerts, etc.).
     - CTA: “Plan Your Event Coverage” → scroll to contact.

7. **Contact Section** (`#contact`)
   - Left:
     - Label: “Contact”.
     - Heading inviting the visitor to describe the story they want to capture.
     - Paragraph about response time and what info to share.
     - Quick contact info:
       - Email with `mailto:` link.
       - Instagram handle with external link.
   - Right (Form UI – demo only):
     - Fields:
       - Name
       - Email
       - Session Type (select: Wedding, Portrait, Brand / Editorial, Event / Concert, Other)
       - Date & Location
       - Message text area
     - Submit button: “Send Inquiry”.
     - Note: “This form is for demo purposes only. Replace with your preferred contact or booking system.”

8. **Footer**
   - Simple dark footer with small text:
     - `© {currentYear} Harish Photography. Crafted with light, color, and stories.`

---

### 6. Animation & Interaction Principles

- **Hover and depth**:
  - Cards (hero image, gallery items, feature panels) slightly **scale up** or shift on hover.
  - Buttons use **translateY** and **shadow glow** on hover, especially with cyan accent.
- **Smooth feel**:
  - Background gradients and subtle glows around cyan elements mimic **light leaks / lens flare** vibes.
  - Sticky nav with blur gives a premium, app-like feel.
- **Soft continuous motion (no heavy JS)**:
  - Animations are handled via **CSS transitions** and a few global keyframe classes defined in `globals.css`:
    - `.animate-float-soft` – slow floating motion for hero imagery cards.
    - `.animate-pulse-glow` – pulsing cyan glow on small accent dots/badges.
    - `.animate-pan-gradient` – gentle panning of background gradients for a live, cinematic feel.
  - These create a **noticeably animated but still elegant** experience without adding JavaScript animation libraries.

---

### 7. Responsiveness Rules

- **Mobile-first layout**:
  - Single-column stacks for hero, about, events, and contact sections.
  - Nav collapses automatically by hiding link row on small screens while keeping logo + primary CTA.
- **Tablet / Desktop**:
  - Two-column grids for hero, about, events, and contact.
  - Gallery uses `2` columns on small screens and `3` columns on large screens.
- **Touch friendliness**:
  - Buttons and interactive elements have generous padding and clear states.

---

### 8. How to Evolve This Site (while staying true to SSOT)

- **If you add new sections**, keep:
  - Dark backgrounds with zinc/black.
  - Cyan as the primary highlight color.
  - Gradient usage subtle and focused on key areas (hero, CTAs, specials).
  - Uppercase, tracked labels for small headings.
- **If you change copy**, maintain:
  - Cinematic, story-driven tone.
  - Language around light, emotion, and storytelling.
- **If you hook up a real backend / forms**:
  - Replace the demo contact form handler with your API or service (e.g., Formspree, custom API route).
  - Preserve the same layout and CTA flow.

This SSOT should be updated whenever the design language, structure, or primary flows of the site change. It defines what makes the **Harish Photography** portfolio consistent, vibrant, and on-brand.

