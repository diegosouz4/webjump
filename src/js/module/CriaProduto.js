export default function CriaProduto(produto) {
  const listaProdutos = document.querySelector("#listaProdutos");
  const li = document.createElement("li");

  const categoria = window.location.pathname
    .replace(".html", "")
    .split("/")
    .pop();

  li.classList.add("produto__item");
  li.innerHTML = ` 
    <a href="./${produto.path}" data-link class="item__container">

      <figure><img src="./${produto.image}" alt="${produto.name}"></figure>
      <div class="item__info">
        <h2 class="info__nome">${produto.name}</h2>
        <div class="info__preco">
          <p class="preco__original">${
            !!produto.specialPrice
              ? produto.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })
              : ""
          }</p>
          <p class="preco__final">${
            !!produto.specialPrice
              ? produto.specialPrice.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })
              : produto.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })
          }</p>
        </div>
        <buttom class="info__btn">Comprar</buttom>
      </div>
    </a>
  `;
  listaProdutos.appendChild(li);
}
