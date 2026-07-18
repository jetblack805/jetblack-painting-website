import { Phone } from "lucide-react";

interface MidPageCTAProps {
  heading?: string;
}

export default function MidPageCTA({ heading = "Ready to get started?" }: MidPageCTAProps) {
  return (
    <div className="my-12 bg-[#C49826] rounded-lg p-8 text-center">
      <h3 className="text-2xl font-bold text-white mb-3">{heading}</h3>
      <p className="text-white mb-5">
        Call now for a free, no-obligation quote — most calls answered within minutes.
      </p>
      <a
        href="tel:0432077782"
        className="inline-flex items-center gap-2 bg-[#1A1713] text-[#EDE6D8] px-8 py-3 rounded font-bold hover:bg-[#1C1914] transition-all"
      >
        <Phone className="w-5 h-5" />
        Call 0432 077 782
      </a>
    </div>
  );
}
