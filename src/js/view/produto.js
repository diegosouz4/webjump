import Api from "../module/Api.js";

export default function InitPaginaProduto() {
  initPagina();
}

const initPagina = () => {
  let path =
    location.pathname.replace(".html", "").split("-")[0].replace("/", "") + "-";

  const rotas = {
    "camiseta-": 1,
    "calca-": 2,
    "tenis-": 3,
  };

  const url = `/api/V1/categories/${rotas[path]}`;
  Api(url, puxaDados);
};

const puxaDados = (jsonListaProdutos) => {
  let produto = jsonListaProdutos.items.filter(
    (produto) => produto.path === location.pathname.replace("/", "")
  );
  mostraProduto(produto[0]);
};

const mostraProduto = (jsonProduto) => {
  const app = document.querySelector(".app");
  if (!app) return;

  const produto = jsonProduto;

  document.title = document.title + " | " + produto.name;
  document.body.dataset.view = "produto";

  const html = `
  
  <div class="container">
  <div class="breadcrumb"><a href="./">Página inicial</a><p>${
    produto.name
  }</p></div>
  <main class="main main--produto">
      <div class="produto__imagem">
        <figure><img src="./${produto.image}" alt="${produto.name}"></figure>
      </div>

      <div class="produto__info">
        <h1 class="info__nome">${produto.name}</h1>
        <span class="info__sku">${produto.sku}</span>
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
        <buttom class="btn info__btn">Comprar</buttom>
      </div>

      </main>
      <footer class="footer">
      </footer>
    </div>  
  `;

  app.innerHTML = html;
};
