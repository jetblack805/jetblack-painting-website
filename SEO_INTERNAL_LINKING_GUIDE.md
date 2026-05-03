# SEO Internal Linking & Image Optimization Guide

## Overview
This guide outlines the internal linking strategy and image optimization best practices for the Jetblack Painting website to improve SEO performance and user navigation.

## 1. Internal Linking Strategy

### Primary Navigation Links
All main navigation items should link to their respective pages:
- Home → `/`
- Services → Service category pages
- Interior Painting → `/services/interior-painting`
- Exterior Painting → `/services/exterior-painting`
- Roof Painting → `/services/roof-painting`
- Blog → `/blog`
- FAQ → `/faq`
- Contact → Contact form section

### Location Page Linking
Location pages should link to:
- Home page
- Related location pages (nearby suburbs)
- Service pages (Interior, Exterior, Commercial, Roof)
- Blog posts about that area
- Contact/Quote form

Example linking structure for Brighton Painters page:
```
Brighton Painters
├── Home
├── Related Locations (Mordialloc, Mentone, Sandringham)
├── Services (Interior, Exterior, Commercial, Roof)
├── Blog Posts (Brighton-specific content)
└── Contact/Quote Form
```

### Service Page Linking
Each service page should include:
- Links to location pages where that service is offered
- Links to related service pages
- Links to relevant blog posts
- Internal links to FAQ section
- Call-to-action buttons linking to contact/quote form

### Blog Post Linking
Each blog post should include:
- Links to related service pages (3-5 links)
- Links to location pages mentioned in the post
- Links to other relevant blog posts
- Internal links to FAQ section
- Call-to-action buttons

### Link Anchor Text Best Practices
Use descriptive anchor text that includes relevant keywords:
- ✅ Good: "Professional interior painting services in Melbourne"
- ❌ Bad: "Click here" or "Read more"
- ✅ Good: "Roof painting specialists for Hawthorn homes"
- ❌ Bad: "Our other services"

## 2. Image Optimization & Alt Text

### Image Naming Convention
All images should follow this semantic naming pattern:
```
[service]-[location]-[type]-[number].[format]
```

Examples:
- `interior-painting-brighton-before-001.jpg`
- `exterior-painting-keysborough-after-002.jpg`
- `roof-painting-toorak-transformation-001.jpg`
- `commercial-painting-melbourne-cbd-001.jpg`
- `kitchen-cabinet-resurfacing-malvern-001.jpg`

### Alt Text Guidelines
Every image must have descriptive, keyword-rich alt text:

**Format**: `[Service] [Type] - [Location] - [Description]`

**Examples**:
- `Interior Painting Before - Brighton - Modern living room transformation with fresh white walls`
- `Exterior Painting After - Keysborough - Two-story house exterior repaint with grey weatherboard finish`
- `Roof Painting Project - Toorak - Victorian house roof painting with protective coating`
- `Commercial Painting - Melbourne CBD - Large-scale commercial building facade painting`
- `Kitchen Cabinet Resurfacing - Malvern - Custom kitchen cabinet refinishing with 2-pack finish`

**Alt Text Best Practices**:
- Include the service type (Interior Painting, Exterior Painting, etc.)
- Include the location (suburb name)
- Include descriptive details about the project
- Keep under 125 characters when possible
- Avoid keyword stuffing
- Make it descriptive for screen readers

### Image Format & Compression
- **Format**: Use WebP with PNG/JPG fallback
- **Compression**: Optimize all images to reduce file size
- **Responsive**: Provide multiple sizes for different devices
- **Lazy Loading**: Implement lazy loading for off-screen images

### Portfolio Image Alt Text Examples

**Before/After Images**:
- `Interior Painting Before - Mentone - Dated living room with worn walls before professional painting`
- `Interior Painting After - Mentone - Bright living room with fresh neutral paint and modern finish`

**Exterior Projects**:
- `Exterior House Painting - Sandringham - Two-story weatherboard home with new grey exterior paint`
- `Exterior Transformation - Hawthorn - Victorian home exterior repaint with heritage-appropriate colors`

