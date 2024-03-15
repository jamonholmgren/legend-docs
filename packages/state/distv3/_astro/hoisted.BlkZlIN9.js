function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
class v extends HTMLElement{constructor(){super();const e=this.querySelector("select");e&&e.addEventListener("change",s=>{s.currentTarget instanceof HTMLSelectElement&&(window.location.pathname=s.currentTarget.value)})}}customElements.define("starlight-lang-select",v);const S="modulepreload",y=function(u){return"/open-source/state/v3/"+u},p={},b=function(e,s,o){let l=Promise.resolve();if(s&&s.length>0){const i=document.getElementsByTagName("link");l=Promise.all(s.map(r=>{if(r=y(r),r in p)return;p[r]=!0;const c=r.endsWith(".css"),m=c?'[rel="stylesheet"]':"";if(!!o)for(let a=i.length-1;a>=0;a--){const n=i[a];if(n.href===r&&(!c||n.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${m}`))return;const t=document.createElement("link");if(t.rel=c?"stylesheet":S,c||(t.as="script",t.crossOrigin=""),t.href=r,document.head.appendChild(t),c)return new Promise((a,n)=>{t.addEventListener("load",a),t.addEventListener("error",()=>n(new Error(`Unable to preload CSS for ${r}`)))})}))}return l.then(()=>e()).catch(i=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=i,window.dispatchEvent(r),!r.defaultPrevented)throw i})};class w extends HTMLElement{constructor(){super();const e=this.querySelector("button[data-open-modal]"),s=this.querySelector("button[data-close-modal]"),o=this.querySelector("dialog"),l=this.querySelector(".dialog-frame"),i=n=>{("href"in(n.target||{})||document.body.contains(n.target)&&!l.contains(n.target))&&c()},r=n=>{o.showModal(),document.body.toggleAttribute("data-search-modal-open",!0),this.querySelector("input")?.focus(),n?.stopPropagation(),window.addEventListener("click",i)},c=()=>o.close();e.addEventListener("click",r),e.disabled=!1,s.addEventListener("click",c),o.addEventListener("close",()=>{document.body.toggleAttribute("data-search-modal-open",!1),window.removeEventListener("click",i)}),window.addEventListener("keydown",n=>{const d=document.activeElement instanceof HTMLElement&&(["input","select","textarea"].includes(document.activeElement.tagName.toLowerCase())||document.activeElement.isContentEditable);n.metaKey===!0&&n.key==="k"?(o.open?c():r(),n.preventDefault()):n.key==="/"&&!o.open&&!d&&(r(),n.preventDefault())});let m={};try{m=JSON.parse(this.dataset.translations||"{}")}catch{}const a=this.dataset.stripTrailingSlash!==void 0?n=>n.replace(/(.)\/(#.*)?$/,"$1$2"):n=>n;window.addEventListener("DOMContentLoaded",()=>{(window.requestIdleCallback||(d=>setTimeout(d,1)))(async()=>{const{PagefindUI:d}=await b(()=>import("./ui-core.DGz9wfXo.js"),__vite__mapDeps([]));new d({element:"#starlight__search",baseUrl:"/open-source/state/v3",bundlePath:"/open-source/state/v3".replace(/\/$/,"")+"/pagefind/",showImages:!1,translations:m,showSubResults:!0,processResult:h=>{h.url=a(h.url),h.sub_results=h.sub_results.map(g=>(g.url=a(g.url),g))}})})})}}customElements.define("site-search",w);class L extends HTMLElement{#e="starlight-theme";constructor(){super(),this.#n(this.#o());const e=this.querySelector("select");e&&e.addEventListener("change",s=>{s.currentTarget instanceof HTMLSelectElement&&this.#n(this.#t(s.currentTarget.value))})}#t(e){return e==="auto"||e==="dark"||e==="light"?e:"auto"}#s(){return matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}#n(e){StarlightThemeProvider.updatePickers(e),document.documentElement.dataset.theme=e==="auto"?this.#s():e,this.#r(e)}#r(e){typeof localStorage<"u"&&(e==="light"||e==="dark"?localStorage.setItem(this.#e,e):localStorage.removeItem(this.#e))}#o(){const e=typeof localStorage<"u"&&localStorage.getItem(this.#e);return this.#t(e)}}customElements.define("starlight-theme-select",L);const T="_top";class E extends HTMLElement{constructor(){super(),this._current=this.querySelector('a[aria-current="true"]'),this.minH=parseInt(this.dataset.minH||"2",10),this.maxH=parseInt(this.dataset.maxH||"3",10);const e=[...this.querySelectorAll("a")],s=t=>{if(t instanceof HTMLHeadingElement){if(t.id===T)return!0;const a=t.tagName[1];if(a){const n=parseInt(a,10);if(n>=this.minH&&n<=this.maxH)return!0}}return!1},o=t=>{if(!t)return null;const a=t;for(;t;){if(s(t))return t;for(t=t.previousElementSibling;t?.lastElementChild;)t=t.lastElementChild;const n=o(t);if(n)return n}return o(a.parentElement)},l=t=>{for(const{isIntersecting:a,target:n}of t){if(!a)continue;const d=o(n);if(!d)continue;const h=e.find(g=>g.hash==="#"+encodeURIComponent(d.id));if(h){this.current=h;break}}},i=document.querySelectorAll("main [id], main [id] ~ *, main .content > *");let r;const c=()=>{r&&r.disconnect(),r=new IntersectionObserver(l,{rootMargin:this.getRootMargin()}),i.forEach(t=>r.observe(t))};c();const m=window.requestIdleCallback||(t=>setTimeout(t,1));let f;window.addEventListener("resize",()=>{r&&r.disconnect(),clearTimeout(f),f=setTimeout(()=>m(c),200)})}set current(e){e!==this._current&&(this._current&&this._current.removeAttribute("aria-current"),e.setAttribute("aria-current","true"),this._current=e)}getRootMargin(){const e=document.querySelector("header")?.getBoundingClientRect().height||0,s=this.querySelector("summary")?.getBoundingClientRect().height||0,o=e+s+32,l=o+53,i=document.documentElement.clientHeight;return`-${o}px 0% ${l-i}px`}}customElements.define("starlight-toc",E);class k extends E{set current(e){super.current=e;const s=this.querySelector(".display-current");s&&(s.textContent=e.textContent)}constructor(){super();const e=this.querySelector("details");if(!e)return;const s=()=>{e.open=!1};e.querySelectorAll("a").forEach(o=>{o.addEventListener("click",s)}),window.addEventListener("click",o=>{e.contains(o.target)||s()}),window.addEventListener("keydown",o=>{if(o.key==="Escape"&&e.open){const l=e.contains(document.activeElement);if(s(),l){const i=e.querySelector("summary");i&&i.focus()}}})}}customElements.define("mobile-starlight-toc",k);class x extends HTMLElement{constructor(){super(),this.btn=this.querySelector("button"),this.btn.addEventListener("click",()=>this.toggleExpanded());const e=this.closest("nav");e&&e.addEventListener("keyup",s=>this.closeOnEscape(s))}setExpanded(e){this.setAttribute("aria-expanded",String(e)),document.body.toggleAttribute("data-mobile-menu-expanded",e)}toggleExpanded(){this.setExpanded(this.getAttribute("aria-expanded")!=="true")}closeOnEscape(e){e.code==="Escape"&&(this.setExpanded(!1),this.btn.focus())}}customElements.define("starlight-menu-button",x);export{b as _};