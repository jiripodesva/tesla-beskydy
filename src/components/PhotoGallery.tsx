import { Moon, Sparkles } from "lucide-react";
import { IMAGES } from "../data/images";
import SiteImage from "./SiteImage";

const GALLERY_ITEMS = [
  {
    image: IMAGES.whiteExterior,
    label: "Model Y",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    image: IMAGES.campingSleep,
    label: "Spaní & Camp Mode",
    span: "lg:col-span-2",
  },
  {
    image: IMAGES.interior,
    label: "Interiér",
    span: "",
  },
  {
    image: IMAGES.panoramic,
    label: "Panoramatické sklo",
    span: "",
  },
  {
    image: IMAGES.forest,
    label: "V srdci Beskyd",
    span: "lg:col-span-2",
  },
  {
    image: IMAGES.night,
    label: "Light Show v noci",
    span: "",
  },
];

export default function PhotoGallery() {
  return (
    <section id="galerie" className="relative bg-sky-50/60 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">
            Galerie
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Náš vůz v Beskydech
          </h2>
          <p className="mt-4 text-slate-600">
            Od glampingu pod hvězdami až po světelnou show pro vaši oslavu.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          {GALLERY_ITEMS.map((item) => (
            <figure
              key={item.label}
              className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm ${item.span}`}
            >
              <SiteImage
                src={item.image.src}
                alt={item.image.alt}
                placeholderLabel={item.image.placeholderLabel}
                className="h-full min-h-[220px] w-full object-cover transition duration-500 group-hover:scale-105 lg:min-h-[280px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              <figcaption className="absolute bottom-4 left-4 flex items-center gap-2 text-sm font-semibold text-white">
                {item.label === "Spaní & Camp Mode" && (
                  <Moon className="h-4 w-4 text-sky-300" />
                )}
                {item.label === "Model Y" && (
                  <Sparkles className="h-4 w-4 text-sky-300" />
                )}
                {item.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
