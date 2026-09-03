import { useEffect, useRef, useState } from "react";
import { Loader2 } from "lucide-react";

interface Suburb {
  name: string;
  lat: number;
  lng: number;
}

const suburbs: Suburb[] = [
  { name: "Mordialloc", lat: -38.0131, lng: 145.0965 },
  { name: "Mentone", lat: -37.9936, lng: 145.0738 },
  { name: "Sandringham", lat: -37.9464, lng: 145.0042 },
  { name: "Brighton", lat: -37.9303, lng: 145.0189 },
  { name: "Hampton", lat: -37.9475, lng: 145.0134 },
  { name: "Bentleigh", lat: -37.8917, lng: 145.0542 },
  { name: "Keysborough", lat: -37.9722, lng: 145.1312 },
  { name: "Toorak", lat: -37.8398, lng: 145.0296 },
  { name: "Malvern", lat: -37.8558, lng: 145.0411 },
  { name: "Camberwell", lat: -37.8286, lng: 145.0631 },
  { name: "Hawthorn", lat: -37.8226, lng: 145.0324 },
  { name: "Caulfield", lat: -37.8767, lng: 145.0653 },
  { name: "Kew", lat: -37.7956, lng: 145.0618 },
  { name: "Carlton", lat: -37.8068, lng: 144.9616 },
  { name: "Mornington Peninsula", lat: -38.3663, lng: 145.0890 },
  { name: "Bayside", lat: -37.9917, lng: 145.0408 },
  { name: "Kingston", lat: -38.0078, lng: 145.1456 },
  { name: "Greater Dandenong", lat: -37.9884, lng: 145.2128 },
  { name: "Armadale", lat: -37.8545, lng: 145.0208 },
  { name: "Berwick", lat: -38.0331, lng: 145.3526 },
  { name: "Dandenong", lat: -37.9877, lng: 145.2150 },
  { name: "Box Hill", lat: -37.8200, lng: 145.1228 },
  { name: "Doncaster", lat: -37.7853, lng: 145.1243 },
  { name: "Glen Waverley", lat: -37.8775, lng: 145.1632 },
  { name: "Moorabbin", lat: -37.9339, lng: 145.0601 },
  { name: "Stonnington", lat: -37.8558, lng: 145.0269 },
  { name: "Wheelers Hill", lat: -37.9062, lng: 145.1985 },
  { name: "Ringwood", lat: -37.8155, lng: 145.2272 },
  { name: "Croydon", lat: -37.7955, lng: 145.2821 },
  { name: "Templestowe", lat: -37.7583, lng: 145.1416 },
  { name: "Donvale", lat: -37.7913, lng: 145.1861 },
  { name: "McKinnon", lat: -37.9072, lng: 145.0477 },
  { name: "Murrumbeena", lat: -37.8966, lng: 145.0653 },
  { name: "Ormond", lat: -37.8998, lng: 145.0477 },
  { name: "Aspendale", lat: -38.0228, lng: 145.1081 },
  { name: "Parkdale", lat: -37.9939, lng: 145.0842 },
  { name: "Highett", lat: -37.9237, lng: 145.0589 },
  { name: "Cheltenham", lat: -37.9142, lng: 145.0803 },
  { name: "Elwood", lat: -37.8845, lng: 145.0008 },
  { name: "Elsternwick", lat: -37.8846, lng: 145.0158 },
  { name: "Glen Iris", lat: -37.8386, lng: 145.0450 },
  { name: "Albert Park", lat: -37.8411, lng: 144.9739 },
  { name: "South Yarra", lat: -37.8401, lng: 145.0004 },
  { name: "Prahran", lat: -37.8564, lng: 145.0003 },
  { name: "Windsor", lat: -37.8326, lng: 144.9963 },
  { name: "St Kilda", lat: -37.8644, lng: 144.9736 },
  { name: "Port Melbourne", lat: -37.8303, lng: 144.9431 },
  { name: "South Melbourne", lat: -37.8296, lng: 144.9604 },
  { name: "Fitzroy", lat: -37.7979, lng: 145.0028 },
  { name: "Collingwood", lat: -37.8146, lng: 145.0217 },
  { name: "Northcote", lat: -37.7656, lng: 145.0114 },
  { name: "Thornbury", lat: -37.7484, lng: 145.0427 },
  { name: "Brunswick", lat: -37.7568, lng: 144.9694 },
  { name: "Frankston", lat: -38.1631, lng: 145.1189 },
  { name: "Frankston South", lat: -38.1883, lng: 145.1236 },
  { name: "Carrum", lat: -38.0981, lng: 145.1041 },
  { name: "Seaford", lat: -38.1111, lng: 145.1142 },
  { name: "Bonbeach", lat: -38.0584, lng: 145.0939 },
  { name: "Edithvale", lat: -38.0416, lng: 145.0873 },
  { name: "Dromana", lat: -38.3487, lng: 144.9999 },
  { name: "Rosebud", lat: -38.3696, lng: 144.9807 },
  { name: "Sorrento", lat: -38.3532, lng: 144.9264 },
  { name: "Rye", lat: -38.3836, lng: 144.8269 },
  { name: "Mount Eliza", lat: -38.2628, lng: 145.1000 },
  { name: "Mount Martha", lat: -38.3031, lng: 145.0700 },
  { name: "Mornington", lat: -38.2284, lng: 145.0500 },
  { name: "Black Rock", lat: -37.9568, lng: 145.0447 },
  { name: "Beaumaris", lat: -37.9693, lng: 145.0611 },
  { name: "Balwyn", lat: -37.8067, lng: 145.1068 },
  { name: "Balwyn North", lat: -37.7919, lng: 145.1189 },
  { name: "Blackburn", lat: -37.8245, lng: 145.1527 },
  { name: "Oakleigh", lat: -37.8743, lng: 145.0921 },
  { name: "Clarinda", lat: -37.9469, lng: 145.0947 },
  { name: "Heatherton", lat: -37.9750, lng: 145.1192 },
  { name: "Dingley Village", lat: -38.0139, lng: 145.1342 },
  { name: "Patterson Lakes", lat: -38.0633, lng: 145.1528 },
  { name: "Narre Warren", lat: -38.0307, lng: 145.2476 },
  { name: "Endeavour Hills", lat: -37.9950, lng: 145.2222 },
  { name: "Cranbourne", lat: -38.1167, lng: 145.2703 },
  { name: "Clyde", lat: -38.0950, lng: 145.2900 },
  { name: "Clyde North", lat: -38.1678, lng: 145.3111 },
  { name: "Hampton East", lat: -37.9394, lng: 145.0215 },
  { name: "Hampton Park", lat: -37.9611, lng: 145.1636 },
  { name: "Hastings", lat: -38.2989, lng: 145.2050 },
  { name: "Waterways", lat: -37.8997, lng: 145.1734 },
  { name: "Somerville", lat: -38.2539, lng: 145.0803 },
];

