import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Best House Painting Colors for Melbourne Homes in 2026",
      excerpt: "Discover the trending paint colors that are transforming Melbourne homes. From warm neutrals to bold statement colors, find the perfect palette for your property.",
      date: "April 18, 2026",
      author: "Jetblack Painting",
      category: "Design Tips",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Interior Painting Trends 2026: What's Hot in Melbourne",
      excerpt: "Stay ahead of the curve with the latest interior painting trends. Learn about feature walls, accent colors, and finishes that are dominating Melbourne homes.",
      date: "April 15, 2026",
      author: "Jetblack Painting",
      category: "Trends",
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "How to Prepare Your Home for Professional Painting",
      excerpt: "Proper preparation is key to a successful painting project. Learn our expert tips for preparing your home to ensure the best results.",
      date: "April 12, 2026",
      author: "Jetblack Painting",
      category: "Guide",
      readTime: "7 min read"
    },
    {
      id: 4,
      title: "Commercial Painting: Minimizing Business Disruption",
      excerpt: "Discover how to schedule commercial painting projects to minimize impact on your business operations. Expert strategies from Melbourne's top painters.",
      date: "April 10, 2026",
      author: "Jetblack Painting",
      category: "Commercial",
      readTime: "6 min read"
    },
    {
      id: 5,
      title: "Roof Painting Guide: Protection & Aesthetics",
      excerpt: "Learn everything about roof painting - from the benefits of roof protection to choosing the right colors for your Melbourne home.",
      date: "April 8, 2026",
      author: "Jetblack Painting",
      category: "Roof Painting",
      readTime: "8 min read"
    },
    {
      id: 6,
      title: "Exterior Paint Protection: Melbourne's Weather Challenges",
      excerpt: "Melbourne's unpredictable weather requires special exterior paint protection. Learn how to protect your home's exterior from UV, moisture, and temperature changes.",
      date: "April 5, 2026",
      author: "Jetblack Painting",
      category: "Exterior",
      readTime: "7 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#0a0a0a] to-[#1a1a1a] text-white py-16">
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
            <p className="text-xl text-gray-300">
              Expert advice on interior, exterior, and commercial painting for Melbourne homes and businesses
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
                className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <span className="bg-[#00AACC] text-white px-3 py-1 rounded-full text-xs font-bold">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-[#0D0D0D] mb-3 hover:text-[#00AACC] transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                    </div>
                    <button className="text-[#00AACC] hover:text-[#0099BB] font-bold flex items-center gap-2 transition-colors">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </button>
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
            className="bg-gradient-to-r from-[#0a0a0a] to-[#1a1a1a] text-white p-12 rounded-lg text-center mt-16"
          >
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Property?</h3>
            <p className="text-xl mb-6 text-gray-300">
              Get expert painting advice and a free quote from Melbourne's trusted painters.
            </p>
            <a
              href="tel:0432077782"
              className="inline-flex items-center gap-2 bg-[#00AACC] hover:bg-[#0099BB] text-white px-8 py-4 rounded font-bold text-lg transition-all"
            >
              Call 0432 077 782
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
