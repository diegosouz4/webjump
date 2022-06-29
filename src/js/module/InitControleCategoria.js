export default function InitControleCategoria() {
  const controles = document.querySelectorAll("[data-layout]");
  const listaProdutos = document.querySelector("#listaProdutos");

  if (!listaProdutos && !controles) return;

  controles.forEach((controle) => {
    controle.addEventListener("click", (e) => {
      e.preventDefault();

      if (controle.dataset.layout === listaProdutos.dataset.layout) return;

      listaProdutos.dataset.layout = controle.dataset.layout;
      controle.classList.toggle("ativo");
    });
  });
}
