/*
Bienvenido/a!!
Te proponemos 10 ejercicios de JS para resolver de forma individual. Si te trabas con alguno, podes continuar con otro de forma independiente. Si corresponde el ejercicio tiene un <div> asignado en el HTML para visualizar el resultado. Algunos te piden solo tocar JS otros, JS + HTML.
Exitos! Happy coding! - Guayerd
*/

// Funcion Validar Email
function validarEmail(email) {

  const regexEmail = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i
  return regexEmail.test(email)
}

/*
Ej - 1: Mostrar con alert el siguiente texto... "Bievenidas/os al Maratón Guayerd"
*/

alert("Bievenidas/os al Maratón Guayerd");

/*
Ej - 2: Completar/arreglar el código para que la función focusHandler() se ejecute cuando el foco este puesto 
en el input.ej2-nombre. Y cuando el foco se pierda (evento blur), borrar el contenido del div.
*/
const ej2Nombre = document.querySelector("input.ej2-nombre");
const ej2Resultado = document.querySelector(".ej2-resultado");

ej2Resultado.innerText = "El input nombre tiene el foco";

ej2Nombre.addEventListener("focus", focusHandler);
ej2Nombre.addEventListener("blur", blurHandler)

function focusHandler(e) {
  ej2Resultado.style.display = "inherit"
}

function blurHandler(e) {
  ej2Resultado.style.display = "none"
}


/*
Ej - 3: Codear la función mostrarSaludo() para mostrar un saludo desde el div.ej3
*/

const ej3Resultado = document.querySelector(".ej3-resultado");

function mostrarSaludo(saludo, elemento) {
  elemento.innerText = saludo;
}

const txtSaludo = "Arranquemos la maratón de código Guayerd! Starting at... " + (new Date()).toLocaleString();
mostrarSaludo(txtSaludo, ej3Resultado);


/*
Ej - 4: Cuando el usuario haga "click" sobre el botón button.ej4-enviar:
a) Leer los campos ej4-email, ej4-mensaje
b) Mostrar el valor de esos campos en div.ej4-resultado
c) Limpiar los campos asignando "" a los mismos
*/
const btnEj4 = document.querySelector('.ej4-enviar');
const email = document.querySelector('.ej4-email')
const mensaje = document.querySelector('.ej4-mensaje')

email.addEventListener('focus', quitarError)
mensaje.addEventListener('focus', quitarError)

function quitarError(e) {
  e.target.classList.remove('error')
  e.target.classList.remove('error2')
}

btnEj4.addEventListener('click', function () {

  if (validarEmail(email.value)) {
      email.classList.remove('error')
  } else {
      email.classList.add('error')
      return;
  }

  if (mensaje.value == "" || mensaje.value == " " || mensaje.value == null) {
      mensaje.classList.add('error')
      return;
  } else {
      mensaje.classList.remove('error')
  }

  const ej4Resultado = document.querySelector('.ej4-resultado')
  let emailElement = document.createElement('p')
  emailElement.innerText = `Email: ${email.value}`
  let mensajeElement = document.createElement('p')
  mensajeElement.innerText = `Mensaje: ${mensaje.value}`
  ej4Resultado.appendChild(emailElement)
  ej4Resultado.appendChild(mensajeElement)
  ej4Resultado.style.display = "block"

})


/*
Ej - 5: Crear un div con 2 inputs y un boton "Sumar"
a) Cuando se clickea en "sumar", sumar ambos valores de inputs y mostrar el resultado en el div.ej5-resultado
b) Si alguno de los valores ingresados no es numérico (isNaN) informar en div.ej5-resultado "Ingreso erróneo"
*/

const ej5Resultado = document.querySelector('.ej5-resultado');
const ej5Cont = document.querySelector('#ej5-cont');

let labelNum1 = document.createElement('label')
let labelNum2 = document.createElement('label')
let num1 = document.createElement("input");
let num2 = document.createElement("input");

let btnSumar = document.createElement("button")
btnSumar.innerText = "Sumar"
labelNum1.innerText = "Num1:"
num1.type = "number";
num1.placeholder = "Ingrese Numero"
labelNum2.innerText = "Num 2:"
num2.type = "number";
num2.placeholder = "Ingrese Numero"

ej5Cont.appendChild(labelNum1);
ej5Cont.appendChild(num1);
ej5Cont.appendChild(document.createElement('br'));
ej5Cont.appendChild(labelNum2);
ej5Cont.appendChild(num2);
ej5Cont.appendChild(btnSumar);

