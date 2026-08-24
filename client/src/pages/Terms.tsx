/*
 * Website Terms of Use.
 *
 * Deliberately scoped to the WEBSITE only. The terms of the painting work
 * itself — price, scope, timing, the 5-year workmanship guarantee — live in the
 * written quote a customer signs, and inventing contract terms here would put a
 * second, conflicting version of that on the internet. This page says so
 * explicitly rather than staying silent about it.
 *
 * noindex, follow — same reasoning as ReviewUs.tsx and PrivacyPolicy.tsx.
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { breadcrumbSchema } from "@/lib/breadcrumbSchema";
import siteConfig from "@/site-config.json";

const LAST_UPDATED = "24 August 2026";

export default function Terms() {
  return (
    <div className="min-h-screen">
      <SEOHead
        noindex
        title="Terms of Use | Jetblack Painting Melbourne"
        description="The terms that apply to using the Jetblack Painting website, including content ownership, quotes, and the limits of the information published here."
        canonical="https://jetblackpainting.com/terms/"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Terms of Use | Jetblack Painting Melbourne",
            description:
              "The terms that apply to using the Jetblack Painting website, including content ownership, quotes, and the limits of the information published here.",
            url: "https://jetblackpainting.com/terms/",
          },
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Terms of Use", url: "https://jetblackpainting.com/terms/" },
          ]),
        ]}
      />
      <Navbar />

      <section className="pt-32 pb-16 bg-[#0A0A0B]">
        <div className="container max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms of Use</h1>
          <p className="text-[#A3A3A8] mb-12">Last updated {LAST_UPDATED}</p>

          <div className="space-y-10 text-[#C8C8CC] leading-relaxed">
            <section>
              <h2 className="text-2xl text-white mb-3">About these terms</h2>
              <p>
                These terms cover your use of jetblackpainting.com, operated by Jetblack Painting
                (ABN 50 548 669 474) of Mordialloc, Victoria. By using the site you accept them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-3">This site is not a quote</h2>
              <p>
                Everything published here — service descriptions, project photographs, articles and
                answers to common questions — is general information about the work we do. It is not
                a quote and not advice about your particular property.
              </p>
              <p className="mt-3">
                The terms of any actual job are the ones in the written quote you receive from us and
                agree to. Where this website and a signed quote say different things, the quote is
                what counts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-3">Enquiries</h2>
              <p>
                Sending the quote form does not create a booking or oblige us to take the work on,
                and it does not oblige you to accept a quote. It starts a conversation. What you tell
                us is handled as set out in our{" "}
                <a href="/privacy/" className="text-[#D0A050] hover:underline">
                  Privacy Policy
                </a>
                .
              </p>
              <p className="mt-3">
                Please give us accurate details. A quote based on the wrong suburb, surface or scope
                is of no use to either of us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-3">Our content</h2>
              <p>
                The text, photographs, logo and design on this site belong to Jetblack Painting. The
                project photographs are of our own work. You are welcome to read, print and share
                pages for your own use, but please do not republish our photographs or copy our page
                content onto another website without asking.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-3">Links to other sites</h2>
              <p>
                We link to Google, our social media profiles and occasionally to other organisations.
                We do not control those sites and are not responsible for what they publish or how
                they handle your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-3">Availability and accuracy</h2>
              <p>
                We keep this site accurate and up to date as best we can, but we do not promise it
                will always be available or entirely free of errors. Prices, product ranges and
                service areas change.
              </p>
              <p className="mt-3">
                Nothing here limits any rights you have under the Australian Consumer Law, which
                applies to our work regardless of what this page says.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-3">Governing law</h2>
              <p>These terms are governed by the laws of Victoria, Australia.</p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-3">Contact</h2>
              <p>
                Questions about these terms? Call{" "}
                <a href={`tel:${siteConfig.phoneHref}`} className="text-[#D0A050] hover:underline">
                  {siteConfig.phoneDisplay}
                </a>{" "}
                or email{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-[#D0A050] hover:underline">
                  {siteConfig.email}
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
