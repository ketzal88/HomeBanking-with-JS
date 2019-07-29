//Declaración de variables
var nombreUsuario = "Gabriel Uccello";
var saldoCuenta = 5000;
var limiteExtraccion = 3000;
var precioAgua = 350;
var precioTelefono = 425;
var precioLuz = 210;
var precioInternet = 570;
var cuentaAmigaUno = 1234567;
var cuentaAmigaDos = 7654321;
var codigoDeSeguridad = 1234;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
  cargarNombreEnPantalla();
  actualizarSaldoEnPantalla();
  actualizarLimiteEnPantalla();
  iniciarSesion()
};

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
  var stringNuevoLimiteDeExtraccion = prompt(
    "¿Cuál es el nuevo limite de extracción?"
  );
  nuevoLimiteDeExtraccion = stringNuevoLimiteDeExtraccion;
  nuevoLimiteDeExtraccion = chequeoDeValoresDeEntrada(nuevoLimiteDeExtraccion)
  if (nuevoLimiteDeExtraccion) {
    limiteExtraccion = nuevoLimiteDeExtraccion;
    alert("Tu nuevo límite de extracción es: " + limiteExtraccion);
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
  }
}

function extraerDinero() {
  var stringDineroAExtraer = prompt("¿Cuánto dinero vas a retirar?");
  dineroAExtraer = stringDineroAExtraer;
  dineroAExtraer = chequeoDeValoresDeEntrada(dineroAExtraer)
  if (dineroAExtraer) {  
    if (dineroAExtraer >= limiteExtraccion) {
      return alert(
        "El monto a extraer es mayor que tu límite de extracción de: " +
          limiteExtraccion +
          "$. Aumentalo para poder extraer esta cantidad."
      );
    } else if (dineroAExtraer > saldoCuenta) {
      return alert(
        "El monto a extraer es mayor que el saldo de tu cuenta de: " +
          saldoCuenta +
          "$."
      );
    } else if (dineroAExtraer % 100 != 0) {
      return alert("Este cajero solo entrega billetes de 100$");
    } else {
      saldoCuenta = saldoCuenta - dineroAExtraer;
      actualizarSaldoEnPantalla();
      var saldoAnterior = saldoCuenta + dineroAExtraer; // solo para mostrar
      return alert(
        "Has extraído: " +
          dineroAExtraer +
          " $\n Saldo Anterior: " +
          saldoAnterior +
          " $" +
          "\n Saldo Actual: " +
          saldoCuenta +
          " $"
      );
    }
  }
}

function depositarDinero() {
  var stringDineroADepositar = prompt("¿Cuánto dinero vas a depositar?");
  dineroADepositar = stringDineroADepositar;
  dineroADepositar = chequeoDeValoresDeEntrada(dineroADepositar)
  if (dineroADepositar) {
    function sumarDineroALaCuenta () { saldoCuenta = dineroADepositar + saldoCuenta;
    }
    sumarDineroALaCuenta ();
    var saldoAnterior = saldoCuenta - dineroADepositar; // solo para la alerta
    actualizarSaldoEnPantalla();
    alert(
      "Has depositado:" +
        dineroADepositar +
        ". \n Saldo Anterior: " +
        saldoAnterior +
        "\n Saldo Actual: " +
        saldoCuenta +
        "."
    );
  }
}

