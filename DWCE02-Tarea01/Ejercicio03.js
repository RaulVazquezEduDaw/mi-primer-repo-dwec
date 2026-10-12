/**
 * 1.3. Ejercicio 3: FizzBuzz Personalizado (nivel avanzado)
 * Objetivo: Utilizar diferentes tipos de variables y estructurar correctamente el flujo del programa con múltiples condiciones y bucles.
 * Descripción: Crea una versión personalizada del clásico problema "FizzBuzz":
 * 1. Solicita al usuario ingresar un número máximo y dos divisores.
 * 2. Itera desde 1 hasta n usando un bucle for.
 * 	a. Si el número actual es divisible por el primer número, imprime "Fizz",
 * 	b. Si es divisible por el segundo número imprime "Buzz".
 * 	c. Si es divisible por ambos, imprime "FizzBuzz". Si no, imprime el número.
 * 3. Usa modificadores de acceso para declarar variables de bucle y control de flujo.
*/

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Introduce el número máximo de iteraciones: ', (max) => {
	rl.question('Introduce el primer divisor: ', (div1) => {
		rl.question('Introduce el segundo divisor: ', (div2) => {
			let maximo = parseInt(max);
			let divisor1 = parseInt(div1);
			let divisor2 = parseInt(div2);
									
			for(let i=1; i<=maximo; i++){
				let actual = '';		
				if (i % divisor1 === 0){
					actual = 'Fizz';
				}
				
				if (i % divisor2 === 0){
					actual += 'Buzz';
				}
				
				if (actual === '') {
					console.log(`Ninguno es divisor del número ${i}`);
					
				} else {
					console.log(actual);
				}
			}
		
			rl.close();
		});
	});
});