btnSumar.addEventListener('click', function () {

  if (isNaN(Number(num1.value)) || isNaN(Number(num2.value))) {
      ej5Resultado.innerText = "Debe ingresar Numeros Correctos"
  } else {
      ej5Resultado.innerText = `La suma es: ${Number(num1.value) + Number(num2.value)}`
  }

  ej5Resultado.style.display = 'block'
})


/*
Ej - 6: Completar los elementos <select> del div.ej6 con los arrays correspondientes. Recorrerlos y crear los <option> según corresponda
*/
const paises = ["Argentina", "Bolivia", "Brasil", "Chile", "Colombia", "Ecuador", "Paraguay", "Perú", "Uruguay", "Venezuela"];
const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

const selectPaises = document.querySelector('.ej6-paises')
const selectDias = document.querySelector('.ej6-diasSemana')

const fragmentpais = new DocumentFragment();

paises.forEach(function (pais) {
  const optionPais = document.createElement('option')
  optionPais.value = pais
  optionPais.innerText = pais

  fragmentpais.appendChild(optionPais)
})

selectPaises.appendChild(fragmentpais)

const fragmentdias = new DocumentFragment();

diasSemana.forEach(function (dia) {
  const optionDia = document.createElement('option')
  optionDia.value = dia
  optionDia.innerText = dia

  fragmentdias.appendChild(optionDia)
})

selectDias.appendChild(fragmentdias)


/*
Ej - 7: Dado el siguiente array, mostrar en el div.ej7-resultado el valor del select cuando el usuario selecciona un valor
*/
const momentos = ["Mañana", "Tarde", "Noche"];
const selectMomento = document.querySelector('.momentos')

const fragmentmomento = new DocumentFragment();

momentos.forEach(function (momento) {

  const optionMomento = document.createElement('option')
  optionMomento.value = momento
  optionMomento.innerText = momento

  fragmentmomento.appendChild(optionMomento)
})

selectMomento.appendChild(fragmentmomento)

selectMomento.addEventListener('change', function (e) {

  const ej7Resultado = document.querySelector('.ej7-resultado')
  ej7Resultado.innerText = `Ha seleccionado: "${e.target.value}"`
  ej7Resultado.style.display = 'block'

})

/*
Ej - 8: Validar un ingreso de usuario al sistema utilizando localStorage. Mostrar en div.ej8-resultado "OK" o "Error".
El form esta creado en el div.ej8
*/
localStorage.setItem("password", "js2020"); //Este es el password que deben comparar con el ingreso del usuario

const btnIngreso = document.querySelector('#btn-ingreso')
const pass = document.querySelector('input#password')
const ej8Resultado = document.querySelector('.ej8-resultado')

pass.addEventListener('focus', function () {
  pass.classList.remove('error')
  ej8Resultado.style.display = 'none'
})

btnIngreso.addEventListener('click', function () {

  if (pass.value == "" || pass.value == " " || pass.value == null) {
      ej8Resultado.innerText = "Debe ingresar un password"
      ej8Resultado.classList.add('passError')
      pass.classList.add('error')
      ej8Resultado.style.display = 'block'
      return;
  }

  const passGuardado = localStorage.getItem('password')

  if (pass.value === passGuardado) {
      ej8Resultado.innerText = "OK"
      ej8Resultado.classList.add('passOk')
      ej8Resultado.classList.remove('passError')
      pass.classList.remove('error')
  } else {
      ej8Resultado.innerText = "Error"
      ej8Resultado.classList.remove('passOk')
      ej8Resultado.classList.add('passError')
      pass.classList.add('error')
  }

  ej8Resultado.style.display = 'block'

})

/*
Ej - 9: Mostrar en el div.ej9-resultado el listado de usuarios que se encuentra en el array utilizando la siguiente plantilla:
<div class="usuario-contenedor">
<div class="fila1">
  <span class="title">Nombre:</span><span>valor</span>
  <span class="title">NroCliente:</span><span>valor</span>
</div>
<div class="fila2">
  <span class="title">DNI:</span><span>valor</span>
  <span class="title">Fecha Nacimiento:</span><span>valor</span>
</div>
</div>
*/

