export default function CriaFiltro(t,e){mostraFiltro(t,e),filtrarPor(),ativaFiltro()}const mostraFiltro=(t,e)=>{const a=document.querySelector(".aside");if(!a)return;Object.entries(t).forEach((t=>{let r=[];e.map((e=>{e.filter.map((e=>{r.push(e[t[0]])}))}));const l=r.filter(((t,e)=>r.indexOf(t)===e)),i=document.createElement("div");i.classList.add("filtro"),i.setAttribute("role","navigation"),i.dataset.filtrarPor=t[0],i.innerHTML=` <h3>${t[1]}</h3>`,a.appendChild(i);const o=document.createElement("ul");l.forEach((e=>{const a=document.createElement("li");a.innerHTML=`<a data-${t[0]}=${e} href="#"><span>${e}</span></a>`,o.appendChild(a)})),i.appendChild(o)}))},filtrarPor=()=>{const t=document.querySelectorAll("[data-filtrar-por]");t&&t.forEach((t=>{t.addEventListener("click",(t=>{t.preventDefault();const e=t.currentTarget.dataset.filtrarPor,a=t.target,r=void 0===a.dataset[e]?a.parentNode.dataset[e]:a.dataset[e];if(!r)return;const l=`${e}=${r}`;let i=location.href;i=i.replace(/\&&*/g,"&"),0===window.location.search.length?location.search=l:window.location.search.match(r)?location=i.replace(l,""):window.location.search.match(e)?location=i.replace(location.search.split(e+"=")[1].split("&")[0],r):location=i+"&"+l}))}))},ativaFiltro=()=>{let t=location.search;0!==t.length&&(t=t.split("?")[1].split("&"),t=t.map((t=>{let e=t.split("=");return Number(e[1])||null===document.querySelector(`[data-${e[0]}=${e[1]}]`)?null:t})).filter((t=>null!==t)),t.forEach((t=>{document.querySelector(`[data-${t}]`).classList.add("ativo")})),crialimpaFiltro())},crialimpaFiltro=()=>{if(0===location.search.replace(/\?id\=\d+?\&?/,"").length)return;const t=document.querySelector(".aside"),e=document.createElement("button");e.classList.add("btn","btn--limpa"),e.ariaLabel="Limpar filtro",e.innerText="Limpar filtro",e.addEventListener("click",(t=>{t.preventDefault();let e=location.search.match("id=")?location.search.split("id=")[1].split("&")[0]:void 0,a=location.href.replace(location.search,"");location.href=e?a+"?id="+e:a})),t.appendChild(e)};