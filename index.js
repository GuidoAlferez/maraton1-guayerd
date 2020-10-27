/*
Bienvenido!!

Te proponemos 10 ejercicios de JS para resolver de forma individual. Si te trabas con alguno, podes continuar con otro de forma independiente. Si corresponde el ejercicio tiene un <div> asignado en el HTML para visualizar el resultado. Algunos te piden solo tocar JS otros, JS + HTML.

Exitos! Happy coding! - Guayerd
*/

/*
Ej - 1: Mostrar con alert el siguiente texto... "Bievenidas/os al Maratón Guayerd"
*/

alert("Bievenidas/os al Maratón Guayerd")

/*
Ej - 2: Completar/arreglar el código para que la función focusHandler() se ejecute cuando el foco este puesto en el input.ej2-nombre. Y cuando el foco se pierda (evento blur), borrar el contenido del div.
*/
const ej2Nombre = document.querySelector("input.ej2-nombre");
const ej2Resultado = document.querySelector("div.ej2-resultado"); //Se rompe lindo, no?

ej2Nombre.addEventListener("focus", focusHandler);

function focusHandler(e){
  ej2Resultado.innerText = "El input nombre tiene el foco";
}

ej2Nombre.addEventListener("blur",blurHandler)
function blurHandler(e){
  ej2Resultado.innerText = "El input ya no tiene el foco";
}

/*
Ej - 3: Codear la función mostrarSaludo() para mostrar un saludo desde el div.ej3 <----
*/

const ej3Div = document.querySelector(".ej3-resultado");

function mostrarSaludo()
{ 
  ej3Div.innerHTML = "Hola " + txtSaludo
}

const txtSaludo = "Arranquemos la maratón de código Guayerd! Starting at..." + (new Date()).toLocaleString();
mostrarSaludo(txtSaludo, ej3Div);


/*
Ej - 4: Cuando el usuario haga "click" sobre el botón button.ej4-enviar:
  a) Leer los campos ej4-email, ej4-mensaje
  b) Mostrar el valor de esos campos en div.ej4-resultado
  c) Limpiar los campos asignando "" a los mismos
*/
document.querySelector("button.ej4-enviar").addEventListener("click",leer);

function leer(e) 
{
  const email = document.querySelector("input.ej4-email");
  const mensaje = document.querySelector("input.ej4-mensaje");
  
  const resultado = document.querySelector("div.ej4-resultado");
  resultado.innerHTML = (`${email.value}  ${mensaje.value}`);
  email.value=" "
  mensaje.value=" "
}

/*
Ej - 5: Crear un div con 2 inputs y un boton "Sumar"
  a) Cuando se clickea en "sumar", sumar ambos valores de inputs y mostrar el resultado en el div.ej5-resultado
  b) Si alguno de los valores ingresados no es numérico (isNaN) informar en div.ej5-resultado "Ingreso erróneo"
*/
const resultado = document.querySelector("div.ej5-resultado");
const ej5 = document.querySelector("#ej5-cont");

const suma = document.createElement("button");
const div = document.createElement("div");
const input1 = document.createElement("input"); //num1
const input2 = document.createElement("input"); //num 2

ej5.innerText=" "
input1.type = "number"
input1.placeholder = "Ingrese el 1° Numero"
input2.type = "number"
input2.placeholder = "Ingrese el 2° Numero"
suma.innerText ="Sumar"

div.appendChild(input1);
div.appendChild(input2);
ej5.appendChild(div);
ej5.appendChild(suma);

suma.addEventListener("click",sumar)

function sumar(e)
{
  // Si no es numero el numero "input1.valor" o "input2.valor ==>
  if(isNaN(Number(input1.value)) || isNaN(Number(input2.value)))
  {
    resultado.innerText="Ingreso Erroneo"
  }
  else
  {
    resultado.innerText=`La Suma es: ${Number (input1.value) + Number (input2.value)}`
  }
  resultado.style.display =" block"
}



/*
Ej - 6: Completar los elementos <select> del div.ej6 con los arrays correspondientes. Recorrerlos y crear los <option> según corresponda
*/
const paises = ["Argentina","Bolivia","Brasil","Chile","Colombia","Ecuador","Paraguay","Perú","Uruguay","Venezuela"];
const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

for (let i = 0 ; i<paises.length; i++)
{
  const opciones = document.createElement("option")
  opciones.innerText = paises[i] 
  
  const select1 = document.querySelector ("select.ej6-paises")
  select1.appendChild(opciones)
}

