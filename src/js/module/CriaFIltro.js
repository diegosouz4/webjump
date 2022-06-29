export default function CriaFiltro(filtro, listaProdutos) {
  const aside = document.querySelector(".aside");

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

  filtrarPor();
}

const filtrarPor = () => {
  const filtros = document.querySelectorAll("[data-filtrar-por]");

  filtros.forEach((tipo) => {
    tipo.addEventListener("click", (e) => {
      e.preventDefault();

      const key = e.currentTarget.dataset.filtrarPor;
      const el = e.target;
      const value = el.dataset[key];

      if (!value) return;

      const busca = `${key}=${value}`;
      if (el.classList.contains("ativo")) {
        el.classList.remove("ativo");
        // location.assign(location.href.split("color=")[0]);
        return;
      }

      el.classList.add("ativo");
      // location.search = busca;
    });
  });
};
