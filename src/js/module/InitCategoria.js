import Api from "./Api.js";
import CriaFiltro from "./CriaFIltro.js";
import CriaProduto from "./CriaProduto.js";

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
  alteraTextos();
}

const alteraTextos = () => {
  const pathAtual = window.location.pathname
    .replace(".html", "")
    .split("/")
    .pop();

  let breadcrumb = document.querySelector(".breadcrumb");
  const h1 = document.querySelector("h1");
  breadcrumb.innerHTML = breadcrumb.innerHTML + `<p>${pathAtual}</p>`;
  h1.innerText = pathAtual;
};

const carregaProdutos = (json) => {
  const listaFiltros = json.filters;
  let listaProdutos = json.items;

  location.search.replace(/\?id\=\d+?/, "").length > 0 ? (listaProdutos = filtraProdutos(json)) : "";

  if (listaProdutos.length === 0) {
    mostraErro();
    return;
  }

  listaProdutos.forEach((produto) => {
    CriaProduto(produto);
  });

  listaFiltros.forEach((filtro) => {
    CriaFiltro(filtro, json.items);
  });
};

const filtraProdutos = (json) => {
  let listaFiltrosAtivos = location.search.split("?")[1].split("&");
  let filtrosProdutos = Object.entries(json.filters[0]);

  listaFiltrosAtivos = listaFiltrosAtivos
    .map((filtro) => {
      let valores = filtro.split("=");
      if (Number(valores[1])) return null;
      let matches = filtrosProdutos.filter((item) => filtro.match(item[0]));
      return filtro.split("=");
    })
    .filter((filtro) => filtro !== null);

  if (listaFiltrosAtivos.length === 0) return;

  let produtosFiltrados = json.items;

  listaFiltrosAtivos.forEach((tipoFiltro) => {
    produtosFiltrados = produtosFiltrados.filter((produto) => {
      let resultado = produto.filter[0][tipoFiltro[0]] === tipoFiltro[1];

      if (resultado) return produto;
    });
  });

  return produtosFiltrados;
};

const mostraErro = () => {
  const ul = document.querySelector("#listaProdutos");
  const li = document.createElement("li");
  const mensagem = `
    <div class="erro__container"><h2>Lista de produtos não foi encontrada… Tente novamente mais tarde, obrigado</h2></div>
  `;
  li.classList.add("mensagem--erro");
  li.innerHTML = mensagem;

  ul.appendChild(li);
};
