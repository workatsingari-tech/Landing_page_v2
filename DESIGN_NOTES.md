# Singari Landing Page - Design Implementation Guide

## 📋 Overview
This document serves as a reference guide for replicating the Singari landing page design from Figma. Follow this step-by-step to ensure pixel-perfect implementation.

---

## 🎨 Design Specifications

### Color Palette
```
Primary Purple: #5227FF
Light Purple: #B19EEF
White: #FFFFFF
Gray Background: #F8F9FB
Dark Text: #1A1A1A
Light Gray Text: #6B7280
Border Gray: #E5E7EB
Alert Blue BG: #EFF6FF
```

### Typography
```
Font Family: Inter
Heading Sizes:
- Hero H1: 72px (lg), 64px (md), 48px (sm)
- Stats: 40px
- Alert Badge: 14px
- Body Text: 16px
- Small Text: 14px
```

### Spacing
```
Container Max Width: 1280px
Section Padding: 80px vertical, 48px horizontal
Grid Gap: 48px
Component Gap: 32px
```

---

## 🏗️ Component Breakdown

### 1. Header Component
**Location:** Top of page, fixed position
**Components:**
- Logo (left)
- Hamburger Menu Button (right)

**Specifications:**
```
Height: 80px
Padding: 32px horizontal
Background: Transparent (overlays content)
Z-index: 50
Logo Height: 32px
Menu Button: 
  - Text: "Menu" / "Close"
  - Icon: Plus/X (14px x 14px, 2px stroke)
  - Color: #000000
  - Font: 16px, medium weight
  - Gap: 8px between text and icon
```

**Menu Panel:**
```
Width: 420px (desktop), 100vw (mobile)
Background: #FFFFFF
Padding: 96px 32px 32px 32px
Animation: Slide from right, staggered items
Backdrop: Blur 12px

Menu Items:
  - Font Size: 64px
  - Font Weight: 600
  - Color: #000000
  - Hover Color: #5227FF
  - Letter Spacing: -2px
  - Text Transform: Uppercase
  - Item Numbers: 18px, #5227FF, positioned right
  - Gap between items: 16px

Socials Section:
  - Title: "Socials", #5227FF
  - Links: 20px font, #111111
  - Hover Effect: Opacity change for non-hovered items
```

---

### 2. Hero Section

#### Layout
```
Display: Grid (2 columns on desktop, 1 on mobile)
Min Height: 100vh
Align Items: Center
Padding: 96px 48px
Gap: 48px
```

#### Left Column - Content

**Alert Badge:**
```
Background: #EFF6FF
Padding: 8px 16px
Border Radius: 999px (pill shape)
Display: Inline-flex
Gap: 8px

Text:
  - "Alert:" in #5227FF, 14px, font-weight: 600
  - "Launching in 1000 days" in #6B7280, 14px
```

**Main Heading:**
```
Font Size: 72px (lg), 64px (md), 48px (sm)
Font Weight: 700
Color: #1A1A1A
Line Height: 1.1
Letter Spacing: -1px
Margin Top: 32px

Text: "Finance that listens,
       learns, and grows
       with your life."
```

**Email Input Section:**
```
Display: Flex (row on desktop, column on mobile)
Gap: 16px
Max Width: 500px
Margin Top: 32px

Input Field:
  - Flex: 1
  - Padding: 12px 24px
  - Border: 1px solid #E5E7EB
  - Border Radius: 999px
  - Font Size: 16px
  - Placeholder: "Enter email"
  - Focus: 2px ring in #5227FF

Button:
  - Padding: 12px 32px
  - Background: #5227FF
  - Color: #FFFFFF
  - Border Radius: 999px
  - Font Weight: 600
  - Hover: Opacity 90%
  - Transition: 200ms
```

**Stats Section:**
```
Display: Flex
Gap: 48px
Margin Top: 32px

Each Stat:
  Number:
    - Font Size: 40px
    - Font Weight: 700
    - Color: #1A1A1A
  
  Label:
    - Font Size: 14px
    - Color: #6B7280
    - Margin Top: 4px

Stats:
  - "1200+" → "Early Users"
  - "99+" → "kuch aur"
```

