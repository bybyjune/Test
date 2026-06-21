---

version: 1.0.0
name: LDS site Design.md
description: A clean documentation interface with LINE Green accent, generous white space, and SF Pro / LINE Seed Sans typography. Component-focused layout with left navigation, persistent header, and modular content cards that prioritize clarity and usability.

colors:
  primary: "#00C73C"
  primary-pressed: "#069540"
  red: "#FF334B"
  link: "#4D73FF"
  ink: "#000000"
  ink-alt: "#111111"
  body: "#000000"
  body-secondary: "#616161"
  body-tertiary: "#949494"
  body-disabled: "#CCCCCC"
  body-placeholder: "#999999"
  canvas: "#FFFFFF"
  canvas-secondary: "#F0F0F0"
  canvas-tertiary: "#FBFBFB"
  canvas-selected: "#EFEFEF"
  border-light: "#EFEFEF"
  border-default: "#E8E8E8"
  border-medium: "#B7B7B7"
  inactive-bg: "#DDDDDD"
  inactive-text: "#949494"
  on-primary: "#FFFFFF"

typography:
  hero: # LINE Seed Sans
    fontFamily: "LINE Seed Sans, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 60px
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: 0px
  display: # LINE Seed Sans
    fontFamily: "LINE Seed Sans, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 48px
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: 0px
  h1: # LINE Seed Sans
    fontFamily: "LINE Seed Sans, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 40px
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: 0px
  h2: # LINE Seed Sans
    fontFamily: "LINE Seed Sans, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 32px
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: 0px
  h3: # LINE Seed Sans
    fontFamily: "LINE Seed Sans, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 28px
    fontWeight: 800
    lineHeight: 1.3
    letterSpacing: 0px
  h4: # SF Pro Text
    fontFamily: "SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 20px
    fontWeight: 800
    lineHeight: 1.3
    letterSpacing: 0px
  h5: # SF Pro Text
    fontFamily: "SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0px
  h6: # LINE Seed Sans
    fontFamily: "LINE Seed Sans, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 17px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0px
  body: # SF Pro Text
    fontFamily: "SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0px
  body-sm: # SF Pro Text
    fontFamily: "SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0px
  label: # SF Pro Text
    fontFamily: "SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0px
  caption: # SF Pro Text
    fontFamily: "SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0px
  brand-logo: # LINE Seed Sans
    fontFamily: "LINE Seed Sans, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 19px
    fontWeight: 800
    lineHeight: 1.0
    letterSpacing: 0px

rounded:
  none: 0px
  sm: 8px
  md: 12px
  pill: 20px

spacing:
  0: 0px
  4: 4px
  8: 8px
  12: 12px
  16: 16px
  20: 20px
  24: 24px
  28: 28px
  32: 32px
  40: 40px
  48: 48px
  60: 60px
  80: 80px
  100: 100px
  120: 120px

