import Link from "next/link";
import { site } from "@/lib/data/site";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream mt-32">
      <div className="container-editorial py-20 md:py-28">
        {/* Top — large brand mark */}
        <div className="flex flex-col items-start gap-12 md:gap-16">
          <Link
            href="/contact"
            className="group block w-full border-b border-cream/15 pb-12 md:pb-16"
          >
            <span className="eyebrow text-brass mb-6 block">
              Begin a conversation
            </span>
            <h2 className="display-lg text-cream max-w-4xl">
              Tell us{" "}
              <em className="font-display italic font-light">about your day.</em>
              <span className="inline-block ml-3 transition-transform duration-700 ease-editorial group-hover:translate-x-3">
                →
              </span>
            </h2>
          </Link>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 w-full">
            <div className="col-span-2 md:col-span-1">
              <p className="font-display text-2xl font-light leading-tight">
                <span className="italic">Aurelia</span>
                <span className="mx-2 opacity-60">&</span>
                Vow
              </p>
              <p className="mt-3 text-sm text-cream/60 leading-relaxed max-w-[18ch]">
                {site.tagline}
              </p>
            </div>

            <div>
              <p className="label text-cream/40 mb-4">Studio</p>
              <ul className="space-y-2 text-sm text-cream/80">
                <li>
                  <Link href="/portfolio" className="hover:text-cream">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-cream">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-cream">
                    Investment
                  </Link>
                </li>
                <li>
                  <Link href="/journal" className="hover:text-cream">
                    Journal
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-cream">
                    Inquire
                  </Link>
                </li>
                <li>
                  <Link href="/client-access" className="hover:text-cream">
                    Client Access
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="label text-cream/40 mb-4">Contact</p>
              <ul className="space-y-2 text-sm text-cream/80">
                <li>
                  <a href={`mailto:${site.email}`} className="hover:text-cream">
                    {site.email}
                  </a>
                </li>
                <li>{site.phone}</li>
                <li className="text-cream/60">
                  {site.location.city}, {site.location.region}
                </li>
                <li className="text-cream/60">{site.available}</li>
              </ul>
            </div>

            <div>
              <p className="label text-cream/40 mb-4">Elsewhere</p>
              <ul className="space-y-2 text-sm text-cream/80">
                <li>
                  <a
                    href={site.social.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 hover:text-cream"
                  >
                    <Instagram className="w-3.5 h-3.5" strokeWidth={1.25} />
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href={site.social.pinterest}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-cream"
                  >
                    Pinterest
                  </a>
                </li>
                <li>
                  <a
                    href={site.social.vimeo}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-cream"
                  >
                    Vimeo
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom — fine print */}
        <div className="mt-20 pt-8 border-t border-cream/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-cream/40 tracking-wide">
            © {new Date().getFullYear()} {site.brand}. All photographs are made
            with care.
          </p>
          <p className="text-xs text-cream/40 tracking-wide">
            Site by Aurelia & Vow Studio
          </p>
        </div>
      </div>
    </footer>
  );
}
