import Api from "./Api.js";

export default function InitCategoria() {
  const listaProdutos = document.querySelector("#listaProdutos");
  if (!listaProdutos) return;

  pegaId();
}

function pegaId() {
  const urlAtual = window.location.search.includes("id=")
    ? window.location.search.split("?")[1].split("&")[0].split("=")[1]
    : window.location.pathname.replace(".html", "").split("/").pop();

  if (!!+urlAtual) {
    pegaIdCategoria(urlAtual);
    return;
  }

  Api("http://localhost:8888/api/V1/categories/list", puxaDados);
}

function puxaDados(json) {
  const pathAtual = window.location.pathname
    .replace(".html", "")
    .split("/")
    .pop();
  const id = json.items.find((el) => el.path === pathAtual).id;

  pegaIdCategoria(id);
}

function pegaIdCategoria(id) {
  let urlFinal = "http://localhost:8888/api/V1/categories/" + `${id}`;
  Api(urlFinal, carregaProdutos);
}

const carregaProdutos = (json) => {
  const listaProdutos = json;

  listaProdutos.items.forEach((produto) => {
    criaProduto(produto);
  });
};

const criaProduto = (produto) => {
  const listaProdutos = document.querySelector("#listaProdutos");
  const li = document.createElement("li");
  li.classList.add("produto__item");
  li.innerHTML = ` 
    <a href="./${produto.path}" class="item__container">

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
};
