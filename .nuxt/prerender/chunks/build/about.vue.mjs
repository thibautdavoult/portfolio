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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-20" }, _attrs))}><h1 class="text-2xl font-medium text-[#0d2b3e] mb-12">About Me</h1><div><ul class="space-y-6"><li class="text-lg text-[#334155]"><span class="font-medium text-[#0d2b3e]">2017-2025:</span> VP Growth Ops @ Livestorm </li><li class="text-lg text-[#334155]"><span class="font-medium text-[#0d2b3e]">Jan 2025:</span> Contributor to &quot;Quand les start-up et licornes réinventent le marketing&quot; </li></ul></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { about as default };
//# sourceMappingURL=about.vue.mjs.map
