const listaAmigos = document.getElementById("lista-amigos");
const sorteio = document.getElementById("lista-sorteio");
let amigos = [];

function adicionar() {
    // Adicionando Pessoa na Lista
    const amigo = document.getElementById("nome-amigo");

    // Validação de Input Vazio
    if (amigo.value == "") {
        alert("Insira um nome!");
        return;
    }

    // Validação de Nome Repetido
    if (amigos.includes(amigo.value)) {
        alert("O nome já está na lista!");
        amigo.value = "";
        return;
    } else amigos.push(amigo.value);

    if (listaAmigos.innerHTML == "") {
        listaAmigos.innerHTML = amigo.value;
    } else {
        listaAmigos.innerHTML += `, ${amigo.value}`;
    }

    amigo.value = "";
}

function sortear() {
    // Validação de Quantidade Mínima
    if (amigos.length < 3) {
        alert("Adicione pelo menos 3 nomes!")
        return;
    }

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
    amigos = [];
    sorteio.innerHTML = "";
    listaAmigos.innerHTML = "";
}