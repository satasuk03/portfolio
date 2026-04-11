# Resume Page Design

**Date:** 2026-04-11
**Route:** `/resume`
**Source content:** `docs/SatasukViparksinlapin_April2026.md`

## Goal

Add a simple, professional resume page at `/resume` that reads as a clean printable document rather than as part of the dark-themed portfolio site. The page is unlisted (not linked from the NavBar) and accessible only via direct URL.

## Visual design

- **Theme:** light, scoped to this page only. Does not affect the global dark theme used on `/portfolio`.
- **Background:** `#ffffff` (page), `#fafafa` optional for off-white feel.
- **Text:** `#1a1a1a` primary, `#555` secondary/meta (dates, locations).
- **Accent:** neutral slate — section headings use a thin `#1a1a1a` bottom border; no pink/cyan brand colors on this page.
- **Typography:** reuse existing fonts already loaded in `src/app/globals.css`:
  - `font-poppins` — name, section headings
  - `font-abel` — body copy
- **Container:** max-width ~800px, centered, generous padding on desktop; reduced padding on mobile.

## Layout

Single-column layout with a prominent header block, per brainstorm decision (Option C).

### 1. Chrome (non-print)

- **Top-left:** small text link `← Portfolio` pointing to `/portfolio`. `font-abel`, muted color, hidden in print.
- **Top-right:** `Print / Save as PDF` button — calls `window.print()`. Muted styling (border, no fill), hidden in print.

### 2. Header block

- Name: `Satasuk Viparksinlapin` — large, bold, `font-poppins`
- Title: `Software Engineer` — subtitle, lighter weight
- Contact row (inline, comma or dot-separated):
  - Phone: `(+66) 80 941 5693`
  - Email: `satasuk03@gmail.com` (mailto link)
  - LinkedIn: `linkedin.com/in/satasukVip` (external link)
- Thin horizontal divider below header.

### 3. About Me

One paragraph from source:

> A skilled software engineer seeking to leverage professional expertise and exploring cutting-edge technologies to drive innovation and efficiency.

### 4. Skills

Two sub-groups with bold inline labels:

- **Advanced:** Python, JavaScript, TypeScript, Node.js, React.js, Next.js
- **Intermediate:** SQL, Database Design, Software Engineering

Rendered as inline text (not chips) to keep print density high and appearance classic.

### 5. Professional Experience

Four entries. Each entry:

- Line 1: **Company / Role** (bold) — dates (right-aligned or inline meta)
- Line 2: Location, small muted text
- Line 3+: description paragraph

Entries (in reverse chronological order, matching source):

1. **Cryptomind Group | Zentry** — Software Engineer — Dec 2021 – Present — Bangkok, Thailand
   Working as a full-time Full Stack Engineer and a Feature Lead. Responsible for designing, developing and testing the Radiant.gg web app which has over 100k users and 25k active users per day.

2. **Blockfint** — Software Engineer (BA, SA, DEV, QA) — May 2020 – Dec 2021 — Bangkok, Thailand
   As a full-time Software Engineer specializing in the banking sector, I have worked on core-banking projects involving Savings, Lending, and Certificate of Deposit systems. My responsibilities included gathering requirements, designing, developing, and testing the systems to ensure they meet business and technical specifications.

3. **Blockfint** — Front-end Developer — Feb 2020 – May 2020 — Bangkok, Thailand
   Working as a part-time developer. Using React.js to implement a front-end website. Using React Native to implement mobile applications.

4. **Phatra Asset Management** — Data Engineer — Jun 2019 – May 2020 — Bangkok, Thailand
   As a part-time Data Engineer in the Research Department, I specialized in ETL processes and automated data management. My responsibilities included exploring, scraping, extracting, and transforming data from files or websites, and storing it in databases. Additionally, I utilized various tools, such as Tableau, for data visualization and worked on implementing and improving data pipelines.

### 6. Projects

