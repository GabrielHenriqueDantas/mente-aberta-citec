document.addEventListener("DOMContentLoaded", () => {
  const campoBusca = document.getElementById("campo-busca");
  const filtroCategoria = document.getElementById("filtro-categoria");
  const filtroPerfil = document.getElementById("filtro-perfil");
  const listaContainer = document.getElementById("lista-oportunidades");
  const contador = document.getElementById("contador-resultados");

  if (!listaContainer) return;

  function renderizarCards(lista) {
    listaContainer.innerHTML = "";
    contador.textContent = `${lista.length} oportunidade(s) encontrada(s).`;

    if (lista.length === 0) {
      const vazio = document.createElement("p");
      vazio.className = "card";
      vazio.textContent = "Nenhuma oportunidade encontrada para os filtros selecionados.";
      listaContainer.appendChild(vazio);
      return;
    }

    lista.forEach((item) => {
      const artigo = document.createElement("article");
      artigo.className = "card";

      artigo.innerHTML = `
        <div>
          <span class="tag">${item.categoria}</span>
          <span class="tag">${item.perfil}</span>
          <span class="tag">${item.modalidade}</span>
        </div>
        <h2>${item.titulo}</h2>
        <p><strong>Onde:</strong> ${item.instituicao}</p>
        <p>${item.descricao}</p>
        <p><small><strong>Fonte:</strong> ${item.fonte}</small></p>
        <a href="como-acessar.html?id=${item.id}" class="btn">Ver passo a passo e documentos</a>
      `;

      listaContainer.appendChild(artigo);
    });
  }

  function filtrarOportunidades() {
    const termo = campoBusca.value.trim().toLowerCase();
    const categoria = filtroCategoria.value;
    const perfil = filtroPerfil.value;

    const filtradas = OPORTUNIDADES.filter((item) => {
      const bateTexto =
        item.titulo.toLowerCase().includes(termo) ||
        item.descricao.toLowerCase().includes(termo) ||
        item.instituicao.toLowerCase().includes(termo);
      const bateCategoria = categoria === "Todos" || item.categoria === categoria;
      const batePerfil = perfil === "Todos" || item.perfil === perfil;

      return bateTexto && bateCategoria && batePerfil;
    });

    renderizarCards(filtradas);
  }

  campoBusca.addEventListener("input", filtrarOportunidades);
  filtroCategoria.addEventListener("change", filtrarOportunidades);
  filtroPerfil.addEventListener("change", filtrarOportunidades);

  renderizarCards(OPORTUNIDADES);
});