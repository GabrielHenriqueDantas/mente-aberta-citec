document.addEventListener("DOMContentLoaded", () => {
  const selectOportunidade = document.getElementById("select-oportunidade");
  const tituloSelecionado = document.getElementById("titulo-selecionado");
  const infoFonte = document.getElementById("info-fonte");
  const listaPassos = document.getElementById("lista-passos");
  const listaDocumentos = document.getElementById("lista-documentos");
  const progressoChecklist = document.getElementById("progresso-checklist");

  if (!selectOportunidade) return;

  OPORTUNIDADES.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.id;
    option.textContent = `${item.categoria}: ${item.titulo}`;
    selectOportunidade.appendChild(option);
  });

  function atualizarContador() {
    const checkboxes = listaDocumentos.querySelectorAll("input[type='checkbox']");
    const marcados = listaDocumentos.querySelectorAll("input[type='checkbox']:checked");
    progressoChecklist.textContent = `${marcados.length} de ${checkboxes.length} documento(s) separado(s).`;
  }

  function carregarDetalhes(id) {
    const item = OPORTUNIDADES.find((op) => op.id === Number(id)) || OPORTUNIDADES[0];

    tituloSelecionado.textContent = item.titulo;
    infoFonte.textContent = `Instituição: ${item.instituicao} | ${item.fonte}`;

    listaPassos.innerHTML = "";
    item.passoAPasso.forEach((passo) => {
      const li = document.createElement("li");
      li.textContent = passo;
      listaPassos.appendChild(li);
    });

    listaDocumentos.innerHTML = "";
    item.documentos.forEach((doc, index) => {
      const li = document.createElement("li");
      li.className = "item-check";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = `doc-${item.id}-${index}`;
      checkbox.addEventListener("change", atualizarContador);

      const label = document.createElement("label");
      label.setAttribute("for", checkbox.id);
      label.textContent = doc;

      li.appendChild(checkbox);
      li.appendChild(label);
      listaDocumentos.appendChild(li);
    });

    atualizarContador();
  }

  selectOportunidade.addEventListener("change", (evento) => {
    carregarDetalhes(evento.target.value);
  });

  const params = new URLSearchParams(window.location.search);
  const idUrl = params.get("id");
  if (idUrl) {
    selectOportunidade.value = idUrl;
  }

  carregarDetalhes(selectOportunidade.value);
});