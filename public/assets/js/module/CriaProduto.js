export default function CriaProduto(e){const n=document.querySelector("#listaProdutos"),c=document.createElement("li"),t=window.location.pathname.replace(".html","").split("/").pop();c.classList.add("produto__item"),c.innerHTML=` \n    <a href="./${t}/${e.path}" class="item__container">\n\n      <figure><img src="./${e.image}" alt="${e.name}"></figure>\n      <div class="item__info">\n        <h2 class="info__nome">${e.name}</h2>\n        <div class="info__preco">\n          <p class="preco__original">${e.specialPrice?e.price.toLocaleString("pt-BR",{style:"currency",currency:"BRL"}):""}</p>\n          <p class="preco__final">${e.specialPrice?e.specialPrice.toLocaleString("pt-BR",{style:"currency",currency:"BRL"}):e.price.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}</p>\n        </div>\n        <buttom class="info__btn">Comprar</buttom>\n      </div>\n    </a>\n  `,n.appendChild(c)}const atualizaProdutos=e=>{};