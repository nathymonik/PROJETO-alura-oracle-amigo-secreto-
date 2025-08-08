const amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Digite um nome antes de adicionar.");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado.");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    input.value = "";
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para sortear.");
        return;
    }

    const sorteio = [...amigos];
    const resultado = [];

    for (let i = 0; i < amigos.length; i++) {
        let sorteado;
        do {
            sorteado = sorteio[Math.floor(Math.random() * sorteio.length)];
        } while (sorteado === amigos[i]);

        resultado.push(`${amigos[i]} tirou ${sorteado}`);
        sorteio.splice(sorteio.indexOf(sorteado), 1);
    }

    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";
    resultado.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        listaResultado.appendChild(li);
    });
}

function apagarTudo() {
    amigos.length = 0;
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
}
