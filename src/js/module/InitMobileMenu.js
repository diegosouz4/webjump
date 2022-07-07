import outsideClick from "./outSideClick.js";

export default function InitMobileMenu() {
  menuMobile();
  buscaMobile();
}

function menuMobile() {
  const menu = document.querySelector('[data-menu="content"]');
  const btn = document.querySelector('[data-menu="btn"]');

  if (!menu && !btn) return;

  btn.addEventListener("click", (e) => {
    e.preventDefault();

    if (menu.classList.contains("open")) {
      menu.classList.remove("open");
      return;
    }

    menu.classList.add("open");

    outsideClick(menu, ["click"], () => {
      menu.classList.remove("open");
    });
  });
}

function buscaMobile() {
  const busca = document.querySelector('[data-busca="content"]');
  const btn = document.querySelector('[data-busca="btn"]');

  if (!busca && !btn) return;

  btn.addEventListener("click", (e) => {
    e.preventDefault();

    if (busca.classList.contains("open")) {
      busca.classList.remove("open");
      return;
    }

    busca.classList.add("open");

    outsideClick(busca, ["click"], () => {
      busca.classList.remove("open");
    });
  });
}
