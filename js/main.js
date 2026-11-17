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