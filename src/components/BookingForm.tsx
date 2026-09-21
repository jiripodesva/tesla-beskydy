import { FormEvent, useEffect, useState } from "react";
import { Calendar, Loader2, Send } from "lucide-react";
import {
  FORMSPREE_ENDPOINT,
  isFormspreeConfigured,
} from "../config/formspree";
import { PRICING_PLANS, type PlanId } from "../data/plans";

const VALID_PLAN_IDS = new Set(PRICING_PLANS.map((p) => p.id));

function getPlanFromUrl(): PlanId {
  const param = new URLSearchParams(window.location.search).get("sluzba");
  if (param && VALID_PLAN_IDS.has(param as PlanId)) {
    return param as PlanId;
  }
  return "noc";
}

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<PlanId>("noc");

  const formspreeReady = isFormspreeConfigured();

  useEffect(() => {
    setSelectedPlan(getPlanFromUrl());

    function syncFromHash() {
      if (window.location.hash.startsWith("#rezervace")) {
        setSelectedPlan(getPlanFromUrl());
      }
    }

    window.addEventListener("hashchange", syncFromHash);
    window.addEventListener("popstate", syncFromHash);
    return () => {
      window.removeEventListener("hashchange", syncFromHash);
      window.removeEventListener("popstate", syncFromHash);
    };
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    if (!formspreeReady) {
      setError(
        "Formulář není napojený — chybí VITE_FORMSPREE_FORM_ID v souboru .env",
      );
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);
    const jmeno = String(data.get("jmeno") ?? "");
    const email = String(data.get("email") ?? "");
    const telefon = String(data.get("telefon") ?? "");
    const datum = String(data.get("datum") ?? "");
    const zprava = String(data.get("zprava") ?? "");
    const plan = PRICING_PLANS.find((p) => p.id === selectedPlan);

    setSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jmeno,
          email,
          telefon,
          datum,
          zprava: zprava || "—",
          sluzba: plan?.formLabel ?? selectedPlan,
          sluzba_id: selectedPlan,
          _subject: `Tesla Beskydy — ${plan?.formLabel ?? "poptávka"}`,
        }),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error ?? "Odeslání se nezdařilo. Zkuste to znovu.");
      }

      setSubmitted(true);
      form.reset();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Odeslání se nezdařilo. Zkuste to znovu.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  const activePlan = PRICING_PLANS.find((p) => p.id === selectedPlan);

  return (
    <section id="rezervace" className="relative bg-sky-50/50 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">
            Rezervace
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Nezávazná poptávka
          </h2>
          <p className="mt-4 text-slate-600">
            Vyberte variantu z ceníku a vyplňte formulář — ozveme se s
            potvrzením termínu.
          </p>
        </div>

        {!formspreeReady && !submitted && (
          <p className="mt-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-center text-sm text-amber-900">
            Formulář čeká na napojení Formspree — doplňte{" "}
            <code className="rounded bg-amber-100 px-1">VITE_FORMSPREE_FORM_ID</code>{" "}
            do souboru <code className="rounded bg-amber-100 px-1">.env</code>.
          </p>
        )}

        <form
          onSubmit={handleSubmit}
          className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg sm:mt-12 sm:p-10"
        >
          {submitted ? (
            <div className="py-12 text-center">
              <p className="text-lg font-semibold text-sky-700">
                Děkujeme! Vaše poptávka byla odeslána.
              </p>
              <p className="mt-2 text-slate-600">
                Brzy vás budeme kontaktovat na uvedený e-mail nebo telefon.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="jmeno"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Jméno
                </label>
                <input
                  id="jmeno"
                  name="jmeno"
                  type="text"
                  required
                  disabled={submitting}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500/20 disabled:opacity-60"
                  placeholder="Jan Novák"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  disabled={submitting}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500/20 disabled:opacity-60"
                  placeholder="jan@email.cz"
                />
              </div>

              <div>
                <label
                  htmlFor="telefon"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Telefon
                </label>
                <input
                  id="telefon"
                  name="telefon"
                  type="tel"
                  required
                  disabled={submitting}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500/20 disabled:opacity-60"
                  placeholder="+420 739 576 989"
                />
              </div>

              <div>
                <label
                  htmlFor="sluzba"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Varianta z ceníku
                </label>
                <select
                  id="sluzba"
                  name="sluzba"
                  required
                  disabled={submitting}
                  value={selectedPlan}
                  onChange={(e) => setSelectedPlan(e.target.value as PlanId)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500/20 disabled:opacity-60"
                >
                  {PRICING_PLANS.map((plan) => (
                    <option key={plan.id} value={plan.id}>
                      {plan.formLabel}
                    </option>
                  ))}
                </select>
              </div>

              {activePlan && (
                <div className="sm:col-span-2 rounded-xl border border-sky-200 bg-sky-50/60 px-4 py-3 text-sm text-sky-900">
                  <span className="font-semibold">{activePlan.price}</span>
                  {" · "}
                  {activePlan.priceUnit}
                  {activePlan.schedule && (
                    <>
                      {" · "}
                      <span className="text-sky-800">
                        {activePlan.schedule}
                      </span>
                    </>
                  )}
                </div>
              )}

              <div className="sm:col-span-2">
                <label
                  htmlFor="datum"
                  className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700"
                >
                  <Calendar className="h-4 w-4" />
                  {selectedPlan === "vikend"
                    ? "Termín víkendu (pátek)"
                    : "Datum"}
                </label>
                <input
                  id="datum"
                  name="datum"
                  type="date"
                  required
                  disabled={submitting}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500/20 disabled:opacity-60"
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="zprava"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Zpráva / Speciální přání
                </label>
                <textarea
                  id="zprava"
                  name="zprava"
                  rows={4}
                  disabled={submitting}
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500/20 disabled:opacity-60"
                  placeholder="Např. Light Show k narozeninám, snídaňový koš s frgály…"
                />
              </div>

              {error && (
                <div className="sm:col-span-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
                  {error}
                </div>
              )}

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-sky-600 px-8 py-4 text-base font-semibold text-white shadow-md transition hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Odesílám…
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Odeslat nezávaznou poptávku
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
