function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("eWCmQ");function u(e,t){return new Promise(((n,o)=>{const r=Math.random()>.3;setTimeout((()=>{r&&n({position:`${e}`,delay:`${t}`}),o({position:`${e}`,delay:`${t}`})}),t)}))}const l=document.querySelector("input[name = delay]"),d=document.querySelector("input[name = step]"),a=document.querySelector("input[name = amount]");document.querySelector(".form").addEventListener("submit",(function(t){const n=Number(l.value),o=Number(d.value),r=Number(a.value);t.preventDefault();let s=n;for(let t=1;t<=r;t+=1)u(t,s).then((({position:t,delay:n})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`,{timeout:5e3,useIcon:!1})})).catch((({position:t,delay:n})=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`,{timeout:5e3,useIcon:!1})})),s=n+t*o}));
//# sourceMappingURL=03-promises.f14c3fea.js.map
