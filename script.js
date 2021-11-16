// Numero minimo y maximo a ingresar
const MIN_NUM = 1;
const MAX_NUM = 20;

//Factorial
const BaseFactorial = 1;
const RepeticionFactorial = 2;

// ingreso de números por usuario 
const numero = window.prompt('Ingrese numero entre 1 y 20');
const numeroIngresado = parseInt(numero);

// mensaje enytregado a usuario en caso de ser mayor a 20 el numero ingresado
if (typeof numeroIngresado === 'NaN' || isNaN(numeroIngresado) || numeroIngresado < MIN_NUM || numeroIngresado > MAX_NUM) {
    window.alert('Porfavor, Ingrese Numero entre 1 y 20.');
    throw new Error("Porfavor, Ingrese Numero entre 1 y 20. Stop script!!");
}

// Factorial
const factorial = function (numeroFactorial) {
    let response = BaseFactorial;
    for (let i = RepeticionFactorial; i <= numeroFactorial; i++)
        response = response * i;
    return response;
}

// multiplicacion
const multiplicar = function (factor, coeficiente) {
    return factor * coeficiente;
}
let mensaje = '';

// Resultado multiplicacion 
for (let indexMulti = 1; indexMulti <= numero; indexMulti++) {
    mensaje += `${indexMulti} x ${numero} = ${multiplicar(indexMulti, numero)}\n`;
}

// Resultado factorial
for (let indexFact = 1; indexFact <= numero; indexFact++) {
    mensaje += `Factorial de ${indexFact} es  ${factorial(indexFact)}\n`;
}

// consola y cuadro de alerta
window.console.log(mensaje);
window.alert(mensaje);