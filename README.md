# Automataiz™ — The AI Business Operating System

> **"The Future of Business. Automated."**  
> *Human Leadership + Autonomous AI Workforce in One Unified Platform.*

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-FF0055?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

---

## 🌟 Executive Overview

**Automataiz** converges Marketing, Sales, Operations, Finance, and AI into one intelligent Business Operating System (BOS). It eliminates software fragmentation for modern enterprises by replacing 15+ disconnected tools with a unified digital brain.

```
       ┌─────────────────────────────────────────────────────────┐
       │                   CEO COMMAND COCKPIT                   │
       └────────────────────────────┬────────────────────────────┘
                                    │
       ┌────────────────────────────▼────────────────────────────┐
       │             THE CENTRAL AI INTELLIGENCE LAYER            │
       │    (Nova Co-Pilot • SOP Autonomous Agents • Workflows)   │
       └────┬──────────────┬──────────────────┬──────────────┬───┘
            │              │                  │              │
    ┌───────▼──────┐ ┌─────▼───────┐ ┌────────▼───────┐ ┌────▼────────┐
    │ MARKETING OS │ │  SALES OS   │ │ OPERATIONS OS  │ │ FINANCE OS  │
    │   (Demand)   │ │  (Revenue)  │ │   (Delivery)   │ │  (Health)   │
    └──────────────┘ └─────────────┘ └────────────────┘ └─────────────┘
```

---

## 🚀 Key Platform Features

### 1. 💎 Premium Enterprise Pricing & Currency Switcher
- Dynamic **Monthly | Yearly** billing switcher with automatic 20% annual discount calculations.
- Live **INR (₹) | USD ($)** multi-currency converter with real-time localized tier pricing.
- 4 comprehensive pricing tiers:
  - **Starter**: Solopreneurs & single operators.
  - **Growth**: High-growth startups & MSMEs.
  - **Scale (Most Popular)**: Established businesses ready for complete automation.
  - **Enterprise**: Custom multi-brand & large organization deployments.
- Interactive **12-Module Feature Comparison Matrix** and FAQ accordion.

### 2. 🧠 Flagship AI Business Growth Simulator™
- **6-Pillar Input Engine**: Monthly Revenue, Profit Margin, Inbound Leads, Lead Conversion %, Follow-up Speed, and Software Costs.
- **Dynamic Business Health Score™ (0-100)**: Real-time calculation of revenue leaks, lost leads, wasted hours, and projected Automataiz OS ROI.
- **Automated AI Audit Report (PDF)**: 4-page downloadable executive diagnostic PDF using client-side `jspdf` vector rendering.

### 3. 🛡️ 30+ Integrated Services Matrix (App Hub)
- Filterable service grid covering:
  - **Builders**: Website Builder, Funnel Builder, Forms & Surveys, Chat Widgets.
  - **Marketing**: AI Social, Multi-Channel Campaigns, Ad Launcher, Review Engine.
  - **AI Suite**: AI SDR, AI Content Engine, Custom Trained SOP Agents, Voice Agents.
  - **CRM & Sales**: Unified Pipeline, WhatsApp WABA Inbox, Telecalling IVR, Lead Scoring.
  - **Learning & Community**: Course LMS, Membership Tiers, Event Masterclasses.
  - **Operations & Finance**: Workflow Automation, HRM Attendance, Invoicing, Autopay Subscriptions.

### 4. 🤖 Autonomous AI Digital Workforce
- Specialized autonomous agents: **AI SDR**, **AI Marketing Manager**, **AI Operations Coordinator**, **AI Customer Success Agent**, and **AI Financial Analyst**.
- Embedded **AI Studio™** for training custom agents on company SOPs.

