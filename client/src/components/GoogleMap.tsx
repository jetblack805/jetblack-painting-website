export default function GoogleMap() {
  return (
    <section className="py-16 bg-[#F5F5F0]">
      <div className="container max-w-6xl">
        <h2 className="text-3xl font-bold text-[#0D0D0D] text-center mb-4">Find Us on Google Maps</h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Jetblack Painting is based in Keysborough, Melbourne and services all suburbs across the greater Melbourne area. Visit us or call for a free quote.
        </p>
        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3147.5!2d145.1312!3d-37.9722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDU4JzIwLjAiUyAxNDXCsDA3JzUyLjMiRQ!5e0!3m2!1sen!2sau!4v1"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Jetblack Painting Melbourne - Keysborough Location"
          ></iframe>
        </div>
        <div className="mt-6 text-center">
          <p className="text-gray-700 font-medium">
            <strong>Jetblack Painting</strong> | 31 Northumberland Dr, Keysborough VIC 3173
          </p>
          <p className="text-gray-600 mt-1">
            <a href="tel:0432077782" className="text-[#00AACC] hover:underline font-bold">0432 077 782</a> | 
            <a href="mailto:jimmy.jetblackpainting@gmail.com" className="text-[#00AACC] hover:underline ml-2">jimmy.jetblackpainting@gmail.com</a>
          </p>
          <p className="text-gray-500 text-sm mt-2">Mon-Fri: 7am-5pm | Sat: 8am-2pm | Sun: Closed</p>
        </div>
      </div>
    </section>
  );
}
