import { useState } from "react";
import { Menu, Sparkles, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#zazitek", label: "O nás" },
  { href: "#sluzby", label: "Služby" },
  { href: "#jak-to-funguje", label: "Jak to funguje" },
  { href: "#cenik", label: "Ceník" },
  { href: "#rezervace", label: "Rezervace" },
];

function BrandLogo() {
  return (
    <span className="relative flex h-10 w-10 shrink-0 items-center justify-center">
      <span
        className="logo-mark absolute inset-0 rounded-xl bg-gradient-to-br from-sky-400 via-sky-300 to-cyan-200 ring-2 ring-white/90"
        aria-hidden
      />
      <Sparkles
        className="relative h-5 w-5 text-sky-950 drop-shadow-[0_1px_1px_rgba(255,255,255,0.6)]"
        strokeWidth={2.25}
      />
      <span
        className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-white shadow-sm ring-2 ring-sky-100"
        aria-hidden
      />
      <span
        className="absolute -bottom-0.5 -left-0.5 h-1.5 w-1.5 rounded-full bg-cyan-100/90 ring-1 ring-white"
        aria-hidden
      />
    </span>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-sky-100/90 bg-white/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#"
          className="group flex items-center gap-3 text-lg font-bold tracking-tight text-slate-900"
        >
          <span className="transition duration-300 group-hover:scale-105 group-hover:rotate-3">
            <BrandLogo />
          </span>
          <span>
            Tesla Beskydy
            <span className="block text-xs font-medium text-slate-500">
              Spaní v Tesle
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-slate-600 transition hover:text-sky-600"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#rezervace"
          className="hidden rounded-full bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700 md:inline-block"
        >
          Rezervovat
        </a>

        <button
          type="button"
          className="rounded-lg p-2 text-slate-600 transition hover:bg-slate-100 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Zavřít menu" : "Otevřít menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-sky-100 bg-white px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-2 text-base font-medium text-slate-700"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#rezervace"
                className="mt-2 block rounded-full bg-sky-600 py-3 text-center font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Rezervovat zážitek
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
