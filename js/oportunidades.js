document.addEventListener("DOMContentLoaded", () => {
  const formBusca = document.getElementById("form-busca");
  const campoBusca = document.getElementById("campo-busca");
  const filtroCategoria = document.getElementById("filtro-categoria");
  const filtroPerfil = document.getElementById("filtro-perfil");
  const btnLimpar = document.getElementById("btn-limpar");
  const listaContainer = document.getElementById("lista-oportunidades");
  const contador = document.getElementById("contador-resultados");

  if (!listaContainer || typeof OPORTUNIDADES === "undefined") return;

  function normalizarTexto(texto) {
    return texto
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

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

const paramsUrl = new URLSearchParams(window.location.search);
  const categoriaUrl = paramsUrl.get("categoria");

  if (categoriaUrl && selectCategoria) {
    const limparTexto = (texto) =>
      texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    const alvo = limparTexto(categoriaUrl);

    for (const opcao of selectCategoria.options) {
      if (
        limparTexto(opcao.value).includes(alvo) ||
        limparTexto(opcao.textContent).includes(alvo)
      ) {
        selectCategoria.value = opcao.value;
        break;
      }
    }
  }



  function filtrarOportunidades() {
    const termo = normalizarTexto(campoBusca.value.trim());
    const categoria = filtroCategoria.value;
    const perfil = filtroPerfil.value;

    const filtradas = OPORTUNIDADES.filter((item) => {
      const bateTexto =
        normalizarTexto(item.titulo).includes(termo) ||
        normalizarTexto(item.descricao).includes(termo) ||
        normalizarTexto(item.instituicao).includes(termo);
      const bateCategoria = categoria === "Todos" || item.categoria === categoria;
      const batePerfil = perfil === "Todos" || item.perfil === perfil;

      return bateTexto && bateCategoria && batePerfil;
    });

    renderizarCards(filtradas);
  }

  if (formBusca) {
    formBusca.addEventListener("submit", (evento) => {
      evento.preventDefault();
      filtrarOportunidades();
    });
  }

  campoBusca.addEventListener("input", filtrarOportunidades);
  filtroCategoria.addEventListener("change", filtrarOportunidades);
  filtroPerfil.addEventListener("change", filtrarOportunidades);

  if (btnLimpar) {
    btnLimpar.addEventListener("click", () => {
      campoBusca.value = "";
      filtroCategoria.value = "Todos";
      filtroPerfil.value = "Todos";
      renderizarCards(OPORTUNIDADES);
    });
  }

  renderizarCards(OPORTUNIDADES);
});