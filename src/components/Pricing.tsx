import { Check } from "lucide-react";
import { GLAMPING_PLANS, OTHER_PLANS, type PricingPlan } from "../data/plans";

function PlanCard({ plan }: { plan: PricingPlan }) {
  const Icon = plan.icon;

  return (
    <article
      className={`relative flex flex-col rounded-2xl border bg-gradient-to-b p-8 transition duration-300 ${plan.accent} ${
        plan.highlight
          ? "border-sky-300 shadow-lg shadow-sky-100/50"
          : `border-slate-200 shadow-sm ${plan.border} hover:shadow-md`
      }`}
    >
      {plan.badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-sky-600 px-4 py-1 text-xs font-bold uppercase tracking-wide text-white">
          {plan.badge}
        </span>
      )}

      <div className="flex items-center gap-3 text-slate-500">
        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${plan.iconBg}`}>
          <Icon className="h-5 w-5" />
        </div>
        <div>
          {plan.category && (
            <p className="text-xs font-semibold uppercase tracking-wider text-sky-600">
              {plan.category}
            </p>
          )}
          <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
        </div>
      </div>

      <div className="mt-4 flex items-baseline gap-2">
        <p className="text-3xl font-extrabold text-slate-900">{plan.price}</p>
        <p className="text-sm font-medium text-slate-500">{plan.priceUnit}</p>
      </div>

      {plan.schedule && (
        <p className="mt-3 rounded-lg border border-slate-200 bg-white/80 px-3 py-2 text-sm font-medium text-slate-700">
          {plan.schedule}
        </p>
      )}

      <ul className="mt-6 flex-1 space-y-3">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-3 text-sm text-slate-600"
          >
            <Check className="mt-0.5 h-5 w-5 shrink-0 text-sky-600" />
            {feature}
          </li>
        ))}
      </ul>

      <a
        href={`#rezervace?sluzba=${plan.id}`}
        className={`mt-8 block rounded-full py-3.5 text-center text-sm font-semibold transition ${
          plan.highlight
            ? "bg-sky-600 text-white hover:bg-sky-700"
            : "border border-slate-200 bg-white text-slate-800 hover:border-sky-300 hover:bg-sky-50"
        }`}
      >
        {plan.cta}
      </a>
    </article>
  );
}

export default function Pricing() {
  return (
    <section id="cenik" className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">
            Ceník
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Přehled cen
          </h2>
          <p className="mt-4 text-slate-600">
            Čtyři varianty — vyberte kartu a rovnou ji předvyplníme ve formuláři
            níže.
          </p>
        </div>

        <div className="mt-16">
          <h3 className="text-center text-lg font-semibold text-slate-800">
            Spaní v Tesle
          </h3>
          <p className="mt-1 text-center text-sm text-slate-500">
            Noc nebo celý víkend
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {GLAMPING_PLANS.map((plan) => (
              <PlanCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-center text-lg font-semibold text-slate-800">
            Další služby
          </h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {OTHER_PLANS.map((plan) => (
              <PlanCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
