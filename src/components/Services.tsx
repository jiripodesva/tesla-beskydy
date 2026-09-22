import { BriefcaseBusiness, Moon, Zap } from "lucide-react";
import { IMAGES } from "../data/images";
import { OTHER_PLANS, GLAMPING_PLANS } from "../data/plans";
import { handleReservationClick, reservationHref } from "../utils/reservation";
import SiteImage from "./SiteImage";

const glampingNoc = GLAMPING_PLANS.find((p) => p.id === "noc")!;
const glampingVikend = GLAMPING_PLANS.find((p) => p.id === "vikend")!;
const jizdaPlan = OTHER_PLANS.find((p) => p.id === "jizda")!;
const eventPlan = OTHER_PLANS.find((p) => p.id === "akce")!;

const SERVICES = [
  {
    icon: Moon,
    title: "Spaní v Tesle (Glamping)",
    priceHint: `${glampingNoc.price} / noc · ${glampingVikend.price} / víkend`,
    image: IMAGES.serviceCamping,
    planId: "noc" as const,
    accent: "from-sky-50 to-white",
    border: "hover:border-sky-300",
    iconBg: "bg-sky-100 text-sky-700",
    copy: "Zapomeňte na klasické hotely. Camp Mode udržuje ideální teplotu celou noc. Spěte na matraci s povlečením, polštářem a peřinou s výhledem na hvězdy skrze panoramatické sklo.",
  },
  {
    icon: Zap,
    title: jizdaPlan.name,
    priceHint: `${jizdaPlan.price} ${jizdaPlan.priceUnit}`,
    image: IMAGES.serviceDrive,
    planId: "jizda" as const,
    accent: "from-blue-50 to-white",
    border: "hover:border-blue-300",
    iconBg: "bg-blue-100 text-blue-700",
    copy: "Pronajměte si Teslu na pár hodin a vyzkoušejte zrychlení, autopilota i ovládání funkcí vozu přes umělou inteligenci. Ukážeme chytré funkce, hlasové ovládání a moderní technologie na trasách kolem Soláně nebo Kohútky.",
  },
  {
    icon: BriefcaseBusiness,
    title: eventPlan.name,
    priceHint: `${eventPlan.price} · ${eventPlan.priceUnit}`,
    image: IMAGES.serviceEvent,
    planId: "akce" as const,
    accent: "from-cyan-50 to-white",
    border: "hover:border-cyan-300",
    iconBg: "bg-cyan-100 text-cyan-700",
    copy: "Tesla jako stylový prvek svatby nebo firemního dne: příjezd nevěsty, fotky s vozem, možnost Light Show a technická zábava pro svatební hosty nebo tým.",
  },
];

export default function Services() {
  return (
    <section id="sluzby" className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">
            Co nabízíme
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Tři způsoby, jak si užít Teslu
          </h2>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className={`group overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-b ${service.accent} shadow-sm transition duration-300 hover:shadow-md ${service.border}`}
            >
              <div className="relative h-48 overflow-hidden sm:h-52">
                <SiteImage
                  src={service.image.src}
                  alt={service.image.alt}
                  placeholderLabel={service.image.placeholderLabel}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />
                <div
                  className={`absolute bottom-4 left-4 inline-flex rounded-xl p-2.5 shadow-sm ${service.iconBg}`}
                >
                  <service.icon className="h-6 w-6" />
                </div>
              </div>
              <div className="p-6 pt-4">
                <h3 className="text-xl font-bold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-1 text-sm font-semibold text-sky-700">
                  {service.priceHint}
                </p>
                <p className="mt-3 leading-relaxed text-slate-600">
                  {service.copy}
                </p>
                <a
                  href={reservationHref(service.planId)}
                  onClick={handleReservationClick(service.planId)}
                  className="mt-4 inline-block text-sm font-semibold text-sky-600 transition hover:text-sky-700"
                >
                  Rezervovat →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