const centerLat = -38.0131;
const centerLng = 145.0965;
const radiusKm = 50;

export default function ServiceAreaMap() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<google.maps.Map | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSuburb, setSelectedSuburb] = useState<Suburb | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    const initMap = async () => {
      try {
        if (typeof google === "undefined") {
          console.error("Google Maps API not loaded");
          setIsLoading(false);
          return;
        }

        const mapOptions: google.maps.MapOptions = {
          zoom: 10,
          center: { lat: centerLat, lng: centerLng },
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          styles: [
            { elementType: "geometry", stylers: [{ color: "#1a1a1d" }] },
            { elementType: "labels.text.stroke", stylers: [{ color: "#1a1a1d" }] },
            { elementType: "labels.text.fill", stylers: [{ color: "#d0a050" }] },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [{ color: "#0c0c0e" }],
            },
            {
              featureType: "road",
              elementType: "geometry",
              stylers: [{ color: "#222227" }],
            },
            {
              featureType: "administrative",
              elementType: "geometry.stroke",
              stylers: [{ color: "#d0a050" }, { weight: 0.5 }],
            },
          ],
        };

        map.current = new google.maps.Map(mapContainer.current, mapOptions);

        new google.maps.Marker({
          position: { lat: centerLat, lng: centerLng },
          map: map.current,
          title: "Jetblack Painting - Mordialloc HQ",
          icon: "http://maps.google.com/mapfiles/ms/icons/FFC107.png",
        });

        new google.maps.Circle({
          center: { lat: centerLat, lng: centerLng },
          radius: radiusKm * 1000,
          map: map.current,
          fillColor: "#D0A050",
          fillOpacity: 0.1,
          strokeColor: "#D0A050",
          strokeOpacity: 0.4,
          strokeWeight: 2,
        });

        suburbs.forEach((suburb) => {
          const marker = new google.maps.Marker({
            position: { lat: suburb.lat, lng: suburb.lng },
            map: map.current,
            title: suburb.name,
            icon: "http://maps.google.com/mapfiles/ms/icons/9C27B0.png",
          });

          marker.addListener("click", () => {
            setSelectedSuburb(suburb);
            map.current?.setCenter({ lat: suburb.lat, lng: suburb.lng });
            map.current?.setZoom(12);
          });
        });

        setIsLoading(false);
      } catch (error) {
        console.error("Error initializing map:", error);
        setIsLoading(false);
      }
    };

    initMap();
  }, []);

  return (
    <section id="coverage-map" className="py-24 bg-[#060607] border-t border-white/[0.06]">
      <div className="container">
        <div className="max-w-2xl mb-12">
          <span className="text-[#D0A050] font-semibold text-sm tracking-widest uppercase mb-3 block">
            Service Coverage
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#EDEDEF] leading-tight mb-5" style={{ fontFamily: "'Georgia', serif" }}>
            We Service 90+ Melbourne Suburbs
          </h2>
          <p className="text-[#B4B4B8] text-lg leading-relaxed">
            Based in Mordialloc, Jetblack Painting covers all of greater Melbourne. Click on any suburb to see its location on the map.
          </p>
        </div>

        <div className="mb-8 rounded-lg overflow-hidden border border-[#222227]">
          <div
            ref={mapContainer}
            className="w-full h-96 sm:h-[500px] lg:h-[600px] relative bg-[#131316]"
          >
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-[#131316] z-10">
                <div className="text-center">
                  <Loader2 className="w-8 h-8 text-[#D0A050] animate-spin mx-auto mb-2" />
                  <p className="text-[#B4B4B8]">Loading map...</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {selectedSuburb && (
          <div className="bg-[#131316] border border-[#222227] rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-[#EDEDEF] mb-2">{selectedSuburb.name}</h3>
            <p className="text-[#B4B4B8]">
              Jetblack Painting provides professional painting services in {selectedSuburb.name}. 
              <a href="/faq" className="text-[#D0A050] hover:underline ml-1">
                Get your free quote today →
              </a>
            </p>
          </div>
        )}

        <div className="bg-[#0C0C0E] rounded-lg p-8">
          <h3 className="text-2xl font-bold text-[#EDEDEF] mb-6">All Suburbs We Service</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {suburbs.map((suburb) => (
              <button
                key={suburb.name}
                onClick={() => {
                  setSelectedSuburb(suburb);
                  if (map.current) {
                    map.current.setCenter({ lat: suburb.lat, lng: suburb.lng });
                    map.current.setZoom(12);
                  }
                }}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all border ${
                  selectedSuburb?.name === suburb.name
                    ? "bg-[#D0A050] text-[#060607] border-[#D0A050]"
                    : "bg-[#131316] text-[#EDEDEF] border-[#222227] hover:border-[#D0A050] hover:text-[#D0A050]"
                }`}
              >
                {suburb.name}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#B4B4B8] text-lg mb-4">Don't see your suburb listed?</p>
          <a
            href="/faq"
            className="inline-block bg-[#D0A050] text-[#060607] px-6 py-3 rounded-lg font-semibold hover:bg-[#E9BE6C] transition-all"
          >
            Get a Free Quote
          </a>
        </div>
      </div>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Jetblack Painting",
          "url": "https://jetblackpainting.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mordialloc",
            "addressRegion": "VIC",
            "postalCode": "3195",
            "addressCountry": "AU"
          },
          "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": centerLat,
              "longitude": centerLng
            },
            "geoRadius": radiusKm + "km"
          },
          "areaServed": suburbs.map(s => ({
            "@type": "City",
            "name": s.name
          }))
        })}
      </script>
    </section>
  );
}