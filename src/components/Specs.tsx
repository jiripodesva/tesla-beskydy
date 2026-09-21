import {
  BatteryCharging,
  EyeOff,
  MonitorPlay,
  Thermometer,
} from "lucide-react";
import { IMAGES } from "../data/images";
import SiteImage from "./SiteImage";

const SPECS = [
  {
    icon: Thermometer,
    title: "Camp Mode",
    description:
      "Stabilní klima, filtrace vzduchu (HEPA), USB napájení pro vaše zařízení po celou noc.",
  },
  {
    icon: MonitorPlay,
    title: "Tesla Theater",
    description:
      "Sledujte Netflix, YouTube nebo hrajte hry na 15\" displeji přímo z vyhřívané postele.",
  },
  {
    icon: EyeOff,
    title: "Blackout soukromí",
    description:
      "Kompletní sada zatemňovacích clon pro všechna okna zaručuje absolutní intimitu.",
  },
  {
    icon: BatteryCharging,
    title: "Bezstarostné nabíjení",
    description:
      "Vůz předáváme plně nabitý. Možnost pohodlného dobíjení u hotelů Lanterna a Horal ve Velkých Karlovicích.",
  },
];

export default function Specs() {
  return (
    <section
      id="jak-to-funguje"
      className="relative border-y border-sky-100 bg-sky-50/80 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">
            Jak to funguje
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Technologie a komfort
          </h2>
          <p className="mt-4 text-slate-600">
            Vše pro dokonalou noc v přírodě — bez kompromisů.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <SiteImage
            src={IMAGES.panoramic.src}
            alt={IMAGES.panoramic.alt}
            placeholderLabel={IMAGES.panoramic.placeholderLabel}
            className="aspect-[21/9] w-full object-cover"
          />
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {SPECS.map((spec) => (
            <div
              key={spec.title}
              className="group flex gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-sky-200 hover:shadow-md"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-700 transition group-hover:scale-110">
                <spec.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {spec.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {spec.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
