/*
 * Design: Bold Contrast — Reviews on light warm background
 * Google reviews displayed in a card grid with star ratings
 */
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Danni F",
    rating: 5,
    text: "Jetblack Painting was great to deal with from start to finish. The work was completed to a very high standard, and the results completely transformed my space — it now looks brand new. Jimmy and his team were clean, tidy, professional, and easy to work with.",
    source: "Google",
    date: "Jan 2026",
  },
  {
    name: "Dorothy",
    rating: 5,
    text: "Huge shoutout to Jimmy and his team at JetBlack Painting! They just finished a project for us and the results are stunning. Jimmy was a total pro from start to finish — he listened to exactly what we wanted and offered great advice on colours and finishes.",
    source: "Google",
    date: "Feb 2026",
  },
  {
    name: "Penny D",
    rating: 5,
    text: "Jetblack Painting gave our home a complete exterior and interior facelift, and the results are incredible. They handled everything from the weatherboards and render to a full roof restoration and even refreshed our concrete driveway.",
    source: "Google",
    date: "Feb 2026",
  },
  {
    name: "Zoe",
    rating: 5,
    text: "Professional Mould Remediation and Flawless Painting. I recently hired Jetblack Painting to tackle a severe mould issue on my bathroom walls and ceiling, and I couldn't be more impressed. The damage was extensive but the results were flawless.",
    source: "Google",
    date: "Feb 2026",
  },
  {
    name: "Helen",
    rating: 5,
    text: "Jimmy from Jet Black Painting has completely transformed our old home, inside and out. It feels like a brand new house thanks to Jimmy's top level painting skills and attention to detail. Jimmy was also very friendly and professional.",
    source: "Oneflare",
    date: "Jul 2021",
  },
  {
    name: "Tony",
    rating: 5,
    text: "I just moved into my new house and the previous painter had done a very poor job. I called Jet Black and I'm over the moon with the job Jimmy has done! Very polite and professional. Thank you JetBlack!",
    source: "Oneflare",
    date: "Jul 2021",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-[#F5F5F0]">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-[#00AACC] font-semibold text-sm tracking-widest uppercase mb-3 block">
            Customer Reviews
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D0D0D] leading-tight mb-5"
            style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
          >
            What Our Clients Say
          </h2>
          {/* Google Rating Badge */}
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-sm mt-4">
            <div className="flex items-center gap-1">
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-2xl font-bold text-[#0D0D0D]" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>5.0</span>
            </div>
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-[#666] text-sm">on Google</span>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 relative"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-[#00AACC]/15 absolute top-4 right-4" />

              {/* Stars */}
              <StarRating count={review.rating} />

              {/* Review text */}
              <p className="text-[#444] text-sm leading-relaxed mt-4 mb-5">
                "{review.text}"
              </p>

              {/* Reviewer info */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#0D0D0D] flex items-center justify-center text-white text-sm font-bold">
                    {review.name[0]}
                  </div>
                  <div>
                    <div className="text-[#0D0D0D] font-semibold text-sm">{review.name}</div>
                    <div className="text-[#999] text-xs">{review.date}</div>
                  </div>
                </div>
                <span className="text-xs text-[#999] bg-gray-50 px-2 py-1 rounded">
                  {review.source}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
