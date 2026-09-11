const form = document.querySelector("#form-tarefa");
const input = document.querySelector("#entrada-tarefa");
const lista = document.querySelector("#lista-tarefas");
const resumo = document.querySelector("#resumo");

let filtro = "todas";

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const tarefa = document.createElement("li");

    tarefa.innerHTML = `
        <input type="checkbox">
        ${input.value}
        <button>Remover</button>
    `;

    lista.append(tarefa);

    input.value = "";

    resumo.textContent = lista.children.length + " tarefas";
});

lista.addEventListener("click", function(event) {

    if (event.target.tagName == "BUTTON") {
        event.target.parentElement.remove();
    }

    if (event.target.type == "checkbox") {
        event.target.parentElement.classList.toggle("is-complete");
    }

    resumo.textContent = lista.children.length + " tarefas";

    mostrarTarefas();
});


document.querySelectorAll(".filtro").forEach(function(botao) {

    botao.addEventListener("click", function() {

        filtro = botao.dataset.filtro;

        mostrarTarefas();

    });

});


function mostrarTarefas() {

    const tarefas = lista.children;

    for (let tarefa of tarefas) {

        if (filtro == "todas") {
            tarefa.style.display = "block";
        }

        if (filtro == "pendentes") {
            if (tarefa.classList.contains("is-complete")) {
                tarefa.style.display = "none";
            } else {
                tarefa.style.display = "block";
            }
        }

        if (filtro == "concluidas") {
            if (tarefa.classList.contains("is-complete")) {
                tarefa.style.display = "block";
            } else {
                tarefa.style.display = "none";
            }
        }

    }

}
