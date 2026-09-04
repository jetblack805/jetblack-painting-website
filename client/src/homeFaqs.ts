// Single source of truth for the homepage FAQ.
//
// WHY THIS EXISTS
// The homepage is the only page on the site that does NOT go through
// scripts/generate-static-pages.mjs, so its crawlable HTML (client/index.html)
// is hand-maintained. On 2026-09-04 an audit found the homepage declaring five
// FAQPage questions in JSON-LD while THREE of them appeared nowhere as visible
// text — Google requires FAQ content to be visible on the page, so that was a
// live structured-data violation.
//
// Everything now derives from this one array:
//   - client/src/components/HomeFAQ.tsx  renders it for real visitors
//   - scripts/generate-home-faq.mjs      writes the visible HTML *and* the
//                                        FAQPage schema into client/index.html
//
// That makes the violation structurally impossible to reintroduce: the schema
// and the visible copy cannot drift, because they are generated from the same
// source in the same run. Same idiom as the coverage map.
//
// PRICES: the figures in the cost answer are deliberate and were reviewed —
// see SEO-LOG.md, "Kept, each now caveated". They are NOT invented and must not
// be quietly removed. Do not add new figures that have not been through Jimmy.

export interface HomeFaq {
  question: string;
  answer: string;
}

export const HOME_FAQS: HomeFaq[] = [
  {
    question: "How much does house painting cost in Melbourne?",
    answer:
      "House painting costs in Melbourne depend on three things: the size of the property, the condition of the surfaces, and how much preparation is needed. That is why we quote after a site visit rather than over the phone. As a budgeting guide: a whole-house interior repaint typically runs $5,000 to $12,000 for a 3-bedroom home. An exterior repaint runs $4,000 to $8,000 for a single-storey home, or $8,000 to $15,000 for a double-storey. These are indicative ranges only. Jetblack Painting offers free no-obligation written quotes — call 0432 077 782.",
  },
  {
    question: "Are Jetblack Painting painters licensed and insured?",
    answer:
      "Yes. Jetblack Painting is fully licensed and carries $10 million public liability insurance. All work comes with a 5-year workmanship guarantee.",
  },
  {
    question: "Do we need to move out while you paint?",
    answer:
      "Almost never. If a property is vacant and can be masked properly we spray it, which gives a finish brushing cannot match. If you are living in the house we brush and roll instead, working room by room so the kitchen and bedrooms stay usable and the place is handed back tidy each evening. Removable items such as cabinet doors can be taken away, sprayed and returned, so you still get the better finish where it shows most.",
  },
  {
    question: "How long does a repaint take?",
    answer:
      "A single room is usually a day. A whole-house interior repaint on a 3-bedroom home typically runs 4 to 8 working days, and a single-storey exterior 5 to 10, depending on how much preparation and repair the surfaces need. Weather moves exterior timelines in winter — surface temperature and overnight condensation matter more than the calendar. We give you a realistic sequence with the quote rather than a best case.",
  },
  {
    question: "Can you work around tenants and settlement dates?",
    answer:
      "Yes — this is a large part of what we do for agents and property managers across Bayside and the southeast. We handle between-tenancy turnarounds where the window is short and the finish has to be durable rather than fashionable, and pre-sale refreshes timed to photography and campaign dates. Tell us the date that cannot move and we will scope the work backwards from it.",
  },
  {
    question: "How does a body corporate or strata repaint work?",
    answer:
      "The painting is the straightforward part. What decides whether it finishes on time is scope agreement up front, access to occupied units, and staged scheduling so residents are never cut off from their own front door. We quote with the scope itemised so committees can compare like for like, and we stage common areas, stairwells and facades in an order that keeps the building usable throughout.",
  },
  {
    question: "Which Melbourne suburbs does Jetblack Painting service?",
    answer:
      "Jetblack Painting is based in Mordialloc and services all Melbourne suburbs including Mordialloc, Mentone, Sandringham, Brighton, Hampton, Bentleigh, Keysborough, Parkdale, Dandenong, Bayside, Kingston, Malvern, Camberwell, Hawthorn, Caulfield, Kew, Carlton, Armadale, Berwick, Box Hill, Doncaster, Glen Waverley, Moorabbin, Stonnington, Wheelers Hill, Ringwood, Croydon, Templestowe, Mornington Peninsula and more.",
  },
  {
    question: "How do I get a free painting quote in Melbourne?",
    answer:
      "Call Jetblack Painting on 0432 077 782 or use the online quote form at jetblackpainting.com. Free quotes are available 7 days for all painting services across Melbourne.",
  },
];
