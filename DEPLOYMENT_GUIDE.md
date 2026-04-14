# Jetblack Painting Website - Deployment Guide

## Overview
This guide explains how to deploy the updated Jetblack Painting website to your live site at https://jetblackpainting.manus.space.

---

## Step 1: Prepare Your Local Environment

### Install Dependencies
```bash
cd /home/ubuntu/jetblack-painting-website-main
npm install
# or
pnpm install
```

### Verify Build
```bash
npm run build
# or
pnpm build
```

This will create optimized production files in the `dist/` directory.

---

## Step 2: Commit Changes to GitHub

### Stage All Changes
```bash
git add .
```

### Create a Descriptive Commit Message
```bash
git commit -m "feat: Add premium services section, quote form, SEO optimization, and performance improvements

- Added PremiumServices component with suburb targeting
- Implemented QuoteForm with validation and form handling
- Enhanced index.html with comprehensive meta tags and schema markup
- Added sitemap.xml and robots.txt for SEO
- Optimized vite.config.ts for better performance
- Added .htaccess for server-side caching and compression
- Included PERFORMANCE_OPTIMIZATIONS.md and OPTIMIZATION_SUMMARY.md guides"
```

### Push to GitHub
```bash
git push origin main
```

---

## Step 3: Deploy to Manus Platform

### Option A: Automatic Deployment (Recommended)
If your Manus project is connected to GitHub, the deployment should trigger automatically when you push to the main branch.

**Steps**:
1. Go to your Manus dashboard
2. Navigate to your Jetblack Painting project
3. Check the "Deployments" tab to monitor the build progress
4. Once complete, your site will be live at https://jetblackpainting.manus.space

### Option B: Manual Deployment
If automatic deployment is not enabled:

1. Log in to your Manus dashboard
2. Open the Jetblack Painting project
3. Click "Deploy" or "Redeploy"
4. Select the latest commit from GitHub
5. Click "Deploy Now"
6. Wait for the deployment to complete

---

## Step 4: Verify Deployment

### Check Live Site
1. Visit https://jetblackpainting.manus.space
2. Verify all new sections are visible:
   - Premium Services section
   - Quote Form section
   - Updated meta tags (check page source)

### Test Key Features
- [ ] Click "Call Now" button (should open phone dialer)
- [ ] Fill out and submit the Quote Form
- [ ] Verify responsive design on mobile
- [ ] Check all links work correctly
- [ ] Verify images load properly

### Run Lighthouse Audit
```bash
# Using Chrome DevTools
1. Open DevTools (F12)
2. Go to Lighthouse tab
3. Click "Analyze page load"
4. Target: Performance 90+, SEO 100
```

### Check SEO
1. Go to Google Search Console
2. Submit the sitemap: https://jetblackpainting.manus.space/sitemap.xml
3. Check for any indexing errors
4. Verify robots.txt is accessible: https://jetblackpainting.manus.space/robots.txt

---

## Step 5: Post-Deployment Monitoring

### Monitor Performance
- [ ] Check Core Web Vitals in Google Analytics
- [ ] Monitor page load times
- [ ] Track form submissions
- [ ] Monitor bounce rate

### Monitor SEO
- [ ] Check Google Search Console for errors
- [ ] Monitor search rankings for target keywords
- [ ] Track organic traffic in Google Analytics
- [ ] Monitor click-through rate from search results

### Monitor User Experience
- [ ] Check for JavaScript errors (browser console)
- [ ] Monitor form submission success rate
- [ ] Track user engagement metrics
- [ ] Monitor mobile vs desktop performance

---

## Troubleshooting

### Build Fails
**Error**: `npm run build` fails with dependency errors

**Solution**:
```bash
# Clear node_modules and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm build
```

### Deployment Fails
**Error**: Deployment fails in Manus dashboard

**Solution**:
1. Check the deployment logs for specific errors
2. Verify all files are committed to GitHub
3. Ensure the main branch is up to date
4. Try manual deployment from the dashboard

### Site Not Updating
**Error**: Changes don't appear on live site after deployment

**Solution**:
1. Clear browser cache (Ctrl+Shift+Delete)
2. Hard refresh the page (Ctrl+F5)
3. Wait 5 minutes for CDN cache to clear
4. Check that deployment completed successfully

### Form Not Working
**Error**: Quote form doesn't submit

**Solution**:
1. Check browser console for JavaScript errors
2. Verify form validation is working
3. Check that all form fields are properly filled
4. Verify backend API endpoint is configured

---

## Rollback Instructions

If you need to revert to a previous version:

### Using Git
```bash
# View commit history
git log --oneline

# Revert to a specific commit
git revert <commit-hash>
git push origin main

# Or reset to a previous commit (careful!)
git reset --hard <commit-hash>
git push origin main --force
```

### Using Manus Dashboard
1. Go to Deployments tab
2. Find the previous successful deployment
3. Click "Rollback" or "Redeploy"
4. Confirm the rollback

---

## Performance Optimization Tips

### Before Each Deployment
1. Run `npm run build` and check bundle sizes
2. Run Lighthouse audit
3. Test on mobile and desktop
4. Test on slow 3G network

### After Deployment
1. Monitor Core Web Vitals
2. Check for performance regressions
3. Review error logs
4. Monitor user engagement

### Ongoing Maintenance
- Update dependencies monthly
- Run security audits quarterly
- Review analytics monthly
- Optimize images as needed

---

## Environment Variables

If you need to set environment variables:

### In Manus Dashboard
1. Go to Project Settings
2. Find Environment Variables section
3. Add your variables (e.g., API keys, analytics IDs)
4. Redeploy the project

### Example Variables
```
VITE_API_URL=https://api.jetblackpainting.manus.space
VITE_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
VITE_GOOGLE_MAPS_API_KEY=your_api_key_here
```

---

## Continuous Integration/Deployment (CI/CD)

### GitHub Actions (Optional)
You can set up GitHub Actions to automatically run tests and deploy:

```yaml
name: Deploy to Manus

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - run: npm run check
      # Add deployment step here
```

---

## Support & Help

### Common Issues
- [Manus Documentation](https://docs.manus.im)
- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)

### Getting Help
1. Check the error logs in Manus dashboard
2. Review this deployment guide
3. Check the PERFORMANCE_OPTIMIZATIONS.md guide
4. Contact Manus support

---

## Deployment Checklist

### Before Deployment
- [ ] All changes committed to GitHub
- [ ] `npm run build` succeeds
- [ ] `npm run check` passes (TypeScript check)
- [ ] Lighthouse audit score 90+
- [ ] Tested on mobile and desktop
- [ ] All links verified
- [ ] Form submission tested
- [ ] Images optimized

### After Deployment
- [ ] Live site loads correctly
- [ ] All sections visible
- [ ] Quote form works
- [ ] Links functional
- [ ] Mobile responsive
- [ ] Performance acceptable
- [ ] SEO tags present
- [ ] Analytics tracking

### Post-Launch Monitoring
- [ ] Monitor Core Web Vitals
- [ ] Track form submissions
- [ ] Monitor error logs
- [ ] Review analytics
- [ ] Check search rankings
- [ ] Monitor user feedback

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2024-04-08 | Initial deployment with premium services, quote form, SEO optimization, and performance improvements |

---

**Last Updated**: April 8, 2024
**Maintained By**: Development Team
