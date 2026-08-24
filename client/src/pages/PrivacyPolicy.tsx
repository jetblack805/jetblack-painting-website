/*
 * Privacy Policy.
 *
 * Every factual claim here was checked against what the site actually does:
 *   - form fields and validation: worker/quote.js (FIELD_LIMITS, validate)
 *   - where enquiries go: worker/quote.js sendViaResend / sendViaWebhook
 *   - "not stored on the website": worker/quote.js uses no Cloudflare bindings,
 *     no KV, no D1 — it validates and forwards, nothing persists
 *   - analytics: client/index.html (GA4 G-6NC2597W9L, analytics.ahrefs.com)
 *   - embedded map: client/src/components/GoogleMap.tsx (maps.google.com iframe)
 *   - social icons are plain <a> links in Footer.tsx, not embeds — nothing is
 *     sent to those platforms until someone clicks
 *   - gallery captions name suburbs only, never customers or street addresses
 *
 * If any of that changes, this page has to change with it.
 *
 * noindex, follow — same reasoning as ReviewUs.tsx: a short legal page that
 * nobody searches for reads to Google as a soft 404 if indexed. "follow" keeps
 * the page reachable and its links counted, which is all it needs to be.
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { breadcrumbSchema } from "@/lib/breadcrumbSchema";
import siteConfig from "@/site-config.json";

const LAST_UPDATED = "24 August 2026";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <SEOHead
        noindex
        title="Privacy Policy | Jetblack Painting Melbourne"
        description="How Jetblack Painting collects, uses and protects the personal information you give us through this website, by phone or by email."
        canonical="https://jetblackpainting.com/privacy/"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Privacy Policy | Jetblack Painting Melbourne",
            description:
              "How Jetblack Painting collects, uses and protects the personal information you give us through this website, by phone or by email.",
            url: "https://jetblackpainting.com/privacy/",
          },
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Privacy Policy", url: "https://jetblackpainting.com/privacy/" },
          ]),
        ]}
      />
      <Navbar />

      <section className="pt-32 pb-16 bg-[#0A0A0B]">
        <div className="container max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-[#A3A3A8] mb-12">Last updated {LAST_UPDATED}</p>

          <div className="space-y-10 text-[#C8C8CC] leading-relaxed">
            <section>
              <h2 className="text-2xl text-white mb-3">Who we are</h2>
              <p>
                Jetblack Painting (ABN 50 548 669 474) is a painting business based in Mordialloc,
                Victoria 3195, servicing Melbourne. This policy covers jetblackpainting.com and any
                information you give us by phone or email.
              </p>
              <p className="mt-3">
                If you have a question about your information, contact us on{" "}
                <a href={`tel:${siteConfig.phoneHref}`} className="text-[#D0A050] hover:underline">
                  {siteConfig.phoneDisplay}
                </a>{" "}
                or at{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-[#D0A050] hover:underline">
                  {siteConfig.email}
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-3">What we collect</h2>
              <p>When you fill in the quote form on this site, we ask for:</p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Your name, phone number, suburb and the type of work you want — these are required</li>
                <li>
                  Your email address, preferred start date, budget range and a description of the
                  project — these are optional
                </li>
              </ul>
              <p className="mt-4">
                The form also records which page you submitted it from and the time you sent it, plus
                two anti-spam checks: a hidden field that only automated bots fill in, and how long
                the form took to complete. None of that identifies you.
              </p>
              <p className="mt-4">
                If you call or email us instead, we have whatever you choose to tell us. When we quote
                or carry out work we will also hold your address and the details of the job.
              </p>
              <p className="mt-4">
                We do not collect payment card details through this website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-3">What we use it for</h2>
              <p>
                To answer your enquiry, prepare a quote, carry out the work and invoice you. That is
                all. We do not sell your information, we do not rent it, and we do not add you to a
                marketing list.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-3">Where your enquiry goes</h2>
              <p>
                This website does not store your enquiry. When you submit the form it is emailed
                straight to us and nothing is kept on the site itself — there is no customer database
                behind jetblackpainting.com.
              </p>
              <p className="mt-4">These services handle information on our behalf:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>
                  <strong className="text-white">Cloudflare</strong> — hosts and delivers this
                  website. Like any web host it sees technical details of your visit, including your
                  IP address.
                </li>
                <li>
                  <strong className="text-white">Resend</strong> — delivers the quote form to our
                  inbox as an email.
                </li>
                <li>
                  <strong className="text-white">Google Analytics</strong> — tells us how many people
                  visit and which pages they read.
                </li>
                <li>
                  <strong className="text-white">Ahrefs Web Analytics</strong> — a second, simpler
                  measure of the same thing.
                </li>
                <li>
                  <strong className="text-white">Google Maps</strong> — the map showing our location
                  is embedded from Google, so Google can see that your browser loaded it.
                </li>
              </ul>
              <p className="mt-4">
                The social media icons in our footer are ordinary links, not embedded widgets.
                Nothing is sent to Instagram, Facebook, YouTube or TikTok unless you click through to
                them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-3">How long we keep it</h2>
              <p>
                Enquiries that do not turn into work sit in our email until we clear them out. Where
                we have quoted or completed a job, we keep the records for at least five years,
                because Australian tax law requires us to keep records of the work we invoice for
                that long.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-3">Cookies and analytics</h2>
              <p>
                Google Analytics sets cookies in your browser so it can tell a returning visitor from
                a new one. We use it to see which pages are useful, not to identify you.
              </p>
              <p className="mt-3">
                You can block or delete cookies in your browser settings, or install{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D0A050] hover:underline"
                >
                  Google's opt-out add-on
                </a>{" "}
                to stop Google Analytics entirely. The site works fine either way.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-3">Photographs of your property</h2>
              <p>
                We photograph the work we complete and may publish those photographs on this website
                and on our social media. The photographs show the paintwork — we do not publish
                customer names or street addresses, only the suburb.
              </p>
              <p className="mt-3">
                If you would rather we did not photograph your property, or you want a photograph
                taken down, tell us and we will sort it out.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-3">Your choices</h2>
              <p>
                You can ask us what information we hold about you, ask us to correct it, or ask us to
                delete it where we are not required to keep it. Email{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-[#D0A050] hover:underline">
                  {siteConfig.email}
                </a>{" "}
                and we will respond.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-3">Keeping it safe</h2>
              <p>
                This website is served over HTTPS, so anything you type into the form is encrypted in
                transit. Your enquiry lives in our business email, which is password protected. No
                system is perfect, but we do not hold more information than we need and we do not
                keep it longer than we have to.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-3">Complaints</h2>
              <p>
                If you think we have mishandled your information, contact us first — most things are
                a misunderstanding we can fix quickly. If you are not satisfied, you can raise it
                with the Office of the Australian Information Commissioner at{" "}
                <a
                  href="https://www.oaic.gov.au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D0A050] hover:underline"
                >
                  oaic.gov.au
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-3">Changes to this policy</h2>
              <p>
                If we change how we handle information — a new analytics tool, a different way of
                receiving enquiries — we will update this page and change the date at the top.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
