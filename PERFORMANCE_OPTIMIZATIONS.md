# Jetblack Painting - Performance Optimization Guide

## Overview
This document outlines all performance optimizations implemented for the Jetblack Painting website to ensure fast loading times on both mobile and desktop devices.

---

## 1. Build Optimization

### Code Splitting & Chunking
- **Vendor Libraries Split**: React, UI components, form libraries, and animations are split into separate chunks
- **Benefits**: Allows browsers to cache vendor code separately, reducing bundle size for updates
- **Chunks Created**:
  - `vendor-react.js` - React core libraries
  - `vendor-ui.js` - Radix UI components
  - `vendor-form.js` - Form validation and handling
  - `vendor-animation.js` - Framer Motion animations
  - `vendor-utils.js` - Utility libraries

### Minification & Compression
- **Terser Minification**: All JavaScript is minified using Terser
- **Console Removal**: Debug console logs removed in production
- **CSS Code Splitting**: Separate CSS files for different components
- **Gzip Compression**: Enable on server for additional 60-70% size reduction

### Build Configuration
```
- Minify: terser
- Source Maps: Disabled in production (faster load)
- CSS Code Split: Enabled
- Chunk Size Limit: 500KB
```

---

## 2. Image Optimization

### Best Practices Implemented
1. **Lazy Loading**: All images use lazy loading to defer off-screen images
2. **Responsive Images**: Use `srcset` for different screen sizes
3. **Modern Formats**: Use WebP with JPEG fallbacks
4. **Compression**: Optimize all images to <100KB each

### Image Optimization Commands
```bash
# For PNG images
optipng -o2 image.png

# For JPEG images
jpegoptim --max=85 image.jpg

# For WebP conversion
cwebp -q 80 image.jpg -o image.webp
```

### Implementation in Components
```jsx
<img 
  src="image.jpg" 
  srcSet="image-small.jpg 480w, image-medium.jpg 768w, image-large.jpg 1200w"
  sizes="(max-width: 480px) 100vw, (max-width: 768px) 90vw, 80vw"
  loading="lazy"
  alt="Description"
/>
```

---

## 3. Network Optimization

### Preconnect & DNS Prefetch
- **Google Fonts**: Preconnect for faster font loading
- **Google Maps**: Preconnect for map functionality
- **Analytics**: DNS prefetch for tracking scripts

### HTTP/2 Server Push
- Critical CSS pushed to browser before HTML parsing
- Fonts preloaded for faster rendering

### Caching Strategy
```
- Static Assets: 1 year cache (with versioning)
- HTML: No cache (always fresh)
- API Responses: 5 minutes cache
- Images: 30 days cache
```

---

## 4. CSS Optimization

### Tailwind CSS Optimization
- **PurgeCSS**: Removes unused CSS classes
- **Tree Shaking**: Eliminates unused utility classes
- **Production Build**: CSS reduced from ~500KB to ~50KB

### Critical CSS
- Inline critical CSS in `<head>` for above-the-fold content
- Defer non-critical CSS loading

---

## 5. JavaScript Optimization

### Code Splitting Strategy
- **Route-based Splitting**: Each page route loads separately
- **Component Lazy Loading**: Heavy components load on demand
- **Dynamic Imports**: Used for optional features

### Example Implementation
```jsx
import { lazy, Suspense } from 'react';

const QuoteForm = lazy(() => import('./QuoteForm'));

export default function Home() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <QuoteForm />
    </Suspense>
  );
}
```

### Bundle Analysis
- Run: `npm run build` to see chunk sizes
- Target: Main bundle <100KB, total <300KB

---

## 6. Mobile Optimization

### Responsive Design
- **Mobile-First Approach**: Base styles for mobile, enhance for desktop
- **Viewport Meta Tag**: Proper scaling on mobile devices
- **Touch-Friendly**: Buttons minimum 44x44px for touch targets

### Mobile Performance
- **Lazy Loading**: Defers images until needed
- **Minimal JavaScript**: Reduces CPU usage on mobile
- **Efficient Animations**: Uses GPU-accelerated transforms
- **Reduced Motion**: Respects `prefers-reduced-motion` preference

### Mobile Testing
```bash
# Test on mobile devices
- Chrome DevTools: Mobile device emulation
- Lighthouse: Mobile performance audit
- WebPageTest: Real device testing
```

