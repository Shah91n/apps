# apps

Web pages for apps by **Shahin**: support and privacy pages for every app. Kept in the private GitHub repo
`Shah91n/apps` and published free by Cloudflare Pages, which redeploys on every push to `main`.
Link: https://shahinapps.pages.dev/

| Page | URL | Used for |
|---|---|---|
| Home | `/` | List of apps |
| Adwamuha support | `/adwamuha/` | App Store "Support URL", Google Play "Website" |
| Adwamuha privacy | `/adwamuha/privacy/` | App Store and Google Play "Privacy Policy URL" |

Every page is Arabic and English: it opens in the visitor's browser language, has a switch at the top,
and `#ar` / `#en` at the end of a link opens that language directly.

## Structure
```
index.html              home (list of apps)
adwamuha/index.html     support + questions
adwamuha/privacy/       privacy policy
adwamuha/icon.png       app icon
assets/style.css        shared look (same colors as the apps, light + dark)
assets/lang.js          Arabic / English switch
assets/fonts/           IBM Plex Sans Arabic, Amiri Quran and their OFL licences, served from here (no Google Fonts)
```
No cookies, no analytics, nothing loaded from other sites.

## Publishing (one time)
Cloudflare dashboard: **Workers & Pages**, **Create**, **Pages** tab, **Connect to Git**, pick this repo.
Production branch `main`, Framework preset **None**, Build command and Build output directory left empty.

## Changing a page
Edit the HTML, commit and push to `main`. Cloudflare publishes it within a minute or two.
If the privacy policy changes, also update its "Last updated" date (both languages).

## Adding another app
Copy the `adwamuha/` folder to a new folder named after the app, change the texts and icon,
and add a card for it in `index.html`.
