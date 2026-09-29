// Reads the public Printful Quick Store and Printify Pop-Up Store and returns
// a product list for the Dellis site. Runs in Node 20+ (GitHub Actions).
// Used by .github/workflows/sync-products.yml via scripts/sync-products.mjs.

export const STORES = {
  printful: "https://dellis.printful.me",
  printify: "https://dellis-store.printify.me",
};

const decodeEntities = (s) =>
  s.replace(/&quot;/g, '"').replace(/&#0?39;/g, "'").replace(/&#x27;/g, "'")
   .replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");

const money = (n) => "$" + Number(n).toFixed(2);

// kids / adults / gear, from the product name
const KIDS = /\b(youth|kids?|toddler|baby|infant|child|children|onesie|bodysuit)\b/;
const GEAR = /\b(backpack|bag|tote|bottle|tumbler|mug|wallet|case|sticker|poster|blanket|pillow|keychain|notebook|mouse ?pad|plush|toy|towel|lunch ?box|cap|hat)\b/;
export function groupFor(name) {
  const n = name.toLowerCase();
  if (KIDS.test(n)) return "kids";
  if (GEAR.test(n)) return "gear";
  return "adults";
}

// Printful: product data is embedded as JSON in the page's data-page attribute.
export function parsePrintful(html, base = STORES.printful) {
  const m = html.match(/data-page="([^"]+)"/);
  if (!m) throw new Error("Printful: product data not found on the page");
  const page = JSON.parse(decodeEntities(m[1]));
  const list = page?.props?.products;
  if (!Array.isArray(list)) throw new Error("Printful: products list missing");
  return list.map((p) => ({
    name: String(p.name).trim(),
    price: "From " + money(p.min_price),
    group: groupFor(p.name),
    store: "printful",
    image: String(p.imageUrl).replace("/products/", "/products/w168/") + "__360",
    link: `${base}/product/${p.slug}`,
  }));
}

// Printify: each product card is server-rendered HTML:
//   <a href="/product/ID"> ... <img src="..." alt="NAME"> ... </a> ... data-testid="variantPrice">$12.34<
export function parsePrintify(html, base = STORES.printify) {
  const out = [];
  const seen = new Set();
  const cardRe = /<a[^>]*href="\/product\/(\d+)"[^>]*>\s*<div[^>]*>\s*<img[^>]*src="([^"]+)"[^>]*alt="([^"]*)"/g;
  let m;
  while ((m = cardRe.exec(html))) {
    const [, id, src, alt] = m;
    if (seen.has(id)) continue;
    seen.add(id);
    const rest = html.slice(cardRe.lastIndex, cardRe.lastIndex + 4000);
    const price = rest.match(/data-testid="variantPrice"[^>]*>([^<]+)</);
    const image = decodeEntities(src).replace(/([?&])revision=\d+&?/, "$1").replace(/[?&]$/, "");
    const name = decodeEntities(alt).trim();
    out.push({
      name,
      price: price ? decodeEntities(price[1]).trim() : "",
      group: groupFor(name),
      store: "printify",
      image,
      link: `${base}/product/${id}`,
    });
  }
  return out;
}

// Printify paginates /products; follow ?page=N until a page adds nothing new.
export async function fetchPrintify(fetchText) {
  const all = [];
  const ids = new Set();
  for (let page = 1; page <= 20; page++) {
    const html = await fetchText(`${STORES.printify}/products${page > 1 ? `?page=${page}` : ""}`);
    const items = parsePrintify(html).filter((p) => !ids.has(p.link));
    if (!items.length) break;
    items.forEach((p) => { ids.add(p.link); all.push(p); });
  }
  return all;
}

// Printify's sitemap lists every published product; used to check nothing was missed.
export async function printifySitemapIds(fetchText) {
  const xml = await fetchText(`${STORES.printify}/sitemap.xml`);
  return [...new Set([...xml.matchAll(/\/product\/(\d+)/g)].map((m) => m[1]))];
}

export async function fetchPrintful(fetchText) {
  return parsePrintful(await fetchText(STORES.printful + "/"));
}
