import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function CarltonPainters() {
  const suburb = "Carlton";
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Professional House Painting Services in ${suburb}`,
    "provider": {
      "@type": "HomeAndConstructionBusiness",
      "name": "Jetblack Painting",
      "telephone": "0432 077 782",
      "url": "https://jetblackpainting.manus.space",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Melbourne",
        "addressRegion": "VIC",
        "addressCountry": "AU"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": suburb
    },
    "description": `Jetblack Painting provides expert heritage painting services in Carlton. Specializing in Victorian terrace restoration and historic property preservation.`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://jetblackpainting.manus.space/painter-${suburb.toLowerCase().replace(/\s+/g, "-")}`
    }
  };

  const faqs = [
    {
      question: `Do you specialize in Victorian terrace painting in Carlton?`,
      answer: `Yes, Victorian terraces are a specialty of ours. We understand the detailed ironwork, ornate cornices, and specific color palettes required to restore these Carlton icons to their original beauty.`
    },
    {
      question: `Are you experienced with heritage-listed properties in Carlton?`,
      answer: `Absolutely. We have extensive experience working on heritage-listed homes and buildings in Carlton, ensuring all work is performed to the highest standards of historic preservation.`
    },
    {
      question: `What interior painting services do you offer for Carlton apartments?`,
      answer: `We provide comprehensive interior painting for Carlton's modern apartments and historic conversions, using low-VOC, high-quality paints for a beautiful and healthy living environment.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Carlton Painters | Heritage & Victorian Painting Experts | Jetblack Painting"
      description="Premium house painters in Carlton. Specialists in Victorian terrace restoration and heritage-listed property painting. 5-star rated, free quotes."
      neighbouringSuburbs={[
        { name: "Fitzroy", link: "/painter-fitzroy" },
        { name: "Parkville", link: "/painter-parkville" },
        { name: "North Melbourne", link: "/painter-north-melbourne" },
        { name: "East Melbourne", link: "/painter-east-melbourne" },
        { name: "Collingwood", link: "/painter-collingwood" }
      ]}
      localExpertise={`Serving the vibrant Carlton community, we are experts in the restoration of iconic Victorian terrace houses. We understand the intricacies of Carlton's heritage architecture and the specific requirements for maintaining these historic properties within the City of Melbourne.`}
      propertyTypes={`Carlton is famous for its 19th-century Victorian architecture, including ornate terraced houses and heritage public buildings. We specialize in the detailed painting and restoration required for these unique property types.`}
      faqs={faqs}
      schema={schema}
    />
  );
}
