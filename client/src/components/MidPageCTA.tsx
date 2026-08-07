import { Phone } from "lucide-react";
import siteConfig from "@/site-config.json";

interface MidPageCTAProps {
  heading?: string;
}

export default function MidPageCTA({ heading = "Ready to get started?" }: MidPageCTAProps) {
  return (
    <div className="my-12 bg-[#D0A050] rounded-lg p-8 text-center">
      <h3 className="text-2xl text-[#0A0A0B] mb-3 font-bold">{heading}</h3>
      <p className="text-[#0A0A0B]/80 mb-5">
        Call now for a free, no-obligation quote — most calls answered within minutes.
      </p>
      <a
        href={`tel:${siteConfig.phoneHref}`}
        className="inline-flex items-center gap-2 bg-[#131316] text-[#EDEDEF] px-8 py-3 rounded font-bold hover:bg-[#141417] transition-all"
      >
        <Phone className="w-5 h-5" />
        Call {siteConfig.phoneDisplay}
      </a>
    </div>
  );
}
