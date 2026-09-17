# Builders Nova — Landing Page

> Professional construction site management SaaS landing page for [buildersnova.com](https://www.buildersnova.com)

## 📋 Overview

A high-converting, professional landing page for Builders Nova — an all-in-one construction site management platform. Built as a single `index.html` with all CSS and JavaScript embedded inline for easy deployment.

## 🗂️ File Structure

```
sample landing page/
├── index.html               # Main landing page (self-contained)
├── logo.png                 # Brand logo
├── screenshot-dashboard.png # Dashboard screenshot
├── screenshot-dsr.png       # Daily Site Report screenshot
├── screenshot-wsr.png       # Weekly Site Report screenshot
├── screenshot-indent.png    # Material Indent screenshot
├── screenshot-inventory.png # Inventory screenshot
├── screenshot-payments.png  # Payments screenshot
└── README.md                # This file
```

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| **Primary (Navy)** | `#1B2A4A` | Headers, nav, CTA backgrounds |
| **Secondary (Amber)** | `#F59E0B` | Highlights, badges, accent elements |
| **Background** | `#FFFFFF` / `#F9FAFB` | Page and section backgrounds |
| **Cards** | `#FFFFFF` | Card surfaces with subtle borders |
| **Text** | `#1E293B` | Body text (charcoal, not pure black) |
| **Success** | `#059669` | Checkmarks, positive states |
| **Warning** | `#D97706` | Alerts, pending states |

- **Typography**: Inter (Google Fonts)
- **Spacing System**: 8px grid
- **Border Radius**: 6px (sm), 10px (md), 16px (lg), 24px (xl)

## 🚀 Deployment

### Option 1: Static File Hosting (Recommended)

The entire page is self-contained in `index.html` with inline CSS/JS. Simply deploy the folder contents to any static hosting:

```bash
# Deploy to Netlify
netlify deploy --dir=. --prod

# Deploy to Vercel
vercel --prod

# Deploy to Firebase Hosting
firebase deploy

# Deploy to AWS S3
aws s3 sync . s3://your-bucket-name --acl public-read
```

### Option 2: Subdomain on buildersnova.com

To attach as a landing page subdomain (e.g., `landing.buildersnova.com`):

#### Using Nginx (Reverse Proxy / Static)

```nginx
server {
    listen 80;
    server_name landing.buildersnova.com;

    root /var/www/landing;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(png|jpg|jpeg|gif|ico|svg)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
}
```

#### Using Apache

```apache
<VirtualHost *:80>
    ServerName landing.buildersnova.com
    DocumentRoot /var/www/landing

    <Directory /var/www/landing>
        Options -Indexes
        AllowOverride All
    </Directory>
</VirtualHost>
```

#### DNS Configuration

Add a CNAME or A record for the subdomain:

```
Type: CNAME
Name: landing
Value: buildersnova.com (or your hosting provider's domain)
TTL: 3600
```

### Option 3: Cloudflare Pages

1. Push this folder to a GitHub/GitLab repository
2. Connect the repo to Cloudflare Pages
3. Set build output to `/` (root)
4. Add custom domain: `landing.buildersnova.com`

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|------------|--------|
| `> 1024px` | Full desktop layout |
| `768px – 1024px` | Tablet (2-column grids) |
| `480px – 768px` | Mobile (single column) |
| `< 480px` | Small mobile |

## 🔧 Customization

### Changing Colors
All colors are defined as CSS custom properties in `:root`. Update the variables at the top of the `<style>` block.

### Updating Screenshots
Replace the `.png` files in the root directory. Filenames must match:
- `screenshot-dashboard.png`
- `screenshot-dsr.png`
- `screenshot-wsr.png`
- `screenshot-indent.png`
- `screenshot-inventory.png`
- `screenshot-payments.png`

### Updating Logo
Replace `logo.png` with your updated logo file.

## ✅ Features

- [x] Sticky header with scroll effect
- [x] Hero section with product screenshot mockup
- [x] Animated stat counters
- [x] 6-feature card grid with tags
- [x] 4-step "How It Works" section
- [x] Interactive product showcase with 6 screenshot tabs
- [x] 7-role Maker-Checker architecture display
- [x] Inventory-first procurement workflow diagram
- [x] 3-tier pricing cards
- [x] Customer testimonials
- [x] Mobile app download section
- [x] Full-width CTA section
- [x] Professional footer with social links
- [x] Scroll-reveal animations
- [x] Fully responsive (mobile-first)
- [x] All CTAs link to `www.buildersnova.com`

## 📄 License

© 2024 Builders Nova. All rights reserved.