#### Right Column - Dashboard Illustration

**Container:**
```
Height: 600px
Display: Hidden on mobile/tablet (< 1024px)
Display: Flex on large screens
Align Items: Center
Justify Content: Center
Position: Relative
```

**Image:**
```
Source: /dashboard-mockup.png
Object Fit: Contain
Width: 100%
Height: 100%
Draggable: false
```

**Dashboard Components Visible in Image:**
1. **Circular Progress Chart** (top-left card)
   - Size: 320px x auto
   - Background: White with shadow-2xl
   - Border Radius: 24px
   - Border: 1px #E5E7EB
   - Padding: 32px
   - Progress Ring: 
     - Size: 160px diameter
     - Stroke Width: 12px
     - Background: #E5E7EB
     - Progress: #5227FF (75%)
   - Legend Items:
     - Mobile: #5227FF dot
     - Desktop: #B19EEF dot
     - Other: #D1D5DB dot
   - Position: Top-left, z-index: 10

2. **Main Dashboard Card** (center)
   - Size: 550px x 600px
   - Background: Gradient from gray-50 to white
   - Contains:
     - Search bar with icon
     - Line graph with purple gradients
     - Y-axis labels (0, 500, 1000, 1500, 3000)
     - Data points with values
     - Grid lines
     - Bottom data labels
   - Position: Center, translate -50% both axes

