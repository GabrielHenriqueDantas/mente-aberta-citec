const TELEGRAM_BOT = "citecfiap_bot";

document.addEventListener("DOMContentLoaded", () => {
  const link = document.createElement("a");
  link.href = `https://t.me/${TELEGRAM_BOT}`;
  link.className = "botao-chatbot";
  link.target = "_blank";
  link.rel = "noopener";
  link.setAttribute(
    "aria-label",
    "Falar com o assistente do Mente Aberta no Telegram, por texto ou áudio (abre em nova aba)"
  );

  const icone = document.createElement("span");
  icone.className = "botao-chatbot-icone";
  icone.setAttribute("aria-hidden", "true");
  icone.textContent = "💬";

  const texto = document.createElement("span");
  texto.textContent = "Falar com o assistente";

  link.append(icone, texto);
  document.body.appendChild(link);
});
