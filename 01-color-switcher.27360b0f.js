const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]");e.addEventListener("click",(function(){o=setInterval((()=>{const n=`#${Math.floor(16777215*Math.random()).toString(16)}`;t.style.backgroundColor=n,e.disabled=!0}),1e3)})),n.addEventListener("click",(function(){clearInterval(o),e.disabled=!1}));let o=null;
//# sourceMappingURL=01-color-switcher.27360b0f.js.map
