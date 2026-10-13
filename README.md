# Dellis website

The brand site for Dellis and Danny the Mighty Diver, hosted free on GitHub Pages at www.dellis.store.

## What's here

| File | What it is |
|---|---|
| `index.html` | The page itself: layout, colors and fonts |
| `products.js` | Shop items, written automatically by the nightly sync (don't edit by hand) |
| `scripts/` | The product sync that reads both stores |
| `data.js` | All the content: books, products, albums, videos, picks, links, logo and images |
| `styles.css` | Colors, fonts and layout shared by every page |
| `picks.html` | Danny's Curated List (books, sensory and STEM, personal care) |
| `404.html` | Sends old Wix addresses (like /about or /faqs) to the right spot |
| `images/` | Logo, About illustration, list images and footer icons (copied from Wix) |
| `.nojekyll` | Tells GitHub to publish the files as they are |

## Changing content

Almost every update happens in `data.js`:

- **Products update themselves.** Every night a GitHub job reads the Printify and Printful stores and refreshes `products.js` (new items, prices, removed items). To refresh right away: GitHub → **Actions** → *Sync products from Printify and Printful* → **Run workflow**. Product names on the site are the names in the stores, so rename them there. Items whose name ends in "copy" are skipped. If a store can't be read, the job stops and the site keeps its last list; GitHub emails you when that happens.
- **Add a book:** add a line to `series.books` (keeps series order) or to `moreBooks`.
- **Add an album:** add its Spotify album ID (the part after `/album/`) to `albums`.
- **Add a video:** add its YouTube ID (the part after `watch?v=`) to `videos`. The first video is the big featured one.

Save the file on GitHub and the live site updates within a minute or two.

## Where it lives

- Live site: https://www.dellis.store (GitHub Pages, custom domain set by the `CNAME` file)
- Domain registration and DNS: Wix (Domains → dellis.store → Manage DNS Records)
  - A records for `dellis.store`: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
  - CNAME `www` → transformativa.github.io
- Email (Admin@dellis.store): Zoho Mail. Leave the MX, SPF, DKIM, DMARC and Zoho verification records alone.

## Curated List

Edit the `picks` section of `data.js`. Each list has a title, a picture and its items; each item has a name, a short note and an Amazon link.

## Analytics

`analytics.js` logs anonymous visits and clicks to the `dellis_events` table in the Supabase project `transformativa`. It records page views, menu/section clicks and outbound link clicks (Amazon, Spotify, Apple Music, YouTube, Printful, Printify, Barnes & Noble, social, email). No cookies or personal data: each browser gets a random ID in localStorage. The key in the file is public and insert-only.

- Exclude your own visits: open the site once with `?notrack=1` (undo with `?notrack=0`).
- Results: Supabase → SQL editor, e.g. `select * from dellis_daily_uniques;`, `select * from dellis_top_clicks;`, `select * from dellis_clicks_by_service;`