**Commercial Projects**:
- `Commercial Painting - Melbourne - Large office building facade painting with professional finish`
- `Commercial Epoxy Floor - Melbourne CBD - Warehouse floor epoxy coating application`

**Roof Painting**:
- `Roof Painting Before - Toorak - Aged roof with weathered coating before professional restoration`
- `Roof Painting After - Toorak - Restored roof with protective coating and vibrant finish`

## 3. Internal Link Placement Strategy

### Homepage
- Link to top 3-5 location pages
- Link to main service pages
- Link to latest blog posts
- Link to FAQ section
- Link to portfolio/gallery

### Service Pages
- Link to 3-5 relevant location pages
- Link to related service pages
- Link to 2-3 relevant blog posts
- Link to FAQ section
- Link to contact/quote form

### Location Pages
- Link to all service pages available in that location
- Link to 2-3 related location pages
- Link to 1-2 relevant blog posts
- Link to contact/quote form

### Blog Posts
- Link to 3-5 relevant service pages
- Link to 2-3 relevant location pages
- Link to FAQ section
- Link to related blog posts
- Link to contact/quote form

## 4. Link Metrics & Monitoring

### Track These Metrics
- **Internal Links Per Page**: Aim for 3-7 internal links per page
- **Link Equity Distribution**: Ensure important pages receive more internal links
- **Broken Links**: Regularly check for and fix broken internal links
- **Anchor Text Diversity**: Use varied anchor text for different link targets

### Tools to Use
- Google Search Console: Monitor internal linking
- Screaming Frog: Crawl site for link structure
- Ahrefs: Analyze internal link distribution
- SEMrush: Track link equity flow

## 5. Implementation Checklist

### Immediate Actions
- [ ] Review all page content for internal linking opportunities
- [ ] Add 3-5 internal links to each main page
- [ ] Update all image alt text with semantic descriptions
- [ ] Rename all portfolio images with semantic naming convention
- [ ] Add internal links to blog posts

### Short-term (This Month)
- [ ] Create internal linking map for all pages
- [ ] Implement breadcrumb navigation
- [ ] Add related posts/pages sections
- [ ] Optimize anchor text across all pages
- [ ] Test all internal links for functionality

### Long-term (This Quarter)
- [ ] Monitor internal link performance
- [ ] Analyze user navigation patterns
- [ ] Optimize link placement based on user behavior
- [ ] Expand internal linking as new content is added
- [ ] Regularly audit and update internal links

## 6. Internal Linking Examples

### Homepage to Service Pages
```html
<a href="/services/interior-painting">Professional Interior Painting Services</a>
<a href="/services/exterior-painting">Expert Exterior Painting Solutions</a>
<a href="/services/roof-painting">Premium Roof Painting Specialists</a>
```

### Service Page to Location Pages
```html
<a href="/painter-brighton">Interior Painting in Brighton</a>
<a href="/painter-keysborough">Interior Painting in Keysborough</a>
<a href="/painter-toorak">Interior Painting in Toorak</a>
```

### Blog Post to Service Pages
```html
Learn more about our <a href="/services/interior-painting">interior painting services</a> 
or contact us for a <a href="#contact">free quote</a>.
```

### Image with Alt Text
```html
<img src="/images/interior-painting-brighton-before-001.jpg" 
     alt="Interior Painting Before - Brighton - Modern living room transformation with fresh white walls" 
     loading="lazy" />
```

## 7. Monitoring & Optimization

### Monthly Review
- Check for broken internal links
- Analyze click-through rates on internal links
- Review anchor text effectiveness
- Update outdated internal links

### Quarterly Audit
- Full site crawl for internal linking structure
- Analyze link equity distribution
- Identify linking opportunities
- Update internal linking strategy

### Annual Review
- Comprehensive SEO audit of internal linking
- Competitor analysis of internal linking strategy
- Plan for new content and linking opportunities
- Update this guide based on performance data

---

**Last Updated**: May 3, 2026
**Next Review**: June 3, 2026
**Responsible**: Jetblack Painting SEO Team