3. **Stats Card** (top-right)
   - Size: 224px (w-56) x auto
   - Background: White with shadow-xl
   - Border Radius: 16px
   - Padding: 24px
   - Contains:
     - Title "Stats" with "+12%" badge
     - 5 horizontal progress bars
     - Colors: Alternating purple (#5227FF) and light purple (#B19EEF)
     - Heights: 10px (h-2.5)
     - Animation: Staggered fill (delay-100, delay-200, etc.)
   - Position: Top-right (top: 48px, right: 0), z-index: 10

4. **List Card** (bottom-right)
   - Size: 256px (w-64) x auto
   - Background: White with shadow-xl
   - Border Radius: 16px
   - Padding: 20px
   - Contains:
     - 3 list items with icons
     - Icon circles: 40px, purple-100/green-100 backgrounds
     - Check mark icons in purple/green
     - Placeholder text bars
     - Last item: 50% opacity (inactive state)
   - Position: Bottom-right (bottom: 32px, right: 48px), z-index: 10

5. **Floating Action Icons** (scattered)
   - Play button icon (purple)
   - Email icon (purple)
   - Cursor/pointer icon (purple)
   - Percentage badges (+5%, -1%)
   - Position: Absolute, various locations around dashboard

---

## 🎭 Animations & Interactions

### Menu Animations (GSAP)
```javascript
Open Animation:
  - Pre-layers slide in: stagger 0.07s, ease: power4.out
  - Panel slides in: 0.65s delay, ease: power4.out
  - Items appear: y: 140% → 0%, rotate: 10deg → 0deg, stagger 0.1s
  - Numbers fade in: opacity 0 → 1, stagger 0.08s
  
Close Animation:
  - All panels slide out: 0.32s, ease: power3.in
  
Icon Animation:
  - Lines rotate to form X: 0.5s, ease: power4.out
  - Lines rotate back to +: 0.35s, ease: power3.inOut

Text Animation:
  - "Menu" cycles to "Close": 3 cycles, then settles
  - Duration: 0.5s + (cycles * 0.07s)
```

### Hover Effects
```
Menu Items: Color change to #5227FF (250ms)
Button: Opacity 90%, scale 0.98 (200ms)
Social Links: Sibling items fade to 35% opacity
Input: Ring appears on focus (2px #5227FF)
```

---

## 📱 Responsive Breakpoints

```
Mobile: < 640px
  - Hero heading: 48px
  - Stats stack vertically
  - Email input stacks vertically
  - Dashboard hidden
  - Menu: Full width

Tablet: 640px - 1024px
  - Hero heading: 64px
  - Dashboard hidden
  - Menu: Full width

Desktop: > 1024px
  - Hero heading: 72px
  - 2 column grid
  - Dashboard visible
  - Menu: 420px width
```

---

## 🔧 Technical Stack

```
React: 18.2.0
TypeScript: 5.2.2
Vite: 5.0.8
Tailwind CSS: 3.3.6
GSAP: 3.12.5
```

---

## 📂 File Structure

```
src/
├── components/
│   ├── StaggeredMenu.tsx      # Animated menu component
│   ├── CircularProgress.tsx   # Circular progress chart card
│   └── DashboardMockup.tsx    # Main dashboard with chart
├── pages/
│   └── LandingPage.tsx        # Main landing page
├── App.tsx                    # Root component
├── main.tsx                   # Entry point
└── index.css                  # Global styles + Tailwind

public/
├── logo.svg                   # Singari logo
└── dashboard-mockup.png       # Dashboard illustration (fallback)
```

---

## ✅ Implementation Checklist

### Phase 1: Setup ✓
- [x] Project initialized with Vite
- [x] Tailwind CSS configured
- [x] GSAP installed
- [x] TypeScript setup
- [x] File structure created

### Phase 2: Header
- [x] Logo component
- [x] Menu button with animation
- [x] Staggered menu panel
- [x] Menu items with numbering
- [x] Social links section
- [x] Test all animations
- [x] Mobile responsiveness

### Phase 3: Hero Section
- [x] Alert badge
- [x] Main heading
- [x] Email input form
- [x] Stats section
- [x] Dashboard components integration
- [x] Circular progress card
- [x] Main dashboard card with chart
- [x] Stats card with progress bars
- [x] List card with items
- [x] Responsive layout
- [ ] Form validation
- [ ] Add scroll animations

### Phase 4: Additional Sections (To Do)
- [ ] Features section
- [ ] How it works
- [ ] Testimonials
- [ ] Pricing
- [ ] FAQ
- [ ] Footer

### Phase 5: Polish
- [ ] Add loading states
- [ ] Add scroll animations
- [ ] Optimize images
- [ ] Add meta tags for SEO
- [ ] Test cross-browser
- [ ] Performance optimization
- [ ] Accessibility audit

---

## 🎯 Key Design Elements to Replicate

1. **Purple Accent Color** - Used consistently for CTAs and highlights
2. **Clean White Space** - Generous padding and margins
3. **Smooth Animations** - GSAP-powered, high-performance
4. **Modern Typography** - Inter font with tight letter spacing
5. **Rounded Elements** - Pill-shaped buttons and inputs
6. **Dashboard Mockup** - Central visual element showing product
7. **Minimal Design** - Focus on content, not decoration

---

## 🐛 Common Issues & Solutions

### Issue: Menu not animating
**Solution:** Ensure GSAP is imported and useLayoutEffect is running

### Issue: Tailwind styles not applying
**Solution:** Check postcss.config.cjs uses module.exports (not export default)

### Issue: Dashboard image not showing
**Solution:** Verify image is in public/ folder and path starts with /

### Issue: Menu overlapping content
**Solution:** Ensure z-index hierarchy is correct (menu should be 40+)

---

## 📝 Next Steps

1. **Review this document** - Understand all components
2. **Test current implementation** - Verify all animations work
3. **Add dashboard image** - Save actual image to public/dashboard-mockup.png
4. **Implement remaining sections** - Follow this guide for consistency
5. **Polish interactions** - Fine-tune animations and hover effects
6. **Test responsiveness** - Check all breakpoints
7. **Deploy** - Build and deploy to production

---

## 💡 Tips for Development

- Use the browser DevTools to inspect spacing and colors
- Reference the Figma design frequently
- Test animations at different speeds
- Keep components modular and reusable
- Use TypeScript for type safety
- Comment complex animation logic
- Test on real devices, not just desktop

---

## 🔗 Useful Resources

- [GSAP Documentation](https://greensock.com/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [Vite Guide](https://vitejs.dev/guide/)

---

**Last Updated:** October 26, 2025
**Version:** 1.0
**Status:** Header Complete, Hero Section Complete
