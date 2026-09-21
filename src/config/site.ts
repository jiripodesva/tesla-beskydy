export const SITE = {
  name: "Tesla Beskydy",
  tagline: "Spaní v Tesle ve Velkých Karlovicích",
  url: import.meta.env.VITE_SITE_URL ?? "https://teslabeskydy.cz",
  phone: "+420739576989",
  phoneDisplay: "+420 739 576 989",
} as const;

export function whatsAppContactUrl(message?: string): string {
  const text =
    message ??
    "Dobrý den, mám zájem o služby Tesla Beskydy. Prosím o více informací.";
  return `https://wa.me/420739576989?text=${encodeURIComponent(text)}`;
}

export function whatsAppShareUrl(pageUrl?: string): string {
  const url = pageUrl ?? SITE.url;
  const text = `${SITE.name} — spaní v Tesle, zážitkové jízdy, svatby a firemní dny v Beskydech. ${url}`;
  return `https://wa.me/?text=${encodeURIComponent(text)}`;
}
