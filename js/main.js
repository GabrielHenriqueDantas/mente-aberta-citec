document.addEventListener("DOMContentLoaded", () => {
  const btnMenu = document.getElementById("btn-menu");
  const menuPrincipal = document.getElementById("menu-principal");

  if (!btnMenu || !menuPrincipal) return;

  btnMenu.addEventListener("click", () => {
    const aberto = menuPrincipal.classList.toggle("ativo");
    btnMenu.setAttribute("aria-expanded", String(aberto));
  });

  document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape" && menuPrincipal.classList.contains("ativo")) {
      menuPrincipal.classList.remove("ativo");
      btnMenu.setAttribute("aria-expanded", "false");
      btnMenu.focus();
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const htmlEl = document.documentElement;

  const barra = document.createElement("aside");
  barra.className = "barra-acessibilidade";
  barra.setAttribute("aria-label", "Recursos de acessibilidade");

  const btnFonte = document.createElement("button");
  btnFonte.type = "button";
  btnFonte.className = "btn-acess";
  btnFonte.textContent = "A+ Texto";

  const btnContraste = document.createElement("button");
  btnContraste.type = "button";
  btnContraste.className = "btn-acess";
  btnContraste.textContent = "◐ Contraste";

  barra.appendChild(btnFonte);
  barra.appendChild(btnContraste);
  document.body.appendChild(barra);

  function atualizarEstados() {
    const fonteAtiva = htmlEl.classList.contains("fonte-maior");
    const contrasteAtivo = htmlEl.classList.contains("alto-contraste");

    btnFonte.setAttribute("aria-pressed", String(fonteAtiva));
    btnContraste.setAttribute("aria-pressed", String(contrasteAtivo));
  }

  if (localStorage.getItem("menteAberta_fonte") === "true") {
    htmlEl.classList.add("fonte-maior");
  }

  if (localStorage.getItem("menteAberta_contraste") === "true") {
    htmlEl.classList.add("alto-contraste");
  }

  atualizarEstados();

  btnFonte.addEventListener("click", () => {
    const ativo = htmlEl.classList.toggle("fonte-maior");
    localStorage.setItem("menteAberta_fonte", String(ativo));
    atualizarEstados();
  });

  btnContraste.addEventListener("click", () => {
    const ativo = htmlEl.classList.toggle("alto-contraste");
    localStorage.setItem("menteAberta_contraste", String(ativo));
    atualizarEstados();
  });
});