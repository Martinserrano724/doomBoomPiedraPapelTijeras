
const seccionBatalla = document.getElementById('campoBatalla');
const msjBatalla = document.getElementById('msjBatalla');
const imgAtaqueJugador = document.getElementById('imgAtaqueJugador');
const imgAtaquePc = document.getElementById('imgAtaquePc');
const btnPiedra = document.getElementById('btnPiedra');
const btnPapel = document.getElementById('btnPapel');
const btnTijeras = document.getElementById('btnTijeras');
const puntosJugados = document.getElementById('puntosJugados');
const puntosEmpate = document.getElementById('puntosEmpate');
const puntosPerdida = document.getElementById('puntosPerdida');
let contadorGanadas=0;
let contadorGanadasPc=0;
let contadorEmpates=0;

let opcionJugador;
let opcionesPc=["Piedra","Papel","Tijeras"];
let opcionPc;
let imgJugador;
let imgPc;


const imagenes = [
    {
        name: "Piedra",
        url: " img/Piedra.PNG" 
       
    },
    {
        name: "Papel",
        url: " img/Papel.PNG" 
    },
    {
        name: "Tijeras",
        url: " img/Tijeras.PNG" 
    }
];





btnPiedra.addEventListener('click', function(){
    opcionJugador = "Piedra";
    juego();
});

btnPapel.addEventListener('click', function(){
    opcionJugador = "Papel";
    juego();
});

btnTijeras.addEventListener('click', function(){
    opcionJugador = "Tijeras";
    juego();
})


function juego(){
    var aleaorio = numeroAleatorio();

    opcionPc=opcionesPc[aleaorio];


    batalla();

};

function batalla(){
    if(opcionJugador == opcionPc){
        msjBatalla.innerHTML = "Empate";
        contadorEmpates++;
        puntosEmpate.innerHTML=contadorEmpates;
    }else if(opcionJugador == "Piedra" && opcionPc == "Tijeras"){
        msjBatalla.innerHTML = "Ganaste!";
        contadorGanadas++;
        puntosJugados.innerHTML=contadorGanadas;
    }else if(opcionJugador == "Papel" && opcionPc == "Piedra"){
        msjBatalla.innerHTML = "Ganaste!";
        contadorGanadas++;
        puntosJugados.innerHTML=contadorGanadas;
    }else if(opcionJugador == "Tijeras" && opcionPc == "Papel"){
        msjBatalla.innerHTML = "Ganaste!";
        contadorGanadas++;
        puntosJugados.innerHTML=contadorGanadas;
    }else{
        msjBatalla.innerHTML = "Perdiste :(";
        contadorGanadasPc++;
        puntosPerdida.innerHTML=contadorGanadasPc;
    };

    addImagenes();

}


function numeroAleatorio(){
    let n = Math.floor(Math.random() * 3);
    return n;
}


function addImagenes(){
    for(let i=0;i<imagenes.length;i++){
        if(opcionJugador == imagenes[i].name){
            imgJugador = imagenes[i].url;
            imgAtaqueJugador.innerHTML = `<img class="imgBatalla" src=${imgJugador} alt="">`;
        };
        
        if(opcionPc == imagenes[i].name){
            imgPc = imagenes[i].url;
            imgAtaquePc.innerHTML = `<img class="imgBatalla" src=${imgPc} alt="">`;
        };
        
    };


    
    
};



