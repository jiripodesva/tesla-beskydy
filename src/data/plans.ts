import type { LucideIcon } from "lucide-react";
import { Moon, Sparkles, Zap } from "lucide-react";

export type PlanId = "noc" | "vikend" | "jizda" | "lightshow";

export type PricingPlan = {
  id: PlanId;
  category?: string;
  name: string;
  price: string;
  priceUnit: string;
  schedule?: string;
  features: string[];
  cta: string;
  badge?: string;
  highlight?: boolean;
  icon: LucideIcon;
  accent: string;
  border: string;
  iconBg: string;
  formLabel: string;
};

const GLAMPING_FEATURES = [
  "Prémiový kempingový set (matrace, zatemnění, povlečení)",
  "Camp Mode pod hvězdami",
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "noc",
    category: "Spaní v Tesle",
    name: "Noc",
    price: "1 900 Kč",
    priceUnit: "za noc",
    schedule: "Vyzvednutí v 15:00 · vrácení druhý den v 11:00",
    features: GLAMPING_FEATURES,
    cta: "Rezervovat noc",
    badge: "Nejoblíbenější",
    highlight: true,
    icon: Moon,
    accent: "from-sky-50 to-white",
    border: "hover:border-sky-300",
    iconBg: "bg-sky-100 text-sky-700",
    formLabel: "Spaní v Tesle — Noc (1 900 Kč)",
  },
  {
    id: "vikend",
    category: "Spaní v Tesle",
    name: "Víkend",
    price: "4 900 Kč",
    priceUnit: "za víkend",
    schedule: "Vyzvednutí pátek 15:00 · vrácení neděle 15:00",
    features: GLAMPING_FEATURES,
    cta: "Rezervovat víkend",
    icon: Moon,
    accent: "from-sky-50/80 to-white",
    border: "hover:border-sky-300",
    iconBg: "bg-sky-100 text-sky-700",
    formLabel: "Spaní v Tesle — Víkend (4 900 Kč)",
  },
  {
    id: "jizda",
    name: "Zážitková jízda",
    price: "990 Kč",
    priceUnit: "za hodinu",
    features: [
      "Krátkodobý pronájem Tesla Model Y",
      "Instruktáž a bezpečnostní briefing",
      "Jízdy po malebných trasách v Beskydech",
    ],
    cta: "Objednat jízdu",
    icon: Zap,
    accent: "from-blue-50 to-white",
    border: "hover:border-blue-300",
    iconBg: "bg-blue-100 text-blue-700",
    formLabel: "Zážitková jízda (990 Kč / hod)",
  },
  {
    id: "lightshow",
    name: "Tesla Light Show",
    price: "490 Kč",
    priceUnit: "za 15 minut",
    features: [
      "Hudebně synchronizovaná světelná show",
      "Narozeniny, svatba, firemní oslavy",
      "Program na míru vaší akci",
    ],
    cta: "Poptat Light Show",
    icon: Sparkles,
    accent: "from-cyan-50 to-white",
    border: "hover:border-cyan-300",
    iconBg: "bg-cyan-100 text-cyan-700",
    formLabel: "Tesla Light Show (490 Kč / 15 min)",
  },
];

export const GLAMPING_PLANS = PRICING_PLANS.filter((p) =>
  ["noc", "vikend"].includes(p.id),
);

export const OTHER_PLANS = PRICING_PLANS.filter((p) =>
  ["jizda", "lightshow"].includes(p.id),
);

export function getPlanById(id: PlanId): PricingPlan | undefined {
  return PRICING_PLANS.find((p) => p.id === id);
}
