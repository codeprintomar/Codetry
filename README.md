# CodePrint — Complete Website & Platform Architecture

> **Brand Mission:** Turn ideas into useful digital products.  
> **Brand Identity:** Independent software development and digital products brand combining software development, practical applications, free digital tools, custom engineering, and technical education.

---

## 1. Visual Identity & Design System

- **Art Direction:** Premium Digital Studio + Experimental Editorial Design + Modern Technology.
- **Palette:**
  - Deep Black: `#080808`
  - Dark Slate Surfaces: `#0E0E0E` / `#121212`
  - Crimson Red (Signature Accent): `#B00018`
  - Bright Red: `#F00020`
  - Off-White Canvas (Light Mode): `#F8F7F4` / `#F4F0E8`
  - White: `#FFFFFF`
  - Muted Typography: `#737373` / `#A6A6A6`
- **Typography:**
  - Latin Display & Body: `Plus Jakarta Sans`
  - Arabic Display & Body: `IBM Plex Sans Arabic`
  - Numerical & Data Figures: `JetBrains Mono` with `tabular-nums`
- **Frontend Constitution Compliance:**
  - Zero-pill metadata discipline (clean inline text with `·` / `/` separators).
  - Strict Top Bar Contract (Wordmark — 5 single-line links — 1 primary action & essential utilities).
  - Dual-Theme pairing with Tailwind v4 `@custom-variant dark (&:where(.dark, .dark *));`.
  - Full bidirectional support (Native LTR English & Native RTL Arabic).

---

## 2. Platform Architecture & Pages

1. **Homepage (`/`)**:
   - Hero section with marquee statement *"Ideas into Software"* / *"نحوّل الأفكار إلى برامج وحلول رقمية"*, primary CTA to Products, secondary CTA to Project Inquiry, and high-fidelity studio visual backdrop.
   - Core Capabilities Bento (Digital Products, Free Tools, Custom Software, Web Solutions).
   - Featured Products spotlight (Flosy, GradeOS, Outfit Closet, Wave).
   - EasyTrade production case study highlight.
   - Brand manifesto & 6-step engineering process (Discover → Plan → Design → Build → Test → Deliver).
   - Technical Insights preview & Conversion CTA.

2. **Products Catalog (`/products`)**:
   - Filterable by Category (Finance, Education, Personal Organization, Productivity, Music, Developer Tools) and Status (Free, Paid, Available, In Development).
   - Instant search across product names, taglines, and problem statements.
   - Deep-dive product inspection modal detailing problem solved, key features, platform requirements, verified GitHub links, and license options.

3. **Free Tools Directory (`/tools`)**:
   - Directory of all 12+ verified free tools: Flosy, Wave, Habits OS, QFormat, Code & Text Formatter, Focus Tracker, To-Do List Web, Advanced To-Do, Orbit, Nova Assistant, Bara El-Salfa.
   - Built-in live interactive **Code & Text Formatter Engine** with real JSON beautification, case transformations (camelCase, snake_case, kebab-case), line deduplication, and one-tap clipboard copy.

4. **Services & Project Request Form (`/services`)**:
   - 6 Core Services: Website Development, E-commerce Development, Custom Software Solutions, Dashboard Development, Practical Automation, UI Engineering.
   - Interactive Project Request Form with validation, category picker, budget ranges, required features, and contact preference. Inquiries are stored in local state for admin review.

5. **Projects Portfolio & Case Studies (`/projects`)**:
   - EasyTrade comprehensive case study (Firestore, Auth, Telegram order alerts, Google Apps Script email workflow).
   - Open-source repository showcases with verified GitHub destinations.

6. **Insights & Technical Education (`/insights`)**:
   - Reusable article system with interactive reading modal.
   - High-quality technical articles written in both English and Arabic:
     - *How Does File Compression Work?*
     - *How Does a Computer Search Through Millions of Records?*
     - *How Does the Internet Deliver Data to Your Device?*
     - *Understanding If/Else Statements: Control Flow in Real Systems*
     - *Useful AI Tools for Modern Developers: Practicality over Hype*

7. **Store & Digital Distribution (`/store`)**:
   - Commercial licenses and pre-orders (GradeOS, Outfit Closet, Lawhati).
   - Cart drawer and streamlined Checkout flow with transparent manual payment verification (InstaPay Egypt / Bank Transfer).
   - Order tokens generated automatically (`CP-XXXX`) and tracked in customer accounts.

8. **Customer Account System (`/account`)**:
   - User authentication (registration, sign-in, one-click demo customer login, sign-out).
   - Order tracking with transparent statuses (`Pending`, `Under Review`, `Confirmed`, `Completed`, `Cancelled`).
   - Protected Downloads tab: unlocks official license keys and download packages once payment is confirmed by administration.

