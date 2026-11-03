// After `vite build`: render each page to plain HTML and put it inside #root,
// so search engines and AI crawlers see the whole page without JavaScript.
import fs from 'node:fs';
import {render} from './dist-ssr/entry-server.js';

const template = fs.readFileSync('dist/index.html', 'utf8');
if (!template.includes('<div id="root"></div>')) throw new Error('no empty #root in dist/index.html');
const fill = (html) => template.replace('<div id="root"></div>', `<div id="root">${html}</div>`);

fs.writeFileSync('dist/index.html', fill(render('/')));
console.log('prerendered dist/index.html');

// /privacy: served from dist/privacy/index.html, with its own title and address.
let privacy = fill(render('/privacy'))
  .replace(/<title>.*?<\/title>/, '<title>Privacy | Miles To Go</title>')
  .replace(/<meta name="description" content=".*?" \/>/, '<meta name="description" content="What Miles To Go does with the information you give us. Short and plain." />')
  .replace('<link rel="canonical" href="https://milestogoohio.com/" />', '<link rel="canonical" href="https://milestogoohio.com/privacy" />')
  .replace(/(<meta (?:property|name)="(?:og:title|twitter:title)" content=").*?"/g, '$1Privacy | Miles To Go"')
  .replace(/(<meta property="og:url" content=").*?"/, '$1https://milestogoohio.com/privacy"')
  .replace(/\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/, '');
fs.mkdirSync('dist/privacy', {recursive: true});
fs.writeFileSync('dist/privacy/index.html', privacy);
console.log('prerendered dist/privacy/index.html');

fs.rmSync('dist-ssr', {recursive: true, force: true});
