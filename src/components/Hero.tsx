import { ChevronDown, Sparkles } from "lucide-react";
import { USE_CUSTOM_PHOTOS } from "../config/media";
import { IMAGES } from "../data/images";
import SiteImage from "./SiteImage";

export default function Hero() {
  return (
    <section
      id="zazitek"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      {USE_CUSTOM_PHOTOS ? (
        <>
          <SiteImage
            src={IMAGES.hero.src}
            alt={IMAGES.hero.alt}
            className="absolute inset-0 h-full w-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-sky-100/50" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-sky-50 to-cyan-100" />
      )}

      <div
        className="absolute inset-0 opacity-90"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 70% 60% at 20% 20%, rgba(125, 211, 252, 0.35), transparent),
            radial-gradient(ellipse 50% 40% at 85% 70%, rgba(165, 243, 252, 0.3), transparent)
          `,
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-1.5 text-sm font-medium text-sky-800 shadow-sm backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-sky-600" />
            Velké Karlovice · Valašsko · Beskydy
          </div>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
            Noc pod hvězdami
            <span className="block bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-500 bg-clip-text text-transparent">
              v srdci Beskyd
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            Spaní v Tesle, krátkodobý pronájem na zážitkové jízdy a
            pronájem na svatbu nebo firemní den — bílá Tesla Model Y ve Velkých Karlovicích.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#rezervace"
              className="animate-pulse-border inline-flex w-full items-center justify-center rounded-full bg-sky-600 px-8 py-4 text-base font-semibold text-white shadow-md transition hover:bg-sky-700 sm:w-auto"
            >
              Rezervovat zážitek
            </a>
            <a
              href="#sluzby"
              className="inline-flex w-full items-center justify-center rounded-full border border-sky-200 bg-white px-8 py-4 text-base font-semibold text-slate-700 shadow-sm transition hover:border-sky-400 hover:text-sky-700 sm:w-auto"
            >
              Naše služby
            </a>
          </div>
        </div>
      </div>

      <a
        href="#spani"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-sky-400 transition hover:text-sky-600"
        aria-label="Posunout dolů"
      >
        <ChevronDown className="h-8 w-8 animate-bounce" />
      </a>
    </section>
  );
}
