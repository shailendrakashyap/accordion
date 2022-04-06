var app=function(){"use strict";function e(){}function n(e){return e()}function t(){return Object.create(null)}function o(e){e.forEach(n)}function u(e){return"function"==typeof e}function l(e,n){return e!=e?n==n:e!==n||e&&"object"==typeof e||"function"==typeof e}function c(e,n){e.appendChild(n)}function r(e,n,t){e.insertBefore(n,t||null)}function i(e){e.parentNode.removeChild(e)}function a(e,n){for(let t=0;t<e.length;t+=1)e[t]&&e[t].d(n)}function s(e){return document.createElement(e)}function d(e){return document.createTextNode(e)}function f(){return d(" ")}function m(e,n,t,o){return e.addEventListener(n,t,o),()=>e.removeEventListener(n,t,o)}function p(e,n,t){null==t?e.removeAttribute(n):e.getAttribute(n)!==t&&e.setAttribute(n,t)}function h(e,n){n=""+n,e.wholeText!==n&&(e.data=n)}function y(e,n){for(let t=0;t<e.options.length;t+=1){const o=e.options[t];if(o.__value===n)return void(o.selected=!0)}e.selectedIndex=-1}let g;function q(e){g=e}const b=[],w=[],v=[],$=[],_=Promise.resolve();let k=!1;function x(e){v.push(e)}const C=new Set;let E=0;function A(){const e=g;do{for(;E<b.length;){const e=b[E];E++,q(e),B(e.$$)}for(q(null),b.length=0,E=0;w.length;)w.pop()();for(let e=0;e<v.length;e+=1){const n=v[e];C.has(n)||(C.add(n),n())}v.length=0}while(b.length);for(;$.length;)$.pop()();k=!1,C.clear(),q(e)}function B(e){if(null!==e.fragment){e.update(),o(e.before_update);const n=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,n),e.after_update.forEach(x)}}const D=new Set;function F(e,n){-1===e.$$.dirty[0]&&(b.push(e),k||(k=!0,_.then(A)),e.$$.dirty.fill(0)),e.$$.dirty[n/31|0]|=1<<n%31}function G(l,c,r,a,s,d,f,m=[-1]){const p=g;q(l);const h=l.$$={fragment:null,ctx:null,props:d,update:e,not_equal:s,bound:t(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(c.context||(p?p.$$.context:[])),callbacks:t(),dirty:m,skip_bound:!1,root:c.target||p.$$.root};f&&f(h.root);let y=!1;if(h.ctx=r?r(l,c.props||{},((e,n,...t)=>{const o=t.length?t[0]:n;return h.ctx&&s(h.ctx[e],h.ctx[e]=o)&&(!h.skip_bound&&h.bound[e]&&h.bound[e](o),y&&F(l,e)),n})):[],h.update(),y=!0,o(h.before_update),h.fragment=!!a&&a(h.ctx),c.target){if(c.hydrate){const e=function(e){return Array.from(e.childNodes)}(c.target);h.fragment&&h.fragment.l(e),e.forEach(i)}else h.fragment&&h.fragment.c();c.intro&&((b=l.$$.fragment)&&b.i&&(D.delete(b),b.i(w))),function(e,t,l,c){const{fragment:r,on_mount:i,on_destroy:a,after_update:s}=e.$$;r&&r.m(t,l),c||x((()=>{const t=i.map(n).filter(u);a?a.push(...t):o(t),e.$$.on_mount=[]})),s.forEach(x)}(l,c.target,c.anchor,c.customElement),A()}var b,w;q(p)}const M={z:{row:1,column:1},x:{row:1,column:2},c:{row:1,column:3},v:{row:1,column:4},b:{row:1,column:5},n:{row:1,column:6},m:{row:1,column:7},",":{row:1,column:8},".":{row:1,column:9},"/":{row:1,column:10},a:{row:2,column:1},s:{row:2,column:2},d:{row:2,column:3},f:{row:2,column:4},g:{row:2,column:5},h:{row:2,column:6},j:{row:2,column:7},k:{row:2,column:8},l:{row:2,column:9},";":{row:2,column:10},"'":{row:2,column:11},w:{row:3,column:1},e:{row:3,column:2},r:{row:3,column:3},t:{row:3,column:4},y:{row:3,column:5},u:{row:3,column:6},i:{row:3,column:7},o:{row:3,column:8},p:{row:3,column:9},"[":{row:3,column:10}},O=[16.35,32.7,65.41,130.81,261.63,523.25,1046.5,2093,4186.01],T=[17.32,34.65,69.3,138.59,277.18,554.37,1108.73,2217.46,4434.92],j=[18.35,36.71,73.42,146.83,293.66,587.33,1174.66,2349.32,4698.64],L=[19.45,38.89,77.78,155.56,311.13,622.25,1244.51,2489.02,4978.03],H=[20.6,41.2,82.41,164.81,329.63,659.26,1318.51,2637.02],N=[21.83,43.65,87.31,174.61,349.23,698.46,1396.91,2793.83],P=[23.12,46.25,92.5,185,369.99,739.99,1479.98,2959.96],R=[24.5,49,98,196,392,783.99,1567.98,3135.96],S=[25.96,51.91,103.83,207.65,415.3,830.61,1661.22,3322.44],z=[27.5,55,110,220,440,880,1760,3520],I=[29.14,58.27,116.54,233.08,466.16,932.33,1864.66,3729.31],K=[30.87,61.74,123.47,246.94,493.88,987.77,1975.53,3951.07],J=[{id:"1-1-pull",name:"D♭",frequency:T[4]},{id:"1-2-pull",name:"G",frequency:R[3]},{id:"1-3-pull",name:"B♭",frequency:I[3]},{id:"1-4-pull",name:"D",frequency:j[4]},{id:"1-5-pull",name:"E",frequency:H[4]},{id:"1-6-pull",name:"G",frequency:R[4]},{id:"1-7-pull",name:"B♭",frequency:I[4]},{id:"1-8-pull",name:"D",frequency:j[5]},{id:"1-9-pull",name:"E",frequency:H[5]},{id:"1-10-pull",name:"G",frequency:R[5]},{id:"1-1-push",name:"B",frequency:K[3]},{id:"1-2-push",name:"F",frequency:N[3]},{id:"1-3-push",name:"A",frequency:z[3]},{id:"1-4-push",name:"C",frequency:O[4]},{id:"1-5-push",name:"F",frequency:N[4]},{id:"1-6-push",name:"A",frequency:z[4]},{id:"1-7-push",name:"C",frequency:O[5]},{id:"1-8-push",name:"F",frequency:N[5]},{id:"1-9-push",name:"A",frequency:z[5]},{id:"1-10-push",name:"C",frequency:O[6]}],Q=[{id:"2-1-pull",name:"G♭",frequency:P[4]},{id:"2-2-pull",name:"A",frequency:z[3]},{id:"2-3-pull",name:"C",frequency:O[4]},{id:"2-4-pull",name:"E♭",frequency:L[4]},{id:"2-5-pull",name:"G",frequency:R[4]},{id:"2-6-pull",name:"A",frequency:z[4]},{id:"2-7-pull",name:"C",frequency:O[5]},{id:"2-8-pull",name:"E♭",frequency:L[5]},{id:"2-9-pull",name:"G",frequency:R[5]},{id:"2-10-pull",name:"A",frequency:z[5]},{id:"2-11-pull",name:"C",frequency:O[6]},{id:"2-1-push",name:"E",frequency:H[4]},{id:"2-2-push",name:"F",frequency:N[3]},{id:"2-3-push",name:"B♭",frequency:I[3]},{id:"2-4-push",name:"D",frequency:j[4]},{id:"2-5-push",name:"F",frequency:N[4]},{id:"2-6-push",name:"B♭",frequency:I[4]},{id:"2-7-push",name:"D",frequency:j[5]},{id:"2-8-push",name:"F",frequency:N[5]},{id:"2-9-push",name:"B♭",frequency:I[5]},{id:"2-10-push",name:"D",frequency:j[6]},{id:"2-11-push",name:"F",frequency:N[6]}],U=[{id:"3-1-pull",name:"B",frequency:K[4]},{id:"3-2-pull",name:"D",frequency:j[4]},{id:"3-3-pull",name:"F",frequency:N[4]},{id:"3-4-pull",name:"A♭",frequency:S[4]},{id:"3-5-pull",name:"C",frequency:O[5]},{id:"3-6-pull",name:"D",frequency:j[5]},{id:"3-7-pull",name:"F",frequency:N[5]},{id:"3-8-pull",name:"A♭",frequency:S[5]},{id:"3-9-pull",name:"C",frequency:O[6]},{id:"3-10-pull",name:"D",frequency:j[6]},{id:"3-1-push",name:"D♭",frequency:T[4]},{id:"3-2-push",name:"B♭",frequency:I[3]},{id:"3-3-push",name:"E♭",frequency:L[4]},{id:"3-4-push",name:"G",frequency:R[4]},{id:"3-5-push",name:"B♭",frequency:I[4]},{id:"3-6-push",name:"E♭",frequency:L[5]},{id:"3-7-push",name:"G",frequency:R[5]},{id:"3-8-push",name:"B♭",frequency:I[5]},{id:"3-9-push",name:"E♭",frequency:L[6]},{id:"3-10-push",name:"G",frequency:R[6]}],V={one:J,two:Q,three:U},W=[...J,...Q,...U].reduce(((e,n)=>({...e,[n.id]:n})),{}),X=Object.values({1:"one",2:"two",3:"three"});function Y(e,n,t){const o=e.slice();return o[15]=n[t][0],o[16]=n[t][1],o}function Z(e,n,t){const o=e.slice();return o[19]=n[t],o}function ee(e,n,t){const o=e.slice();return o[22]=n[t],o}function ne(e){let n,t,o,l,a,f,y=e[22].name+"";return{c(){n=s("div"),t=d(y),p(n,"class",o="circle "+(e[1][e[22].id]?"active":"")),p(n,"id",l=e[22].id)},m(o,l){r(o,n,l),c(n,t),a||(f=m(n,"mousedown",(function(){u(e[5](e[22].id))&&e[5](e[22].id).apply(this,arguments)})),a=!0)},p(u,c){e=u,1&c&&y!==(y=e[22].name+"")&&h(t,y),3&c&&o!==(o="circle "+(e[1][e[22].id]?"active":""))&&p(n,"class",o),1&c&&l!==(l=e[22].id)&&p(n,"id",l)},d(e){e&&i(n),a=!1,f()}}}function te(e){let n,t,o,u,l,m,h=e[19]+"",y=V[e[19]].filter(e[7]),g=[];for(let n=0;n<y.length;n+=1)g[n]=ne(ee(e,y,n));return{c(){n=s("div"),t=s("h4"),o=d(h),u=f();for(let e=0;e<g.length;e+=1)g[e].c();l=f(),p(n,"class",m="row "+e[19])},m(e,i){r(e,n,i),c(n,t),c(t,o),c(n,u);for(let e=0;e<g.length;e+=1)g[e].m(n,null);c(n,l)},p(e,t){if(35&t){let o;for(y=V[e[19]].filter(e[7]),o=0;o<y.length;o+=1){const u=ee(e,y,o);g[o]?g[o].p(u,t):(g[o]=ne(u),g[o].c(),g[o].m(n,l))}for(;o<g.length;o+=1)g[o].d(1);g.length=y.length}},d(e){e&&i(n),a(g,e)}}}function oe(e){let n,t,o,u,l,a,m,y,g,q,b,w,v=e[16].name+"",$=e[15].split("-")[0]+"",_=e[15].split("-")[1]+"";return{c(){n=s("div"),t=s("div"),o=d(v),u=f(),l=s("div"),a=s("small"),m=d("Row: "),y=d($),g=s("br"),q=d(" Col: "),b=d(_),w=f(),p(t,"class","circle note"),p(n,"class","flex col")},m(e,i){r(e,n,i),c(n,t),c(t,o),c(n,u),c(n,l),c(l,a),c(a,m),c(a,y),c(a,g),c(a,q),c(a,b),c(n,w)},p(e,n){2&n&&v!==(v=e[16].name+"")&&h(o,v),2&n&&$!==($=e[15].split("-")[0]+"")&&h(y,$),2&n&&_!==(_=e[15].split("-")[1]+"")&&h(b,_)},d(e){e&&i(n)}}}function ue(n){let t,u,l,h,g,q,b,w,v,$,_,k,C,E,A,B,D,F,G,M,O,T,j,L,H,N,P,R,S,z,I,K,J,Q,U,V,W,ee,ne,ue,le,ce,re,ie,ae,se,de,fe,me=X,pe=[];for(let e=0;e<me.length;e+=1)pe[e]=te(Z(n,me,e));let he=Object.entries(n[1]),ye=[];for(let e=0;e<he.length;e+=1)ye[e]=oe(Y(n,he,e));return{c(){t=f(),u=s("main"),l=s("div"),h=s("div"),g=s("div");for(let e=0;e<pe.length;e+=1)pe[e].c();q=f(),b=s("div"),b.innerHTML='<h4 style="text-align: right">Bellows <code>→</code></h4>',w=f(),v=s("div"),$=s("h1"),$.textContent="Diatonic Keyboard",_=f(),k=s("h2"),k.textContent="Play the diatonic button accordion with your computer keyboard!",C=f(),E=s("p"),E.innerHTML='Made with 🪗 and 💾 by <a href="https://tania.dev" target="_blank">Tania</a>.<br/> \n        <a href="https://github.com/taniarascia/accordion" target="_blank">Open source</a>.',A=f(),B=s("div"),D=s("div"),F=s("h3"),F.textContent="Direction",G=f(),M=s("select"),O=s("option"),T=d("Pull"),L=s("option"),H=d("Push"),P=f(),R=s("div"),S=s("h3"),S.textContent="Tuning",z=f(),I=s("select"),K=s("option"),K.innerHTML="<h2>FB♭E♭ (Fa)</h2>",J=s("option"),J.innerHTML="<h2>GCF (Sol) Not yet</h2>",Q=s("option"),Q.innerHTML="<h2>EAD (Mi) Not yet</h2>",U=f(),V=s("div"),W=s("h3"),W.textContent="Something broke?",ee=f(),ne=s("button"),ne.textContent="Reset",ue=f(),le=s("div"),le.innerHTML="<h2>How to play</h2> \n        <ul><li>Press <kbd>`</kbd> to toggle pushing the bellows</li> \n          <li>Row 1 starts with <kbd>z</kbd> and ends with <kbd>,</kbd> (comma)</li> \n          <li>Row 2 starts with <kbd>a</kbd> and ends with <kbd>&#39;</kbd> (apostrophe)</li> \n          <li>Row 3 starts with <kbd>w</kbd> and ends with <kbd>[</kbd> (left bracket)</li> \n          <li>Make sure you&#39;re not pressing any other buttons (<kbd>shift</kbd>, <kbd>caps lock</kbd>)</li></ul>",ce=f(),re=s("div"),ie=s("h2"),ie.textContent="Notes",ae=f(),se=s("div");for(let e=0;e<ye.length;e+=1)ye[e].c();p(g,"class","accordion-layout"),O.__value="pull",O.value=O.__value,O.selected=j="pull"===n[0],L.__value="push",L.value=L.__value,L.selected=N="push"===n[0],void 0===n[0]&&x((()=>n[8].call(M))),K.__value="fbe",K.value=K.__value,K.selected=!0,J.__value="gcf",J.value=J.__value,J.disabled=!0,Q.__value="gcf",Q.value=Q.__value,Q.disabled=!0,p(B,"class","flex"),p(se,"class","currently-playing"),p(v,"class","information"),p(l,"class","layout")},m(e,o){r(e,t,o),r(e,u,o),c(u,l),c(l,h),c(h,g);for(let e=0;e<pe.length;e+=1)pe[e].m(g,null);c(h,q),c(h,b),c(l,w),c(l,v),c(v,$),c(v,_),c(v,k),c(v,C),c(v,E),c(v,A),c(v,B),c(B,D),c(D,F),c(D,G),c(D,M),c(M,O),c(O,T),c(M,L),c(L,H),y(M,n[0]),c(B,P),c(B,R),c(R,S),c(R,z),c(R,I),c(I,K),c(I,J),c(I,Q),c(B,U),c(B,V),c(V,W),c(V,ee),c(V,ne),c(v,ue),c(v,le),c(v,ce),c(v,re),c(re,ie),c(re,ae),c(re,se);for(let e=0;e<ye.length;e+=1)ye[e].m(se,null);de||(fe=[m(document.body,"keypress",n[2]),m(document.body,"keyup",n[3]),m(document.body,"mouseup",n[6]),m(M,"change",n[8]),m(M,"change",n[4]),m(ne,"click",n[6])],de=!0)},p(e,[n]){if(35&n){let t;for(me=X,t=0;t<me.length;t+=1){const o=Z(e,me,t);pe[t]?pe[t].p(o,n):(pe[t]=te(o),pe[t].c(),pe[t].m(g,null))}for(;t<pe.length;t+=1)pe[t].d(1);pe.length=me.length}if(1&n&&j!==(j="pull"===e[0])&&(O.selected=j),1&n&&N!==(N="push"===e[0])&&(L.selected=N),1&n&&y(M,e[0]),2&n){let t;for(he=Object.entries(e[1]),t=0;t<he.length;t+=1){const o=Y(e,he,t);ye[t]?ye[t].p(o,n):(ye[t]=oe(o),ye[t].c(),ye[t].m(se,null))}for(;t<ye.length;t+=1)ye[t].d(1);ye.length=he.length}},i:e,o:e,d(e){e&&i(t),e&&i(u),a(pe,e),a(ye,e),de=!1,o(fe)}}}function le(e,n,t){const o=new AudioContext,u=o.createGain();u.gain.value=.1,u.connect(o.destination);let l="pull",c={};function r(e){const{frequency:n}=W[e],t=o.createOscillator();return t.type="square",t.connect(u),t.frequency.value=n,t.start(),{oscillator:t}}function i(e){if(l!==e){t(0,l=e);const n={...c};for(const[t,o]of Object.entries(c)){o.oscillator.stop(),delete n[t];const u=`${t.split("-")[0]}-${t.split("-")[1]}-${e}`,{oscillator:l}=r(u);n[u]={oscillator:l,...W[u]}}t(1,c=n)}}function a(e){if(!c[e]){const{oscillator:n}=r(e);t(1,c[e]={oscillator:n,...W[e]},c)}}return[l,c,function(e){if("`"===e.key)return void i("push");const n=M[e.key];if(n){const{row:e,column:t}=n;a(`${e}-${t}-${l}`)}},function(e){if("`"===e.key)return void i("pull");const n=M[e.key];if(n){const{row:e,column:o}=n,u=`${e}-${o}-${l}`;if(c[u]){!function(e){const{oscillator:n}=c[e];n.stop()}(u);const e={...c};delete e[u],t(1,c=e)}}},function(e){t(0,l=e.target.value)},e=>{a(e)},e=>{for(const[e,n]of Object.entries(c))n.oscillator.stop();t(1,c={})},({id:e})=>e.includes(l),function(){l=function(e){const n=e.querySelector(":checked")||e.options[0];return n&&n.__value}(this),t(0,l)}]}return new class extends class{$destroy(){!function(e,n){const t=e.$$;null!==t.fragment&&(o(t.on_destroy),t.fragment&&t.fragment.d(n),t.on_destroy=t.fragment=null,t.ctx=[])}(this,1),this.$destroy=e}$on(e,n){const t=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return t.push(n),()=>{const e=t.indexOf(n);-1!==e&&t.splice(e,1)}}$set(e){var n;this.$$set&&(n=e,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}{constructor(e){super(),G(this,e,le,ue,l,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map