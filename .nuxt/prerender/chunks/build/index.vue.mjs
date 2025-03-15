import { mergeProps, useSSRContext } from 'file:///Users/thibautdavoult/code/perso/portfolio/node_modules/vue/index.mjs';
import { ssrRenderAttrs } from 'file:///Users/thibautdavoult/code/perso/portfolio/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file:///Users/thibautdavoult/code/perso/portfolio/node_modules/hookable/dist/index.mjs';
import 'file:///Users/thibautdavoult/code/perso/portfolio/node_modules/unctx/dist/index.mjs';
import 'file:///Users/thibautdavoult/code/perso/portfolio/node_modules/h3/dist/index.mjs';
import 'file:///Users/thibautdavoult/code/perso/portfolio/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/thibautdavoult/code/perso/portfolio/node_modules/radix3/dist/index.mjs';
import 'file:///Users/thibautdavoult/code/perso/portfolio/node_modules/defu/dist/defu.mjs';
import 'file:///Users/thibautdavoult/code/perso/portfolio/node_modules/ufo/dist/index.mjs';
import '../_/renderer.mjs';
import 'file:///Users/thibautdavoult/code/perso/portfolio/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/thibautdavoult/code/perso/portfolio/node_modules/unhead/dist/server.mjs';
import 'file:///Users/thibautdavoult/code/perso/portfolio/node_modules/unhead/dist/utils.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/thibautdavoult/code/perso/portfolio/node_modules/destr/dist/index.mjs';
import 'file:///Users/thibautdavoult/code/perso/portfolio/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/thibautdavoult/code/perso/portfolio/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/thibautdavoult/code/perso/portfolio/node_modules/klona/dist/index.mjs';
import 'file:///Users/thibautdavoult/code/perso/portfolio/node_modules/scule/dist/index.mjs';
import 'file:///Users/thibautdavoult/code/perso/portfolio/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/thibautdavoult/code/perso/portfolio/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/thibautdavoult/code/perso/portfolio/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/thibautdavoult/code/perso/portfolio/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/thibautdavoult/code/perso/portfolio/node_modules/ohash/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/thibautdavoult/code/perso/portfolio/node_modules/pathe/dist/index.mjs';
import 'file:///Users/thibautdavoult/code/perso/portfolio/node_modules/devalue/index.js';
import 'file:///Users/thibautdavoult/code/perso/portfolio/node_modules/unhead/dist/plugins.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-20" }, _attrs))}><h1 class="text-2xl text-[#0d2b3e] mb-6 font-display"> Growth Marketing Lead and startup advisor in France </h1><p class="text-lg text-[#334155] font-light leading-relaxed text-justify"> Hi 👋, I&#39;m Thibaut, a Growth &amp; Marketing professional with 10+ years of experience in the B2B SaaS industry.<br> I&#39;ve been leading growth and marketing teams, in-office and remote.<br> I work both on marketing strategy and on growth execution. My prefered areas are: SEO, PLG, Account-based outbound (ABM and intent-based), and generally anything that can be automated.<br><br> Find me on <a href="https://www.linkedin.com/in/thibautdavoult/" target="_blank" rel="noopener noreferrer" class="text-[#e65100] hover:text-[#ff6d00] hover:underline transition-all duration-200">LinkedIn</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index.vue.mjs.map
