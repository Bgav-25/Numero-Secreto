

//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un número del 1-10:';

let numeroSecreto = 0; //= generarNumeroSecreto();
let intentos = 0; //= 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    //console.log(numeroSecreto);
    //console.log(intentos);
    //.value para conseguir el valor de la funcion getElementById ya que por si sola devuelve un objeto
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Has acertado el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        //el usuario no acerta
        if (numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento('p', 'El número es menor');
        } else { 
            asignarTextoElemento('p', 'El número es mayor');
        }
    intentos++;
    limpiarCaja();

    }
    return;
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}` );
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiarc caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar el número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
   document.querySelector('#reiniciar').setAttribute('disabled', 'true');
// El # se utiliza para buscar el "ID" en el querySelector
}

function limpiarCaja(){
    //let valorCaja = 
    document.querySelector('#valorUsuario').value = '';
    //valorCaja.value = '';

}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    //condición de salida para evitar recursividad
if(listaNumerosSorteados.length == numeroMaximo){
asignarTextoElemento('p', 'Ya se han sorteado todos los números posibles');
}else{
  if (listaNumerosSorteados.includes(numeroGenerado)){
return generarNumeroSecreto();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
}

condicionesIniciales();

//asignarTextoElemento('h1', 'Juego del número secreto');
//asignarTextoElemento('p', 'Indica un número del 1 al 10');
