// After `vite build`: render the app to plain HTML and put it inside #root,
// so search engines and AI crawlers see the whole page without JavaScript.
import fs from 'node:fs';
import {render} from './dist-ssr/entry-server.js';

const file = 'dist/index.html';
const page = fs.readFileSync(file, 'utf8');
if (!page.includes('<div id="root"></div>')) throw new Error('no empty #root in dist/index.html');
fs.writeFileSync(file, page.replace('<div id="root"></div>', `<div id="root">${render()}</div>`));
fs.rmSync('dist-ssr', {recursive: true, force: true});
console.log('prerendered dist/index.html');
