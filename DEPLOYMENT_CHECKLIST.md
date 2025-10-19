# Deployment Checklist

## Pre-Deployment Tasks

### 1. Update Content
- [ ] Replace all placeholder images with actual project photos
- [ ] Update company contact information (phone, email, address)
- [ ] Update WhatsApp number in all locations
- [ ] Review and update all service descriptions
- [ ] Add actual client testimonials
- [ ] Update blog articles with real content
- [ ] Add actual project portfolio items
- [ ] Verify all links work correctly

### 2. Branding
- [ ] Add company logo (replace text logo)
- [ ] Update favicon in `public/` folder
- [ ] Verify color scheme matches brand guidelines
- [ ] Update company name if different from "Vayu creations"
- [ ] Add social media links (Facebook, Instagram, LinkedIn)

### 3. SEO & Meta Tags
- [ ] Update `index.html` title tag
- [ ] Add meta description
- [ ] Add Open Graph tags for social sharing
- [ ] Add Twitter Card tags
- [ ] Create `robots.txt` file
- [ ] Create `sitemap.xml` file
- [ ] Add Google Analytics tracking code
- [ ] Add Google Search Console verification

### 4. Performance Optimization
- [ ] Optimize all images (compress, convert to WebP)
- [ ] Test page load speed (should be < 3 seconds)
- [ ] Enable lazy loading for images
- [ ] Minify CSS and JavaScript (done automatically by Vite)
- [ ] Test on slow 3G network
- [ ] Verify all animations are smooth

### 5. Testing
- [ ] Test all forms (contact, newsletter)
- [ ] Test on Chrome
- [ ] Test on Firefox
- [ ] Test on Safari
- [ ] Test on Edge
- [ ] Test on mobile devices (iOS and Android)
- [ ] Test on different screen sizes (mobile, tablet, desktop)
- [ ] Verify all links work
- [ ] Test search functionality
- [ ] Test filter functionality
- [ ] Verify WhatsApp button works
- [ ] Test scroll-to-top button
- [ ] Test navigation menu (desktop and mobile)

### 6. Accessibility
- [ ] Test with keyboard navigation
- [ ] Verify color contrast ratios
- [ ] Add alt text to all images
- [ ] Ensure form labels are properly associated
- [ ] Test with screen reader
- [ ] Add ARIA labels where needed

### 7. Backend Integration (If Applicable)
- [ ] Set up backend API
- [ ] Connect contact form to backend
- [ ] Connect newsletter form to email service
- [ ] Test form submissions
- [ ] Add form validation on backend
- [ ] Set up email notifications
- [ ] Add reCAPTCHA for spam protection
- [ ] Set up database for inquiries

### 8. Analytics & Tracking
- [ ] Set up Google Analytics
- [ ] Set up Facebook Pixel (if using Facebook Ads)
- [ ] Set up event tracking for:
  - Form submissions
  - Button clicks
  - Page views
  - WhatsApp clicks
  - Newsletter subscriptions

### 9. Security
- [ ] Enable HTTPS
- [ ] Set up security headers
- [ ] Implement Content Security Policy
- [ ] Enable CORS if needed
- [ ] Sanitize form inputs
- [ ] Add rate limiting for forms

### 10. Build & Deploy
```bash
# Build for production
npm run build

# Test production build locally
npm run preview

# Deploy to hosting
```

## Deployment Options

### Option 1: Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Option 2: Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

### Option 3: Traditional Hosting
```bash
# Build
npm run build

# Upload the 'dist' folder to your hosting via:
# - FTP
# - cPanel File Manager
# - SSH/SCP
```

## Post-Deployment Tasks

### 1. Verification
- [ ] Visit live website URL
- [ ] Test all pages load correctly
- [ ] Verify images display properly
- [ ] Test forms work on live site
- [ ] Check mobile responsiveness
- [ ] Verify analytics tracking is working
- [ ] Test contact email delivery
- [ ] Verify WhatsApp link opens correctly

### 2. SEO Submission
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Submit to Google My Business
- [ ] Create and verify social media profiles
- [ ] Share website on social media

### 3. Monitoring
- [ ] Set up uptime monitoring
- [ ] Monitor page load times
- [ ] Check analytics regularly
- [ ] Monitor form submissions
- [ ] Check for broken links monthly
- [ ] Review user feedback

### 4. Backup
- [ ] Set up automated backups
- [ ] Document deployment process
- [ ] Keep copy of environment variables
- [ ] Save access credentials securely

## Performance Targets

- [ ] Lighthouse Performance Score > 90
- [ ] Lighthouse Accessibility Score > 95
- [ ] Lighthouse Best Practices Score > 90
- [ ] Lighthouse SEO Score > 95
- [ ] Page Load Time < 3 seconds
- [ ] First Contentful Paint < 1.8s
- [ ] Time to Interactive < 3.8s
- [ ] Mobile-friendly test passes

## Browser Support Checklist

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Safari iOS (latest)
- [ ] Chrome Android (latest)

## Final Checks

- [ ] All placeholder content replaced
- [ ] All contact information updated
- [ ] Forms are working
- [ ] Analytics tracking active
- [ ] HTTPS enabled
- [ ] Custom domain configured (if applicable)
- [ ] Email addresses verified
- [ ] Social media links added
- [ ] Copyright year is current
- [ ] Privacy policy added (if required)
- [ ] Terms of service added (if required)

## Emergency Contacts

- Hosting Support: _______________
- Domain Registrar: _______________
- Developer: _______________
- Email Service: _______________

---

## Quick Deploy Commands

```bash
# Development
npm run dev

# Production Build
npm run build

# Preview Build
npm run preview

# Lint Check
npm run lint
```

---

**Once all items are checked, you're ready to go live! 🚀**