components:
  top-navi:
    backgroundColor: "rgba(255, 255, 255, 0.95)"
    backdropFilter: "blur(10px)"
    textColor: "{colors.ink}"
    borderBottom: "1px solid {colors.border-light}"
    height: 88px
    padding: 0 40px
  top-navi-home-icon:
    width: 24px
    height: 24px
  top-navi-logo:
    typography: "{typography.brand-logo}"
    textColor: "{colors.ink}"
  top-navi-item:
    fontFamily: "LINE Seed Sans, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 17px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0px
    textColor: "{colors.body-tertiary}"
    textColorActive: "{colors.ink}"
  version-badge:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0px
    border: "1px solid {colors.border-default}"
    rounded: "{rounded.pill}"
    padding: 6px 12px
    height: 28px
  header-icon:
    width: 24px
    height: 24px
    fill: "{colors.ink}"
    cursor: pointer
  language-wrapper:
    position: relative
    display: flex
    alignItems: center
  language-dropdown:
    position: absolute
    top: calc(100% + 14px)
    left: 50%
    transform: translateX(-50%)
    backgroundColor: "{colors.canvas}"
    border: "1px solid {colors.ink}"
    padding: 10px 0
    width: 80px
    zIndex: 1000
  language-item:
    height: 36px
    width: 80px
    display: flex
    alignItems: center
    justifyContent: center
    typography: "{typography.body}"
    fontWeight: 500
    textColor: "{colors.body-tertiary}"
    textColorActive: "{colors.ink}"
    textColorHover: "{colors.ink}"
    cursor: pointer
  search-bar:
    backgroundColor: "rgba(255, 255, 255, 0.95)"
    backdropFilter: "blur(10px)"
    borderBottom: "1px solid {colors.border-light}"
    height: 88px
    padding: 0 40px
    display: flex
    justifyContent: space-between
    alignItems: center
  search-bar-left:
    display: flex
    alignItems: center
  search-bar-right:
    display: flex
    alignItems: center
    gap: 20px
  search-icon:
    width: 24px
    height: 24px
  search-input:
    typography: "{typography.body}"
    textColor: "{colors.body-tertiary}"
    placeholder: "Search LDSM"
    width: 450px
    height: 24px
  search-close-icon:
    width: 24px
    height: 24px
  left-nav:
    backgroundColor: "{colors.canvas}"
    borderRight: "1px solid {colors.border-light}"
    width: 260px
    padding: 33px 34px 40px 38px
  left-nav-category-title:
    typography: "{typography.h6}"
    textColor: "{colors.ink}"
    padding: 12px 0
  left-nav-item:
    backgroundColor: transparent
    textColor: "{colors.body-tertiary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: 12px 16px
  left-nav-item-active:
    backgroundColor: "{colors.canvas-selected}"
    textColor: "{colors.ink}"
    fontWeight: 700
  right-nav:
    width: 200px
    padding: 60px 24px 80px 0
  right-nav-item:
    typography: "{typography.label}"
    textColor: "{colors.body-disabled}"
    textColorActive: "{colors.ink}"
  button-primary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    fontSize: 15px
    fontWeight: 500
    rounded: 50px
    border: "1px solid {colors.border-default}"
    padding: 0 16px 0 24px
    height: 50px
    gap: 8px
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    border: "1px solid {colors.ink}"
  radio:
    size: 20px
    border: "1px solid {colors.border-medium}"
    rounded: 50%
  radio-selected:
    border: "1px solid {colors.primary}"
    innerSize: 10px
    innerColor: "{colors.primary}"
  tab:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body-tertiary}"
    fontFamily: "SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0px
    border: "1px solid {colors.border-default}"
    borderBottom: none
    rounded: 8px 8px 0 0
    height: 56px
    minWidth: 120px
    padding: 0 30px
  tab-selected:
    backgroundColor: "{colors.canvas-selected}"
    textColor: "{colors.ink-alt}"
    fontWeight: 600
  card-image:
    backgroundColor: "{colors.canvas}"
    border: "1px solid {colors.border-default}"
    rounded: "{rounded.none}"
    width: 408px
    height: 280px
    marginBottom: 22px
  card-title:
    fontFamily: "SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 28px
    fontWeight: 800
    lineHeight: 1.3
    letterSpacing: 0px
    textColor: "{colors.ink}"
    marginBottom: 16px
  card-text:
    fontFamily: "SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
    textColor: "{colors.body-secondary}"
  page-title:
    typography: "{typography.display}"
    textColor: "{colors.ink}"
    padding: 100px 0 20px 0
  section-title:
    typography: "{typography.h2}"
    textColor: "{colors.ink}"
    padding: 0 0 24px 0
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderTop: "1px solid {colors.border-light}"
    padding: 40px 40px
  footer-copyright:
    typography: "{typography.caption}"
    textColor: "{colors.ink}"
  footer-link:
    typography: "{typography.caption}"
textColor: "{colors.ink}"

---

## Overview