### 5. 📊 Executive CEO Intelligence Cockpit
- Real-time morning briefing generation by **Nova AI Engine**.
- Live risk detection (SLA breaches, deal stalls) and automated growth opportunity alerts.
- Live telemetry across revenue velocity, lead engagement, and pipeline conversion.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Server Components & Static Site Generation)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + Custom Glassmorphism & Neon Glow Utilities
- **3D & Animations**: [Framer Motion](https://www.framer.com/motion/) (Hardware-accelerated perspective transforms, parallax, scroll reveal)
- **Icons**: [Lucide React](https://lucide.dev/)
- **PDF Generation**: [jsPDF](https://github.com/parallax/jsPDF) & [jsPDF-AutoTable](https://github.com/simonbengtsson/jsPDF-AutoTable)
- **Confetti Celebration**: [canvas-confetti](https://www.kirilv.com/canvas-confetti/)

---

## 📂 Repository Structure

```
├── app/
│   ├── layout.tsx              # Root HTML wrapper with Navbar, Footer & Background
│   ├── globals.css             # Root typography scaling (16px/17px) & animation utilities
│   ├── page.tsx                # Homepage featuring 3D Cockpit, Simulator, Pillars, & Pricing
│   ├── product/page.tsx        # Deep-dive 30+ service architecture & feature explorer
│   ├── solutions/page.tsx      # 4 Pillars (Marketing, Sales, Ops, Finance) + AI Layer
│   ├── industries/page.tsx     # 6 Industry Vertical Blueprints (Fitness, Real Estate, etc.)
│   ├── pricing/page.tsx        # Standalone Pricing & ROI Calculator
│   ├── company/page.tsx        # Founder Story (Debasish Kabi), Principles, Vision 2030-2040
│   ├── contact/page.tsx        # Strategy booking form & contact details
│   ├── simulator/page.tsx      # Standalone interactive Growth Simulator
│   ├── privacy/page.tsx        # Official Privacy Policy
│   ├── terms/page.tsx          # Official Terms of Service
│   ├── refund-policy/page.tsx  # Official Refund Policy
│   └── ai-safety/page.tsx      # AI Governance & Security Framework
├── components/
│   ├── navbar.tsx              # Responsive Glass Navbar with mobile drawer
│   ├── footer.tsx              # Enterprise footer with multi-column sitemap & social channels
│   ├── pricing-section.tsx     # Multi-currency (INR/USD) animated pricing engine
│   ├── growth-simulator.tsx    # Live diagnostic calculator & revenue leak analyzer
│   ├── audit-modal.tsx         # Download modal for AI Business Audit PDF
│   ├── hero-control-center.tsx # Interactive 3D tilt perspective cockpit
│   ├── app-hub-services.tsx    # 30+ service category matrix with detail drawer
│   ├── digital-workforce-grid.tsx # 6 AI autonomous agent cards & AI Studio banner
│   ├── ceo-dashboard-demo.tsx  # Interactive executive cockpit demo
│   ├── bos-assessment.tsx      # 60-second diagnostic assessment
│   ├── founder-showcase.tsx    # Founder narrative & operating principles
│   ├── neural-background.tsx   # Canvas ambient particle network
│   ├── card-3d.tsx             # Reusable mouse-tracking 3D card wrapper
│   ├── scroll-reveal.tsx       # IntersectionObserver scroll animations
│   └── scroll-progress.tsx     # Top scroll progress indicator
├── lib/
│   ├── audit-generator.ts      # jsPDF dynamic executive report engine
│   └── utils.ts                # Currency formatting (INR/USD) & class merge helper
└── public/
    └── images/                 # Logo, founder portrait, and asset images
```

---

## ⚡ Getting Started Locally

### Prerequisites
- Node.js 18.17+ or 20.x
- npm / yarn / pnpm

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/DevKabi/automataiz_com.git
   cd automataiz_com
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Start production server**:
   ```bash
   npm start
   ```

---

## 🏢 Company & Headquarters

- **Company**: Automataiz Technologies Private Limited
- **Founder & CEO**: Debasish Kabi
- **Headquarters**: Om City, Mancheswar, Bhubaneswar, Odisha – 751017, India
- **Official Website**: [https://automataiz.com](https://automataiz.com)
- **Contact Email**: [hello@automataiz.com](mailto:hello@automataiz.com)
- **Phone**: [+91 8338091603](tel:+918338091603)

---

## 📄 License & Intellectual Property

© 2025–2026 Automataiz Technologies. All rights reserved.  
*The Future of Business. Automated.*
