export default function GoogleMap() {
  return (
    <section className="py-16 bg-[#F5F5F0]">
      <div className="container max-w-6xl">
        <h2 className="text-3xl font-bold text-[#0D0D0D] text-center mb-4">Find Us on Google Maps</h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Jetblack Painting is based in Mordialloc, Melbourne and services all suburbs across the greater Melbourne area. Call for a free quote.
        </p>
        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://maps.google.com/maps?q=Mordialloc+VIC+3195+Australia&t=&z=14&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Jetblack Painting Melbourne - Mordialloc Location"
          ></iframe>
        </div>
        <div className="mt-6 text-center">
          <p className="text-gray-700 font-medium">
            <strong>Jetblack Painting</strong> | Mordialloc VIC 3195
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
