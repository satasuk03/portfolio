# Radiant — Project & Experience Summary

## The Project

**Radiant** (formerly **GuildFi**) is a gaming engagement platform built for PC gamers. It integrates with the Overwolf SDK to track real in-game activity — kills, matches, ranks — and ties it to quests, achievements, battle passes, leaderboards, a shop, and a reward economy.

The platform spans a web app, a native desktop app (Electron + Overwolf), and a backend with multiple microservices and Temporal-based workflow orchestration.

---

## The Journey

### Phase 1 — GuildFi (Web3 Guild Platform)
Built during the play-to-earn boom. GuildFi lent NFTs and tokens to players (scholars) on behalf of partners like **Axie Infinity, Pegaxy, and Cyball** and took a share of in-game earnings.

I designed and built the **Quest System** — the validation layer for onboarding and engagement:
- Discord server/role verification
- Twitter follow/like/retweet verification
- External partner API validation
- On-chain validation (wallet connect + signature → NFT/token holding check via `ethers.js`)

### Phase 2 — Pivot to Overwolf (GameFi Collapse)
When GameFi collapsed in 2022–2023, we pivoted to PC gaming. We built a native desktop app that hooks into **Overwolf's Game Events Provider (GEP)** to capture real-time in-game data and power a full engagement engine. The product was rebranded to **Radiant**.

### Phase 3 — Technical Lead
As scope expanded I became **Technical Lead** — owning architectural decisions, production incidents, cross-service design, and engineering mentorship across the entire platform.

---

## Platform at a Glance

**Services:** Backend API, Next.js web frontend, Next.js admin dashboard, Electron desktop app, gRPC game-tracker service, Overwolf sidecar service, recommendation service

**Core Features:** Quest system, battle pass, achievements, leaderboard (seasonal, ranked tiers), daily login streaks, loot boxes, crafting, shop, buff/multiplier system, gift codes, referrals, inventory, GXP/EXP dual progression

**Game Integrations:** Fortnite, Valorant, League of Legends, CS2, Apex Legends (via Overwolf GEP)

**Identity Providers:** Discord, Twitter/X, Google, Steam, Epic Games, Razer, crypto wallet (ethers.js)

---

## Tech Stack

| Layer | Technologies |
|---|---|
| Backend | Node.js, TypeScript, Express, TypeORM, Temporal.io, tRPC, gRPC |
| Databases | PostgreSQL, Redis, MongoDB, Neo4j, Typesense |
| Messaging | RabbitMQ, Socket.IO, Centrifuge |
| Frontend | Next.js 16, React 19, Tailwind CSS, TanStack Query |
| Desktop | Electron (ow-electron), Overwolf GEP SDK |
| Auth | Passport.js, OAuth (Discord/Twitter/Google/Steam/Epic) |
| Observability | Datadog APM, OpenTelemetry, GrowthBook feature flags |
| Infrastructure | Docker, Kubernetes (GKE), Turborepo monorepo |

---

## Key Challenges

### 1. Quest System Redesign for Real-Time Game Events
The old system was stateless and binary (did the user do X?). The new system — built on **Temporal.io** — supports partial progress, time-bounded quests, rerolls with cost deduction, retroactive streak repair, and buff modifiers applied to rewards. A complete redesign from the ground up.

### 2. Overwolf Per-Game Event Normalization
Each game in Overwolf's GEP emits different event schemas with different reliability. Building a normalized pipeline that feeds a single quest/achievement engine required per-game adapters, idempotent event ingestion, and constant maintenance as games update (e.g., Fortnite's Zero Build mode changing event structures).

### 3. Production Memory Leak — Stateful Singleton in Distributed Workers
`initOverwolf()` starts a perpetual 1-second heartbeat loop against PostgreSQL. It was being called inside every Temporal worker pod (shop, quest, etc.) instead of only in the backend server. With 5+ pods per worker type, this created dozens of concurrent heartbeat loops — exhausting the DB connection pool, causing race conditions on the `transaction_outbox` table, and accumulating unresolvable Promises held alive by the `setTimeout` chain. **Fix:** removed `initOverwolf()` from all workers; heartbeat runs as a singleton in the backend only.

### 4. Temporal Operational Complexity
Adopting Temporal required building correct OpenTelemetry trace propagation across workflow/activity boundaries, unique worker identities per pod, and proper task queue routing. Debugging failures requires reading Temporal's execution history rather than just application logs.

### 5. Multi-Database Consistency
A single quest completion touches PostgreSQL (quest state), Redis (GXP balance + leaderboard ZSET), and RabbitMQ (notification). Keeping these consistent uses distributed locks (Redlock), the Outbox Pattern for game events, and row-level locking (`SELECT FOR UPDATE`) on balance rows.

### 6. Multi-Provider Identity & Account Linking
Users connect via 7+ identity providers — each also used for quest validation. Handling account merge conflicts, OAuth token refresh cycles, quest attribution across linked accounts, and multi-wallet nonce management (replay attack prevention) required a robust unified identity layer.

---

## Impact

- Sole owner of the quest system from its first line to its Temporal-based redesign
- Identified and resolved a production memory leak affecting all Temporal workers under scale
- Grew from feature engineer to technical lead across a 70+ module backend, 5 apps, and multiple microservices
- Drove the technical pivot from a Web3 scholarship platform to a real-time PC gaming engagement product
