import Api from "../module/api.js";
import InitCategoria from "../module/initCategoria.js";
import InitControleCategoria from "../module/initControleCategoria.js";
import { AtualizaMenuAside } from "../module/initMenu.js";

export default function InitPaginaCategoria() {
  const app = document.querySelector("#app .container");
  if(!app) return;
  document.body.dataset.view = "categoria";

  const html = `
    <div class="breadcrumb"><a href="./">Página inicial</a></div>

    <main class="main main--categoria">
      <h1></h1>

      <nav class="controles">
        <div class="controles__layout">
          <button data-layout="grid" class="controles__icone icone--col"><span>Ver como coluna</span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" xml:space="preserve"><style></style><path fill="#000" d="M7.9 0H1C.5 0 0 .5 0 1v7c0 .6.5 1 1 1h6.9c.6 0 1-.5 1-1V1c.1-.5-.4-1-1-1zM7.9 11.5H1c-.6 0-1 .5-1 1v7c0 .6.5 1 1 1h6.9c.6 0 1-.5 1-1v-7c.1-.5-.4-1-1-1zM7.9 23H1c-.6 0-1 .5-1 1v7c0 .6.5 1 1 1h6.9c.6 0 1-.5 1-1v-7c.1-.5-.4-1-1-1zM19.5 0h-6.9c-.6 0-1 .5-1 1v7c0 .6.5 1 1 1h6.9c.6 0 1-.5 1-1V1c0-.5-.5-1-1-1zM19.5 11.5h-6.9c-.6 0-1 .5-1 1v7c0 .6.5 1 1 1h6.9c.6 0 1-.5 1-1v-7c0-.5-.5-1-1-1zM19.5 23h-6.9c-.6 0-1 .5-1 1v7c0 .6.5 1 1 1h6.9c.6 0 1-.5 1-1v-7c0-.5-.5-1-1-1zM31 0h-6.9c-.6 0-1 .5-1 1v7c0 .6.5 1 1 1H31c.6 0 1-.5 1-1V1c0-.5-.5-1-1-1zM31 11.5h-6.9c-.6 0-1 .5-1 1v7c0 .6.5 1 1 1H31c.6 0 1-.5 1-1v-7c0-.5-.5-1-1-1zM31 23h-6.9c-.6 0-1 .5-1 1v7c0 .6.5 1 1 1H31c.6 0 1-.5 1-1v-7c0-.5-.5-1-1-1z"/></svg></button>
          <button data-layout="list" class="controles__icone icone--row"><span>Ver como linha</span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" xml:space="preserve"><path fill="#000" d="M6.1 0h-5C.5 0 0 .5 0 1.1v5c0 .6.5 1.1 1.1 1.1h5c.6 0 1.1-.5 1.1-1.1v-5C7.2.5 6.7 0 6.1 0zM30.9 1.1H11.5c-.6 0-1.1.5-1.1 1.1v2.7c0 .6.5 1.1 1.1 1.1h19.4c.6 0 1.1-.5 1.1-1.1V2.2c0-.6-.5-1.1-1.1-1.1zM6.1 12.4h-5c-.6 0-1.1.5-1.1 1.1v5c0 .6.5 1.1 1.1 1.1h5c.6 0 1.1-.5 1.1-1.1v-5c0-.6-.5-1.1-1.1-1.1zM30.9 13.6H11.5c-.6 0-1.1.5-1.1 1.1v2.7c0 .6.5 1.1 1.1 1.1h19.4c.6 0 1.1-.5 1.1-1.1v-2.7c0-.6-.5-1.1-1.1-1.1zM6.1 24.8h-5c-.6 0-1.1.5-1.1 1.1v5c0 .6.5 1.1 1.1 1.1h5c.6 0 1.1-.5 1.1-1.1v-5c0-.6-.5-1.1-1.1-1.1zM30.9 26H11.5c-.6 0-1.1.5-1.1 1.1v2.7c0 .6.5 1.1 1.1 1.1h19.4c.6 0 1.1-.5 1.1-1.1v-2.7c0-.6-.5-1.1-1.1-1.1z"/></svg></button>
        </div>
        
        <div class="controles__ordenacao">
        <label for="ordenar">Ordenar por</label>
        <select name="ordenar" id="ordenar">
        <option value="preco">Preço</option>
        <option value="vendido">Mais vendido</option>
        </select>
        </div>
        </nav>
        
        <ul id="listaProdutos" data-layout="grid" class="main__produtos">
        </ul>
        
        <nav class="paginacao">
        <a href="#" class="paginacao__btn btn--prev"><span class="hidden">Página anterior</span></a>
        <a href="#" class="paginacao__btn btn--pagina">1</a>
        <a href="#" class="paginacao__btn btn--pagina">2</a>
        <a href="#" class="paginacao__btn btn--pagina ativo">3</a>
        <a href="#" class="paginacao__btn btn--pagina">4</a>
        <a href="#" class="paginacao__btn btn--pagina">5</a>
        <a href="#" class="paginacao__btn btn--next"><span class="hidden">Próxima página</span></a>
        </nav>
        </main>

    <aside class="aside">
    <h2>Filtre por</h2>
    
    <div class="filtro" role="navigation">
    <h3>Categoria</h3>
    <ul data-menu="aside" class="nav__menu"></ul>
    </div>
    
    </aside>
    
    <footer class="footer">
    </footer>
    `;

  app.innerHTML = html;

  Api("http://localhost:8888/api/V1/categories/list", atualizaInfoPagina);

  InitCategoria();
  InitControleCategoria();
  AtualizaMenuAside();
}

function atualizaInfoPagina(json) {
  const path = location.pathname.split(".html")[0].split("/")[1];
  const info = json.items.filter((categoria) => categoria.path === path)[0];

  document.title = "Webjump | " + info.name;
  document.querySelector("h1").innerText = info.name;
}
