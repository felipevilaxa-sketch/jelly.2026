# Fika Comms — Design System

**Fika Comms** is a Chilean *agencia híbrida de comunicaciones*: PR, relationship-building and reputation on one side; digital strategy, content and social media on the other. The single product surface is a one-page marketing site.

The brand idea is **"la pausa deliberada"** — the Swedish *fika*, the intentional break. Everything in the system is calm and boutique: one accent blue, one surface tint, sharp 2/4px corners, no shadows, no gradients, no illustration.

## Sources

- **Figma:** `UI Kit.fig` (mounted read-only). Page `UI-Kit` → frame **"Versión final — Fika Comms"** (node `1:26`, 1360×2075). It contains the palette board, the type specimens, the radius tokens, the `Final / Button` component set (9 variants) and a hero composition. There is no public Figma URL on record — ask the file owner if you need edit access.
- **Uploaded:** `uploads/Logo.png` (3380×726 PNG, transparent) → copied to `assets/fika-comms-logo.png`. This is the only brand asset provided.
- **Brief notes** from the client: palette, Sora + Inter pairing, sharp radii, 8/12/16/24/32 spacing, three button styles, boutique/calm tone.

Everything here is transcribed from those two sources. Nothing was invented from memory of a public brand.

---

## CONTENT FUNDAMENTALS

**Language.** Spanish (Chile), always. English appears only in code and token names.

**Person.** First-person plural — *"Somos Fika Comms."*, *"Somos 100% agnósticos."* Never "yo". The reader is addressed with the informal *tú* in CTAs (*"Escríbenos"*), never *usted*.

**Sentence shape.** Short declaratives that end in a period, including headlines. Statements, not promises: *"Una agencia híbrida y poco convencional."* Compound offers are split with a pivot rather than a list — *"Relacionamiento, PR y reputación, por un lado. Por el otro, estrategia digital, contenidos y redes sociales."* Keep that rhythm: two halves, an explicit hinge.

**Casing.** Sentence case everywhere except eyebrows/section labels, which are ALL CAPS at 13px with 0.06em tracking (0.08em for the hero eyebrow): `AGENCIA HÍBRIDA DE COMUNICACIONES`, `PALETA DE COLORES`, `SERVICIOS`. Accents are kept in caps (HÍBRIDA).

**Tone.** Boutique, calm, professional. Confident but not loud. No exclamation marks, no superlatives ("la mejor", "líder"), no growth-hacking verbs, no agency jargon ("360°", "storytelling disruptivo"). A number is allowed when it is a stance, not a brag — *"100% agnósticos"*.

**Emoji.** Never.

**CTAs.** One or two words, imperative, informal: *Escríbenos*, *Conversemos*, *Saber más*. Never "¡Contáctanos ya!".

---

## VISUAL FOUNDATIONS

**Color.** Six values do all the work. Page is pure white `#FFFFFF`; the only tint is `#F7F8FA` (`bg/surface`), used for panels that hold content. Accent `#4D8BFF` carries every primary action and every active mark; `#EAF0FF` (`bg/accent-soft`) is its quiet companion for secondary buttons and the contact block. Text is navy `#0B1F3A` (taken from the logo) for anything structural, `#6B7280` for secondary prose, `#1F1F24` for eyebrow labels and `#73737A` for 12px captions. Borders are `#E3E5E9` / `#E5E5E8`. No third hue, no semantic red/green in the source — if a state colour is needed, ask before inventing one.

**Type.** Two families only. **Sora SemiBold** for anything that is a title: 52/58 display, 44/52 hero, 30/38 heading. **Inter** for everything else: Regular 16/26 body, 17/28 lead, 12 captions; SemiBold 13 uppercase eyebrows and 14/16/18 button labels. No italics, no light weights, no third font.

**Spacing.** 8 / 12 / 16 / 24 / 32 as the component scale; 48 / 56 / 64 / 72 as the composition scale. The canvas is 1360px with 72px gutters, sections separated by 56px, surface panels padded 48–64px, stacks inside them 24–28px. Generous whitespace is the main luxury signal — when in doubt, add space rather than a divider.

**Backgrounds.** Flat colour only. No photography, no illustration, no pattern, no texture, no gradient anywhere in the source. Full-bleed means a flat surface panel, not an image. If imagery is ever added it should be cool-toned, restrained documentary photography — but none exists today; leave the slot blank and say so.

