import siteConfig from "@/site-config.json";

export default function GoogleMap() {
  return (
    <section className="py-16 bg-[#060607]">
      <div className="container max-w-6xl">
        <h2 className="text-3xl text-[#EDEDEF] text-center mb-4">Find Us on Google Maps</h2>
        <p className="text-center text-[#A3A3A8] mb-8 max-w-2xl mx-auto">
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
          <p className="text-[#B4B4B8] font-medium">
            <strong>Jetblack Painting</strong> | Mordialloc VIC 3195
          </p>
          <p className="text-[#A3A3A8] mt-1">
                      <a href={`tel:${siteConfig.phoneHref}`} className="text-[#D0A050] hover:underline font-bold">{siteConfig.phoneDisplay}</a> |
                      <a href={`mailto:${siteConfig.email}`} className="text-[#D0A050] hover:underline ml-2">{siteConfig.email}</a>
          </p>
          <p className="text-[#A3A3A8] text-sm mt-2">Mon-Fri: 7am-5pm | Sat-Sun: 9am-5pm</p>
        </div>
      </div>
    </section>
  );
}
