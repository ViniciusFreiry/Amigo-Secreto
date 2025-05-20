const listaAmigos = document.getElementById("lista-amigos");
const sorteio = document.getElementById("lista-sorteio");
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

    // Resultado do Sorteio
    sorteio.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        sorteio.innerHTML += amigos[i] + " --> " + amigos[(i + 1 == amigos.length ? 0 : i + 1)] + "<br>";
    }
}

function embaralhaLista(lista) {
    for (let i = lista.length; i > 0; i--) {
        const indiceAleatorio = Math.floor(Math.random() * i);

        [lista[i - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[i - 1]];
    }
}

function reiniciar() {

}