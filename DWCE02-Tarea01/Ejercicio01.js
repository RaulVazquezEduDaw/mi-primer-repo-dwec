/**
* 1.1. Ejercicio 1: Calculadora Básica (nivel principiante)
* Objetivo: Introducir variables, tipos de datos, operadores y estructuras condicionales.
* Descripción: Crea un programa en JavaScript que funcione como una calculadora básica. El programa debe:
* 1. Solicitar dos números al usuario.
* 2. Solicitar el tipo de operación que desea realizar: suma, resta, multiplicación o división.
* 3. Utilizar estructura condicional switch para determinar qué operación realizar
* 4. Mostrar el resultado en la consola
*/

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Introduce el primer número: ', (n1) => {
    rl.question('Introduce el segundo número: ', (n2) => {
		rl.question('Introduce el operador (+, -, *, /): ', (op) => {
			console.log(n1, op, n2);
			
			let result = 0.0;
			let num1 = parseFloat(n1);
			let num2 = parseFloat(n2);
			
			switch(op){
				case '+':
					result = num1+num2;
					break;
				case '-':
					result = num1-num2;
					break;
				case '*':
					result = num1*num2;
					break;
				case '/':
					result = num1/num2;
					break;
				default:
					console.error("Operador incorrecto.");
					rl.close();
			}
			
			console.log(`El resultado es: ${result}`);
			rl.close();
		});
	});
});