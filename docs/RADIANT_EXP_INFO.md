# Project Experience: GuildFi → Radiant

## Table of Contents
1. [Project Origins — GuildFi](#1-project-origins--guildfi)
2. [The Pivot — GameFi Decline & Overwolf Opportunity](#2-the-pivot--gamefi-decline--overwolf-opportunity)
3. [My Role Evolution](#3-my-role-evolution)
4. [Platform Architecture (Current)](#4-platform-architecture-current)
5. [Backend Modules Deep Dive](#5-backend-modules-deep-dive)
6. [Quest System (The Core)](#6-quest-system-the-core)
7. [Temporal Workflow Orchestration](#7-temporal-workflow-orchestration)
8. [Overwolf & Desktop App Integration](#8-overwolf--desktop-app-integration)
9. [Real-Time Systems](#9-real-time-systems)
10. [Data Layer Strategy](#10-data-layer-strategy)
11. [Observability & Infrastructure](#11-observability--infrastructure)
12. [Challenges](#12-challenges)
13. [Tech Stack Summary](#13-tech-stack-summary)

---

## 1. Project Origins — GuildFi

### What It Was

GuildFi was a **Web3 guild and scholarship platform** built during the peak of the GameFi/play-to-earn (P2E) movement in 2021–2022. The concept revolved around the idea of a "Guild" — an organization that pools in-game assets (NFTs, tokens) and lends them to players who could not afford to buy into expensive P2E games themselves.

We acted as the financial layer between game studios and players:
- **Studios** issued NFTs and tokens as in-game assets
- **GuildFi** acquired those assets and lent them to verified players (scholars)
- **Players (Scholars)** played and earned, then shared a percentage of earnings with GuildFi

### Monetization & Partners

We partnered with the biggest Web3 gaming titles of that era:

| Partner | Game Type | Asset Type |
|---|---|---|
| **Axie Infinity** | Turn-based monster battle | Axie NFTs, SLP tokens |
| **Pegaxy** | Horse racing P2E | Pega NFTs |
| **Cyball** | Football card P2E | CyBall NFTs, CBT tokens |

### My Role — Quest System Engineer

I joined as an engineer focused on building the **Quest System** — the primary engagement and validation layer for the platform. Users had to prove they completed off-chain and on-chain tasks before claiming rewards or being accepted as scholars.

**Quest validation types I designed and built:**

| Validation Type | What It Did |
|---|---|
| **Discord** | Verify user joined a specific server or obtained a specific role via Discord API |
| **Twitter/X** | Verify user followed an account, liked, or retweeted a specific tweet via Twitter API v1/v2 |
| **External API** | Proxy validation calls to partner APIs to confirm partner-specific task completion |
| **On-chain** | User connects and cryptographically signs their wallet → validate holdings (NFTs, tokens) on chain via `ethers.js` |

This was the foundation of all user onboarding and engagement mechanics for the guild model.

---

## 2. The Pivot — GameFi Decline & Overwolf Opportunity

### The Collapse

By late 2022, the GameFi ecosystem collapsed. Token prices crashed, partner games lost their player bases, and the scholarship model became economically unviable. GuildFi had to make a fundamental pivot.

### The New Direction

We identified a large, underserved opportunity in **PC gaming engagement via Overwolf**.

[Overwolf](https://www.overwolf.com/) is a platform that allows developers to build **in-game overlay apps** for major PC titles — League of Legends, Valorant, CS2, Fortnite, Apex Legends, and more. It exposes a **Game Events Provider (GEP)** SDK that emits structured real-time events from inside running games (kills, deaths, match results, rank changes, etc.).

The idea: build a native desktop application that hooks into these game events, tracks a player's real in-game activity, and ties it to a quest/achievement/reward system. Players don't self-report — the system knows what they actually did.

The product was rebranded to **Radiant**.

### The Architectural Implications

This was not an incremental change — it was a near-complete architectural rebuild:

| Old (GuildFi) | New (Radiant) |
|---|---|
| Web-only platform | Web + native desktop app (Electron + Overwolf) |
| Web3 wallet identity | Steam / Epic Games / game-account identity |
| Static partner quests | Real-time in-game event-driven quests |
| Simple reward claims | Full engagement engine: battle passes, loot boxes, daily logins, achievements, leaderboards, crafting, shops |
| Manual scholarship assignment | Automated game-tracking pipelines |
| Single PostgreSQL DB | Multi-database architecture (PostgreSQL + MongoDB + Redis + Neo4j + Typesense) |
| Monolithic Express app | Monorepo with distributed microservices + Temporal orchestration |

---

## 3. My Role Evolution

### From Engineer → Technical Lead

As the product scope expanded dramatically, I grew from quest system engineer to **Technical Lead** — the person responsible for the technical vision, architectural decisions, and end-to-end understanding of every system in the platform.

This includes:
- Designing system architecture for new features before implementation begins
- Reviewing and approving all significant technical changes across services
- Debugging and triaging production incidents across systems I didn't originally write
- Driving cross-service consistency (e.g., quest system correctly integrates with shop, battlepass, leaderboard, and achievement systems simultaneously)
- Making infrastructure decisions (Temporal adoption, gRPC vs tRPC, database selection)
- Technical onboarding and mentoring of engineers joining a large, complex codebase
- Acting as the point of contact between engineering and product for technical feasibility

---

## 4. Platform Architecture (Current)

### Monorepo Structure

The platform is a **Turborepo (Yarn workspace) monorepo** with distinct services, apps, and shared packages:

```
radiant-app/
├── backend/                  # Core Node.js API server
├── frontend-radiant/         # Next.js user-facing web app (port 3003)
├── admin-radiant/            # Next.js admin dashboard (port 3004)
├── radiant-desktop-app/      # Electron desktop app (Overwolf integration)
├── overwolf-svc/             # Overwolf game transaction sidecar service
├── game-tracker-svc/         # gRPC game stats tracking service
├── recommend-svc/            # gRPC recommendation service
├── partner-game/             # Partner game integration module
├── e2e/                      # Playwright end-to-end tests
├── packages/
│   ├── @radiant/class        # Data models and DTOs
│   ├── @radiant/types        # Shared TypeScript types
│   ├── @radiant/ui           # React component library
│   ├── @radiant/hooks        # Shared React hooks
│   ├── @radiant/utils        # Utility functions
│   ├── @radiant/email        # Email service abstraction
│   ├── @radiant/i18n         # Internationalization
│   ├── @radiant/constant     # Shared enums and constants
│   └── @guildfi-svc-api      # gRPC protobuf definitions
```

### Request Flow

```
User (Web/Desktop)
      │
      ▼
  Frontend (Next.js)
      │ tRPC
      ▼
  Backend (Express)
      │
      ├──► PostgreSQL (TypeORM)
      ├──► Redis (cache / sessions / leaderboards)
      ├──► Typesense (search)
      ├──► MongoDB
      ├──► Neo4j (graph / recommendations)
      ├──► RabbitMQ (async messaging)
      │
      ├──► Temporal Workers (shop, quest, battlepass, leaderboard, referral)
      │         │
      │         └──► gRPC Service Clients (money, reward, item, game, user, buff, ...)
      │
      └──► External APIs (Discord, Twitter, Steam, Epic, Overwolf, Reloadly)

Desktop App (Electron)
      │ Overwolf GEP SDK
      ▼
  Game Events (Fortnite, Valorant, LoL, CS2, ...)
      │ gRPC
      ▼
  game-tracker-svc
      │
      ▼
  overwolf-svc ──► backend (quest/achievement triggers)
```

### Temporal Workers (Separate Processes)

Each worker is an independently deployed process:

| Worker | Task Queue | Responsibility |
|---|---|---|
| `shop` | `shop` | Product purchases, inventory transactions |
| `quest` | `quest` | Quest pack claims, streaks, rerolls, challenges |
| `battlepass` | `battlepass` | Season progression, tier unlocks |
| `leaderboard` | `leaderboard` | Ranking updates, season endings, reward distribution |
| `referral` | `referral` | Referral milestone processing |

---

## 5. Backend Modules Deep Dive

The backend (`backend/src/`) contains 70+ modules. Below are the most significant:

### Core Infrastructure

| Module | Description |
|---|---|
| `db` | TypeORM PostgreSQL ORM, connection pooling, migrations, UUID v7 extension |
| `redisStore` | ioredis connection, cache utilities, leaderboard ZSET operations |
| `mongo` | MongoDB connection for document-style data |
| `neo4j` | Graph database for social/recommendation data |
| `typesense-db` | Full-text search integration |
| `rabbitMq` | Message broker for async event processing |
| `envConfig` | Type-safe multi-environment config via `processEnv` |
| `featureFlag` | GrowthBook integration for runtime feature toggling |
| `logger` | Winston-based structured logging with Datadog integration |
| `tracer` | Datadog APM + OpenTelemetry trace instrumentation |

### Authentication & Identity (`auth/`)

- **Session-based auth** — `express-session` + Redis session store
- **Passport.js** — JWT and Local strategy
- **OAuth providers** — Discord, Twitter/X, Google, Facebook
- **Cloudflare Turnstile** — Bot protection on auth endpoints
- **Wallet signing** — Nonce-based cryptographic challenge/response via `ethers.js`
- **User impersonation** — Admin-level identity switching for support
- **Third-party account linking** — Steam, Epic Games, Razer ID, Zentry

### User & Progression

| Module | Key Functionality |
|---|---|
| `user` | Core user entity, profile, role/permission management |
| `user-progression` | Game connectivity tracking, tier/season progression |
| `user-stats` | Aggregated play stats per game |
| `gxp` | Dual-tier XP system: GXP (currency) + EXP (leaderboard ranking) stored in Redis ZSET |
| `dailyLogin` | Daily streak tracking, progressive reward packs per login day |
| `friendship` | Friend relationships |
| `referral` | Referral code generation, milestone tracking, reward distribution via Temporal |
| `invitation-code` | Invite-only onboarding codes |

### Game Systems

| Module | Key Functionality |
|---|---|
| `games` | Game catalog, metadata, user-game linking |
| `overwolf` | Overwolf-specific API endpoints, GEP health checks, session management |
| `steam` | Steam account linking and game data |
| `epic` | Epic Games account linking |
| `partnerGame` | Partner game integration abstractions |
| `gameTrackerSvc` | Adapter to `game-tracker-svc` gRPC service |

### Reward Economy

| Module | Key Functionality |
|---|---|
| `reward` | Temporal-based reward processing: packs, random item selection, GXP/EXP award |
| `inventory` | User item storage, acquisition history, NFT retrieval |
| `itemV3` | Item catalog, categories, stock management |
| `shop` | Market product catalog, purchase workflows via Temporal |
| `lootbox` | Random drop system with defined drop rates |
| `crafting` | Recipe-based item crafting: materials + currency cost validation |
| `giftCode` | Campaign-based gift code generation and redemption |
| `monetary` | Currency balance management, transaction logging |
| `buff` | Reward multipliers, reroll discounts, time-limited boosts |
| `airdrop` | Bulk reward distribution |
| `staking` | Token staking mechanics |

### Engagement

| Module | Key Functionality |
|---|---|
| `questNext` | Full quest engine (details in §6) |
| `achievement` | Achievement definitions, notification, claim, reward |
| `battlepass` | Season-based progression, tier unlocks, reward distribution |
| `leaderboardV2` | Temporal-driven seasonal rankings, tier rewards |
| `engagementEngine` | Meta-layer that ties quest/achievement/progression events together |
| `dailyLogin` | Streak-based daily reward system |

### Communication & Notifications

| Module | Key Functionality |
|---|---|
| `realTimeMessaging` | Centrifuge-based pub/sub for live frontend updates |
| `realTimeNotification` | User notification delivery layer |
| `socketIO` | WebSocket connections for real-time state sync |
| `email` | SendGrid + Novu-backed transactional email |
| `announcement` | Platform-wide announcements |
| `news` | In-app news feed |

### Content & Admin

| Module | Key Functionality |
|---|---|
| `admin` | Admin-specific APIs and operations |
| `uploader` | File upload management |
| `carousel` | Homepage carousel content |
| `npcDialogue` | In-app NPC dialogue system (tutorial/onboarding) |
| `tutorial` | Guided user onboarding flows |
| `recommendation` | Adapter to `recommend-svc` for personalized content |

---

## 6. Quest System (The Core)

The quest system was my original ownership and remains the most architecturally significant module in the platform. It went through a complete redesign from GuildFi to Radiant.

### Old Quest System (GuildFi Era)

- Stateless per-request validation
- Binary completion: did the user do X?
- Four validation types: Discord, Twitter, External API, On-chain
- No real-time tracking, no partial progress

### New Quest System — `questNext` (Radiant Era)

Built on top of **Temporal.io** for durable, long-running workflows. The redesign supports:
- **Real-time game event triggers** — quests complete based on actual in-game data
- **Partial progress tracking** — "get 10 kills" → tracks progress incrementally
- **Multi-step quest packs** — ordered groups of objectives
- **Streaks** — consecutive completion bonuses
- **Rerolls** — pay cost to replace a quest objective
- **Passive challenges** — long-running missions that accumulate over time
- **Buffs** — multipliers and discounts applied to quest rewards and costs

### `questNext/` Module Structure

```
questNext/
├── challenge/           # Passive challenge workflows (long-running missions)
├── questPack/           # Main quest pack mechanics
│   ├── claim-quest-pack.workflows.ts
│   ├── repair-streak-and-claim-quest-pack.workflows.ts
│   └── reroll-quest-pack.workflows.ts
├── questStreak/         # Streak tracking and bonus computation
├── questBuff/           # Modifier system (payout boosts, reroll discounts)
├── objective/           # Objective template definitions and progress tracking
└── games/config/        # Per-game quest configurations (Fortnite, Valorant, LoL, etc.)
```

### Key Temporal Workflows

| Workflow | Purpose |
|---|---|
| `claim-quest-pack` | Validate completion, process rewards, advance progression |
| `repair-streak-and-claim-quest-pack` | Handle broken/missed streak edge cases |
| `reroll-quest-pack` | Replace objective(s) with new ones, deduct reroll cost |
| `claim-challenge` | Finalize long-running passive challenge |
| `claim-bonus-reward` | Distribute bonus rewards from completed packs |

### Quest Worker

The quest Temporal worker is a separately deployed process:
- Connects to PostgreSQL and Redis on startup
- Registers all quest workflows and activities
- Runs OpenTelemetry instrumented activity interceptors
- Uses `getTemporalTaskQueue('quest')` for queue isolation

---

## 7. Temporal Workflow Orchestration

[Temporal.io](https://temporal.io/) is the workflow orchestration framework adopted to replace fragile, stateful async logic in the backend.

### Why Temporal

Before Temporal, long-running operations (shop purchases, reward distribution, quest claiming) were handled with ad-hoc async code, Redis locks, and manual retry logic. This led to:
- Partial failures leaving data in inconsistent states
- No visibility into what step a long-running operation was on
- Manual rollback logic scattered across the codebase

Temporal provides:
- **Durable execution** — workflows survive process crashes; they resume from where they left off
- **Built-in retries** — activity-level retry policies with backoff
- **Visibility** — full execution history in Temporal Web UI
- **Exactly-once semantics** — idempotency guarantees via workflow IDs

### Pattern Across All Workers

All Temporal workers follow this initialization pattern:

```typescript
async function run() {
  await connectDB();            // TypeORM PostgreSQL
  await createRpcServices();    // gRPC service clients
  await createWorkerServices(); // internal service layer
  await connectRedisStore();    // Redis

  const connection = await NativeConnection.connect(getConnectionOptions());
  const worker = await Worker.create({
    taskQueue: getTemporalTaskQueue('<domain>'),
    workflowsPath: require.resolve('./workflows'),
    activities,
    interceptors: { /* OpenTelemetry activity interceptors */ },
    sinks: { exporter: makeWorkflowExporter(exporter, resource) },
  });
  await worker.run();
}
```

### gRPC Service Clients

Temporal activities inject gRPC service clients for cross-domain calls. This keeps activities decoupled from each other — a shop activity calls the money service via gRPC rather than importing the money module directly.

| Client | Service Domain |
|---|---|
| `money-service` | Currency balances and transactions |
| `reward-service` | Reward pack opening and distribution |
| `item-service` | Item catalog and stock |
| `shop-service` | Market products |
| `game-service` | Game data |
| `user-service` | User operations |
| `quest-pack-service` | Quest pack state |
| `challenge-service` | Challenge operations |
| `buff-service` | Buff queries and application |
| `referral-service` | Referral operations |

---

## 8. Overwolf & Desktop App Integration

### Desktop App Architecture (`radiant-desktop-app/`)

Built with **Electron** (specifically `ow-electron` — Overwolf's Electron fork) + a **Next.js renderer**.

```
radiant-desktop-app/
├── main/                      # Electron main process
│   ├── main.ts                # Entry: Overwolf init, window management, deep links
│   ├── services/
│   │   ├── auth/              # Desktop auth flow
│   │   ├── overlay/           # In-game overlay rendering
│   │   ├── settings/          # User preferences
│   │   ├── update/            # Auto-update management
│   │   └── gep/               # Game Events Provider integration
│   └── overwolf/              # Overwolf SDK bindings
└── renderer/                  # Next.js React app (IPC ↔ main)
```

**Main Process responsibilities:**
- Initialize Overwolf SDK and GEP (Game Events Provider)
- Listen to game lifecycle events (game started, match started, kill, death, match ended)
- Manage in-game overlay window (show/hide based on game state)
- Handle deep linking via `radiant-desktop://` protocol
- Manage auto-updates
- IPC bridge between Overwolf events and renderer UI

**Renderer (Next.js):**
- Full UI inside Electron window
- Communicates with main process via Electron IPC
- Uses same tRPC client as web frontend
- Feature flag integration via GrowthBook

### Game Tracker Service (`game-tracker-svc/`)

A **gRPC microservice** that abstracts game-specific stats and tracking logic:

| gRPC Method | Purpose |
|---|---|
| `getFortnitePlayerRankInfo` | Current competitive rank |
| `getFortniteActiveTrack` | Active match/game session |
| `getFortnitePlayerAccountInfo` | Linked Epic Games account |
| `getFortnitePlayerStatsInfo` | Cumulative player statistics |

More game-specific modules are organized under `/fortnite`, with room to extend to Valorant, LoL, CS2, etc.

### Overwolf Service (`overwolf-svc/`)

A lightweight sidecar service responsible for the **transactional integrity** of game events:

- Runs a **heartbeat loop every 1000ms** that processes:
  - `transaction_outbox` — finalize pending game event transactions (commit or rollback)
  - `transaction_log` — detect and roll back timed-out operations
- Uses a **PostgreSQL connection pool** per heartbeat cycle
- Implements the **Outbox Pattern** for reliable game event → reward triggering

**Critical design constraint:** this service must run as a **singleton**. Running it inside Temporal workers caused a production memory leak (see §12).

### Game Coverage

The platform has per-game quest configurations and event parsers for:
- Fortnite (including Zero Build mode variant handling)
- League of Legends
- Valorant
- CS2 / Counter-Strike
- Apex Legends
- And more via the Overwolf GEP SDK

---

## 9. Real-Time Systems

### Socket.IO

WebSocket connections for real-time state sync between backend and frontend/desktop:
- Live quest progress updates
- Reward notifications
- Match session status
- Achievement unlocks

### Centrifuge (Real-Time Messaging)

Pub/Sub messaging infrastructure for high-frequency frontend updates:
- Leaderboard position changes
- Engagement feed updates
- System-wide announcements

### RabbitMQ

Async message broker for decoupled background processing:
- Game event consumption from `overwolf-svc`
- Reward processing queues
- Notification delivery queues

---

## 10. Data Layer Strategy

The platform uses **five different data stores**, each chosen for a specific access pattern:

| Store | Use Case | Key Data |
|---|---|---|
| **PostgreSQL** | Primary relational store — source of truth | Users, quests, inventory, transactions, achievements, battlepass |
| **Redis** | Hot cache, session storage, real-time leaderboards | GXP balances, EXP ZSET (leaderboard), sessions, distributed locks (Redlock) |
| **MongoDB** | Document-style flexible data | Game event logs, dynamic metadata |
| **Neo4j** | Graph relationships | Social graph, recommendation edges |
| **Typesense** | Full-text search | Game/item/user search |

### Key Patterns

- **Redlock** — Distributed locking via Redis for critical sections (reward claiming, inventory writes)
- **Outbox Pattern** — Game events written to `transaction_outbox` before being processed, ensuring no events are lost on crash
- **GXP in Redis** — GXP balance read from Redis ZSET for performance; PostgreSQL as durable backup
- **TypeORM with row-level locking** — `SELECT ... FOR UPDATE` on balance rows before writes

---

## 11. Observability & Infrastructure

### Monitoring

- **Datadog APM** — Distributed tracing across backend, workers, and services
- **OpenTelemetry** — Vendor-agnostic trace/metric collection, piped into Datadog
- **Temporal OpenTelemetry Interceptors** — Traces propagated through workflow/activity boundaries
- **GrowthBook** — Runtime feature flags for gradual rollouts and A/B experiments

### Infrastructure

- **Kubernetes (GKE)** — All services deployed as Kubernetes pods
- **Docker** — All services containerized
- **Turborepo** — Monorepo build orchestration with incremental caching
- **Multiple deployment targets** — Backend, each Temporal worker, each microservice are independently deployed pods

### Email & Notifications

- **SendGrid** — Transactional email
- **Novu** — Notification orchestration platform (in-app, push, email)
- **Reloadly** — Airtime/gift card reward fulfillment

---

## 12. Challenges

### Challenge 1 — Redesigning the Quest System for Real-Time Game Events

The original GuildFi quest system was stateless and binary — validate a social action, return true/false. The Radiant quest system needed to handle:
- **Partial progress** (e.g., "get 10 kills" increments one at a time)
- **Time-bounded quests** (must complete within a season or day)
- **Rerolls** with cost deduction and new objective assignment
- **Streak logic** that repairs broken streaks retroactively
- **Buff modifiers** that change payout calculations

This required a full redesign using Temporal workflows so that quest state is durable and survives restarts, and multi-step claiming logic can be expressed as explicit workflow steps rather than fragile async chains.

### Challenge 2 — Overwolf Per-Game Event Normalization

Overwolf's GEP SDK is **per-game and non-standardized** — each game emits events with different schemas, field names, and reliability characteristics. For example:
- Fortnite's "kill" event differs between standard mode and Zero Build mode (different team structures)
- Some games emit events with delays or drop events under load

Building a normalized event pipeline that feeds a single quest/achievement engine required per-game adapters, schema validation, idempotency on event ingestion, and careful handling of edge cases like Fortnite's changing game modes (multiple PRs in the git history address this specifically).

### Challenge 3 — Memory Leak from Stateful Singleton in Distributed Workers

A significant production incident: `initOverwolf()` — which starts a perpetual 1-second DB heartbeat loop — was being called inside every Temporal worker (shop, quest, etc.), not just the backend server.

**Root cause:**
- The `heartbeat()` function uses `setTimeout` self-scheduling: always reschedules in `finally`, creating a perpetual timer chain
- The timer holds a closure over the DB pool and rollback function registry — these are never GC'd
- Every pod running a Temporal worker started its own independent heartbeat
- With 5+ pods per worker type × N worker types = dozens of concurrent heartbeat loops all hammering the same `transaction_outbox` table
- DB connection pool exhaustion caused pending `pool.connect()` Promises to queue in memory indefinitely
- Race conditions on `setTransactionOutboxFinalizedOnce()` meant N-1 pods threw errors on every cycle, each leaving behind accumulated error state

**Fix:** Removed `initOverwolf()` from all Temporal workers. The heartbeat now runs exclusively in the backend HTTP server as a true singleton, as designed.

**Lesson:** Stateful singleton services must never be instantiated inside horizontally scaled stateless processes. Temporal workers are designed to be state-free executors.

### Challenge 4 — Temporal Adoption and Operational Complexity

Introducing Temporal brought reliability benefits but also deep operational complexity:
- **Worker identity management** — each worker pod needs a unique identity for Temporal's routing
- **Task queue isolation** — wrong queue configuration silently routes tasks to wrong workers
- **OpenTelemetry through workflow boundaries** — traces must be injected/extracted across the workflow/activity split using Temporal's interceptor APIs; a missing interceptor silently breaks distributed tracing
- **Debugging failed workflows** — requires reading Temporal's execution history, not just application logs

### Challenge 5 — Multi-Database Consistency

With PostgreSQL, Redis, MongoDB, and Neo4j in play, keeping data consistent across stores is non-trivial:
- A quest completion event must update quest progress (PostgreSQL), award GXP (Redis + PostgreSQL), potentially update leaderboard (Redis ZSET), and fire a notification (RabbitMQ) — all atomically or with safe rollback
- Distributed locks via Redlock on Redis prevent double-claim race conditions but add latency
- The Outbox Pattern in `overwolf-svc` ensures game events are never lost between ingestion and processing, even on process restart

### Challenge 6 — Multi-Provider Identity & Account Linking

Users arrive via multiple identity providers (Discord, Google, Twitter, Steam, Epic, Razer, Zentry, wallet). Each provider is also used for quest validation — meaning the same provider connection serves both auth and business logic.

Key challenges:
- **Account merge conflicts** — user signs up with Discord, later tries to link a Steam account already linked to another user
- **Token expiry** — OAuth tokens for quest validation need background refresh (Twitter tokens are cached with 30-minute refresh cycles)
- **Quest attribution** — when a quest requires "Discord role X", the system must know which Discord account belongs to which Radiant user, across all linked accounts
- **On-chain identity** — multiple wallets per user, signature verification, nonce management to prevent replay attacks

### Challenge 7 — Monorepo Scale and Build Performance

A monorepo with 70+ backend modules, 5 frontend/desktop apps, and 10+ shared packages creates build and type-checking challenges:
- TypeScript project references required for incremental compilation
- Turborepo task graph to avoid redundant builds
- Shared `@radiant/*` packages must be built before dependent apps
- Development workflow: running 5–6 processes concurrently (backend, frontend, desktop app, multiple Temporal workers)

---

## 13. Tech Stack Summary

### Backend
| Category | Technology |
|---|---|
| Runtime | Node.js 20, TypeScript |
| Framework | Express.js |
| ORM | TypeORM |
| Workflow Orchestration | Temporal.io |
| Primary Database | PostgreSQL |
| Cache & Sessions | Redis (ioredis) |
| Document Store | MongoDB |
| Graph Database | Neo4j |
| Search | Typesense |
| Message Broker | RabbitMQ |
| RPC (internal) | gRPC |
| RPC (frontend) | tRPC v10 |
| Blockchain | ethers.js v5 |
| Authentication | Passport.js (JWT + Local + OAuth) |
| APM | Datadog + OpenTelemetry |
| Feature Flags | GrowthBook |
| Email | SendGrid, Novu |

### Frontend (Web)
| Category | Technology |
|---|---|
| Framework | Next.js 16, React 19 |
| Styling | Tailwind CSS |
| Data Fetching | TanStack React Query |
| RPC | tRPC client |
| Real-Time | Socket.io, Centrifuge |
| Forms | React Hook Form |
| Component Library | @radiant/ui (internal) |
| Monitoring | Datadog Browser SDK |

### Desktop App
| Category | Technology |
|---|---|
| Shell | Electron (ow-electron — Overwolf fork) |
| Renderer | Next.js + React |
| Game Integration | Overwolf GEP SDK |
| IPC | Electron main/renderer IPC |
| Auth | Deep link + session handoff |

### Infrastructure
| Category | Technology |
|---|---|
| Containerization | Docker |
| Orchestration | Kubernetes (GKE) |
| Monorepo Tooling | Turborepo + Yarn Workspaces |
| CI/CD | GitHub Actions + GKE deploy |
| Observability | Datadog APM, OpenTelemetry |
