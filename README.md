# Singari Landing Page

A modern, animated landing page for Singari - Finance that listens, learns, and grows with your life.

## Features

- ✨ Animated staggered menu with GSAP
- 🎨 Modern UI with Tailwind CSS
- ⚡ Built with Vite + React + TypeScript
- 📱 Fully responsive design
- 📧 **Email Waitlist** - Supabase + Resend integration

## 🚀 Email Waitlist System

Fully functional waitlist with:
- ✅ Email validation and storage (Supabase)
- ✅ Automated thank you emails (Resend)
- ✅ Edge Function backend
- ✅ Real-time success/error feedback

**Ready for production!** See [`PRODUCTION_SETUP.md`](./PRODUCTION_SETUP.md) for domain verification and launch guide.

### Quick Reference
- 📖 [Quick Start Guide](./QUICKSTART.md) - Initial setup
- � [Production Setup](./PRODUCTION_SETUP.md) - Domain verification & launch

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
l2/
├── src/
│   ├── components/
│   │   └── StaggeredMenu.tsx
│   ├── pages/
│   │   └── LandingPage.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
│   └── logo.svg
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **GSAP** - Animations

## Deployment.md has all the details for For Production Launch:
Open PRODUCTION_SETUP.md - It has everything you need:

✅ Step-by-step domain verification in Resend
✅ Environment variable updates
✅ Deployment commands
✅ Testing procedures
✅ Optional enhancements (templates, analytics, unsubscribe)
✅ Troubleshooting guide

Current Status:
✅ Working Now (Dev Mode):

All emails saved to database
Thank you emails sent to (workatsingari@gmail.com)
Form validation & user feedback
🚀 After Production Setup:

Emails sent to ALL addresses
Custom domain sender (noreply@singari.com)
Full production ready