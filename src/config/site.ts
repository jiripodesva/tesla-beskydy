export const SITE = {
  name: "Tesla Beskydy",
  tagline: "Spaní v Tesle ve Velkých Karlovicích",
  url: import.meta.env.VITE_SITE_URL ?? "https://teslabeskydy.cz",
  phone: "+420739576989",
  phoneDisplay: "+420 739 576 989",
  email: "napis@teslabeskydy.cz",
  address: {
    street: "Velké Karlovice 1188",
    zip: "756 06 Velké Karlovice",
  },
} as const;

export function whatsAppContactUrl(message?: string): string {
  const text =
    message ??
    "Dobrý den, mám zájem o služby Tesla Beskydy. Prosím o více informací.";
  return `https://wa.me/420739576989?text=${encodeURIComponent(text)}`;
}

export function whatsAppShareUrl(pageUrl?: string): string {
  const url = pageUrl ?? SITE.url;
  const text = `${SITE.name} — spaní v Tesle, zážitkové jízdy a Light Show v Beskydech. ${url}`;
  return `https://wa.me/?text=${encodeURIComponent(text)}`;
}