LINE Design System is a documentation-first interface built around **LINE Green** (#00C73C) as the single primary action color. The design prioritizes clarity and usability through generous white space, a persistent left navigation (260px), a clean header (88px), and modular content sections. Typography pairs **LINE Seed Sans** (800 weight) for all headings with **SF Pro Text** (400 weight) for body copy, creating a confident but approachable reading experience.

The system is built for design system documentation sites — component pages, foundation pages, and guidelines — where the goal is to let the content and examples breathe. Every page follows a consistent three-column layout: left navigation for structure, main content for documentation, and optional right navigation for anchor links. Interaction is minimal and deliberate: LINE Green for primary actions, subtle hover states, and clean borders for separation.

**Key Characteristics:**

- Single accent color: LINE Green (#00C73C) for all primary actions, active states, and interactive elements
- Persistent left navigation (260px) with category grouping and selected state highlighting
- Clean header (88px) with logo, horizontal navigation, and version badge
- Generous spacing: 80px for page padding, 40px for section spacing, 24px for card padding
- Typography hierarchy: LINE Seed Sans (extra-bold, 800) for headings, SF Pro Text (regular, 400) for body
- Minimal borders: 1px #E8E8E8 for cards and dividers, #EFEFEF for subtle separation
- Radius scale: 8px for buttons/small elements, 12px for cards, 20px for badges
- White-first color system: #FFFFFF base, #FBFBFB for navigation, #EFEFEF for selected states

## Colors

> **Source:** Analyzed from LINE Design System documentation site and Pencil design files. Color system is consistent across component pages, foundation pages, and guidelines.

### Brand & Accent

- **LINE Green** (`{colors.primary}` — #00C73C): The signature LINE brand color. Used for all primary buttons, active states, selected radio buttons, and interactive elements. This is the single accent color across the entire system.
- **Pressed State** (`{colors.primary-pressed}` — #069540): A darker variant of LINE Green used for button pressed/active states. Provides tactile feedback without changing the hue.
- **LINE Red** (`{colors.red}` — #FF334B): Destructive actions and error states. Used sparingly for delete, remove, or critical warning buttons.
- **Link** (`{colors.link}` — #4D73FF): Hyperlinks and text links within body copy. Distinct from primary action color to differentiate navigation from in-content references.

### Text

- **Primary Ink** (`{colors.ink}` — #000000): High-emphasis text for headings, body paragraphs, and navigation labels. Pure black for maximum clarity.
- **Ink Alt** (`{colors.ink-alt}` — #111111): Near-black used for selected tab text and emphasized UI elements where pure black feels too harsh.
- **Body** (`{colors.body}` — #000000): Default body text color, same as primary ink.
- **Body Secondary** (`{colors.body-secondary}` — #616161): Medium-emphasis text for descriptions, secondary content, and subtext.
- **Body Tertiary** (`{colors.body-tertiary}` — #949494): Low-emphasis text for inactive navigation items, hints, and tertiary content.
- **Body Disabled** (`{colors.body-disabled}` — #CCCCCC): Disabled state text for inactive buttons and form elements.
- **Body Placeholder** (`{colors.body-placeholder}` — #999999): Placeholder text for input fields and empty states.

### Surface

- **Pure White** (`{colors.canvas}` — #FFFFFF): The primary background for all pages, cards, buttons, and content areas.
- **Canvas Secondary** (`{colors.canvas-secondary}` — #F0F0F0): Secondary background for demo containers and alternate surfaces.
- **Canvas Tertiary** (`{colors.canvas-tertiary}` — #FBFBFB): Used for left navigation background and subtle surface differentiation.
- **Selected State** (`{colors.canvas-selected}` — #EFEFEF): Background for active navigation items and selected tabs.

### Borders

- **Border Light** (`{colors.border-light}` — #EFEFEF): Subtle dividers for header bottom border and left nav right border.
- **Border Default** (`{colors.border-default}` — #E8E8E8): Standard border for cards, version badges, and component containers.
- **Border Medium** (`{colors.border-medium}` — #B7B7B7): Emphasized borders for unselected radio buttons and form inputs.

### Interactive

- **Inactive Background** (`{colors.inactive-bg}` — #DDDDDD): Background for inactive/disabled buttons.
- **Inactive Text** (`{colors.inactive-text}` — #949494): Text color for inactive/disabled buttons.
- **On Primary** (`{colors.on-primary}` — #FFFFFF): Text color on LINE Green backgrounds (buttons, active states).

### Color Philosophy

LINE Design System uses a **single-accent approach**: LINE Green carries all primary actions. There is no secondary brand color. Emphasis comes from typography weight (800 for headings, 700 for labels, 400 for body) and surface changes (white → #FBFBFB → #EFEFEF) rather than color variety. Borders are whisper-soft (#E8E8E8, #EFEFEF) and never compete with content.

## Typography

### Font Families

- **Heading**: `LINE Seed Sans, -apple-system, BlinkMacSystemFont, sans-serif` — LINE's proprietary brand typeface. Used for all headings, navigation category titles, and the logo. Always set at weight 700–900.
- **Body**: `SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif` — Apple's system font optimized for UI and body text. Used for paragraphs, descriptions, navigation items, buttons, and labels. Weight 400 for body, 600–700 for emphasis.

### Hierarchy


| Token                     | Size | Weight | Line Height | Letter Spacing | Use                                           |
| ------------------------- | ---- | ------ | ----------- | -------------- | --------------------------------------------- |
| `{typography.hero}`       | 60px | 800    | 1.2         | 0              | Hero headlines on landing pages               |
| `{typography.display}`    | 48px | 800    | 1.2         | 0              | Page main titles (Box Button, Radio, etc.)    |
| `{typography.h1}`         | 40px | 800    | 1.2         | 0              | Major section headings                        |
| `{typography.h2}`         | 32px | 800    | 1.2         | 0              | Section titles (Anatomy, States, Types)       |
| `{typography.h3}`         | 28px | 800    | 1.3         | 0              | Sub-section headings                          |
| `{typography.h4}`         | 20px | 800    | 1.3         | 0              | Card titles, sub-section labels               |
| `{typography.h5}`         | 18px | 700    | 1.3         | 0              | Description titles, emphasized labels         |
| `{typography.h6}`         | 17px | 700    | 1.2         | 0              | Navigation category titles, top nav           |
| `{typography.body}`       | 16px | 400    | 1.6         | 0              | Default body text, button labels              |
| `{typography.body-sm}`    | 15px | 400    | 1.5         | 0              | Small body text, navigation items, tab labels |
| `{typography.label}`      | 14px | 700    | 1.5         | 0              | Labels, state labels, version badge           |
| `{typography.caption}`    | 13px | 500    | 1.5         | 0              | Captions, footer text, fine print             |
| `{typography.brand-logo}` | 16px | 900    | 1.0         | 0              | Header logo ("Messenger")                     |


### Principles

- **LINE Seed Sans at weight 800 for all headings.** This creates a bold, confident voice that frames every section. Weight 700 is used only for H5 and H6 where a slightly lighter touch is needed.
- **SF Pro Text at weight 400 for all body copy.** Clean, readable, neutral. Weight 600–700 is reserved for inline emphasis and labels.
- **16px body text, not 14px or 15px.** LINE Design System runs body at 16px for comfortable reading at documentation scale.
- **1.6 line-height for body text.** Generous leading creates a reading-first experience. Headings tighten to 1.2–1.3 for impact.
- **Letter-spacing is 0px for all typography levels.** Web browsers render letter-spacing differently than design tools, so no negative tracking is applied in the actual implementation.
- **Weight ladder: 400 / 500 / 600 / 700 / 800 / 900.** Body is 400. Labels are 700. Headings are 800. The brand logo is the only 900.

### Font Substitutes

LINE Seed Sans is LINE's proprietary typeface. When building off-brand:

- Use `system-ui, -apple-system, BlinkMacSystemFont` as the fallback stack — resolves to SF Pro on macOS/iOS.
- For non-Apple platforms, **Inter** (Google Fonts, variable) at weight 800 with `font-feature-settings: "ss03"` approximates LINE Seed Sans' character.
- For SF Pro Text body, Inter at weight 400 is a close substitute.

## Layout

### Spacing System

- **Base unit:** 4px. All structural spacing snaps to multiples of 4: 8px, 12px, 16px, 24px, 32px, 40px, 80px.
- **Tokens:** `{spacing.4}` 4px · `{spacing.8}` 8px · `{spacing.12}` 12px · `{spacing.16}` 16px · `{spacing.20}` 20px · `{spacing.24}` 24px · `{spacing.28}` 28px · `{spacing.32}` 32px · `{spacing.40}` 40px · `{spacing.48}` 48px · `{spacing.60}` 60px · `{spacing.80}` 80px · `{spacing.100}` 100px · `{spacing.120}` 120px.
- **Page padding:** `{spacing.80}` (80px) for horizontal main content padding.
- **Section spacing:** `{spacing.80}` (80px) between major sections.
- **Card padding:** `{spacing.24}` (24px) inside card components.
- **Component gap:** `{spacing.16}` (16px) default gap between inline elements.

### Page Structure

- **Max width:** 1440px for full page, 1180px for main content area.
- **Left navigation:** `{component.left-nav}` — 260px fixed width, sticky, full viewport height.
- **Right navigation:** `{component.right-nav}` — 200px fixed width, sticky, optional anchor links.
- **Main content:** Flex 1, max-width 1180px, centered between left and right nav.
- **Header:** `{component.header}` — 88px height, full-width, sticky top.

### Grid & Container

- **Max content width:** 1180px on main documentation sections, 1440px for full-width pages.
- **Column patterns:** Single-column stack for documentation content; 2–3 column grid for card galleries or component showcases.
- **Gutters:** 24px between cards in multi-column layouts.

### Whitespace Philosophy

LINE Design System uses generous white space to let documentation breathe. Page titles start with 100px top padding. Sections are separated by 80px. Cards have 24px internal padding. The left navigation has 32px side padding to keep category titles and nav items from feeling cramped. The goal is a reading-first experience where hierarchy is clear and content is never crowded.

## Elevation & Depth


| Level          | Treatment                               | Use                                   |
| -------------- | --------------------------------------- | ------------------------------------- |
| Flat           | No shadow, no border                    | Full-width sections, page backgrounds |
| Soft border    | 1px `{colors.border-light}` (#EFEFEF)   | Header bottom, left nav right border  |
| Default border | 1px `{colors.border-default}` (#E8E8E8) | Cards, version badges, tabs           |
| Medium border  | 1px `{colors.border-medium}` (#B7B7B7)  | Unselected radio buttons, form inputs |


**Shadow philosophy.** LINE Design System uses **no drop shadows** in static states. Elevation comes entirely from (a) surface-color change (white → #FBFBFB → #EFEFEF) and (b) 1px borders. The system is flat by design — emphasis is achieved through typography weight, color, and spacing, not through layered shadows.

**Exception:** Interactive cards with links use a subtle hover effect — the card lifts 8px upward (`transform: translateY(-8px)`) with a soft drop shadow (`0 8px 16px rgba(0,0,0,0.08)`) appearing on hover, with a 0.2s ease transition.

### Decorative Depth

- **Surface alternation** creates visual rhythm without shadows — white content on #FBFBFB navigation, #EFEFEF for selected states.
- **Border hierarchy** uses three border colors (#EFEFEF, #E8E8E8, #B7B7B7) to indicate different levels of separation without adding depth.

## Shapes

### Border Radius Scale


| Token            | Value | Use                                                |
| ---------------- | ----- | -------------------------------------------------- |
| `{rounded.none}` | 0px   | Full-bleed sections, no rounding                   |
| `{rounded.sm}`   | 8px   | Buttons, navigation items, tabs (top corners only) |
| `{rounded.md}`   | 12px  | Cards, demo containers                             |
| `{rounded.pill}` | 20px  | Version badge, pill-shaped elements                |


### Component Geometry

- **Buttons:** 52px height, 8px radius, 16px × 24px padding — rectangular with slightly rounded corners.
- **Radio buttons:** 20px outer circle, 10px inner dot when selected, 50% border-radius (perfect circle).
- **Tabs:** 56px height, 95px min-width, 8px radius on top corners only (bottom is flat against content area).
- **Cards:** 12px radius, 1px #E8E8E8 border, 24px internal padding.
- **Navigation items:** 8px radius, 12px × 16px padding, hover/active states change background to #EFEFEF.

### Image & Media

- **Component screenshots:** Full-width or constrained to content width, 1px border (#E8E8E8), 8px radius.
- **Demo containers:** 12px radius, #F0F0F0 background, 40px padding.
- **No rounded imagery on hero sections** — images are rectangular. Rounding appears only on inline component examples and cards.

## Components

### Top Navigation

`**top-navigation`** — Persistent top bar on every page. Background `{colors.canvas}` (white), height 88px, 1px solid `{colors.border-light}` bottom border, horizontal padding 80px. Left side: home icon (15px gap) + logo + horizontal navigation (40px gap total from home icon). Right side: version badge.

`**home-icon**` — Simple house-shaped icon 32x32px, black fill (#000000). Single path forming house silhouette with door.

`**logo**` — "Messenger" in `{typography.brand-logo}` (LINE Seed Sans 16px / 900), color `{colors.ink}`.

`**nav-item**` — Horizontal navigation links. Font family: LINE Seed Sans, size: 17px, weight: 700, letter-spacing: 0px. Default color `{colors.body-tertiary}` (#B7B7B7), active state color `{colors.ink}` (#000000). Hover transition: color 0.2s. Gap between items: 40px.

`**version-badge**` — Pill-shaped version indicator. Border `1px solid {colors.border-default}`, rounded `{rounded.pill}` (20px), padding `8px 16px`, font size 14px, weight 500, color `{colors.ink}`.

### Left Navigation

`**left-nav**` — Persistent left sidebar on all documentation pages. Width 260px, background `{colors.canvas}` (#FFFFFF), border-right `1px solid {colors.border-light}`, padding `32px 32px 40px 32px`, sticky position, full viewport height minus header.

`**left-nav-category-title**` — Category headings ("Common Component", "Buttons"). Font family: SF Pro Text, size: 17px, weight: 700, letter-spacing: 0px, color `{colors.ink}`, padding `12px 0`.

`**left-nav-item**` — Navigation links. Typography `{typography.body-sm}` (15px / 400), color `{colors.body-tertiary}` (#949494), rounded `{rounded.sm}` (8px), padding `12px 16px`. Hover: background `{colors.canvas-selected}`.

`**left-nav-item-active**` — Selected navigation item. Background `{colors.canvas-selected}` (#EFEFEF), color `{colors.ink}`, weight upgraded to 700.

### Buttons

`**button-primary**` — LINE Green action button. Background `{colors.primary}` (#00C73C), text `{colors.on-primary}` (#FFFFFF), typography `{typography.body}` (16px / 700), rounded `{rounded.sm}` (8px), padding `16px 24px`, height 52px, border none. Hover/focus: slight brightness increase. Active/pressed: background `{colors.primary-pressed}` (#069540).

`**button-primary-pressed**` — Pressed state. Background `{colors.primary-pressed}` (#069540), text `{colors.on-primary}`. Same dimensions as primary.

`**button-inactive**` — Disabled button. Background `{colors.inactive-bg}` (#DDDDDD), text `{colors.inactive-text}` (#949494), same dimensions as primary. No hover state, cursor: not-allowed.

`**button-red**` — Destructive action button (rare). Background `{colors.red}` (#FF334B), text `{colors.on-primary}`, same dimensions as primary. Used for delete, remove, or critical actions.

### Radio Button

`**radio**` — Unselected state. 20px × 20px outer circle, border `1px solid {colors.border-medium}` (#B7B7B7), rounded 50%, background transparent, cursor pointer.

`**radio-selected**` — Selected state. Border `1px solid {colors.primary}` (#00C73C), inner dot 10px × 10px, background `{colors.primary}`, centered inside outer circle, border-radius 50%.

Usage: Pair with label text in `{typography.body-sm}`, 12px gap between radio and label.

### Tabs

`**tabs-row**` — Tab container with full-width border-bottom `1px solid {colors.border-default}` (#E8E8E8) that runs across the entire width, creating a baseline under all tabs and empty space.

`**tab**` — Tab button. Background `{colors.canvas}` (white) for unselected, `{colors.canvas-selected}` (#EFEFEF) for selected. Text `{colors.body-tertiary}` (#949494) for unselected, `{colors.ink-alt}` (#111111) for selected. Font family: SF Pro Text, size: 15px, weight: 500, border `1px solid {colors.border-default}`, height 56px, min-width 120px, padding `0 30px`. Cursor pointer.

Selected tab has border-bottom in the same color as its background (#EFEFEF) to visually hide the baseline border underneath, creating a seamless connection to the content area.

Border-radius rules: All tabs have squared corners (0px radius) except the first tab's top-left corner (8px) and the last tab's top-right corner (8px). All interior corners where tabs meet remain sharp (0px) to create continuous lines between adjacent tabs.

`**tab-content**` — Content area below tabs. Background `{colors.canvas-selected}` (#EFEFEF) matching the selected tab background, border `1px solid {colors.border-default}`, border-top none, border-radius 0 (all corners sharp/squared), padding 24px. The selected tab and content area share the same background color with no border between them, appearing as one unified rectangular surface.

### Card

**Card Large (Default)**

`**card-image`** — Image container. Background `{colors.canvas}` (#FFFFFF), border `1px solid {colors.border-default}` (#E8E8E8), border-radius 0px (flat, no rounding), height 280px, width 408px, margin-bottom 22px. Used for displaying component illustrations, diagrams, or preview images.

`**card-title**` — Card heading below image. Font family: SF Pro Text, size: 28px, weight: 800, line-height: 1.3, letter-spacing: 0px, color `{colors.ink}` (#000000), margin-bottom 16px.

`**card-text**` — Card description below title. Font family: SF Pro Text, size: 18px, weight: 400, line-height: 1.6, color `{colors.body-secondary}` (#616161).

Structure: Image box (408×280px, 1px #E8E8E8 border, flat) → 22px gap → Text container (5px top padding) → Title (28px / 800) → 16px gap → Description (18px). The image, title, and description are **not wrapped in a container** — they are separate elements stacked vertically with defined spacing. The text container has 5px top padding for optical alignment.

**Interactive State (when card is a link):** On hover, the **image only** lifts 4px upward with `transform: translateY(-4px)` and gains a subtle shadow `0 6px 12px rgba(0,0,0,0.06)`. Text (title and description) remains in place. Transition: `all 0.2s ease`. Cursor: pointer on entire card.

**Responsive Grid Layout:**

- Desktop (≥ 1025px): 3-column grid, 30px gap
- Tablet (769–1024px): 2-column grid, 24px gap
- Mobile (≤ 768px): 1-column stack, 24px gap

Grid implementation: `grid-template-columns: repeat(3, 1fr)` with media queries adjusting to `repeat(2, 1fr)` at tablet breakpoint and `1fr` at mobile breakpoint.

**Card Medium**

`**card-medium-image`** — Medium-sized image container for grid layouts. Background `{colors.canvas}` (#FFFFFF), border `1px solid {colors.border-default}` (#E8E8E8), border-radius 0px (flat), height 220px, width 320px, margin-bottom 16px. Maintains same aspect ratio as Card Large (approximately 1.45:1).

`**card-medium-title**` — Medium card heading. Font family: SF Pro Text, size: 20px, weight: 800, line-height: 1.3, letter-spacing: 0px, color `{colors.ink}` (#000000), margin-bottom 14px.

`**card-medium-text**` — Medium card description. Font family: SF Pro Text, size: 16px, weight: 400, line-height: 1.6, color `{colors.body-secondary}` (#616161).

Structure: Image box (320×220px) → 16px gap → Text container (5px top padding) → Title (20px / 800) → 14px gap → Description (16px). Same vertical stacking pattern as Card Large, optimized for 3-column grid layouts with 30px gaps. The text container has 5px top padding for optical alignment.

**Interactive State (when card is a link):** On hover, the **image only** lifts 4px upward with `transform: translateY(-4px)` and gains a subtle shadow `0 6px 12px rgba(0,0,0,0.06)`. Text (title and description) remains in place. Transition: `all 0.2s ease`. Cursor: pointer on entire card.

**Responsive Grid Layout:**

- Desktop (≥ 1025px): 3-column grid, 30px gap
- Tablet (769–1024px): 2-column grid, 24px gap
- Mobile (≤ 768px): 1-column stack, 24px gap

Grid implementation: `grid-template-columns: repeat(3, 1fr)` with media queries adjusting to `repeat(2, 1fr)` at tablet breakpoint and `1fr` at mobile breakpoint.

### Typography Components

`**page-title`** — Main page heading. Typography `{typography.display}` (48px / 800), color `{colors.ink}`, padding `100px 0 20px 0` (100px top for breathing room).

`**section-title**` — Section headings ("Anatomy", "States", "Types"). Typography `{typography.h2}` (32px / 800), color `{colors.ink}`, padding `0 0 24px 0`.

### Footer

`**footer**` — Page footer. Background `{colors.canvas}` (white), border-top `1px solid {colors.border-light}`, padding `40px 80px`. Left side: copyright text ("© LY Corporation"). Right side: footer links ("Terms of Use", "FAQ", "Slack", "Contact Us", "Wiki", "Github") in `{typography.caption}` (13px / 500), color `{colors.ink}`, gap 32px.

## Do's and Don'ts

### Do

- **Use exact token names as class names.** When applying styles defined in DESIGN.md, use the token name directly as the CSS class name without modification. Example: `<h1 class="display">` for Display typography (48px/800/1.2), `<h2 class="h2">` for H2 typography (32px/800/1.2).
- **Do not rename tokens.** If DESIGN.md defines `display`, use `class="display"` — not `class="page-title"`, `class="main-heading"`, or any other name. Token names are not suggestions; they are the exact class names to use in your HTML/CSS.
- Use `{colors.primary}` (LINE Green #00C73C) for all primary actions — buttons, active states, selected radio buttons, and focus indicators.
- Set all headings in LINE Seed Sans at weight 800. This is the brand voice.
- Set all body text in SF Pro Text at weight 400, 16px size, 1.6 line-height. This is the reading voice.
- Use 1px borders in `{colors.border-default}` (#E8E8E8) for cards and component containers. Keep borders subtle.
- Apply 80px horizontal padding for main content areas, 24px for card interiors, 32px for navigation.
- Use `{rounded.sm}` (8px) for buttons and small interactive elements, `{rounded.md}` (12px) for cards.
- Alternate between `{colors.canvas}` (white) and `{colors.canvas-tertiary}` (#FBFBFB) for surface variation.
- Keep the left navigation at 260px width with #FBFBFB background and 1px #EFEFEF right border.
- Use `{colors.canvas-selected}` (#EFEFEF) for active/selected states in navigation and tabs.
- Maintain a 4px base spacing unit — all structural spacing should be multiples of 4.

### Don't

- **Don't rename tokens when implementing.** AI tools often try to create "semantic" class names like `page-title` or `section-heading` when implementing DESIGN.md tokens. This breaks the system. Always use the exact token name: `display`, `h2`, `body`, etc.
- **Don't modify token values.** If `display` is 48px/800/1.2, use exactly those values in CSS. Don't adjust to 46px or change line-height to 1.3 "to make it look better" — that breaks the system.
- Don't use multiple accent colors — LINE Green is the single action color across the entire system.
- Don't set headings in SF Pro Text or body text in LINE Seed Sans — the font pairing is intentional and strict.
- Don't use weight 500 or weight 600 for body text — body is always 400. Emphasized body uses 700 (labels).
- Don't apply shadows to any UI elements — LINE Design System is flat by design.
- Don't use gradients or decorative fills — all surfaces are solid colors.
- Don't tighten spacing below the 4px base unit — structural rhythm depends on 8/12/16/24 multiples.
- Don't round all four corners of tabs — tabs use `8px 8px 0 0` (top corners only) to connect with content.
- Don't use pure black borders — borders are always #E8E8E8, #EFEFEF, or #B7B7B7 for a softer feel.
- Don't set navigation items or tabs at weight 800 — reserve 800 for page/section headings only.
- Don't reduce line-height below 1.6 for body text — generous leading is part of the reading experience.

## Responsive Behavior

### Breakpoints


| Name    | Width       | Key Changes                                                                                                                   |
| ------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Mobile  | ≤ 768px     | Left nav collapses to hamburger menu; header padding reduces to 16px; content padding reduces to 24px; typography scales down |
| Tablet  | 769–1024px  | Left nav remains visible but width reduces to 200px; right nav hides; header nav may collapse                                 |
| Desktop | 1025–1440px | Full layout with left nav (260px), main content (max 1180px), optional right nav (200px)                                      |
| Wide    | ≥ 1441px    | Content locks at 1440px, extra width absorbed by margins                                                                      |


### Touch Targets

- Minimum 44 × 44px for all interactive elements on mobile.
- `{component.button-primary}` at 52px height exceeds minimum.
- Navigation items at 15px text + 12px padding × 2 = 39px height — increase to 16px padding on mobile for 47px total.
- Radio buttons at 20px size are below minimum — increase touch target to 44px with transparent padding or larger hit area.

### Collapsing Strategy

- **Top Navigation**: Logo + hamburger on mobile (≤ 768px); full horizontal nav returns at 769px.
- **Left nav**: Off-canvas drawer on mobile (≤ 768px); persistent sidebar at 769px and above.
- **Right nav**: Hidden on mobile and tablet (≤ 1024px); visible on desktop (1025px+).
- **Content padding**: 80px → 24px on mobile; 80px → 40px on tablet.
- **Typography scaling**: Display (48px) → 32px on mobile; Body (16px) stays same; Hero (60px) → 40px on mobile.

### Image Behavior

- Component screenshots use responsive `max-width: 100%` to scale within their container.
- Demo containers maintain 40px padding on desktop, reduce to 24px on mobile.
- Cards stack from multi-column to single-column at mobile breakpoint (≤ 768px).

## Iteration Guide

1. Reference tokens using `{token.refs}` everywhere — never inline hex codes or pixel values.
2. When adding a new component, define it first in the `components:` YAML frontmatter with all states (`-active`, `-pressed`, `-selected`), then document it in the Components section with usage context.
3. Headings always use LINE Seed Sans at weight 800. Body always uses SF Pro Text at weight 400. This is non-negotiable.
4. The single accent color is LINE Green (#00C73C). No secondary brand colors exist. LINE Red (#FF334B) and Link (#4D73FF) are functional colors, not brand accents.
5. Use 1px borders in #E8E8E8 or #EFEFEF. Never use shadows or gradients.
6. When in doubt about spacing: use 80px for page/section padding, 24px for card padding, 16px for component gaps, 4px for micro-spacing.
7. Border radius: 8px for buttons/small UI, 12px for cards, 20px for pills. No in-between values.

## Known Gaps

- Form validation and error states are minimally documented — only inactive button and red button are defined.
- Input fields (text inputs, dropdowns, checkboxes) are not yet tokenized.
- Mobile-specific component variants (hamburger menu, off-canvas drawer) are not yet fully specified.
- Dark mode is not defined — this is a light-only system.
- Loading states for buttons (spinner icon, disabled during load) are mentioned conceptually but not tokenized.
- Specific animation timings and easing functions are not documented — transitions default to 0.2s ease.
- Table components for specification sheets and comparison tables are not defined.
- Tooltip and popover patterns are not documented.

