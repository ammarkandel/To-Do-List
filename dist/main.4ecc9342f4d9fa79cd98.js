(()=>{var e={249:()=>{let e=[];for(let t in localStorage)e.push(t);let t=e.slice(0,e.length-6);const r=document.querySelector(".display-projects");for(let e=0;e<t.length;e++){const n=document.createElement("li");n.setAttribute("data-number",e),n.textContent=t[e],r.appendChild(n)}},665:()=>{document.querySelector(".input").addEventListener("change",(e=>{localStorage.setItem(e.target.value,[])}))}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var l=t[n]={exports:{}};return e[n](l,l.exports,r),l.exports}(()=>{"use strict";r(665),r(249)})()})();