# BankRails Landing Page

Landing page for [bankrails.ai](https://bankrails.ai) — payment infrastructure for the agent era.

## Stack

- Plain HTML/CSS/vanilla JS (no frameworks)
- Google Fonts CDN: Space Grotesk, Inter, JetBrains Mono
- Glassmorphism design system, obsidian background (#0D0D0F), Bank Shot purple (#7C3AED)

## Sections

1. **Hero** — Full-viewport with agent visualization, email waitlist form
2. **Problem** — 3-card grid: credit card / prepaid card / nothing
3. **Features** — Bento grid: per-agent budgets, conditional logic, audit trail, banking rails, KYA, agent-to-agent
4. **How It Works** — 3-step sequence
5. **Why Not Crypto** — Contrast against Skyfire / USDC solutions
6. **Origin / Credibility** — Bank Shot backstory
7. **Bottom CTA** — Repeat waitlist form
8. **Footer**

## Setup

```bash
# Serve locally
npx serve .
# or
python3 -m http.server 8080
```

## HubSpot Integration

Search for `HubSpot form placeholder` in `index.html` and `main.js` to find the two spots that need to be replaced with the actual HubSpot embed.

- Portal ID: TBD
- Form ID: TBD
- List segment: `bankrails-waitlist`

## Analytics

Add GA4 + GTM script tags in `<head>` before going live.

## OG Image

Generate and place at `/og-image.png` (1200×630px) before launch.

## Deployment

Point `bankrails.ai` DNS to your host and deploy these three files:
- `index.html`
- `styles.css`
- `main.js`
