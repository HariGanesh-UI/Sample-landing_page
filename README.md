# Builders Nova — Landing Page & Platform

> Professional construction site management SaaS platform for [buildersnova.com](https://www.buildersnova.com), operated by **ATTNS INNOVATION LABS PVT LTD**.

---

## 📋 Overview

**Builders Nova** is an all-in-one construction and project management SaaS platform designed for builders, contractors, developers, site engineers, and project teams. This repository hosts the high-converting landing page, interactive subscription/pricing system, demo lead capture pipeline, privacy policy, and local Express API server.

---

## ⚡ Quick Start (Local Development)

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/)

### 1. Installation
```bash
# Clone the repository
git clone https://github.com/HariGanesh-UI/Sample-landing_page.git
cd Sample-landing_page

# Install dependencies (Express, CORS)
npm install
```

### 2. Start Application
```bash
# Start production server
npm start

# Or start with auto-reload (development)
npm run dev
```

The application will start at:
👉 **[http://localhost:3000](http://localhost:3000)**

---

## 🗂️ Project Structure

```
Sample-landing_page/
├── index.html               # Main landing page (CSS, HTML & JS)
├── privacy-policy.html      # Comprehensive 14-section Privacy Policy
├── server.js                # Express backend server & REST API
├── demo-leads.json          # Demo request leads database (JSON store)
├── package.json             # NPM package scripts & dependencies
├── logo.png                 # Builders Nova brand logo
├── app-screenshot.png       # Mobile app preview mockup
├── screenshot-dashboard.png # Product screenshot: Executive Dashboard
├── screenshot-dsr.png       # Product screenshot: Daily Site Report (DSR)
├── screenshot-wsr.png       # Product screenshot: Weekly Site Report (WSR)
├── screenshot-indent.png    # Product screenshot: Material Indent
├── screenshot-inventory.png # Product screenshot: Inventory & Stock
├── screenshot-payments.png  # Product screenshot: Payment Tracking
├── .gitignore               # Git ignored directories (node_modules, logs)
└── README.md                # Project documentation
```

---

## 🚀 Backend Server & API Routes

The built-in Node/Express server (`server.js`) serves static assets and provides RESTful endpoints for lead collection and payment tracking:

### API Endpoints:

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/` | Serves `index.html` landing page |
| `GET` | `/privacy-policy` | Serves `privacy-policy.html` |
| `POST` | `/api/demo-request` | Submits and records a new demo lead |
| `GET` | `/api/demo-leads` | Returns all captured leads as JSON |
| `GET` | `/api/demo-leads/:id` | Fetches a specific lead by ID |
| `DELETE` | `/api/demo-leads/:id` | Deletes a specific lead |

#### Example: Demo Request Payload (`POST /api/demo-request`)
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@acmebuilders.com",
  "phone": "+91 98765 43210",
  "company": "Acme Builders Ltd",
  "jobTitle": "Project Manager",
  "companySize": "51-200",
  "city": "Hyderabad",
  "interest": "Full Platform Demo",
  "projects": "5",
  "message": "Interested in site inventory and DSR automation."
}
```

*Note: If the server is offline during development, leads are automatically preserved in the browser's `localStorage` (`buildersnova_demo_leads`) as a fallback.*

---

## 💳 Pricing & Subscription Module

Modern SaaS 4-column pricing cards combining data integrity with responsive layout:

| Tier | Price | User Limit | Project Limit | Modules | Action Button |
|---|---|---|---|---|---|
| **STARTER** | **₹999** / month | 10 users | 3 projects | All modules & roles | `Switch to Starter` |
| **PROFESSIONAL** | **₹2,999** / month | 25 users | 10 projects | All modules & roles | `Switch to Professional` |
| **BUSINESS** | **₹5,999** / month | 75 users | Unlimited | All modules & roles | `Switch to Business` |
| **ENTERPRISE** | **₹15,000+** / month | Unlimited | Unlimited | All modules & roles | `Contact Sales` |

### Renewal & Checkout Card:
Directly below the plans is the renewal and payment section:
- **`[ MARK AS PAID (MANUAL) ]`**: Direct bank transfer & UPI confirmation dialog with company bank details (`ATTNS INNOVATION LABS PVT LTD`, Account No: `50200088921821`, IFSC: `HDFC0001234`, UPI: `payments@attcity.in`) and UTR reference number submission.
- **`[ PAY WITH STRIPE ]`**: 256-bit encrypted simulated card checkout modal with immediate transaction confirmation and receipt ID.

---

## 📝 Demo Request Modal Flow

The 3-step interactive lead capture modal triggers across all CTA buttons:
- **Step 1: Contact Details** — First Name, Last Name, Work Email, Phone (with live format validation).
- **Step 2: Company Information** — Company Name, Designation / Job Title, Company Size, City.
- **Step 3: Requirements** — Primary Feature Interest (DSR, Procurement, Inventory, Payments, Workforce, Full Demo), Active Projects, Message.
- **Success State** — Animated checkmark with response commitment and auto-reset.

---

## 📜 Privacy Policy (`privacy-policy.html`)

A 14-section Privacy Policy compliant with Indian IT laws (SPDI Rules 2011) and modern data protection principles:
- **Company**: ATTNS INNOVATION LABS PVT LTD
- **Contact & Grievance**: `support@attcity.in`, `grievance@attcity.in`
- **Sections**: Roman-numeral table of contents, sticky navigation, data retention schedules, security standards, and user rights.

---

## 🎨 Design System & Color Palette

| Token | Value | Usage |
|---|---|---|
| **Navy (Primary)** | `#1B2A4A` | Brand headers, primary buttons, navigation |
| **Dark Navy** | `#0A1628` | AlignGate-style 5-column footer |
| **Amber (Accent)** | `#F59E0B` / `#EA8C00` | Badges, highlights, CTA accents |
| **Surface Background** | `#FFFFFF` / `#F9FAFB` | Page, section, and card surfaces |
| **Border Soft** | `#E5E7EB` | Subtle card outlines |
| **Text Main** | `#111827` / `#1E293B` | High-contrast body text |
| **Success Emerald** | `#059669` | Feature checkmarks, verification states |

---

## 📱 Responsive Breakpoints

| Breakpoint | Devices | Layout Adjustments |
|---|---|---|
| **> 1024px** | Desktop / Large displays | 4-column pricing grid, 5-column footer, full navigation |
| **768px – 1024px** | Tablets / Small laptops | 2-column pricing grid (`2x2`), mobile menu toggle |
| **≤ 768px** | Mobile phones | 1-column stacked cards, full-width touch buttons |

---

## 🚢 Production Deployment

### Option 1: Node.js Hosting (Render, Railway, DigitalOcean, Heroku)
```bash
# Set PORT environment variable if required
export PORT=3000
npm start
```

### Option 2: Serverless / Static Hosting (Vercel, Netlify)
If deploying only static pages:
```bash
# Vercel
vercel --prod

# Netlify
netlify deploy --dir=. --prod
```

---

## 📄 License & Legal

© 2026 **Builders Nova**. Operated by **ATTNS INNOVATION LABS PVT LTD**. All rights reserved.
