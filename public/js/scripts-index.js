function pasiva() {
  var recuadrop = document.getElementById("recuadrop");
  recuadrop.style.display = "block";
  recuadrop.innerHTML = "Yasuo va generando un escudo a medida que se mueve, una vez generado este escudo cualquier ataque recibido consumirá el escudo, el cual dura 1 segundo.\nAdicionalmente Yasuo duplica su probabilidad de crítico, a cambio reduce un 10% su daño crítico";
}

var contenedor = document.getElementById("container");
var recuadrop = document.getElementById("recuadrop");
var pasivab = document.getElementById("pasivab");
var pasivaBtn = document.querySelector('.pasiva');

contenedor.addEventListener("click", function() {
  recuadrop.style.display = "none";
  pasivab.style.display = "none";
});

pasivaBtn.addEventListener('click', function(event) {
  event.stopPropagation();
});

function habilidad1() {
  var recuadro = document.getElementById("recuadroq");
  recuadro.style.display = "block";
  recuadro.innerHTML = "Yasuo realiza una estocada hacia adelante, realizando daño físico y aplicando efectos al impacto, al acertar esta habilidad dos veces, el tercer lanzamiento arrojará un tornado que levantará en el aire a los enemigos durante 1 segundo.";
}

var contenedor = document.getElementById("container");
var recuadroq = document.getElementById("recuadroq");
var habilidadq = document.getElementById("habilidadq");
var habilidad1Btn = document.querySelector('.habilidad1');

contenedor.addEventListener("click", function() {
  recuadroq.style.display = "none";
  habilidadq.style.display = "none";
});

habilidad1Btn.addEventListener('click', function(event) {
  event.stopPropagation();
});

function habilidad2() {
  var recuadro = document.getElementById("recuadrow");
  recuadrow.style.display = "block";
  recuadrow.innerHTML = "Yasuo levanta un muro de viento en la dirección seleccionada, que bloquea todos los proyectiles enemigos y dura 4 segundos";
}

var contenedor = document.getElementById("container");
var recuadrow = document.getElementById("recuadrow");
var habilidadw = document.getElementById("habilidadw");
var habilidad2Btn = document.querySelector('.habilidad2');

contenedor.addEventListener("click", function() {
  recuadrow.style.display = "none";
  habilidadw.style.display = "none";
});

habilidad2Btn.addEventListener('click', function(event) {
  event.stopPropagation();
});

function habilidad3() {
  var recuadro = document.getElementById("recuadroe");
  recuadroe.style.display = "block";
  recuadroe.innerHTML = "Yasuo se desplaza una distancia fija hacia un enemigo realizando daño mágico, adicionalmente, si se utiliza 'Tempestad de Acero (Q)' durante el recorrido, se realizará un corte ciruclar que tiene las mismas propiedas que la estocada frontal";
}

var contenedor = document.getElementById("container");
var recuadroe = document.getElementById("recuadroe");
var habilidade = document.getElementById("habilidade");
var habilidad3Btn = document.querySelector('.habilidad3');

contenedor.addEventListener("click", function() {
  recuadroe.style.display = "none";
  habilidade.style.display = "none";
});

habilidad3Btn.addEventListener('click', function(event) {
  event.stopPropagation();
});

function habilidad4() {
  var recuadror = document.getElementById("recuadror");
  recuadror.style.display = "block";
  recuadror.innerHTML = "Yasuo se desplaza rápidamente hacia uno o varios enemigos en el aire, infliendo daño físico y manteniéndolos en el aire durante 1 segundo adicional.\n Después de esto, obtiene un 50% de penetración de armadura adicional en sus golpes críticos";
}

var contenedor = document.getElementById("container");
var recuadror = document.getElementById("recuadror");
var habilidadr = document.getElementById("habilidadr");
var habilidad4Btn = document.querySelector('.habilidad4');

contenedor.addEventListener("click", function() {
  recuadror.style.display = "none";
  habilidadr.style.display = "none";
});

habilidad4Btn.addEventListener('click', function(event) {
  event.stopPropagation();
});