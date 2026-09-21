/**
 * Mapování vlastních fotek — soubory zatím neexistují.
 * Po nahrání do public/images/ zapněte USE_CUSTOM_PHOTOS v src/config/media.ts.
 */
export const IMAGES = {
  hero: {
    src: "/images/hero-spani-v-tesle.jpg",
    alt: "Tesla Model Y připravená na spaní v Beskydech",
    placeholderLabel: "Hero pozadí",
  },
  whiteExterior: {
    src: "/images/tesla-model-y-profil.jpg",
    alt: "Bílá Tesla Model Y — prémiový vůz pro pronájem",
    placeholderLabel: "Exteriér vozu",
  },
  campingSleep: {
    src: "/images/hero-spani-v-tesle.jpg",
    alt: "Spaní v Tesle — matrace a výhled na hvězdy",
    placeholderLabel: "Spaní v Tesle",
  },
  interior: {
    src: "/images/tesla-logo-detail.jpg",
    alt: "Detail loga Tesla na karoserii",
    placeholderLabel: "Detail Tesla",
  },
  panoramic: {
    src: "/images/tesla-nabijeni.jpg",
    alt: "Tesla Model Y při nabíjení před cestou",
    placeholderLabel: "Nabíjení",
  },
  serviceCamping: {
    src: "/images/hero-spani-v-tesle.jpg",
    alt: "Spaní v Tesle — glamping",
    placeholderLabel: "Glamping",
  },
  serviceDrive: {
    src: "/images/tesla-model-y-profil.jpg",
    alt: "Krátkodobý pronájem Tesla — zážitkové jízdy",
    placeholderLabel: "Zážitkové jízdy",
  },
  serviceEvent: {
    src: "/images/tesla-logo-detail.jpg",
    alt: "Detail Tesly pro svatbu nebo firemní den",
    placeholderLabel: "Svatba / firemní den",
  },
  forest: {
    src: "/images/hero-spani-v-tesle.jpg",
    alt: "Tesla v beskydské přírodě",
    placeholderLabel: "Krajina",
  },
  night: {
    src: "/images/tesla-nabijeni.jpg",
    alt: "Tesla připravená a nabitá na akci",
    placeholderLabel: "Svatba / firemní den",
  },
} as const;

export type ImageKey = keyof typeof IMAGES;