const usuarios = [
  {
      nombre: "Juan Perez",
      nroCliente: 1001,
      dni: 88888888,
      fechaNacimiento: "10/10/1988"
  },
  {
      nombre: "Ana Martinez",
      nroCliente: 1010,
      dni: 88888886,
      fechaNacimiento: "10/10/1990"
  },
  {
      nombre: "Susana Gomez",
      nroCliente: 1021,
      dni: 88888889,
      fechaNacimiento: "10/10/1985"
  },
];

const container = document.querySelector('.ej9-resultado');
let etiquetasUsuarios = ""

usuarios.forEach(function (usuario) {

  let usuarioT = `<div class="usuario-contenedor">
                  <div class="fila1">
                    <span class="title">Nombre:</span><span>${usuario.nombre}</span>
                    <span class="title">NroCliente:</span><span>${usuario.nroCliente}</span>
                  </div>
                  <div class="fila2">
                    <span class="title">DNI:</span><span>${usuario.dni}</span>
                    <span class="title">Fecha Nacimiento:</span><span>${usuario.fechaNacimiento}</span>
                  </div>
                </div>`

  etiquetasUsuarios += usuarioT
})

container.innerHTML = etiquetasUsuarios;

/*
Ej - 10: Nuestro cliente es una empresa de marketing que busca generar una base de datos de contactos para 
poder vender productos. Debemos crear para ellos un formulario de carga con los siguientes datos:
- Nombre
- Email
- Teléfono
- Horario de contacto (Mañana/Tarde/Noche)
- Producto (Crédito/Celular/Viajes/Seguros)
- Botón "Guardar"
- Botón "Finalizar"
a) Crear el <form> dentro del elemento div.ej10-form
b) Crear los elementos input, select, button que correspondan
c) Cuando el usuario hace "click" en el botón, guardar los datos de contacto en un array
d) Limpiar los elementos del form
e) Cada vez que se guarden datos, guardarlos tambien en localStorage
f) Cuando la página se vuelve a cargar, recuperar el array desde localStorage si es que existe.
e) Cuando se hace click en "Finalizar", mostrar de forma clara el listado de contactos y sus datos dentro de div.ej10-resultado y limpiar el localStorage.
Bonus!!
1) Validar los datos según el tipo.
2) Todos los datos son requeridos. Evitar cargar datos vacios.
3) Evitar cargar datos si el email ya existe en el array de contactos.
4) En todos los casos, informar de forma clara al usuario si hay problemas de validación de datos.
*/

const formContainer = document.querySelector('.ej10-form')
const fragmentForm = new DocumentFragment();

const newLine1 = document.createElement('br')
const newLine2 = document.createElement('br')
const newLine3 = document.createElement('br')
const newLine4 = document.createElement('br')
const newLine5 = document.createElement('br')

//Formulario
let formularioEJ10 = document.createElement('form')

// Nombre
let labelNombre = document.createElement('label')
labelNombre.setAttribute('for', 'nombre')
labelNombre.innerText = "Nombre"
let inputNombre = document.createElement('input')
inputNombre.type = 'text'
inputNombre.id = 'nombre'
inputNombre.name = 'nombre'
inputNombre.required = true

// Email
let labelEmail = document.createElement('label')
labelEmail.setAttribute('for', 'email')
labelEmail.innerText = "Email"
let inputEmail = document.createElement('input')
inputEmail.type = 'email'
inputEmail.id = 'email'
inputEmail.name = 'email'
inputEmail.required = true

// Telefono
let labelTelefono = document.createElement('label')
labelTelefono.setAttribute('for', 'telefono')
labelTelefono.innerText = "Telefono"
let inputTelefono = document.createElement('input')
inputTelefono.type = 'text'
inputTelefono.id = 'telefono'
inputTelefono.name = 'telefono'
inputTelefono.required = true

inputNombre.addEventListener('focus', quitarError)
inputEmail.addEventListener('focus', quitarError)
inputTelefono.addEventListener('focus', quitarError)

// Horario
let labelHorario = document.createElement('label')
labelHorario.setAttribute('for', 'horario')
labelHorario.innerText = "Horario Contacto"
let selectHorario = document.createElement('select')
selectHorario.name = 'horario'

const fragmentHorario = new DocumentFragment();
const horarios = ['Mañana', 'Tarde', 'Noche']

horarios.forEach(function (horario, index) {
  let optionHorario = document.createElement('option')
  optionHorario.value = horario
  optionHorario.innerText = horario
  if (index == 0) {
      optionHorario.required = true
      optionHorario.selected = true
  }
  fragmentHorario.appendChild(optionHorario)
})

