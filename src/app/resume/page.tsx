"use client";

import Link from "next/link";
import { Printer, ArrowLeft, Mail, Phone, Linkedin } from "lucide-react";

export default function ResumePage() {
  const handlePrint = () => {
    if (typeof window !== "undefined") window.print();
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-abel">
      <style jsx global>{`
        @media print {
          @page {
            margin: 0.5in;
          }
          body {
            background: #ffffff !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .no-print {
            display: none !important;
          }
          .resume-container {
            max-width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
            box-shadow: none !important;
          }
          .avoid-break {
            break-inside: avoid;
            page-break-inside: avoid;
          }
          a {
            color: inherit !important;
            text-decoration: none !important;
          }
        }
      `}</style>

      <div className="no-print fixed top-4 left-4 z-10">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-1.5 text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Portfolio
        </Link>
      </div>

      <div className="no-print fixed top-4 right-4 z-10">
        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm border border-neutral-300 rounded hover:bg-neutral-100 hover:border-neutral-900 transition-colors"
        >
          <Printer className="w-4 h-4" />
          Print / Save as PDF
        </button>
      </div>

      <main className="resume-container max-w-[800px] mx-auto px-6 sm:px-10 py-16 sm:py-20">
        <header className="mb-8 avoid-break">
          <h1 className="font-poppins text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900">
            Satasuk Vip
          </h1>
          <p className="font-poppins text-lg text-neutral-600 mt-1 font-light tracking-wide">
            Software Engineer
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-1.5 mt-4 text-sm text-neutral-700">
            <span className="inline-flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" />
              (+66) XX XXX XXXX
            </span>
            <a
              href="mailto:[EMAIL_ADDRESS]"
              className="inline-flex items-center gap-1.5 hover:text-neutral-900"
            >
              <Mail className="w-3.5 h-3.5" />
              [EMAIL_ADDRESS]
            </a>
            <a
              href="https://www.linkedin.com/in/satasukVip"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-neutral-900"
            >
              <Linkedin className="w-3.5 h-3.5" />
              linkedin.com/in/satasukVip
            </a>
          </div>
        </header>

        <Section title="About Me">
          <p className="text-neutral-700 leading-relaxed">
            Full-stack engineer and technical lead with 6+ years of experience
            designing, building, and scaling production systems across fintech,
            core banking, and consumer gaming. Specialized in distributed
            architecture, workflow orchestration, multi-database systems, and
            AI-integrated applications. Comfortable owning features end-to-end —
            from requirements and architecture to deployment and production
            operations — and leading engineering teams through complex product
            pivots.
          </p>
        </Section>

        <Section title="Skills">
          <div className="space-y-1.5 text-neutral-700 leading-relaxed text-[15px]">
            <SkillRow
              label="Languages"
              items="TypeScript, JavaScript, Python, SQL, Solidity"
            />
            <SkillRow
              label="Frontend"
              items="React.js, Next.js, Tailwind CSS"
            />
            <SkillRow
              label="Backend"
              items="Node.js, NestJS, tRPC, FastAPI, Hardhat"
            />
            <SkillRow label="Databases" items="PostgreSQL, MongoDB, Redis" />
            <SkillRow
              label="AI / ML"
              items="LLM Integration, RAG (Retrieval-Augmented Generation), Vector Databases, Prompt Engineering, AI Agents, OpenAI & Anthropic APIs"
            />
            <SkillRow
              label="Infrastructure"
              items="RabbitMQ, Payment Gateway Integration"
            />
            <SkillRow
              label="Data & ETL"
              items="Pandas, Selenium, Tableau, Web Scraping"
            />
            <SkillRow
              label="Practices"
              items="System Design, Database Design, Feature Leadership, Requirements Gathering"
            />
          </div>
        </Section>

        <Section title="Professional Experience">
          <div className="space-y-5">
            <Entry
              title="Cryptomind Group | Zentry"
              subtitle="Software Engineer → Technical Lead"
              dates="Dec 2021 – Present"
              location="Bangkok, Thailand"
            >
              Technical Lead on Radiant (formerly GuildFi), a PC gaming
              engagement platform serving 100k+ users and 25k daily active
              users. Grew from quest system engineer into the Technical Lead
              role following the product&rsquo;s pivot from a Web3 guild
              platform to an Overwolf-integrated desktop gaming product. Own
              platform-wide architectural decisions, drive cross-service
              consistency, lead production incident triage, and mentor engineers
              across a distributed, multi-database system built on Temporal.io
              workflows and deployed on Kubernetes.
            </Entry>

            <Entry
              title="Blockfint"
              subtitle="Software Engineer (BA / SA / Dev / QA)"
              dates="May 2020 – Dec 2021"
              location="Bangkok, Thailand"
            >
              Full-stack engineer on core-banking systems covering Savings,
              Lending, and Certificate of Deposit products for enterprise
              banking clients. Delivered features end-to-end — requirements
              gathering, business and system analysis, backend development, and
              quality assurance — translating regulatory and business
              requirements into production-grade financial systems.
            </Entry>

            <Entry
              title="Blockfint"
              subtitle="Front-end Developer"
              dates="Feb 2020 – May 2020"
              location="Bangkok, Thailand"
            >
              Part-time front-end developer building responsive web interfaces
              in React.js and cross-platform mobile applications in React Native
              for early-stage client projects.
            </Entry>

            <Entry
              title="Phatra Asset Management"
              subtitle="Data Engineer"
              dates="Jun 2019 – May 2020"
              location="Bangkok, Thailand"
            >
              Data engineer in the Research Department supporting the investment
              research team. Designed and maintained ETL pipelines, built
              web-scraping automations in Python, Pandas, and Selenium to
              extract market and alternative data from files and public websites
              into relational databases, and delivered Tableau visualizations to
              support research workflows.
            </Entry>
          </div>
        </Section>

        <Section title="Projects">
          <div className="space-y-5">
            <Entry
              title="Radiant.gg (formerly GuildFi)"
              subtitle="Technical Lead — Cryptomind Group | Zentry"
              dates="2021 – Present"
            >
              PC gaming engagement platform with 100k+ users and 25k daily
              active users, tying real-time in-game activity across Fortnite,
              Valorant, League of Legends, CS2, and Apex Legends to a full
              reward economy of quests, achievements, battle passes,
              leaderboards, loot boxes, and crafting. Led the end-to-end
              architectural redesign following the product&rsquo;s pivot from
              the original Web3 guild platform — adopting Temporal.io for
              durable workflow orchestration across quest, shop, battlepass,
              leaderboard, and referral systems, and a five-store data layer
              (PostgreSQL, MongoDB, Redis, Neo4j, Typesense) tuned to each
              access pattern. Owned the core quest engine supporting partial
              progress tracking, streaks, rerolls, buff modifiers, and per-game
              event normalization from the Overwolf Game Events Provider SDK,
              along with an Electron desktop app built on ow-electron. Platform
              is a Turborepo monorepo of 70+ backend modules and 5+ apps,
              deployed on Kubernetes (GKE) with Datadog APM and
              OpenTelemetry-based distributed tracing. Tech stack: TypeScript,
              Node.js, Express, NestJS, tRPC, gRPC, TypeORM, Temporal.io,
              PostgreSQL, MongoDB, Redis, Neo4j, Typesense, RabbitMQ, Next.js,
              React, Socket.IO, Electron, Overwolf SDK.
            </Entry>

            <Entry
              title="Peahackathon2026.riseaccel.com"
              subtitle="Freelance"
              dates="2026"
            >
              Designed and delivered the official event website for PEA
              Hackathon 2026 — a joint initiative between the Provincial
              Electricity Authority (PEA) and RISE Accel connecting tech
              startups with PEA to co-create energy innovation solutions across
              Grid Operation and Logistics &amp; Supply Chain.
            </Entry>

            <Entry title="Agrowth.nia.or.th" subtitle="Freelance" dates="2025">
              Delivered the official website for NIA&rsquo;s AGROWTH —
              Thailand&rsquo;s first AgTech accelerator, a 12-week program
              pairing deep-tech agricultural startups with corporate partners
              for real-world PoC testing, mentorship, and funding access.
            </Entry>

            <Entry
              title="Salak Mabin"
              subtitle="Software Engineer / BA / SA — Freelance"
              dates="2023"
            >
              Designed and built an e-commerce platform for online lottery
              sales. Owned the database schema, backend cart and checkout flows,
              shop system, and payment gateway integration. Tech stack: Next.js,
              TypeScript, PostgreSQL, Redis.
            </Entry>

            <Entry
              title="Lending Interim Solution (CLI)"
              subtitle="Dev Lead — Blockfint"
              dates="2020 – 2021"
            >
              Led a three-engineer team delivering a lending interim solution
              for interest and fee calculation, bill generation, and payment
              processing in response to new lending regulations. Shipped in two
              months. Owned requirements gathering, analysis, technical
              direction, and on-time delivery. Tech stack: Go, PostgreSQL.
            </Entry>
          </div>
        </Section>

        <Section title="Education">
          <div className="space-y-5">
            <Entry
              title="Chulalongkorn University"
              subtitle="Bachelor of Computer Engineering"
              dates="2016 – 2020"
              location="Bangkok, Thailand"
            >
              GPA: 3.15
            </Entry>

            <Entry
              title="Debsirin School"
              subtitle="High School, Math-Science"
              dates="2013 – 2015"
              location="Bangkok, Thailand"
            >
              GPA: 3.74
            </Entry>
          </div>
        </Section>
      </main>
    </div>
  );
}

function SkillRow({ label, items }: { label: string; items: string }) {
  return (
    <p>
      <span className="font-semibold text-neutral-900">{label}:</span> {items}
    </p>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-8">
      <h2 className="font-poppins text-xs font-semibold tracking-[0.2em] uppercase text-neutral-900 pb-1.5 mb-4 border-b border-neutral-900">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Entry({
  title,
  subtitle,
  dates,
  location,
  children,
}: {
  title: string;
  subtitle?: string;
  dates?: string;
  location?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="avoid-break">
      <div className="flex flex-wrap items-baseline justify-between gap-x-3">
        <h3 className="font-semibold text-neutral-900">{title}</h3>
        {dates && (
          <span className="text-sm text-neutral-500 whitespace-nowrap">
            {dates}
          </span>
        )}
      </div>
      {(subtitle || location) && (
        <div className="flex flex-wrap items-baseline justify-between gap-x-3 text-sm text-neutral-600 mb-1.5">
          {subtitle && <span className="italic">{subtitle}</span>}
          {location && <span>{location}</span>}
        </div>
      )}
      <p className="text-neutral-700 leading-relaxed text-[15px]">{children}</p>
    </div>
  );
}
