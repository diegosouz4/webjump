import Api from"./Api.js";export default function InitMenu(){Api("/api/V1/categories/list",montaMenu)}export function AtualizaMenuAside(){Api("/api/V1/categories/list",montaMenuAside)}function montaMenu(e){e.items.forEach((e=>{criaLi(e)}))}function montaMenuAside(e){e.items.forEach((e=>{criaLi(e,"aside")}))}function criaLi(e,i="principal"){const t=`[data-menu=${i}]`,a=document.querySelectorAll(t);a&&a.forEach((i=>{const t=Array.from(i.querySelectorAll("li")).pop(),a=document.createElement("li");a.innerHTML=`<a data-link data-pageid="${e.id}" href="./${e.path}.html" title="${e.name}">${e.name}</a>`,i.append(a),t&&i.append(t)}))}