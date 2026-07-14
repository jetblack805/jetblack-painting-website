// Suburbs data with coordinates for Maps integration and local SEO
export const SUBURBS_DATA = {
  brighton: {
    name: "Brighton",
    coordinates: { lat: -37.9303, lng: 145.0189 },
    postcode: "3186",
    description: "Premier beachside suburb with heritage and modern homes",
    areasServed: ["Brighton Beach", "Brighton East"]
  },
  toorak: {
    name: "Toorak",
    coordinates: { lat: -37.8398, lng: 145.0296 },
    postcode: "3142",
    description: "Luxury residential suburb known for high-end properties",
    areasServed: ["Toorak", "Kooyong"]
  },
  malvern: {
    name: "Malvern",
    coordinates: { lat: -37.8558, lng: 145.0411 },
    postcode: "3144",
    description: "Inner Melbourne suburb with character homes",
    areasServed: ["Malvern", "South Malvern"]
  },
  camberwell: {
    name: "Camberwell",
    coordinates: { lat: -37.8286, lng: 145.0631 },
    postcode: "3124",
    description: "Established suburb with Victorian and Edwardian properties",
    areasServed: ["Camberwell", "Balwyn North"]
  },
  hawthorn: {
    name: "Hawthorn",
    coordinates: { lat: -37.8226, lng: 145.0324 },
    postcode: "3123",
    description: "Inner suburb with leafy streets and heritage homes",
    areasServed: ["Hawthorn", "Hawthorn East"]
  },
  bentleigh: {
    name: "Bentleigh",
    coordinates: { lat: -37.8917, lng: 145.0542 },
    postcode: "3204",
    description: "Bayside suburb with family-friendly properties",
    areasServed: ["Bentleigh", "Bentleigh East"]
  },
  caulfield: {
    name: "Caulfield",
    coordinates: { lat: -37.8767, lng: 145.0653 },
    postcode: "3161",
    description: "Inner suburb with diverse architectural styles",
    areasServed: ["Caulfield", "South Caulfield"]
  },
  hampton: {
    name: "Hampton",
    coordinates: { lat: -38.0531, lng: 145.0264 },
    postcode: "3188",
    description: "Bayside suburb with beaches and parks",
    areasServed: ["Hampton", "Beaumaris"]
  },
  mordialloc: {
    name: "Mordialloc",
    coordinates: { lat: -38.0131, lng: 145.0965 },
    postcode: "3195",
    description: "Coastal suburb with bay views and heritage properties",
    areasServed: ["Mordialloc", "Mentone South"]
  },
  keysborough: {
    name: "Keysborough",
    coordinates: { lat: -37.9722, lng: 145.1312 },
    postcode: "3173",
    description: "Outer suburb with modern and period homes",
    areasServed: ["Keysborough", "Lyndhurst"]
  },
  kew: {
    name: "Kew",
    coordinates: { lat: -37.7956, lng: 145.0618 },
    postcode: "3101",
    description: "Inner suburb near the Yarra River with period properties",
    areasServed: ["Kew", "Deepdene"]
  },
  sandringham: {
    name: "Sandringham",
    coordinates: { lat: -37.9464, lng: 145.0042 },
    postcode: "3191",
    description: "Bayside suburb with family homes and local charm",
    areasServed: ["Sandringham", "Gardenvale"]
  },
  mentone: {
    name: "Mentone",
    coordinates: { lat: -37.9936, lng: 145.0738 },
    postcode: "3194",
    description: "Bayside suburb with beaches and residential properties",
    areasServed: ["Mentone", "Parkdale"]
  },
  carlton: {
    name: "Carlton",
    coordinates: { lat: -37.8068, lng: 144.9616 },
    postcode: "3053",
    description: "Inner Melbourne suburb with terrace houses and apartments",
    areasServed: ["Carlton", "Parkville"]
  },
  morningtonPeninsula: {
    name: "Mornington Peninsula",
    coordinates: { lat: -38.3663, lng: 145.0890 },
    postcode: "3930",
    description: "Peninsula region with coastal towns and properties",
    areasServed: ["Mornington", "Mount Martha", "Portsea"]
  },
  bayside: {
    name: "Bayside",
    coordinates: { lat: -37.9917, lng: 145.0408 },
    postcode: "3193",
    description: "Bayside municipality with coastal suburbs",
    areasServed: ["Highett", "Sandringham", "Cheltenham"]
  },
  kingston: {
    name: "Kingston",
    coordinates: { lat: -38.0078, lng: 145.1456 },
    postcode: "3364",
    description: "South-eastern suburb with family and period homes",
    areasServed: ["Kingston", "Aspendale"]
  },
  greaterDandenong: {
    name: "Greater Dandenong",
    coordinates: { lat: -37.9884, lng: 145.2128 },
    postcode: "3175",
    description: "South-eastern municipality with diverse properties",
    areasServed: ["Dandenong", "Dandenong South", "Noble Park"]
  },
  cheltenham: {
    name: "Cheltenham",
    coordinates: { lat: -37.9583, lng: 145.0528 },
    postcode: "3192",
    description: "Bayside suburb with family homes and period properties",
    areasServed: ["Cheltenham", "Highett"]
  },
  parkdale: {
    name: "Parkdale",
    coordinates: { lat: -38.0000, lng: 145.0653 },
    postcode: "3195",
    description: "Coastal Bayside suburb with beach houses and brick veneer homes",
    areasServed: ["Parkdale", "Mordialloc North"]
  },
  aspendale: {
    name: "Aspendale",
    coordinates: { lat: -38.0278, lng: 145.1014 },
    postcode: "3195",
    description: "Quiet coastal suburb bordering Mordialloc with beachside properties",
    areasServed: ["Aspendale", "Aspendale Gardens"]
  }
};

export type SuburbKey = keyof typeof SUBURBS_DATA;

export function getSuburbData(suburb: string) {
  const normalizedSuburb = suburb
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/&/g, "and");
  
  const key = Object.keys(SUBURBS_DATA).find(
    (k) => k.replace(/([a-z])([A-Z])/g, "$1$2").toLowerCase() === normalizedSuburb
  ) as SuburbKey | undefined;
  
  return key ? SUBURBS_DATA[key] : null;
}

export function getEmbedMapSrc(coordinates: { lat: number; lng: number }, suburb: string) {
  // No-API-key Google Maps embed - centers the map on the suburb's coordinates
  return `https://www.google.com/maps?q=${coordinates.lat},${coordinates.lng}&z=13&output=embed`;
}
