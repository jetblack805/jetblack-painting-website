import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { breadcrumbSchema } from "@/lib/breadcrumbSchema";

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Best Paint Colours for Melbourne Homes in 2026",
      excerpt: "Discover the trending paint colours that are transforming Melbourne homes. From warm neutrals to bold statement colours, find the perfect palette for your property.",
      date: "July 2026",
      category: "Design Tips",
      readTime: "6 min read",
      slug: "/blog/best-paint-colours-melbourne-2025"
    },
    {
      id: 2,
      title: "How Much Does House Painting Cost in Melbourne? (2026 Price Guide)",
      excerpt: "Get a comprehensive breakdown of painting costs across Melbourne. Interior, exterior, and commercial pricing with real examples from our recent projects.",
      date: "July 2026",
      category: "Price Guide",
      readTime: "8 min read",
      slug: "/blog/house-painting-cost-melbourne"
    },
    {
      id: 3,
      title: "How to Prepare Your Melbourne Home for Professional Painting",
      excerpt: "Proper preparation is key to a successful painting project. Learn our expert tips for preparing your home to ensure the best results.",
      date: "July 2026",
      category: "Guide",
      readTime: "5 min read",
      slug: "/blog/prepare-home-for-painting"
    },
    {
      id: 4,
      title: "Kitchen Cabinet Resurfacing vs Replacement: What Melbourne Homeowners Need to Know",
      excerpt: "Transform your kitchen for a fraction of the cost of a full renovation. Learn about 2-pack cabinet resurfacing and when it's the right choice.",
      date: "July 2026",
      category: "Kitchen",
      readTime: "7 min read",
      slug: "/blog/kitchen-cabinet-resurfacing-vs-replacement"
    },
    {
      id: 5,
      title: "Mould Remediation & Painting Guide for Melbourne Homes",
      excerpt: "How to correctly identify, treat and paint over mould in Melbourne homes. Covers bathroom mould, external render, anti-mould primers and which paints to use by surface type.",
      date: "July 2026",
      category: "Guide",
      readTime: "7 min read",
      slug: "/blog/mould-remediation-painting-melbourne"
    },
    {
      id: 6,
      title: "How to Choose a Painter in Melbourne: A Homeowner's Guide",
      excerpt: "What to check before hiring a Melbourne painter — insurance, written quotes, guarantees, reviews and red flags to avoid.",
      date: "July 2026",
      category: "Guide",
      readTime: "6 min read",
      slug: "/blog/how-to-choose-a-painter-melbourne"
    },
    {
      id: 7,
      title: "How to Paint a Weatherboard House: A Melbourne Guide",
      excerpt: "Preparation, priming bare timber, caulking and the right exterior paints — how weatherboard is painted so it lasts 7-10 years, not one season.",
      date: "July 2026",
      category: "Guide",
      readTime: "8 min read",
      slug: "/blog/how-to-paint-a-weatherboard-house-melbourne"
    },
    {
      id: 8,
      title: "Roof Painting Guide: Protection & Aesthetics for Melbourne Homes",
      excerpt: "Learn everything about roof painting - from the benefits of roof protection to choosing the right colours for your Melbourne home.",
      date: "July 2026",
      category: "Roof Painting",
      readTime: "8 min read",
      slug: "/services/roof-painting"
    },
    {
      id: 9,
      title: "Exterior Paint Protection: Surviving Melbourne's Weather",
      excerpt: "Melbourne's unpredictable weather requires special exterior paint protection. Learn how to protect your home's exterior from UV, moisture, and temperature changes.",
      date: "July 2026",
      category: "Exterior",
      readTime: "7 min read",
      slug: "/services/exterior-painting"
    }
  ];

  return (
    <div className="min-h-screen bg-[#131316]">
      <SEOHead
        title="Painting Tips & Guides Melbourne | Jetblack Painting Blog"
        description="Painting advice, colour guides and cost tips from Jetblack Painting. Read Melbourne-focused blog articles on interior, exterior and cabinet painting."
        canonical="https://jetblackpainting.com/blog/"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Jetblack Painting Blog",
            url: "https://jetblackpainting.com/blog/",
            inLanguage: "en-AU",
            description:
              "Painting advice, colour guides and cost tips from Jetblack Painting for Melbourne homes and businesses.",
            publisher: {
              "@type": "Organization",
              name: "Jetblack Painting",
              url: "https://jetblackpainting.com",
            },
            blogPost: posts.map((post) => ({
              "@type": "BlogPosting",
              headline: post.title,
              description: post.excerpt,
              url: `https://jetblackpainting.com${post.slug}/`,
            })),
          },
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Blog", url: "https://jetblackpainting.com/blog/" },
          ]),
        ]}
      />
      <Navbar />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-[#0a0a0a] to-[#151518] text-white pt-32 pb-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Painting Tips & Guides
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Expert advice on interior, exterior, and commercial painting for Melbourne homes and businesses. 
              Written by our team with 13+ years of experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#101013] rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-sm text-[#A3A3A8]">
                    <span className="bg-[#D0A050] text-[#0A0A0B] px-3 py-1 rounded-full text-xs font-bold">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <Link href={post.slug}>
                    <h2 className="text-xl font-bold text-[#EDEDEF] mb-3 hover:text-[#E9BE6C] transition-colors cursor-pointer">
                      {post.title}
                    </h2>
                  </Link>
                  
                  <p className="text-[#A3A3A8] mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-[#222227]">
                    <div className="flex items-center gap-4 text-sm text-[#A3A3A8]">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                    </div>
                    <Link href={post.slug} className="text-[#E9BE6C] hover:text-[#0099BB] font-bold flex items-center gap-2 transition-colors">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#0a0a0a] to-[#151518] text-white p-12 rounded-lg text-center mt-16"
          >
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Property?</h3>
            <p className="text-xl mb-6 text-gray-300">
              Get expert painting advice and a free quote from Melbourne's trusted painters.
            </p>
            <a
              href="tel:0432077782"
              className="inline-flex items-center gap-2 bg-[#D0A050] hover:bg-[#B0863C] text-[#0A0A0B] px-8 py-4 rounded font-bold text-lg transition-all"
            >
              Call 0432 077 782
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
