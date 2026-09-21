import { BedDouble, Moon, Star } from "lucide-react";
import { IMAGES } from "../data/images";
import SiteImage from "./SiteImage";

const FEATURES = [
  "Sklopená zadní sedadla + matrace Snoozu/Tesmat",
  "Camp Mode — tichá klima celou noc (~1 %/h)",
  "Zatemnění oken pro absolutní soukromí",
  "Výhled na hvězdy přes panoramatické sklo",
];

export default function SleepingShowcase() {
  return (
    <section
      id="spani"
      className="relative overflow-hidden border-y border-sky-100 bg-sky-50/70 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
              <SiteImage
                src={IMAGES.campingSleep.src}
                alt={IMAGES.campingSleep.alt}
                placeholderLabel={IMAGES.campingSleep.placeholderLabel}
                className="aspect-[4/3] w-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 hidden overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg sm:block md:-bottom-6 md:-right-6 md:w-48">
              <SiteImage
                src={IMAGES.interior.src}
                alt={IMAGES.interior.alt}
                placeholderLabel={IMAGES.interior.placeholderLabel}
                className="aspect-square w-full object-cover"
              />
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-1.5 text-sm font-medium text-sky-700 shadow-sm">
              <BedDouble className="h-4 w-4" />
              Spaní v Tesle
            </div>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              Luxusní noc místo hotelu
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              Bílá Tesla Model Y se promění v soukromý glamping pod beskydskou
              oblohou. Aktivujete Camp Mode, položíte prémiovou matraci na
              rovnou plochu ze sklopených sedadel a usnete s výhledem na hvězdy
              — v naprostém tichu a bezpečí.
            </p>
            <ul className="mt-8 space-y-3">
              {FEATURES.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-slate-700"
                >
                  <Star className="mt-0.5 h-5 w-5 shrink-0 text-sky-600" />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href="#rezervace?sluzba=noc"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-sky-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700"
            >
              <Moon className="h-4 w-4" />
              Rezervovat noc v Tesle
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
