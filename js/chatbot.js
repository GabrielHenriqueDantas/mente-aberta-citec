document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.endsWith("chat.html")) return;

  const link = document.createElement("a");
  link.href = "chat.html";
  link.className = "botao-chatbot";
  link.setAttribute(
    "aria-label",
    "Falar com o assistente virtual do Mente Aberta, pelo site ou pelo Telegram"
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
