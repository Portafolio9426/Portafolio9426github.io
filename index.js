const images = document.querySelectorAll('.img');

const containerImage = document.querySelector('.container-img');

const imageContainer = document.querySelector('.img-show');

images.forEach(image =>{
  image.addEventListener('click', ()=>{
    
    addImage(image.getAttribute('src'),image.getAttribute('alt'));
  })
})

const addImage = (srcImage, alt)=>{
    containerImage.classList.toggle('move');
    
    imageContainer.src = srcImage;
}

containerImage.addEventListener('click',()=> {
  containerImage.classList.toggle('move');
})





var miBoton =document.querySelector("#enviar");
var miForm =document.querySelector("#formulario");

miBoton.addEventListener("click",(evento)=>{
  evento.preventDefault();
  
  valido = validar();

  if(valido==true){
    miForm.submit();
  }
     
})

function validar(){
    var nombre = document.getElementById("nombre").value;
    var direccion = document.getElementById("direccion").value;
    var privacidad = document.getElementById("privacidad");
    var email = document.getElementById("email").value;
    var edad = document.getElementById("edad").value;
    var telefono = document.getElementById("telefono").value;

    if(nombre == null || nombre == ""){
        alert("El campo nombre esta vacio");
        return false;
    }
    let name_re =/^[a-zA-Z]{2,30}$/
    if(!name_re.exec(nombre)){
      alert("El nombre solo puede ser letras");
      return false;
    }

    if(direccion == null || direccion == ""){
      alert("La direccion no es correcta");
      return false;
    }

    if(!privacidad.checked){
      alert("La casilla esta sin marcar")
      return false;
    }

    if(edad == null || edad == ""){
      alert("La edad esta vacia")
      return false;
    }

    if( numero == null || numero == ""){
      alert("El numero esta vacio ")
      return false;
    }

    if(email == null || email == ""){
      alert("Email Incorrecto")
      return false;
    }
    

    return true;
}


// /*Presupuesto*/

// // obtener los elementos del formulario
// const formulario = document.getElementById("formulario");
// const producto = formulario.elements.producto;
// const plazo = formulario.elements.plazo;
// const extras = formulario.elements.extra;
// const presupuesto = document.getElementById("presupuesto");
// const condiciones = formulario.elements.condiciones;

// // función para calcular el presupuesto
// function calcularPresupuesto() {
//   let precioProducto = 0;
//   let precioExtras = 0;
//   let descuento = 0;

//   // obtener el precio del producto seleccionado
//   for (let i = 0; i < producto.length; i++) {
//     if (producto[i].checked) {
//       precioProducto = parseFloat(producto[i].getAttribute("data-precio"));
//       break;
//     }
//   }

//   // obtener el precio de los extras seleccionados
//   for (let i = 0; i < extras.length; i++) {
//     if (extras[i].checked) {
//       precioExtras += parseFloat(extras[i].getAttribute("data-precio"));
//     }
//   }

//   // aplicar descuento según el plazo seleccionado
//   const plazoValue = parseInt(plazo.value);
//   if (plazoValue >= 30 && plazoValue < 90) {
//     descuento = 0.1;
//   } else if (plazoValue >= 90 && plazoValue < 180) {
//     descuento = 0.2;
//   } else if (plazoValue >= 180) {
//     descuento = 0.3;
//   }

//   // calcular el presupuesto final
//   const precioFinal =
//     (precioProducto + precioExtras) * (1 - descuento) + "€";

//   // actualizar el valor del presupuesto en la página
//   presupuesto.textContent = precioFinal;
// }

// // agregar un evento al botón de enviar para calcular el presupuesto
// formulario.addEventListener("submit", function (event) {
//   event.preventDefault(); // prevenir que el formulario se envíe
//   if (condiciones.checked) {
//     calcularPresupuesto();
//   } else {
//     alert("Debes aceptar las condiciones de privacidad para enviar el formulario.");
//   }
// });

// // agregar un evento al botón de reset para limpiar el formulario
// formulario.addEventListener("reset", function (event) {
//   presupuesto.textContent = "0€";
// });
function validarDatosContacto() {
      var nombre = document.getElementById("nombre").value;
      var apellido = document.getElementById("apellido").value;
      var telefono = document.getElementById("telefono").value;
      var correo = document.getElementById("correo").value;

      var nombreRegExp = /^[A-Za-z]+$/;
      var apellidoRegExp = /^[A-Za-z]+$/;
      var telefonoRegExp = /^\d{1,9}$/;
      var correoRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!nombreRegExp.test(nombre)) {
        alert("El nombre es inválido. Solo se permiten letras y una longitud máxima de 15 caracteres.");
        return false;
      }

      if (!apellidoRegExp.test(apellido)) {
        alert("Los apellidos son inválidos. Solo se permiten letras y una longitud máxima de 40 caracteres.");
        return false;
      }

      if (!telefonoRegExp.test(telefono)) {
        alert("El teléfono es inválido. Solo se permiten números y una longitud máxima de 9 dígitos.");
        return false;
      }

      if (!correoRegExp.test(correo)) {
        alert("El correo electrónico es inválido. Por favor, introduce un correo válido.");
        return false;
      }

      return true;
    }

    function calcularPresupuesto() {
      var producto = document.getElementById("producto").value;
      var plazo = parseInt(document.getElementById("plazo").value);
      var extras = document.getElementsByName("extras");

      var precioProducto = parseFloat(producto);
      var descuento = plazo * 0.1; // Ejemplo: descuento del 10% por cada mes
      var precioFinal = precioProducto - (precioProducto * descuento);

      for (var i = 0; i < extras.length; i++) {
        if (extras[i].checked) {
          var extraPrecio = parseFloat(extras[i].value);
          precioFinal += extraPrecio;
        }
      }

      document.getElementById("presupuesto").innerHTML = "Presupuesto: $" + precioFinal.toFixed(2);
    }