selectHorario.appendChild(fragmentHorario)

// Producto
let labelProducto = document.createElement('label')
labelProducto.setAttribute('for', 'producto')
labelProducto.innerText = "Producto"
let selectProducto = document.createElement('select')
selectProducto.name = 'producto'

const fragmentProducto = new DocumentFragment();
const productos = ['Credito', 'Celular', 'Viajes', 'Seguros']

productos.forEach(function (producto, index) {
  let optionProducto = document.createElement('option')
  optionProducto.value = producto
  optionProducto.innerText = producto
  if (index == 0) {
      optionProducto.setAttribute('selected', true)
      optionProducto.setAttribute('required', true)
  }
  fragmentProducto.appendChild(optionProducto)
})

selectProducto.appendChild(fragmentProducto)

// Botones
const btnGuardar = document.createElement('button')
btnGuardar.innerText = "Guardar"

const btnFinalizar = document.createElement('button')
btnFinalizar.innerText = "Finalizar"

// Añade elementos al fragmento
fragmentForm.appendChild(labelNombre)
fragmentForm.appendChild(inputNombre)
fragmentForm.appendChild(newLine1)

fragmentForm.appendChild(labelEmail)
fragmentForm.appendChild(inputEmail)
fragmentForm.appendChild(newLine2)

fragmentForm.appendChild(labelTelefono)
fragmentForm.appendChild(inputTelefono)
fragmentForm.appendChild(newLine3)

fragmentForm.appendChild(labelHorario)
fragmentForm.appendChild(selectHorario)
fragmentForm.appendChild(newLine4)

fragmentForm.appendChild(labelProducto)
fragmentForm.appendChild(selectProducto)
fragmentForm.appendChild(newLine5)

fragmentForm.appendChild(btnGuardar)
fragmentForm.appendChild(btnFinalizar)

formularioEJ10.appendChild(fragmentForm)


formContainer.appendChild(formularioEJ10)

// Click Boton GUardar
btnGuardar.addEventListener('click', function (e) {

  e.preventDefault()

  if (inputNombre.value == "" || inputNombre.value == " " || inputNombre.value == null) {
      inputNombre.classList.add('error')
      return;
  } else {
      inputNombre.classList.remove('error')
  }

  if (validarEmail(inputEmail.value)) {
      inputEmail.classList.remove('error')
  } else {
      inputEmail.classList.add('error')
      return;
  }

  if (datosFormEj10.includes(inputEmail.value)) {
      inputEmail.classList.add('error2')
      return;
  } else {
      inputEmail.classList.remove('error')
      inputEmail.classList.remove('error2')
  }

  if (inputTelefono.value == "" || inputTelefono.value == " " || inputTelefono.value == null) {
      inputTelefono.classList.add('error')
      return;
  } else {
      inputTelefono.classList.remove('error')
  }

  let datos = []
  datos.push(inputNombre.value)
  datos.push(inputEmail.value)
  datos.push(inputTelefono.value)
  datos.push(selectHorario.value)
  datos.push(selectProducto.value)

  datosFormEj10 = datos.slice()

  // Guarda en Local Storage
  localStorage.setItem('datosForm', JSON.stringify(datos))

  console.log(datos)

  // LImpiar datos del formulario
  inputNombre.value = ""
  inputEmail.value = ""
  inputTelefono.value = ""
  selectHorario.value = "Mañana"
  selectProducto.value = "Credito"

})

btnFinalizar.addEventListener('click', function (e) {

  e.preventDefault()

  if (datosFormEj10.length > 0) {
      const ej10Resultado = document.querySelector('.ej10-resultado')
      ej10Resultado.innerHTML = `<p>
                             <span>Nombre: </span> <span>${datosFormEj10[0]}</span><br>
                             <span>Email: </span> <span>${datosFormEj10[1]}</span><br>
                             <span>Telefono: </span> <span>${datosFormEj10[2]}</span><br>
                             <span>Horario Contacto: </span> <span>${datosFormEj10[3]}</span><br>
                             <span>Producto: </span> <span>${datosFormEj10[4]}</span><br>
                         </p>`
      ej10Resultado.style.display = 'block'
      localStorage.removeItem('datosForm')
  }

})

// Recupera datos del localStorage
let datosFormEj10 = []
let datosformLS = localStorage.getItem('datosForm')
if (datosformLS) datosFormEj10 = JSON.parse(datosformLS)

console.log(datosFormEj10)