Five entries, in this order:

1. **Peahackathon2026.riseaccel.com** — Outsource, 2026
   Built the official website for PEA Hackathon 2026 — a hackathon by the Provincial Electricity Authority (PEA) and RISE Accel under the theme "MOVE for Growth: Powering Transformation," connecting tech startups with PEA to co-create energy innovation solutions through PoC development in Grid Operation and Logistics & Supply Chain.

2. **Agrowth.nia.or.th** — Outsource, 2025
   Built the official website for NIA's AGROWTH. Thailand's first AgTech accelerator — a 12-week program that pairs deep-tech agricultural startups with corporate partners for real-world PoC testing, mentorship, and funding access.

3. **Salak Mabin** — Software Engineer / BA / SA, Outsource, 2023
   Developed a web app for selling lotteries, responsible for designing the database schema and features. Implemented payment gateway integration, cart, and shop system on the backend to support the main features of the website. Tech stack: PostgreSQL, Redis, TypeScript, Next.js.

4. **GuildFi | Radiant.gg** — Software Engineer, Cryptomind Group | Zentry, 2021–2026
   GuildFi aspires to create an interconnected ecosystem of games, NFTs, and communities. Feature lead for the quest system on GuildFi which has over 100k users. The most challenging part is implementing a system which is scalable and can support an enormous number of users. Built with Next.js (frontend), TypeScript with tRPC (backend), PostgreSQL, RabbitMQ (message broker), and Redis (caching).

5. **Lending Interim Solution (CLI)** — Dev Lead, Blockfint, 2020–2021
   Developed Lending Interim Solution, a program for calculating interest and fees, generating bills, and processing payments, in response to new lending regulations. Completed the project in two months with a team of three developers. Responsibilities included requirements gathering, analysis, mentoring two junior developers, and ensuring timely project delivery. Tech stack: Go, PostgreSQL.

### 7. Education

Two entries:

1. **Chulalongkorn University** — Bachelor of Computer Engineering — 2016–2020 — Bangkok, Thailand
   GPA: 3.15

2. **Debsirin School** — High School — 2013–2015 — Bangkok, Thailand
   Majoring in Math-Science, GPA: 3.74

## Print behavior

Use `@media print` in a `<style jsx global>` block (or a plain `<style>` element) inside the page component:

- Hide `.no-print` elements (back link, print button)
- `@page { margin: 0.5in; }`
- `-webkit-print-color-adjust: exact; print-color-adjust: exact;` on body to preserve colors
- Remove box shadows, reset page background to pure white
- Avoid page breaks inside individual experience/project entries: `break-inside: avoid;`

Since the page is already light-themed, print and screen render nearly identically — no divergent design to maintain.

## Implementation notes

- **File to create:** `src/app/resume/page.tsx`
- **Files modified:** none
- **Dependencies added:** none
- **Component markers:** `"use client"` at top (matches project convention, and `window.print()` requires client).
- **Next.js static export:** this route is purely static, produces `out/resume/index.html` on build — no server-only APIs needed.
- **No NavBar / no site layout wrapper** — the root `src/app/layout.tsx` wraps all pages, but the portfolio-specific NavBar lives in `src/app/portfolio/layout.tsx`, so `/resume` sibling route inherits only the root HTML shell. Confirmed this matches expectations.
- **Root `<body>` is `bg-terminal-black-800` (dark)** — verified in `src/app/layout.tsx:16`. The resume page must wrap its content in a `min-h-screen bg-white` container so the light theme fills the viewport and hides the dark body background.

## Out of scope

- No NavBar link to `/resume`
- No downloadable static PDF file — user prints via browser `window.print()`
- No dark-theme variant
- No animations / interactive effects
- No Certifications section (source is empty)
- No Extracurricular Projects section (dropped per brainstorm)
- Core Banking CoD, Loan Origination, Web Scraping projects (dropped — overlap with experience)
