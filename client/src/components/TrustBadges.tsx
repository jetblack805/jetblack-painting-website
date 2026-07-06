import { Shield, Award, CheckCircle, Star, Clock, Users } from "lucide-react";

export default function TrustBadges() {
  const badges = [
    {
      icon: <Shield className="w-10 h-10 text-[#00AACC]" />,
      title: "$20M Public Liability",
      description: "Fully insured for your peace of mind"
    },
    {
      icon: <Award className="w-10 h-10 text-[#00AACC]" />,
      title: "Licensed & Registered",
      description: "VIC registered painting contractor"
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-[#00AACC]" />,
      title: "Master Painters Member",
      description: "Accredited by Master Painters Australia"
    },
    {
      icon: <Star className="w-10 h-10 text-[#00AACC]" />,
      title: "5-Star Google Rating",
      description: "127+ verified 5-star reviews"
    },
    {
      icon: <Clock className="w-10 h-10 text-[#00AACC]" />,
      title: "13+ Years Experience",
      description: "Trusted since 2011 across Melbourne"
    },
    {
      icon: <Users className="w-10 h-10 text-[#00AACC]" />,
      title: "2,500+ Projects Completed",
      description: "Residential & commercial painting"
    }
  ];

  return (
    <section className="py-16 bg-[#0D0D0D]" aria-label="Trust and credentials">
      <div className="container max-w-6xl">
        <h2 className="text-3xl font-bold text-white text-center mb-3">
          Why Melbourne Trusts Jetblack Painting
        </h2>
        <p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto">
          Fully licensed, insured, and accredited — we deliver quality you can trust on every project.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 rounded-lg bg-[#1a1a1a] border border-gray-800 hover:border-[#00AACC] transition-colors"
            >
              <div className="mb-3">{badge.icon}</div>
              <h3 className="text-white font-semibold text-sm mb-1">{badge.title}</h3>
              <p className="text-gray-400 text-xs">{badge.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Statement */}
        <div className="mt-12 text-center border-t border-gray-800 pt-8">
          <p className="text-gray-300 max-w-3xl mx-auto">
            Jetblack Painting is a <strong className="text-white">fully licensed and insured</strong> painting company 
            based in Melbourne, Victoria. We are proud members of <strong className="text-white">Master Painters Australia</strong> and 
            comply with all <strong className="text-white">Australian Standards for painting and decorating</strong>. 
            Our team is <strong className="text-white">WorkSafe compliant</strong> with current police checks and working with children checks.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="tel:0432077782"
              className="inline-flex items-center px-6 py-3 bg-[#007A99] text-white font-bold rounded-lg hover:bg-[#006B85] transition-colors"
            >
              Call Now: 0432 077 782
            </a>
            <a
              href="mailto:jimmy@jetblackpainting.com"
              className="inline-flex items-center px-6 py-3 border-2 border-[#00AACC] text-[#00AACC] font-bold rounded-lg hover:bg-[#007A99] hover:text-white transition-colors"
            >
              Email for Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
