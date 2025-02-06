import{B as W,ar as D,aa as k,as as $,T as N,aq as q,an as Q,H as X,at as A,b as ee,au as te,h as v,av as x,aw as I,a1 as E,a0 as L,g as u,ax as b,ay as z,az as re,Z as G,aA as M,aB as R,aC as ne,aD as ae,aE as se,aF as oe,aG as ie,aH as ue,d as fe,p as ce,a as de,C as le,n as O,A as _e,af as ve,o as pe,k as he}from"./runtime.bqU6ijX-.js";function Ce(e,t){if(t){const r=document.body;e.autofocus=!0,W(()=>{document.activeElement===r&&e.focus()})}}let F=!1;function ye(){F||(F=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r)})},{capture:!0}))}function U(e){var t=$,r=N;D(null),k(null);try{return e()}finally{D(t),k(r)}}function De(e,t,r,a=r){e.addEventListener(t,()=>U(r));const s=e.__on_r;s?e.__on_r=()=>{s(),a()}:e.__on_r=a,ye()}const Y=new Set,P=new Set;function be(e,t,r,a){function s(n){if(a.capture||T.call(t,n),!n.cancelBubble)return U(()=>r.call(this,n))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?W(()=>{t.addEventListener(e,s,a)}):t.addEventListener(e,s,a),s}function ke(e,t,r,a,s){var n={capture:a,passive:s},o=be(e,t,r,n);(t===document.body||t===window||t===document)&&q(()=>{t.removeEventListener(e,o,n)})}function Re(e){for(var t=0;t<e.length;t++)Y.add(e[t]);for(var r of P)r(e)}function T(e){var B;var t=this,r=t.ownerDocument,a=e.type,s=((B=e.composedPath)==null?void 0:B.call(e))||[],n=s[0]||e.target,o=0,h=e.__root;if(h){var c=s.indexOf(h);if(c!==-1&&(t===document||t===window)){e.__root=t;return}var d=s.indexOf(t);if(d===-1)return;c<=d&&(o=c)}if(n=s[o]||e.target,n!==t){Q(e,"currentTarget",{configurable:!0,get(){return n||r}});var w=$,l=N;D(null),k(null);try{for(var i,f=[];n!==null;){var y=n.assignedSlot||n.parentNode||n.host||null;try{var m=n["__"+a];if(m!==void 0&&!n.disabled)if(X(m)){var[J,...K]=m;J.apply(n,[e,...K])}else m.call(n,e)}catch(S){i?f.push(S):i=S}if(e.cancelBubble||y===t||y===null)break;n=y}if(i){for(let S of f)queueMicrotask(()=>{throw S});throw i}}finally{e.__root=t,delete e.currentTarget,D(w),k(l)}}}let _;function me(){_=void 0}function Ie(e){let t=null,r=v;var a;if(v){for(t=u,_===void 0&&(_=b(document.head));_!==null&&(_.nodeType!==8||_.data!==x);)_=I(_);_===null?E(!1):_=L(I(_))}v||(a=document.head.appendChild(A()));try{ee(()=>e(a),te)}finally{r&&(E(!0),_=u,L(t))}}function j(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function p(e,t){var r=N;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function Me(e,t){var r=(t&z)!==0,a=(t&re)!==0,s,n=!e.startsWith("<!>");return()=>{if(v)return p(u,null),u;s===void 0&&(s=j(n?e:"<!>"+e),r||(s=b(s)));var o=a?document.importNode(s,!0):s.cloneNode(!0);if(r){var h=b(o),c=o.lastChild;p(h,c)}else p(o,o);return o}}function Oe(e,t,r="svg"){var a=!e.startsWith("<!>"),s=(t&z)!==0,n=`<${r}>${a?e:"<!>"+e}</${r}>`,o;return()=>{if(v)return p(u,null),u;if(!o){var h=j(n),c=b(h);if(s)for(o=document.createDocumentFragment();b(c);)o.appendChild(b(c));else o=b(c)}var d=o.cloneNode(!0);if(s){var w=b(d),l=d.lastChild;p(w,l)}else p(d,d);return d}}function Pe(e=""){if(!v){var t=A(e+"");return p(t,t),t}var r=u;return r.nodeType!==3&&(r.before(r=A()),L(r)),p(r,r),r}function He(){if(v)return p(u,null),u;var e=document.createDocumentFragment(),t=document.createComment(""),r=A();return e.append(t,r),p(t,r),e}function Ve(e,t){if(v){N.nodes_end=u,G();return}e!==null&&e.before(t)}function Be(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const ge=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Fe(e){return ge.includes(e)}const Ee={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"};function We(e){return e=e.toLowerCase(),Ee[e]??e}const we=["touchstart","touchmove"];function Te(e){return we.includes(e)}let H=!0;function $e(e){H=e}function qe(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r==null?"":r+"")}function Ae(e,t){return Z(e,t)}function xe(e,t){M(),t.intro=t.intro??!1;const r=t.target,a=v,s=u;try{for(var n=b(r);n&&(n.nodeType!==8||n.data!==x);)n=I(n);if(!n)throw R;E(!0),L(n),G();const o=Z(e,{...t,anchor:n});if(u===null||u.nodeType!==8||u.data!==ne)throw ae(),R;return E(!1),o}catch(o){if(o===R)return t.recover===!1&&se(),M(),oe(r),E(!1),Ae(e,t);throw o}finally{E(a),L(s),me()}}const g=new Map;function Z(e,{target:t,anchor:r,props:a={},events:s,context:n,intro:o=!0}){M();var h=new Set,c=l=>{for(var i=0;i<l.length;i++){var f=l[i];if(!h.has(f)){h.add(f);var y=Te(f);t.addEventListener(f,T,{passive:y});var m=g.get(f);m===void 0?(document.addEventListener(f,T,{passive:y}),g.set(f,1)):g.set(f,m+1)}}};c(ie(Y)),P.add(c);var d=void 0,w=ue(()=>{var l=r??t.appendChild(A());return fe(()=>{if(n){ce({});var i=le;i.c=n}s&&(a.$$events=s),v&&p(l,null),H=o,d=e(l,a)||{},H=!0,v&&(N.nodes_end=u),n&&de()}),()=>{var y;for(var i of h){t.removeEventListener(i,T);var f=g.get(i);--f===0?(document.removeEventListener(i,T),g.delete(i)):g.set(i,f)}P.delete(c),V.delete(d),l!==r&&((y=l.parentNode)==null||y.removeChild(l))}});return V.set(d,w),d}let V=new WeakMap;function ze(e){const t=V.get(e);t&&t()}function Le(e,t,r){if(e==null)return t(void 0),O;const a=_e(()=>e.subscribe(t,r));return a.unsubscribe?()=>a.unsubscribe():a}let C=!1;function Ge(e,t,r){const a=r[t]??(r[t]={store:null,source:ve(void 0),unsubscribe:O});if(a.store!==e)if(a.unsubscribe(),a.store=e??null,e==null)a.source.v=void 0,a.unsubscribe=O;else{var s=!0;a.unsubscribe=Le(e,n=>{s?a.source.v=n:he(a.source,n)}),s=!1}return pe(a.source)}function Ue(e,t){return e.set(t),t}function Ye(){const e={};return q(()=>{for(var t in e)e[t].unsubscribe()}),e}function je(e){var t=C;try{return C=!1,[e(),C]}finally{C=t}}const Ne="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ne);export{H as A,Ve as a,qe as b,Ge as c,He as d,ke as e,Ue as f,Pe as g,je as h,ye as i,Be as j,Re as k,Ce as l,We as m,Oe as n,Fe as o,be as p,Ie as q,xe as r,Ye as s,Me as t,Ae as u,ze as v,De as w,p as x,j as y,$e as z};
