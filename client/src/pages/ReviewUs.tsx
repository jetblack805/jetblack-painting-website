import { Star, ExternalLink, Copy, CheckCircle } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

export default function ReviewUs() {
  const [copied, setCopied] = useState(false);
  
  // Replace this with your actual Google review link from GBP
  const googleReviewLink = "https://www.google.com/maps/place/Jetblack+Painting";
  
  const handleCopy = () => {
    navigator.clipboard.writeText(googleReviewLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Leave a Review | Jetblack Painting Melbourne"
        description="Leave a Google review for Jetblack Painting. Your feedback helps Melbourne homeowners find trusted interior, exterior and commercial painters."
        canonical="https://jetblackpainting.com/review-us/"
      />
      <Navbar />
      
      <section className="pt-32 pb-16 bg-[#0D0D0D]">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Leave Us a Review
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Your feedback helps us grow and helps other Melbourne homeowners find quality painters they can trust.
            </p>
          </div>

          {/* Review CTA Card */}
          <div className="bg-[#1a1a1a] rounded-2xl p-8 md:p-12 border border-gray-800 text-center mb-12">
            <div className="flex justify-center mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-10 h-10 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Rate Us on Google
            </h2>
            <p className="text-gray-300 mb-8 max-w-lg mx-auto">
              If you've had a great experience with Jetblack Painting, we'd love to hear about it! 
              Your Google review helps other Melbourne homeowners find reliable painters.
            </p>
            <a
              href={googleReviewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A227] text-[#0D0D0D] font-bold text-lg rounded-lg hover:bg-[#B8933D] transition-colors"
            >
              <Star className="w-5 h-5" />
              Leave a Google Review
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>

          {/* How to Leave a Review */}
          <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-gray-800 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">How to Leave a Review</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-[#C9A227] text-[#0D0D0D] rounded-full flex items-center justify-center font-bold">1</span>
                <div>
                  <h3 className="text-white font-semibold">Click the button above</h3>
                  <p className="text-gray-400">This will take you directly to our Google Business Profile review page.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-[#C9A227] text-[#0D0D0D] rounded-full flex items-center justify-center font-bold">2</span>
                <div>
                  <h3 className="text-white font-semibold">Select your star rating</h3>
                  <p className="text-gray-400">Tap the stars to rate your experience (1-5 stars).</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-[#C9A227] text-[#0D0D0D] rounded-full flex items-center justify-center font-bold">3</span>
                <div>
                  <h3 className="text-white font-semibold">Write a few words about your experience</h3>
                  <p className="text-gray-400">Mention the service you received (e.g., interior painting, exterior painting), your suburb, and what you liked most.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-[#C9A227] text-[#0D0D0D] rounded-full flex items-center justify-center font-bold">4</span>
                <div>
                  <h3 className="text-white font-semibold">Submit your review</h3>
                  <p className="text-gray-400">Click "Post" and you're done! Thank you for supporting a local Melbourne business.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Share Review Link */}
          <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-gray-800 mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Share Our Review Link</h2>
            <p className="text-gray-300 mb-4">
              Know someone who's used our services? Share this link so they can leave a review too:
            </p>
            <div className="flex items-center gap-2 bg-[#0D0D0D] rounded-lg p-3">
              <input
                type="text"
                readOnly
                value={googleReviewLink}
                className="flex-1 bg-transparent text-gray-300 text-sm outline-none"
              />
              <button
                onClick={handleCopy}
                className="flex items-center gap-1 px-4 py-2 bg-[#C9A227] text-[#0D0D0D] rounded-md hover:bg-[#B8933D] transition-colors text-sm font-medium"
              >
                {copied ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy Link
                  </>
                )}
              </button>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
