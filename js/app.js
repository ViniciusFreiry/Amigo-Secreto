const listaAmigos = document.getElementById("lista-amigos");
let amigos = [];

function adicionar() {
    // Adicionando Pessoa na Lista
    const amigo = document.getElementById("nome-amigo");
    amigos.push(amigo.value);

    if (listaAmigos.innerHTML == "") {
        listaAmigos.innerHTML = amigo.value;
    } else {
        listaAmigos.innerHTML += `, ${amigo.value}`;
    }

    amigo.value = "";
}

function sortear() {
    // Embaralhando a Lista de Amigos
    embaralhaLista(amigos);
}

function embaralhaLista(lista) {
    for (let i = lista.length; i > 0; i--) {
        const indiceAleatorio = Math.floor(Math.random() * i);

        [lista[i - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[i - 1]];
    }
}

function reiniciar() {

}