for (let i = 0 ; i<diasSemana.length; i++)
{
  const opciones2 = document.createElement("option")
  opciones2.innerText = diasSemana[i]
  
  const select2 = document.querySelector("select.ej6-diasSemana")
  select2.appendChild(opciones2)
}

/*
Ej - 7: Dado el siguiente array, mostrar en el div.ej7-resultado el valor del select cuando el usuario selecciona un valor
*/
const momento = ["Mañana","Tarde","Noche"];
const cajita = document.querySelector("select.momentos")
const resultado2 = document.querySelector("div.ej7-resultado")
let fragment = new DocumentFragment()

for (let i = 0; i < momento.length; i++) 
{
  const opciones = document.createElement("option")
  opciones.innerText = momento[i]
  opciones.value = momento[i]
  fragment.appendChild(opciones)
}
cajita.appendChild(fragment)

cajita.addEventListener("change", elegir)

function elegir(e)
{
  resultado2.innerText = e.target.value
  resultado2.style.display = 'block'
}

/*
Ej - 8: Validar un ingreso de usuario al sistema utilizando localStorage. Mostrar en div.ej8-resultado "OK" o "Error".
  El form esta creado en el div.ej8
*/

localStorage.setItem("password","js2020"); //Este es el password que deben comparar con el ingreso del usuario

const contraseña = document.querySelector("input#password")
const resultado8 = document.querySelector("div.ej8-resultado")
const bonton8 = document.querySelector("button#boton-ej8")

bonton8.addEventListener("click", ingresar)

function ingresar (e)
{
  const pedirContra = localStorage.getItem("password")
  if(contraseña.value === pedirContra)
  {
    resultado8.innerText = "OK"
  }
  else
  {
  resultado8.innerText = "ERROR"
  }
}