**Borders, cards & depth.** There is **no shadow system**. Depth is a 1px inset hairline: `inset 0 0 0 1px #E5E5E8` on surface panels, `inset 0 0 0 1.5px #E3E5E9` on ghost buttons, `inset 0 0 0 1.5px #4D8BFF` on accent-marked squares. A card = `#F7F8FA` fill + 4px radius + inset hairline + 32–64px padding. Never a drop shadow, never a coloured left border.

**Corner radii.** Sharp and minimal: **2px** on small marks and swatch chips, **4px** on buttons, cards, inputs and panels, **999px** reserved (defined in the file, unused so far). Nothing else — 8px and 12px are off-brand here.

**Transparency & blur.** Only one use: the sticky header sits on white at 92% with an 8px backdrop blur. No frosted cards, no protection gradients, no scrims.

**Motion.** Minimal and quick — 120–180ms, `cubic-bezier(.2,.6,.2,1)`, colour and opacity only. No bounce, no parallax, no scroll-triggered reveals. The brand is a deliberate pause, not a performance.

**States.** Hover: primary button darkens toward navy-blue, secondary deepens its soft blue, ghost picks up the accent border; links go from accent blue to navy. Press: colour shift only, no scale, no shadow. Disabled: 40% opacity, no colour change. Focus: 1.5px accent inset ring reusing the ghost border geometry.

**Layout rules.** Single column, max 1360px, left-aligned — never centred body text. Prose is capped at ~760px. The header is the only fixed element. Grids are 3-up at 20px gaps.

---

## ICONOGRAPHY

**The source file contains no icons.** No icon font, no SVG sprite, no PNG glyphs, no emoji, no unicode symbols — the entire kit is type, flat colour and rectangles. The only decorative mark it defines is a small square (24–64px, 2px radius, `#EAF0FF` fill, 1.5px `#4D8BFF` inset border), which is what the UI kit uses where an icon would sit.

If a project genuinely needs icons, use **Lucide** from CDN (`https://unpkg.com/lucide@latest`) at 1.5px stroke, 20–24px, coloured `currentColor` — this matches the 1.5px hairline weight already in the system. **This is a substitution, not brand-sanctioned; flag it and ask for a real icon set.**

**Logo.** `assets/fika-comms-logo.png` — "fika" in `#4D8BFF`, "comms" in `#0B1F3A`, lowercase, no symbol. Clear space = the cap height of the "f" on all sides. Minimum height 22px. On navy, use the white knockout (`filter:brightness(0) invert(1)`). Do not recolour, outline, rotate or add a tagline lockup.

---

## Components

The Figma file defines exactly **one** component family, so this system ships exactly one primitive.

- **Button** (`components/core/Button.jsx`) — `Final / Button`, 3 styles × 3 sizes. Primary (accent fill, white label), Secondary (soft-blue fill, navy label), Ghost (transparent, 1.5px hairline, navy label); Small 8/16 + 14px, Medium 12/24 + 16px, Large 16/32 + 18px; radius 4px throughout.

**Intentional additions:** none. Inputs, cards and nav in the UI kit are composed from raw markup and tokens rather than invented primitives, because the source does not define them.

---

## Index

- `styles.css` — the entry point; `@import`s everything below.
- `tokens/` — `fonts.css` (Google Fonts: Sora + Inter), `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `borders.css`.
- `figma/fig-tokens.css` — raw Figma Variables (20/20), generated.
- `figma/fig-typography.css` — generated; the file defines **0** text styles, so it is empty by design.
- `components/core/` — `Button.jsx`, `Button.d.ts`, `Button.prompt.md`, `buttons.card.html`.
- `ui_kits/landing/` — the one-page Fika Comms site (`index.html` + parts + README).
- `guidelines/` — 12 foundation specimen cards (Colors, Type, Spacing, Brand).
- `assets/fika-comms-logo.png` — the brand lockup.
- `thumbnail.html` — homepage tile.
- `templates/landing-page/` — the landing page as a copyable template for consuming projects.
- `SKILL.md` — Agent Skills wrapper.

## Font files

No font binaries were provided. **Sora** and **Inter** are loaded from Google Fonts, which is where the source file's fonts come from — the rendering should be exact. If you have licensed local copies, drop them in `assets/fonts/` and swap `tokens/fonts.css` for `@font-face` rules.
