(()=>{"use strict";const e=document.querySelector(".loader-1"),t=document.querySelectorAll(".loader-2"),n=document.querySelector(".container"),o=(document.querySelectorAll(".box"),document.querySelector(".boxes")),l=document.querySelector("input"),c=document.forms[0],r=document.querySelector(".btnMore"),s=(document.querySelector(".btnSearch"),"QaxOLYJFNjV5katlAPBXlpedw2R2Ovti2SKbFZEI4RU"),a=`https://api.unsplash.com/photos/random?count=28&client_id=${s}`;let u="",i=1;function d(){r.style.display="block",u=l.value,fetch(`https://api.unsplash.com/search/photos?per_page=28&page=${i}&query=${u}&client_id=${s}`).then((e=>e.json())).then((e=>{p(e.results)})).catch((()=>{console.error("XATOLIK YUZ BERDI")}))}function p(e){1===i&&(o.innerHTML=""),e.map((e=>{const t=document.createElement("div");t.classList.add("search"),t.innerHTML=` <img\n\t\tsrc="${e.urls.regular}"\n\t\talt = "${e.urls.regular}"\n\t\tclass="photoBox"\n\t/>`,o.append(t)}))}n.style.display="none",r.style.display="none",setTimeout((()=>{e.style.display="none",n.style.display="block",c.style.display="flex"}),3e3),c.addEventListener("submit",(e=>{e.preventDefault(),i=1,u=l.value,""===u&&alert("Please fill input "),d()})),r.addEventListener("click",(()=>{i++,d(),window.scrollBy({top:1e11,behavior:"smooth"})})),function(){fetch(a).then((e=>e.json())).then((e=>{return t=this,n=void 0,l=function*(){p(e)},new((o=void 0)||(o=Promise))((function(e,c){function r(e){try{a(l.next(e))}catch(e){c(e)}}function s(e){try{a(l.throw(e))}catch(e){c(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(r,s)}a((l=l.apply(t,n||[])).next())}));var t,n,o,l})).catch((()=>{console.error("XATOLIK YUZ BERDI"),t.forEach((e=>{e.style.display="flex"}))}))}()})();