/*
Ej - 9: Mostrar en el "div.ej9-resultado" el listado de usuarios que se encuentra en el array utilizando la siguiente plantilla:
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

const resultado9 = document.querySelector(".ej9-resultado")
let usuarios9 = ""

usuarios.forEach(function(usuario)
{
  const plantilla3 = `<div class="usuario-contenedor">
                    <div class="fila1">
                      <span class="title">Nombre:</span><span>${usuario.nombre}</span>
                      <span class="title">NroCliente:</span><span>${usuario.nroCliente}</span>
                    </div>
                    <div class="fila2">
                      <span class="title">DNI:</span><span>${usuario.dni}</span>
                      <span class="title">Fecha Nacimiento:</span><span>${usuario.fechaNacimiento}</span>
                    </div>
                    </div>`
  usuarios9 = usuarios9 + plantilla3
})
resultado9.innerHTML = usuarios9




/*
Ej - 10: Nuestro cliente es una empresa de marketing que busca generar una base de datos de contactos para poder vender productos. Debemos crear para ellos un formulario de carga con los siguientes datos:

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
const contenedor10 = document.querySelector("div.ej10-form")

const form10 = document.createElement("form")

const br1 = document.createElement('br')
const br2 = document.createElement('br')
const br3 = document.createElement('br')
const br4 = document.createElement('br')
const br5 = document.createElement('br')
const br6 = document.createElement('br')
const br7 = document.createElement('br')
const br8 = document.createElement('br')
const br9 = document.createElement('br')
const br10 = document.createElement('br')
const br11 = document.createElement('br')
const br12 = document.createElement('br')
const br13 = document.createElement('br')
const br14 = document.createElement('br')
const br15 = document.createElement('br')
const br16 = document.createElement('br')
const br17 = document.createElement('br')
const br18 = document.createElement('br')

// Nombre
const labelNombre = document.createElement("label")
labelNombre.setAttribute('for','nombre')
labelNombre.innerText="Nombre"
const inputNombre = document.createElement("input")
inputNombre.type= "text"
inputNombre.placeholder="Nombre"
inputNombre.id = 'nombre'
inputNombre.name = 'nombre'
inputNombre.required = true

form10.appendChild(labelNombre)
form10.appendChild(br1)
form10.appendChild(inputNombre)
form10.appendChild(br2)
form10.appendChild(br3)

//Email
const labelEmail = document.createElement("label")
const inputEmail= document.createElement("input")
labelEmail.setAttribute('for', 'email')
labelEmail.innerText="Email"
inputEmail.type ="text"
inputEmail.placeholder="Email"
inputEmail.id ="email"
inputEmail.name="email"
inputEmail.required=true

form10.appendChild(labelEmail)
form10.appendChild(br4)
form10.appendChild(inputEmail)
form10.appendChild(br5)
form10.appendChild(br6)

//Telefono
const labelTelefono = document.createElement("label")
const inputTelefono= document.createElement("input")
labelTelefono.setAttribute('for', 'telefono')
labelTelefono.innerText="Telefono"
inputTelefono.type ="text"
inputTelefono.placeholder="Telefono"
inputTelefono.id ="telefono"
inputTelefono.name="telefono"
inputTelefono.required=true

form10.appendChild(labelTelefono)
form10.appendChild(br7)
form10.appendChild(inputTelefono)
form10.appendChild(br8)
form10.appendChild(br9)

//Horario
const horarios10 = ["Mañana","Tarde","Noche"]
const horario10 = document.createElement("label")
horario10.setAttribute('for', 'horario')
horario10.innerText="Horario de Contacto"
const select10 = document.createElement("select")
select10.name = "horario"

let fragmentHorario = new DocumentFragment()
for (let i = 0; i < horarios10.length; i++) 
{
  const opciones10 = document.createElement("option")
  opciones10.required=true
  opciones10.innerText = horarios10[i]
  opciones10.value = horarios10[i]
  fragmentHorario.appendChild(opciones10)
}
select10.appendChild(fragmentHorario)
form10.appendChild(horario10)
form10.appendChild(br10)
form10.appendChild(select10)
form10.appendChild(br11)
form10.appendChild(br12)

//Producto 
const productos = ["Crédito","Celular","Viajes","Seguros"]
const producto10 = document.createElement("label")
producto10.setAttribute('for', 'producto')
producto10.innerText="Producto"
const selectProductos = document.createElement("select")
selectProductos.name = "producto"

const fragmentProducto = new DocumentFragment()
for (let i = 0; i < productos.length; i++) 
{
  const opcionProductos = document.createElement("option")
  opcionProductos.required=true
  opcionProductos.innerText = productos[i]
  opcionProductos.value = productos[i]
  fragmentProducto.appendChild(opcionProductos)
}
selectProductos.appendChild(fragmentProducto)
form10.appendChild(producto10)
form10.appendChild(br13)
form10.appendChild(selectProductos)
form10.appendChild(br14)
form10.appendChild(br15)
form10.appendChild(br16)

//boton Guardar
const buttonGuardar = document.createElement("button")
buttonGuardar.innerText= "Guardar Datos"

form10.appendChild(buttonGuardar)
contenedor10.appendChild(form10)
form10.appendChild(br17)
form10.appendChild(br18)

buttonGuardar.addEventListener("click", guardarDatos)

function guardarDatos()
{
  const arrGuardar =[];
  arrGuardar.push(inputNombre.value)
  arrGuardar.push(inputEmail.value)
  arrGuardar.push(inputTelefono.value)
  arrGuardar.push(select10.value)
  arrGuardar.push(selectProductos.value)

  localStorage.setItem("Datos Del Formulario",JSON.stringify(arrGuardar))
  console.log(arrGuardar)

  // LImpiar datos del formulario
  inputNombre.value = ""
  inputEmail.value = ""
  inputTelefono.value = ""
  select10.value = "Mañana"
  selectProductos.value = "Credito"


  datosFormulario=arrGuardar.slice()
}

// Boton Finalizar
const resultado10 = document.querySelector('.ej10-resultado')
const buttonFinalizar = document.createElement("button")
buttonFinalizar.innerText= "Finalizar"

form10.appendChild(buttonFinalizar)
contenedor10.appendChild(form10)

buttonFinalizar.addEventListener("click", mostrar)

let datosFormulario =[];
function mostrar()
{
  if (datosFormulario.length > 0)
  {
  
  resultado10.innerHTML = `<p>
  <span>Nombre: </span> <span>${datosFormulario[0]}</span><br>
  <span>Email: </span> <span>${datosFormulario[1]}</span><br>
  <span>Telefono: </span> <span>${datosFormulario[2]}</span><br>
  <span>Horario Contacto: </span> <span>${datosFormulario[3]}</span><br>
  <span>Producto: </span> <span>${datosFormulario[4]}</span><br>
</p>`

  localStorage.removeItem('Datos Del Formulario')
  }
}