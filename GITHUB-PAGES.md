# GitHub Pages — nasazení stránky

## 1. Vytvořte repozitář na GitHubu

1. [github.com/new](https://github.com/new)
2. Název např. **`tesla-beskydy`**
3. **Public** (Pages zdarma vyžaduje veřejný repozitář u free účtu)
4. **Nevytvářejte** README ani .gitignore — už je v projektu
5. Klikněte **Create repository**

## 2. Nahrajte projekt z terminálu

```bash
cd /Users/jiripodesva/tesla-beskydy

git add .
git commit -m "Tesla Beskydy — landing page"

git branch -M main
git remote add origin https://github.com/VASE-USERNAME/tesla-beskydy.git
git push -u origin main
```

`VASE-USERNAME` nahraďte svým GitHub jménem.

## 3. Zapněte GitHub Pages

1. Repozitář → **Settings** → **Pages**
2. **Build and deployment** → Source: **GitHub Actions**
3. Po prvním pushi běží workflow **Deploy na GitHub Pages** (záložka Actions)

Za 1–2 minuty bude stránka na:

```
https://VASE-USERNAME.github.io/tesla-beskydy/
```

## 4. Formspree (formulář)

Settings → **Secrets and variables** → **Actions** → **New repository secret**:

| Název | Hodnota |
|-------|---------|
| `VITE_FORMSPREE_FORM_ID` | `mdekgenr` |

Pak **Actions** → poslední workflow → **Re-run all jobs**.

## 5. Sdílení manželce ve WhatsApp

```
Ahoj, podívej se na náhled stránky Tesla Beskydy 🚗

https://VASE-USERNAME.github.io/tesla-beskydy/
```

## Vlastní doména (později)

Settings → Pages → **Custom domain** → `teslabeskydy.cz`  
V `.env` a GitHub secret pak nastavte `VITE_SITE_URL=https://teslabeskydy.cz` a `VITE_BASE_PATH=/`
