/** 
 * 1.3. Procesamiento de datos JSON y bucle avanzado (avanzado)
 * Objetivo: Integrar JSON, bucles avanzados y arrays
 * Descripción: Crea una aplicación que gestione datos de usuarios en formato JSON:
 * 
 * Haz un programa de tres pasos en el que se pida al usuario:
 * 1. Introducir en la consola los datos en JSON de varios usuarios.
 * 2. Convierte el JSON a tipo de objeto Usuario de JavaScript.
 * 3. Permite al usuario buscar por nombre utilizando find().
 * 4. Imprimir por pantalla la información del usuario.
*/

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

async function cargarJSON() {
	const JSON_FILE = './TA3_usuarios.json';
	const fs = require('fs/promises');
	
	try {
		const datosUsuarios = await fs.readFile(JSON_FILE, 'utf-8');
		
		const datos = JSON.parse(datosUsuarios);
		//console.log(datos);
		
		return datos;
	
	} catch (error) {
		console.error('Hubo un error:', error);
	}
}

async function parseJSONToArray(datos){		
	const listaUsuarios = [];
	
	for (const u of datos){
		const usuarioActual = new Usuario(u.nombre, u.edad, u.email);
		listaUsuarios.push(usuarioActual);
		//usuarioActual.mostrarInfo();
	}
	
	return listaUsuarios;
}

function findUser(listaUsuarios,nombre){
	for(const u of listaUsuarios) {
		if(u.nombre === nombre){
			return u;
		}
	}
}

async function main(){
	const readline = require('readline/promises');
	const rl = readline.createInterface({
	    input: process.stdin,
	    output: process.stdout
	});

	let userOption = '';
	do {
		userOption = (await rl.question('Mostrar la información de un usuario por nombre (M) o salir (Q): ')).toUpperCase();
						
		switch (userOption) {
			case 'M':
				listaUsuarios = await parseJSONToArray(await cargarJSON());
				let user = findUser(listaUsuarios, await rl.question('Nombre: '));;
				user != null ? user.mostrarInfo() : console.log("Usuario no encontrado.");
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