export default function CriaFiltro(filtro, listaProdutos) {
  mostraFiltro(filtro, listaProdutos);
  filtrarPor();
  ativaFiltro();
}

const mostraFiltro = (filtro, listaProdutos) => {
  const aside = document.querySelector(".aside");

  if (!aside) return;

  const filtroDados = Object.entries(filtro);

  filtroDados.forEach((tipoFiltro) => {
    let valorFiltro = [];
    listaProdutos.map((item) => {
      item.filter.map((i) => {
        valorFiltro.push(i[tipoFiltro[0]]);
      });
    });

    const valoresLimpos = valorFiltro.filter(
      (el, i) => valorFiltro.indexOf(el) === i
    );

    const div = document.createElement("div");
    div.classList.add("filtro");
    div.setAttribute("role", "navigation");
    div.dataset.filtrarPor = tipoFiltro[0];
    div.innerHTML = ` <h3>${tipoFiltro[1]}</h3>`;
    aside.appendChild(div);

    const ul = document.createElement("ul");

    valoresLimpos.forEach((valor) => {
      const li = document.createElement("li");
      li.innerHTML = `<a data-${tipoFiltro[0]}=${valor} href="#"><span>${valor}</span></a>`;
      ul.appendChild(li);
    });

    div.appendChild(ul);
  });
};

const filtrarPor = () => {
  const filtros = document.querySelectorAll("[data-filtrar-por]");
  if (!filtros) return;

  filtros.forEach((tipo) => {
    tipo.addEventListener("click", (e) => {
      e.preventDefault();

      const key = e.currentTarget.dataset.filtrarPor;
      const el = e.target;
      const value =
        el.dataset[key] === undefined
          ? el.parentNode.dataset[key]
          : el.dataset[key];

      if (!value) return;

      const busca = `${key}=${value}`;
      let urlAtual = location.href;
      urlAtual = urlAtual.replace(/\&&*/g, "&");

      window.location.search.length === 0
        ? (location.search = busca)
        : window.location.search.match(value)
        ? (location = urlAtual.replace(busca, ""))
        : window.location.search.match(key)
        ? (location = urlAtual.replace(
            location.search.split(key + "=")[1].split("&")[0],
            value
          ))
        : (location = urlAtual + "&" + busca);
    });
  });
};

const ativaFiltro = () => {
  let filtrosAitvos = location.search;
  if (filtrosAitvos.length === 0) return;

  filtrosAitvos = filtrosAitvos.split("?")[1].split("&");

  filtrosAitvos = filtrosAitvos
    .map((el) => {
      let tag = el.split("=");
      if (Number(tag[1])) return null;
      let t = document.querySelector(`[data-${tag[0]}=${tag[1]}]`);
      return t === null ? null : el;
    })
    .filter((el) => el !== null);

  filtrosAitvos.forEach((filtro) => {
    let btnFiltro = document.querySelector(`[data-${filtro}]`);
    btnFiltro.classList.add("ativo");
  });

  crialimpaFiltro();
};

const crialimpaFiltro = () => {
  if (location.search.replace(/\?id\=\d+?\&?/, "").length === 0) return;

  const aside = document.querySelector(".aside");
  const btn = document.createElement("button");

  btn.classList.add("btn", "btn--limpa");
  btn.ariaLabel = "Limpar filtro";
  btn.innerText = "Limpar filtro";

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    let id = location.search.match("id=")
      ? location.search.split("id=")[1].split("&")[0]
      : undefined;
    let url = location.href.replace(location.search, "");
    location.href = id ? url + "?id=" + id : url;
  });

  aside.appendChild(btn);
};