function pagarServicio() {

  var servicioAPagar = prompt(
    "Ingresá el numero del servicio que quieras pagar \n1-Agua\n2-Luz\n3-Internet\n4-Teléfono"
  );
  if (servicioAPagar) {
    switch (servicioAPagar) {
      case "1":
        if (precioAgua <= saldoCuenta) {
          saldoCuenta = saldoCuenta - precioAgua;
          actualizarSaldoEnPantalla();
          var saldoAnterior = saldoCuenta + precioAgua; // solo para mostrar
          return alert(
            "Has pagado: " +
              precioAgua +
              " $\n Saldo Anterior: " +
              saldoAnterior +
              "\n Saldo Actual: " +
              saldoCuenta +
              " $"
          );
        } else {
          alert(
            "No tienes dinero sufieciente en la cuenta. Deposita más dinero para poder pagar"
          );
        }
        break;
      case "2":
        if (precioLuz <= saldoCuenta) {
          saldoCuenta = saldoCuenta - precioLuz;
          actualizarSaldoEnPantalla();
          var saldoAnterior = saldoCuenta + precioLuz;
          return alert(
            "Has pagado: " +
              precioLuz +
              " $\n Saldo Anterior: " +
              saldoAnterior +
              "\n Saldo Actual: " +
              saldoCuenta +
              " $"
          );
        } else {
          alert(
            "No tienes dinero sufieciente en la cuenta. Deposita más dinero para poder pagar"
          );
        }
        break;
      case "3":
        if (precioInternet <= saldoCuenta) {
          saldoCuenta = saldoCuenta - precioInternet;
          actualizarSaldoEnPantalla();
          var saldoAnterior = saldoCuenta + precioInternet;
          return alert(
            "Has pagado: " +
              precioInternet +
              " $\n Saldo Anterior: " +
              saldoAnterior +
              "\n Saldo Actual: " +
              saldoCuenta +
              " $"
          );
        } else {
          alert(
            "No tienes dinero sufieciente en la cuenta. Deposita más dinero para poder pagar"
          );
        }
        break;
      case "4":
        if (precioTelefono <= saldoCuenta) {
          saldoCuenta = saldoCuenta - precioTelefono;
          actualizarSaldoEnPantalla();
          var saldoAnterior = saldoCuenta + precioTelefono;
          return alert(
            "Has pagado: " +
              precioTelefono +
              " $\n Saldo Anterior: " +
              saldoAnterior +
              "\n Saldo Actual: " +
              saldoCuenta +
              " $"
          );
        } else {
          alert(
            "No tienes dinero sufieciente en la cuenta. Deposita más dinero para poder pagar"
          );
        }
        break;
      default:
        alert("El servicio elegido no existe");
    }
  } else {
    alert("Intenta nuevamente")
  }
}

function transferirDinero() {

    var montoATransferir = prompt("¿Qué monto deseas transferir?");
    montoATransferir = chequeoDeValoresDeEntrada(montoATransferir)

    if(montoATransferir) {
      if (montoATransferir <= saldoCuenta) {
        var cuentaATransferirIngresada = parseInt(prompt("Ingresa el número de cuenta a la cual deseas transferir"));
        if (cuentaATransferirIngresada == cuentaAmigaDos || cuentaATransferirIngresada == cuentaAmigaUno) { 
            saldoCuenta = saldoCuenta - montoATransferir;
            alert("Se ha transferido: " +
            montoATransferir +
            " $\n Cuenta de destino: " +
            cuentaATransferirIngresada);
        } else {
            alert("La cuenta ingresada no es una cuenta amiga. Prueba nuevamente");
        }
      }
      else {
          alert("No puedes transferir esa cantidad de dinero. Monto insuficiente")
      }
      actualizarSaldoEnPantalla();
    } else {
      alert("Intenta nuevamente")
    }
}

function iniciarSesion() {
    var codigoDeSeguridadIngresado = parseInt(prompt("Ingresa tu codigo de seguridad \nPista: es 1234"));
    if (codigoDeSeguridad === codigoDeSeguridadIngresado) {
        alert("Bienvenid@ " + nombreUsuario + " ya puedes comenzar a realizar operaciones.");
    } else {
        alert("Codigo incorecto. Tu dinero ha sido retenido por cuestiones de seguridad");
        saldoCuenta = 0;
        actualizarSaldoEnPantalla();
    }
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
  document.getElementById("nombre").innerHTML = "Bienvenid@ " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
  document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
  document.getElementById("limite-extraccion").innerHTML =
    "Tu límite de extracción es: $" + limiteExtraccion;
}

function chequeoDeValoresDeEntrada (valor) {
  if (valor == '') {
    alert("El numero ingresado es incorrecto")
    return false;
  } else if (valor < 0) {
    alert("El numero ingresado es incorrecto")
    return false;
  }
  return parseInt(valor);
}