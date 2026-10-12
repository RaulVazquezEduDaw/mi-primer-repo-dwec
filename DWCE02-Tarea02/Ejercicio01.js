/** 
	* 1.1. Ejercicio 1: Gestión de Lista de Compras (Principiante)
	* Objetivo: Introducir arrays, métodos de manipulación de arrays y funciones.
	* Descripción: Crea una aplicación de lista de compras en JavaScript que utilice las siguientes teclas para cada acción:
	* 1. Pulsando la tecla “A” acceder al modo “Añadir productos” y se pide al usuario que introduzca un  producto hasta que Introduzca la palabra "SALIR". Al finalizar se imprime la lista de productos.
	* 2. Pulsando la tecla “D” eliminamos el último producto de la lista.
	* Para realizar lo anterior utiliza los métodos push() y pop()
*/

const readline = require('readline/promises');
const EXIT_WORD = 'SALIR';

async function main() {
	const rl = readline.createInterface({
	    input: process.stdin,
	    output: process.stdout
	});
	
	let userOption = '';
	let listaDeProductos =[];
	
	do {
		userOption = (await rl.question('Añadir (A), eliminar último (D) o salir (SALIR): ')).toUpperCase();
				
		switch (userOption) {
			case 'A':
				await addProducts(rl, listaDeProductos);
				break;
			case 'D':
				daleteLastProduct(listaDeProductos);
		}		
	} while (userOption.toUpperCase() != EXIT_WORD);
	
	if(listaDeProductos.length != 0)
		console.log('Productos registrados:', listaDeProductos);
	else 
		console.log('La lista de productos está vacía.');
	
	console.log('Adios');
	
	rl.close();
}


async function addProducts(rl, listaDeProductos){
	let product = '';

	do {
		product = (await rl.question('Introduce un producto o escribe SALIR para salir del modo añadir:')).toUpperCase();
		
		if(product != EXIT_WORD) listaDeProductos.push(product);
				
	} while (product != EXIT_WORD);
	
	console.log('Abandonaste el modo añadir');
	
	return listaDeProductos;
}

function daleteLastProduct(listaDeProductos){
	listaDeProductos.length != 0 ? listaDeProductos.pop() : console.log('La lista de productos está vacía.');
}

main();