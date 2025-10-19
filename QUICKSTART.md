# Quick Start Guide

## Getting Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open in Browser
Visit: `http://localhost:5173`

## What's Included

✅ **5 Complete Pages**
- Home (with 7 sections)
- About Us
- Services
- Our Work/Portfolio
- Blogs

✅ **Fully Responsive**
- Mobile-first design
- Tablet optimized
- Desktop enhanced

✅ **Interactive Features**
- Responsive navigation with mobile menu
- Testimonials carousel
- FAQ accordion
- Search & filter functionality
- Contact form
- WhatsApp integration
- Scroll-to-top button

## Customization Checklist

### Update Contact Information
- [ ] `src/common/Header.jsx` - Phone & email in top bar
- [ ] `src/common/Footer.jsx` - Footer contact details
- [ ] `src/components/Homefiles/ContactSection.jsx` - Contact section

### Update Content
- [ ] `src/data/servicesData.js` - Your services
- [ ] `src/data/blogsData.js` - Your blog articles
- [ ] `src/data/projectsData.js` - Your completed projects
- [ ] `src/data/testimonialsData.js` - Client testimonials
- [ ] `src/data/faqData.js` - Frequently asked questions

### Replace Images
- All images currently use Unsplash placeholders
- Replace with your actual project images
- Recommended sizes:
  - Hero images: 1920x1080px
  - Project cards: 800x600px
  - Blog cards: 800x500px
  - Testimonial avatars: 128x128px

### Update Branding
- [ ] Logo/Company name in Header and Footer
- [ ] Favicon in `public/`
- [ ] Colors in `tailwind.config.js` (if needed)
- [ ] Meta tags in `index.html` for SEO

### Connect Backend (Optional)
- [ ] Set up API endpoints
- [ ] Update Axios base URL
- [ ] Connect contact form
- [ ] Add form validation
- [ ] Implement newsletter subscription

## Common Commands

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Linting
npm run lint         # Check for code issues
```

## Mobile Testing

Test on different screen sizes:
- Mobile: 375px, 414px
- Tablet: 768px, 1024px
- Desktop: 1280px, 1920px

## Browser Testing

Test on:
- Chrome/Edge (Chromium)
- Firefox
- Safari (if on Mac)
- Mobile browsers

## Need Help?

1. Check the main README.md for detailed documentation
2. Review the project structure in README.md
3. All components are well-commented
4. Data files are self-explanatory

## Production Deployment

```bash
# Build the project
npm run build

# The 'dist' folder is ready to deploy to:
# - Vercel
# - Netlify
# - Traditional hosting
# - Any static file server
```

---

🎉 **You're all set! Start customizing your website.**

