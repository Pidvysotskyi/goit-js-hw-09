var o,e;console.log((o=1,e=5e3,new Promise(((i,s)=>{const l=Math.random()>.3;setTimeout((()=>{l&&i({position:`${o}`,delay:`${e}`}),s({position:`${o}`,delay:`${e}`})}))}),1e3)).then((({position:o,delay:e})=>{console.log(`✅ Fulfilled promise ${o} in ${e}ms`)})).catch((({position:o,delay:e})=>{console.log(`❌ Rejected promise ${o} in ${e}ms`)})));
//# sourceMappingURL=03-promises.9a67cb02.js.map
