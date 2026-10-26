# Lucado Services

The storefront site for [Steam Value Checker](https://steamvaluechecker.fly.dev/) and [FanaticalGrabber](https://jacob-lucado.github.io/FanaticalGrabber/), with a placeholder `/shop/`, a privacy policy and terms of use.

Live at https://jacob-lucado.github.io/LucadoServices/ once GitHub Pages is on (Settings, Pages, deploy from branch `main`, folder `/ (root)`).

## Layout

| Path | What |
| --- | --- |
| `index.html` | Home page |
| `shop/index.html` | Shop placeholder (`noindex` until there is something to sell) |
| `privacy.html`, `terms.html` | Legal pages |
| `404.html` | Not-found page (absolute links, because Pages serves it from any path) |
| `assets/css/site.css`, `assets/js/site.js` | Styles and the one small script (the receipt animation) |
| `assets/fonts/` | Self-hosted Inter and Liberation Mono subsets (SIL Open Font License), so the site loads nothing from third parties |
| `assets/img/` | Portrait, logos, wordmarks, social banner and share image |
| `favicon.*`, `apple-touch-icon.png`, `site.webmanifest`, `robots.txt`, `sitemap.xml` | Icons and SEO |

It is plain static HTML and CSS. No build step: edit and push.

## Before you share it

- The **Add to Discord** button links to the bot's dashboard. Swap in the bot's invite URL if you want it to go straight to Discord.
- Update the "Last updated" date on the privacy and terms pages when you change them, and `lastmod` in `sitemap.xml`.
- When the shop is real, remove `noindex` from `shop/index.html`, drop the `Disallow` in `robots.txt` and add it to `sitemap.xml`.

The portrait and artwork are Jacob Lucado's. Please don't reuse them without asking.
