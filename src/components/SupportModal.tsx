import { useState } from "react";
import { X } from "lucide-react";

export default function SupportModal() {
  const [open, setOpen] = useState(() => {
    if (typeof window === "undefined") return true;
    return !window.location.hash.startsWith("#rezervace");
  });

  function closeModal() {
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/55 px-4 py-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="support-modal-title"
    >
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-sky-100 bg-white shadow-2xl">
        <button
          type="button"
          onClick={closeModal}
          className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-600 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-100 hover:text-slate-900"
          aria-label="Zavřít okno"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="bg-gradient-to-br from-sky-50 via-white to-yellow-50 p-6 pt-14 sm:p-8 sm:pt-14">
          <div className="mx-auto mb-5 flex h-28 w-28 rotate-[-7deg] flex-col items-center justify-center overflow-hidden rounded-full border-2 border-sky-700/70 bg-white text-sky-950 shadow-md">
            <div className="flex h-1/2 w-full items-end justify-center bg-[#0057B7] pb-1 text-yellow-300">
              <span className="text-3xl font-black leading-none tracking-widest">FCK</span>
            </div>
            <div className="flex h-1/2 w-full items-start justify-center bg-[#FFD700] pt-1 text-[#0057B7]">
              <span className="text-3xl font-black leading-none tracking-widest">PTN</span>
            </div>
          </div>

          <h2
            id="support-modal-title"
            className="mt-2 text-center text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl"
          >
            Zlu se nesmí ustupovat.
          </h2>
          <p className="mt-4 text-center leading-relaxed text-slate-700">
            Z každého pronájmu posíláme 5 % organizaci Dárek pro Putina.
            Pronájmem naší Tesly tak přispějete na dobrou věc — místo koupě
            ruské nafty pomůžete statečným ukrajinským obráncům získat zbraně.
          </p>
          <p className="mt-3 text-center text-sm text-slate-600">
            Nelíbí se vám to? Nevadí. Máte právo na svůj názor. Klidně si můžete
            jinde půjčit například nějaké ruské elektroauto.
          </p>

          <button
            type="button"
            onClick={closeModal}
            className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-sky-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700"
          >
            Rozumím, pokračovat na web
          </button>
        </div>
      </div>
    </div>
  );
}
