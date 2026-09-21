# Tesla Beskydy — Spaní v Tesle

Premium single-page landing page for Tesla Model Y rental experiences in Velké Karlovice (Beskydy, Czech Republic).

## Stack

- React 19 + TypeScript
- Vite 6
- Tailwind CSS v4
- Lucide React icons

## Setup

```bash
cd tesla-beskydy
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Formspree (rezervační formulář)

1. Vytvořte účet na [formspree.io](https://formspree.io) a nový formulář.
2. Z URL `https://formspree.io/f/xyzabcde` zkopírujte ID (`xyzabcde`).
3. V kořeni projektu vytvořte soubor `.env`:

```bash
cp .env.example .env
```

4. Doplňte:

```
VITE_FORMSPREE_FORM_ID=xyzabcde
```

5. Restartujte dev server (`npm run dev`).

Poptávky pak chodí na e-mail nastavený ve Formspree. Při deployi (Vercel, Netlify…) nastavte stejnou proměnnou prostředí.

## Build

```bash
npm run build
npm run preview
```

## Vlastní fotografie

Ve složce `public/images/` zatím nejsou žádné soubory — jen návod (`README.md`). Po nahrání fotek:

1. Uložte snímky do `public/images/` (názvy viz `public/images/README.md`).
2. V `src/config/media.ts` nastavte `USE_CUSTOM_PHOTOS = true`.
3. Obnovte stránku.

Do zapnutí vlastních fotek se zobrazí prázdné placeholdery (bez jakýchkoli obrázků).

## Structure

- `src/components/TeslaBeskydyLanding.tsx` — page shell
- `SiteImage.tsx` — vlastní fotky / placeholder
- `Navbar`, `Hero`, `SleepingShowcase`, `Services`, `PhotoGallery`, `Specs`, `Pricing`, `BookingForm`, `Footer`
