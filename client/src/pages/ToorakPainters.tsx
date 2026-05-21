import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ToorakPainters() {
  return (
    <>
      <Helmet>
        <title>Painters Toorak | Professional House Painting Services | Jetblack</title>
        <meta name="description" content="Expert house painters in Toorak, Melbourne. Interior, exterior & commercial painting services. 5-star rated. Free quote today!" />
        <meta name="keywords" content="painters Toorak, house painting Toorak, exterior painters Toorak, interior painters Toorak" />
        <meta property="og:title" content="Painters Toorak | Professional House Painting Services" />
        <meta property="og:description" content="Expert house painters in Toorak, Melbourne. Interior, exterior & commercial painting services." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://jetblackpainting.com/painters-toorak" />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="bg-white shadow-md sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Jetblack Painting
            </Link>
            <div className="flex gap-6">
              <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
              <Link href="/" className="text-gray-700 hover:text-blue-600">Services</Link>
              <a href="tel:0432077782" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Call Now
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Professional Painters in Toorak</h1>
            <p className="text-xl mb-6">Melbourne's trusted house painting specialists serving Toorak and surrounding areas</p>
            <div className="flex gap-4">
              <a href="tel:0432077782" className="bg-white text-blue-600 px-6 py-3 rounded font-bold hover:bg-gray-100">
                Call 0432 077 782
              </a>
              <button className="border-2 border-white text-white px-6 py-3 rounded font-bold hover:bg-white hover:text-blue-600">
                Get Free Quote
              </button>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Why Choose Jetblack Painting for Toorak?</h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>13+ years of professional painting experience in Toorak</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>5-star Google rating from satisfied Toorak customers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Fully licensed and insured for your peace of mind</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Expert in high-end residential and commercial projects</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Free quotes and no obligation consultations</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Get Your Free Quote</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border rounded" />
                <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border rounded" />
                <input type="tel" placeholder="Phone Number" className="w-full px-4 py-2 border rounded" />
                <textarea placeholder="Tell us about your project" rows={4} className="w-full px-4 py-2 border rounded"></textarea>
                <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded font-bold hover:bg-blue-700">
                  Request Quote
                </button>
              </form>
            </div>
          </div>

          {/* Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Our Services in Toorak</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Interior Painting</h3>
                <p className="text-gray-700">Professional interior painting for Toorak homes. Fresh walls, ceilings, and trims that transform your living spaces.</p>
              </div>
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Exterior Painting</h3>
                <p className="text-gray-700">Expert exterior painting services. Boost your curb appeal with professional repaints built to withstand Melbourne weather.</p>
              </div>
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Commercial Painting</h3>
                <p className="text-gray-700">Commercial painting for offices, retail, and warehouses in Toorak. Minimal disruption, professional results.</p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gray-100 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Contact Jetblack Painting</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-center gap-4">
                <Phone className="text-blue-600" size={32} />
                <div>
                  <p className="font-bold text-gray-800">Call Us</p>
                  <a href="tel:0432077782" className="text-blue-600 hover:underline">0432 077 782</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-blue-600" size={32} />
                <div>
                  <p className="font-bold text-gray-800">Email</p>
                  <a href="mailto:jimmy.jetblackpainting@gmail.com" className="text-blue-600 hover:underline">jimmy.jetblackpainting@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-blue-600" size={32} />
                <div>
                  <p className="font-bold text-gray-800">Location</p>
                  <p className="text-gray-700">Mordialloc, VIC</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p>&copy; 2024 Jetblack Painting. All rights reserved.</p>
            <p className="text-gray-400 mt-2">Professional house painters serving Toorak and Melbourne suburbs</p>
          </div>
        </footer>
      </div>
    </>
  );
}
