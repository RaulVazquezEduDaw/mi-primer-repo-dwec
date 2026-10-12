/** 
 * 1.2. Ejercicio 2: Gestión de Usuarios (Intermedio)
 * Objetivo: Utilizar objetos y funciones para gestionar información de usuarios.
 * Descripción: Desarrolla una aplicación que permita gestionar usuarios:
 * 1. Crea una clase Usuario con un constructor que reciba los datos del usuario.
 * 2. Define un objeto de tipo Usuario con propiedades: nombre, edad y email.
 * 3. Añade un método mostrarInfo() que imprima las propiedades del objeto.
 * 4. Pide por consola si se quiero mostrar la información del usuario (I) o crear un nuevo usuario (C).
*/

// 1. Crea una clase Usuario con un constructor que reciba los datos del usuario.
class Usuario{
	constructor(nombre, edad, email) {
		this.nombre = nombre;
		this.edad = edad;
		this.email = email;
	}
	
	mostrarInfo(){
		console.log(this.nombre, this.edad, this.email);	
	}
}

// 2. Define un objeto de tipo Usuario con propiedades: nombre, edad y email.
//const user = new Usuario(nombre, edad, email);

// 4. Pide por consola si se quiero mostrar la información del usuario (I) o crear un nuevo usuario (C).
async function main(){
	const readline = require('readline/promises');
	const rl = readline.createInterface({
	    input: process.stdin,
	    output: process.stdout
	});
	
	let userOption = '';
	let user = null;
	
	do {
		userOption = (await rl.question('Mostrar la información del usuario (I) o crear un nuevo usuario (C), salir (Q): ')).toUpperCase();
						
		switch (userOption) {
			case 'I':
				user != null ? user.mostrarInfo() : console.log("No hay usuarios.");
				break;
			case 'C':
				user = new Usuario(await rl.question('Nombre: '), await rl.question('Edad: '), await rl.question('e-mail: '));
				break;
			case 'Q':
				console.log('Adios.');
				break;
			default:
				console.log('Opción incorrecta.');
		}
		
	} while (userOption.toUpperCase() != 'Q');
	rl.close();
}

main();