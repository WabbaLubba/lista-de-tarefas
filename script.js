const valorContador = document.querySelector("#valor-contador");
const mensagem = document.querySelector("#mensagem");
const btnDiminuir = document.querySelector("#btn-diminuir");
const btnZerar = document.querySelector("#btn-zerar");
const btnAumentar = document.querySelector("#btn-aumentar");

let contador = 0;

function renderizarContador() {
    valorContador.textContent = contador;
    mensagem.textContent =
        contador === 0
            ? "Pronto para começar."
            : `Você já registrou ${contador} sessão(ões).`;
    mensagem.classList.toggle("is-active", contador > 0);
}

btnAumentar.addEventListener("click", () => {
    contador += 1;
    renderizarContador();
});

btnDiminuir.addEventListener("click", () => {
    contador = Math.max(0, contador - 1);
    renderizarContador();
});

btnZerar.addEventListener("click", () => {
    contador = 0;
    renderizarContador();
});

renderizarContador();