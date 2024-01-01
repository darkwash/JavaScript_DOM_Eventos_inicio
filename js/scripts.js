//queryselector

const heading = document.querySelector(".header__texto h2"); // retorna 0 o 1 elemento
heading.textContent = " Nuevo Heading ";

console.log(heading);

// queryselectorAll //retorna de 0 a todos los qeu contiene el selector
const enlaces = document.querySelectorAll(".navegacion a");

enlaces[0].textContent = "Nuevo texto para enlaces"; //reemplaza el texto qeu tienes en la propiedad seleccionada
enlaces[0].classList.add("nueva-clase"); //añade nuevo nombre de clase a propeidad seleccionada
// enlaces[0].classList.remove("navegacion__enlace"); //elimina clase seleccionada

//Generar un nuevo enlace

const nuevoEnlace = document.createElement("A");
//agregar href
nuevoEnlace.href = "nuevo-enlace.html";
//agregar texto
nuevoEnlace.textContent = "Tienda Virtual";
//agregar clase
nuevoEnlace.classList.add("navegacion__enlace");

//agregarlo al documento

const navegacion = document.querySelector(".navegacion");
navegacion.appendChild(nuevoEnlace);
console.log(nuevoEnlace);

//Eventos

// console.log(1);
// window.addEventListener("load", function () {
//   //load espera a que el javascript y los archivos que dependen del html esten listos
//   console.log(2);
// });

// window.onload = function () {
//   console.log(3);
// };

// document.addEventListener("DOMContentLoaded", function () {
//   console.log(4);
// });
// console.log(5);

// window.onscroll = function () {
//   console.log("Scrooling");
// };

// //Seleccionar elementos y asociarles un evento
// const btnEnviar = document.querySelector(".boton--primario");

// btnEnviar.addEventListener("click", function (e) {
//   console.log(e);
//   e.preventDefault(); //con este metodo, prevenimos la accion por default, en el caso de un submites muy util para validar lso campos de formualrio antes de enviarlo al back end

//   //Validar un formulario
//   console.log("Enviando formulario");
// });

//Eventos de los inputs y textarea

const datos = {
  nombre: "",
  email: "",
  mensaje: "",
};

const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");
const formulario = document.querySelector(".formulario");

nombre.addEventListener("input", leerTexto);
email.addEventListener("input", leerTexto);
mensaje.addEventListener("input", leerTexto);

//El evento submit

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  //Valida Formulario

  const { nombre, email, mensaje } = datos;

  if (nombre === "" || email === "" || mensaje === "") {
    mostrarAlerta("Todos los campos son obligatorios", true);

    return; //corta la ejecucion del codigo
  }

  // Crear alerta de Enviar correctamente
  mostrarAlerta("Mensaje Enviado correctamente");
  //Envia formulario
});

function leerTexto(e) {
  datos[e.target.id] = e.target.value;
  // console.log(datos);
}

function  (mensaje, error = null) {
  const alerta = document.createElement("P");
  alerta.textContent = mensaje;

  if (error) {
    alerta.classList.add("error");
  } else {
    alerta.classList.add("correcto");
  }

  formulario.appendChild(alerta);

  // desaparezca despues de 5 segundos
  setTimeout(() => {
    alerta.remove();
  }, 3000);
}
