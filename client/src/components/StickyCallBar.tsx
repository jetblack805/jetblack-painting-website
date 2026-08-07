/*
 * Sticky mobile call-to-action bar, fixed to the bottom of the viewport.
 * Hidden on lg+ where the Navbar's own "Call Now" button is already visible.
 */
import { Phone } from "lucide-react";
import siteConfig from "@/site-config.json";

export default function StickyCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-[#0A0A0B] border-t border-white/10 shadow-[0_-4px_12px_rgba(0,0,0,0.2)]">
      <a
            href={`tel:${siteConfig.phoneHref}`}
        className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#D0A050] text-[#0A0A0B] font-bold text-base active:bg-[#B0863C]"
      >
        <Phone className="w-5 h-5" />
            Call Now for a Free Quote — {siteConfig.phoneDisplay}
      </a>
    </div>
  );
}
