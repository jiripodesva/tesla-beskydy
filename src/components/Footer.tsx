import { Facebook, Instagram, Mail, MapPin, Phone, Share2, Youtube } from "lucide-react";
import { SITE, whatsAppContactUrl, whatsAppShareUrl } from "../config/site";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.887-9.881-9.888-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.77l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

const SOCIAL = [
  { label: "Instagram", icon: Instagram, href: "#" },
  { label: "Facebook", icon: Facebook, href: "#" },
  { label: "YouTube", icon: Youtube, href: "#" },
];

export default function Footer() {
  const shareUrl =
    typeof window !== "undefined" ? whatsAppShareUrl(window.location.origin) : whatsAppShareUrl();

  return (
    <footer className="border-t border-sky-100 bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Tesla Beskydy</h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Spaní v Tesle, krátkodobý pronájem na zážitkové jízdy a Tesla
              Light Show pro oslavy — ekologický luxus přímo ve Velkých
              Karlovicích.
            </p>
            <a
              href={shareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700 transition hover:bg-sky-100"
            >
              <Share2 className="h-4 w-4" />
              Sdílet stránku na WhatsApp
            </a>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-800">
              Kontakt
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky-600" />
                <span>
                  {SITE.address.street}
                  <br />
                  {SITE.address.zip}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-sky-600" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="transition hover:text-sky-700"
                >
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-sky-600" />
                <a
                  href={`tel:${SITE.phone}`}
                  className="transition hover:text-sky-700"
                >
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <WhatsAppIcon className="h-4 w-4 shrink-0 text-[#25D366]" />
                <a
                  href={whatsAppContactUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#128C7E] transition hover:text-[#075E54]"
                >
                  Napsat na WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-800">
              Sledujte nás
            </h4>
            <div className="mt-4 flex gap-4">
              <a
                href={whatsAppContactUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#25D366]/30 bg-[#25D366]/10 text-[#25D366] transition hover:bg-[#25D366]/20"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
              {SOCIAL.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-sky-300 hover:text-sky-600"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-12 border-t border-sky-100 pt-8 text-center text-xs leading-relaxed text-slate-500">
          Provozováno v souladu s pravidly CHKO Beskydy na legálních místech a
          soukromých pozemcích.
        </p>

        <p className="mt-4 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} Tesla Beskydy · Spaní v Tesle
        </p>
      </div>
    </footer>
  );
}
