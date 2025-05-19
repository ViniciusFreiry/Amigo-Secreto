const listaAmigos = document.getElementById("lista-amigos");

function adicionar() {
    const amigo = document.getElementById("nome-amigo");

    if (listaAmigos.innerHTML == "") {
        listaAmigos.innerHTML = amigo.value;
    } else {
        listaAmigos.innerHTML += `, ${amigo.value}`;
    }

    amigo.value = "";
}

function sortear() {

}

function reiniciar() {

}