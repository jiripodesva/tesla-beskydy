# Sdílení stránky přes WhatsApp

## 1. Nahrajte stránku na internet

WhatsApp umí poslat jen **veřejnou adresu** (ne localhost). Nejjednodušší cesta:

### Netlify Drop (bez registrace, ~2 minuty)

1. V terminálu sestavte stránku:

```bash
cd tesla-beskydy
npm run build
```

2. Otevřete [https://app.netlify.com/drop](https://app.netlify.com/drop)
3. Přetáhněte složku **`dist`** do okna prohlížeče
4. Netlify vám dá adresu typu `https://random-name.netlify.app` — tu sdílejte

### Vlastní doména (volitelně)

V souboru `.env` nastavte finální adresu a znovu sestavte:

```
VITE_SITE_URL=https://teslabeskydy.cz
```

```bash
npm run build
```

## 2. Formspree na produkci

V Netlify / Vercel přidejte proměnnou prostředí:

```
VITE_FORMSPREE_FORM_ID=xkoeaynr
```

Bez ní formulář na živé stránce neodešle e-mail.

## 3. Jak sdílet ve WhatsApp

### Odkaz na stránku

- V patičce klikněte **„Sdílet stránku na WhatsApp“**, nebo
- Ve WhatsApp pošlete adresu stránky (např. `https://vase-stranka.netlify.app`)

WhatsApp zobrazí náhled s názvem, popisem a obrázkem (`og-image.svg`).

### Kontakt přímo vám

- Zelené tlačítko vpravo dole na stránce
- Odkaz **„Napsat na WhatsApp“** v patičce
- Telefon **+420 739 576 989**

## 4. Ukázková zpráva pro zákazníky

```
Ahoj! 🚗✨

Podívej se na Tesla Beskydy — spaní v Tesle, zážitkové jízdy
a Light Show ve Velkých Karlovicích:

https://VASE-ADRESA.cz

Noc od 1 900 Kč · Light Show od 490 Kč
Rezervace přímo na webu nebo napiš mi sem.
```

## 5. Tipy

- Po nahrání fotek do `public/images/` a zapnutí `USE_CUSTOM_PHOTOS` sestavte znovu (`npm run build`)
- Pro lepší náhled ve WhatsApp nahraďte `og-image.svg` fotkou Tesly jako `og-image.jpg` (1200×630 px)
