<div align="center">

<img src="assets/img/banner-1500x500.png" alt="Lucado Services: small tools for big game libraries" width="760">

# Lucado Services

**Free tools for people who buy a lot of PC games.**

[Website](https://jacob-lucado.github.io/LucadoServices/) · [Steam Value Checker](https://steamvaluechecker.fly.dev/) · [FanaticalGrabber](https://jacob-lucado.github.io/FanaticalGrabber/) · [Privacy](https://jacob-lucado.github.io/LucadoServices/privacy.html) · [Terms](https://jacob-lucado.github.io/LucadoServices/terms.html)

</div>

---

## What this is

Lucado Services is the home for the software I build around PC game libraries. This repository is the **website**: a storefront-style landing page that presents each tool, explains how they work together, and links to their own pages, privacy policies and source code. It also holds a placeholder shop page for when I have something to sell.

The tools themselves live in their own repositories:

| Tool | What it does | Where it lives |
| --- | --- | --- |
| **Steam Value Checker** | A Discord bot and web dashboard. Give it a list of games or an export file and it prices your library: MSRP, current Steam price, cheapest store today and all-time low, plus what you saved. It also tracks wishlists and sends alerts for sales, free games and bundles, and runs server features such as a shared wishlist, a savings leaderboard and key giveaways. | [steamvaluechecker.fly.dev](https://steamvaluechecker.fly.dev/) (dashboard). Source: [GitHub](https://github.com/Jacob-Lucado/SteamValueChecker) |
| **FanaticalGrabber** | A Chrome extension that reveals the game keys in your own Fanatical orders, exports them to TXT, CSV, JSON, Markdown, HTML or Excel, and can redeem them on Steam (beta). Everything runs in your browser. | [jacob-lucado.github.io/FanaticalGrabber](https://jacob-lucado.github.io/FanaticalGrabber/) (website and download). Source: [GitHub](https://github.com/Jacob-Lucado/FanaticalGrabber) |

### How they fit together

1. Export your keys with **FanaticalGrabber**.
2. Send that file to **Steam Value Checker** with `/value` (or `/library import` to keep the games on record). Only the game titles are read.
3. See what the library is worth, then add the games you still want to your wishlist and get told when they drop.

Each tool works fine on its own.

## What's on the site

| Page | Purpose |
| --- | --- |
| Home (`index.html`) | The sales page: what each tool does, an example report, how they connect, who makes them, and an FAQ |
| Shop (`shop/index.html`) | Placeholder only. Nothing is for sale and nothing takes payments. Hidden from search engines until it's real |
| Privacy policy (`privacy.html`) | What the website collects (nothing), who hosts it, and where to find each tool's own policy |
| Terms of use (`terms.html`) | Terms for the website and both tools, including the not-affiliated notice and a limit on liability |
| Not found (`404.html`) | A friendly dead-end with links back |

The site has no accounts, forms, cookies or analytics, and loads no third-party scripts or fonts.

## How it's built

Plain static HTML and CSS with one small script (the receipt animation on the home page). There is no framework and no build step, so you edit a file and push.

```
index.html  shop/  privacy.html  terms.html  404.html
assets/
  css/site.css        one stylesheet, design tokens at the top
  js/site.js          receipt print and count-up (optional; the page works without it)
  fonts/              Inter and Liberation Mono subsets, self-hosted
  img/                portrait, logos, wordmarks, banner, share image, icons
favicon.ico  favicon.svg  favicon-32.png  apple-touch-icon.png
site.webmanifest  robots.txt  sitemap.xml
```

- **Design:** palette taken from the portrait (hair orange, respirator teal, lens cyan). Headlines are Inter Display, body is Inter, and the receipt uses a monospace face.
- **Accessibility:** keyboard focus is visible, there is a skip link, colors meet contrast guidelines, and the animation is turned off for people who prefer reduced motion.
- **SEO:** page titles and descriptions, canonical URLs, Open Graph and X cards, structured data for the site, the person and both apps, a sitemap and `robots.txt`.

### Run it locally

```sh
python3 -m http.server 4173
# then open http://localhost:4173
```

### Deploy

GitHub Pages serves it straight from the `main` branch, root folder (Settings, Pages). Every push to `main` goes live in a minute or two.

## When you change things

- Update the "Last updated" date on the privacy and terms pages when their text changes, and `lastmod` in `sitemap.xml`.
- When the shop is real: remove `noindex` from `shop/index.html`, drop the `Disallow` line in `robots.txt`, add the page to `sitemap.xml`, and update the privacy policy and terms to cover payments before it goes live.
- The **Add to Discord** button on the home page links to the bot's dashboard. Point it at the bot's invite URL if you want it to go straight to Discord.

## Credits and licensing

Made by [Jacob Lucado](https://x.com/twit_user69). The website's design, text and images, including the portrait, are mine, so please don't reuse them without asking. Fonts are Inter and Liberation Mono, both under the SIL Open Font License. Each tool has its own license in its own repository.

Steam Value Checker and FanaticalGrabber are independent projects. They are not affiliated with, endorsed by or sponsored by Valve, Steam, Fanatical, Bundle Stars, Discord or IsThereAnyDeal. All names and trademarks belong to their owners.
