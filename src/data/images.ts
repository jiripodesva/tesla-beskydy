/**
 * Mapování vlastních fotek — soubory zatím neexistují.
 * Po nahrání do public/images/ zapněte USE_CUSTOM_PHOTOS v src/config/media.ts.
 */
export const IMAGES = {
  hero: {
    src: "/images/hero.jpg",
    alt: "Tesla Model Y v Beskydech — hlavní fotografie",
    placeholderLabel: "Hero pozadí",
  },
  whiteExterior: {
    src: "/images/exterior-hlavni.jpg",
    alt: "Bílá Tesla Model Y — prémiový vůz pro pronájem",
    placeholderLabel: "Exteriér vozu",
  },
  campingSleep: {
    src: "/images/spani-hlavni.jpg",
    alt: "Spaní v Tesle — matrace a výhled na hvězdy",
    placeholderLabel: "Spaní v Tesle",
  },
  interior: {
    src: "/images/interior-detail.jpg",
    alt: "Interiér Tesla Model Y",
    placeholderLabel: "Interiér",
  },
  panoramic: {
    src: "/images/panoramicke-sklo.jpg",
    alt: "Panoramatické sklo Tesla — výhled na oblohu",
    placeholderLabel: "Panoramatické sklo",
  },
  serviceCamping: {
    src: "/images/sluzba-glamping.jpg",
    alt: "Spaní v Tesle — glamping",
    placeholderLabel: "Glamping",
  },
  serviceDrive: {
    src: "/images/sluzba-pronajem.jpg",
    alt: "Krátkodobý pronájem Tesla — zážitkové jízdy",
    placeholderLabel: "Zážitkové jízdy",
  },
  serviceLightShow: {
    src: "/images/sluzba-light-show.jpg",
    alt: "Tesla Light Show — světelná show",
    placeholderLabel: "Light Show",
  },
  forest: {
    src: "/images/beskydy-krajina.jpg",
    alt: "Tesla v beskydské přírodě",
    placeholderLabel: "Krajina",
  },
  night: {
    src: "/images/light-show-noc.jpg",
    alt: "Tesla Light Show v noci",
    placeholderLabel: "Light Show",
  },
} as const;

export type ImageKey = keyof typeof IMAGES;
