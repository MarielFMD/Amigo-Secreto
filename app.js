let amigos = [];

function agregarAmigo() {
    let amigoIngresado = document.getElementById("amigo").value; //captura el valor ingresado por el usuario
    if(amigoIngresado != "") { //verifica que el nombre ingresado no esté vacío
        amigos.push(amigoIngresado); //agrega al array el valor ingresado
        document.getElementById("amigo").value = "";  //limpia el campo de entrada
    } else {
        alert("Por favor, inserte un nombre.");
    }
        crearListaAmigos();
}

function crearListaAmigos() {
    limpiarLista();
    for (let i of amigos){ //recorre el array
        let li = document.createElement("li"); //crea un elemento de lista para el nombre ingresado
        li.textContent = i; //asigna el input al elemento de lista creado
        listaAmigos.appendChild(li); //agrega el elemento de lista a la lista
    }
}

function sortearAmigo() {
    if (amigos.length > 0) { //comprueba que el array no esté vacío antes de sortear
        let amigoSorteado = Math.floor(Math.random()*amigos.length); //genera un índice aleatorio del array
        limpiarLista();
        const resultado = document.getElementById("resultado"); 
        resultado.innerHTML = `El amigo sorteado es ${amigos[amigoSorteado]}`;
    } else {
        alert("¡No tenés amigos para sortear!")
    };
    }


function limpiarLista() {
    const listaAmigos = document.getElementById("listaAmigos"); //selecciona la lista
    listaAmigos.innerHTML = ""; //limpia la lista existente
}