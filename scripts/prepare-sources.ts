// // src\scripts\prepare-sources.ts
// import fs from 'fs/promises';

// const pages = [
//   '/about',
//   '/blog/code-your-future',
//   '/blog/accenture-impact-week',
//   '/portfolio/decision-maker',
//   '/portfolio/Tea-Roulette',
//   '/portfolio/TV-show'

// ];

// async function fetchAndClean(url: string) {
//   const res = await fetch(`http://localhost:5173${url}`); // dev serverda çalıştır
//   const html = await res.text();
//   return html
//     .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
//     .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
//     .replace(/<[^>]*>/g, ' ')
//     .replace(/\s+/g, ' ')
//     .trim();
// }

// (async () => {
//   const data: Record<string, string> = {};
//   for (const page of pages) {
//     data[page] = await fetchAndClean(page);
//   }
//   await fs.writeFile('static/data/sources.json', JSON.stringify(data, null, 2));
//   console.log('✅ sources.json generated');
// })();
