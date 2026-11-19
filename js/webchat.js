const WEBCHAT_API = "http://localhost:1880/api/chat";

document.addEventListener("DOMContentLoaded", () => {
  const lista = document.getElementById("chat-mensagens");
  const form = document.getElementById("chat-form");
  const campo = document.getElementById("chat-campo");
  const botao = document.getElementById("chat-enviar");
  const digitando = document.getElementById("chat-digitando");
  const erro = document.getElementById("chat-erro");
  const sugestoes = document.querySelectorAll(".chat-sugestao");

  if (!lista || !form || !campo) return;

  function gerarSessao() {
    if (window.crypto && typeof window.crypto.randomUUID === "function") {
      return window.crypto.randomUUID();
    }
    return "s-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 10);
  }

  let sessao;
  try {
    sessao = sessionStorage.getItem("mente-aberta-sessao");
    if (!sessao) {
      sessao = gerarSessao();
      sessionStorage.setItem("mente-aberta-sessao", sessao);
    }
  } catch (e) {
    sessao = gerarSessao();
  }

  function escreverComLinks(elemento, texto) {
    const partes = texto.split(/(https?:\/\/[^\s]+)/g);
    partes.forEach((parte) => {
      if (/^https?:\/\//.test(parte)) {
        const link = document.createElement("a");
        link.href = parte;
        link.textContent = parte;
        link.target = "_blank";
        link.rel = "noopener";
        elemento.appendChild(link);
      } else if (parte) {
        elemento.appendChild(document.createTextNode(parte));
      }
    });
  }

  function adicionarMensagem(texto, autor) {
    const item = document.createElement("li");
    item.className = `chat-msg chat-msg-${autor}`;

    const rotulo = document.createElement("span");
    rotulo.className = "chat-autor";
    rotulo.textContent = autor === "usuario" ? "Você:" : "Assistente:";
    item.appendChild(rotulo);

    const conteudo = document.createElement("span");
    conteudo.className = "chat-texto";
    escreverComLinks(conteudo, texto);
    item.appendChild(conteudo);

    lista.appendChild(item);
    lista.scrollTop = lista.scrollHeight;
  }

  function ocupado(estado) {
    botao.disabled = estado;
    sugestoes.forEach((s) => { s.disabled = estado; });
    digitando.hidden = !estado;
  }

  async function enviar(texto) {
    erro.hidden = true;
    adicionarMensagem(texto, "usuario");
    campo.value = "";
    ocupado(true);

    const controle = new AbortController();
    const limite = setTimeout(() => controle.abort(), 60000);

    try {
      const resposta = await fetch(WEBCHAT_API, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({ sessao, texto }),
        signal: controle.signal
      });
      const dados = await resposta.json();
      adicionarMensagem(dados.answer || "Não entendi. Pode perguntar de outro jeito?", "bot");
    } catch (e) {
      adicionarMensagem("O assistente está fora do ar agora. Tente de novo em instantes ou use o Telegram, logo abaixo.", "bot");
    } finally {
      clearTimeout(limite);
      ocupado(false);
      campo.focus();
    }
  }

  form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const texto = campo.value.trim();
    if (!texto) {
      erro.textContent = "Escreva sua mensagem antes de enviar.";
      erro.hidden = false;
      campo.focus();
      return;
    }
    enviar(texto);
  });

  sugestoes.forEach((sugestao) => {
    sugestao.addEventListener("click", () => enviar(sugestao.dataset.texto));
  });
});
