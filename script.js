// =========================
// MENSAJE DE BIENVENIDA
// =========================

window.onload = function(){

actualizarReloj();

};

// =========================
// RELOJ DIGITAL
// =========================

function actualizarReloj(){

const reloj =
document.getElementById("reloj");

if(!reloj) return;

setInterval(()=>{

const ahora = new Date();

reloj.innerHTML =
ahora.toLocaleTimeString();

},1000);

}

// =========================
// MODO OSCURO
// =========================

const botonModo =
document.getElementById("modoOscuro");

if(botonModo){

botonModo.addEventListener("click",()=>{

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){
botonModo.innerHTML="☀️ Modo Claro";
}else{
botonModo.innerHTML="🌙 Modo Oscuro";
}

});

}

// =========================
// BUSCADOR TABLA
// =========================

function buscarPrograma(){

let filtro =
document.getElementById("buscar")
.value
.toUpperCase();

let filas =
document.querySelectorAll("#tablaOffice tbody tr");

filas.forEach(function(fila){

let texto =
fila.textContent.toUpperCase();

if(texto.indexOf(filtro)>-1){

fila.style.display="";

}else{

fila.style.display="none";

}

});

}

// =========================
// EXAMEN PROFESIONAL
// =========================

function evaluar(){

let puntos = 0;

if(document.getElementById("p1")?.checked){
puntos++;
}

if(document.getElementById("p2")?.checked){
puntos++;
}

if(document.getElementById("p3")?.checked){
puntos++;
}

if(document.getElementById("p4")?.checked){
puntos++;
}

if(document.getElementById("p5")?.checked){
puntos++;
}

let porcentaje =
(puntos/5)*100;

const barra =
document.getElementById("barraProgreso");

if(barra){
barra.style.width =
porcentaje + "%";
}

const resultado =
document.getElementById("resultado");

if(resultado){

if(puntos >= 4){

resultado.innerHTML =
"🏆 FELICIDADES<br><br>Has aprobado el examen con "
+ puntos +
" respuestas correctas de 12.";

}
else{

resultado.innerHTML =
"📚 Debes estudiar un poco más📖y esforzarte para tener un buen resultado.<br><br>Obtuviste "
+ puntos +
" respuestas correctas de 12.";

}

}

let mensaje = "";

if(puntos === 12){

mensaje =
"🏆 Excelente.\n\nObtuviste 12/12.";

}
else if(puntos >= 3){

mensaje =
"👍 Muy bien.\n\nObtuviste "
+ puntos +
"/5.";

}
else{

mensaje =
"📚 Sigue estudiando.\n\nObtuviste "
+ puntos +
"/5.";

}

alert(mensaje);

}

// =========================
// BOTÓN VOLVER ARRIBA
// =========================

const btnArriba =
document.getElementById("btnArriba");

if(btnArriba){

btnArriba.addEventListener("click",()=>{

window.scrollTo({
top:0,
behavior:"smooth"
});

});

}

// =========================
// EFECTO TARJETAS
// =========================

const tarjetas =
document.querySelectorAll(".card");

tarjetas.forEach((card)=>{

card.addEventListener("mouseenter",()=>{

card.style.transform =
"translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform =
"translateY(0px)";

});

});

// =========================
// CONTADOR DE VISITAS
// =========================

let visitas =
localStorage.getItem("visitas");

if(!visitas){

visitas = 0;

}

visitas++;

localStorage.setItem(
"visitas",
visitas
);

console.log(
"Visitas:",
visitas
);

// =========================
// FECHA ACTUAL
// =========================

const fechaActual =
new Date();

console.log(
fechaActual.toLocaleDateString()
);
