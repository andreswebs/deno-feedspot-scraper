import { DOMParser } from 'https://deno.land/x/deno_dom/deno-dom-wasm.ts';

const url = 'https://blog.feedspot.com/technology_rss_feeds/';

let tsv = 'Name\tURL\n';

try {
  const res = await fetch(url);
  const html = await res.text();
  const doc: any = new DOMParser().parseFromString(html, 'text/html');
  const blocks: any[] = doc.querySelectorAll('.trow');
  const headers: any[] = doc.querySelectorAll('h3');

  const links: string[] = [];
  const names: string[] = [];

  blocks.forEach((block: any) => {
    const anchor = block.querySelector('a');
    if (anchor) {
      links.push(anchor.attributes.href);
    }
  });

  headers.forEach((h: any) => {
    const anchor = h.querySelector('a');
    if (anchor) {
      names.push(anchor.textContent);
    }
  });

  for (let i = 0; i < names.length; i++) {
    tsv += `${names[i]}\t${links[i]}\n`;
  }

  console.log(tsv);

} catch (error) {
  console.log(error);
}

