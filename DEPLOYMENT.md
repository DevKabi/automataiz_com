# Deployment Guide — Automataiz™ Platform

This document describes how to deploy Automataiz to production on **Vercel**, **AWS Amplify**, or custom VPS servers (Docker / PM2 / Nginx).

---

## 1. Deploying to Vercel (Recommended)

Next.js is built by Vercel, making it the most seamless platform for deploying Automataiz.

### Steps:
1. Push your code to GitHub:
   ```bash
   git push origin main
   ```
2. Log into [Vercel Dashboard](https://vercel.com).
3. Click **"Add New Project"** and import the `DevKabi/automataiz_com` repository.
4. Framework Preset: **Next.js**.
5. Build Command: `next build` (default).
6. Output Directory: `.next` (default).
7. Click **"Deploy"**.

---

## 2. Deploying on a Custom VPS / Cloud Server (Ubuntu / Debian)

### Prerequisites:
- Node.js 18+ or 20+ LTS
- PM2 (`npm install -g pm2`)
- Nginx

### Build & Run with PM2:
```bash
# 1. Clone & install
git clone https://github.com/DevKabi/automataiz_com.git
cd automataiz_com
npm install

# 2. Build for production
npm run build

# 3. Start with PM2 daemon
pm2 start npm --name "automataiz-web" -- start -- -p 3000
pm2 save
pm2 startup
```

### Nginx Reverse Proxy Configuration:
```nginx
server {
    listen 80;
    server_name automataiz.com www.automataiz.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## 3. Production Verification Checklist

- [x] Responsive layout verified on mobile, tablet, and desktop
- [x] `npm run build` generates 17 static routes with 0 errors
- [x] Multi-currency toggle (INR / USD) operational
- [x] Client-side PDF audit generation verified
- [x] Interactive 3D tilt perspective animations functional
