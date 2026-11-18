document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-contato");
  const campoNome = document.getElementById("nome");
  const campoEmail = document.getElementById("email");
  const campoAssunto = document.getElementById("assunto");
  const campoMensagem = document.getElementById("mensagem");
  const erroNome = document.getElementById("erro-nome");
  const erroEmail = document.getElementById("erro-email");
  const erroAssunto = document.getElementById("erro-assunto");
  const erroMensagem = document.getElementById("erro-mensagem");
  const feedback = document.getElementById("feedback-contato");

  if (!form) return;

  form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    let valido = true;
    erroNome.textContent = "";
    erroEmail.textContent = "";
    erroAssunto.textContent = "";
    erroMensagem.textContent = "";
    feedback.classList.add("oculto");

    if (campoNome.value.trim().length < 3) {
      erroNome.textContent = "Informe seu nome com pelo menos 3 letras.";
      valido = false;
    }

    const emailValor = campoEmail.value.trim();
    if (!emailValor.includes("@") || !emailValor.includes(".")) {
      erroEmail.textContent = "Informe um e-mail válido para retorno.";
      valido = false;
    }

    if (campoAssunto.value.trim().length < 3) {
      erroAssunto.textContent = "Informe o assunto da mensagem.";
      valido = false;
    }

    if (campoMensagem.value.trim().length < 10) {
      erroMensagem.textContent = "Escreva uma mensagem com pelo menos 10 caracteres.";
      valido = false;
    }

    if (valido) {
      feedback.textContent = "Mensagem registrada com sucesso. Obrigado por contribuir com o Mente Aberta.";
      feedback.classList.remove("oculto");
      form.reset();
    }
  });
});