const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]");e.addEventListener("click",(function(){timerID=setInterval((()=>{backColor=`#${Math.floor(16777215*Math.random()).toString(16)}`,t.style.backgroundColor=backColor,e.disabled=!0}),1e3)})),o.addEventListener("click",(function(){clearInterval(timerID),e.disabled=!1}));
//# sourceMappingURL=01-color-switcher.1c0dd01c.js.map