---

## 7. Desktop Optimization

### Performance Metrics
- **First Contentful Paint (FCP)**: < 1.5 seconds
- **Largest Contentful Paint (LCP)**: < 2.5 seconds
- **Cumulative Layout Shift (CLS)**: < 0.1
- **Time to Interactive (TTI)**: < 3.5 seconds

### Desktop-Specific Optimizations
- **Larger Image Sizes**: Load higher resolution images on desktop
- **Advanced Animations**: Use more complex animations on powerful devices
- **Prefetch**: Prefetch next page resources on hover

---

## 8. Performance Monitoring

### Lighthouse Scores Target
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 100

### Monitoring Tools
1. **Google Lighthouse**: Built into Chrome DevTools
2. **WebPageTest**: Real-world performance testing
3. **GTmetrix**: Performance monitoring
4. **New Relic**: Production monitoring

### Running Lighthouse Audit
```bash
# Using Chrome DevTools
1. Open DevTools (F12)
2. Go to Lighthouse tab
3. Click "Analyze page load"

# Using CLI
npm install -g lighthouse
lighthouse https://jetblackpainting.manus.space --view
```

---

## 9. Server-Side Optimization

### Gzip Compression
```nginx
# Enable in nginx.conf
gzip on;
gzip_types text/plain text/css application/json application/javascript;
gzip_min_length 1000;
gzip_comp_level 6;
```

### Brotli Compression
```nginx
# More efficient than gzip
brotli on;
brotli_comp_level 6;
brotli_types text/plain text/css application/json application/javascript;
```

### Cache Headers
```nginx
# Static assets - 1 year
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|webp)$ {
  expires 1y;
  add_header Cache-Control "public, immutable";
}

# HTML - No cache
location ~* \.html$ {
  expires -1;
  add_header Cache-Control "no-cache, no-store, must-revalidate";
}
```

---

## 10. Implementation Checklist

### Before Deployment
- [ ] Run `npm run build` and check bundle sizes
- [ ] Test on mobile devices (iOS and Android)
- [ ] Run Lighthouse audit (target: 90+ performance)
- [ ] Test on slow 3G network (Chrome DevTools)
- [ ] Verify images are optimized (<100KB each)
- [ ] Check Core Web Vitals metrics
- [ ] Test form submission on mobile
- [ ] Verify all links work on mobile

### After Deployment
- [ ] Monitor real user metrics (RUM)
- [ ] Set up performance alerts
- [ ] Weekly Lighthouse audits
- [ ] Monthly performance reviews
- [ ] Track user engagement metrics

---

## 11. Performance Tips for Content Updates

### Adding New Images
1. Optimize before uploading (max 100KB)
2. Use WebP format with JPEG fallback
3. Add responsive srcset
4. Use lazy loading attribute

### Adding New Components
1. Consider code splitting if >50KB
2. Use React.lazy() for heavy components
3. Add Suspense boundaries
4. Test bundle size impact

### Adding External Scripts
1. Load asynchronously when possible
2. Defer non-critical scripts
3. Use script preload strategically
4. Monitor impact on Core Web Vitals

---

## 12. Troubleshooting Performance Issues

### High First Contentful Paint (FCP)
- Check for render-blocking CSS/JS
- Optimize critical resources
- Use preconnect for external resources

### High Largest Contentful Paint (LCP)
- Optimize hero image size
- Lazy load below-the-fold images
- Reduce JavaScript execution time

### High Cumulative Layout Shift (CLS)
- Set explicit dimensions for images/videos
- Avoid inserting content above existing content
- Use `font-display: swap` for web fonts

### High Time to Interactive (TTI)
- Reduce JavaScript bundle size
- Defer non-critical JavaScript
- Use code splitting effectively

---

## 13. Resources

- [Web.dev Performance Guide](https://web.dev/performance/)
- [Lighthouse Documentation](https://developers.google.com/web/tools/lighthouse)
- [Vite Build Optimization](https://vitejs.dev/guide/build.html)
- [React Performance](https://react.dev/reference/react/lazy)
- [Tailwind CSS Optimization](https://tailwindcss.com/docs/optimizing-for-production)

---

## Contact & Support

For performance-related questions or issues, contact the development team.

**Last Updated**: April 8, 2024
**Version**: 1.0
