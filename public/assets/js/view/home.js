import{AtualizaMenuAside}from"../module/initMenu.js";export default function InitPaginaHome(){var e=document.querySelector("#app .container");if(e){document.body.dataset.view="home",document.title="Webjump",e.innerHTML='\n    <main class="main main--home">\n    <figure>\n      <img width="750" height="220" src="https://picsum.photos/seed/picsum/750/250" alt="">\n    </figure>\n\n    <h1>Seja bem-vindo!</h1>\n    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime beatae sequi sunt quisquam vel rem, perspiciatis et vitae! Dolore cumque harum ad corrupti sunt eos architecto expedita, omnis repellat assumenda natus autem mollitia quia soluta, minus reprehenderit ipsa? Tenetur voluptate perferendis accusantium quod quisquam qui quibusdam odit culpa praesentium voluptatem tempora, ab, similique sint, ut earum harum sed. Libero impedit doloremque error quasi ratione assumenda, repudiandae, iste dolorum sed aliquid vel adipisci, et illo! Maiores autem ipsa magni veniam omnis? Repudiandae unde repellendus, odio error consectetur mollitia qui dolorem harum ullam consequatur fugit itaque dolor dolores aut nam eaque debitis illum dicta voluptates accusamus officiis? Nulla commodi voluptate, harum dolorum hic ipsum, ratione magni quod, adipisci rem labore amet error!</p>\n    </main>\n\n    <aside class="aside">\n    <nav class="aside__nav">\n      <ul class="nav__menu" data-menu="aside">\n        <li><a href="./">Página Inicial</a></li>\n        <li><a href="#">Contato</a></li>\n      </ul>\n    </nav>\n    </aside>\n\n    <footer class="footer">\n    </footer>\n  ',AtualizaMenuAside()}}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcvaG9tZS5qcyJdLCJuYW1lcyI6WyJBdHVhbGl6YU1lbnVBc2lkZSIsIkluaXRQYWdpbmFIb21lIiwiYXBwIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYm9keSIsImRhdGFzZXQiLCJ2aWV3IiwidGl0bGUiLCJpbm5lckhUTUwiXSwibWFwcGluZ3MiOiJPQUFTQSxzQkFBeUIsdUNBRW5CLFNBQVNDLGlCQUN0QixJQUFNQyxFQUFNQyxTQUFTQyxjQUFjLG1CQUNuQyxHQUFLRixFQUFMLENBeUJBQyxTQUFTRSxLQUFLQyxRQUFRQyxLQUFPLE9BQzdCSixTQUFTSyxNQUFRLFVBQ2pCTixFQUFJTyxVQXpCTSxtMkNBMEJWVCIsImZpbGUiOiJ2aWV3L2hvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdHVhbGl6YU1lbnVBc2lkZSB9IGZyb20gXCIuLi9tb2R1bGUvaW5pdE1lbnUuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluaXRQYWdpbmFIb21lKCkge1xyXG4gIGNvbnN0IGFwcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXBwIC5jb250YWluZXJcIik7XHJcbiAgaWYgKCFhcHApIHJldHVybjtcclxuXHJcbiAgY29uc3QgaHRtbCA9IGBcclxuICAgIDxtYWluIGNsYXNzPVwibWFpbiBtYWluLS1ob21lXCI+XHJcbiAgICA8ZmlndXJlPlxyXG4gICAgICA8aW1nIHdpZHRoPVwiNzUwXCIgaGVpZ2h0PVwiMjIwXCIgc3JjPVwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL3NlZWQvcGljc3VtLzc1MC8yNTBcIiBhbHQ9XCJcIj5cclxuICAgIDwvZmlndXJlPlxyXG5cclxuICAgIDxoMT5TZWphIGJlbS12aW5kbyE8L2gxPlxyXG4gICAgPHA+TG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIE1heGltZSBiZWF0YWUgc2VxdWkgc3VudCBxdWlzcXVhbSB2ZWwgcmVtLCBwZXJzcGljaWF0aXMgZXQgdml0YWUhIERvbG9yZSBjdW1xdWUgaGFydW0gYWQgY29ycnVwdGkgc3VudCBlb3MgYXJjaGl0ZWN0byBleHBlZGl0YSwgb21uaXMgcmVwZWxsYXQgYXNzdW1lbmRhIG5hdHVzIGF1dGVtIG1vbGxpdGlhIHF1aWEgc29sdXRhLCBtaW51cyByZXByZWhlbmRlcml0IGlwc2E/IFRlbmV0dXIgdm9sdXB0YXRlIHBlcmZlcmVuZGlzIGFjY3VzYW50aXVtIHF1b2QgcXVpc3F1YW0gcXVpIHF1aWJ1c2RhbSBvZGl0IGN1bHBhIHByYWVzZW50aXVtIHZvbHVwdGF0ZW0gdGVtcG9yYSwgYWIsIHNpbWlsaXF1ZSBzaW50LCB1dCBlYXJ1bSBoYXJ1bSBzZWQuIExpYmVybyBpbXBlZGl0IGRvbG9yZW1xdWUgZXJyb3IgcXVhc2kgcmF0aW9uZSBhc3N1bWVuZGEsIHJlcHVkaWFuZGFlLCBpc3RlIGRvbG9ydW0gc2VkIGFsaXF1aWQgdmVsIGFkaXBpc2NpLCBldCBpbGxvISBNYWlvcmVzIGF1dGVtIGlwc2EgbWFnbmkgdmVuaWFtIG9tbmlzPyBSZXB1ZGlhbmRhZSB1bmRlIHJlcGVsbGVuZHVzLCBvZGlvIGVycm9yIGNvbnNlY3RldHVyIG1vbGxpdGlhIHF1aSBkb2xvcmVtIGhhcnVtIHVsbGFtIGNvbnNlcXVhdHVyIGZ1Z2l0IGl0YXF1ZSBkb2xvciBkb2xvcmVzIGF1dCBuYW0gZWFxdWUgZGViaXRpcyBpbGx1bSBkaWN0YSB2b2x1cHRhdGVzIGFjY3VzYW11cyBvZmZpY2lpcz8gTnVsbGEgY29tbW9kaSB2b2x1cHRhdGUsIGhhcnVtIGRvbG9ydW0gaGljIGlwc3VtLCByYXRpb25lIG1hZ25pIHF1b2QsIGFkaXBpc2NpIHJlbSBsYWJvcmUgYW1ldCBlcnJvciE8L3A+XHJcbiAgICA8L21haW4+XHJcblxyXG4gICAgPGFzaWRlIGNsYXNzPVwiYXNpZGVcIj5cclxuICAgIDxuYXYgY2xhc3M9XCJhc2lkZV9fbmF2XCI+XHJcbiAgICAgIDx1bCBjbGFzcz1cIm5hdl9fbWVudVwiIGRhdGEtbWVudT1cImFzaWRlXCI+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCIuL1wiPlDDoWdpbmEgSW5pY2lhbDwvYT48L2xpPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkNvbnRhdG88L2E+PC9saT5cclxuICAgICAgPC91bD5cclxuICAgIDwvbmF2PlxyXG4gICAgPC9hc2lkZT5cclxuXHJcbiAgICA8Zm9vdGVyIGNsYXNzPVwiZm9vdGVyXCI+XHJcbiAgICA8L2Zvb3Rlcj5cclxuICBgO1xyXG5cclxuICBkb2N1bWVudC5ib2R5LmRhdGFzZXQudmlldyA9IFwiaG9tZVwiO1xyXG4gIGRvY3VtZW50LnRpdGxlID0gXCJXZWJqdW1wXCI7XHJcbiAgYXBwLmlubmVySFRNTCA9IGh0bWw7XHJcbiAgQXR1YWxpemFNZW51QXNpZGUoKTtcclxufVxyXG4iXX0=
