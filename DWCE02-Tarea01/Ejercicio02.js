/**
 * 1.2. Ejercicio 2: Adivina el Número (nivel intermedio)
 * Objetivo: Implementar estructuras iterativas para controlar el flujo del programa.
 * Descripción: Desarrolla un juego donde el programa genera un número aleatorio entre 1 y 100, y el usuario debe adivinarlo. El programa:
 * 1. Genera un número aleatorio entre 0 y 1 → Math.random()
 * 2. Solicita al usuario que introduzca un número.
 * 3. Usa una estructura condicional if-else para informar si el número ingresado es mayor o menor que el generado. Informa también el número generado e ingresado coinciden
 * 4. Cierra el programa
*/

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

randomNumber = parseInt(Math.random()*10);
console.log(randomNumber);

rl.question('Introduce un número entre 0 y 1: ', (n1) => {
	let num1 = parseInt(n1);
		
	if (randomNumber === num1){
		console.log('El valor introducido es igual que el generado');
		
	} else if (randomNumber > num1) {
		console.log('El valor introducido es menor que el generado');
		
	} else {
		console.log('El valor introducido es mayor que el generado')
	}
		
	rl.close();
});