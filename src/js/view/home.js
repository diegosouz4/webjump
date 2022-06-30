import { AtualizaMenuAside } from "../module/InitMenu.js";

export default function InitPaginaHome() {
  const app = document.querySelector("#app .container");
  const html = `
    <main class="main main--home">
    <figure>
      <img width="750" height="220" src="https://picsum.photos/seed/picsum/750/250" alt="">
    </figure>

    <h1>Seja bem-vindo!</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime beatae sequi sunt quisquam vel rem, perspiciatis et vitae! Dolore cumque harum ad corrupti sunt eos architecto expedita, omnis repellat assumenda natus autem mollitia quia soluta, minus reprehenderit ipsa? Tenetur voluptate perferendis accusantium quod quisquam qui quibusdam odit culpa praesentium voluptatem tempora, ab, similique sint, ut earum harum sed. Libero impedit doloremque error quasi ratione assumenda, repudiandae, iste dolorum sed aliquid vel adipisci, et illo! Maiores autem ipsa magni veniam omnis? Repudiandae unde repellendus, odio error consectetur mollitia qui dolorem harum ullam consequatur fugit itaque dolor dolores aut nam eaque debitis illum dicta voluptates accusamus officiis? Nulla commodi voluptate, harum dolorum hic ipsum, ratione magni quod, adipisci rem labore amet error!</p>
    </main>

    <aside class="aside">
    <nav class="aside__nav">
      <ul class="nav__menu" data-menu="aside">
        <li><a href="./">Página Inicial</a></li>
        <li><a href="#">Contato</a></li>
      </ul>
    </nav>
    </aside>

    <footer class="footer">
    </footer>
  `;

  document.body.dataset.view = "home";
  document.title = "Webjump";
  app.innerHTML = html;
  AtualizaMenuAside();
}
