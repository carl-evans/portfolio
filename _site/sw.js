if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise(async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()})),i.then(()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]})},i=(i,r)=>{Promise.all(i.map(e)).then(e=>r(1===e.length?e[0]:e))},r={require:Promise.resolve(i)};self.define=(i,c,n)=>{r[i]||(r[i]=Promise.resolve().then(()=>{let r={};const o={uri:location.origin+i.slice(1)};return Promise.all(c.map(i=>{switch(i){case"exports":return r;case"module":return o;default:return e(i)}})).then(e=>{const i=n(...e);return r.default||(r.default=i),r})}))}}define("./sw.js",["./workbox-c692813c"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"about/index.html",revision:"7e647a0ed12768ebbc56bef5210b6642"},{url:"about/my-story/index.html",revision:"a73309a132f0f749660dcd0b85570321"},{url:"about/outside-dev/index.html",revision:"4eccd11bebc37d211a7ee423f832708f"},{url:"about/personal-roadmap/index.html",revision:"8429ce40239c947ec860a9dee5c2a548"},{url:"career/eyekiller/index.html",revision:"196b000eb0ee527ddccf3ec5029755c5"},{url:"career/freelance/index.html",revision:"58f196da887ff8e2b367547d36959467"},{url:"career/index.html",revision:"5b32098b39b2ff75b145cc274ff6f344"},{url:"career/student/index.html",revision:"f802891a3a8e01778cf2caaf5a1aa1c6"},{url:"contact/index.html",revision:"356f577fe1f597e484ce0d87198cf9b8"},{url:"contact/thanks/index.html",revision:"bcd32f49955fd2df263f6519793dab99"},{url:"cookies/index.html",revision:"b3586e263b25c9cc522ad1acc2fc6844"},{url:"fonts/CircularStd-Bold.woff",revision:"6f4fe3ca482221e7c0d8c1baa5f31100"},{url:"fonts/CircularStd-Bold.woff2",revision:"b26584c8d17834161eb3460b00f2affd"},{url:"fonts/CircularStd-Book.woff",revision:"c47d7e581f2a563f8dedd4509c106fb8"},{url:"fonts/CircularStd-Book.woff2",revision:"35e6fb86d66a830d45e377494420c11b"},{url:"icons/icon-128x128.png",revision:"40972e832ad46c919d60e3cc6604ffe0"},{url:"icons/icon-144x144.png",revision:"7883c6d81c83d2fd3577adfb4efb23f2"},{url:"icons/icon-152x152.png",revision:"a1bdf518c5d398833c554afd42ae4be0"},{url:"icons/icon-192x192.png",revision:"c6850a8651b2d6a3ab93051c01472cbc"},{url:"icons/icon-384x384.png",revision:"0e9dcbbcffe44023db5ca999e30e0357"},{url:"icons/icon-512x512.png",revision:"9b2fe00846d9953fca62f4100b79ccbe"},{url:"icons/icon-72x72.png",revision:"1af89022ea4205e80cb88be334fd3b46"},{url:"icons/icon-96x96.png",revision:"f5d89709142f61655789649b0a2846a3"},{url:"index.html",revision:"f33abd5b9cd70a19ea7ee0594c7ee892"},{url:"manifest.json",revision:"cf6280197390e5d2bcaaf36098432d63"},{url:"privacy-policy/index.html",revision:"9da525fe661b3cf0cc097cf899f6c3a1"},{url:"projects/accordion/index.html",revision:"997f45b5e679c99b7e43d0564390cbae"},{url:"projects/hacktoberfest/index.html",revision:"9f1daebbb7582dabf8805ee0c2079268"},{url:"projects/index.html",revision:"84b9de030526ded3812f76352101ffa7"},{url:"projects/portfolio/index.html",revision:"24204a653d70b62dfb0d84b103cba827"},{url:"projects/wee-css/index.html",revision:"cd587903c5bbbe69639c13c235e73e52"},{url:"terms-and-conditions/index.html",revision:"a040fe44461eca8861ba1131a088980f"},{url:"thoughts/carlevans-dev-is-now-live/index.html",revision:"5ea0c815fd76b6f193d0cb45986fd406"},{url:"thoughts/index.html",revision:"d8a4c4f8ff62a4bc39b54c0bdb6e7b84"},{url:"thoughts/its-nearly-ready/index.html",revision:"ba79a2d7494451c85926734ada25569e"},{url:"thoughts/lighthouse-audits/index.html",revision:"a835fab1b64442058d81cca4922d21a0"},{url:"thoughts/thoughts/carlevans-dev-is-now-live/index.html",revision:"53030b28b5447346980514234b392751"},{url:"thoughts/thoughts/its-nearly-ready/index.html",revision:"cea02f48e76f1c11a6b71a000507b626"}],{})}));
//# sourceMappingURL=sw.js.map
