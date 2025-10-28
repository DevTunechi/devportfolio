# 🧠 AI-Powered GitHub Portfolio Builder

An intelligent web application that automatically creates **personalized developer portfolios** from GitHub profiles using **AI-driven design generation**.  

Developers can log in with GitHub, have the system analyze their repositories, generate summaries and design layouts using AI, preview the portfolio, and either **download the code (ZIP)** or **host it directly**.

---

## 🚀 Purpose

Many developers struggle to showcase their GitHub projects attractively.  
While GitHub is perfect for collaboration, it’s not built to *visually present* skills or projects to employers or clients.

**This project bridges that gap** by combining:
- GitHub data extraction (repos, skills, projects)
- AI-based content and design generation
- A customizable portfolio builder
- Download/hosting options for monetization

In short:  
> “Login with GitHub → AI builds your portfolio → You preview, tweak, and publish.”

---

## 🧩 Core Features

- 🔐 **GitHub OAuth Authentication** — secure login and repo access  
- 🤖 **AI Analysis & Design Generation** — OpenAI creates bios, summaries, and layout themes  
- 💻 **Dynamic Portfolio Builder** — live preview, edit, and rearrange sections  
- 📦 **Export or Host** — download portfolio ZIP or host via the platform  
- 💰 **Stripe Integration** — payments for hosting and premium downloads  
- 🧠 **Admin Dashboard** — monitor users, payments, and featured portfolios  

---

## ⚙️ Tech Stack

| Layer | Technology | Description |
|-------|-------------|-------------|
| **Frontend** | Next.js (React + TypeScript + TailwindCSS) | Dashboard, preview UI, user interface |
| **Backend** | Node.js + Express (TypeScript) | Core API, AI logic, file generation, payments |
| **Database** | PostgreSQL + Prisma ORM | Data storage and schema management |
| **AI Integration** | OpenAI API | Content and design generation |
| **Authentication** | GitHub OAuth (Passport.js) | User login and data access |
| **Payments** | Stripe | Monetization for downloads/hosting |
| **Storage** | AWS S3 / Cloudflare R2 | For storing ZIPs and hosted portfolio assets |
| **Hosting** | Vercel (frontend) + Render/Railway (backend + DB) | Scalable, production-ready deployment |

---

## 🧱 System Architecture

            ┌────────────────────────┐
            │      Frontend (Next.js) │
            │  - Login, Preview, Edit │
            │  - Stripe Checkout UI   │
            └─────────────┬───────────┘
                          │ REST API Calls
                          ▼
            ┌────────────────────────┐
            │     Backend (Express)   │
            │  - GitHub OAuth Auth     │
            │  - AI Portfolio Builder  │
            │  - ZIP Export / Hosting  │
            │  - Payment Webhooks      │
            └─────────────┬───────────┘
                          │
         ┌────────────────┴────────────────┐
         ▼                                 ▼
 PostgreSQL (via Prisma)           AWS S3 / Cloud Storage
 - Users                           - Portfolio ZIPs
 - Portfolios                      - Static assets
 - Transactions
