# Dellis website

The brand site for Dellis and Danny the Mighty Diver, hosted free on GitHub Pages at www.dellis.store.

## What's here

| File | What it is |
|---|---|
| `index.html` | The page itself: layout, colors and fonts |
| `data.js` | All the content: books, products, albums, videos, picks, links, logo and images |
| `styles.css` | Colors, fonts and layout shared by every page |
| `picks.html` | Danny's Curated List (books, sensory and STEM, personal care) |
| `404.html` | Sends old Wix addresses (like /about or /faqs) to the right spot |
| `images/` | Logo, About illustration, list images and footer icons (copied from Wix) |
| `.nojekyll` | Tells GitHub to publish the files as they are |

## Changing content

Almost every update happens in `data.js`:

- **Add a product:** copy one product line, then change the name, price, group (`kids`, `adults` or `gear`), store (`printful` or `printify`), image link and product link.
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
