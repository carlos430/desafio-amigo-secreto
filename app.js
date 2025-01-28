// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    inputNombre = document.getElementById('amigo').value;

    if (inputNombre === "") {
       alert ("Por favor, inserte un nombre.");
       return

    } else {
        amigos.push(inputNombre);
    }

    limpiarCampo();
    actualizarLista();

}


function actualizarLista() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    for (items in amigos) {
        const li = document.createElement("li");
        li.textContent = amigos[items]
        listaAmigos.appendChild(li);
    }

}


function sortearAmigo() {

    if (amigos.length === 0) {
        alert ("No Hay Amigo Para Sortear, Agrega un Amigo Primero.")
        return


    } else {

        let indexAleatorio = Math.floor(Math.random() * amigos.length);
        let amigosSorted = amigos[indexAleatorio];

        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `<li>El Amigo Secreto Sorteado es: ${amigosSorted}</li>`;
    }
    
}


function limpiarCampo() {

    document.getElementById('amigo').value = "";
}