9. **Administrative Console (`/admin`)**:
   - Authorized admin gateway (with quick demo toggle).
   - Platform Overview KPIs (Products, Lifetime Orders, Pending Reviews, Confirmed Deliveries).
   - Order Manager: live search, status switcher (transitioning status to Confirmed or Completed immediately unlocks download access for the customer).
   - Product Catalog Manager: edit availability, prices, taglines, and distribution notes.
   - Inbound Quotes Lead Viewer: inspect project requests submitted through the Services page.
   - Community Feedback Queue: manage bug reports and feature requests.

10. **About Page (`/about`)**:
    - Honest, confident independent brand positioning without exaggerated corporate claims.
    - Verified links to CodePrint GitHub profile, main repository, Linktree, and WhatsApp Channel.

11. **Community & Support (`/support`)**:
    - Official WhatsApp Channel integration.
    - Searchable FAQs on licensing, manual verification, and custom engineering.
    - Interactive Bug Report and Feature Suggestion modal.
    - Direct inquiry form.

12. **Global Utilities**:
    - Global Search Modal (`Cmd+K` or `Ctrl+K`) searching across products, tools, projects, articles, and services.
    - Language switcher with full RTL Arabic and LTR English translations.
    - Theme switcher with complete Light and Dark mode optical pairing.

---

## 3. Verified Official Links

- **Main Website:** [https://code-print.wasmer.app/](https://code-print.wasmer.app/)
- **GitHub Profile:** [https://github.com/codeprintomar](https://github.com/codeprintomar)
- **Main Repository:** [https://github.com/codeprintomar/code-print](https://github.com/codeprintomar/code-print)
- **Linktree:** [https://linktr.ee/codeprintomar](https://linktr.ee/codeprintomar)
- **Official WhatsApp Channel:** [https://whatsapp.com/channel/0029VbCCNPgufJ0imw5qQ2S](https://whatsapp.com/channel/0029VbCCNPgufJ0imw5qQ2S)

### Official Project Repositories
1. برا السالفة: [https://github.com/codeprintomar/bara-el-salfa](https://github.com/codeprintomar/bara-el-salfa)
2. Flosy: [https://github.com/codeprintomar/Flosy](https://github.com/codeprintomar/Flosy)
3. GradeOS: [https://github.com/codeprintomar/Gradeos](https://github.com/codeprintomar/Gradeos)
4. QFormat: [https://github.com/codeprintomar/Q-Format](https://github.com/codeprintomar/Q-Format)
5. Focus Tracker: [https://github.com/codeprintomar/Focus-Tracker](https://github.com/codeprintomar/Focus-Tracker)
6. To-Do List Web: [https://github.com/codeprintomar/to-do-list-web](https://github.com/codeprintomar/to-do-list-web)
7. Orbit: [https://github.com/codeprintomar/Orbit](https://github.com/codeprintomar/Orbit)
8. Nova Assistant: [https://github.com/codeprintomar/Nova-assistant](https://github.com/codeprintomar/Nova-assistant)
9. Habits OS: [https://github.com/codeprintomar/Habit-os](https://github.com/codeprintomar/Habit-os)
10. Outfit Closet: [https://github.com/codeprintomar/My-Outfit-Closet](https://github.com/codeprintomar/My-Outfit-Closet)
11. Wave: [https://github.com/codeprintomar/Wave](https://github.com/codeprintomar/Wave)
12. Advanced To-Do: [https://github.com/codeprintomar/Advanced-To-Do-List-app](https://github.com/codeprintomar/Advanced-To-Do-List-app)
13. Code & Text Formatter: [https://github.com/codeprintomar/Code-and-Text-Formatter](https://github.com/codeprintomar/Code-and-Text-Formatter)

---

## 4. Setup & Deployment Instructions

### Local Development
```bash
# Install dependencies
npm install

# Start Vite development server on port 3000
npm run dev
```

### Production Build
```bash
# Build optimized static distribution
npm run build

# Preview production bundle
npm run preview
```

---

## 5. QA Verification Report

- **Compilation (`npm run build`):** Passed with 0 errors.
- **Type Checking & Lint (`tsc --noEmit`):** Clean, 0 warnings or errors.
- **Navigation & Routing:** Tested across all 11 views (Home, Products, Tools, Services, Projects, Insights, Store, Account, Admin, About, Support).
- **Search:** Tested Cmd+K global modal across 5 data sets.
- **Cart & Manual Payment Checkout:** Tested placing orders, generating order tokens, and viewing them under the customer account and admin dashboard.
- **Admin Status Updates:** Tested changing order status from "Under Review" to "Confirmed" and verifying that protected download keys unlock instantly in the customer portal.
- **Bilingual & RTL Testing:** Verified direction attributes (`dir="rtl"` vs `dir="ltr"`), font switching (`IBM Plex Sans Arabic` vs `Plus Jakarta Sans`), and translations.
- **Theme Testing:** Light mode and dark mode verified with complete optical surface/text contrast.
