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

## Putting it online (one time)

1. Create a free account at github.com.
2. Create a new **public** repository named `dellis-site`.
3. Upload every file in this folder (Add file → Upload files), then Commit.
4. Settings → Pages → Source: *Deploy from a branch*, Branch: `main`, folder `/ (root)` → Save.
   The site appears at `https://<your-username>.github.io/dellis-site/` within a few minutes. Review it there while Wix stays live.

## Switching dellis.store over (when you're ready)

At the company that manages the dellis.store domain (Wix → Domains, if it was bought through Wix):

1. For the root domain `dellis.store`, add four **A** records:
   `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
2. For `www`, add a **CNAME** record pointing to `<your-username>.github.io`
3. **Do not touch the MX or TXT records.** Those run the Admin@dellis.store email.
4. Back in GitHub → Settings → Pages, enter `www.dellis.store` as the custom domain, wait for the check to pass, then tick **Enforce HTTPS**. (GitHub adds a `CNAME` file for you. Don't add it earlier, or the preview address will redirect to the old Wix site.)

Changes usually take effect within an hour and can take up to 48 hours.

## Curated List

Edit the `picks` section of `data.js`. Each list has a title, a picture and its items; each item has a name, a short note and an Amazon link.
